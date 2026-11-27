import assert from 'node:assert/strict'
import { test } from 'node:test'
import anaphylaxis from '../src/content/algorithms/anaphylaxis.js'
import chestPain from '../src/content/algorithms/chestPain.js'
import stroke from '../src/content/algorithms/stroke.js'
import { drugById } from '../src/content/drugs.js'
import { INFUSIONS } from '../src/content/infusions.js'
import { scoreById } from '../src/content/scores/index.js'
import { addEvent, arrestSummary, isArrestState, startArrest, undoEvent } from '../src/lib/arrest.js'
import { formatClock } from '../src/lib/clock.js'
import { UNITS, doseFromRate, rateFromDose } from '../src/lib/infusion.js'
import { SEPSIS_TASKS, isSepsisState, sepsisSummary, setTask, startSepsis } from '../src/lib/sepsis.js'
import { sectionIds } from './sections.js'

const MIN = 60_000
const T0 = 1_000_000_000

test('reloj', () => {
  assert.equal(formatClock(0), '00:00')
  assert.equal(formatClock(65_999), '01:05')
  assert.equal(formatClock(3 * 3600_000 + 5_000), '3:00:05')
})

test('sepsis: plazos de 1, 3 y 6 horas', () => {
  assert.deepEqual([...new Set(SEPSIS_TASKS.map((t) => t.goal))], [1, 3, 6])
  const state = startSepsis(T0)
  const status = (s, now, id) => sepsisSummary(s, now).tasks.find((t) => t.id === id).status
  assert.equal(status(state, T0 + 60 * MIN, 'antibiotico'), 'pending')
  assert.equal(status(state, T0 + 61 * MIN, 'antibiotico'), 'overdue')
  assert.equal(status(state, T0 + 61 * MIN, 'lactato'), 'pending')
  const onTime = setTask(state, 'antibiotico', 'done', T0 + 40 * MIN)
  assert.equal(status(onTime, T0 + 500 * MIN, 'antibiotico'), 'done')
  const late = setTask(state, 'antibiotico', 'done', T0 + 80 * MIN)
  assert.equal(status(late, T0 + 90 * MIN, 'antibiotico'), 'late')
  assert.equal(status(setTask(late, 'antibiotico', null), T0 + 90 * MIN, 'antibiotico'), 'overdue')
})

test('sepsis: tiempo ya transcurrido, tarea más urgente y cierre', () => {
  let state = startSepsis(T0, 50)
  let summary = sepsisSummary(state, T0)
  assert.equal(summary.elapsed, 50 * MIN)
  assert.equal(summary.next.id, 'antibiotico')
  assert.equal(summary.next.remaining, 10 * MIN)
  for (const t of SEPSIS_TASKS) state = setTask(state, t.id, t.optional ? 'na' : 'done', T0)
  summary = sepsisSummary(state, T0)
  assert.ok(summary.complete)
  assert.equal(summary.next, null)
})

test('paro: ciclos de 2 minutos', () => {
  let state = startArrest(T0)
  assert.equal(arrestSummary(state, T0 + 30_000).cycleRemaining, 90_000)
  assert.ok(arrestSummary(state, T0 + 121_000).cycleRemaining < 0)
  state = addEvent(state, 'check', T0 + 125_000)
  const s = arrestSummary(state, T0 + 135_000)
  assert.equal(s.cycle, 2)
  assert.equal(s.cycleRemaining, 110_000)
})

test('paro: momento de la adrenalina', () => {
  const at = (state, ms) => arrestSummary(state, T0 + ms).adrenaline
  const start = startArrest(T0)
  assert.equal(at(start, 0), 'unknown')
  assert.equal(at(addEvent(start, 'no-desfibrilable', T0), 1000), 'due')
  const shockable = addEvent(start, 'desfibrilable', T0)
  assert.equal(at(shockable, MIN), 'wait')
  assert.equal(at(shockable, 2 * MIN), 'due')
  const given = addEvent(shockable, 'adrenaline', T0 + 2 * MIN)
  assert.equal(at(given, 4 * MIN), 'wait')
  assert.equal(at(given, 5 * MIN), 'due')
  assert.equal(at(given, 7 * MIN + 1000), 'overdue')
})

test('paro: amiodarona tras la 3.ª descarga y segunda dosis', () => {
  let state = addEvent(startArrest(T0), 'desfibrilable', T0)
  const dose = () => arrestSummary(state, T0 + 10 * MIN).amiodarone
  const shock = () => (state = addEvent(state, 'shock', T0))
  shock(); shock()
  assert.equal(dose(), null)
  shock()
  assert.equal(dose(), '300 mg')
  state = addEvent(state, 'amiodarone', T0, '300 mg')
  assert.equal(dose(), null)
  shock(); shock()
  assert.equal(dose(), '150 mg')
  state = addEvent(state, 'amiodarone', T0, '150 mg')
  assert.equal(dose(), null)
  // en ritmo no desfibrilable no se sugiere
  assert.equal(arrestSummary(addEvent(state, 'no-desfibrilable', T0), T0).amiodarone, null)
})

test('paro: el retorno de circulación detiene el reloj y se puede deshacer', () => {
  const state = addEvent(startArrest(T0), 'rosc', T0 + 8 * MIN)
  const s = arrestSummary(state, T0 + 60 * MIN)
  assert.ok(s.finished)
  assert.equal(s.elapsed, 8 * MIN)
  assert.equal(arrestSummary(undoEvent(state), T0 + 60 * MIN).finished, false)
})

test('registros guardados con formato inesperado se descartan', () => {
  for (const bad of [{}, { start: 'ayer' }, { start: 1 }]) {
    assert.ok(!isSepsisState(bad))
    assert.ok(!isArrestState(bad))
  }
  assert.ok(isSepsisState(startSepsis(T0)))
  assert.ok(isArrestState(startArrest(T0)))
})

test('infusiones: valores conocidos', () => {
  const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-9, `${a} ≠ ${b}`)
  // noradrenalina 0,1 mcg/kg/min, 70 kg, 16 mcg/mL
  close(rateFromDose({ unit: 'mcg/kg/min', dose: 0.1, weight: 70, amount: 4, volume: 250 }), 26.25)
  // vasopresina 0,03 U/min, 0,2 U/mL
  close(rateFromDose({ unit: 'U/min', dose: 0.03, weight: 1, amount: 20, volume: 100 }), 9)
  // heparina 18 U/kg/h, 70 kg, 100 U/mL
  close(rateFromDose({ unit: 'U/kg/h', dose: 18, weight: 70, amount: 25000, volume: 250 }), 12.6)
  // midazolam 0,05 mg/kg/h, 80 kg, 1 mg/mL
  close(rateFromDose({ unit: 'mg/kg/h', dose: 0.05, weight: 80, amount: 100, volume: 100 }), 4)
  // nitroglicerina 10 mcg/min, 200 mcg/mL
  close(rateFromDose({ unit: 'mcg/min', dose: 10, weight: 1, amount: 50, volume: 250 }), 3)
})

test('infusiones: ida y vuelta en todas las unidades', () => {
  for (const unit of Object.keys(UNITS)) {
    const input = { unit, weight: 63, amount: 7, volume: 120 }
    const rate = rateFromDose({ ...input, dose: 1.7 })
    assert.ok(Math.abs(doseFromRate({ ...input, rate }) - 1.7) < 1e-9, unit)
  }
})

test('infusiones: cada preset es coherente', () => {
  for (const i of INFUSIONS) {
    assert.ok(UNITS[i.unit], i.id)
    assert.ok(drugById[i.drug], i.id)
    assert.ok(i.range[0] > 0 && i.range[0] <= i.range[1], i.id)
    assert.equal(Boolean(i.amount), Boolean(i.volume), i.id)
  }
})

const ALGORITHMS = [chestPain, stroke, anaphylaxis]

// Todos los recorridos posibles desde el inicio (falla si hay un ciclo).
function paths(algorithm, id = algorithm.start, seen = []) {
  assert.ok(!seen.includes(id), `${algorithm.id}: ciclo en ${id}`)
  const node = algorithm.nodes[id]
  assert.ok(node, `${algorithm.id}: falta el nodo ${id}`)
  const here = [...seen, id]
  return node.options ? node.options.flatMap(([, next]) => paths(algorithm, next, here)) : [here]
}

test('algoritmos: todos los recorridos terminan y no hay nodos huérfanos', () => {
  for (const a of ALGORITHMS) {
    const reached = new Set(paths(a).flat())
    assert.deepEqual([...reached].sort(), Object.keys(a.nodes).sort(), a.id)
    for (const [id, n] of Object.entries(a.nodes)) {
      assert.ok(n.title, `${a.id}.${id}`)
      if (!n.options) assert.ok(n.actions?.length, `${a.id}.${id}: final sin conducta`)
      else assert.equal(new Set(n.options.map(([l]) => l)).size, n.options.length)
      for (const s of n.links ?? []) assert.ok(sectionIds.has(s), `${a.id}.${id} → ${s}`)
      for (const d of n.drugs ?? []) assert.ok(drugById[d], `${a.id}.${id} → ${d}`)
      for (const s of n.scores ?? []) assert.ok(scoreById[s], `${a.id}.${id} → ${s}`)
    }
  }
})

test('algoritmos: reglas de seguridad', () => {
  const antithrombotic = (id) => drugById[id].group === 'antitromboticos' || drugById[id].tags.includes('fibrinolitico')
  const drugsOn = (a, path) => path.flatMap((id) => a.nodes[id].drugs ?? [])
  // dolor torácico: la disección se pregunta antes de cualquier antitrombótico
  for (const path of paths(chestPain)) {
    const first = path.findIndex((id) => (chestPain.nodes[id].drugs ?? []).some(antithrombotic))
    if (first > -1) assert.ok(path.indexOf('diseccion') < first, path.join(' > '))
    if (path.includes('diseccionSi')) assert.ok(!drugsOn(chestPain, path).some(antithrombotic))
  }
  // ACV: con hemorragia no hay antitrombóticos; la alteplasa exige TAC, ventana y contraindicaciones
  for (const path of paths(stroke)) {
    const drugs = drugsOn(stroke, path)
    if (path.includes('hemorragia') || path.includes('subaracnoidea')) assert.ok(!drugs.some(antithrombotic), path.join(' > '))
    if (drugs.includes('alteplasa')) for (const step of ['tac', 'ventana', 'contraindicaciones']) assert.ok(path.includes(step))
    if (path.includes('trombolisis')) assert.ok(!drugs.includes('aspirina'))
  }
  // anafilaxia confirmada: la adrenalina va antes que antihistamínicos y corticoides
  for (const path of paths(anaphylaxis).filter((p) => !p.includes('observar'))) {
    const drugs = drugsOn(anaphylaxis, path)
    assert.equal(drugs[0], 'adrenalina', path.join(' > '))
  }
})

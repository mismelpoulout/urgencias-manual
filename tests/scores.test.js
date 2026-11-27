import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { drugById } from '../src/content/drugs.js'
import { SCORES, scoreById } from '../src/content/scores/index.js'
import { CRITICAL, HIGH, LOW, MODERATE, emptyValues, evaluate } from '../src/lib/scores.js'
import { rng } from '../src/lib/random.js'
import { sectionIds } from './sections.js'

// Evalúa un score: las casillas no indicadas quedan sin marcar.
const run = (id, values) => {
  const score = scoreById[id]
  const outcome = evaluate(score, { ...emptyValues(score), ...values })
  assert.equal(outcome.missing, undefined, `${id}: faltan ${outcome.missing}`)
  return outcome
}
const checks = (...keys) => Object.fromEntries(keys.map((k) => [k, true]))

test('cada score del anexo tiene calculadora, en orden', () => {
  const annex = readFileSync(new URL('../src/content/chapters/Anexo.jsx', import.meta.url), 'utf8')
  const used = [...annex.matchAll(/<ScoreCalculator id="([\w-]+)"/g)].map((m) => m[1])
  assert.deepEqual(used, SCORES.map((s) => s.id))
  assert.equal(used.length, 44)
})

test('los accesos a capítulos y fármacos existen', () => {
  for (const s of SCORES) {
    assert.ok(s.chapters.length, `${s.id} sin capítulo`)
    for (const id of s.chapters) assert.ok(sectionIds.has(id), `${s.id} → ${id}`)
    for (const id of s.drugs) assert.ok(drugById[id], `${s.id} → ${id}`)
  }
})

test('cualquier combinación válida produce un resultado completo', () => {
  for (const score of SCORES) {
    const random = rng(score.id.length * 97)
    for (let n = 0; n < 600; n++) {
      const values = Object.fromEntries(
        score.items.map((item) => {
          if (item.type === 'check') return [item.key, random() < 0.5]
          if (item.type === 'select') return [item.key, String(Math.floor(random() * item.options.length))]
          // incluye con frecuencia los extremos del rango
          const r = random()
          const x = r < 0.1 ? item.min : r < 0.2 ? item.max : item.min + random() * (item.max - item.min)
          return [item.key, String(x)]
        }),
      )
      const o = evaluate(score, values)
      assert.ok(Number.isFinite(o.total), `${score.id}: total`)
      assert.ok([LOW, MODERATE, HIGH, CRITICAL].includes(o.level), `${score.id}: gravedad`)
      assert.ok(o.title && o.advice && o.display, `${score.id}: textos`)
      assert.ok(!/NaN|undefined/.test(o.display + o.title), `${score.id}: ${o.display} ${o.title}`)
      if (score.max !== undefined) assert.ok(o.total <= score.max + 1e-9, `${score.id}: ${o.total} > ${score.max}`)
      for (const id of o.drugs) assert.ok(drugById[id], `${score.id} → ${id}`)
    }
  }
})

test('no se calcula con datos sin responder o fuera de rango', () => {
  for (const score of SCORES.filter((s) => s.items.some((i) => i.type !== 'check'))) {
    assert.ok(evaluate(score, emptyValues(score)).missing?.length, score.id)
  }
  const values = { gcs: '2', pas: '120', fr: '16' }
  assert.ok(evaluate(scoreById.rts, values).missing)
  assert.ok(evaluate(scoreById.rts, { ...values, gcs: '' }).missing)
})

test('puntajes máximos', () => {
  const all = (id) => run(id, Object.fromEntries(scoreById[id].items.map((i) => [i.key, true]))).total
  assert.equal(all('alvarado'), 10)
  assert.equal(all('ranson'), 11)
  assert.equal(all('qsofa'), 3)
  assert.equal(all('curb65'), 5)
  assert.equal(all('wells-tep'), 12.5)
})

test('Glasgow, CHA₂DS₂-VASc, Wells y Child-Pugh', () => {
  assert.equal(run('glasgow', { ocular: '0', verbal: '0', motora: '0' }).total, 15)
  assert.equal(run('glasgow', { ocular: '3', verbal: '4', motora: '5' }).level, CRITICAL)
  assert.equal(run('cha2ds2vasc', { sexo: '1', edad: '0' }).level, LOW)
  assert.equal(run('cha2ds2vasc', { sexo: '0', edad: '0', hta: true }).level, MODERATE)
  assert.equal(run('cha2ds2vasc', { sexo: '0', edad: '2' }).level, HIGH)
  assert.equal(run('wells-tvp', { alternativo: true }).total, -2)
  assert.equal(run('wells-tvp', checks('cancer', 'dolor')).level, MODERATE)
  assert.equal(run('wells-tvp', checks('cancer', 'dolor', 'pierna')).level, HIGH)
  assert.match(run('childpugh', { bili: '1', alb: '4', inr: '1', ascitis: '0', encef: '0' }).display, /Clase A · 5/)
  assert.match(run('childpugh', { bili: '4', alb: '2', inr: '3', ascitis: '2', encef: '2' }).display, /Clase C · 15/)
})

test('MELD-Na', () => {
  const normal = { crea: '1', bili: '1', inr: '1', na: '137' }
  assert.equal(run('meld', normal).total, 6)
  assert.equal(run('meld', { crea: '2', bili: '3', inr: '2', na: '130' }).total, 28)
  assert.equal(run('meld', { crea: '15', bili: '40', inr: '8', na: '120' }).total, 40)
})

test('APACHE II: valores normales puntúan 0 y la falla renal aguda duplica la creatinina', () => {
  const normal = {
    temp: '37', pam: '90', fc: '80', fr: '16', fio2: '0', oxi: '90', ph: '7.4', na: '140', k: '4',
    crea: '1', hto: '40', gb: '8', gcs: '15', edad: '30', cronica: '0',
  }
  assert.equal(run('apache2', normal).total, 0)
  assert.equal(run('apache2', { ...normal, crea: '2.5' }).total, 3)
  assert.equal(run('apache2', { ...normal, crea: '2.5', ira: true }).total, 6)
})

test('trauma: RTS, ISS y columna cervical', () => {
  assert.equal(run('rts', { gcs: '15', pas: '120', fr: '16' }).total.toFixed(2), '7.84')
  const regions = { cabeza: '4', cara: '0', torax: '3', abdomen: '2', extremidades: '1', externa: '0' }
  assert.equal(run('iss', regions).total, 29)
  assert.equal(run('iss', { ...regions, cara: '6' }).total, 75)
  assert.equal(run('cspine', { aplica: '0' }).display, 'Requiere imagen')
  assert.equal(run('cspine', { aplica: '0', bajo: true, rota: true }).display, 'No requiere imagen')
  assert.equal(run('cspine', { aplica: '0', bajo: true, rota: true, edad: true }).display, 'Requiere imagen')
  const nexus = { dolor: '0', deficit: '0', alerta: '0', intox: '0', distractora: '0' }
  assert.equal(run('nexus', nexus).display, 'No requiere imagen')
  assert.equal(run('nexus', { ...nexus, intox: '1' }).display, 'Requiere imagen')
})

test('NEWS2: parámetros normales, un parámetro extremo y escala 2', () => {
  const normal = { fr: '16', escala: '0', o2: '0', sat: '98', pas: '120', fc: '70', conciencia: '0', temp: '37' }
  assert.equal(run('news2', normal).total, 0)
  assert.equal(run('news2', { ...normal, fr: '28' }).level, MODERATE)
  assert.equal(run('news2', { ...normal, escala: '1', sat: '90' }).total, 0)
  assert.equal(run('news2', { ...normal, escala: '1', o2: '1', sat: '98' }).total, 5)
})

test('PSI, CAM y C-SSRS', () => {
  assert.match(run('psi', { sexo: '0', edad: '40' }).display, /Clase I /)
  assert.match(run('psi', { sexo: '1', edad: '70' }).display, /Clase II · 60/)
  assert.equal(run('cam', checks('agudo', 'atencion')).display, 'CAM negativo')
  assert.equal(run('cam', checks('agudo', 'atencion', 'conciencia')).display, 'CAM positivo')
  assert.equal(run('cssrs', { q5: true }).level, CRITICAL)
})

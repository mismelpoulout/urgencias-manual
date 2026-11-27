import assert from 'node:assert/strict'
import { test } from 'node:test'
import { COMBOS } from '../src/content/combos.js'
import { DRUGS, DRUG_GROUPS, drugById } from '../src/content/drugs.js'
import { AVOID, CAUTION, CONTRA, INTERACTIONS, IV_ANY, IV_INCOMPATIBLE, USUAL } from '../src/content/interactions.js'
import { checkMix, checkPair } from '../src/lib/mix.js'
import { sectionIds } from './sections.js'

test('al menos 10 fármacos por grupo, sin repetidos y con ficha completa', () => {
  for (const g of DRUG_GROUPS) assert.ok(g.drugs.length >= 10, `${g.id}: ${g.drugs.length}`)
  assert.equal(new Set(DRUGS.map((d) => d.id)).size, DRUGS.length)
  for (const d of DRUGS) assert.ok(d.name && d.dose && d.use && d.caution, d.id)
})

test('cada regla apunta a fármacos o etiquetas existentes y se aplica a alguna pareja', () => {
  const matching = (selector) => DRUGS.filter((d) => selector === IV_ANY || d.id === selector || d.tags.includes(selector))
  for (const [a, b] of [...INTERACTIONS, ...IV_INCOMPATIBLE]) {
    const pairs = matching(a).some((x) => matching(b).some((y) => x.id !== y.id))
    assert.ok(pairs, `regla sin efecto: ${a} + ${b}`)
  }
})

test('el resultado no depende del orden y nunca mezcla "habitual" con una advertencia grave', () => {
  DRUGS.forEach((a, i) => {
    for (const b of DRUGS.slice(i + 1)) {
      const x = checkPair(a.id, b.id)
      const y = checkPair(b.id, a.id)
      assert.equal(x.level, y.level, `${a.id}+${b.id}`)
      assert.equal(x.iv.status, y.iv.status, `${a.id}+${b.id}`)
      if (x.level >= AVOID) assert.ok(x.rules.every((r) => r.level !== USUAL), `${a.id}+${b.id}`)
      assert.ok(['incompatible', 'unverified', 'not-iv'].includes(x.iv.status))
    }
  })
})

test('asociaciones conocidas', () => {
  const level = (a, b) => checkPair(a, b).level
  assert.equal(level('sildenafilo', 'nitroglicerina'), CONTRA)
  assert.equal(level('verapamilo', 'metoprolol'), CONTRA)
  assert.equal(level('azul-metileno', 'sertralina'), CONTRA)
  assert.equal(level('ketorolaco', 'ibuprofeno'), AVOID)
  assert.equal(level('tramadol', 'sertralina'), AVOID)
  assert.equal(level('warfarina', 'ketorolaco'), AVOID)
  assert.equal(level('acido-valproico', 'meropenem'), AVOID)
  assert.equal(level('morfina', 'midazolam'), CAUTION)
  assert.equal(level('azitromicina', 'ondansetron'), CAUTION)
  assert.equal(level('omeprazol', 'clopidogrel'), CAUTION)
  assert.equal(level('paracetamol', 'ibuprofeno'), USUAL)
  assert.equal(level('rocuronio', 'sugammadex'), USUAL)
  assert.equal(level('atracurio', 'sugammadex'), AVOID)
  assert.equal(level('ceftriaxona', 'gluconato-calcio'), CAUTION)
})

test('compatibilidad intravenosa: solo incompatible, no verificada o no aplica', () => {
  const iv = (a, b) => checkPair(a, b).iv.status
  assert.equal(iv('ceftriaxona', 'gluconato-calcio'), 'incompatible')
  assert.equal(iv('ceftriaxona', 'ringer'), 'incompatible')
  assert.equal(iv('fenitoina', 'morfina'), 'incompatible')
  assert.equal(iv('bicarbonato', 'noradrenalina'), 'incompatible')
  assert.equal(iv('morfina', 'ondansetron'), 'unverified')
  assert.equal(iv('ibuprofeno', 'morfina'), 'not-iv')
})

test('sin datos no se declara segura una pareja', () => {
  const pair = checkPair('lactulosa', 'loratadina')
  assert.equal(pair.level, 0)
  assert.deepEqual(pair.rules, [])
})

test('las combinaciones propuestas no contienen asociaciones a evitar', () => {
  for (const combo of COMBOS) {
    for (const id of combo.drugs) assert.ok(drugById[id], `${combo.id} → ${id}`)
    if (combo.section) assert.ok(sectionIds.has(combo.section), `${combo.id} → ${combo.section}`)
    for (const p of checkMix(combo.drugs)) assert.ok(p.level < AVOID, `${combo.id}: ${p.a.id}+${p.b.id}`)
  }
})

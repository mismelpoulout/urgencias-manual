import assert from 'node:assert/strict'
import { test } from 'node:test'
import { SODIUM, WEIGHT, formatNumber, parseInRange } from '../src/lib/format.js'
import { sirDoses } from '../src/lib/sir.js'
import { correctionLimit, sodiumChange } from '../src/lib/sodium.js'

const row = (rows, drug) => rows.find((r) => r[0].startsWith(drug))

test('los datos fuera de rango no se ajustan: se rechazan', () => {
  for (const bad of ['', ' ', 'abc', '0', '7', '19.9', '250.1', '300', '-80']) {
    assert.equal(parseInRange(bad, WEIGHT), null, `peso "${bad}"`)
  }
  for (const bad of ['', '1', '89', '191', '1180', '-118']) assert.equal(parseInRange(bad, SODIUM), null, `Na "${bad}"`)
  assert.equal(parseInRange('20', WEIGHT), 20)
  assert.equal(parseInRange('250', WEIGHT), 250)
  assert.equal(parseInRange('70.5', WEIGHT), 70.5)
  assert.equal(parseInRange('118', SODIUM), 118)
})

test('dosis SIR para 70 kg estable', () => {
  const rows = sirDoses(70, false)
  const expected = {
    Etomidato: '21 mg',
    Ketamina: '70-140 mg',
    Propofol: '70-140 mg',
    Midazolam: '7-21 mg',
    Fentanilo: '70-210 mcg',
    Succinilcolina: '105 mg',
    Rocuronio: '84 mg',
    Sugammadex: '1.120 mg',
  }
  for (const [drug, dose] of Object.entries(expected)) assert.equal(row(rows, drug)[2], dose, drug)
})

test('en shock se reducen los inductores y no cambian los bloqueadores', () => {
  const stable = sirDoses(70, false)
  const shock = sirDoses(70, true)
  assert.deepEqual(row(shock, 'Midazolam').slice(1, 3), ['0,05-0,15 mg/kg', '3,5-10,5 mg'])
  assert.equal(row(shock, 'Ketamina')[2], '35-70 mg')
  assert.equal(row(shock, 'Propofol')[2], '35-70 mg')
  assert.equal(row(shock, 'Etomidato')[1], '0,15-0,2 mg/kg')
  for (const drug of ['Succinilcolina', 'Rocuronio', 'Sugammadex']) assert.equal(row(shock, drug)[2], row(stable, drug)[2], drug)
})

test('límite de corrección del sodio', () => {
  assert.equal(correctionLimit(118, false), 8)
  assert.equal(correctionLimit(120, false), 8)
  assert.equal(correctionLimit(121, false), 10)
  assert.equal(correctionLimit(128, true), 8)
})

test('Adrogué-Madias: 70 kg, hombre, Na 118', () => {
  const tbw = 70 * 0.6
  assert.equal(formatNumber(sodiumChange(513, 118, tbw), 2), '9,19')
  assert.equal(formatNumber(sodiumChange(0, 118, tbw), 2), '-2,74')
})

test('un cero negativo se muestra como cero', () => {
  assert.equal(formatNumber(-0.01, 1), '0')
})

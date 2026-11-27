import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { test } from 'node:test'
import { anchorId, findMatches, normalize, toTerms } from '../src/lib/text.js'

const found = (text, query) => findMatches(text, toTerms(query)).map(([a, b]) => text.slice(a, b))

test('se puede buscar sin escribir sub ni superíndices', () => {
  assert.deepEqual(found('Medir Na⁺ y K⁺', 'na+'), ['Na⁺'])
  assert.deepEqual(found('Medir Na⁺ y K⁺', 'K+'), ['K⁺'])
  assert.deepEqual(found('SatO₂ 92% y PaCO₂', 'sato2 co2'), ['SatO₂', 'CO₂'])
  assert.deepEqual(found('SatO₂ 92%', 'SatO₂'), ['SatO₂'])
  assert.deepEqual(found('HCO₃⁻ bajo', 'hco3-'), ['HCO₃⁻'])
})

test('ignora tildes y mayúsculas', () => {
  assert.deepEqual(found('Fibrilación auricular', 'FIBRILACION'), ['Fibrilación'])
})

test('normalizar no corre las posiciones en el texto de los capítulos', () => {
  const dir = new URL('../src/content/chapters/', import.meta.url)
  for (const file of readdirSync(dir)) {
    const text = readFileSync(new URL(file, dir), 'utf8').normalize('NFC')
    assert.equal(normalize(text).length, text.length, file)
  }
})

test('un ancla mal codificada no lanza errores', () => {
  assert.equal(anchorId('#c13-s1'), 'c13-s1')
  assert.equal(anchorId(''), '')
  assert.equal(anchorId('#%'), '')
  assert.equal(anchorId('#c13-s1%E0%A4'), '')
})

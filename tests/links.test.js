import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { test } from 'node:test'
import { drugById } from '../src/content/drugs.js'
import { scoreById } from '../src/content/scores/index.js'
import { sectionIds } from './sections.js'

const dir = new URL('../src/content/chapters/', import.meta.url)
const sources = readdirSync(dir).map((file) => [file, readFileSync(new URL(file, dir), 'utf8')])

// Identificadores escritos en listas como drugs={['a', 'b']} (Connections) o drugs: ['a'] (fichas).
const listed = (source, key) =>
  [...source.matchAll(new RegExp(`\\b${key}(?:=\\{|: )\\[([^\\]]*)\\]`, 'g'))].flatMap((m) => [...m[1].matchAll(/'([\w-]+)'/g)].map((x) => x[1]))

test('las conexiones de los capítulos apuntan a fármacos, scores y secciones que existen', () => {
  let total = 0
  for (const [file, source] of sources) {
    for (const id of listed(source, 'drugs')) assert.ok(drugById[id], `${file}: fármaco ${id}`)
    for (const id of listed(source, 'scores')) assert.ok(scoreById[id], `${file}: score ${id}`)
    for (const key of ['imaging', 'ecg', 'links', 'to']) {
      for (const id of listed(source, key)) {
        assert.ok(sectionIds.has(id), `${file}: sección ${id}`)
        total++
      }
    }
  }
  assert.ok(total > 100, `solo se revisaron ${total} enlaces`)
})

test('politrauma e intoxicaciones conectan con farmacología, imagen y electrocardiograma', () => {
  for (const file of ['Capitulo24.jsx', 'Capitulo25.jsx']) {
    const source = sources.find(([name]) => name === file)[1]
    for (const key of ['drugs', 'imaging', 'ecg']) assert.ok(listed(source, key).length, `${file} sin ${key}`)
  }
})

import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { test } from 'node:test'
import { sectionIds } from './sections.js'

// index.js importa componentes JSX, así que se lee como texto.
const index = readFileSync(new URL('../src/content/index.js', import.meta.url), 'utf8')
const chapters = [...index.matchAll(/id: "(cap-\w+)",\s*n: "(\w+)"/g)].map(([, id, n]) => ({ id, n }))

test('capítulos numerados en orden de lectura y el atlas de imágenes al final', () => {
  const numbers = chapters.filter((c) => c.n !== 'A').map((c) => Number(c.n))
  assert.deepEqual(numbers, numbers.map((_, i) => i + 1))
  assert.equal(chapters.at(-1).id, 'cap-20')
  assert.deepEqual(chapters.slice(-3, -1).map((c) => c.id), ['cap-24', 'cap-25'])
})

test('el índice y los capítulos tienen las mismas secciones', () => {
  const declared = [...index.matchAll(/\{ id: "(c[\w-]+)", title:/g)].map((m) => m[1])
  const written = [...sectionIds].filter((id) => !id.startsWith('c22-'))
  for (const id of declared.filter((id) => !id.startsWith('c22-'))) assert.ok(sectionIds.has(id), `índice sin sección: ${id}`)
  for (const id of written) assert.ok(declared.includes(id), `sección fuera del índice: ${id}`)
})

test('los pies de capítulo citan su número actual y no quedan frases cortadas', () => {
  const numberOf = Object.fromEntries(chapters.map((c) => [c.id, c.n]))
  const dir = new URL('../src/content/chapters/', import.meta.url)
  for (const file of readdirSync(dir)) {
    const text = readFileSync(new URL(file, dir), 'utf8')
    assert.ok(!text.includes('<li></li>'), `${file}: lista vacía`)
    for (const [, cited] of text.matchAll(/(?:Manual de bolsillo — |Fin del )Capítulo (\d+)/g)) {
      assert.equal(cited, numberOf[`cap-${Number(file.match(/\d+/)[0])}`], file)
    }
  }
})

test('el resumen enlaza a las secciones en vez de escribir números de capítulo', () => {
  const summary = readFileSync(new URL('../src/content/chapters/Capitulo21.jsx', import.meta.url), 'utf8')
  assert.ok(!/\(Cap\. \d/.test(summary))
})

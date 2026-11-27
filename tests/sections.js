import { readFileSync, readdirSync } from 'node:fs'
import { DRUG_GROUPS } from '../src/content/drugs.js'

const dir = new URL('../src/content/chapters/', import.meta.url)

// Identificadores de todas las secciones del libro (las del vademécum se generan desde los datos).
export const sectionIds = new Set([
  ...readdirSync(dir).flatMap((file) =>
    [...readFileSync(new URL(file, dir), 'utf8').matchAll(/<Section\s+id="([\w-]+)"/g)].map((m) => m[1]),
  ),
  ...DRUG_GROUPS.map((g) => `c22-${g.id}`),
])

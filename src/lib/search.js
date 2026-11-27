import { chapters } from '../content/index.js'
import { normalize, toTerms } from './text.js'

export const MAX_RESULTS = 40

const BLOCKS = new Set(['P', 'LI', 'UL', 'OL', 'H1', 'H2', 'H3', 'H4', 'DIV', 'TABLE', 'THEAD', 'TBODY', 'TR', 'TD', 'TH', 'FIGURE', 'FIGCAPTION', 'ARTICLE', 'B'])

// Texto de un elemento separando los bloques con espacios; omite lo marcado como no indexable.
function textOf(node) {
  if (node.nodeType === Node.TEXT_NODE) return node.nodeValue
  if (node.nodeType !== Node.ELEMENT_NODE || node.matches('[data-noindex]')) return ''
  const text = Array.from(node.childNodes, textOf).join('')
  return BLOCKS.has(node.tagName.toUpperCase()) ? ` ${text} ` : text
}

let index = null

// El índice se construye con el texto ya renderizado, en la primera búsqueda.
function buildIndex() {
  const entries = []
  for (const chapter of chapters) {
    const el = document.getElementById(chapter.id)
    if (!el) return []
    const label = chapter.n === 'A' ? 'Anexo' : `Capítulo ${chapter.n}`
    const intro = []
    for (const child of el.children) {
      if (child.classList.contains('sec') || child.tagName === 'NAV') break
      if (child.tagName !== 'H1') intro.push(textOf(child))
    }
    entries.push({ id: chapter.id, chapter, label, title: chapter.title, text: intro.join(' ') })
    for (const section of chapter.sections) {
      const node = document.getElementById(section.id)
      entries.push({ id: section.id, chapter, label, title: section.title, text: textOf(node) })
    }
  }
  return entries.map((e) => {
    const text = e.text.replace(/\s+/g, ' ').trim()
    return { ...e, text, normTitle: normalize(e.title), normText: normalize(text) }
  })
}

export function search(query) {
  const terms = toTerms(query)
  if (!terms.length) return []
  if (!index?.length) index = buildIndex()
  const results = []
  for (const entry of index) {
    let score = 0
    const matchesAll = terms.every((term) => {
      const inTitle = entry.normTitle.includes(term)
      let count = 0
      for (let p = entry.normText.indexOf(term); p > -1 && count < 50; p = entry.normText.indexOf(term, p + 1)) count++
      score += (inTitle ? 40 : 0) + Math.min(count, 20) + (entry.normTitle.startsWith(term) ? 15 : 0)
      return inTitle || count > 0
    })
    if (matchesAll) results.push({ entry, score })
  }
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RESULTS)
    .map((r) => r.entry)
}

export function snippet(entry, terms) {
  const positions = terms.map((t) => entry.normText.indexOf(t)).filter((p) => p > -1)
  const start = Math.max(0, (positions.length ? Math.min(...positions) : 0) - 70)
  return `${start ? '…' : ''}${entry.text.slice(start, start + 200)}…`
}

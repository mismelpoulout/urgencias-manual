import { formatNumber, parseInRange } from './format.js'

// Gravedad de un resultado
export const LOW = 0
export const MODERATE = 1
export const HIGH = 2
export const CRITICAL = 3

// Tipos de dato que pide un score
export const yes = (key, label, points = 1) => ({ type: 'check', key, label, points })
export const select = (key, label, options) => ({ type: 'select', key, label, options }) // [texto, puntos]
export const number = (key, label, min, max, points) => ({ type: 'number', key, label, min, max, points })

// Escala 0..n donde cada opción vale su posición (o los puntos indicados)
export const scale = (key, label, texts, points) =>
  select(key, label, texts.map((t, i) => [t, points ? points[i] : i]))

// Interpretación por tramos: [máximo incluido, gravedad, título, conducta]
export const bands = (...rows) => (total) => {
  const [, level, title, advice] = rows.find(([max]) => total <= max)
  return { level, title, advice }
}

export const emptyValues = (score) =>
  Object.fromEntries(score.items.map((i) => [i.key, i.type === 'check' ? false : '']))

// Calcula el score. Si falta o es inválido algún dato obligatorio devuelve { missing }:
// nunca se completa un valor que el usuario no ingresó.
export function evaluate(score, values) {
  const points = {}
  const raw = {}
  const missing = []
  for (const item of score.items) {
    const value = values[item.key]
    if (item.type === 'check') {
      raw[item.key] = Boolean(value)
      points[item.key] = value ? item.points : 0
    } else if (item.type === 'select') {
      const option = value === '' || value === undefined ? undefined : item.options[Number(value)]
      if (!option) missing.push(item.label)
      else {
        raw[item.key] = Number(value)
        points[item.key] = option[1]
      }
    } else {
      const x = parseInRange(value ?? '', item)
      if (x === null) missing.push(`${item.label} (${formatNumber(item.min, 2)} a ${formatNumber(item.max, 2)})`)
      else raw[item.key] = x
    }
  }
  if (missing.length) return { missing }

  for (const item of score.items) {
    if (item.type === 'number') points[item.key] = item.points ? item.points(raw[item.key], raw) : raw[item.key]
  }
  const total = score.compute ? score.compute(points, raw) : Object.values(points).reduce((a, b) => a + b, 0)
  const result = score.result(total, raw, points)
  return {
    total,
    display: result.display ?? `${formatNumber(total, 2)}${score.max === undefined ? '' : ` de ${formatNumber(score.max, 2)}`} puntos`,
    drugs: score.drugs ?? [],
    ...result,
  }
}

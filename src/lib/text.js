// Minúsculas y sin tildes, para comparar términos de búsqueda.
export const normalize = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export const toTerms = (query) =>
  normalize(query)
    .split(/\s+/)
    .filter((t) => t.length > 1)

// Rangos [inicio, fin] de cada coincidencia, ordenados y sin solaparse.
export function findMatches(text, terms) {
  const n = normalize(text)
  const all = []
  for (const t of terms) {
    for (let p = n.indexOf(t); p > -1; p = n.indexOf(t, p + 1)) all.push([p, p + t.length])
  }
  all.sort((a, b) => a[0] - b[0])
  let end = 0
  return all.filter(([a, b]) => {
    if (a < end) return false
    end = b
    return true
  })
}

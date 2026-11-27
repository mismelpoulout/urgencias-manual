// Subíndices y superíndices que no se pueden escribir con el teclado: Na⁺ → Na+, SatO₂ → SatO2.
// Cada uno se cambia por un solo carácter, así las posiciones de las coincidencias no se corren.
const SCRIPTS = '⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻₀₁₂₃₄₅₆₇₈₉'
const PLAIN = '0123456789+-0123456789'

// Minúsculas, sin tildes y sin sub/superíndices, para comparar términos de búsqueda.
export const normalize = (s) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[⁰¹²³⁴-⁹⁺⁻₀-₉]/g, (c) => PLAIN[SCRIPTS.indexOf(c)])
    .toLowerCase()

export const toTerms = (query) =>
  normalize(query)
    .split(/\s+/)
    .filter((t) => t.length > 1)

// Ancla de la URL sin "#". Una URL mal codificada no debe romper la página.
export function anchorId(hash) {
  try {
    return decodeURIComponent(hash.slice(1))
  } catch {
    return ''
  }
}

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

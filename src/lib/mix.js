import { drugById } from '../content/drugs.js'
import { AVOID, CAUTION, DUPLICITY_GROUPS, INTERACTIONS, IV_ANY, IV_INCOMPATIBLE } from '../content/interactions.js'

const matches = (drug, selector) => selector === IV_ANY || drug.id === selector || drug.tags.includes(selector)
const applies = (a, b, x, y) => (matches(a, x) && matches(b, y)) || (matches(b, x) && matches(a, y))

// Analiza dos fármacos distintos.
// level: nivel más grave encontrado, o 0 si no hay información (no equivale a seguro).
// iv.status: 'incompatible' | 'unverified' | 'not-iv'
export function checkPair(idA, idB) {
  const a = drugById[idA]
  const b = drugById[idB]
  const rules = INTERACTIONS.filter(([x, y]) => applies(a, b, x, y))
    .map(([, , level, why, action]) => ({ level, why, action }))
    .sort((p, q) => q.level - p.level)
    // varias reglas pueden decir lo mismo
    .filter((rule, i, all) => all.findIndex((r) => r.why === rule.why) === i)

  if (!rules.length && a.group === b.group && DUPLICITY_GROUPS.includes(a.group)) {
    rules.push({ level: CAUTION, why: 'Son del mismo grupo farmacológico.', action: 'Confirmar que no sea una duplicidad sin indicación.' })
  }
  // Una advertencia grave no debe aparecer junto a "combinación habitual"
  const level = rules[0]?.level ?? 0
  const shown = level >= AVOID ? rules.filter((r) => r.level >= CAUTION) : rules

  let iv
  if (!a.tags.includes('iv') || !b.tags.includes('iv')) {
    iv = { status: 'not-iv', reasons: [] }
  } else {
    const reasons = IV_INCOMPATIBLE.filter(([x, y]) => applies(a, b, x, y)).map(([, , why]) => why)
    iv = { status: reasons.length ? 'incompatible' : 'unverified', reasons }
  }
  return { a, b, level, rules: shown, iv }
}

// Todas las parejas de una selección, las más graves primero.
export function checkMix(ids) {
  const pairs = []
  ids.forEach((a, i) => ids.slice(i + 1).forEach((b) => pairs.push(checkPair(a, b))))
  const weight = (p) => p.level * 2 + (p.iv.status === 'incompatible' ? 1 : 0)
  return pairs.sort((p, q) => weight(q) - weight(p))
}

import { findMatches } from '../../lib/text.js'

export default function Highlighted({ text, terms }) {
  const parts = []
  let last = 0
  for (const [a, b] of findMatches(text, terms)) {
    parts.push(text.slice(last, a), <mark key={a} className="rounded-[3px] bg-mark px-px text-inherit">{text.slice(a, b)}</mark>)
    last = b
  }
  parts.push(text.slice(last))
  return parts
}

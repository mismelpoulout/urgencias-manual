import { findMatches } from './text.js'

// Resalta sin modificar el DOM que administra React.
const supported = () => typeof CSS !== 'undefined' && 'highlights' in CSS

export function clearHighlight() {
  if (supported()) CSS.highlights.delete('hit')
}

export function highlightIn(element, terms) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
    acceptNode: (n) => (n.parentElement.closest('svg, nav') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
  })
  const ranges = []
  while (walker.nextNode()) {
    const node = walker.currentNode
    for (const [start, end] of findMatches(node.nodeValue, terms)) {
      const range = document.createRange()
      range.setStart(node, start)
      range.setEnd(node, end)
      ranges.push(range)
    }
  }
  if (supported() && ranges.length) CSS.highlights.set('hit', new Highlight(...ranges))
  return ranges
}

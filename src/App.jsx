import { useCallback, useEffect, useRef, useState } from 'react'
import Book from './components/layout/Book.jsx'
import ChapterCards from './components/layout/ChapterCards.jsx'
import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'
import Hero from './components/layout/Hero.jsx'
import HighlightPill from './components/layout/HighlightPill.jsx'
import PrintFront from './components/layout/PrintFront.jsx'
import Toast from './components/layout/Toast.jsx'
import Toc from './components/layout/Toc.jsx'
import RunningTimers from './components/tools/RunningTimers.jsx'
import { clearHighlight, highlightIn } from './lib/highlight.js'
import { prefersReducedMotion } from './lib/motion.js'
import { anchorId, toTerms } from './lib/text.js'

const PRINT_HELP = 'Si no se abrió el diálogo de impresión, usa Ctrl+P (⌘P en Mac). El manual se imprime en A4 con un capítulo por página.'

export default function App() {
  const [tocOpen, setTocOpen] = useState(false)
  const [pill, setPill] = useState('')
  const [toast, setToast] = useState('')
  const topSearch = useRef(null)
  const heroSearch = useRef(null)
  const hero = useRef(null)

  const closeToc = useCallback(() => setTocOpen(false), [])

  // El contenido se pinta después de cargar la página: hay que ir al ancla de la URL.
  useEffect(() => {
    const id = anchorId(window.location.hash)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  // "/" enfoca el buscador visible
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== '/' || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) return
      e.preventDefault()
      const heroVisible = hero.current.getBoundingClientRect().bottom > 0
      ;(heroVisible ? heroSearch : topSearch).current.focus()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(''), 6500)
    return () => clearTimeout(timer)
  }, [toast])

  // Ir a un resultado de búsqueda y resaltar las coincidencias
  const goTo = useCallback((entry, query) => {
    const element = document.getElementById(entry.id)
    const ranges = highlightIn(element, toTerms(query))
    // En pantallas angostas los encabezados de tabla están ocultos y no se puede desplazar hasta ellos.
    const visible = ranges.map((r) => r.startContainer.parentElement).filter((el) => el.getClientRects().length)
    const first = visible[0]
    const toStart = !first || first.closest('h1, h2')
    window.history.replaceState(null, '', `#${entry.id}`)
    ;(toStart ? element : first).scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: toStart ? 'start' : 'center',
    })
    const n = visible.length
    setPill(n ? `${n} coincidencia${n > 1 ? 's' : ''} de «${query.trim()}»` : '')
    setTocOpen(false)
  }, [])

  const print = () => {
    window.print()
    setToast(PRINT_HELP)
  }

  return (
    <>
      <Header searchRef={topSearch} onSelect={goTo} tocOpen={tocOpen} onToggleToc={() => setTocOpen((o) => !o)} onPrint={print} />
      <PrintFront />
      <Hero ref={hero} searchRef={heroSearch} onSelect={goTo} />
      <ChapterCards />
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] print:block print:max-w-none">
        <Toc open={tocOpen} onClose={closeToc} />
        <Book />
      </div>
      <Footer />
      <HighlightPill
        message={pill}
        onClear={() => {
          clearHighlight()
          setPill('')
        }}
      />
      <RunningTimers />
      <Toast message={toast} />
    </>
  )
}

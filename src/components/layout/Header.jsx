import { useEffect, useRef } from 'react'
import Logo from './Logo.jsx'
import SearchBox from '../search/SearchBox.jsx'

const button =
  'inline-flex h-11 min-w-11 items-center gap-2 rounded-xl border-[1.5px] border-line bg-bg px-3.5 text-[15px] font-medium whitespace-nowrap text-ink hover:border-ink2'
const icon = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, className: 'size-[18px]', 'aria-hidden': true }

function ScrollProgress() {
  const bar = useRef(null)
  useEffect(() => {
    const update = () => {
      const h = document.documentElement
      bar.current.style.width = `${(100 * h.scrollTop) / Math.max(1, h.scrollHeight - h.clientHeight)}%`
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <div ref={bar} className="absolute -bottom-px left-0 h-0.5 w-0 bg-red" />
}

export default function Header({ searchRef, onSelect, tocOpen, onToggleToc, onPrint }) {
  return (
    <header className="sticky top-0 z-50 flex items-center gap-2 border-b border-line bg-bg/92 px-[max(3vw,14px)] py-2.5 backdrop-blur-[10px] sm:gap-3 print:hidden">
      <button type="button" className={`${button} lg:hidden`} onClick={onToggleToc} aria-label="Abrir índice" aria-controls="toc" aria-expanded={tocOpen}>
        <svg {...icon}>
          <path d="M4 6h16M4 12h16M4 18h10" />
        </svg>
        <span className="hidden sm:inline">Índice</span>
      </button>
      <a className="flex items-center gap-2.5 max-[359px]:hidden font-serif text-[17px] leading-none font-semibold whitespace-nowrap text-ink no-underline" href="#inicio">
        <Logo />
        <span className="hidden sm:inline">Manual de Urgencias</span>
      </a>
      <SearchBox ref={searchRef} onSelect={onSelect} shortcut placeholder="Buscar término, fármaco, dosis, score…" shortPlaceholder="Buscar…" />
      <button type="button" className={button} onClick={onPrint} aria-label="Imprimir">
        <svg {...icon}>
          <path d="M6 9V3h12v6M6 18H4v-7h16v7h-2M8 14h8v7H8z" />
        </svg>
        <span className="hidden sm:inline">Imprimir</span>
      </button>
      <ScrollProgress />
    </header>
  )
}

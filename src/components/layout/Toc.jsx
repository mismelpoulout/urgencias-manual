import { useEffect, useRef, useState } from 'react'
import { chapters } from '../../content/index.js'

const chapterOf = Object.fromEntries(chapters.flatMap((c) => c.sections.map((s) => [s.id, c.id])))

// Índice lateral: abre el capítulo y marca la sección que se está leyendo.
export default function Toc({ open, onClose }) {
  const [activeId, setActiveId] = useState(null)
  const [expanded, setExpanded] = useState(() => new Set())
  const nav = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActiveId(entry.target.id)
      },
      { rootMargin: '-80px 0px -70% 0px' },
    )
    for (const id of Object.keys(chapterOf)) observer.observe(document.getElementById(id))
    return () => observer.disconnect()
  }, [])

  const currentChapter = chapterOf[activeId]

  useEffect(() => {
    if (currentChapter) setExpanded((prev) => (prev.has(currentChapter) ? prev : new Set([currentChapter])))
  }, [currentChapter])

  // Desplaza solo el índice, sin mover la página
  useEffect(() => {
    const link = nav.current.querySelector('[aria-current="true"]')
    if (!link?.offsetParent) return
    const box = nav.current.getBoundingClientRect()
    const item = link.getBoundingClientRect()
    if (item.top < box.top) nav.current.scrollTop -= box.top - item.top
    else if (item.bottom > box.bottom) nav.current.scrollTop += item.bottom - box.bottom
  }, [activeId, expanded])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const toggle = (event, id) => {
    event.preventDefault()
    setExpanded((prev) => {
      const next = new Set(prev)
      if (!next.delete(id)) next.add(id)
      return next
    })
  }

  return (
    <>
      {open && <div className="fixed inset-x-0 top-[65px] bottom-0 z-[65] touch-none bg-black/40 lg:hidden print:hidden" onClick={onClose} aria-hidden="true" />}
      <nav
        ref={nav}
        id="toc"
        aria-label="Índice del manual"
        className={`fixed top-[65px] bottom-0 left-0 z-[70] w-[min(88vw,340px)] overflow-auto overscroll-contain border-r border-line bg-bg pt-[22px] pr-4 pb-10 pl-[max(2vw,14px)] text-[14px] transition-[translate,visibility] duration-200 lg:visible lg:sticky lg:h-[calc(100dvh-65px)] lg:w-auto lg:translate-x-0 lg:self-start lg:shadow-none print:hidden ${
          open ? 'visible translate-x-0 shadow-[0_0_40px_rgba(0,0,0,.2)]' : 'invisible -translate-x-[102%]'
        }`}
      >
        <p className="mb-2.5 ml-2 text-[13px] leading-[normal] font-semibold text-ink2">Índice</p>
        {chapters.map((c) => (
          <details key={c.id} open={expanded.has(c.id)} className="group mb-0.5">
            <summary
              onClick={(e) => toggle(e, c.id)}
              className={`grid cursor-pointer list-none grid-cols-[2.2em_1fr] gap-1 rounded-lg px-2 py-[7px] pointer-coarse:py-2.5 leading-[1.3] font-semibold hover:bg-bg2 [&::-webkit-details-marker]:hidden ${
                c.id === currentChapter ? 'bg-bg2' : ''
              }`}
            >
              <span className="text-red tabular-nums">{c.n}</span>
              <span>{c.title}</span>
            </summary>
            {c.sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={onClose}
                aria-current={s.id === activeId}
                className="block rounded-md py-[5px] pointer-coarse:py-2.5 pr-2 pl-[2.8em] leading-[1.35] text-ink2 no-underline hover:bg-bg2 hover:text-ink aria-[current=true]:font-semibold aria-[current=true]:text-red"
              >
                {s.title}
              </a>
            ))}
          </details>
        ))}
      </nav>
    </>
  )
}

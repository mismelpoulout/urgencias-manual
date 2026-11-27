import { memo } from 'react'

function Chapter({ chapter, previous, next }) {
  const { id, n, title, isNew, Content } = chapter
  return (
    <section className="chapter" id={id}>
      <h1>
        <span className="mb-2.5 block font-sans text-[14px] leading-[normal] font-semibold tracking-[0.01em] text-red">
          {n === 'A' ? 'Anexo' : `Capítulo ${n}`}
        </span>
        {title}
        {isNew && (
          <span className="ml-2 inline-block rounded-full bg-bluet px-2.5 py-[3px] align-middle font-sans text-[12px] leading-[normal] font-semibold text-blue">
            Nuevo
          </span>
        )}
      </h1>
      <Content />
      <nav className="mt-12 flex flex-col justify-between gap-3 sm:flex-row border-t border-line pt-5 print:hidden" aria-label="Capítulos contiguos">
        {previous ? <ChapterLink chapter={previous} label="Anterior" /> : <span className="hidden sm:block" />}
        {next && <ChapterLink chapter={next} label="Siguiente" className="text-right" />}
      </nav>
    </section>
  )
}

function ChapterLink({ chapter, label, className = '' }) {
  return (
    <a href={`#${chapter.id}`} className={`rounded-xl sm:flex-1 border border-line px-4 py-3.5 text-[14px] text-ink no-underline ${className}`}>
      <span className="block text-[12px] leading-[normal] font-semibold text-red">{label}</span>
      {chapter.title}
    </a>
  )
}

export default memo(Chapter)

import { chapters } from '../../content/index.js'

export default function ChapterCards() {
  return (
    <section className="px-[max(5vw,16px)] py-[clamp(28px,4vw,56px)] print:hidden">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="mb-1.5 font-serif text-[clamp(26px,3vw,34px)] leading-[1.1] font-semibold">Capítulos</h2>
        <p className="mb-[22px] text-ink2">Los capítulos nuevos de esta edición están marcados en azul.</p>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,270px),1fr))] gap-3">
          {chapters.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className={`grid grid-cols-[auto_1fr] items-start gap-x-3.5 gap-y-1 rounded-[14px] border px-4 pt-4 pb-[15px] text-ink no-underline transition hover:-translate-y-0.5 hover:border-red ${
                c.isNew ? 'border-[color-mix(in_srgb,var(--color-blue)_35%,var(--color-line))] bg-bluet' : 'border-line bg-bg'
              }`}
            >
              <span className={`row-span-2 min-w-[1.6ch] font-serif text-[30px] leading-none font-bold tabular-nums ${c.isNew ? 'text-blue' : 'text-red'}`}>
                {c.n}
              </span>
              <span className="text-[15.5px] leading-[1.32] font-semibold">
                {c.title}
                {c.isNew && <span className="ml-1.5 inline-block text-[11.5px] leading-[normal] text-blue">Nuevo</span>}
              </span>
              <span className="text-[13px] text-ink2">{c.sections.length} secciones</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

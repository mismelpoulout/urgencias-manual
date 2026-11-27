import { bookStats, chapters } from '../../content/index.js'

const STATS = [
  [chapters.length - 1, 'capítulos + anexo de scores'],
  [chapters.reduce((total, c) => total + c.sections.length, 0), 'secciones'],
  [bookStats.tables, 'tablas de dosis y criterios'],
  [bookStats.media, 'trazados ECG e imágenes'],
]

export default function Stats() {
  return (
    <div className="relative mx-auto grid max-w-[1240px] grid-cols-2 gap-[clamp(18px,4vw,56px)] sm:flex sm:flex-wrap border-t border-grid px-[max(5vw,16px)] pt-[18px] pb-[26px]">
      {STATS.map(([value, label]) => (
        <div key={label} className="text-[14px] leading-[normal] font-medium text-ink2">
          <b className="block font-serif text-[30px] leading-[1.1] font-bold text-ink">{value}</b>
          {label}
        </div>
      ))}
    </div>
  )
}

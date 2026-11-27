import DrugLinks from './DrugLinks.jsx'
import SectionLinks from '../content/SectionLinks.jsx'
import { COMBOS } from '../../content/combos.js'

export default function Combos({ onCheck }) {
  return (
    <div className="my-4 grid gap-3">
      {COMBOS.map((c) => (
        <div key={c.id} className="break-inside-avoid rounded-[14px] border border-line p-3.5">
          <h3 className="!mt-0">{c.name}</h3>
          <p>{c.text}</p>
          <DrugLinks ids={c.drugs} />
          <div className="mt-3 flex flex-wrap items-center gap-2 print:hidden" data-noindex>
            <button
              type="button"
              className="h-10 pointer-coarse:h-11 rounded-full bg-red px-4 text-[13.5px] font-semibold text-bg"
              onClick={() => onCheck(c.drugs)}
              aria-label={`Revisar la mezcla: ${c.name}`}
            >
              Revisar esta mezcla
            </button>
            {c.section && <SectionLinks ids={[c.section]} />}
          </div>
        </div>
      ))}
    </div>
  )
}

import SectionLinks from './SectionLinks.jsx'
import DrugLinks from '../drugs/DrugLinks.jsx'
import { scoreById } from '../../content/scores/index.js'

const heading = '!mt-2.5 !mb-1.5 text-[13px] font-semibold text-ink2'

function ScoreLinks({ ids }) {
  return (
    <ul className="!mb-0 flex flex-wrap gap-2 !pl-0">
      {ids.map((id) => (
        <li key={id} className="!mb-0 list-none">
          <a href={`#score-${id}`} className="inline-block rounded-full border border-line bg-bg px-3 py-1.5 text-[13px] leading-[1.35] font-medium no-underline hover:border-blue">
            {scoreById[id].name} →
          </a>
        </li>
      ))}
    </ul>
  )
}

const GROUPS = [
  ['drugs', 'Farmacología (toque para abrir la ficha)', DrugLinks],
  ['imaging', 'Imagen y laboratorio', SectionLinks],
  ['ecg', 'Electrocardiograma', SectionLinks],
  ['scores', 'Calculadoras', ScoreLinks],
  ['links', 'Otros capítulos y herramientas', SectionLinks],
]

// Enlaces de una conducta con el resto del manual. Cada propiedad es una lista de identificadores.
export default function Connections(props) {
  return (
    <div data-noindex className="mt-3 mb-5 rounded-[14px] border-[1.5px] border-line px-3.5 pt-1 pb-3.5">
      {GROUPS.map(([key, title, Links]) =>
        props[key] ? (
          <div key={key}>
            <p className={heading}>{title}</p>
            <Links ids={props[key]} />
          </div>
        ) : null,
      )}
    </div>
  )
}

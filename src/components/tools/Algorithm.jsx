import { useState } from 'react'
import { primaryButton, toolButton } from './TimerControls.jsx'
import SectionLinks from '../content/SectionLinks.jsx'
import DrugLinks from '../drugs/DrugLinks.jsx'
import { scoreById } from '../../content/scores/index.js'

const LEVELS = ['border-blue bg-bluet', 'border-amber bg-ambert', 'border-red bg-redt', 'border-[3px] border-red bg-redt']
const heading = '!mt-3 !mb-1.5 text-[13px] font-semibold text-ink2'

// Recorrido de un algoritmo, una pregunta a la vez.
export default function Algorithm({ data }) {
  // Cada paso respondido: nodo y alternativa elegida
  const [path, setPath] = useState([])
  const currentId = path.length ? path.at(-1).next : data.start
  const node = data.nodes[currentId]

  return (
    <div data-noindex data-algorithm={data.id} className="my-4 rounded-[14px] border-[1.5px] border-line p-3 xs:p-4 print:hidden">
      {path.length > 0 && (
        <ol className="!mb-3 !pl-0 text-[13.5px] leading-[1.4] text-ink2" aria-label="Pasos recorridos">
          {path.map((step, i) => (
            <li key={i} className="!mb-1 list-none">
              <button
                type="button"
                className="text-left text-ink2 underline decoration-dotted underline-offset-2"
                onClick={() => setPath(path.slice(0, i))}
                aria-label={`Volver al paso ${i + 1}`}
              >
                {i + 1}. {data.nodes[step.from].title} → <strong>{step.label}</strong>
              </button>
            </li>
          ))}
        </ol>
      )}
      <div role="status" className={`rounded-xl border-[1.5px] p-3.5 ${node.level === undefined ? 'border-line' : LEVELS[node.level]}`}>
        <p className="!mb-2 text-[12.5px] font-semibold text-ink2">
          Paso {path.length + 1}
          {!node.options && ' · Final del recorrido'}
        </p>
        <p className="!mb-2 text-[18px] leading-[1.35] font-semibold">{node.title}</p>
        {node.detail && <p className="!mb-2 text-[14.5px]">{node.detail}</p>}
        {node.actions && (
          <ul className="!mb-2">
            {node.actions.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        )}
        {node.options && (
          <div className="mt-3 flex flex-col gap-2">
            {node.options.map(([label, next]) => (
              <button
                key={label}
                type="button"
                className={`${primaryButton} text-left`}
                onClick={() => setPath([...path, { from: currentId, label, next }])}
              >
                {label}
              </button>
            ))}
          </div>
        )}
        {node.scores && (
          <>
            <p className={heading}>Calculadoras</p>
            <ul className="!mb-0 flex flex-wrap gap-2 !pl-0">
              {node.scores.map((id) => (
                <li key={id} className="!mb-0 list-none">
                  <a href={`#score-${id}`} className="inline-block rounded-full border border-line bg-bg px-3 py-1.5 text-[13px] font-medium no-underline">
                    {scoreById[id].name}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
        {node.drugs && (
          <>
            <p className={heading}>Medicamentos</p>
            <DrugLinks ids={node.drugs} />
          </>
        )}
        {node.links && (
          <>
            <p className={heading}>Ver en el manual</p>
            <SectionLinks ids={node.links} />
          </>
        )}
      </div>
      {path.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" className={toolButton} onClick={() => setPath(path.slice(0, -1))}>Atrás</button>
          <button type="button" className={toolButton} onClick={() => setPath([])}>Empezar de nuevo</button>
        </div>
      )}
    </div>
  )
}

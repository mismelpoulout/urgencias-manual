import SectionLinks from './SectionLinks.jsx'
import { ECG_CLINICAL } from '../../content/ecgClinical.js'

const BLOCKS = [
  ['conditions', 'Patologías en las que se ve'],
  ['symptoms', 'Síntomas'],
  ['signs', 'Signos'],
]

export default function EcgClinical({ type }) {
  const data = ECG_CLINICAL[type]
  return (
    <details className="mt-2 rounded-xl border border-line text-[13.5px] leading-[1.45]">
      <summary className="cursor-pointer px-3.5 py-2.5 font-semibold">Clínica asociada: patologías, síntomas y signos</summary>
      <div className="px-3.5 pb-3">
        {BLOCKS.map(([key, title]) => (
          <div key={key} className="mb-2">
            <p className="!mb-0.5 font-semibold text-red">{title}</p>
            <ul className="!mb-0">
              {data[key].map((text) => (
                <li key={text} className="!mb-0.5">{text}</li>
              ))}
            </ul>
          </div>
        ))}
        <p className="!mb-1.5 font-semibold text-ink2">Ver en el manual</p>
        <SectionLinks ids={data.links} />
      </div>
    </details>
  )
}

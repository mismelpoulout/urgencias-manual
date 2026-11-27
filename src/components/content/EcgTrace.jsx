import EcgClinical from './EcgClinical.jsx'
import EcgPlayer from './EcgPlayer.jsx'

export default function EcgTrace({ type, caption }) {
  return (
    <figure className="mt-[18px] mb-5 break-inside-avoid">
      <EcgPlayer type={type} />
      {caption && <figcaption className="mt-[7px] text-[13.5px] leading-[1.45] text-ink2">{caption}</figcaption>}
      <div data-noindex className="print:hidden">
        <EcgClinical type={type} />
      </div>
    </figure>
  )
}

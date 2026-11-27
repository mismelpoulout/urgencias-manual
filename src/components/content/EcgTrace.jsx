import EcgSvg from './EcgSvg.jsx'

export default function EcgTrace({ type, caption }) {
  return (
    <figure className="mt-[18px] mb-5 break-inside-avoid">
      <EcgSvg type={type} />
      {caption && <figcaption className="mt-[7px] text-[13.5px] leading-[1.45] text-ink2">{caption}</figcaption>}
    </figure>
  )
}

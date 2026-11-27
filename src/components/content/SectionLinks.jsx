import { sectionLabel } from '../../content/index.js'

// Accesos directos a secciones del manual.
export default function SectionLinks({ ids }) {
  return (
    <ul className="!mb-0 flex flex-wrap gap-2 !pl-0">
      {ids.map((id) => (
        <li key={id} className="!mb-0 list-none">
          <a href={`#${id}`} className="inline-block rounded-full border border-line bg-bg px-3 py-1.5 text-[13px] leading-[1.35] font-medium no-underline hover:border-blue">
            {sectionLabel(id)} →
          </a>
        </li>
      ))}
    </ul>
  )
}

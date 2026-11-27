import { drugById } from '../../content/drugs.js'

// Accesos directos a la ficha de cada fármaco en el vademécum.
export default function DrugLinks({ ids }) {
  return (
    <ul className="!mb-0 flex flex-wrap gap-2 !pl-0">
      {ids.map((id) => (
        <li key={id} className="!mb-0 list-none">
          <a href={`#med-${id}`} className="inline-block rounded-full border border-line bg-bg px-3 py-1.5 text-[13px] leading-[1.35] font-medium no-underline hover:border-blue">
            {drugById[id].name}
          </a>
        </li>
      ))}
    </ul>
  )
}

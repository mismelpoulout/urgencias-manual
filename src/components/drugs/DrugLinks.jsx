import DrugName from './DrugName.jsx'

// Accesos directos a la ficha de cada fármaco.
export default function DrugLinks({ ids }) {
  return (
    <ul className="!mb-0 flex flex-wrap gap-2 !pl-0">
      {ids.map((id) => (
        <li key={id} className="!mb-0 list-none">
          <DrugName id={id} className="rounded-full border border-line bg-bg px-3 py-1.5 text-[13px] leading-[1.35] font-medium text-blue hover:border-blue pointer-coarse:min-h-11" />
        </li>
      ))}
    </ul>
  )
}

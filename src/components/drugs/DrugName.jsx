import { drugById } from '../../content/drugs.js'
import { openDrug } from '../../lib/drugModal.js'

const LINK = 'inline cursor-pointer text-left font-semibold text-blue underline decoration-dotted underline-offset-[3px] hover:decoration-solid pointer-coarse:py-2 print:text-ink print:no-underline'

// Nombre de un fármaco que abre su ficha.
export default function DrugName({ id, className = LINK }) {
  return (
    <button type="button" className={className} aria-haspopup="dialog" onClick={() => openDrug(id)}>
      {drugById[id].name}
    </button>
  )
}

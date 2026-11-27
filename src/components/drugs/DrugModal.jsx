import { useEffect, useRef } from 'react'
import { DRUG_GROUPS, drugById } from '../../content/drugs.js'
import { PHARMACOLOGY } from '../../content/pharmacology.js'
import { closeDrug, useOpenDrug } from '../../lib/drugModal.js'

const groupName = Object.fromEntries(DRUG_GROUPS.map((g) => [g.id, g.name]))

function Item({ term, children, className = '' }) {
  return (
    <div className={className}>
      <dt className="text-[12px] font-semibold text-ink2">{term}</dt>
      <dd className="m-0">{children}</dd>
    </div>
  )
}

// Ficha del fármaco en un diálogo modal: Esc, el botón o un clic en el fondo la cierran.
export default function DrugModal() {
  const id = useOpenDrug()
  const dialog = useRef(null)
  const body = useRef(null)
  const drug = id ? drugById[id] : null
  const info = id ? PHARMACOLOGY[id] : null

  useEffect(() => {
    const element = dialog.current
    if (!id) return element.close()
    if (!element.open) element.showModal()
    body.current.scrollTop = 0
  }, [id])

  return (
    <dialog
      ref={dialog}
      aria-labelledby="ficha-titulo"
      data-noindex
      className="m-auto max-h-[min(88dvh,760px)] w-[min(560px,calc(100vw-24px))] overflow-hidden rounded-2xl border border-line bg-bg p-0 text-ink shadow-2xl backdrop:bg-black/55 open:flex open:flex-col print:hidden"
      onClose={closeDrug}
      // El contenido cubre todo el diálogo: un clic cuyo destino es el propio diálogo viene del fondo.
      onClick={(e) => e.target === e.currentTarget && closeDrug()}
    >
      {drug && (
        <>
          <header className="flex items-start justify-between gap-3 border-b border-line bg-bg2 px-4 py-3">
            <div>
              <h2 id="ficha-titulo" className="m-0 font-serif text-[22px] leading-[1.2] font-semibold">
                {drug.name}
              </h2>
              <p className="m-0 text-[13px] text-ink2">{groupName[drug.group]}</p>
            </div>
            <button type="button" autoFocus className="size-11 shrink-0 rounded-full border border-line bg-bg text-[18px]" onClick={closeDrug} aria-label="Cerrar ficha">
              <span aria-hidden="true">✕</span>
            </button>
          </header>
          <div ref={body} className="overflow-y-auto overscroll-contain px-4 py-3.5 text-[15px] leading-[1.5]">
            <dl className="m-0 grid gap-3.5">
              <div className="grid gap-2.5 xs:grid-cols-2">
                <Item term="Cuánto demora en hacer efecto" className="rounded-xl bg-bluet px-3 py-2.5">{info.onset}</Item>
                <Item term="Vida media" className="rounded-xl bg-bluet px-3 py-2.5">{info.halfLife}</Item>
              </div>
              <Item term="Mecanismo de acción">{info.mechanism}</Item>
              <Item term="Dónde se metaboliza y cómo se elimina">{info.metabolism}</Item>
              <Item term="Reacciones adversas">{info.adverse}</Item>
              <div className="grid gap-3.5 border-t border-line pt-3.5">
                <Item term="Dosis orientativa (adulto)">{drug.dose}</Item>
                <Item term="Uso principal">{drug.use}</Item>
                <Item term="Precaución">{drug.caution}</Item>
              </div>
            </dl>
            <p className="mt-3.5 mb-0 rounded-xl border border-amber bg-ambert px-3 py-2.5 text-[13px]">
              Valores orientativos para un adulto con función renal y hepática normal, <strong>pendientes de validación farmacéutica</strong>. Verificar antes de prescribir.
            </p>
            <p className="mt-3 mb-0 text-[14px]">
              <a
                href={`#med-${drug.id}`}
                // Se cierra antes de navegar para que el foco no devuelva la vista a su origen. El estado se
                // actualiza con el evento "close": si el enlace desapareciera ahora, no se navegaría.
                onClick={() => dialog.current.close()}
              >
                Ver en el vademécum
              </a>
            </p>
          </div>
        </>
      )}
    </dialog>
  )
}

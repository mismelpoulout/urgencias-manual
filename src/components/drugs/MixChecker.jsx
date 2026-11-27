import { DRUG_GROUPS, drugById } from '../../content/drugs.js'
import { AVOID, CAUTION, CONTRA, USUAL } from '../../content/interactions.js'
import { checkMix } from '../../lib/mix.js'
import DrugName from './DrugName.jsx'

export const MAX_DRUGS = 8

const VERDICTS = {
  [CONTRA]: { text: 'No: contraindicado', badge: 'bg-red text-bg', box: 'border-red' },
  [AVOID]: { text: 'No: evitar', badge: 'bg-red text-bg', box: 'border-red' },
  [CAUTION]: { text: 'Solo con precaución', badge: 'bg-amber text-bg', box: 'border-amber' },
  [USUAL]: { text: 'Sí: combinación habitual', badge: 'bg-blue text-bg', box: 'border-blue' },
  0: { text: 'Sin información', badge: 'bg-bg3 text-ink', box: 'border-line' },
}
const badge = 'inline-block rounded-full px-2.5 py-1 text-[12px] leading-[normal] font-semibold'

function summary(pairs) {
  const worst = Math.max(...pairs.map((p) => p.level))
  const unknown = pairs.filter((p) => p.level === 0).length
  const missing = unknown ? ` Además hay ${unknown} pareja(s) sin información.` : ''
  if (worst === CONTRA) return [CONTRA, `No mezclar: hay una contraindicación.${missing}`]
  if (worst === AVOID) return [AVOID, `No mezclar: hay una asociación que debe evitarse.${missing}`]
  if (worst === CAUTION) return [CAUTION, `Hay asociaciones que requieren precaución.${missing}`]
  if (unknown) return [0, 'No se puede confirmar que sea seguro mezclarlos: falta información en al menos una pareja. Consultar con farmacia.']
  return [USUAL, 'Todas las parejas son combinaciones de uso habitual. Revisar igualmente dosis, alergias y función renal.']
}

function Pair({ pair }) {
  const { a, b, level, rules, iv } = pair
  const verdict = VERDICTS[level]
  return (
    <li className={`!mb-0 list-none rounded-xl border-[1.5px] p-3.5 ${verdict.box}`}>
      <p className="!mb-2 font-semibold">
        <DrugName id={a.id} /> + <DrugName id={b.id} />
      </p>
      <p className="!mb-1 flex flex-wrap items-center gap-2 text-[14px]">
        ¿Indicarlos juntos? <span className={`${badge} ${verdict.badge}`}>{verdict.text}</span>
      </p>
      {rules.length ? (
        <ul className="!mb-2 text-[14px]">
          {rules.map((r) => (
            <li key={r.why}>
              {r.why} <em>{r.action}</em>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mini !mb-2">Esta herramienta no tiene registrada la pareja. Que no aparezca una interacción no significa que sea segura.</p>
      )}
      <p className="!mb-1 flex flex-wrap items-center gap-2 text-[14px]">
        ¿Misma jeringa o vía IV?{' '}
        <span className={`${badge} ${iv.status === 'incompatible' ? 'bg-red text-bg' : 'bg-bg3 text-ink'}`}>
          {{ incompatible: 'No: incompatibles', unverified: 'No verificado', 'not-iv': 'No aplica' }[iv.status]}
        </span>
      </p>
      {iv.status === 'incompatible' && (
        <ul className="!mb-0 text-[14px]">
          {iv.reasons.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      )}
      {iv.status === 'unverified' && <p className="mini !mb-0">Usar vías separadas o confirmar la compatibilidad con farmacia.</p>}
      {iv.status === 'not-iv' && <p className="mini !mb-0">Al menos uno no figura como intravenoso en el vademécum.</p>}
    </li>
  )
}

export default function MixChecker({ selected, onChange }) {
  const pairs = checkMix(selected)
  const [level, text] = pairs.length ? summary(pairs) : []
  const incompatible = pairs.filter((p) => p.iv.status === 'incompatible')

  return (
    <div data-noindex className="my-4 rounded-[14px] border-[1.5px] border-line p-3 xs:p-4 print:hidden">
      <label className="flex flex-col gap-1 text-[13.5px] font-medium text-ink2">
        Agregar medicamento (hasta {MAX_DRUGS})
        <select
          className="h-11 w-full rounded-[10px] border-[1.5px] border-line bg-bg2 px-2.5 text-[16px] font-normal text-ink"
          value=""
          disabled={selected.length >= MAX_DRUGS}
          onChange={(e) => e.target.value && onChange([...selected, e.target.value])}
        >
          <option value="">{selected.length >= MAX_DRUGS ? 'Máximo alcanzado' : 'Elegir de la lista…'}</option>
          {DRUG_GROUPS.map((g) => (
            <optgroup key={g.id} label={g.name}>
              {g.drugs.map((d) => (
                <option key={d.id} value={d.id} disabled={selected.includes(d.id)}>
                  {d.name}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </label>
      {selected.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {selected.map((id) => (
            <button
              key={id}
              type="button"
              className="min-h-10 pointer-coarse:min-h-11 rounded-full border-[1.5px] border-line bg-bg2 px-3.5 text-[14px] font-medium text-ink hover:border-red"
              onClick={() => onChange(selected.filter((x) => x !== id))}
              aria-label={`Quitar ${drugById[id].name}`}
            >
              {drugById[id].name} <span aria-hidden="true">✕</span>
            </button>
          ))}
          <button type="button" className="px-2 text-[14px] font-medium text-blue underline" onClick={() => onChange([])}>
            Vaciar
          </button>
        </div>
      )}
      <div role="status" className="mt-3">
        {pairs.length === 0 ? (
          <p className="!mb-0 text-ink2">Elija al menos dos medicamentos para analizar la mezcla.</p>
        ) : (
          <>
            <p className={`!mb-0 rounded-xl border-[2px] px-3.5 py-3 font-semibold ${VERDICTS[level].box}`}>{text}</p>
            {incompatible.length > 0 && (
              <p className="!mt-2 !mb-0 rounded-xl border-[2px] border-red bg-redt px-3.5 py-3 font-semibold text-red">
                No usar la misma jeringa o vía IV: {incompatible.map((p) => `${p.a.name} con ${p.b.name}`).join('; ')}.
              </p>
            )}
          </>
        )}
      </div>
      {pairs.length > 0 && (
        <ul className="!mt-3 !mb-0 grid gap-2.5 !pl-0">
          {pairs.map((p) => (
            <Pair key={`${p.a.id}-${p.b.id}`} pair={p} />
          ))}
        </ul>
      )}
    </div>
  )
}

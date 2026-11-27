import { useId, useState } from 'react'
import SectionLinks from '../content/SectionLinks.jsx'
import DrugLinks from '../drugs/DrugLinks.jsx'
import { scoreById } from '../../content/scores/index.js'
import { formatNumber } from '../../lib/format.js'
import { emptyValues, evaluate } from '../../lib/scores.js'

const SEVERITY = [
  { label: 'Gravedad baja', box: 'border-blue bg-bluet', badge: 'bg-blue text-bg' },
  { label: 'Gravedad intermedia', box: 'border-amber bg-ambert', badge: 'bg-amber text-bg' },
  { label: 'Gravedad alta', box: 'border-red bg-redt', badge: 'bg-red text-bg' },
  { label: 'Gravedad crítica', box: 'border-[3px] border-red bg-redt', badge: 'bg-red text-bg' },
]
const button = 'h-11 rounded-xl border-[1.5px] px-4 text-[14.5px] font-semibold'
const control = 'h-11 w-full rounded-[10px] border-[1.5px] border-line bg-bg2 px-2.5 text-[16px] font-normal text-ink'

function Input({ item, value, onChange }) {
  if (item.type === 'check') {
    return (
      <label className="flex min-h-11 items-center gap-2.5 rounded-[10px] border border-line px-3 py-2 text-[14px] leading-[1.35] has-checked:border-red has-checked:bg-redt">
        <input type="checkbox" className="size-5 flex-none accent-red" checked={value} onChange={(e) => onChange(e.target.checked)} />
        {item.label}
      </label>
    )
  }
  return (
    <label className="col-span-full flex flex-col gap-1 text-[13.5px] leading-[1.35] font-medium text-ink2">
      {item.label}
      {item.type === 'select' ? (
        <select className={control} value={value} onChange={(e) => onChange(e.target.value)}>
          <option value="">Seleccione…</option>
          {item.options.map(([text], i) => (
            <option key={text} value={i}>
              {text}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="number"
          inputMode="decimal"
          step="any"
          className={control}
          value={value}
          placeholder={`${formatNumber(item.min, 2)} a ${formatNumber(item.max, 2)}`}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  )
}

function Result({ score, outcome, marked }) {
  const severity = SEVERITY[outcome.level]
  return (
    <div className={`rounded-xl border-[1.5px] p-3.5 ${severity.box}`}>
      <p className="!mb-1.5 flex flex-wrap items-center gap-2">
        <strong className="text-[22px] leading-[1.2] tabular-nums">{outcome.display}</strong>
        <span className={`rounded-full px-2.5 py-1 text-[12px] leading-[normal] font-semibold ${severity.badge}`}>
          {outcome.badge ?? severity.label}
        </span>
      </p>
      {marked && <p className="mini !mb-1">Calculado con {marked}.</p>}
      <p className="!mb-1 font-semibold">{outcome.title}</p>
      <p className="!mb-3">
        <strong>Conducta sugerida:</strong> {outcome.advice}
      </p>
      <p className="!mb-1.5 text-[13px] font-semibold text-ink2">Fundamento en el manual</p>
      <SectionLinks ids={score.chapters} />
      <p className="!mt-3 !mb-1.5 text-[13px] font-semibold text-ink2">Medicamentos relacionados</p>
      {outcome.level > 0 && outcome.drugs.length > 0 ? (
        <>
          <DrugLinks ids={outcome.drugs} />
          <p className="mini !mt-2 !mb-0">Referencia para consultar, no es una prescripción: confirmar indicación, dosis y contraindicaciones.</p>
        </>
      ) : (
        <p className="mini !mb-0">No se sugieren fármacos para este resultado.</p>
      )}
    </div>
  )
}

export default function ScoreCalculator({ id }) {
  const score = scoreById[id]
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState(() => emptyValues(score))
  const [asked, setAsked] = useState(false)
  const panel = useId()
  const outcome = open && asked ? evaluate(score, values) : null
  const checks = score.items.filter((i) => i.type === 'check')
  const marked = checks.length ? `${checks.filter((i) => values[i.key]).length} de ${checks.length} criterios marcados` : ''

  return (
    <div id={`score-${id}`} data-noindex className="mb-5 print:hidden">
      <button
        type="button"
        className={`${button} ${open ? 'border-line bg-bg text-ink' : 'border-red bg-redt text-red'}`}
        aria-expanded={open}
        aria-controls={panel}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'Cerrar calculadora' : `Calcular ${score.name}`}
      </button>
      {open && (
        <form
          id={panel}
          className="mt-3 rounded-[14px] border-[1.5px] border-line p-3 xs:p-4"
          onSubmit={(e) => {
            e.preventDefault()
            setAsked(true)
          }}
          noValidate
        >
          <p className="!mb-3 font-semibold">
            {score.name} · <span className="font-normal text-ink2">{score.topic}</span>
          </p>
          {score.note && <p className="mini">{score.note}</p>}
          <div className="grid gap-2.5 xs:grid-cols-2">
            {score.items.map((item) => (
              <Input key={item.key} item={item} value={values[item.key]} onChange={(v) => setValues((all) => ({ ...all, [item.key]: v }))} />
            ))}
          </div>
          {checks.length > 0 && <p className="mini !mt-2 !mb-0">Los criterios que no marque se consideran ausentes.</p>}
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="submit" className={`${button} border-red bg-red text-bg`}>
              Ver resultado
            </button>
            <button
              type="button"
              className={`${button} border-line bg-bg text-ink`}
              onClick={() => {
                setValues(emptyValues(score))
                setAsked(false)
              }}
            >
              Limpiar
            </button>
          </div>
          <div role="status" className="mt-3 empty:mt-0">
            {outcome?.missing && (
              <div className="rounded-xl bg-redt px-4 py-3 text-red">
                <p className="!mb-1 font-semibold">Faltan datos o están fuera de rango:</p>
                <ul className="!mb-0">
                  {outcome.missing.map((label) => (
                    <li key={label}>{label}</li>
                  ))}
                </ul>
              </div>
            )}
            {outcome && !outcome.missing && <Result score={score} outcome={outcome} marked={marked} />}
          </div>
        </form>
      )}
    </div>
  )
}

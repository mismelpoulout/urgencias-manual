import { useState } from 'react'
import { toolButton } from './TimerControls.jsx'
import Table from '../content/Table.jsx'
import DrugLinks from '../drugs/DrugLinks.jsx'
import { INFUSIONS } from '../../content/infusions.js'
import { WEIGHT, formatNumber, parseInRange } from '../../lib/format.js'
import { UNITS, bagUnit, concentration, doseFromRate, rateFromDose } from '../../lib/infusion.js'

const control = 'h-11 w-full rounded-[10px] border-[1.5px] border-line bg-bg2 px-2.5 text-[16px] font-normal text-ink'
const LIMITS = {
  amount: { min: 0.001, max: 100000 },
  volume: { min: 1, max: 5000 },
  dose: { min: 0.0001, max: 100000 },
  rate: { min: 0.1, max: 999 },
}
const MAX_PUMP = 999 // mL/h

function Field({ label, value, onChange }) {
  return (
    <label className="flex flex-col justify-end gap-1 text-[13.5px] leading-[1.35] font-medium text-ink2">
      {label}
      <input className={control} type="number" inputMode="decimal" step="any" value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  )
}

// Valores precargados al elegir una infusión. La dosis nunca viene escrita.
const initial = (preset) => ({
  amount: preset?.amount ? String(preset.amount) : '',
  volume: preset?.volume ? String(preset.volume) : '',
  value: '',
})

export default function InfusionCalculator() {
  const [id, setId] = useState(INFUSIONS[0].id)
  const [customUnit, setCustomUnit] = useState('mcg/kg/min')
  const [fields, setFields] = useState(() => initial(INFUSIONS[0]))
  const [weight, setWeight] = useState('')
  const [reverse, setReverse] = useState(false) // de mL/h a dosis

  const preset = INFUSIONS.find((i) => i.id === id)
  const unit = preset?.unit ?? customUnit
  const { perKg } = UNITS[unit]
  const set = (key) => (value) => setFields((f) => ({ ...f, [key]: value }))

  const w = perKg ? parseInRange(weight, WEIGHT) : 1
  const amount = parseInRange(fields.amount, LIMITS.amount)
  const volume = parseInRange(fields.volume, LIMITS.volume)
  const value = parseInRange(fields.value, reverse ? LIMITS.rate : LIMITS.dose)
  const prepared = amount !== null && volume !== null && w !== null
  const ready = prepared && value !== null

  const input = { unit, weight: w, amount, volume }
  const dose = ready ? (reverse ? doseFromRate({ ...input, rate: value }) : value) : null
  const rate = ready ? (reverse ? value : rateFromDose({ ...input, dose: value })) : null
  const outside = ready && preset && (dose < preset.range[0] * 0.999 || dose > preset.range[1] * 1.001)
  const number = (x) => formatNumber(x, x < 1 ? 3 : 2)
  const usual = preset && (preset.range[0] === preset.range[1] ? number(preset.range[0]) : `${number(preset.range[0])} a ${number(preset.range[1])}`)

  const missing = [
    perKg && w === null && `peso (${WEIGHT.min} a ${WEIGHT.max} kg)`,
    amount === null && `cantidad en ${bagUnit(unit)}`,
    volume === null && 'volumen (1 a 5.000 mL)',
    value === null && (reverse ? 'velocidad (0,1 a 999 mL/h)' : 'dosis mayor que cero'),
  ].filter(Boolean)

  // Dosis repartidas en el rango habitual
  const steps = preset ? [...new Set([0, 0.25, 0.5, 0.75, 1].map((f) => Number((preset.range[0] + f * (preset.range[1] - preset.range[0])).toFixed(3))))] : []

  return (
    <div data-noindex className="my-4 rounded-[14px] border-[1.5px] border-line p-3 xs:p-4 print:hidden">
      <div className="grid gap-2.5 xs:grid-cols-2">
        <label className="col-span-full flex flex-col gap-1 text-[13.5px] font-medium text-ink2">
          Fármaco
          <select
            className={control}
            value={id}
            onChange={(e) => {
              setId(e.target.value)
              setFields(initial(INFUSIONS.find((i) => i.id === e.target.value)))
            }}
          >
            {INFUSIONS.map((i) => (
              <option key={i.id} value={i.id}>{i.name} ({i.unit})</option>
            ))}
            <option value="otro">Otro (preparación libre)</option>
          </select>
        </label>
        {!preset && (
          <label className="col-span-full flex flex-col gap-1 text-[13.5px] font-medium text-ink2">
            Unidad de la dosis
            <select className={control} value={customUnit} onChange={(e) => { setCustomUnit(e.target.value); setFields(initial()) }}>
              {Object.keys(UNITS).map((u) => (
                <option key={u}>{u}</option>
              ))}
            </select>
          </label>
        )}
        <Field label={`Cantidad de fármaco (${bagUnit(unit)})`} value={fields.amount} onChange={set('amount')} />
        <Field label="Volumen total (mL)" value={fields.volume} onChange={set('volume')} />
        {perKg && <Field label="Peso (kg)" value={weight} onChange={setWeight} />}
        <div className="col-span-full flex flex-wrap gap-2" role="group" aria-label="Sentido del cálculo">
          {[[false, 'De dosis a mL/h'], [true, 'De mL/h a dosis']].map(([mode, text]) => (
            <button key={text} type="button" className={toolButton} aria-pressed={reverse === mode} onClick={() => { setReverse(mode); set('value')('') }}>
              {text}
            </button>
          ))}
        </div>
        <Field label={reverse ? 'Velocidad de la bomba (mL/h)' : `Dosis (${unit})`} value={fields.value} onChange={set('value')} />
      </div>
      {preset && <p className="mini !mt-2">Dosis habitual: {usual} {unit}. {preset.amount ? 'Preparación del capítulo 12: confirmar que coincida con la que está colgada.' : 'Ingrese la preparación del protocolo local.'}</p>}
      {!preset && <p className="mini !mt-2">Preparación libre: no hay rango de referencia.</p>}

      <div role="status" className="mt-3">
        {ready ? (
          <div className={`rounded-xl border-[1.5px] p-3.5 ${outside || rate > MAX_PUMP || rate < 0.1 ? 'border-red bg-redt' : 'border-blue bg-bluet'}`}>
            <strong className="block text-[34px] leading-[1.15] tabular-nums">
              {reverse ? `${number(dose)} ${unit}` : `${formatNumber(rate, 1)} mL/h`}
            </strong>
            <p className="!mb-0 text-[14px]">
              Concentración: {number(concentration(unit, amount, volume))} {UNITS[unit].amount}/mL
              {perKg && ` · Peso: ${formatNumber(w, 1)} kg`}
              {reverse ? ` · ${formatNumber(rate, 1)} mL/h` : ` · ${number(dose)} ${unit}`}
            </p>
            {outside && <p className="!mt-2 !mb-0 font-semibold text-red">Fuera del rango habitual ({usual} {unit}). Verificar dosis y preparación.</p>}
            {rate > MAX_PUMP && <p className="!mt-2 !mb-0 font-semibold text-red">Supera 999 mL/h: revisar la preparación.</p>}
            {rate < 0.1 && <p className="!mt-2 !mb-0 font-semibold text-red">Menor que 0,1 mL/h: usar una preparación más diluida.</p>}
          </div>
        ) : (
          <p className="!mb-0 text-ink2">Para calcular falta: {missing.join(', ')}.</p>
        )}
      </div>

      {preset && prepared && steps.length > 1 && (
        <Table className="out">
          <thead>
            <tr>
              <th>Dosis ({unit})</th>
              <th>Bomba (mL/h)</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((d) => (
              <tr key={d}>
                <td>{number(d)}</td>
                <td>{formatNumber(rateFromDose({ ...input, dose: d }), 1)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {preset && (
        <div className="mt-3">
          <DrugLinks ids={[preset.drug]} />
        </div>
      )}
    </div>
  )
}

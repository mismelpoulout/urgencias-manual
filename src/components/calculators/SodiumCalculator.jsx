import { useState } from 'react'
import Table from '../content/Table.jsx'
import Calculator, { Checkbox, Field, InvalidInput, NumberField, controlClass } from './Calculator.jsx'
import { SODIUM, WEIGHT, formatNumber, parseInRange } from '../../lib/format.js'
import { correctionLimit, sodiumChange } from '../../lib/sodium.js'

const f = (x, decimals = 1) => formatNumber(x, decimals)

// factor: fracción de agua corporal total
const GROUPS = [
  { label: 'Hombre <65 años', factor: 0.6 },
  { label: 'Mujer <65 años', factor: 0.5 },
  { label: 'Hombre ≥65 años', factor: 0.5 },
  { label: 'Mujer ≥65 años', factor: 0.45 },
]
const SOLUTIONS = [
  ['NaCl 3%', 513],
  ['NaCl 0,9%', 154],
  ['Ringer lactato', 130],
  ['NaCl 0,45%', 77],
  ['SG 5%', 0],
]
const COLUMNS = ['Solución', 'Na⁺ mEq/L', 'Cambio por 1 L']

function Results({ weight, sodium, factor, highRisk }) {
  const tbw = weight * factor // agua corporal total
  const change = (concentration) => sodiumChange(concentration, sodium, tbw)
  const limit = correctionLimit(sodium, highRisk)

  return (
    <>
      <p>
        <strong>Agua corporal total:</strong> {f(tbw)} L
      </p>
      {sodium < 135 && (
        <p>
          <strong>Hiponatremia.</strong> Un bolo de 150 mL de NaCl 3% eleva el Na ≈{' '}
          <b className="text-red">{f(change(513) * 0.15)} mEq/L</b>. Para subir 5 mEq/L se requieren ≈{' '}
          {f((5 / change(513)) * 1000, 0)} mL de NaCl 3%. Límite: {limit} mEq/L en 24 h (Na objetivo ≤ {f(sodium + limit, 0)}).
        </p>
      )}
      {sodium > 145 && (
        <p>
          <strong>Hipernatremia.</strong> Déficit de agua libre ≈ <b className="text-red">{f(tbw * (sodium / 140 - 1))} L</b>. Para
          bajar 10 mEq/L en 24 h (crónica) se necesitan ≈ {f(10 / Math.abs(change(0)), 1)} L de SG 5%, más las pérdidas en curso.
        </p>
      )}
      <Table className="out">
        <thead>
          <tr>
            {COLUMNS.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SOLUTIONS.map(([name, concentration]) => (
            <tr key={name}>
              <td>{name}</td>
              <td>{concentration}</td>
              <td>
                {change(concentration) > 0 ? '+' : ''}
                {f(change(concentration))} mEq/L
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default function SodiumCalculator() {
  const [weight, setWeight] = useState('70')
  const [sodium, setSodium] = useState('118')
  const [group, setGroup] = useState(0)
  const [highRisk, setHighRisk] = useState(false)
  const w = parseInRange(weight, WEIGHT)
  const na = parseInRange(sodium, SODIUM)
  const valid = w !== null && na !== null

  return (
    <Calculator
      title="Calculadora de sodio"
      summary={
        valid
          ? `Peso: ${formatNumber(w, 2)} kg · Na⁺ actual: ${formatNumber(na, 2)} mEq/L · ${GROUPS[group].label} · Alto riesgo de desmielinización: ${highRisk ? 'sí' : 'no marcado'}`
          : 'Sin cálculo: datos no válidos.'
      }
      note="Estimaciones teóricas: la respuesta real varía con la diuresis y las pérdidas. Medir el Na cada 2-4 h."
      fields={
        <>
          <NumberField label="Peso (kg)" range={WEIGHT} value={weight} onChange={setWeight} />
          <NumberField label="Na⁺ actual (mEq/L)" range={SODIUM} value={sodium} onChange={setSodium} />
          <Field label="Grupo">
            <select className={`${controlClass} xs:!w-[190px]`} value={group} onChange={(e) => setGroup(Number(e.target.value))}>
              {GROUPS.map((g, i) => (
                <option key={g.label} value={i}>{g.label}</option>
              ))}
            </select>
          </Field>
          <Checkbox
            label="Alto riesgo de desmielinización: alcoholismo, desnutrición, hipokalemia, cirrosis o trasplante hepático"
            checked={highRisk}
            onChange={setHighRisk}
          />
        </>
      }
    >
      {valid ? (
        <Results weight={w} sodium={na} factor={GROUPS[group].factor} highRisk={highRisk} />
      ) : (
        <InvalidInput>
          Ingrese un peso entre {WEIGHT.min} y {WEIGHT.max} kg y un Na⁺ entre {SODIUM.min} y {SODIUM.max} mEq/L.
        </InvalidInput>
      )}
    </Calculator>
  )
}

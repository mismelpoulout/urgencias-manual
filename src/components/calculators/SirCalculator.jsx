import { useState } from 'react'
import Table from '../content/Table.jsx'
import Calculator, { Checkbox, InvalidInput, NumberField } from './Calculator.jsx'
import { WEIGHT, formatNumber, parseInRange } from '../../lib/format.js'
import { sirDoses } from '../../lib/sir.js'

export default function SirCalculator() {
  const [weight, setWeight] = useState('70')
  const [shock, setShock] = useState(false)
  const w = parseInRange(weight, WEIGHT)
  const columns = w === null ? [] : ['Fármaco', 'Dosis', `Para ${formatNumber(w, 2)} kg`, 'Nota']

  return (
    <Calculator
      title="Calculadora SIR por peso"
      summary={w === null ? 'Sin cálculo: peso no válido.' : `Peso: ${formatNumber(w, 2)} kg · Paciente en shock / inestable: ${shock ? 'sí' : 'no'}`}
      note="Herramienta de apoyo: confirmar siempre con el protocolo local y ajustar en obesidad (inductor según peso ideal o ajustado, succinilcolina y rocuronio según peso real)."
      fields={
        <>
          <NumberField label="Peso (kg)" range={WEIGHT} value={weight} onChange={setWeight} />
          <Checkbox label="Paciente en shock / inestable" checked={shock} onChange={setShock} />
        </>
      }
    >
      {w === null ? (
        <InvalidInput>
          Ingrese un peso entre {WEIGHT.min} y {WEIGHT.max} kg para calcular las dosis.
        </InvalidInput>
      ) : (
        <Table className="out">
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sirDoses(w, shock).map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i}>{row[0] === 'Rocuronio' && i === 2 ? <b className="text-red">{cell}</b> : cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Calculator>
  )
}

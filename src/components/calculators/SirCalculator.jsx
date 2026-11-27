import { useState } from 'react'
import Table from '../content/Table.jsx'
import Calculator, { Field, controlClass, formatNumber as f } from './Calculator.jsx'

const COLUMNS = ['Fármaco', 'Dosis', null, 'Nota']

// w: peso en kg · shock: paciente inestable
function doses(w, shock) {
  const induction = (low, high) => `${f(w * low)}-${f(w * high)} mg`
  return [
    ['Etomidato', shock ? '0,15-0,2 mg/kg' : '0,3 mg/kg', shock ? induction(0.15, 0.2) : `${f(w * 0.3)} mg`, 'Inductor'],
    ['Ketamina', shock ? '0,5-1 mg/kg' : '1-2 mg/kg', shock ? induction(0.5, 1) : induction(1, 2), 'Inductor'],
    ['Propofol', shock ? '0,5-1 mg/kg' : '1-2 mg/kg', shock ? induction(0.5, 1) : induction(1, 2), shock ? 'Evitar en shock' : 'Inductor'],
    ['Midazolam', '0,1-0,3 mg/kg', `${f(w * 0.1, 1)}-${f(w * 0.3, 1)} mg`, 'Inductor alternativo'],
    ['Fentanilo (pretratamiento)', '1-3 mcg/kg', `${f(w)}-${f(w * 3)} mcg`, shock ? 'Omitir o reducir en shock' : '3 min antes'],
    ['Succinilcolina', '1,5 mg/kg', `${f(w * 1.5)} mg`, 'Bloqueador · ver contraindicaciones'],
    ['Rocuronio', '1,2 mg/kg', <b className="text-red">{f(w * 1.2)} mg</b>, 'Bloqueador'],
    ['Sugammadex (rescate)', '16 mg/kg', `${f(w * 16)} mg`, 'Reversión inmediata'],
    ['Atropina (bradicardia)', 'dosis fija', '0,5-1 mg', 'Si FC <50'],
  ]
}

export default function SirCalculator() {
  const [weight, setWeight] = useState('70')
  const [shock, setShock] = useState(false)
  const w = Math.min(250, Math.max(20, parseFloat(weight) || 0))
  const columns = COLUMNS.map((c) => c ?? `Para ${f(w)} kg`)

  return (
    <Calculator
      title="Calculadora SIR por peso"
      note="Herramienta de apoyo: confirmar siempre con el protocolo local y ajustar en obesidad (inductor según peso ideal o ajustado, succinilcolina y rocuronio según peso real)."
      fields={
        <>
          <Field label="Peso (kg)">
            <input className={controlClass} type="number" inputMode="decimal" min="20" max="250" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </Field>
          <label className="flex min-h-11 basis-full items-center gap-2 xs:basis-auto text-[13px] leading-[normal] font-medium text-ink2 print:hidden">
            <input className="size-5 accent-red" type="checkbox" checked={shock} onChange={(e) => setShock(e.target.checked)} />
            Paciente en shock / inestable
          </label>
        </>
      }
    >
      <Table className="out">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {doses(w, shock).map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) => (
                <td key={i}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Calculator>
  )
}

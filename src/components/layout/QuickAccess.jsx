import { DRUGS } from '../../content/drugs.js'
import { SCORES } from '../../content/scores/index.js'

const LINKS = [
  ['#c23-s2', 'Cronómetro de paro', 'Ciclos, adrenalina y registro'],
  ['#c23-s3', 'Infusiones', 'De mcg/kg/min a mL/h'],
  ['#c23-s4', 'Algoritmos', 'Dolor torácico, ACV, anafilaxia'],
  ['#c23-s1', 'Código Sepsis', 'Cronómetro 1 h · 3 h · 6 h'],
  ['#c3-s5', 'Intubación rápida', 'Calculadora de dosis por peso'],
  ['#c13-s1', 'Hiperkalemia', 'Calcio, insulina-glucosa, salbutamol'],
  ['#c13-s6', 'Hiponatremia grave', 'NaCl 3% y límites de corrección'],
  ['#c15-s1', '¿Central o periférica?', 'Parálisis facial en 5 segundos'],
  ['#c20-s1', 'Atlas de ECG', '16 ritmos animados con sonido'],
  ['#ca-s1', 'Calculadoras de scores', `${SCORES.length} scores con conducta sugerida`],
  ['#c22-analgesicos', 'Vademécum', `${DRUGS.length} fármacos por grupo`],
  ['#c22-mezclas', '¿Se pueden mezclar?', 'Interacciones y vía intravenosa'],
]

export default function QuickAccess() {
  return (
    <aside
      aria-label="Acceso rápido"
      className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] content-start rounded-[18px] border border-line bg-bg p-2.5 shadow-[0_14px_40px_rgba(200,16,46,.08)]"
    >
      <p className="col-span-full mx-2.5 my-1.5 text-[13px] leading-[normal] font-semibold text-ink2">Acceso rápido en el turno</p>
      {LINKS.map(([href, title, detail]) => (
        <a key={href} href={href} className="block rounded-xl px-3 py-2.5 md:py-1.5 text-ink no-underline hover:bg-redt">
          <b className="block text-[15.5px] leading-[normal] font-semibold">{title}</b>
          <span className="block text-[13px] leading-[1.35] text-ink2">{detail}</span>
        </a>
      ))}
    </aside>
  )
}

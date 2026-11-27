import { useState } from 'react'
import EcgSvg from './EcgSvg.jsx'
import { ECG_GUIDE } from '../../content/ecgGuide.js'
import { rates } from '../../lib/ecg.js'
import { useEcgPlayer } from '../../lib/useEcgPlayer.js'

const button =
  'inline-flex h-9 pointer-coarse:h-11 items-center gap-1.5 rounded-full border border-line bg-bg px-3.5 font-sans text-[13px] leading-[normal] font-semibold text-ink hover:border-red aria-pressed:border-red aria-pressed:bg-redt aria-pressed:text-red'

function Toggle({ pressed, onChange, children }) {
  return (
    <button type="button" className={button} aria-pressed={pressed} onClick={() => onChange(!pressed)}>
      {children}
    </button>
  )
}

function rateLabel(type) {
  if (type === 'fv') return 'Sin QRS'
  const { ventricular, atrial } = rates(type)
  if (atrial && atrial !== ventricular) return `Auricular ${atrial} · Ventricular ${ventricular} lpm`
  return `FC ≈ ${ventricular} lpm`
}

// Trazado con controles de reproducción, sonido y comparación.
// mystery: oculta nombre, frecuencia y guía (autoevaluación).
export default function EcgPlayer({ type, mystery = false }) {
  const [sound, setSound] = useState(true)
  const [pSound, setPSound] = useState(false)
  const [slow, setSlow] = useState(false)
  const [compare, setCompare] = useState(false)
  const { playing, started, toggle, box, path, dot } = useEcgPlayer(type, { sound, pSound, speed: slow ? 0.5 : 1 })
  const { name, look, listen } = ECG_GUIDE[type]
  const hasP = rates(type).atrial !== null && type !== 'fv'

  return (
    <div ref={box}>
      <EcgSvg type={type} live={started} liveRef={path} dotRef={dot} compare={compare} mystery={mystery} />
      <div data-noindex className="print:hidden">
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <button
            type="button"
            className={`${button} min-w-[116px] justify-center`}
            onClick={toggle}
            aria-label={`${playing ? 'Pausar' : 'Reproducir'}: ${mystery ? 'trazado por identificar' : name}`}
          >
            <span aria-hidden="true">{playing ? '❚❚' : '▶'}</span>
            {playing ? 'Pausar' : 'Reproducir'}
          </button>
          {started && (
            <>
              <Toggle pressed={sound} onChange={setSound}>Sonido</Toggle>
              {hasP && !mystery && <Toggle pressed={sound && pSound} onChange={(on) => { setPSound(on); if (on) setSound(true) }}>Sonido onda P</Toggle>}
              <Toggle pressed={slow} onChange={setSlow}>Lento 0,5×</Toggle>
              {!mystery && type !== 'sinus' && <Toggle pressed={compare} onChange={setCompare}>Comparar con sinusal</Toggle>}
            </>
          )}
          {!mystery && <span className="ml-auto text-[13px] font-semibold text-ink2 tabular-nums">{rateLabel(type)}</span>}
        </div>
        {started && !mystery && (
          <dl className="mt-2 rounded-xl bg-bg2 px-3.5 py-2.5 text-[13.5px] leading-[1.45]">
            <dt className="font-semibold text-red">Qué mirar</dt>
            <dd className="mb-1.5">{look}</dd>
            <dt className="font-semibold text-blue">Qué escuchar</dt>
            <dd>{listen}</dd>
            {compare && <dd className="mt-1.5 text-ink2">Línea azul discontinua: ritmo sinusal normal.</dd>}
            {pSound && sound && hasP && <dd className="mt-1.5 text-ink2">El tono grave de la onda P es una ayuda didáctica: un monitor real no lo emite.</dd>}
          </dl>
        )}
      </div>
    </div>
  )
}

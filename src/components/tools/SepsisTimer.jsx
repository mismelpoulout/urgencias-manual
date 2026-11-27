import { useEffect, useRef, useState } from 'react'
import { CopyButton, ResetButton, primaryButton, startedAt, toolButton } from './TimerControls.jsx'
import { playTone, unlockAudio } from '../../lib/beep.js'
import { formatClock } from '../../lib/clock.js'
import { WEIGHT, formatNumber, parseInRange } from '../../lib/format.js'
import { sepsisSummary, setTask, startSepsis } from '../../lib/sepsis.js'
import { useStore } from '../../lib/store.js'
import { sepsisStore } from '../../lib/timers.js'
import { useNow } from '../../lib/useNow.js'

const input = 'h-11 w-full rounded-[10px] border-[1.5px] border-line bg-bg2 px-2.5 text-[16px] font-normal text-ink xs:w-[190px]'
const MINUTES = { min: 0, max: 360 }

const STATUS = {
  pending: { box: 'border-line', text: (t) => `Quedan ${formatClock(t.remaining)}` },
  overdue: { box: 'border-red bg-redt', text: (t) => `Plazo vencido hace ${formatClock(t.remaining)}` },
  done: { box: 'border-blue bg-bluet', text: (t) => `✓ Hecho a los ${formatClock(t.at)}, a tiempo` },
  late: { box: 'border-amber bg-ambert', text: (t) => `Hecho a los ${formatClock(t.at)}, fuera de plazo` },
  na: { box: 'border-line bg-bg2', text: () => 'No aplica' },
}

function Start() {
  const [minutes, setMinutes] = useState('')
  const parsed = minutes === '' ? 0 : parseInRange(minutes, MINUTES)

  return (
    <div className="flex flex-wrap items-end gap-3">
      <label className="flex flex-col gap-1 text-[13.5px] font-medium text-ink2">
        Minutos ya transcurridos desde el triaje
        <input className={input} type="number" inputMode="numeric" min="0" max="360" placeholder="0" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
      </label>
      <button
        type="button"
        className={primaryButton}
        disabled={parsed === null}
        onClick={() => {
          unlockAudio()
          sepsisStore.set(startSepsis(Date.now(), parsed))
        }}
      >
        Activar Código Sepsis
      </button>
      {parsed === null && <p role="alert" className="!mb-0 basis-full text-red">Ingrese entre 0 y 360 minutos.</p>}
    </div>
  )
}

function Running({ state }) {
  const [weight, setWeight] = useState('')
  const [sound, setSound] = useState(true)
  const now = useNow(true)
  const { elapsed, tasks, complete } = sepsisSummary(state, now)
  const w = parseInRange(weight, WEIGHT)

  // Avisa una vez cuando vence un plazo (no repite los que ya estaban vencidos al abrir)
  const overdue = tasks.filter((t) => t.status === 'overdue').length
  const warned = useRef(overdue)
  useEffect(() => {
    if (overdue > warned.current && sound) playTone('alarm')
    warned.current = overdue
  }, [overdue, sound])

  const mark = (id, status) => {
    unlockAudio() // tras recargar la página, el primer toque reactiva el aviso sonoro
    sepsisStore.set((s) => setTask(s, id, status, Date.now()))
  }
  const record = () =>
    [
      `Código Sepsis · tiempo cero ${startedAt(state.start)}`,
      ...tasks.map((t) => `- [${t.goal} h] ${t.label}: ${STATUS[t.status].text(t)}`),
      `Tiempo transcurrido al copiar: ${formatClock(elapsed)}`,
    ].join('\n')

  return (
    <>
      <p className="!mb-1 text-[13.5px] text-ink2">Tiempo cero: {startedAt(state.start)}</p>
      <p className="!mb-2 text-[48px] leading-none font-bold tabular-nums" role="timer">{formatClock(elapsed)}</p>
      {elapsed > 8 * 3600_000 && <p role="alert" className="font-semibold text-red">Este registro tiene más de 8 horas: reinícielo si es otro paciente.</p>}
      {complete && <p className="font-semibold text-blue">Todas las medidas están registradas.</p>}
      <label className="mb-3 flex flex-col gap-1 text-[13.5px] font-medium text-ink2">
        Peso para calcular los fluidos (kg)
        <input className={input} type="number" inputMode="decimal" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </label>
      {[1, 3, 6].map((goal) => (
        <div key={goal}>
          <h3>Dentro de {goal} h</h3>
          <ul className="!mb-3 grid gap-2 !pl-0">
            {tasks.filter((t) => t.goal === goal).map((t) => (
              <li key={t.id} data-task={t.id} className={`!mb-0 list-none rounded-xl border-[1.5px] p-3 ${STATUS[t.status].box}`}>
                <p className="!mb-0.5 font-semibold">{t.label}</p>
                {t.note && <p className="mini !mb-0.5">{t.note}</p>}
                {t.id === 'fluidos' && w !== null && <p className="!mb-0.5 font-semibold">Volumen para {formatNumber(w, 1)} kg: {formatNumber(w * 30)} mL</p>}
                <p className="!mb-2 text-[14px] tabular-nums">{STATUS[t.status].text(t)}</p>
                <div className="flex flex-wrap gap-2">
                  {t.status === 'pending' || t.status === 'overdue' ? (
                    <>
                      <button type="button" className={toolButton} onClick={() => mark(t.id, 'done')}>Marcar hecho</button>
                      {t.optional && <button type="button" className={toolButton} onClick={() => mark(t.id, 'na')}>No aplica</button>}
                    </>
                  ) : (
                    <button type="button" className={toolButton} onClick={() => mark(t.id, null)}>Deshacer</button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="flex flex-wrap gap-2">
        <button type="button" className={toolButton} aria-pressed={sound} onClick={() => { unlockAudio(); setSound((s) => !s) }}>Aviso sonoro</button>
        <CopyButton text={record} />
        <ResetButton onConfirm={() => sepsisStore.set(null)} />
      </div>
    </>
  )
}

export default function SepsisTimer() {
  const state = useStore(sepsisStore)
  return (
    <div data-noindex className="my-4 rounded-[14px] border-[1.5px] border-line p-3 xs:p-4 print:hidden">
      {state ? <Running state={state} /> : <Start />}
    </div>
  )
}

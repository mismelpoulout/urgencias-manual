import { useEffect, useRef, useState } from 'react'
import { CopyButton, ResetButton, primaryButton, startedAt, toolButton } from './TimerControls.jsx'
import { ADRENALINE_MIN, EVENT_LABELS, addEvent, arrestSummary, startArrest, undoEvent } from '../../lib/arrest.js'
import { playTone, unlockAudio } from '../../lib/beep.js'
import { formatClock } from '../../lib/clock.js'
import { useStore } from '../../lib/store.js'
import { arrestStore } from '../../lib/timers.js'
import { useNow } from '../../lib/useNow.js'

const COMPRESSIONS = 110 // por minuto
const CAUSES = 'Hipoxia · Hipovolemia · H⁺ (acidosis) · Hipo/hiperkalemia · Hipotermia · Neumotórax a tensión · Taponamiento · Tóxicos · Trombosis coronaria o pulmonar'

// Marca el ritmo de las compresiones, programando el audio por adelantado.
function useMetronome(active) {
  useEffect(() => {
    if (!active) return
    const interval = 60 / COMPRESSIONS
    let next = performance.now() / 1000
    const schedule = () => {
      const now = performance.now() / 1000
      if (next < now) next = now
      while (next < now + 1.2) {
        playTone('click', next - now)
        next += interval
      }
    }
    schedule()
    const timer = setInterval(schedule, 400)
    return () => clearInterval(timer)
  }, [active])
}

// Evita que la pantalla se apague durante la reanimación (si el navegador lo permite).
function useWakeLock(active) {
  useEffect(() => {
    if (!active || !navigator.wakeLock) return
    let lock
    let cancelled = false
    const request = () => {
      if (document.hidden) return
      navigator.wakeLock.request('screen').then((l) => (cancelled ? l.release() : (lock = l))).catch(() => {})
    }
    request()
    document.addEventListener('visibilitychange', request)
    return () => {
      cancelled = true
      document.removeEventListener('visibilitychange', request)
      lock?.release().catch(() => {})
    }
  }, [active])
}

function Card({ label, value, detail, alert }) {
  return (
    <div className={`rounded-xl border-[1.5px] p-3 ${alert ? 'border-red bg-redt' : 'border-line'}`}>
      <span className="block text-[12.5px] font-semibold text-ink2">{label}</span>
      <strong className="block text-[30px] leading-[1.15] tabular-nums">{value}</strong>
      <span className={`text-[13.5px] leading-[1.35] ${alert ? 'font-semibold text-red' : 'text-ink2'}`}>{detail}</span>
    </div>
  )
}

function Running({ state }) {
  const [sound, setSound] = useState(true)
  const [metronome, setMetronome] = useState(false)
  const finished = state.events.some((e) => e.type === 'rosc')
  const now = useNow(!finished)
  const s = arrestSummary(state, now)
  useMetronome(metronome && !s.finished)
  useWakeLock(!s.finished)

  const cycleOver = !s.finished && s.cycleRemaining <= 0
  const adrenalineDue = !s.finished && (s.adrenaline === 'due' || s.adrenaline === 'overdue')

  const warned = useRef({ cycle: cycleOver, adrenaline: adrenalineDue })
  useEffect(() => {
    const before = warned.current
    if (sound && ((cycleOver && !before.cycle) || (adrenalineDue && !before.adrenaline))) playTone('alarm')
    warned.current = { cycle: cycleOver, adrenaline: adrenalineDue }
  }, [cycleOver, adrenalineDue, sound])

  const add = (type, detail) => {
    unlockAudio()
    arrestStore.set((current) => addEvent(current, type, Date.now(), detail))
  }
  const line = (e) => `${formatClock(e.at - state.start)}  ${EVENT_LABELS[e.type]}${e.detail ? ` ${e.detail}` : ''}`
  const record = () =>
    [`Paro cardíaco · inicio ${startedAt(state.start)}`, ...state.events.map(line), `Duración: ${formatClock(s.elapsed)}`].join('\n')

  const adrenalineDetail = {
    unknown: 'Indique el tipo de ritmo',
    wait: s.sinceAdrenaline === null ? 'Desde el segundo ciclo' : `Próxima desde ${formatClock(ADRENALINE_MIN - s.sinceAdrenaline)}`,
    due: 'Corresponde administrar 1 mg',
    overdue: 'Atrasada: más de 5 min',
  }[s.adrenaline]

  return (
    <>
      <p className="!mb-1 text-[13.5px] text-ink2">Inicio: {startedAt(state.start)}</p>
      <p className="!mb-2 text-[48px] leading-none font-bold tabular-nums" role="timer">{formatClock(s.elapsed)}</p>
      {!s.finished && s.elapsed > 2 * 3600_000 && <p role="alert" className="font-semibold text-red">Este registro tiene más de 2 horas: reinícielo si es otro paciente.</p>}
      {s.finished && <p className="font-semibold text-blue">Retorno de circulación espontánea. Iniciar cuidados posparo.</p>}

      <div className="mb-3 grid gap-2 xs:grid-cols-3">
        <Card
          label={`Ciclo ${s.cycle} de compresiones`}
          value={s.finished ? '—' : formatClock(Math.max(0, s.cycleRemaining))}
          detail={cycleOver ? 'Controlar ritmo ahora' : 'Hasta el control de ritmo'}
          alert={cycleOver}
        />
        <Card label={`Adrenalina · ${s.adrenalines} dosis`} value={s.sinceAdrenaline === null ? '—' : formatClock(s.sinceAdrenaline)} detail={s.finished ? 'Registro cerrado' : adrenalineDetail} alert={adrenalineDue} />
        <Card
          label={`Descargas · amiodarona ${s.amiodarones} dosis`}
          value={s.shocks}
          detail={!s.finished && s.amiodarone ? `Considerar amiodarona ${s.amiodarone}` : 'Descargas administradas'}
          alert={!s.finished && Boolean(s.amiodarone)}
        />
      </div>

      {!s.finished && (
        <>
          <div className="mb-3 grid gap-2 xs:grid-cols-2" role="group" aria-label="Tipo de ritmo">
            {['desfibrilable', 'no-desfibrilable'].map((type) => (
              <button key={type} type="button" className={toolButton} aria-pressed={s.rhythm === type} onClick={() => s.rhythm !== type && add(type)}>
                {EVENT_LABELS[type]}
              </button>
            ))}
          </div>
          <div className="mb-3 grid grid-cols-2 gap-2 xs:grid-cols-3">
            <button type="button" className={primaryButton} disabled={s.rhythm !== 'desfibrilable'} onClick={() => add('shock')}>Descarga</button>
            <button type="button" className={primaryButton} onClick={() => add('check')}>Control sin descarga</button>
            <button type="button" className={primaryButton} onClick={() => add('adrenaline')}>Adrenalina 1 mg</button>
            <button type="button" className={primaryButton} disabled={s.rhythm !== 'desfibrilable' || s.amiodarones >= 2} onClick={() => add('amiodarone', s.amiodarones ? '150 mg' : '300 mg')}>
              Amiodarona {s.amiodarones ? '150' : '300'} mg
            </button>
            <button type="button" className={`${toolButton} col-span-2`} onClick={() => add('rosc')}>Retorno de circulación (RCE)</button>
          </div>
          <p className="mini">Compresiones 100-120/min y 5-6 cm de profundidad. Desfibrilar con 200 J bifásico (360 J monofásico). Buscar causas reversibles: {CAUSES}.</p>
        </>
      )}

      <h3>Registro</h3>
      {state.events.length ? (
        <ol className="!pl-0 text-[14px] tabular-nums">
          {state.events.map((e, i) => (
            <li key={i} className="list-none border-b border-line py-1">{line(e)}</li>
          ))}
        </ol>
      ) : (
        <p className="mini">Aún sin eventos.</p>
      )}
      <div className="flex flex-wrap gap-2">
        <button type="button" className={toolButton} disabled={!state.events.length} onClick={() => arrestStore.set(undoEvent)}>Deshacer último</button>
        {!s.finished && (
          <>
            <button type="button" className={toolButton} aria-pressed={metronome} onClick={() => { unlockAudio(); setMetronome((m) => !m) }}>Metrónomo {COMPRESSIONS}/min</button>
            <button type="button" className={toolButton} aria-pressed={sound} onClick={() => { unlockAudio(); setSound((v) => !v) }}>Aviso sonoro</button>
          </>
        )}
        <CopyButton text={record} />
        <ResetButton onConfirm={() => arrestStore.set(null)} />
      </div>
    </>
  )
}

export default function ArrestTimer() {
  const state = useStore(arrestStore)
  return (
    <div data-noindex className="my-4 rounded-[14px] border-[1.5px] border-line p-3 xs:p-4 print:hidden">
      {state ? (
        <Running key={state.start} state={state} />
      ) : (
        <button
          type="button"
          className={`${primaryButton} w-full !min-h-14 text-[17px] xs:w-auto`}
          onClick={() => {
            unlockAudio()
            arrestStore.set(startArrest(Date.now()))
          }}
        >
          Iniciar paro cardíaco
        </button>
      )}
    </div>
  )
}

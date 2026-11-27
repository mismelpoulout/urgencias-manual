import { useCallback, useEffect, useRef, useState } from 'react'
import { playTone, silence, unlockAudio } from './beep.js'
import { DURATION, STEP, events, mapX, mapY, segment, wave } from './ecg.js'

const LOOKAHEAD = 0.1 // segundos reales de audio que se programan por adelantado
const GAP = 0.15 // segundos en blanco delante del barrido

// Solo un trazado puede estar en marcha: evita mezclar sonidos.
let pauseCurrent = null

// Animación tipo monitor de un trazado, sincronizada con su sonido.
export function useEcgPlayer(type, { sound, pSound, speed }) {
  const [playing, setPlaying] = useState(false)
  const [started, setStarted] = useState(false)
  const box = useRef(null)
  const path = useRef(null)
  const dot = useRef(null)
  const time = useRef(0) // segundos de señal transcurridos
  const windows = useRef(new Map())
  const options = useRef({ sound, pSound, speed })

  useEffect(() => {
    options.current = { sound, pSound, speed }
    if (!sound) silence()
  }, [sound, pSound, speed])

  const pause = useCallback(() => setPlaying(false), [])

  const toggle = () => {
    if (playing) return pause()
    unlockAudio()
    pauseCurrent?.()
    pauseCurrent = pause
    setStarted(true)
    setPlaying(true)
  }

  useEffect(() => {
    if (!playing) return

    // Coordenadas de la ventana n del trazado; se conservan la actual y la anterior.
    const coordinates = (n) => {
      const saved = windows.current
      if (!saved.has(n)) {
        const points = n === 0 ? wave(type) : segment(type, n * DURATION)
        saved.set(n, points.map(([x, v]) => `${mapX(x).toFixed(1)} ${mapY(v).toFixed(1)}`))
        saved.delete(n - 2)
      }
      return saved.get(n)
    }

    const draw = (t) => {
      const n = Math.floor(t / DURATION)
      const head = Math.floor((t - n * DURATION) / STEP)
      const current = coordinates(n).slice(0, head + 1)
      // Por delante del barrido queda la vuelta anterior
      const previous = coordinates(Math.max(0, n - 1)).slice(head + Math.round(GAP / STEP))
      path.current.setAttribute('d', [current, previous].map((c) => (c.length ? `M${c.join('L')}` : '')).join(''))
      const beating = events(type, t - 0.12, t).some((e) => e.kind === 'qrs')
      dot.current.style.opacity = beating ? 1 : 0
    }

    let scheduled = time.current
    let last = null
    let frame

    const tick = (now) => {
      const { sound, pSound, speed } = options.current
      // Se limita el salto para no encadenar bips si el navegador se atrasa
      const elapsed = last === null ? 0 : Math.min((now - last) / 1000, 0.1)
      last = now
      time.current += elapsed * speed
      draw(time.current)

      const horizon = time.current + LOOKAHEAD * speed
      if (sound && horizon > scheduled) {
        for (const e of events(type, scheduled, horizon)) {
          if (e.kind !== 'p' || pSound) playTone(e.kind, Math.max(0, (e.t - time.current) / speed))
        }
      }
      scheduled = Math.max(scheduled, horizon)
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    // Pausa al salir de la pantalla o al cambiar de pestaña
    const observer = new IntersectionObserver(([entry]) => !entry.isIntersecting && pause())
    observer.observe(box.current)
    const hidden = () => document.hidden && pause()
    document.addEventListener('visibilitychange', hidden)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      document.removeEventListener('visibilitychange', hidden)
      silence()
      if (dot.current) dot.current.style.opacity = 0
    }
  }, [playing, type, pause])

  return { playing, started, toggle, box, path, dot }
}

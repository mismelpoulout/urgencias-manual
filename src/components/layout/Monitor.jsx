import { useEffect, useRef, useState } from 'react'
import { DURATION, wave } from '../../lib/ecg.js'
import { prefersReducedMotion } from '../../lib/motion.js'

// Monitor de ECG animado de la portada.
export default function Monitor() {
  const svg = useRef(null)
  const path = useRef(null)
  const [heartRate, setHeartRate] = useState(72)

  useEffect(() => {
    const still = prefersReducedMotion()
    let width = 0
    let points = []
    let frame

    const draw = (now, start) => {
      const sweep = still ? width : (((now - start) / 1000) * (width / DURATION)) % width
      const gap = width * 0.035
      let d = ''
      let pen = false
      for (const [x, y] of points) {
        if (x > sweep && x < sweep + gap) {
          pen = false
          continue
        }
        d += `${pen ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`
        pen = true
      }
      path.current.setAttribute('d', d)
    }
    const start = performance.now()
    const loop = (now) => {
      draw(now, start)
      frame = requestAnimationFrame(loop)
    }

    const resize = () => {
      width = svg.current.clientWidth
      const height = svg.current.clientHeight
      if (!width) return
      svg.current.setAttribute('viewBox', `0 0 ${width} ${height}`)
      points = wave('sinus').map(([x, v]) => [(x * width) / DURATION, height * 0.62 - v * height * 0.42])
      if (still) draw(start, start)
    }
    const observer = new ResizeObserver(resize)
    observer.observe(svg.current)
    resize()
    if (!still) frame = requestAnimationFrame(loop)
    const timer = still ? null : setInterval(() => setHeartRate(70 + Math.round(Math.random() * 6)), 1600)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="relative mt-7 h-[clamp(150px,20vw,230px)]" aria-hidden="true">
      <svg ref={svg} preserveAspectRatio="none" className="absolute inset-0 size-full">
        <path ref={path} className="fill-none stroke-red [stroke-linecap:round] [stroke-linejoin:round] [stroke-width:2.4]" />
      </svg>
      <div className="absolute top-2 right-[max(5vw,16px)] hidden text-right text-[13px] leading-[normal] font-semibold text-ink2 xs:block">
        FC<b className="block text-[clamp(34px,4vw,52px)] leading-none font-bold text-red tabular-nums">{heartRate}</b>lpm · DII
      </div>
    </div>
  )
}

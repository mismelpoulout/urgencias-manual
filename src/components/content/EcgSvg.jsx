import { memo } from 'react'
import { toPath, wave } from '../../lib/ecg.js'

const W = 600
const H = 130
const MM = 4
const BASELINE = H * 0.6

const steps = (max) => Array.from({ length: Math.floor(max / MM) + 1 }, (_, i) => i * MM)
const gridClass = (v) => (v % (5 * MM) ? 'stroke-grid2 [stroke-width:.5]' : 'stroke-grid [stroke-width:1]')

// Papel milimetrado: 25 mm/s y 10 mm/mV
function EcgSvg({ type, lead = 'DII' }) {
  const d = toPath(wave(type), (x) => x * 25 * MM, (v) => BASELINE - v * 10 * MM)
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={`Trazado ECG ${type}`}
      className="block h-auto w-full rounded-[10px] border border-grid bg-paper"
    >
      {steps(W).map((x) => (
        <line key={`x${x}`} className={gridClass(x)} x1={x} y1={0} x2={x} y2={H} />
      ))}
      {steps(H).map((y) => (
        <line key={`y${y}`} className={gridClass(y)} x1={0} y1={y} x2={W} y2={y} />
      ))}
      <text className="fill-red font-sans text-[11px] font-semibold max-xs:text-[18px]" x={8} y={15}>
        {lead}
      </text>
      <path className="fill-none stroke-trace [stroke-linejoin:round] [stroke-width:1.6] [vector-effect:non-scaling-stroke]" d={d} />
    </svg>
  )
}

export default memo(EcgSvg)

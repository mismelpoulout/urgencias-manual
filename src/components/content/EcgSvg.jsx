import { memo } from 'react'
import { ECG_GUIDE } from '../../content/ecgGuide.js'
import { MM, PAPER_HEIGHT, mapX, mapY, toPath, wave } from '../../lib/ecg.js'

const W = 600
const H = PAPER_HEIGHT

const steps = (max) => Array.from({ length: Math.floor(max / MM) + 1 }, (_, i) => i * MM)
const gridClass = (v) => (v % (5 * MM) ? 'stroke-grid2 [stroke-width:.5]' : 'stroke-grid [stroke-width:1]')
const traceClass = 'fill-none stroke-trace [stroke-linejoin:round] [stroke-width:1.6] [vector-effect:non-scaling-stroke]'

// live: en pantalla se muestra el trazado animado (liveRef); al imprimir, siempre el estático.
function EcgSvg({ type, lead = 'DII', live = false, liveRef, dotRef, compare = false, mystery = false }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={mystery ? 'Trazado ECG por identificar' : `Trazado ECG: ${ECG_GUIDE[type].name}`}
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
      {compare && (
        <path
          className="fill-none stroke-blue opacity-70 [stroke-dasharray:4_3] [stroke-width:1.3] [vector-effect:non-scaling-stroke] print:hidden"
          d={toPath(wave('sinus'), mapX, mapY)}
        />
      )}
      <path className={`${traceClass} ${live ? 'hidden print:inline' : ''}`} d={toPath(wave(type), mapX, mapY)} />
      {liveRef && <path ref={liveRef} className={`${traceClass} ${live ? 'print:hidden' : 'hidden'}`} />}
      {/* Se enciende con cada QRS */}
      {dotRef && <circle ref={dotRef} className="fill-red opacity-0 print:hidden" cx={W - 12} cy={12} r={5} />}
    </svg>
  )
}

export default memo(EcgSvg)

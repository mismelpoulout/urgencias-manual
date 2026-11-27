// Esquemas de respaldo cuando no cargan las imágenes de Wikimedia Commons.
import { rng } from '../../lib/random.js'

const range = (n) => Array.from({ length: n }, (_, i) => i)

export function ChestXray({ finding }) {
  const heart =
    finding === 'ic' ? (
      <path d="M178 160 C140 170 128 225 140 262 C152 300 270 300 292 262 C312 228 292 176 246 166 Z" fill="#c9ced6" opacity=".92" />
    ) : (
      <path d="M190 170 C170 175 160 215 168 250 C176 285 245 292 262 262 C276 238 262 190 232 178 Z" fill="#c9ced6" opacity=".9" />
    )
  return (
    <svg viewBox="0 0 400 320" className="size-full">
      <rect width="400" height="320" fill="#0b0d10" />
      <path d="M150 70 C95 75 70 140 66 250 C64 290 90 300 140 292 C170 288 180 270 182 240 L184 90 C180 74 168 68 150 70Z" fill="#2b2f36" />
      <path d="M250 70 C305 75 330 140 334 250 C336 290 310 300 260 292 C230 288 220 270 218 240 L216 90 C220 74 232 68 250 70Z" fill="#2b2f36" />
      {range(7).map((i) => (
        <path
          key={i}
          d={`M70 ${100 + i * 26} Q130 ${80 + i * 26} 186 ${102 + i * 26}M330 ${100 + i * 26} Q270 ${80 + i * 26} 214 ${102 + i * 26}`}
          stroke="#6a717c"
          strokeWidth="5"
          fill="none"
          opacity=".55"
        />
      ))}
      <rect x="192" y="40" width="16" height="270" fill="#9aa1ab" opacity=".7" />
      {heart}
      {finding === 'ptx' && (
        <>
          <path d="M150 70 C95 75 70 140 66 250 C64 290 90 300 140 292 L150 70Z" fill="#06070a" />
          <path d="M160 92 C120 120 118 220 150 270" stroke="#fff" strokeWidth="2" fill="none" />
          <path d="M150 90 C175 100 182 190 176 250 C168 280 150 278 146 262" fill="#3a3f48" />
          <text x="70" y="160" fill="#ffd24d" fontSize="13" fontFamily="Inter">
            sin trama
          </text>
        </>
      )}
      {finding === 'nac' && (
        <>
          <ellipse cx="135" cy="215" rx="42" ry="30" fill="#e8ebef" opacity=".85" />
          <path d="M118 210l14-6m-6 16l16-8" stroke="#2b2f36" strokeWidth="3" />
        </>
      )}
      {finding === 'ic' && (
        <>
          <g stroke="#e6e9ee" strokeWidth="2" opacity=".8">
            {range(4).map((i) => (
              <g key={i}>
                <line x1="72" y1={240 + i * 9} x2="90" y2={240 + i * 9} />
                <line x1="328" y1={240 + i * 9} x2="310" y2={240 + i * 9} />
              </g>
            ))}
          </g>
          <ellipse cx="150" cy="150" rx="24" ry="40" fill="#dfe3e8" opacity=".35" />
          <ellipse cx="250" cy="150" rx="24" ry="40" fill="#dfe3e8" opacity=".35" />
        </>
      )}
      {finding === 'sdra' &&
        range(26).map((i) => {
          const random = rng(i + 3)
          const cx = (i % 2 ? 230 : 90) + random() * 80
          const cy = 100 + random() * 170
          const r = 10 + random() * 16
          return <circle key={i} cx={cx} cy={cy} r={r} fill="#e3e6ea" opacity=".45" />
        })}
    </svg>
  )
}

export function CtScan({ finding }) {
  if (finding === 'nac') {
    return (
      <svg viewBox="0 0 400 320" className="size-full">
        <rect width="400" height="320" fill="#050607" />
        <ellipse cx="200" cy="165" rx="170" ry="120" fill="#8d929b" />
        <ellipse cx="128" cy="160" rx="72" ry="88" fill="#121417" />
        <ellipse cx="272" cy="160" rx="72" ry="88" fill="#121417" />
        <ellipse cx="200" cy="175" rx="34" ry="44" fill="#a4a9b1" />
        <path d="M80 170 C90 130 140 130 150 168 C150 205 95 215 80 170Z" fill="#c9cdd3" />
        <path d="M95 165l30-8m-22 22l30-10" stroke="#121417" strokeWidth="3" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 400 320" className="size-full">
      <rect width="400" height="320" fill="#050607" />
      <ellipse cx="200" cy="160" rx="122" ry="142" fill="none" stroke="#f1f2f4" strokeWidth="12" />
      <ellipse cx="200" cy="160" rx="112" ry="132" fill="#6c7079" />
      <path d="M182 120 q-20 30 -4 60 M218 120 q20 30 4 60" stroke="#1d2026" strokeWidth="13" fill="none" strokeLinecap="round" />
      <line x1="200" y1="30" x2="200" y2="290" stroke="#5a5e66" strokeWidth="2" />
      {finding === 'hsa' && (
        <path d="M200 205 l-38 -22 l30 6 l-24 -36 l32 30 l0 -40 l8 40 l30 -30 l-22 36 l30 -6 l-38 22 z" fill="#f4f5f7" opacity=".92" />
      )}
      {finding === 'hic' && (
        <>
          <ellipse cx="250" cy="150" rx="34" ry="26" fill="#f4f5f7" />
          <path d="M218 122 q20 30 4 60" stroke="#e8e9ec" strokeWidth="13" fill="none" strokeLinecap="round" />
        </>
      )}
      {finding === 'hsd' && (
        <>
          <path d="M300 60 C340 110 342 210 300 262 C318 210 318 110 300 60Z" fill="#e9eaed" />
          <line x1="200" y1="30" x2="186" y2="290" stroke="#5a5e66" strokeWidth="2" />
        </>
      )}
    </svg>
  )
}

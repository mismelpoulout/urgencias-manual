// Trazados ECG ilustrativos generados matemáticamente (tiempo en segundos, voltaje en mV).
import { rng } from './random.js'

export const DURATION = 6

const gauss = (t, c, w, a) => a * Math.exp(-((t - c) ** 2) / (2 * w * w))
const sigmoid = (t, c, k) => 1 / (1 + Math.exp(-(t - c) / k))

// Latido centrado en la onda R (t = 0)
function beat(t, o) {
  let v = 0
  if (o.p !== false) {
    const pr = o.pr ?? 0.16
    v += gauss(t, -pr + 0.02, o.pw ?? 0.022, o.pa ?? 0.14)
  }
  if (o.prdep) v -= o.prdep * sigmoid(t, -0.11, 0.006) * (1 - sigmoid(t, -0.035, 0.004))
  const qw = o.qw ?? 1
  v +=
    gauss(t, -0.028 * qw, 0.008 * qw, o.qa ?? -0.1) +
    gauss(t, 0, 0.011 * qw, o.ra ?? 1.05) +
    gauss(t, 0.03 * qw, 0.011 * qw, o.sa ?? -0.24)
  if (o.st) v += o.st * sigmoid(t, 0.035 * qw, 0.008) * (1 - sigmoid(t, (o.tc ?? 0.28) + 0.02, 0.03))
  const tc = o.tc ?? 0.28
  const tw = o.tw ?? 0.048
  const ta = o.ta ?? 0.3
  v += gauss(t, tc, tw, ta) + gauss(t, tc + 0.05, tw * 1.15, ta * 0.35)
  if (o.ua) v += gauss(t, tc + (o.uoff ?? 0.18), 0.04, o.ua)
  return v
}

function times(rr, start) {
  const beats = []
  for (let t = start; t < DURATION + rr; t += rr) beats.push(t)
  return beats
}

const sin = (f, x, phase = 0) => Math.sin(2 * Math.PI * f * x + phase)

export const RHYTHMS = {
  sinus: () => ({ beats: times(0.8, 0.25), o: {} }),
  stemi: () => ({ beats: times(0.75, 0.25), o: { st: 0.32, ta: 0.42, tc: 0.27, sa: -0.05 } }),
  fa: () => {
    const random = rng(7)
    const beats = []
    for (let t = 0.2; t < DURATION; t += 0.42 + random() * 0.55) beats.push(t)
    return {
      beats,
      o: { p: false },
      base: (x) => 0.035 * sin(6.3, x) + 0.025 * sin(8.7, x, 1) + 0.015 * sin(11.1, x, 2),
    }
  },
  flutter: () => ({
    beats: times(0.4, 0.18),
    o: { p: false, ta: 0.12 },
    base: (x) => {
      const f = (x * 5) % 1
      return 0.16 * (f < 0.8 ? -f / 0.8 + 0.5 : (f - 0.8) / 0.2 - 0.5)
    },
  }),
  tsv: () => ({ beats: times(0.333, 0.15), o: { p: false, ta: 0.22, tc: 0.2, tw: 0.04 } }),
  tv: () => ({
    beats: times(0.333, 0.12),
    o: { p: false, qw: 3.4, ra: 1.25, qa: -0.05, sa: -0.35, ta: -0.45, tc: 0.17, tw: 0.05 },
  }),
  fv: () => ({
    beats: [],
    o: {},
    base: (x) => (0.25 + 0.18 * sin(0.35, x)) * (sin(4.6, x) + 0.6 * sin(6.1, x, 1.3) + 0.35 * sin(3.1, x, 0.4)),
  }),
  bav1: () => ({ beats: times(0.9, 0.4), o: { pr: 0.32 } }),
  mobitz1: () => {
    const pWaves = []
    const conducted = []
    const prs = [0.16, 0.25, 0.32]
    for (let t = 0.15, i = 0; t < DURATION + 0.5; t += 0.78, i++) {
      pWaves.push(t)
      const k = i % 4
      if (k < 3) conducted.push({ t: t + prs[k], pr: prs[k] })
    }
    return { pWaves, conducted, o: { p: false } }
  },
  mobitz2: () => {
    const pWaves = []
    const conducted = []
    for (let t = 0.15, i = 0; t < DURATION + 0.5; t += 0.72, i++) {
      pWaves.push(t)
      if (i % 3 !== 2) conducted.push({ t: t + 0.18, pr: 0.18 })
    }
    return { pWaves, conducted, o: { p: false } }
  },
  bav3: () => {
    const pWaves = []
    for (let t = 0.1; t < DURATION + 0.5; t += 0.68) pWaves.push(t)
    return {
      pWaves,
      beats: times(1.5, 0.55),
      o: { p: false, qw: 2.4, ra: 1.1, sa: -0.3, ta: -0.3, tc: 0.3, tw: 0.07 },
    }
  },
  pericard: () => ({ beats: times(0.78, 0.25), o: { st: 0.14, prdep: 0.06, ta: 0.34 } }),
  hiperk: () => ({ beats: times(0.8, 0.25), o: { pa: 0.05, pw: 0.035, qw: 1.6, sa: -0.32, ta: 0.82, tw: 0.034, tc: 0.27 } }),
  hipok: () => ({ beats: times(0.85, 0.25), o: { st: -0.07, ta: 0.07, tc: 0.3, ua: 0.17, uoff: 0.17 } }),
  hipoca: () => ({ beats: times(1, 0.25), o: { tc: 0.43, ta: 0.28 } }),
  hiperca: () => ({ beats: times(0.8, 0.25), o: { tc: 0.17, ta: 0.3, tw: 0.04 } }),
}

const cache = new Map()

export function wave(type) {
  if (cache.has(type)) return cache.get(type)
  const d = RHYTHMS[type]()
  const points = []
  const inWindow = (dt) => dt > -0.45 && dt < 0.7
  for (let x = 0; x <= DURATION; x += 0.004) {
    let v = d.base ? d.base(x) : 0
    for (const b of d.beats ?? []) if (inWindow(x - b)) v += beat(x - b, d.o)
    for (const b of d.conducted ?? []) if (inWindow(x - b.t)) v += beat(x - b.t, { ...d.o, p: false })
    for (const p of d.pWaves ?? []) v += gauss(x, p + 0.02, 0.022, 0.14)
    points.push([x, v])
  }
  cache.set(type, points)
  return points
}

export function toPath(points, mapX, mapY) {
  return points.map(([x, v], i) => `${i ? 'L' : 'M'}${mapX(x).toFixed(1)} ${mapY(v).toFixed(1)}`).join('')
}

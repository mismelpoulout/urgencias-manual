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

// Generadores de latidos: devuelven los que caen en [from, to). Así el ritmo continúa
// indefinidamente en el trazado animado, sin saltos cada 6 segundos.
const every = (start, period) => (from, to) => {
  const beats = []
  for (let n = Math.max(0, Math.ceil((from - start) / period)); start + n * period < to; n++) {
    beats.push({ t: start + n * period, n })
  }
  return beats
}

// R-R al azar (con semilla): se generan a medida que se piden.
const irregular = (seed) => {
  const random = rng(seed)
  const beats = []
  let next = 0.2
  return (from, to) => {
    while (next < to) {
      beats.push({ t: next })
      next += 0.42 + random() * 0.55
    }
    return beats.filter((b) => b.t >= from && b.t < to)
  }
}

// Bloqueo AV de 2.º grado: de cada ciclo de ondas P conducen las que tienen PR definido.
const secondDegree = (start, period, cycle, prs) => {
  const p = every(start, period)
  const longest = Math.max(...prs)
  const qrs = (from, to) =>
    p(from - longest, to)
      .filter(({ n }) => n % cycle < prs.length)
      .map(({ t, n }) => ({ t: t + prs[n % cycle] }))
      .filter((b) => b.t >= from && b.t < to)
  return { p, qrs, o: { p: false } }
}

const sin = (f, x, phase = 0) => Math.sin(2 * Math.PI * f * x + phase)

// qrs: complejos QRS · p: ondas P independientes del QRS · base: actividad de fondo
export const RHYTHMS = {
  sinus: () => ({ qrs: every(0.25, 0.8), o: {} }),
  stemi: () => ({ qrs: every(0.25, 0.75), o: { st: 0.32, ta: 0.42, tc: 0.27, sa: -0.05 } }),
  fa: () => ({
    qrs: irregular(7),
    o: { p: false },
    base: (x) => 0.035 * sin(6.3, x) + 0.025 * sin(8.7, x, 1) + 0.015 * sin(11.1, x, 2),
  }),
  flutter: () => ({
    qrs: every(0.18, 0.4),
    o: { p: false, ta: 0.12 },
    base: (x) => {
      const f = (x * 5) % 1
      return 0.16 * (f < 0.8 ? -f / 0.8 + 0.5 : (f - 0.8) / 0.2 - 0.5)
    },
  }),
  tsv: () => ({ qrs: every(0.15, 0.333), o: { p: false, ta: 0.22, tc: 0.2, tw: 0.04 } }),
  tv: () => ({
    qrs: every(0.12, 0.333),
    o: { p: false, qw: 3.4, ra: 1.25, qa: -0.05, sa: -0.35, ta: -0.45, tc: 0.17, tw: 0.05 },
  }),
  fv: () => ({
    qrs: () => [],
    o: {},
    base: (x) => (0.25 + 0.18 * sin(0.35, x)) * (sin(4.6, x) + 0.6 * sin(6.1, x, 1.3) + 0.35 * sin(3.1, x, 0.4)),
  }),
  bav1: () => ({ qrs: every(0.4, 0.9), o: { pr: 0.32 } }),
  mobitz1: () => secondDegree(0.15, 0.78, 4, [0.16, 0.25, 0.32]),
  mobitz2: () => secondDegree(0.15, 0.72, 3, [0.18, 0.18]),
  bav3: () => ({
    p: every(0.1, 0.68),
    qrs: every(0.55, 1.5),
    o: { p: false, qw: 2.4, ra: 1.1, sa: -0.3, ta: -0.3, tc: 0.3, tw: 0.07 },
  }),
  pericard: () => ({ qrs: every(0.25, 0.78), o: { st: 0.14, prdep: 0.06, ta: 0.34 } }),
  hiperk: () => ({ qrs: every(0.25, 0.8), o: { pa: 0.05, pw: 0.035, qw: 1.6, sa: -0.32, ta: 0.82, tw: 0.034, tc: 0.27 } }),
  hipok: () => ({ qrs: every(0.25, 0.85), o: { st: -0.07, ta: 0.07, tc: 0.3, ua: 0.17, uoff: 0.17 } }),
  hipoca: () => ({ qrs: every(0.25, 1), o: { tc: 0.43, ta: 0.28 } }),
  hiperca: () => ({ qrs: every(0.25, 0.8), o: { tc: 0.17, ta: 0.3, tw: 0.04 } }),
}

const instances = new Map()

function rhythm(type) {
  if (!instances.has(type)) instances.set(type, RHYTHMS[type]())
  return instances.get(type)
}

export const STEP = 0.004

// Puntos [segundos desde `from`, mV] de la ventana de DURATION segundos que empieza en `from`.
export function segment(type, from) {
  const d = rhythm(type)
  const to = from + DURATION
  // Un latido influye desde 0,45 s antes hasta 0,7 s después de su onda R.
  const beats = d.qrs(from - 0.7, to + 0.45)
  const pWaves = d.p ? d.p(from - 0.7, to + 0.45) : []
  const points = []
  for (let x = from; x <= to; x += STEP) {
    let v = d.base ? d.base(x) : 0
    for (const { t } of beats) if (x - t > -0.45 && x - t < 0.7) v += beat(x - t, d.o)
    for (const { t } of pWaves) v += gauss(x, t + 0.02, 0.022, 0.14)
    points.push([x - from, v])
  }
  return points
}

const cache = new Map()

// Trazado estático: los primeros DURATION segundos.
export function wave(type) {
  if (!cache.has(type)) cache.set(type, segment(type, 0))
  return cache.get(type)
}

// Sonidos que corresponden al intervalo [from, to): QRS, ondas P y alarma si no hay QRS.
export function events(type, from, to) {
  const within = (e) => e.t >= from && e.t < to
  if (type === 'fv') return every(0.2, 1.2)(from, to).map(({ t }) => ({ t, kind: 'alarm' }))
  const d = rhythm(type)
  const qrs = d.qrs(from, to).map(({ t }) => ({ t, kind: 'qrs' }))
  let p = []
  if (d.p) p = d.p(from, to)
  else if (d.o.p !== false) {
    // La P va unida a su QRS: su centro está PR − 20 ms antes de la onda R.
    const lead = (d.o.pr ?? 0.16) - 0.02
    p = d.qrs(from + lead, to + lead).map(({ t }) => ({ t: t - lead }))
  }
  return [...qrs, ...p.filter(within).map(({ t }) => ({ t, kind: 'p' }))]
}

// Frecuencias medias (por minuto) medidas sobre 10 minutos; atrial es null si no hay ondas P.
export function rates(type) {
  const all = events(type, 10, 610)
  const perMinute = (kind) => Math.round(all.filter((e) => e.kind === kind).length / 10)
  return { ventricular: perMinute('qrs'), atrial: perMinute('p') || null }
}

// Papel milimetrado: 25 mm/s y 10 mm/mV
export const MM = 4
export const PAPER_HEIGHT = 130
export const mapX = (seconds) => seconds * 25 * MM
export const mapY = (millivolts) => PAPER_HEIGHT * 0.6 - millivolts * 10 * MM

export function toPath(points, mapX, mapY) {
  return points.map(([x, v], i) => `${i ? 'L' : 'M'}${mapX(x).toFixed(1)} ${mapY(v).toFixed(1)}`).join('')
}

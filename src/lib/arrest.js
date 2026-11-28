// Cronómetro de paro (capítulos 1 y 21): ciclos de 2 min, adrenalina cada 3-5 min,
// amiodarona 300 mg tras la 3.ª descarga y 150 mg si persiste.
export const CYCLE = 120_000
export const ADRENALINE_MIN = 180_000
export const ADRENALINE_MAX = 300_000

export const EVENT_LABELS = {
  desfibrilable: 'Ritmo desfibrilable (FV / TV sin pulso)',
  'no-desfibrilable': 'Ritmo no desfibrilable (asistolia / AESP)',
  shock: 'Descarga',
  check: 'Control de ritmo sin descarga',
  adrenaline: 'Adrenalina 1 mg',
  amiodarone: 'Amiodarona',
  rosc: 'Retorno de circulación espontánea',
}

export const isArrestState = (s) => Number.isFinite(s.start) && Array.isArray(s.events)

export const startArrest = (now) => ({ start: now, events: [] })

export const addEvent = (state, type, now, detail) => ({ ...state, events: [...state.events, { type, at: now, detail }] })

export const undoEvent = (state) => ({ ...state, events: state.events.slice(0, -1) })

export function arrestSummary(state, now) {
  const { start, events } = state
  const of = (...types) => events.filter((e) => types.includes(e.type))
  const rosc = of('rosc')[0]
  const end = rosc ? rosc.at : Math.max(now, start)
  const elapsed = Math.max(0, end - start)

  const rhythm = of('desfibrilable', 'no-desfibrilable').at(-1)?.type ?? null
  // Cada descarga o control de ritmo inicia un nuevo ciclo de compresiones
  const cycles = of('shock', 'check')
  const cycleStart = cycles.at(-1)?.at ?? start
  const shocks = of('shock').length

  const adrenalines = of('adrenaline')
  const sinceAdrenaline = adrenalines.length ? Math.max(0, end - adrenalines.at(-1).at) : null
  let adrenaline
  if (sinceAdrenaline !== null) {
    adrenaline = sinceAdrenaline < ADRENALINE_MIN ? 'wait' : sinceAdrenaline <= ADRENALINE_MAX ? 'due' : 'overdue'
  } else if (rhythm === 'no-desfibrilable') adrenaline = 'due'
  else if (rhythm === 'desfibrilable') adrenaline = elapsed >= CYCLE ? 'due' : 'wait' // desde el segundo ciclo
  else adrenaline = 'unknown'

  const amiodarones = of('amiodarone').length
  let amiodarone = null // dosis que corresponde indicar ahora
  if (rhythm === 'desfibrilable') {
    if (amiodarones === 0 && shocks >= 3) amiodarone = '300 mg'
    else if (amiodarones === 1 && shocks >= 5) amiodarone = '150 mg'
  }

  return {
    elapsed,
    finished: Boolean(rosc),
    rhythm,
    cycle: cycles.length + 1,
    cycleRemaining: CYCLE - Math.max(0, end - cycleStart),
    shocks,
    adrenalines: adrenalines.length,
    sinceAdrenaline,
    adrenaline,
    amiodarones,
    amiodarone,
  }
}

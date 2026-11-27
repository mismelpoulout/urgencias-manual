// Paquete SOCHIMI para el manejo inicial (capítulo 12). goal: plazo en horas desde el tiempo cero.
export const SEPSIS_TASKS = [
  { id: 'antibiotico', goal: 1, label: 'Antibiótico IV de amplio espectro: primera dosis', note: 'Tomar antes los hemocultivos, sin retrasarlo.' },
  { id: 'lactato', goal: 3, label: 'Medir lactato' },
  { id: 'cultivos', goal: 3, label: 'Al menos 2 hemocultivos antes del antibiótico', note: 'La toma no debe retrasar el antibiótico más de 45 minutos.' },
  { id: 'fluidos', goal: 3, label: 'Cristaloides 30 mL/kg', note: 'Si hay hipotensión o lactato >2 mmol/L.', optional: true },
  { id: 'noradrenalina', goal: 6, label: 'Noradrenalina, meta PAM 65-70 mmHg', note: 'Si la hipotensión persiste tras los fluidos.', optional: true },
  { id: 'reevaluar', goal: 6, label: 'Reevaluar volemia y perfusión', note: 'Si persiste hipotensión o lactato >2.', optional: true },
  { id: 'relactato', goal: 6, label: 'Repetir lactato', note: 'Si el inicial era >2 mmol/L.', optional: true },
]

const HOUR = 3600_000

export const isSepsisState = (s) => Number.isFinite(s.start) && typeof s.tasks === 'object' && s.tasks !== null

// minutesAgo: minutos transcurridos desde el triaje cuando se activa el cronómetro
export const startSepsis = (now, minutesAgo = 0) => ({ start: now - minutesAgo * 60_000, tasks: {} })

// status: 'done' | 'na'; null para deshacer
export function setTask(state, id, status, now) {
  const tasks = { ...state.tasks }
  if (status) tasks[id] = { status, at: now }
  else delete tasks[id]
  return { ...state, tasks }
}

export function sepsisSummary(state, now) {
  const elapsed = Math.max(0, now - state.start)
  const tasks = SEPSIS_TASKS.map((task) => {
    const deadline = task.goal * HOUR
    const record = state.tasks[task.id]
    if (!record) return { ...task, status: elapsed > deadline ? 'overdue' : 'pending', remaining: deadline - elapsed }
    const at = Math.max(0, record.at - state.start)
    if (record.status === 'na') return { ...task, status: 'na', at }
    return { ...task, status: at > deadline ? 'late' : 'done', at }
  })
  const open = tasks.filter((t) => t.status === 'pending' || t.status === 'overdue')
  // La más urgente: la de menor plazo restante
  const next = [...open].sort((a, b) => a.remaining - b.remaining)[0] ?? null
  return { elapsed, tasks, next, complete: open.length === 0 }
}

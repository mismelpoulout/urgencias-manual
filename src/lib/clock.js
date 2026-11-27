// Duración en milisegundos como h:mm:ss o mm:ss
export function formatClock(ms) {
  const total = Math.floor(Math.abs(ms) / 1000)
  const h = Math.floor(total / 3600)
  const m = Math.floor((total % 3600) / 60)
  const two = (x) => String(x).padStart(2, '0')
  return `${h ? `${h}:` : ''}${two(m)}:${two(total % 60)}`
}

// Sonidos del monitor generados con Web Audio (sin archivos).

// [frecuencia Hz, inicio s, duración s, volumen]
const TONES = {
  qrs: [[880, 0, 0.09, 0.25]],
  p: [[330, 0, 0.05, 0.14]],
  click: [[1400, 0, 0.035, 0.2]], // metrónomo de compresiones
  alarm: [
    [960, 0, 0.18, 0.18],
    [720, 0.22, 0.18, 0.18],
  ],
}

let context = null
const sounding = new Set()

// Los navegadores solo permiten audio tras un gesto: llamar desde un clic.
export function unlockAudio() {
  const Audio = window.AudioContext ?? window.webkitAudioContext
  if (!Audio) return
  context ??= new Audio()
  if (context.state !== 'running') context.resume()
}

export function playTone(kind, delay = 0) {
  if (!context) return
  for (const [frequency, offset, duration, volume] of TONES[kind]) {
    const start = context.currentTime + delay + offset
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    oscillator.frequency.value = frequency
    // Entrada y salida suaves para que no haya chasquidos
    gain.gain.setValueAtTime(0.0001, start)
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.008)
    gain.gain.exponentialRampToValueAtTime(0.0001, start + duration)
    oscillator.connect(gain).connect(context.destination)
    oscillator.onended = () => sounding.delete(oscillator)
    sounding.add(oscillator)
    oscillator.start(start)
    oscillator.stop(start + duration + 0.02)
  }
}

// Cancela lo que esté sonando o programado.
export function silence() {
  for (const oscillator of sounding) oscillator.stop()
  sounding.clear()
}

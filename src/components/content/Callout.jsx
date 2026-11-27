const TYPES = {
  perla: { label: 'Perla clínica', box: 'bg-bluet', text: 'text-blue' },
  alerta: { label: 'Atención', box: 'bg-redt', text: 'text-red' },
  nota: { label: 'Ver también', box: 'bg-bg2', text: 'text-ink2' },
  nuevo: { label: 'Actualización 2026', box: 'bg-ambert', text: 'text-amber' },
}

export default function Callout({ type = 'nota', children }) {
  const { label, box, text } = TYPES[type]
  return (
    <div className={`my-[18px] break-inside-avoid rounded-xl px-4 pt-3.5 pb-1 [&>p:last-child]:mb-2.5 ${box}`}>
      <span className={`mb-1 block text-[12.5px] leading-[normal] font-semibold tracking-[0.01em] ${text}`}>{label}</span>
      {children}
    </div>
  )
}

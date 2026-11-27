import { useEffect, useState } from 'react'

export const toolButton =
  'min-h-11 rounded-xl border-[1.5px] border-line bg-bg px-4 py-2 text-[14.5px] font-semibold text-ink enabled:hover:border-red disabled:cursor-default disabled:opacity-50 aria-pressed:border-red aria-pressed:bg-redt aria-pressed:text-red'
export const primaryButton = 'min-h-11 rounded-xl bg-red px-5 py-2 text-[15px] font-semibold text-bg disabled:cursor-default disabled:opacity-50'

// Borrar un registro exige dos toques, para no perderlo por accidente.
export function ResetButton({ onConfirm }) {
  const [armed, setArmed] = useState(false)
  useEffect(() => {
    if (!armed) return
    const timer = setTimeout(() => setArmed(false), 4000)
    return () => clearTimeout(timer)
  }, [armed])
  return (
    <button
      type="button"
      className={`${toolButton} ${armed ? '!border-red !bg-redt !text-red' : ''}`}
      onClick={() => {
        if (!armed) return setArmed(true)
        setArmed(false)
        onConfirm()
      }}
    >
      {armed ? 'Tocar otra vez para borrar' : 'Reiniciar'}
    </button>
  )
}

export function CopyButton({ text }) {
  const [message, setMessage] = useState('')
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text())
      setMessage('Registro copiado')
    } catch {
      setMessage('No se pudo copiar')
    }
    setTimeout(() => setMessage(''), 3000)
  }
  return (
    <>
      <button type="button" className={toolButton} onClick={copy}>
        Copiar registro
      </button>
      <span role="status" className="self-center text-[13px] text-ink2">{message}</span>
    </>
  )
}

export const startedAt = (ms) => new Date(ms).toLocaleString('es-CL', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })

import { useEffect, useState } from 'react'
import { arrestSummary } from '../../lib/arrest.js'
import { formatClock } from '../../lib/clock.js'
import { sepsisSummary } from '../../lib/sepsis.js'
import { useStore } from '../../lib/store.js'
import { arrestStore, sepsisStore } from '../../lib/timers.js'
import { useNow } from '../../lib/useNow.js'

const HEIGHT = '62px'
const item = 'min-w-0 flex-1 rounded-xl border-[1.5px] px-3 py-1 text-center leading-[1.3] tabular-nums no-underline xs:flex-none xs:min-w-[220px]'

// Verdadero mientras la sección esté en pantalla.
function useOnScreen(id) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '-70px 0px -20% 0px' })
    observer.observe(document.getElementById(id))
    return () => observer.disconnect()
  }, [id])
  return visible
}

function Item({ href, title, detail, urgent }) {
  return (
    <a href={href} className={`${item} ${urgent ? 'border-red bg-redt text-red' : 'border-blue bg-bluet text-blue'}`}>
      <strong className="block truncate text-[14px] font-bold">{title}</strong>
      <span className="block truncate text-[12.5px] font-medium">{detail}</span>
    </a>
  )
}

// Barra inferior con los cronómetros en marcha mientras se lee otra parte del manual.
// No se muestra sobre el propio cronómetro, para no tapar sus botones.
export default function RunningTimers() {
  const sepsis = useStore(sepsisStore)
  const arrest = useStore(arrestStore)
  const now = useNow(Boolean(sepsis || arrest))
  const onSepsis = useOnScreen('c23-s1')
  const onArrest = useOnScreen('c23-s2')
  const a = arrest && arrestSummary(arrest, now)
  const s = sepsis && sepsisSummary(sepsis, now)
  const showArrest = Boolean(a && !a.finished && !onArrest)
  const showSepsis = Boolean(s && !s.complete && !onSepsis)
  const visible = showArrest || showSepsis

  // Reserva espacio para que la barra no oculte el final de la página ni otros avisos
  useEffect(() => {
    document.documentElement.style.setProperty('--dock', visible ? HEIGHT : '0px')
  }, [visible])

  if (!visible) return null
  return (
    <aside aria-label="Cronómetros en marcha" className="fixed inset-x-0 bottom-0 z-[60] flex h-[62px] items-center justify-center gap-2 border-t border-line bg-bg px-3 print:hidden">
      {showArrest && (
        <Item
          href="#c23-s2"
          urgent
          title={`Paro ${formatClock(a.elapsed)}`}
          detail={a.cycleRemaining <= 0 ? 'Controlar ritmo' : `Ciclo ${formatClock(a.cycleRemaining)}`}
        />
      )}
      {showSepsis && (
        <Item
          href="#c23-s1"
          urgent={s.next.status === 'overdue'}
          title={`Sepsis ${formatClock(s.elapsed)}`}
          detail={s.next.status === 'overdue' ? 'Plazo vencido' : `Meta ${s.next.goal} h en ${formatClock(s.next.remaining)}`}
        />
      )}
    </aside>
  )
}

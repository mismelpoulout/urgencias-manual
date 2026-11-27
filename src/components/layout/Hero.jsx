import Monitor from './Monitor.jsx'
import QuickAccess from './QuickAccess.jsx'
import Stats from './Stats.jsx'
import SearchBox from '../search/SearchBox.jsx'

const SUGGESTIONS = ['hiperkalemia', 'SOCHIMI', 'rocuronio', 'noradrenalina', 'Bell', 'hiponatremia', 'qSOFA', 'fibrilación auricular', 'preeclampsia', 'torsión testicular']

// Papel milimetrado de fondo
const paper = {
  backgroundImage: [
    'linear-gradient(var(--color-grid) 1px, transparent 1px)',
    'linear-gradient(90deg, var(--color-grid) 1px, transparent 1px)',
    'linear-gradient(var(--color-grid2) 1px, transparent 1px)',
    'linear-gradient(90deg, var(--color-grid2) 1px, transparent 1px)',
  ].join(','),
  backgroundSize: '40px 40px, 40px 40px, 8px 8px, 8px 8px',
}

export default function Hero({ ref, searchRef, onSelect }) {
  return (
    <section ref={ref} id="inicio" className="relative border-b border-line bg-paper print:hidden">
      <div className="absolute inset-0 opacity-90" style={paper} aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(24px,4vw,64px)] px-[max(5vw,16px)] pt-[clamp(36px,6vw,84px)] md:grid-cols-[minmax(0,1fr)_340px]">
        <div>
          <h1 className="mb-3.5 max-w-[14ch] font-serif text-[clamp(38px,6.4vw,76px)] leading-[1.02] font-bold tracking-[-0.015em] text-balance">
            Manual de Urgencias
          </h1>
          <p className="mb-[26px] max-w-[58ch] text-[clamp(17px,1.6vw,20px)] text-ink2">
            Libro de bolsillo para el turno: 22 capítulos con identificación, clínica, diagnóstico y tratamiento con dosis, calculadoras de scores, vademécum con comprobador de mezclas y un atlas interactivo de ECG.
          </p>
          <SearchBox ref={searchRef} onSelect={onSelect} big placeholder="¿Qué buscas? Ej.: hiperkalemia, rocuronio, Bell, qSOFA" shortPlaceholder="¿Qué buscas?" />
          <div className="mt-4 flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                className="h-9 pointer-coarse:h-11 rounded-full border border-line bg-bg px-3.5 text-[14px] font-medium text-ink hover:border-red hover:text-red"
                onClick={(e) => {
                  e.stopPropagation() // evita que el clic externo cierre los resultados
                  searchRef.current.fill(s)
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <QuickAccess />
      </div>
      <Monitor />
      <Stats />
    </section>
  )
}

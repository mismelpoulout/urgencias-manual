import { chapters } from '../../content/index.js'
import { toPath, wave } from '../../lib/ecg.js'

const coverTrace = toPath(wave('sinus'), (x) => x * 100, (v) => 75 - v * 45)

// Portada e índice que solo aparecen al imprimir.
export default function PrintFront() {
  return (
    <div className="hidden print:block">
      <section className="flex h-[257mm] break-after-page flex-col justify-between">
        <div>
          <p className="mb-[6mm] text-[11pt] font-semibold text-[#c8102e]">Manual de bolsillo · Servicio de Urgencia</p>
          <h1 className="mb-[7mm] font-serif text-[44pt] leading-[1.05] font-bold">Manual de Urgencias</h1>
          <p className="max-w-[150mm] text-[14pt] text-[#333]">Identificación, cuadro clínico, diagnóstico y tratamiento inicial, con dosis, scores, electrocardiografía, imágenes y guías SOCHIMI de sepsis.</p>
        </div>
        <div className="h-[40mm] border-y border-[#f0b9c0] bg-[linear-gradient(#f0b9c0_.3mm,transparent_.3mm),linear-gradient(90deg,#f0b9c0_.3mm,transparent_.3mm)] bg-size-[5mm_5mm]">
          <svg viewBox="0 0 600 120" preserveAspectRatio="none" className="size-full">
            <path d={coverTrace} fill="none" stroke="#c8102e" strokeWidth="2" />
          </svg>
        </div>
        <p className="text-[10pt] text-[#333]">Edición noviembre 2026 · 25 capítulos y anexo de scores clínicos. Documento de apoyo: no reemplaza el juicio clínico ni los protocolos institucionales y normas MINSAL vigentes.</p>
      </section>
      <section className="break-after-page">
        <h2 className="mb-[6mm] font-serif text-[20pt] font-semibold">Índice</h2>
        <ol>
          {chapters.map((c) => (
            <li key={c.id} className="mb-[5px] flex gap-[4mm] border-b-[0.2mm] border-[#ddd] py-[1.5mm] text-[10.5pt]">
              <b className="min-w-[9mm] text-[#c8102e]">{c.n === 'A' ? 'Anexo' : c.n}</b>
              <span>{c.title}</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}

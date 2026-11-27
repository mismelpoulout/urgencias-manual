import { useEffect, useRef, useState } from 'react'
import EcgSvg from './EcgSvg.jsx'
import { ChestXray, CtScan } from './Schematics.jsx'
import { RHYTHMS } from '../../lib/ecg.js'

const TIMEOUT_MS = 9000
const COMMONS = 'https://commons.wikimedia.org/wiki/'

function Fallback({ kind }) {
  if (RHYTHMS[kind]) return <div className="w-full"><EcgSvg type={kind} /></div>
  if (kind.startsWith('rx-')) return <ChestXray finding={kind.slice(3)} />
  return <CtScan finding={kind.slice(3)} />
}

export default function WikiImage({ file, fallback, credit, alt, children }) {
  const [status, setStatus] = useState('loading') // loading | loaded | failed
  const box = useRef(null)
  const url = `${COMMONS}Special:FilePath/${encodeURIComponent(file)}?width=900`

  // El plazo de espera corre desde que la imagen se acerca a la pantalla (carga diferida).
  useEffect(() => {
    if (status !== 'loading') return
    let timer
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      timer = setTimeout(() => setStatus('failed'), TIMEOUT_MS)
    }, { rootMargin: '200px' })
    observer.observe(box.current)
    return () => {
      observer.disconnect()
      clearTimeout(timer)
    }
  }, [status])

  const failed = status === 'failed'
  const lightPaper = failed && RHYTHMS[fallback]
  return (
    <figure className="break-inside-avoid">
      <div
        ref={box}
        className={`relative grid aspect-[4/3] place-items-center overflow-hidden rounded-xl ${lightPaper ? 'bg-paper' : 'bg-[#0b0d10]'}`}
      >
        {failed ? (
          <Fallback kind={fallback} />
        ) : (
          <img
            src={url}
            alt={alt}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="size-full bg-black object-contain"
            onLoad={() => setStatus('loaded')}
            onError={() => setStatus('failed')}
          />
        )}
        {status !== 'loading' && (
          <span className="absolute top-2.5 left-2.5 rounded-full bg-black/55 px-2.5 py-1 text-[11.5px] leading-[normal] font-semibold text-white">
            {failed ? 'Esquema de hallazgos' : 'Imagen real'}
          </span>
        )}
      </div>
      <figcaption className="mt-[7px] text-[13.5px] leading-[1.45] text-ink2 [&>b]:text-ink">{children}</figcaption>
      <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-[12.5px] text-ink2" data-noindex>
        <span>{credit}</span>
        <a className="font-semibold print:hidden" href={`${COMMONS}File:${encodeURIComponent(file)}`} target="_blank" rel="noopener noreferrer">
          Ver imagen original ↗
        </a>
      </div>
    </figure>
  )
}

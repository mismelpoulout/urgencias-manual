import { useDeferredValue, useEffect, useId, useImperativeHandle, useMemo, useRef, useState } from 'react'
import Highlighted from './Highlighted.jsx'
import { MAX_RESULTS, search, snippet } from '../../lib/search.js'
import { toTerms } from '../../lib/text.js'
import { useWidth } from '../../lib/useWidth.js'

export default function SearchBox({ ref, placeholder, shortPlaceholder, onSelect, big = false, shortcut = false }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(0)
  const root = useRef(null)
  const input = useRef(null)
  const list = useRef(null)
  const listId = useId()
  // El texto de ayuda largo solo se usa si cabe completo
  const roomy = useWidth(input) >= (big ? 560 : 390)

  const deferred = useDeferredValue(query.trim())
  const active = open && deferred.length > 1
  const terms = useMemo(() => toTerms(deferred), [deferred])
  const results = useMemo(() => (active ? search(deferred) : []), [active, deferred])

  const change = (value) => {
    setQuery(value)
    setSelected(0)
    setOpen(true)
  }

  useImperativeHandle(ref, () => ({
    focus: () => input.current.focus(),
    blur: () => input.current.blur(),
    fill: (value) => {
      change(value)
      input.current.focus()
    },
  }), [])

  useEffect(() => {
    const outside = (e) => !root.current.contains(e.target) && setOpen(false)
    document.addEventListener('click', outside)
    return () => document.removeEventListener('click', outside)
  }, [])

  useEffect(() => {
    list.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' })
  }, [selected])

  const choose = (entry) => {
    setOpen(false)
    input.current.blur()
    onSelect(entry, query)
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault()
      if (results.length) setSelected((s) => (s + (e.key === 'ArrowDown' ? 1 : -1) + results.length) % results.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (results[selected]) choose(results[selected])
    } else if (e.key === 'Escape') {
      setOpen(false)
      input.current.blur()
    }
  }

  return (
    <div ref={root} className={big ? 'relative max-w-[720px]' : 'mx-auto max-w-[640px] flex-1 md:relative'}>
      <div className="relative">
        <svg
          className={`pointer-events-none absolute z-10 size-5 text-ink2 ${big ? 'top-[19px] left-[17px]' : 'top-3 left-[13px]'}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <input
          ref={input}
          type="search"
          value={query}
          onChange={(e) => change(e.target.value)}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={roomy ? placeholder : shortPlaceholder}
          autoComplete="off"
          aria-label="Buscar en el manual"
          aria-controls={listId}
          className={`w-full border-[1.5px] border-line text-ink transition-colors outline-none focus:border-red ${
            big
              ? 'h-[54px] rounded-2xl bg-bg pr-11 pl-[50px] text-[17px] shadow-[0_10px_30px_rgba(200,16,46,.10)] sm:h-[58px]'
              : 'h-11 rounded-xl bg-bg2 pr-2 pl-[42px] sm:pr-11 text-[16px] focus:bg-bg'
          }`}
        />
        {shortcut && (
          <kbd className="absolute top-[11px] right-3 hidden rounded-md border border-line px-[7px] py-0.5 font-sans text-[12px] font-medium text-ink2 sm:block">/</kbd>
        )}
      </div>
      {active && (
        <div
          ref={list}
          id={listId}
          role="listbox"
          className={`absolute z-20 max-h-[min(70dvh,620px)] overflow-auto overscroll-contain rounded-[14px] border border-line bg-bg p-1.5 text-left shadow-[0_18px_50px_rgba(0,0,0,.18)] ${big ? 'inset-x-0 top-[calc(100%+8px)]' : 'inset-x-2 top-full mx-auto max-w-[640px] md:inset-x-0 md:top-[52px]'}`}
        >
          {results.length ? (
            <>
              <div className="px-3 pt-2 pb-1.5 text-[13px] leading-[normal] font-medium text-ink2">
                {results.length === MAX_RESULTS ? `${MAX_RESULTS}+` : results.length} resultados para «{deferred}»
              </div>
              {results.map((entry, i) => (
                <a
                  key={entry.id}
                  href={`#${entry.id}`}
                  role="option"
                  aria-selected={i === selected}
                  onClick={(e) => {
                    e.preventDefault()
                    choose(entry)
                  }}
                  className="block rounded-[10px] px-3 py-2.5 text-ink no-underline hover:bg-bg2 aria-selected:bg-bg2"
                >
                  <div className="text-[12px] leading-[normal] font-semibold tracking-[0.01em] text-red">{entry.label} · {entry.chapter.title}</div>
                  <div className="my-0.5 text-[15px] leading-[1.35] font-semibold">
                    <Highlighted text={entry.title} terms={terms} />
                  </div>
                  <div className="text-[14px] leading-[1.45] text-ink2">
                    <Highlighted text={snippet(entry, terms)} terms={terms} />
                  </div>
                </a>
              ))}
            </>
          ) : (
            <div className="px-3 py-[18px] text-ink2">Sin resultados para «{deferred}». Prueba con otro término o sin tildes.</div>
          )}
        </div>
      )}
    </div>
  )
}

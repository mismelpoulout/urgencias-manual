import { parseInRange } from '../../lib/format.js'

export default function Calculator({ title, fields, summary, note, children }) {
  return (
    <div className="my-5 rounded-[14px] border-[1.5px] border-line bg-bg p-3 xs:p-4 print:border-[0.3mm] print:border-[#bbb]">
      <div className="mb-3 flex flex-wrap items-end gap-x-[18px] gap-y-3">
        <strong className="basis-full text-[16px] leading-[normal]">{title}</strong>
        <div className="contents print:hidden">{fields}</div>
      </div>
      {/* En papel no hay campos: se escriben los valores con que se calculó */}
      <p className="hidden print:block" data-noindex>
        {summary}
      </p>
      {/* Los resultados cambian con los datos ingresados: no se indexan en el buscador */}
      <div data-noindex>{children}</div>
      <p className="mini">{note}</p>
    </div>
  )
}

export function Field({ label, children }) {
  return (
    <label className="flex flex-1 basis-[130px] flex-col gap-1 xs:flex-none xs:basis-auto text-[13px] leading-[normal] font-medium text-ink2 print:hidden">
      {label}
      {children}
    </label>
  )
}

export function NumberField({ label, range, value, onChange }) {
  return (
    <Field label={label}>
      <input
        className={`${controlClass} aria-invalid:border-red`}
        type="number"
        inputMode="decimal"
        min={range.min}
        max={range.max}
        value={value}
        aria-invalid={parseInRange(value, range) === null}
        onChange={(e) => onChange(e.target.value)}
      />
    </Field>
  )
}

export function Checkbox({ label, checked, onChange }) {
  return (
    <label className="flex min-h-11 basis-full items-center gap-2 text-[13px] leading-[normal] font-medium text-ink2 print:hidden">
      <input className="size-5 flex-none accent-red" type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      {label}
    </label>
  )
}

// Aviso que reemplaza a los resultados cuando falta un dato válido.
export function InvalidInput({ children }) {
  return (
    <p role="alert" className="rounded-xl bg-redt px-4 py-3 font-semibold text-red">
      {children}
    </p>
  )
}

export const controlClass = 'h-11 w-full xs:w-[150px] rounded-[10px] border-[1.5px] border-line bg-bg2 px-2.5 text-[16px] text-ink print:hidden'

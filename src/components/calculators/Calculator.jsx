export default function Calculator({ title, fields, note, children }) {
  return (
    <div className="my-5 rounded-[14px] border-[1.5px] border-line bg-bg p-3 xs:p-4 print:border-[0.3mm] print:border-[#bbb]">
      <div className="mb-3 flex flex-wrap items-end gap-x-[18px] gap-y-3">
        <strong className="basis-full text-[16px] leading-[normal]">{title}</strong>
        <div className="contents">{fields}</div>
      </div>
      {children}
      <p className="mini">{note}</p>
    </div>
  )
}

export function Field({ label, children }) {
  return (
    <label className="flex flex-1 basis-[130px] flex-col gap-1 xs:flex-none xs:basis-auto text-[13px] leading-[normal] font-medium text-ink2">
      {label}
      {children}
    </label>
  )
}

export const controlClass = 'h-11 w-full xs:w-[150px] rounded-[10px] border-[1.5px] border-line bg-bg2 px-2.5 text-[16px] text-ink print:hidden'

export const formatNumber = (x, decimals = 0) =>
  (Math.round(x * 10 ** decimals) / 10 ** decimals).toLocaleString('es-CL')

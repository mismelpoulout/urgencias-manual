export default function Flow({ children }) {
  return <div className="mt-[18px] mb-[22px] grid gap-2">{children}</div>
}

export function FlowStep({ step, label, children }) {
  return (
    <div className="grid break-inside-avoid grid-cols-1 items-center gap-0.5 rounded-xl bg-bg2 px-4 py-3 sm:grid-cols-[150px_1fr] sm:gap-3.5 print:grid-cols-[150px_1fr] print:gap-3.5">
      <b className={`text-[15px] leading-[normal] !font-bold ${step >= 4 ? 'text-blue' : 'text-red'}`}>{label}</b>
      <span>{children}</span>
    </div>
  )
}

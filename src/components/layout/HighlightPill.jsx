export default function HighlightPill({ message, onClear }) {
  if (!message) return null
  return (
    <div className="fixed right-[18px] bottom-[calc(18px+var(--dock,0px))] z-[60] flex max-w-[calc(100%-36px)] items-center gap-2 rounded-full border border-line bg-bg py-1.5 pr-1.5 pl-3.5 text-[14px] shadow-[0_8px_24px_rgba(0,0,0,.14)] print:hidden">
      <span className="break-words">{message}</span>
      <button type="button" onClick={onClear} aria-label="Quitar resaltado" className="size-[34px] flex-none pointer-coarse:size-11 rounded-full bg-bg2 text-[16px] text-ink">
        ✕
      </button>
    </div>
  )
}

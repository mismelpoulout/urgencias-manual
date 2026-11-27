export default function Toast({ message }) {
  return (
    <div role="status">
      {message && (
        <div className="fixed bottom-[84px] left-1/2 z-[90] w-max max-w-[min(92vw,520px)] -translate-x-1/2 rounded-xl bg-ink px-[18px] py-3 text-[14px] text-bg print:hidden">
          {message}
        </div>
      )}
    </div>
  )
}

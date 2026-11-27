export function EcgGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,360px),1fr))] gap-x-[18px] gap-y-1 *:!my-2 print:grid-cols-2">
      {children}
    </div>
  )
}

export function ImageGrid({ children }) {
  return (
    <div className="mt-4 mb-[22px] grid grid-cols-[repeat(auto-fill,minmax(min(100%,340px),1fr))] gap-[18px] print:grid-cols-2">
      {children}
    </div>
  )
}

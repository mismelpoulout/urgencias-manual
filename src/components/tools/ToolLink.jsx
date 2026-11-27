// Acceso desde un capítulo a la herramienta interactiva relacionada.
export default function ToolLink({ to, children }) {
  return (
    <p data-noindex className="print:hidden">
      <a href={`#${to}`} className="inline-block rounded-full bg-red px-4 py-2 text-[14px] font-semibold !text-bg no-underline">
        {children} →
      </a>
    </p>
  )
}

import { useLayoutEffect, useRef } from 'react'

// En pantallas angostas cada fila se muestra como una ficha: cada celda lleva el nombre
// de su columna (data-l), tomado del encabezado. Requiere <thead> y <tbody>.
export default function Table({ className, children }) {
  const table = useRef(null)

  useLayoutEffect(() => {
    const { tHead, tBodies } = table.current
    const labels = Array.from(tHead.rows[0].cells, (cell) => cell.textContent.trim())
    for (const body of tBodies) {
      for (const row of body.rows) {
        Array.from(row.cells).forEach((cell, i) => (cell.dataset.l = labels[i] ?? ''))
      }
    }
  })

  return (
    <div className="tw">
      <table ref={table} className={className}>
        {children}
      </table>
    </div>
  )
}

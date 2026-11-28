import { useLayoutEffect, useRef } from 'react'

// Largo máximo del texto para que, en una ficha, una celda comparta línea con otras.
const SHORT = 24
// El nombre de la primera columna solo se muestra en el título de las fichas cuando todos sus
// valores son tan breves que no se entienden solos: «Paso 1», «Riesgo Alto».
const SHORT_TITLE = 10

// En pantallas angostas cada fila se muestra como una ficha: cada celda lleva el nombre
// de su columna (data-l), tomado del encabezado. Requiere <thead> y <tbody>.
export default function Table({ className, children }) {
  const table = useRef(null)

  useLayoutEffect(() => {
    const { tHead, tBodies } = table.current
    const labels = Array.from(tHead.rows[0].cells, (cell) => cell.textContent.trim())
    const rows = Array.from(tBodies, (body) => Array.from(body.rows)).flat()
    const length = (cell) => cell.textContent.trim().length
    const shortTitles = rows.every((row) => length(row.cells[0]) <= SHORT_TITLE)
    for (const row of rows) {
      Array.from(row.cells).forEach((cell, i) => {
        cell.dataset.l = labels[i] ?? ''
        cell.toggleAttribute('data-short', i ? length(cell) <= SHORT : shortTitles)
      })
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

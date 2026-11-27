import { useEffect, useState } from 'react'

// Ancho actual de un elemento, en píxeles.
export function useWidth(ref) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const observer = new ResizeObserver(() => setWidth(ref.current.offsetWidth))
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])
  return width
}

import { useSyncExternalStore } from 'react'

// Estado compartido que sobrevive a una recarga (queda solo en este dispositivo).
// isValid descarta datos guardados que no tengan la forma esperada.
export function createStore(key, isValid) {
  const read = () => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(key))
      return saved && isValid(saved) ? saved : null
    } catch {
      return null
    }
  }
  let value = read()
  const listeners = new Set()
  const notify = () => listeners.forEach((listener) => listener())

  // Otra pestaña cambió el registro
  window.addEventListener('storage', (e) => {
    if (e.key !== key) return
    value = read()
    notify()
  })

  return {
    get: () => value,
    set(next) {
      value = typeof next === 'function' ? next(value) : next
      try {
        if (value === null) window.localStorage.removeItem(key)
        else window.localStorage.setItem(key, JSON.stringify(value))
      } catch {
        // sin almacenamiento disponible: el cronómetro sigue en memoria
      }
      notify()
    },
    subscribe(listener) {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }
}

export const useStore = (store) => useSyncExternalStore(store.subscribe, store.get)

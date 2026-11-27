import { useSyncExternalStore } from 'react'

// Fármaco cuya ficha está abierta (o null). Permite abrirla desde cualquier parte del manual.
let openId = null
const listeners = new Set()

function set(id) {
  openId = id
  listeners.forEach((listener) => listener())
}

const subscribe = (listener) => {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export const openDrug = (id) => set(id)
export const closeDrug = () => set(null)
export const useOpenDrug = () => useSyncExternalStore(subscribe, () => openId)

import { isArrestState } from './arrest.js'
import { isSepsisState } from './sepsis.js'
import { createStore } from './store.js'

export const sepsisStore = createStore('urgencias.sepsis', isSepsisState)
export const arrestStore = createStore('urgencias.paro', isArrestState)

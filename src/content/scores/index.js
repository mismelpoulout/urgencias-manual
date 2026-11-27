import cirugia from './cirugia.js'
import generales from './generales.js'
import medicina from './medicina.js'
import neurologia from './neurologia.js'
import psiquiatria from './psiquiatria.js'
import respiratorio from './respiratorio.js'
import trauma from './trauma.js'

// En el mismo orden en que aparecen en el anexo
export const SCORES = [...cirugia, ...psiquiatria, ...medicina, ...neurologia, ...trauma, ...respiratorio, ...generales]

export const scoreById = Object.fromEntries(SCORES.map((s) => [s.id, s]))

// Unidades de dosis: cantidad (mcg, mg o U), si es por kg y si es por minuto o por hora.
export const UNITS = {
  'mcg/kg/min': { amount: 'mcg', perKg: true, perMinute: true },
  'mcg/min': { amount: 'mcg', perKg: false, perMinute: true },
  'mcg/kg/h': { amount: 'mcg', perKg: true, perMinute: false },
  'mg/kg/h': { amount: 'mg', perKg: true, perMinute: false },
  'mg/min': { amount: 'mg', perKg: false, perMinute: true },
  'mg/h': { amount: 'mg', perKg: false, perMinute: false },
  'U/min': { amount: 'U', perKg: false, perMinute: true },
  'U/h': { amount: 'U', perKg: false, perMinute: false },
  'U/kg/h': { amount: 'U', perKg: true, perMinute: false },
}

// Unidad en que se prepara la bolsa o jeringa
export const bagUnit = (unit) => (UNITS[unit].amount === 'U' ? 'U' : 'mg')

// Concentración en la unidad de la dosis por mL. amount: mg o U en el volumen (mL).
export const concentration = (unit, amount, volume) => (amount * (UNITS[unit].amount === 'mcg' ? 1000 : 1)) / volume

// Factor que convierte una dosis en cantidad por hora
const perHour = (unit, weight) => (UNITS[unit].perKg ? weight : 1) * (UNITS[unit].perMinute ? 60 : 1)

export const rateFromDose = ({ unit, dose, weight, amount, volume }) =>
  (dose * perHour(unit, weight)) / concentration(unit, amount, volume)

export const doseFromRate = ({ unit, rate, weight, amount, volume }) =>
  (rate * concentration(unit, amount, volume)) / perHour(unit, weight)

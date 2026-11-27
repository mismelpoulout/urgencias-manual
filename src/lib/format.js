export const formatNumber = (x, decimals = 0) =>
  // "+ 0" evita que un valor que redondea a cero se muestre como "-0"
  (Math.round(x * 10 ** decimals) / 10 ** decimals + 0).toLocaleString('es-CL')

// Número escrito en un campo, solo si está dentro del rango; si no, null.
// Nunca se ajusta al límite: no se deben calcular dosis para un valor no ingresado.
export function parseInRange(value, { min, max }) {
  const x = Number(value)
  return String(value).trim() !== '' && x >= min && x <= max ? x : null
}

// Rangos aceptados por las calculadoras (adultos)
export const WEIGHT = { min: 20, max: 250 } // kg
export const SODIUM = { min: 90, max: 190 } // mEq/L

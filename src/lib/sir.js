import { formatNumber as f } from './format.js'

// Filas [fármaco, dosis por kg, dosis calculada, nota].
// w: peso en kg · shock: paciente inestable
export function sirDoses(w, shock) {
  const range = (low, high, decimals = 0) => `${f(w * low, decimals)}-${f(w * high, decimals)} mg`
  return [
    ['Etomidato', shock ? '0,15-0,2 mg/kg' : '0,3 mg/kg', shock ? range(0.15, 0.2) : `${f(w * 0.3)} mg`, 'Inductor'],
    ['Ketamina', shock ? '0,5-1 mg/kg' : '1-2 mg/kg', shock ? range(0.5, 1) : range(1, 2), 'Inductor'],
    ['Propofol', shock ? '0,5-1 mg/kg' : '1-2 mg/kg', shock ? range(0.5, 1) : range(1, 2), shock ? 'Evitar en shock' : 'Inductor'],
    // Capítulo 3, shock y sepsis: reducir el inductor a la mitad
    [
      'Midazolam',
      shock ? '0,05-0,15 mg/kg' : '0,1-0,3 mg/kg',
      shock ? range(0.05, 0.15, 1) : range(0.1, 0.3, 1),
      shock ? 'Mitad de dosis · hipotensor' : 'Inductor alternativo',
    ],
    ['Fentanilo (pretratamiento)', '1-3 mcg/kg', `${f(w)}-${f(w * 3)} mcg`, shock ? 'Omitir o reducir en shock' : '3 min antes'],
    ['Succinilcolina', '1,5 mg/kg', `${f(w * 1.5)} mg`, 'Bloqueador · ver contraindicaciones'],
    ['Rocuronio', '1,2 mg/kg', `${f(w * 1.2)} mg`, 'Bloqueador'],
    ['Sugammadex (rescate)', '16 mg/kg', `${f(w * 16)} mg`, 'Reversión inmediata'],
    ['Atropina (bradicardia)', 'dosis fija', '0,5-1 mg', 'Si FC <50'],
  ]
}

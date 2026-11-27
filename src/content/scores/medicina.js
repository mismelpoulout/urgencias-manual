import { CRITICAL, HIGH, LOW, MODERATE, bands, number, scale, yes } from '../../lib/scores.js'

const ORAL_ANTICOAGULANTS = ['apixaban', 'rivaroxaban', 'dabigatran', 'warfarina']
const LIVER = { chapters: ['c10-s9'], drugs: ['lactulosa', 'ceftriaxona', 'octreotido', 'espironolactona', 'furosemida'] }
const clamp = (x, min, max) => Math.min(max, Math.max(min, x))

export default [
  {
    id: 'cha2ds2vasc', name: 'CHA₂DS₂-VASc', topic: 'Riesgo embólico en fibrilación auricular', max: 9,
    chapters: ['c19-s3', 'c1-s3'], drugs: ORAL_ANTICOAGULANTS,
    items: [
      scale('sexo', 'Sexo', ['Hombre', 'Mujer'], [0, 1]),
      scale('edad', 'Edad', ['Menor de 65 años', '65 a 74 años', '75 años o más'], [0, 1, 2]),
      yes('icc', 'Insuficiencia cardíaca'),
      yes('hta', 'Hipertensión arterial'),
      yes('dm', 'Diabetes'),
      yes('acv', 'ACV, AIT o tromboembolia previa', 2),
      yes('vasc', 'Enfermedad vascular'),
    ],
    result: (total, v) => {
      const adjusted = total - (v.sexo === 1 ? 1 : 0) // sin contar el sexo femenino
      if (adjusted === 0) return { level: LOW, title: 'Riesgo bajo', advice: 'En general no requiere anticoagulación. Reevaluar periódicamente.', drugs: [] }
      if (total < 2) return { level: MODERATE, title: 'Riesgo intermedio', advice: 'Individualizar la anticoagulación considerando el riesgo de sangrado (HAS-BLED).' }
      return { level: HIGH, title: 'Riesgo embólico significativo', advice: 'Indicar anticoagulación oral salvo contraindicación; evaluar el riesgo de sangrado.' }
    },
  },
  {
    id: 'hasbled', name: 'HAS-BLED', topic: 'Riesgo de sangrado con anticoagulación', max: 9,
    chapters: ['c19-s3'], drugs: ORAL_ANTICOAGULANTS,
    items: [
      yes('hta', 'Hipertensión no controlada (PAS >160 mmHg)'),
      yes('renal', 'Función renal anormal'),
      yes('hepatica', 'Función hepática anormal'),
      yes('acv', 'ACV previo'),
      yes('sangrado', 'Sangrado previo o predisposición'),
      yes('inr', 'INR lábil'),
      yes('edad', 'Edad >65 años'),
      yes('farmacos', 'Fármacos: antiagregantes o AINE'),
      yes('alcohol', 'Consumo de alcohol'),
    ],
    result: bands(
      [2, LOW, 'Riesgo de sangrado bajo a moderado', 'Anticoagular si está indicado; corregir factores modificables.'],
      [9, HIGH, 'Alto riesgo de sangrado', 'No contraindica por sí solo la anticoagulación: corregir factores modificables y vigilar estrechamente.'],
    ),
  },
  {
    id: 'childpugh', name: 'Child-Pugh', topic: 'Gravedad de la hepatopatía', max: 15, ...LIVER,
    items: [
      number('bili', 'Bilirrubina total (mg/dL)', 0.1, 60, (x) => (x < 2 ? 1 : x <= 3 ? 2 : 3)),
      number('alb', 'Albúmina (g/dL)', 0.5, 7, (x) => (x > 3.5 ? 1 : x >= 2.8 ? 2 : 3)),
      number('inr', 'INR', 0.5, 15, (x) => (x < 1.7 ? 1 : x <= 2.3 ? 2 : 3)),
      scale('ascitis', 'Ascitis', ['Ausente', 'Leve', 'Moderada o grave'], [1, 2, 3]),
      scale('encef', 'Encefalopatía', ['Ausente', 'Grado 1-2', 'Grado 3-4'], [1, 2, 3]),
    ],
    result: (total) => ({
      display: `Clase ${total <= 6 ? 'A' : total <= 9 ? 'B' : 'C'} · ${total} puntos`,
      ...bands(
        [6, LOW, 'Clase A: enfermedad compensada', 'Control habitual de la hepatopatía.'],
        [9, MODERATE, 'Clase B: compromiso funcional significativo', 'Tratar complicaciones y derivar a especialista.'],
        [15, CRITICAL, 'Clase C: cirrosis descompensada con alta mortalidad', 'Evaluar trasplante; manejo estricto de ascitis, encefalopatía y hemorragia variceal.'],
      )(total),
    }),
  },
  {
    id: 'meld', name: 'MELD / MELD-Na', topic: 'Pronóstico en enfermedad hepática terminal', ...LIVER,
    note: 'Cálculo para mayores de 12 años según la fórmula MELD-Na (2016).',
    items: [
      number('crea', 'Creatinina (mg/dL)', 0.1, 20),
      yes('dialisis', 'Dos o más diálisis en la última semana', 0),
      number('bili', 'Bilirrubina total (mg/dL)', 0.1, 60),
      number('inr', 'INR', 0.5, 15),
      number('na', 'Sodio (mEq/L)', 90, 180),
    ],
    compute: (p, v) => {
      const atLeast1 = (x) => Math.max(1, x)
      const creatinine = v.dialisis ? 4 : clamp(v.crea, 1, 4)
      const base = 0.957 * Math.log(creatinine) + 0.378 * Math.log(atLeast1(v.bili)) + 1.12 * Math.log(atLeast1(v.inr)) + 0.643
      const meld = Math.round(base * 10)
      if (meld <= 11) return Math.min(40, meld)
      const deficit = 137 - clamp(v.na, 125, 137)
      return clamp(Math.round(meld + 1.32 * deficit - 0.033 * meld * deficit), 6, 40)
    },
    result: (total) => ({
      display: `MELD-Na ${total}`,
      ...bands(
        [9, LOW, 'Mortalidad a 90 días ≈2%', 'Seguimiento ambulatorio de la hepatopatía.'],
        [19, MODERATE, 'Mortalidad a 90 días ≈6%', 'Derivar a hepatología; considerar evaluación para trasplante desde 15 puntos.'],
        [29, HIGH, 'Mortalidad a 90 días ≈20%', 'Priorizar evaluación para trasplante y manejo intensivo de complicaciones.'],
        [40, CRITICAL, 'Mortalidad a 90 días >50%', 'Manejo en unidad crítica y evaluación urgente para trasplante.'],
      )(total),
    }),
  },
  {
    id: 'wells-tvp', name: 'Wells para TVP', topic: 'Trombosis venosa profunda', max: 9,
    chapters: ['c1-s7'], drugs: ['enoxaparina', 'heparina', 'rivaroxaban', 'apixaban'],
    items: [
      yes('cancer', 'Cáncer activo'),
      yes('paralisis', 'Parálisis, paresia o inmovilización con yeso de la pierna'),
      yes('cama', 'Encamado ≥3 días o cirugía mayor en las últimas 12 semanas'),
      yes('dolor', 'Dolor localizado en el trayecto venoso profundo'),
      yes('pierna', 'Edema de toda la pierna'),
      yes('pantorrilla', 'Pantorrilla >3 cm mayor que la contralateral'),
      yes('fovea', 'Edema con fóvea en la pierna sintomática'),
      yes('colaterales', 'Venas colaterales superficiales'),
      yes('previa', 'TVP previa documentada'),
      yes('alternativo', 'Diagnóstico alternativo al menos tan probable como TVP', -2),
    ],
    result: bands(
      [0, LOW, 'Baja probabilidad', 'Dímero D; si es negativo se descarta TVP.'],
      [2, MODERATE, 'Probabilidad moderada', 'Dímero D y, si es positivo, ecografía Doppler.'],
      [9, HIGH, 'Alta probabilidad de TVP', 'Ecografía Doppler urgente; considerar anticoagulación mientras se confirma.'],
    ),
  },
]

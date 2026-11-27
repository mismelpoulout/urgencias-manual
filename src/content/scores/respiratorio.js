import { CRITICAL, HIGH, LOW, MODERATE, bands, number, scale, yes } from '../../lib/scores.js'

const PNEUMONIA = { chapters: ['c2-s4', 'c18-s4'], drugs: ['amoxicilina-clavulanico', 'ceftriaxona', 'azitromicina', 'claritromicina', 'levofloxacino'] }
const PE = { chapters: ['c1-s7', 'c19-s10'], drugs: ['enoxaparina', 'heparina', 'rivaroxaban', 'apixaban'] }

export default [
  {
    id: 'curb65', name: 'CURB-65', topic: 'Neumonía adquirida en la comunidad', max: 5, ...PNEUMONIA,
    items: [
      yes('c', 'Confusión de inicio reciente'),
      yes('u', 'Urea >7 mmol/L (BUN >19 mg/dL)'),
      yes('r', 'Frecuencia respiratoria ≥30'),
      yes('b', 'PAS <90 o PAD ≤60 mmHg'),
      yes('e', 'Edad ≥65 años'),
    ],
    result: bands(
      [1, LOW, 'Bajo riesgo', 'Manejo ambulatorio si la saturación y el contexto lo permiten.'],
      [2, MODERATE, 'Riesgo intermedio', 'Considerar hospitalización.'],
      [5, CRITICAL, 'Alto riesgo de mortalidad', 'Hospitalizar y considerar UCI.'],
    ),
  },
  {
    id: 'psi', name: 'PSI / PORT', topic: 'Neumonía adquirida en la comunidad', ...PNEUMONIA,
    note: 'Los criterios no marcados se consideran ausentes o normales: se requieren exámenes de laboratorio para las clases II a V.',
    items: [
      scale('sexo', 'Sexo', ['Hombre', 'Mujer'], [0, -10]),
      number('edad', 'Edad (años)', 16, 120),
      yes('hogar', 'Residente de hogar de larga estadía', 10),
      yes('cancer', 'Enfermedad neoplásica', 30),
      yes('higado', 'Enfermedad hepática', 20),
      yes('icc', 'Insuficiencia cardíaca', 10),
      yes('acv', 'Enfermedad cerebrovascular', 10),
      yes('renal', 'Enfermedad renal', 10),
      yes('mental', 'Alteración del estado mental', 20),
      yes('fr', 'Frecuencia respiratoria ≥30', 20),
      yes('pas', 'PAS <90 mmHg', 20),
      yes('temp', 'Temperatura <35 o ≥40 °C', 15),
      yes('fc', 'Frecuencia cardíaca ≥125', 10),
      yes('ph', 'pH arterial <7,35', 30),
      yes('bun', 'BUN ≥30 mg/dL', 20),
      yes('na', 'Sodio <130 mEq/L', 20),
      yes('glic', 'Glicemia ≥250 mg/dL', 10),
      yes('hto', 'Hematocrito <30%', 10),
      yes('po2', 'PaO₂ <60 mmHg o SatO₂ <90%', 10),
      yes('derrame', 'Derrame pleural', 10),
    ],
    result: (total, v) => {
      const clean = !['cancer', 'higado', 'icc', 'acv', 'renal', 'mental', 'fr', 'pas', 'temp', 'fc'].some((k) => v[k])
      const [roman, level, title, advice] =
        v.edad <= 50 && clean ? ['I', LOW, 'Muy bajo riesgo', 'Manejo ambulatorio si no hay otra razón para hospitalizar.']
          : total <= 70 ? ['II', LOW, 'Bajo riesgo', 'Manejo ambulatorio habitual.']
            : total <= 90 ? ['III', MODERATE, 'Riesgo intermedio', 'Observación u hospitalización breve.']
              : total <= 130 ? ['IV', HIGH, 'Alto riesgo', 'Hospitalizar.']
                : ['V', CRITICAL, 'Muy alto riesgo', 'Hospitalizar y considerar UCI.']
      return { display: `Clase ${roman} · ${total} puntos`, level, title, advice }
    },
  },
  {
    id: 'wells-tep', name: 'Wells para TEP', topic: 'Tromboembolismo pulmonar', max: 12.5, ...PE,
    items: [
      yes('tvp', 'Signos clínicos de TVP', 3),
      yes('probable', 'TEP más probable que otro diagnóstico', 3),
      yes('fc', 'Frecuencia cardíaca >100', 1.5),
      yes('inmov', 'Inmovilización ≥3 días o cirugía en las últimas 4 semanas', 1.5),
      yes('previo', 'TEP o TVP previa', 1.5),
      yes('hemoptisis', 'Hemoptisis', 1),
      yes('cancer', 'Cáncer activo', 1),
    ],
    result: bands(
      [1.5, LOW, 'Baja probabilidad', 'Dímero D; si es negativo se descarta TEP.'],
      [6, MODERATE, 'Probabilidad moderada', 'Dímero D y, si es positivo, angioTAC de tórax.'],
      [12.5, CRITICAL, 'Alta probabilidad de TEP', 'AngioTAC de tórax urgente; anticoagular mientras se confirma si no hay contraindicación.'],
    ),
  },
  {
    id: 'ginebra', name: 'Ginebra revisado', topic: 'Tromboembolismo pulmonar', max: 22, ...PE,
    items: [
      yes('edad', 'Edad >65 años'),
      yes('previo', 'TVP o TEP previa', 3),
      yes('cirugia', 'Cirugía o fractura en el último mes', 2),
      yes('cancer', 'Cáncer activo', 2),
      yes('dolor', 'Dolor unilateral en extremidad inferior', 3),
      yes('hemoptisis', 'Hemoptisis', 2),
      scale('fc', 'Frecuencia cardíaca', ['Menor de 75', '75 a 94', '95 o más'], [0, 3, 5]),
      yes('palpacion', 'Dolor a la palpación venosa profunda y edema unilateral', 4),
    ],
    result: bands(
      [3, LOW, 'Probabilidad baja', 'Dímero D; si es negativo se descarta TEP.'],
      [10, MODERATE, 'Probabilidad intermedia', 'Dímero D y, si es positivo, angioTAC.'],
      [22, CRITICAL, 'Probabilidad alta', 'AngioTAC directa; anticoagular mientras se confirma si no hay contraindicación.'],
    ),
  },
  {
    id: 'bode', name: 'Índice BODE', topic: 'Pronóstico en EPOC', max: 10,
    chapters: ['c2-s3'], drugs: ['salbutamol', 'ipratropio', 'prednisona'],
    note: 'Evaluar en paciente estable, no durante la exacerbación.',
    items: [
      number('imc', 'Índice de masa corporal', 10, 80, (x) => (x > 21 ? 0 : 1)),
      number('vef1', 'VEF₁ (% del predicho)', 5, 150, (x) => (x >= 65 ? 0 : x >= 50 ? 1 : x >= 36 ? 2 : 3)),
      scale('disnea', 'Disnea (mMRC)', ['0', '1', '2', '3', '4'], [0, 0, 1, 2, 3]),
      number('marcha', 'Test de marcha de 6 minutos (metros)', 0, 900, (x) => (x >= 350 ? 0 : x >= 250 ? 1 : x >= 150 ? 2 : 3)),
    ],
    result: bands(
      [2, LOW, 'Riesgo bajo', 'Tratamiento de base y actividad física.'],
      [4, MODERATE, 'Riesgo moderado', 'Derivar a rehabilitación pulmonar.'],
      [6, HIGH, 'Riesgo alto', 'Rehabilitación pulmonar y evaluar oxigenoterapia.'],
      [10, CRITICAL, 'Riesgo muy alto', 'Especialista: oxigenoterapia y evaluación de trasplante.'],
    ),
  },
]

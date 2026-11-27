import { CRITICAL, HIGH, LOW, MODERATE, bands, number, scale, select, yes } from '../../lib/scores.js'

const SAH = { chapters: ['c14-s8', 'c6-s4'], drugs: ['nimodipino', 'labetalol', 'fentanilo'] }
const motor = (key, label) =>
  scale(key, label, ['Sin claudicación', 'Claudica sin tocar la cama', 'Algún esfuerzo contra gravedad', 'Sin esfuerzo contra gravedad', 'Sin movimiento'])

export default [
  {
    id: 'glasgow', name: 'Escala de coma de Glasgow', topic: 'Nivel de conciencia', max: 15,
    chapters: ['c3-s1', 'c10-s2'], drugs: ['etomidato', 'ketamina', 'rocuronio'],
    items: [
      scale('ocular', 'Apertura ocular', ['Espontánea (4)', 'A la voz (3)', 'Al dolor (2)', 'Ninguna (1)'], [4, 3, 2, 1]),
      scale('verbal', 'Respuesta verbal', ['Orientada (5)', 'Confusa (4)', 'Palabras inapropiadas (3)', 'Sonidos incomprensibles (2)', 'Ninguna (1)'], [5, 4, 3, 2, 1]),
      scale('motora', 'Respuesta motora', ['Obedece órdenes (6)', 'Localiza el dolor (5)', 'Retira (4)', 'Flexión anormal (3)', 'Extensión (2)', 'Ninguna (1)'], [6, 5, 4, 3, 2, 1]),
    ],
    result: (total) => ({
      ...bands(
        [8, CRITICAL, 'Compromiso grave', 'Considerar intubación para proteger la vía aérea y TAC de cerebro urgente.'],
        [12, HIGH, 'Compromiso moderado', 'TAC de cerebro y vigilancia neurológica seriada.'],
        [15, LOW, 'Compromiso leve o sin compromiso', 'Reevaluar seriadamente según la causa.'],
      )(total),
      // Los fármacos de intubación solo se sugieren cuando corresponde considerarla
      ...(total > 8 && { drugs: [] }),
    }),
  },
  {
    id: 'nihss', name: 'NIHSS', topic: 'Gravedad del ACV', max: 42,
    chapters: ['c14-s1', 'c10-s2'], drugs: ['alteplasa', 'tenecteplasa', 'labetalol', 'aspirina'],
    note: 'Descartar hemorragia con TAC antes de cualquier trombolítico o antiagregante. La reperfusión depende además del tiempo, las imágenes y las contraindicaciones.',
    items: [
      scale('conciencia', '1a. Nivel de conciencia', ['Alerta', 'Somnoliento', 'Estuporoso', 'Coma']),
      scale('preguntas', '1b. Preguntas (mes y edad)', ['Ambas correctas', 'Una correcta', 'Ninguna']),
      scale('ordenes', '1c. Órdenes (ojos y mano)', ['Ambas', 'Una', 'Ninguna']),
      scale('mirada', '2. Mirada conjugada', ['Normal', 'Paresia parcial', 'Desviación forzada']),
      scale('campos', '3. Campos visuales', ['Normales', 'Hemianopsia parcial', 'Hemianopsia completa', 'Bilateral o ceguera']),
      scale('facial', '4. Paresia facial', ['Normal', 'Menor', 'Parcial', 'Completa']),
      motor('brazoI', '5a. Brazo izquierdo'),
      motor('brazoD', '5b. Brazo derecho'),
      motor('piernaI', '6a. Pierna izquierda'),
      motor('piernaD', '6b. Pierna derecha'),
      scale('ataxia', '7. Ataxia de extremidades', ['Ausente', 'En una extremidad', 'En dos extremidades']),
      scale('sensibilidad', '8. Sensibilidad', ['Normal', 'Pérdida leve a moderada', 'Pérdida grave']),
      scale('lenguaje', '9. Lenguaje', ['Normal', 'Afasia leve a moderada', 'Afasia grave', 'Mudo o afasia global']),
      scale('disartria', '10. Disartria', ['Normal', 'Leve a moderada', 'Grave o anartria']),
      scale('extincion', '11. Extinción e inatención', ['Ausente', 'En una modalidad', 'Profunda o en más de una']),
    ],
    result: bands(
      [4, LOW, 'ACV leve', 'Evaluar igualmente reperfusión si el déficit es discapacitante.'],
      [15, MODERATE, 'ACV moderado', 'Activar código ACV: evaluar trombolisis y trombectomía.'],
      [20, HIGH, 'ACV moderado a severo', 'Código ACV, descartar oclusión de gran vaso y monitorización.'],
      [42, CRITICAL, 'ACV severo', 'Código ACV, proteger vía aérea, evaluar trombectomía y unidad crítica.'],
    ),
  },
  {
    id: 'abcd2', name: 'ABCD²', topic: 'Riesgo de ACV tras un AIT', max: 7,
    chapters: ['c14-s5'], drugs: ['aspirina', 'clopidogrel'],
    items: [
      yes('edad', 'Edad ≥60 años'),
      yes('pa', 'Presión arterial ≥140/90 mmHg'),
      scale('clinica', 'Clínica', ['Otros síntomas', 'Alteración del habla sin debilidad', 'Debilidad focal'], [0, 1, 2]),
      scale('duracion', 'Duración', ['Menos de 10 min', '10 a 59 min', '60 min o más'], [0, 1, 2]),
      yes('dm', 'Diabetes'),
    ],
    result: bands(
      [3, LOW, 'Bajo riesgo', 'Estudio precoz ambulatorio y antiagregación si no hay contraindicación.'],
      [5, HIGH, 'Riesgo moderado', 'Hospitalizar y estudio urgente: imagen vascular y ecocardiograma.'],
      [7, CRITICAL, 'Alto riesgo de ACV precoz', 'Hospitalizar y estudio urgente: imagen vascular y ecocardiograma.'],
    ),
  },
  {
    id: 'hunthess', name: 'Hunt y Hess', topic: 'Hemorragia subaracnoidea', ...SAH,
    items: [
      scale('grado', 'Cuadro clínico', [
        'I · Asintomático o cefalea leve', 'II · Cefalea intensa o rigidez de nuca, sin déficit (salvo par craneal)',
        'III · Somnolencia, confusión o déficit leve', 'IV · Estupor o hemiparesia moderada a grave', 'V · Coma profundo o descerebración',
      ], [1, 2, 3, 4, 5]),
    ],
    result: (total) => ({
      display: `Grado ${total} de 5`,
      ...bands(
        [2, HIGH, 'Buen grado clínico', 'Neurocirugía urgente para asegurar el aneurisma; control de presión y dolor.'],
        [3, HIGH, 'Grado intermedio', 'UCI neurológica y evaluación neuroquirúrgica urgente.'],
        [5, CRITICAL, 'Mal grado clínico', 'Proteger vía aérea, UCI neurológica y neurocirugía urgente (clipaje o coiling).'],
      )(total),
    }),
  },
  {
    id: 'fisher', name: 'Escala de Fisher', topic: 'Riesgo de vasoespasmo en la HSA', ...SAH,
    items: [
      scale('grado', 'Hallazgo en la TAC', [
        '1 · Sin sangre visible', '2 · Capa difusa o delgada (<1 mm)', '3 · Coágulo localizado o capa gruesa (≥1 mm)',
        '4 · Hemorragia intraparenquimatosa o intraventricular',
      ], [1, 2, 3, 4]),
    ],
    result: (total) => ({
      display: `Fisher ${total}`,
      ...bands(
        [2, MODERATE, 'Riesgo de vasoespasmo bajo', 'Nimodipino y control neurológico seriado.'],
        [3, CRITICAL, 'Mayor riesgo de vasoespasmo', 'Nimodipino y monitorización de vasoespasmo (Doppler transcraneal).'],
        [4, HIGH, 'Hemorragia intraventricular o parenquimatosa', 'Nimodipino, vigilar hidrocefalia y vasoespasmo.'],
      )(total),
    }),
  },
  {
    id: 'ich', name: 'ICH Score', topic: 'Hemorragia intracerebral', max: 6,
    chapters: ['c14-s7'], drugs: ['labetalol', 'vitamina-k', 'complejo-protrombinico', 'idarucizumab', 'andexanet'],
    items: [
      select('gcs', 'Glasgow', [['13 a 15', 0], ['5 a 12', 1], ['3 a 4', 2]]),
      yes('volumen', 'Volumen del hematoma ≥30 mL'),
      yes('ventricular', 'Hemorragia intraventricular'),
      yes('infratentorial', 'Origen infratentorial'),
      yes('edad', 'Edad ≥80 años'),
    ],
    result: (total) => ({
      ...bands(
        [1, MODERATE, 'Mortalidad a 30 días baja', 'Control de presión, revertir anticoagulación y unidad de ACV.'],
        [2, HIGH, 'Mortalidad a 30 días intermedia', 'Unidad crítica, revertir anticoagulación y evaluación neuroquirúrgica.'],
        [6, CRITICAL, 'Mortalidad a 30 días muy alta', 'Discutir pronóstico con la familia; no usar el score como único criterio para limitar tratamiento.'],
      )(total),
    }),
  },
  {
    id: 'rankin', name: 'Rankin modificada', topic: 'Discapacidad tras un ACV', chapters: ['c14-s1'], drugs: [],
    note: 'Mide desenlace funcional; no define la conducta aguda.',
    items: [
      scale('grado', 'Estado funcional', [
        '0 · Sin síntomas', '1 · Sin discapacidad significativa', '2 · Discapacidad leve', '3 · Discapacidad moderada: camina sin ayuda',
        '4 · Discapacidad moderada a grave: no camina sin ayuda', '5 · Discapacidad grave: encamado', '6 · Fallecido',
      ]),
    ],
    result: (total) => ({
      display: `mRS ${total}`,
      badge: 'Estado funcional',
      ...bands(
        [2, LOW, 'Independiente', 'Rehabilitación según secuelas y prevención secundaria.'],
        [3, MODERATE, 'Dependencia parcial', 'Plan de rehabilitación y apoyo al alta.'],
        [5, HIGH, 'Dependiente', 'Rehabilitación, cuidador y prevención de complicaciones.'],
        [6, LOW, 'Fallecido', 'Registro de desenlace.'],
      )(total),
    }),
  },
]

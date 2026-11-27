import { CRITICAL, HIGH, LOW, MODERATE, bands, number, scale, select, yes } from '../../lib/scores.js'

const APPENDIX = { chapters: ['c4-s1'], drugs: ['paracetamol', 'ketorolaco', 'ceftriaxona', 'metronidazol'] }
const PANCREATITIS = { chapters: ['c4-s3'], drugs: ['ringer', 'paracetamol', 'morfina', 'ondansetron'] }
const PERITONITIS = { chapters: ['c4-s5'], drugs: ['piperacilina-tazobactam', 'ceftriaxona', 'metronidazol', 'meropenem', 'omeprazol'] }

// Tramos de APACHE II: [valor mínimo, puntos], de mayor a menor
const from = (...rows) => (x) => rows.find(([min]) => x >= min)[1]

export default [
  {
    id: 'alvarado', name: 'Score de Alvarado', topic: 'Apendicitis aguda', max: 10, ...APPENDIX,
    items: [
      yes('migracion', 'Migración del dolor a fosa ilíaca derecha'),
      yes('anorexia', 'Anorexia'),
      yes('nauseas', 'Náuseas o vómitos'),
      yes('dolor', 'Dolor en fosa ilíaca derecha', 2),
      yes('rebote', 'Dolor de rebote'),
      yes('fiebre', 'Fiebre >37,3 °C'),
      yes('leuco', 'Leucocitosis', 2),
      yes('izq', 'Desviación izquierda'),
    ],
    result: bands(
      [4, LOW, 'Baja probabilidad de apendicitis', 'Alta con control o reevaluar.'],
      [6, MODERATE, 'Apendicitis posible', 'Ecografía o TAC y observación seriada.'],
      [8, HIGH, 'Apendicitis probable', 'Interconsulta a cirugía; considerar apendicectomía.'],
      [10, CRITICAL, 'Apendicitis muy probable', 'Interconsulta a cirugía; considerar apendicectomía.'],
    ),
  },
  {
    id: 'ripasa', name: 'RIPASA', topic: 'Apendicitis aguda', max: 17.5, ...APPENDIX,
    items: [
      scale('sexo', 'Sexo', ['Femenino', 'Masculino'], [0.5, 1]),
      scale('edad', 'Edad', ['Menor de 40 años', '40 años o más'], [1, 0.5]),
      scale('duracion', 'Duración de los síntomas', ['Menos de 48 h', '48 h o más'], [1, 0.5]),
      yes('extranjero', 'Documento de identidad extranjero (criterio de la población original)', 1),
      yes('fid', 'Dolor en fosa ilíaca derecha', 0.5),
      yes('migracion', 'Migración del dolor', 0.5),
      yes('anorexia', 'Anorexia', 1),
      yes('nauseas', 'Náuseas y vómitos', 1),
      yes('sensib', 'Sensibilidad en fosa ilíaca derecha', 1),
      yes('defensa', 'Defensa muscular', 2),
      yes('rebote', 'Dolor de rebote', 1),
      yes('rovsing', 'Signo de Rovsing', 2),
      yes('fiebre', 'Fiebre >37 y <39 °C', 1),
      yes('leuco', 'Leucocitosis', 1),
      yes('orina', 'Examen de orina negativo', 1),
    ],
    result: bands(
      [4.5, LOW, 'Baja probabilidad', 'Reevaluar y buscar diagnósticos alternativos.'],
      [7, MODERATE, 'Probabilidad intermedia', 'Imagen (ecografía o TAC) antes de decidir.'],
      [Infinity, HIGH, 'Alta probabilidad de apendicitis', 'Evaluación quirúrgica para cirugía.'],
    ),
  },
  {
    id: 'ranson', name: 'Criterios de Ranson', topic: 'Pancreatitis aguda (no biliar)', max: 11, ...PANCREATITIS,
    note: 'Puntos de corte para pancreatitis no biliar. Los últimos seis criterios se evalúan a las 48 h: antes, el puntaje es incompleto.',
    items: [
      yes('edad', 'Ingreso: edad >55 años'),
      yes('leuco', 'Ingreso: leucocitos >16.000/µL'),
      yes('glic', 'Ingreso: glicemia >200 mg/dL'),
      yes('ldh', 'Ingreso: LDH >350 U/L'),
      yes('got', 'Ingreso: GOT >250 U/L'),
      yes('hto', '48 h: caída del hematocrito >10 puntos'),
      yes('bun', '48 h: aumento del BUN >5 mg/dL'),
      yes('ca', '48 h: calcio <8 mg/dL'),
      yes('po2', '48 h: PaO₂ <60 mmHg'),
      yes('base', '48 h: déficit de base >4 mEq/L'),
      yes('liq', '48 h: secuestro de líquidos >6 L'),
    ],
    result: bands(
      [2, LOW, 'Pancreatitis leve (mortalidad <5%)', 'Hidratación, analgesia y reevaluación; completar los criterios a las 48 h.'],
      [Infinity, HIGH, 'Pancreatitis grave', 'UCI o UTI, monitorización estrecha; considerar TAC contrastado a las 72 h.'],
    ),
  },
  {
    id: 'bisap', name: 'BISAP', topic: 'Pancreatitis aguda', max: 5, ...PANCREATITIS,
    items: [
      yes('bun', 'BUN >25 mg/dL'),
      yes('conc', 'Alteración de conciencia (Glasgow <15)'),
      yes('sirs', 'SIRS presente'),
      yes('edad', 'Edad >60 años'),
      yes('derrame', 'Derrame pleural'),
    ],
    result: bands(
      [2, LOW, 'Bajo riesgo', 'Manejo estándar con hidratación y analgesia; reevaluar.'],
      [5, HIGH, 'Alto riesgo de mortalidad y complicaciones', 'Hospitalizar con monitorización intensiva e hidratación agresiva guiada.'],
    ),
  },
  {
    id: 'apache2', name: 'APACHE II', topic: 'Gravedad del paciente crítico', max: 71,
    chapters: ['c10-s3', 'c11-s10'], drugs: ['noradrenalina', 'hidrocortisona'],
    note: 'Usar el peor valor de las primeras 24 h.',
    items: [
      number('temp', 'Temperatura central (°C)', 25, 45, from([41, 4], [39, 3], [38.5, 1], [36, 0], [34, 1], [32, 2], [30, 3], [0, 4])),
      number('pam', 'Presión arterial media (mmHg)', 20, 250, from([160, 4], [130, 3], [110, 2], [70, 0], [50, 2], [0, 4])),
      number('fc', 'Frecuencia cardíaca (lpm)', 20, 300, from([180, 4], [140, 3], [110, 2], [70, 0], [55, 2], [40, 3], [0, 4])),
      number('fr', 'Frecuencia respiratoria (rpm)', 0, 80, from([50, 4], [35, 3], [25, 1], [12, 0], [10, 1], [6, 2], [0, 4])),
      select('fio2', 'FiO₂', [['Menor de 0,5 (ingresar PaO₂)', 0], ['0,5 o más (ingresar gradiente A-a)', 0]]),
      number('oxi', 'PaO₂ o gradiente A-aDO₂ según la FiO₂ (mmHg)', 20, 700, (x, v) =>
        v.fio2 === 1 ? from([500, 4], [350, 3], [200, 2], [0, 0])(x) : x > 70 ? 0 : x >= 61 ? 1 : x >= 55 ? 3 : 4),
      number('ph', 'pH arterial', 6.5, 8, from([7.7, 4], [7.6, 3], [7.5, 1], [7.33, 0], [7.25, 2], [7.15, 3], [0, 4])),
      number('na', 'Sodio (mEq/L)', 90, 200, from([180, 4], [160, 3], [155, 2], [150, 1], [130, 0], [120, 2], [111, 3], [0, 4])),
      number('k', 'Potasio (mEq/L)', 1, 10, from([7, 4], [6, 3], [5.5, 1], [3.5, 0], [3, 1], [2.5, 2], [0, 4])),
      number('crea', 'Creatinina (mg/dL)', 0.1, 20, from([3.5, 4], [2, 3], [1.5, 2], [0.6, 0], [0, 2])),
      yes('ira', 'Insuficiencia renal aguda (duplica los puntos de creatinina)', 0),
      number('hto', 'Hematocrito (%)', 10, 75, from([60, 4], [50, 2], [46, 1], [30, 0], [20, 2], [0, 4])),
      number('gb', 'Leucocitos (miles/µL)', 0, 100, from([40, 4], [20, 2], [15, 1], [3, 0], [1, 2], [0, 4])),
      number('gcs', 'Escala de Glasgow', 3, 15, (x) => 15 - x),
      number('edad', 'Edad (años)', 16, 120, from([75, 6], [65, 5], [55, 3], [45, 2], [0, 0])),
      scale('cronica', 'Enfermedad orgánica grave o inmunosupresión', ['No', 'Sí, posoperatorio electivo', 'Sí, no operado o cirugía de urgencia'], [0, 2, 5]),
    ],
    compute: (p, v) => Object.values(p).reduce((a, b) => a + b, 0) + (v.ira ? p.crea : 0),
    result: bands(
      [9, LOW, 'Gravedad baja', 'Orienta la intensidad de cuidados; reevaluar según evolución.'],
      [19, MODERATE, 'Gravedad intermedia', 'Considerar ingreso a unidad de paciente crítico según contexto.'],
      [25, HIGH, 'Gravedad alta', 'Ingreso a UCI; discutir pronóstico.'],
      [Infinity, CRITICAL, 'Gravedad muy alta (mortalidad predicha >50%)', 'Manejo en UCI y conversación pronóstica con la familia.'],
    ),
  },
  {
    id: 'mannheim', name: 'Índice de peritonitis de Mannheim', topic: 'Peritonitis', max: 47, ...PERITONITIS,
    items: [
      yes('edad', 'Edad >50 años', 5),
      yes('mujer', 'Sexo femenino', 5),
      yes('falla', 'Falla orgánica', 7),
      yes('cancer', 'Neoplasia maligna', 4),
      yes('tiempo', 'Peritonitis de más de 24 h antes de la cirugía', 4),
      yes('origen', 'Origen no colónico', 4),
      yes('difusa', 'Peritonitis difusa generalizada', 6),
      scale('exudado', 'Exudado', ['Claro', 'Turbio o purulento', 'Fecaloideo'], [0, 6, 12]),
    ],
    result: bands(
      [20, LOW, 'Mortalidad baja', 'Cirugía y antibióticos según protocolo.'],
      [29, MODERATE, 'Mortalidad intermedia', 'Cirugía urgente y vigilancia estrecha.'],
      [Infinity, CRITICAL, 'Mortalidad alta (>50%)', 'Cirugía urgente y manejo posoperatorio en UCI.'],
    ),
  },
  {
    id: 'boey', name: 'Score de Boey', topic: 'Úlcera péptica perforada', max: 3, ...PERITONITIS,
    items: [
      yes('shock', 'Shock al ingreso'),
      yes('comorb', 'Comorbilidad médica mayor'),
      yes('tiempo', 'Perforación de más de 24 h de evolución'),
    ],
    result: bands(
      [0, LOW, 'Riesgo bajo (mortalidad ≈1,5%)', 'Resolución quirúrgica según protocolo.'],
      [1, MODERATE, 'Riesgo aumentado', 'Cirugía de urgencia y reanimación prequirúrgica.'],
      [3, CRITICAL, 'Riesgo muy alto', 'Cirugía de urgencia y reanimación agresiva prequirúrgica.'],
    ),
  },
  {
    id: 'asa', name: 'Clasificación ASA', topic: 'Riesgo anestésico', chapters: ['c3-s2'], drugs: [],
    items: [
      scale('clase', 'Estado físico', [
        'I · Paciente sano',
        'II · Enfermedad sistémica leve',
        'III · Enfermedad sistémica grave',
        'IV · Enfermedad grave con amenaza constante para la vida',
        'V · Moribundo, no se espera que sobreviva sin cirugía',
        'VI · Muerte cerebral (donante de órganos)',
      ], [1, 2, 3, 4, 5, 6]),
      yes('urgencia', 'Cirugía de urgencia (agrega la letra E)', 0),
    ],
    compute: (p) => p.clase,
    result: (total, v) => ({
      display: `ASA ${['I', 'II', 'III', 'IV', 'V', 'VI'][total - 1]}${v.urgencia ? ' E' : ''}`,
      ...(total === 6 && { badge: 'Donante' }),
      ...bands(
        [2, LOW, 'Riesgo perioperatorio bajo', 'Evaluación preanestésica habitual.'],
        [4, HIGH, 'Riesgo perioperatorio alto', 'Evaluación preanestésica exhaustiva; considerar UCI posoperatoria.'],
        [5, CRITICAL, 'Riesgo vital inminente', 'Decisión quirúrgica inmediata con anestesia y UCI.'],
        [6, LOW, 'Donante de órganos', 'Aplicar el protocolo de procuramiento.'],
      )(total),
    }),
  },
  {
    id: 'charlson', name: 'Índice de comorbilidad de Charlson', topic: 'Pronóstico por comorbilidades', max: 37,
    chapters: ['c18-s7'], drugs: [],
    items: [
      number('edad', 'Edad (años)', 16, 120, from([80, 4], [70, 3], [60, 2], [50, 1], [0, 0])),
      yes('iam', 'Infarto de miocardio'),
      yes('icc', 'Insuficiencia cardíaca'),
      yes('vasc', 'Enfermedad vascular periférica'),
      yes('acv', 'Enfermedad cerebrovascular'),
      yes('demencia', 'Demencia'),
      yes('pulmon', 'Enfermedad pulmonar crónica'),
      yes('conectivo', 'Enfermedad del tejido conectivo'),
      yes('ulcera', 'Enfermedad ulcerosa péptica'),
      scale('higado', 'Enfermedad hepática', ['No', 'Leve', 'Moderada o grave'], [0, 1, 3]),
      scale('dm', 'Diabetes', ['No', 'Sin daño de órgano', 'Con daño de órgano'], [0, 1, 2]),
      yes('hemiplejia', 'Hemiplejia', 2),
      yes('renal', 'Enfermedad renal moderada o grave', 2),
      scale('tumor', 'Tumor sólido', ['No', 'Localizado', 'Metastásico'], [0, 2, 6]),
      yes('leucemia', 'Leucemia', 2),
      yes('linfoma', 'Linfoma', 2),
      yes('sida', 'SIDA', 6),
    ],
    result: bands(
      [1, LOW, 'Carga de comorbilidad baja', 'Manejo habitual.'],
      [4, MODERATE, 'Carga de comorbilidad intermedia', 'Considerar las comorbilidades en la decisión de riesgo.'],
      [Infinity, HIGH, 'Carga de comorbilidad alta', 'Discutir objetivos terapéuticos y riesgo quirúrgico con paciente y familia.'],
    ),
  },
  {
    id: 'blatchford', name: 'Glasgow-Blatchford', topic: 'Hemorragia digestiva alta', max: 23,
    chapters: ['c10-s9'], drugs: ['omeprazol', 'pantoprazol', 'octreotido', 'ceftriaxona'],
    items: [
      scale('sexo', 'Sexo', ['Hombre', 'Mujer'], [0, 0]),
      number('bun', 'BUN (mg/dL)', 1, 250, from([70, 6], [28, 4], [22.4, 3], [18.2, 2], [0, 0])),
      number('hb', 'Hemoglobina (g/dL)', 2, 22, (x, v) =>
        v.sexo === 0 ? (x >= 13 ? 0 : x >= 12 ? 1 : x >= 10 ? 3 : 6) : x >= 12 ? 0 : x >= 10 ? 1 : 6),
      number('pas', 'Presión arterial sistólica (mmHg)', 30, 300, from([110, 0], [100, 1], [90, 2], [0, 3])),
      yes('fc', 'Frecuencia cardíaca ≥100 lpm'),
      yes('melena', 'Melena'),
      yes('sincope', 'Síncope', 2),
      yes('higado', 'Enfermedad hepática', 2),
      yes('icc', 'Insuficiencia cardíaca', 2),
    ],
    result: bands(
      [0, LOW, 'Muy bajo riesgo', 'Posible alta con endoscopía ambulatoria.'],
      [5, MODERATE, 'Puede requerir intervención', 'Hospitalizar u observar y programar endoscopía.'],
      [Infinity, HIGH, 'Alto riesgo de transfusión o endoscopía urgente', 'Reanimar, inhibidor de bomba de protones y endoscopía urgente.'],
    ),
  },
]

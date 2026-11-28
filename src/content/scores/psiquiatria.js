import { CRITICAL, HIGH, LOW, MODERATE, bands, scale, yes } from '../../lib/scores.js'

const SUICIDE = { chapters: ['c25-s18', 'c18-s9'], drugs: [] }
const AGITATION = { chapters: ['c10-s5', 'c18-s2'], drugs: ['haloperidol', 'quetiapina', 'lorazepam', 'midazolam'] }

const upTo = (n) => Array.from({ length: n + 1 }, (_, i) => String(i))
const ciwa = (key, label, low, high) => scale(key, `${label} (0 = ${low}; 7 = ${high})`, upTo(7))
const cows = (key, label, options) => scale(key, label, options.map(([t]) => t), options.map(([, p]) => p))

export default [
  {
    id: 'cssrs', name: 'C-SSRS (tamizaje)', topic: 'Riesgo suicida', ...SUICIDE,
    note: 'Versión resumida de tamizaje; no sustituye la entrevista clínica ni el instrumento completo.',
    items: [
      yes('q1', 'Último mes: ¿ha deseado estar muerto o no despertar?'),
      yes('q2', 'Último mes: ¿ha pensado en suicidarse?'),
      yes('q3', 'Último mes: ¿ha pensado en cómo lo haría?'),
      yes('q4', 'Último mes: ¿ha tenido alguna intención de actuar?'),
      yes('q5', 'Último mes: ¿ha elaborado un plan y tiene intención de realizarlo?'),
      yes('previa', 'Conducta o intento suicida hace más de 3 meses'),
      yes('reciente', 'Conducta o intento suicida en los últimos 3 meses'),
    ],
    compute: (p, v) => (v.q4 || v.q5 || v.reciente ? 2 : v.q3 || v.previa ? 1 : 0),
    result: (total, v) => {
      const display = ['Riesgo bajo', 'Riesgo moderado', 'Riesgo alto'][total]
      if (total === 2) return { display, level: CRITICAL, title: 'Riesgo alto', advice: 'Acompañamiento continuo, retirar medios letales y evaluación psiquiátrica inmediata; hospitalizar, incluso involuntariamente si es necesario.' }
      if (total === 1) return { display, level: HIGH, title: 'Riesgo moderado', advice: 'Evaluación por salud mental antes del alta, plan de seguridad y restricción de medios.' }
      const any = v.q1 || v.q2
      return { display, level: any ? MODERATE : LOW, title: any ? 'Riesgo bajo con ideación' : 'Sin respuestas positivas marcadas', advice: any ? 'Derivar a salud mental y entregar plan de seguridad.' : 'Mantener el juicio clínico; reevaluar si cambian las circunstancias.' }
    },
  },
  {
    id: 'sadpersons', name: 'SAD PERSONS', topic: 'Riesgo suicida', max: 10, ...SUICIDE,
    items: [
      yes('s', 'Sexo masculino'),
      yes('a', 'Edad <19 o >45 años'),
      yes('d', 'Depresión'),
      yes('p', 'Intento previo'),
      yes('e', 'Abuso de alcohol'),
      yes('r', 'Pérdida del pensamiento racional'),
      yes('so', 'Falta de soporte social'),
      yes('o', 'Plan organizado'),
      yes('n', 'Sin pareja'),
      yes('si', 'Enfermedad somática'),
    ],
    result: bands(
      [4, LOW, 'Bajo riesgo', 'Seguimiento ambulatorio y plan de seguridad; un puntaje bajo no descarta riesgo.'],
      [6, HIGH, 'Riesgo moderado', 'Evaluación psiquiátrica urgente y considerar internación.'],
      [10, CRITICAL, 'Alto riesgo', 'Hospitalización.'],
    ),
  },
  {
    id: 'ciwa', name: 'CIWA-Ar', topic: 'Abstinencia alcohólica', max: 67,
    chapters: ['c10-s6'], drugs: ['diazepam', 'lorazepam', 'tiamina'],
    items: [
      ciwa('nausea', 'Náuseas y vómitos', 'ausentes', 'vómitos frecuentes'),
      ciwa('temblor', 'Temblor', 'ausente', 'intenso incluso con brazos apoyados'),
      ciwa('sudor', 'Sudoración', 'ausente', 'profusa'),
      ciwa('ansiedad', 'Ansiedad', 'tranquilo', 'pánico'),
      ciwa('agitacion', 'Agitación', 'actividad normal', 'agitación constante'),
      ciwa('tactil', 'Alteraciones táctiles', 'ausentes', 'alucinaciones continuas'),
      ciwa('auditiva', 'Alteraciones auditivas', 'ausentes', 'alucinaciones continuas'),
      ciwa('visual', 'Alteraciones visuales', 'ausentes', 'alucinaciones continuas'),
      ciwa('cefalea', 'Cefalea o pesadez', 'ausente', 'extremadamente intensa'),
      scale('orient', 'Orientación (0 = orientado; 4 = desorientado en lugar o persona)', upTo(4)),
    ],
    result: bands(
      [9, LOW, 'Abstinencia leve', 'Observación, hidratación, tiamina y reevaluación seriada.'],
      [18, MODERATE, 'Abstinencia moderada', 'Benzodiacepinas según síntomas y reevaluación frecuente.'],
      [Infinity, CRITICAL, 'Abstinencia severa (riesgo de delirium tremens y convulsiones)', 'Benzodiacepinas escalonadas por protocolo, vigilancia estrecha; considerar UCI.'],
    ),
  },
  {
    id: 'cows', name: 'COWS', topic: 'Abstinencia a opioides', max: 48,
    chapters: ['c8-s4'], drugs: ['metadona', 'buprenorfina'],
    items: [
      cows('fc', 'Pulso en reposo', [['≤80 lpm', 0], ['81-100', 1], ['101-120', 2], ['>120', 4]]),
      cows('sudor', 'Sudoración', [['Ausente', 0], ['Escalofríos o rubor referidos', 1], ['Rubor o cara húmeda', 2], ['Gotas en frente o cara', 3], ['Sudor que chorrea', 4]]),
      cows('inquietud', 'Inquietud', [['Puede estar quieto', 0], ['Refiere dificultad', 1], ['Se mueve con frecuencia', 3], ['No puede estar quieto', 5]]),
      cows('pupila', 'Pupilas', [['Normales', 0], ['Algo más grandes de lo normal', 1], ['Moderadamente dilatadas', 2], ['Solo se ve el borde del iris', 5]]),
      cows('dolor', 'Dolor óseo o articular', [['Ausente', 0], ['Leve', 1], ['Difuso e intenso', 2], ['Se frota o no puede estar quieto', 4]]),
      cows('rinorrea', 'Rinorrea o lagrimeo', [['Ausente', 0], ['Congestión u ojos húmedos', 1], ['Nariz que gotea o lagrimeo', 2], ['Escurrimiento constante', 4]]),
      cows('gi', 'Síntomas digestivos', [['Ausentes', 0], ['Cólicos', 1], ['Náuseas o deposiciones blandas', 2], ['Vómitos o diarrea', 3], ['Múltiples episodios', 5]]),
      cows('temblor', 'Temblor', [['Ausente', 0], ['Se palpa, no se ve', 1], ['Leve visible', 2], ['Intenso o fasciculaciones', 4]]),
      cows('bostezo', 'Bostezos', [['Ausentes', 0], ['1-2 durante la evaluación', 1], ['3 o más', 2], ['Varios por minuto', 4]]),
      cows('ansiedad', 'Ansiedad o irritabilidad', [['Ausente', 0], ['Refiere aumento', 1], ['Evidente', 2], ['Dificulta la evaluación', 4]]),
      cows('piel', 'Piloerección', [['Piel lisa', 0], ['Piloerección palpable o visible', 3], ['Prominente', 5]]),
    ],
    result: bands(
      [4, LOW, 'Abstinencia mínima', 'Observar y reevaluar.'],
      [12, LOW, 'Abstinencia leve', 'Tratamiento sintomático y reevaluación.'],
      [24, MODERATE, 'Abstinencia moderada', 'Iniciar agonista opioide (metadona o buprenorfina) según protocolo local.'],
      [36, HIGH, 'Abstinencia moderadamente severa', 'Agonista opioide según protocolo local y observación.'],
      [Infinity, CRITICAL, 'Abstinencia severa', 'Agonista opioide, monitorización y evaluación especializada.'],
    ),
  },
  {
    id: 'rass', name: 'RASS', topic: 'Agitación y sedación', ...AGITATION,
    items: [
      scale('nivel', 'Nivel observado', [
        '+4 · Combativo', '+3 · Muy agitado', '+2 · Agitado', '+1 · Inquieto', '0 · Alerta y tranquilo',
        '−1 · Somnoliento', '−2 · Sedación leve', '−3 · Sedación moderada', '−4 · Sedación profunda', '−5 · No responde',
      ], [4, 3, 2, 1, 0, -1, -2, -3, -4, -5]),
    ],
    result: (total) => ({
      display: `RASS ${total > 0 ? '+' : ''}${total}`,
      ...bands(
        [-4, HIGH, 'Sedación profunda o sin respuesta', 'Asegurar vía aérea y buscar causa; revisar sedantes.'],
        [-1, MODERATE, 'Sedación o compromiso de conciencia', 'Vigilar ventilación, revisar sedantes y buscar causa.'],
        [1, LOW, 'Tranquilo o levemente inquieto', 'Observar y reevaluar.'],
        [3, HIGH, 'Agitación significativa', 'Contención verbal o farmacológica y búsqueda de causa orgánica.'],
        [4, CRITICAL, 'Agitación combativa', 'Proteger al paciente y al equipo; contención farmacológica y búsqueda de causa orgánica.'],
      )(total),
    }),
  },
  {
    id: 'cam', name: 'CAM', topic: 'Delirium', ...AGITATION,
    items: [
      yes('agudo', '1. Inicio agudo o curso fluctuante'),
      yes('atencion', '2. Inatención'),
      yes('pensamiento', '3. Pensamiento desorganizado'),
      yes('conciencia', '4. Alteración del nivel de conciencia'),
    ],
    compute: (p, v) => (v.agudo && v.atencion && (v.pensamiento || v.conciencia) ? 1 : 0),
    result: (total) =>
      total
        ? { display: 'CAM positivo', level: HIGH, title: 'Delirium probable', advice: 'Buscar causa orgánica (infección, metabólica, fármacos) antes de atribuirlo a un cuadro psiquiátrico.' }
        : { display: 'CAM negativo', level: LOW, title: 'No cumple criterios de delirium', advice: 'Reevaluar si hay cambios: el delirium fluctúa.' },
  },
  {
    id: 'cage', name: 'CAGE', topic: 'Consumo de alcohol', max: 4, chapters: ['c10-s6'], drugs: ['tiamina'],
    items: [
      yes('c', '¿Ha sentido que debe disminuir su consumo?'),
      yes('a', '¿Le ha molestado que critiquen su forma de beber?'),
      yes('g', '¿Se ha sentido culpable por beber?'),
      yes('e', '¿Ha bebido en la mañana para calmar los nervios o la resaca?'),
    ],
    result: bands(
      [1, LOW, 'Tamizaje negativo', 'Consejería breve si hay consumo de riesgo.'],
      [4, MODERATE, 'Sugiere problema de consumo de alcohol', 'Derivar a evaluación por adicciones y tamizar comorbilidad psiquiátrica.'],
    ),
  },
]

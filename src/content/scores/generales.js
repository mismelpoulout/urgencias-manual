import { CRITICAL, HIGH, LOW, MODERATE, bands, number, scale, yes } from '../../lib/scores.js'

const SEPSIS = { chapters: ['c12-s2', 'c12-s3'], drugs: ['ringer', 'ceftriaxona', 'piperacilina-tazobactam', 'noradrenalina'] }
const EARLY = { chapters: ['c21-s1', 'c12-s2'], drugs: [] }
const organ = (key, label, texts) => scale(key, label, texts)

export default [
  {
    id: 'qsofa', name: 'qSOFA', topic: 'Sepsis: riesgo de mal desenlace', max: 3, ...SEPSIS,
    note: 'No sirve para descartar sepsis ni debe decidir por sí solo el inicio de la reanimación.',
    items: [
      yes('fr', 'Frecuencia respiratoria ≥22'),
      yes('mental', 'Alteración del estado mental'),
      yes('pas', 'PAS ≤100 mmHg'),
    ],
    result: bands(
      [1, LOW, 'Criterios insuficientes para alto riesgo', 'Si se sospecha sepsis, evaluar con SOFA o NEWS2 e iniciar manejo según la clínica.'],
      [3, CRITICAL, 'Alto riesgo de mal desenlace', 'Iniciar paquete de sepsis: cultivos, lactato, antibióticos precoces y fluidos; considerar UCI.'],
    ),
  },
  {
    id: 'sofa', name: 'SOFA', topic: 'Falla orgánica', max: 24,
    chapters: ['c12-s1', 'c12-s7'], drugs: ['noradrenalina', 'vasopresina', 'hidrocortisona'],
    note: 'Lo diagnóstico es el aumento de 2 o más puntos respecto del basal.',
    items: [
      organ('resp', 'PaO₂/FiO₂', ['≥400', '300-399', '200-299', '100-199 con soporte ventilatorio', '<100 con soporte ventilatorio']),
      organ('coag', 'Plaquetas (miles/µL)', ['≥150', '100-149', '50-99', '20-49', '<20']),
      organ('higado', 'Bilirrubina (mg/dL)', ['<1,2', '1,2-1,9', '2,0-5,9', '6,0-11,9', '≥12']),
      organ('cardio', 'Cardiovascular (dosis en mcg/kg/min)', ['PAM ≥70', 'PAM <70', 'Dopamina ≤5 o dobutamina', 'Dopamina >5 o NA/adrenalina ≤0,1', 'Dopamina >15 o NA/adrenalina >0,1']),
      organ('snc', 'Glasgow', ['15', '13-14', '10-12', '6-9', '<6']),
      organ('renal', 'Creatinina (mg/dL) o diuresis', ['<1,2', '1,2-1,9', '2,0-3,4', '3,5-4,9 o <500 mL/día', '≥5 o <200 mL/día']),
      scale('basal', 'SOFA basal conocido', ['0 o desconocido (se asume 0)', '1', '2', '3', '4 o más']),
    ],
    compute: (p) => p.resp + p.coag + p.higado + p.cardio + p.snc + p.renal,
    result: (total, v) => {
      const delta = total - v.basal
      return delta < 2
        ? { level: LOW, title: 'Sin aumento de 2 puntos sobre el basal', advice: 'Reevaluar seriadamente si persiste la sospecha de infección.' }
        : { level: total >= 11 ? CRITICAL : HIGH, title: `Disfunción orgánica (aumento de ${delta} puntos)`, advice: 'Con infección sospechada define sepsis: paquete de sepsis y manejo en unidad de paciente crítico.' }
    },
  },
  {
    id: 'news2', name: 'NEWS2', topic: 'Alerta precoz de deterioro', max: 20, ...EARLY,
    items: [
      number('fr', 'Frecuencia respiratoria', 0, 80, (x) => (x <= 8 ? 3 : x <= 11 ? 1 : x <= 20 ? 0 : x <= 24 ? 2 : 3)),
      scale('escala', 'Escala de saturación', ['Escala 1 (habitual)', 'Escala 2 (insuficiencia respiratoria hipercápnica, meta 88-92%)'], [0, 0]),
      scale('o2', 'Oxígeno', ['Aire ambiente', 'Oxígeno suplementario'], [0, 2]),
      number('sat', 'SatO₂ (%)', 40, 100, (x, v) => {
        if (v.escala === 0) return x <= 91 ? 3 : x <= 93 ? 2 : x <= 95 ? 1 : 0
        if (x <= 83) return 3
        if (x <= 85) return 2
        if (x <= 87) return 1
        if (x <= 92 || v.o2 === 0) return 0
        return x <= 94 ? 1 : x <= 96 ? 2 : 3
      }),
      number('pas', 'Presión arterial sistólica (mmHg)', 30, 300, (x) => (x <= 90 ? 3 : x <= 100 ? 2 : x <= 110 ? 1 : x <= 219 ? 0 : 3)),
      number('fc', 'Frecuencia cardíaca', 20, 300, (x) => (x <= 40 ? 3 : x <= 50 ? 1 : x <= 90 ? 0 : x <= 110 ? 1 : x <= 130 ? 2 : 3)),
      scale('conciencia', 'Conciencia', ['Alerta', 'Confusión nueva, responde a voz o dolor, o no responde'], [0, 3]),
      number('temp', 'Temperatura (°C)', 25, 45, (x) => (x <= 35 ? 3 : x <= 36 ? 1 : x <= 38 ? 0 : x <= 39 ? 1 : 2)),
    ],
    result: (total, v, p) => {
      if (total >= 7) return { level: CRITICAL, title: 'Riesgo alto', advice: 'Evaluación médica urgente; considerar UCI y monitorización continua.' }
      if (total >= 5) return { level: HIGH, title: 'Riesgo medio', advice: 'Evaluación urgente por médico y control al menos cada hora.' }
      const single = ['fr', 'sat', 'pas', 'fc', 'conciencia', 'temp'].some((k) => p[k] === 3)
      return single
        ? { level: MODERATE, title: 'Riesgo bajo-medio: un parámetro con 3 puntos', advice: 'Evaluación médica urgente del parámetro alterado y control horario.' }
        : { level: LOW, title: 'Riesgo bajo', advice: 'Control periódico de signos vitales.' }
    },
  },
  {
    id: 'mews', name: 'MEWS', topic: 'Alerta precoz modificada', max: 14, ...EARLY,
    items: [
      number('pas', 'Presión arterial sistólica (mmHg)', 30, 300, (x) => (x <= 70 ? 3 : x <= 80 ? 2 : x <= 100 ? 1 : x <= 199 ? 0 : 2)),
      number('fc', 'Frecuencia cardíaca', 20, 300, (x) => (x <= 40 ? 2 : x <= 50 ? 1 : x <= 100 ? 0 : x <= 110 ? 1 : x <= 129 ? 2 : 3)),
      number('fr', 'Frecuencia respiratoria', 0, 80, (x) => (x < 9 ? 2 : x <= 14 ? 0 : x <= 20 ? 1 : x <= 29 ? 2 : 3)),
      number('temp', 'Temperatura (°C)', 25, 45, (x) => (x < 35 ? 2 : x < 38.5 ? 0 : 2)),
      scale('avpu', 'Conciencia (AVPU)', ['Alerta', 'Responde a la voz', 'Responde al dolor', 'No responde']),
    ],
    result: bands(
      [2, LOW, 'Riesgo bajo', 'Control habitual de signos vitales.'],
      [4, MODERATE, 'Vigilancia', 'Aumentar la frecuencia de monitorización y reevaluar.'],
      [14, CRITICAL, 'Alto riesgo de deterioro', 'Activar equipo de respuesta rápida y considerar UCI.'],
    ),
  },
  {
    id: 'manchester', name: 'Triage de Manchester', topic: 'Prioridad de atención', chapters: ['c21-s1'], drugs: [],
    note: 'El nivel se asigna con el diagrama de motivo de consulta y sus discriminantes; aquí se muestra el tiempo máximo y la conducta.',
    items: [
      scale('color', 'Nivel asignado por el discriminante', ['Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul']),
    ],
    result: (total) => {
      const [display, level, title, advice] = [
        ['Rojo', CRITICAL, 'Atención inmediata', 'Pasar a box de reanimación.'],
        ['Naranja', HIGH, 'Muy urgente: hasta 10 minutos', 'Box de atención y monitorización.'],
        ['Amarillo', MODERATE, 'Urgente: hasta 60 minutos', 'Espera vigilada y reevaluación.'],
        ['Verde', LOW, 'Poco urgente: hasta 120 minutos', 'Sala de espera con reevaluación si cambia.'],
        ['Azul', LOW, 'No urgente: hasta 240 minutos', 'Atención diferida u orientación a atención primaria.'],
      ][total]
      return { display, level, title, advice }
    },
  },
]

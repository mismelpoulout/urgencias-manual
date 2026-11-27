import { CRITICAL, HIGH, LOW, MODERATE, bands, number, scale, yes } from '../../lib/scores.js'

const present = (key, label) => scale(key, label, ['Ausente', 'Presente'])
const TRAUMA = { chapters: ['c11-s1'], drugs: ['acido-tranexamico', 'fentanilo', 'ketamina'] }
const SPINE = { chapters: ['c11-s6'], drugs: ['fentanilo', 'paracetamol'] }
const ais = (key, region) =>
  scale(key, region, ['Sin lesión', '1 · Menor', '2 · Moderada', '3 · Grave', '4 · Severa', '5 · Crítica', '6 · Incompatible con la vida'])
const imaging = (needed, reason) =>
  needed
    ? { display: 'Requiere imagen', badge: 'Imagen indicada', level: HIGH, title: reason, advice: 'Mantener la restricción de movimiento cervical y solicitar TAC de columna cervical.' }
    : { display: 'No requiere imagen', badge: 'Imagen no indicada', level: LOW, title: reason, advice: 'Se puede omitir la imagen; indicar signos de alarma.' }

export default [
  {
    id: 'rts', name: 'Revised Trauma Score', topic: 'Triage de trauma', max: 7.8408, ...TRAUMA,
    items: [
      number('gcs', 'Escala de Glasgow', 3, 15, (x) => (x >= 13 ? 4 : x >= 9 ? 3 : x >= 6 ? 2 : x >= 4 ? 1 : 0)),
      number('pas', 'Presión arterial sistólica (mmHg)', 0, 300, (x) => (x > 89 ? 4 : x >= 76 ? 3 : x >= 50 ? 2 : x >= 1 ? 1 : 0)),
      number('fr', 'Frecuencia respiratoria (rpm)', 0, 80, (x) => (x >= 10 && x <= 29 ? 4 : x > 29 ? 3 : x >= 6 ? 2 : x >= 1 ? 1 : 0)),
    ],
    compute: (p) => 0.9368 * p.gcs + 0.7326 * p.pas + 0.2908 * p.fr,
    result: (total, v, p) => {
      const triage = p.gcs + p.pas + p.fr
      return triage <= 11
        ? { level: triage <= 8 ? CRITICAL : HIGH, title: `Triage RTS ${triage} de 12: priorizar`, advice: 'Traslado prioritario a centro de trauma y reanimación según ABCDE.' }
        : { level: LOW, title: 'Triage RTS 12 de 12', advice: 'Parámetros fisiológicos conservados; considerar mecanismo y lesiones anatómicas.' }
    },
  },
  {
    id: 'iss', name: 'Injury Severity Score', topic: 'Gravedad anatómica del trauma', max: 75, ...TRAUMA,
    note: 'Ingrese la lesión de mayor gravedad (AIS) de cada región.',
    items: [
      ais('cabeza', 'Cabeza y cuello'), ais('cara', 'Cara'), ais('torax', 'Tórax'),
      ais('abdomen', 'Abdomen y pelvis visceral'), ais('extremidades', 'Extremidades y cintura pélvica'), ais('externa', 'Externa (piel)'),
    ],
    compute: (p) => {
      const values = Object.values(p).sort((a, b) => b - a)
      return values[0] === 6 ? 75 : values.slice(0, 3).reduce((total, x) => total + x * x, 0)
    },
    result: bands(
      [15, LOW, 'Trauma menor', 'Manejo según lesiones; reevaluar.'],
      [25, HIGH, 'Trauma mayor', 'Activar el equipo de trauma y trasladar a centro de trauma.'],
      [75, CRITICAL, 'Trauma grave', 'Equipo de trauma completo y centro de trauma de mayor complejidad.'],
    ),
  },
  {
    id: 'aast', name: 'AAST (órgano sólido)', topic: 'Bazo, hígado y riñón', ...TRAUMA,
    note: 'El grado se asigna con los criterios anatómicos AAST de cada órgano (imagen o cirugía).',
    items: [
      scale('organo', 'Órgano', ['Bazo', 'Hígado', 'Riñón']),
      scale('grado', 'Grado de la lesión', ['I', 'II', 'III', 'IV', 'V'], [1, 2, 3, 4, 5]),
      yes('inestable', 'Inestabilidad hemodinámica', 0),
    ],
    compute: (p) => p.grado,
    result: (total, v) => {
      const display = `${['Bazo', 'Hígado', 'Riñón'][v.organo]} grado ${['I', 'II', 'III', 'IV', 'V'][total - 1]}`
      if (v.inestable) return { display, level: CRITICAL, title: 'Lesión con inestabilidad', advice: 'Reanimación y cirugía urgente (o control del sangrado según disponibilidad).' }
      return total <= 2
        ? { display, level: MODERATE, title: 'Bajo grado y estable', advice: 'Manejo habitualmente conservador con observación.' }
        : { display, level: HIGH, title: total === 3 ? 'Grado intermedio y estable' : 'Alto grado y estable', advice: 'Manejo no operatorio con observación estrecha; mayor probabilidad de requerir intervención.' }
    },
  },
  {
    id: 'cspine', name: 'Regla canadiense de columna cervical', topic: 'Imagen cervical', ...SPINE,
    note: 'Aplicable solo a pacientes con trauma, alertas (Glasgow 15) y estables.',
    items: [
      scale('aplica', '¿Paciente alerta (Glasgow 15) y estable?', ['Sí', 'No']),
      yes('edad', 'Alto riesgo: edad ≥65 años'),
      yes('mecanismo', 'Alto riesgo: mecanismo peligroso'),
      yes('parestesia', 'Alto riesgo: parestesias en extremidades'),
      yes('bajo', 'Algún factor de bajo riesgo: colisión trasera simple, sentado en urgencias, deambuló en algún momento, dolor de inicio tardío o sin dolor en la línea media'),
      yes('rota', 'Puede rotar activamente el cuello 45° a ambos lados (evaluar solo si no hay alto riesgo y hay bajo riesgo)'),
    ],
    compute: (p, v) => (v.aplica === 1 || v.edad || v.mecanismo || v.parestesia || !v.bajo || !v.rota ? 1 : 0),
    result: (total, v) => {
      if (v.aplica === 1) return imaging(true, 'La regla no es aplicable')
      if (v.edad || v.mecanismo || v.parestesia) return imaging(true, 'Hay un factor de alto riesgo')
      if (!v.bajo) return imaging(true, 'Sin factor de bajo riesgo que permita evaluar la rotación')
      return v.rota ? imaging(false, 'Bajo riesgo y rotación conservada') : imaging(true, 'No puede rotar el cuello')
    },
  },
  {
    id: 'nexus', name: 'Criterios NEXUS', topic: 'Imagen cervical', max: 5, ...SPINE,
    note: 'Responda cada criterio: solo se puede omitir la imagen si los cinco están ausentes.',
    items: [
      present('dolor', 'Dolor a la palpación de la línea media cervical'),
      present('deficit', 'Déficit neurológico focal'),
      present('alerta', 'Alteración del nivel de alerta'),
      present('intox', 'Intoxicación'),
      present('distractora', 'Lesión dolorosa distractora'),
    ],
    result: (total) => imaging(total > 0, total > 0 ? `${total} criterio(s) presente(s)` : 'Ningún criterio presente'),
  },
]

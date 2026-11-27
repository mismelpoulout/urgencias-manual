// Anafilaxia en adultos (capítulo 11).
export default {
  id: 'anafilaxia',
  start: 'criterios',
  nodes: {
    criterios: {
      title: '¿Cumple criterios clínicos de anafilaxia?',
      detail: 'Inicio agudo con compromiso de piel o mucosas más compromiso respiratorio o cardiovascular, o hipotensión tras exposición a un alérgeno conocido. No es necesario que haya compromiso cutáneo si hay hipotensión tras el alérgeno.',
      links: ['c11-s5'],
      options: [['Sí, o la sospecha es alta', 'adrenalina'], ['No por ahora', 'observar']],
    },
    observar: {
      title: 'No cumple criterios por ahora',
      level: 1,
      actions: [
        'Vigilar signos vitales y vía aérea con adrenalina preparada',
        'Tratar los síntomas cutáneos',
        'Si aparece compromiso respiratorio o cardiovascular, administrar adrenalina IM sin demora',
      ],
      links: ['c11-s5'],
      drugs: ['clorfenamina'],
    },
    adrenalina: {
      title: 'Adrenalina IM ahora. ¿Hay compromiso progresivo de la vía aérea?',
      level: 3,
      actions: [
        'Adrenalina 0,5 mg IM (0,5 mL de la solución 1:1.000) en la cara anterolateral del muslo',
        'Retirar el desencadenante y pedir ayuda',
        'Acostar con las piernas elevadas, oxígeno de alto flujo y monitor',
        'Hipotensión: cristaloides 500-1.000 mL en bolo',
      ],
      links: ['c11-s5'],
      drugs: ['adrenalina', 'ringer'],
      options: [['Sí: estridor o edema que progresa', 'viaAerea'], ['No', 'respuesta']],
    },
    viaAerea: {
      title: 'Asegurar la vía aérea precozmente',
      level: 3,
      actions: ['Llamar al operador más experto y preparar vía aérea difícil y cricotirotomía', 'Continuar la adrenalina y los fluidos'],
      links: ['c2-s8', 'c3-s8'],
      options: [['Continuar: reevaluar respuesta', 'respuesta']],
    },
    respuesta: {
      title: 'A los 5-15 minutos: ¿mejoró?',
      options: [['Sí, mejoró', 'mejoria'], ['No o empeoró', 'segundaDosis']],
    },
    segundaDosis: {
      title: 'Repetir adrenalina IM. ¿Mejoró?',
      level: 3,
      actions: ['Adrenalina 0,5 mg IM', 'Repetir bolos de cristaloides si persiste la hipotensión', 'Broncoespasmo persistente: salbutamol nebulizado además de la adrenalina'],
      drugs: ['adrenalina', 'salbutamol'],
      options: [['Sí, mejoró', 'mejoria'], ['No: anafilaxia refractaria', 'refractaria']],
    },
    refractaria: {
      title: 'Anafilaxia refractaria',
      level: 3,
      actions: [
        'Infusión de adrenalina con monitorización continua (ver calculadora de infusiones)',
        'Más fluidos y unidad de paciente crítico',
        'Si usa betabloqueadores: glucagón',
      ],
      links: ['c23-s3', 'c11-s5'],
      drugs: ['adrenalina', 'glucagon'],
      options: [['Se estabiliza', 'mejoria']],
    },
    mejoria: {
      title: 'Respuesta favorable: observar',
      level: 1,
      actions: [
        'Observación mínima de 4-6 horas por riesgo de reacción bifásica (más si fue grave o requirió varias dosis)',
        'Adyuvantes, nunca en reemplazo de la adrenalina: clorfenamina 10 mg IV e hidrocortisona 200 mg IV',
        'Al alta: evitar el desencadenante, plan de acción, autoinyector si está disponible y derivación a alergología',
      ],
      links: ['c11-s5'],
      drugs: ['clorfenamina', 'hidrocortisona'],
    },
  },
}

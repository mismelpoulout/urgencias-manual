// En qué patologías aparece cada patrón y cómo puede presentarse el paciente.
// links: secciones del manual donde se desarrolla.
export const ECG_CLINICAL = {
  sinus: {
    conditions: ['Corazón con conducción normal', 'No descarta enfermedad: SCA, TEP o hiperkalemia pueden cursar con trazado casi normal'],
    symptoms: ['Los del cuadro que motiva la consulta'],
    signs: ['Pulso regular entre 60 y 100 lpm'],
    links: ['c21-s2'],
  },
  stemi: {
    conditions: ['Infarto agudo al miocardio con supradesnivel del ST', 'Imitadores: pericarditis, repolarización precoz, bloqueo de rama izquierda, aneurisma ventricular, espasmo coronario'],
    symptoms: ['Dolor torácico opresivo de más de 20 minutos, irradiado a brazo, cuello o mandíbula', 'Disnea, náuseas, sensación de muerte', 'Atípicos en mayores, mujeres y diabéticos'],
    signs: ['Diaforesis, palidez', 'Hipotensión o crépitos si hay falla de bomba', 'Troponina elevada'],
    links: ['c19-s1', 'c1-s1', 'c5-s1'],
  },
  fa: {
    conditions: ['Hipertensión, insuficiencia cardíaca, valvulopatía mitral', 'Sepsis, hipertiroidismo, alcohol, TEP, poscirugía', 'Alteraciones electrolíticas, edad avanzada'],
    symptoms: ['Palpitaciones irregulares', 'Disnea, fatiga, mareo', 'Déficit neurológico súbito si hay embolia'],
    signs: ['Pulso irregularmente irregular', 'Déficit de pulso', 'Signos de congestión o hipotensión si es mal tolerada'],
    links: ['c19-s3', 'c1-s3'],
  },
  flutter: {
    conditions: ['Cardiopatía estructural, EPOC, TEP', 'Poscirugía cardíaca, hipertiroidismo', 'Suele alternar con fibrilación auricular'],
    symptoms: ['Palpitaciones rápidas', 'Disnea, intolerancia al esfuerzo, mareo'],
    signs: ['Pulso regular cercano a 150 lpm que no varía', 'Las maniobras vagales o la adenosina desenmascaran las ondas F'],
    links: ['c19-s4'],
  },
  tsv: {
    conditions: ['Reentrada nodal o por vía accesoria (preexcitación)', 'Frecuente en jóvenes sin cardiopatía', 'Desencadenantes: cafeína, estimulantes, estrés, alcohol'],
    symptoms: ['Palpitaciones de inicio y término súbitos', 'Mareo, angustia, disnea, opresión torácica'],
    signs: ['Pulso regular muy rápido', 'Habitualmente estable; hipotensión si es mal tolerada'],
    links: ['c19-s5'],
  },
  tv: {
    conditions: ['Cardiopatía isquémica e infarto previo', 'Miocardiopatías, canalopatías', 'Hipokalemia, hipomagnesemia, fármacos que prolongan el QT, intoxicaciones'],
    symptoms: ['Palpitaciones, dolor torácico, disnea', 'Presíncope o síncope'],
    signs: ['Hipotensión, shock o edema pulmonar', 'Puede no tener pulso: es un paro cardíaco', 'Ondas "a cañón" yugulares'],
    links: ['c19-s6', 'c1-s4'],
  },
  fv: {
    conditions: ['Infarto agudo (causa principal)', 'Hiper o hipokalemia, hipoxia, hipotermia', 'Electrocución, canalopatías, tóxicos'],
    symptoms: ['Pérdida brusca de conciencia, a veces precedida de dolor torácico o palpitaciones'],
    signs: ['Sin respuesta, sin pulso', 'Apnea o respiración agónica'],
    links: ['c19-s7', 'c1-s4'],
  },
  bav1: {
    conditions: ['Tono vagal aumentado, deportistas', 'Betabloqueadores, calcioantagonistas, digoxina', 'Infarto inferior, miocarditis, degeneración del sistema de conducción'],
    symptoms: ['Habitualmente asintomático'],
    signs: ['Pulso regular', 'Hallazgo en el ECG'],
    links: ['c19-s8'],
  },
  mobitz1: {
    conditions: ['Infarto inferior', 'Fármacos bradicardizantes, tono vagal (sueño, deportistas)', 'Miocarditis, hiperkalemia'],
    symptoms: ['Muchas veces asintomático', 'Mareo o fatiga'],
    signs: ['Pulso irregular con pausas agrupadas', 'Bradicardia leve'],
    links: ['c19-s8', 'c1-s5'],
  },
  mobitz2: {
    conditions: ['Enfermedad del sistema His-Purkinje', 'Infarto anterior', 'Fibrosis degenerativa, poscirugía cardíaca'],
    symptoms: ['Mareo, presíncope, síncope', 'Fatiga'],
    signs: ['Bradicardia con pausas súbitas', 'Riesgo de progresar a bloqueo completo'],
    links: ['c19-s8', 'c1-s5'],
  },
  bav3: {
    conditions: ['Infarto (inferior o anterior)', 'Degeneración del sistema de conducción', 'Intoxicación por betabloqueadores, calcioantagonistas o digoxina; hiperkalemia; enfermedad de Lyme o Chagas'],
    symptoms: ['Síncope (Stokes-Adams), mareo', 'Disnea, fatiga, confusión en mayores'],
    signs: ['Bradicardia marcada y regular', 'Hipotensión, signos de bajo débito', 'Ondas "a cañón" yugulares'],
    links: ['c19-s8', 'c1-s5'],
  },
  pericard: {
    conditions: ['Pericarditis viral o idiopática', 'Posinfarto, uremia, enfermedades autoinmunes, neoplasias, tuberculosis'],
    symptoms: ['Dolor pleurítico que mejora al inclinarse hacia adelante y empeora al acostarse', 'Cuadro viral previo, fiebre'],
    signs: ['Frote pericárdico', 'Buscar derrame y signos de taponamiento'],
    links: ['c19-s11', 'c5-s5'],
  },
  hiperk: {
    conditions: ['Enfermedad renal aguda o crónica', 'IECA/ARA II, espironolactona, AINE, cotrimoxazol', 'Rabdomiólisis, lisis tumoral, cetoacidosis, insuficiencia suprarrenal'],
    symptoms: ['Con frecuencia asintomático', 'Debilidad, parestesias, parálisis'],
    signs: ['Bradicardia o arritmias', 'Puede debutar con paro cardíaco'],
    links: ['c13-s1', 'c19-s9'],
  },
  hipok: {
    conditions: ['Vómitos, diarrea, sonda nasogástrica', 'Diuréticos, salbutamol, insulina', 'Hipomagnesemia, hiperaldosteronismo, parálisis periódica'],
    symptoms: ['Debilidad, calambres, constipación, palpitaciones'],
    signs: ['Hiporreflexia, parálisis flácida, íleo', 'Extrasístoles o torsión de puntas'],
    links: ['c13-s2'],
  },
  hipoca: {
    conditions: ['Hipoparatiroidismo poscirugía', 'Déficit de vitamina D, hipomagnesemia, pancreatitis', 'Transfusión masiva, enfermedad renal, lisis tumoral'],
    symptoms: ['Parestesias peribucales y distales, calambres'],
    signs: ['Tetania, signos de Chvostek y Trousseau', 'Laringoespasmo, convulsiones'],
    links: ['c13-s5'],
  },
  hiperca: {
    conditions: ['Hiperparatiroidismo primario', 'Neoplasias (mieloma, mama, pulmón, riñón)', 'Intoxicación por vitamina D, tiazidas, granulomatosis'],
    symptoms: ['Poliuria, sed, constipación, dolor óseo o abdominal', 'Confusión, letargia'],
    signs: ['Deshidratación', 'Compromiso de conciencia, bradiarritmias'],
    links: ['c13-s4'],
  },
}

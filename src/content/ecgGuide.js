// Guía de cada trazado animado: nombre, qué mirar y qué escuchar.
export const ECG_GUIDE = {
  sinus: {
    name: 'Ritmo sinusal normal',
    look: 'Una onda P antes de cada QRS, PR constante y QRS estrecho.',
    listen: 'Bips equidistantes. Es la referencia para comparar los demás.',
  },
  stemi: {
    name: 'Supradesnivel del ST',
    look: 'El segmento ST queda por encima de la línea de base, justo después del QRS.',
    listen: 'Suena como un ritmo sinusal: este cambio solo se ve, no se oye.',
  },
  fa: {
    name: 'Fibrilación auricular',
    look: 'Sin ondas P, línea de base ondulante y cada intervalo R-R distinto.',
    listen: 'Irregularmente irregular: no se puede anticipar el siguiente bip.',
  },
  flutter: {
    name: 'Flutter auricular 2:1',
    look: 'Ondas F en serrucho a 300/min; conduce una de cada dos.',
    listen: 'Rápido y muy regular. Ante una taquicardia fija cercana a 150 lpm, buscar flutter.',
  },
  tsv: {
    name: 'Taquicardia supraventricular',
    look: 'QRS estrecho, regular y sin ondas P visibles.',
    listen: 'Muy rápido y regular. Suena igual que la taquicardia ventricular de esta misma frecuencia.',
  },
  tv: {
    name: 'Taquicardia ventricular',
    look: 'QRS ancho y regular, con la onda T en sentido opuesto. Comprobar el pulso.',
    listen: 'Suena igual que la TSV de esta misma frecuencia: se distinguen por el ancho del QRS.',
  },
  fv: {
    name: 'Fibrilación ventricular',
    look: 'Oscilaciones caóticas sin QRS identificables. Paro cardíaco: desfibrilar.',
    listen: 'No hay latidos que marcar: solo suena la alarma.',
  },
  bav1: {
    name: 'Bloqueo AV de 1.er grado',
    look: 'PR mayor de 200 ms (más de un cuadro grande) y constante.',
    listen: 'Regular. Active el sonido de la onda P para oír la demora entre P y QRS.',
  },
  mobitz1: {
    name: 'Bloqueo AV Mobitz I (Wenckebach)',
    look: 'El PR se alarga latido a latido hasta que una P no conduce.',
    listen: 'Grupos de tres bips separados por una pausa.',
  },
  mobitz2: {
    name: 'Bloqueo AV Mobitz II',
    look: 'PR constante y, de pronto, una P sin QRS.',
    listen: 'En este ejemplo (conducción 3:2), pares de bips separados por una pausa.',
  },
  bav3: {
    name: 'Bloqueo AV completo',
    look: 'Las P y los QRS marchan cada uno a su ritmo; escape ancho y lento.',
    listen: 'Lento y regular. Con el sonido de la onda P se oyen dos ritmos independientes.',
  },
  pericard: {
    name: 'Pericarditis aguda',
    look: 'ST elevado de forma cóncava y segmento PR descendido.',
    listen: 'Suena como un ritmo sinusal: este cambio solo se ve.',
  },
  hiperk: {
    name: 'Hiperkalemia',
    look: 'T altas y picudas, P pequeña y QRS que se ensancha.',
    listen: 'Suena como un ritmo sinusal: el oído no la detecta.',
  },
  hipok: {
    name: 'Hipokalemia',
    look: 'ST descendido, T aplanada y onda U después de la T.',
    listen: 'Suena como un ritmo sinusal: este cambio solo se ve.',
  },
  hipoca: {
    name: 'Hipocalcemia',
    look: 'QT prolongado a expensas de un ST largo.',
    listen: 'Ritmo regular sin rasgo sonoro propio: mirar la distancia entre QRS y T.',
  },
  hiperca: {
    name: 'Hipercalcemia',
    look: 'QT corto: la onda T aparece casi pegada al QRS.',
    listen: 'Suena como un ritmo sinusal: este cambio solo se ve.',
  },
}

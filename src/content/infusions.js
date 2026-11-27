// Infusiones frecuentes. range: dosis habitual según el manual.
// La preparación (amount en mg o U, volume en mL) solo se precarga cuando el capítulo 12 la indica;
// en el resto se debe ingresar la del protocolo local.
export const INFUSIONS = [
  { id: 'noradrenalina', name: 'Noradrenalina · 4 mg/250 mL', drug: 'noradrenalina', unit: 'mcg/kg/min', range: [0.05, 0.5], amount: 4, volume: 250 },
  { id: 'noradrenalina-doble', name: 'Noradrenalina · 8 mg/250 mL', drug: 'noradrenalina', unit: 'mcg/kg/min', range: [0.05, 0.5], amount: 8, volume: 250 },
  { id: 'adrenalina', name: 'Adrenalina', drug: 'adrenalina', unit: 'mcg/kg/min', range: [0.05, 0.5], amount: 4, volume: 250 },
  { id: 'vasopresina', name: 'Vasopresina', drug: 'vasopresina', unit: 'U/min', range: [0.03, 0.03], amount: 20, volume: 100 },
  { id: 'dobutamina', name: 'Dobutamina', drug: 'dobutamina', unit: 'mcg/kg/min', range: [2.5, 20], amount: 250, volume: 250 },
  { id: 'dopamina', name: 'Dopamina', drug: 'dopamina', unit: 'mcg/kg/min', range: [5, 20] },
  { id: 'milrinona', name: 'Milrinona', drug: 'milrinona', unit: 'mcg/kg/min', range: [0.125, 0.75] },
  { id: 'isoprenalina', name: 'Isoprenalina', drug: 'isoprenalina', unit: 'mcg/min', range: [2, 10] },
  { id: 'nitroglicerina', name: 'Nitroglicerina', drug: 'nitroglicerina', unit: 'mcg/min', range: [5, 200] },
  { id: 'nitroprusiato', name: 'Nitroprusiato', drug: 'nitroprusiato', unit: 'mcg/kg/min', range: [0.25, 10] },
  { id: 'esmolol', name: 'Esmolol', drug: 'esmolol', unit: 'mcg/kg/min', range: [50, 200] },
  { id: 'labetalol', name: 'Labetalol', drug: 'labetalol', unit: 'mg/min', range: [0.5, 2] },
  { id: 'nicardipino', name: 'Nicardipino', drug: 'nicardipino', unit: 'mg/h', range: [5, 15] },
  { id: 'amiodarona', name: 'Amiodarona (mantención)', drug: 'amiodarona', unit: 'mg/min', range: [0.5, 1] },
  { id: 'propofol', name: 'Propofol', drug: 'propofol', unit: 'mcg/kg/min', range: [5, 50] },
  { id: 'midazolam', name: 'Midazolam', drug: 'midazolam', unit: 'mg/kg/h', range: [0.02, 0.1] },
  { id: 'fentanilo', name: 'Fentanilo', drug: 'fentanilo', unit: 'mcg/kg/h', range: [0.5, 2] },
  { id: 'remifentanilo', name: 'Remifentanilo', drug: 'remifentanilo', unit: 'mcg/kg/min', range: [0.025, 0.1] },
  { id: 'dexmedetomidina', name: 'Dexmedetomidina', drug: 'dexmedetomidina', unit: 'mcg/kg/h', range: [0.2, 0.7] },
  { id: 'heparina', name: 'Heparina no fraccionada', drug: 'heparina', unit: 'U/kg/h', range: [12, 18] },
  { id: 'insulina', name: 'Insulina cristalina', drug: 'insulina', unit: 'U/kg/h', range: [0.05, 0.1] },
]

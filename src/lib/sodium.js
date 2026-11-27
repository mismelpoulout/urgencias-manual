// Fórmula de Adrogué-Madias: cambio del Na sérico (mEq/L) con 1 L de solución.
export const sodiumChange = (concentration, sodium, tbw) => (concentration - sodium) / (tbw + 1)

// Máximo ascenso en 24 h: 8 mEq/L si Na ≤120 o hay otro factor de alto riesgo.
export const correctionLimit = (sodium, highRisk) => (sodium <= 120 || highRisk ? 8 : 10)

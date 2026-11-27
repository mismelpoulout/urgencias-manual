import SodiumCalculator from '../../components/calculators/SodiumCalculator.jsx'
import Callout from '../../components/content/Callout.jsx'
import EcgTrace from '../../components/content/EcgTrace.jsx'
import Section from '../../components/content/Section.jsx'
import Table from '../../components/content/Table.jsx'

// Capítulo 13 · Manejo de electrolitos en urgencia
export default function Capitulo13() {
  return (
    <>
      <p>Diagnóstico y tratamiento de los trastornos del potasio, el calcio y el sodio que con mayor frecuencia ponen en riesgo la vida en el servicio de urgencia. Todas las dosis son para adultos.</p>
      <Callout type="alerta">
        <p><strong>Antes de tratar, confirmar:</strong> descartar pseudohiperkalemia (hemólisis, torniquete prolongado, leucocitosis o trombocitosis extremas), corregir el calcio por albúmina y medir la osmolalidad plasmática en toda hiponatremia. Un ECG de 12 derivaciones es obligatorio en todo trastorno del potasio o el calcio.</p>
      </Callout>
      <Section id="c13-s1" title="1. Hiperkalemia (K⁺ >5,0 mEq/L)">
        <Table>
          <thead>
            <tr>
              <th>Gravedad</th>
              <th>K⁺ (mEq/L)</th>
              <th>Conducta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Leve</td>
              <td>5,5-5,9</td>
              <td>Suspender fármacos causantes, dieta, tratar causa, control</td>
            </tr>
            <tr>
              <td>Moderada</td>
              <td>6,0-6,4</td>
              <td>Redistribución + eliminación, monitor ECG</td>
            </tr>
            <tr>
              <td>Grave</td>
              <td>≥6,5 <strong>o cualquier valor con cambios en el ECG</strong></td>
              <td>Emergencia: calcio IV inmediato + redistribución + eliminación; evaluar diálisis</td>
            </tr>
          </tbody>
        </Table>
        <p><strong>Causas frecuentes:</strong> enfermedad renal aguda o crónica, fármacos (IECA/ARA II, espironolactona, AINE, trimetoprim, heparina, betabloqueadores, succinilcolina, digoxina), acidosis metabólica, cetoacidosis diabética, rabdomiólisis, lisis tumoral, hemólisis, hipoaldosteronismo.</p>
        <p><strong>ECG (progresión aproximada):</strong> T picudas, simétricas y de base estrecha → aplanamiento o pérdida de la P y PR largo → QRS ancho → patrón sinusoidal → FV o asistolia. Un ECG normal <strong>no</strong> descarta hiperkalemia grave.</p>
        <EcgTrace type="hiperk" caption="Hiperkalemia: ondas T altas y picudas, P aplanada, QRS que comienza a ensancharse (trazado ilustrativo, DII)" />
        <h3>Tratamiento escalonado</h3>
        <Table>
          <thead>
            <tr>
              <th>Paso</th>
              <th>Objetivo</th>
              <th>Fármaco y dosis</th>
              <th>Inicio / duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1</strong></td>
              <td>Estabilizar el miocardio</td>
              <td><strong>Gluconato de calcio 10%</strong> 10 mL (1 g) IV en 2-5 min; repetir cada 5 min si persisten los cambios ECG (hasta 30 mL). Alternativa: cloruro de calcio 10% 10 mL por vía central</td>
              <td>1-3 min / 30-60 min</td>
            </tr>
            <tr>
              <td><strong>2</strong></td>
              <td>Desplazar K⁺ al intracelular</td>
              <td><strong>Insulina cristalina 10 U IV + glucosa 25 g</strong> (50 mL de SG 50% o 250 mL de SG 10%). Si glicemia previa &lt;126 mg/dL: agregar SG 10% 50 mL/h por 5 h. Control de glicemia horario por 6 h</td>
              <td>15-30 min / 4-6 h · baja 0,6-1,0 mEq/L</td>
            </tr>
            <tr>
              <td><strong>2</strong></td>
              <td>Desplazar K⁺ al intracelular</td>
              <td><strong>Salbutamol nebulizado 10-20 mg</strong> (coadyuvante, nunca solo)</td>
              <td>30 min / 2-4 h · baja 0,5-1,0 mEq/L</td>
            </tr>
            <tr>
              <td><strong>2</strong></td>
              <td>Corregir acidosis</td>
              <td><strong>Bicarbonato de sodio 8,4%</strong> 50-100 mEq IV solo si hay acidosis metabólica (pH &lt;7,2, HCO₃⁻ bajo)</td>
              <td>Variable</td>
            </tr>
            <tr>
              <td><strong>3</strong></td>
              <td>Eliminar K⁺</td>
              <td><strong>Furosemida</strong> 40-80 mg IV si hay volemia adecuada y función renal residual</td>
              <td>30-60 min</td>
            </tr>
            <tr>
              <td><strong>3</strong></td>
              <td>Eliminar K⁺</td>
              <td><strong>Ciclosilicato de sodio y zirconio</strong> 10 g VO c/8 h por hasta 72 h; o patiromer 8,4 g/día; o poliestireno sulfonato de calcio/sodio 15-30 g VO o rectal (acción lenta)</td>
              <td>1-6 h</td>
            </tr>
            <tr>
              <td><strong>3</strong></td>
              <td>Eliminar K⁺</td>
              <td><strong>Hemodiálisis urgente:</strong> hiperkalemia grave refractaria, ERC terminal, anuria, rabdomiólisis o lisis tumoral</td>
              <td>Inmediato</td>
            </tr>
            <tr>
              <td><strong>4</strong></td>
              <td>Monitorizar</td>
              <td>K⁺ a 1, 2, 4, 6 y 24 h · monitor ECG continuo · glicemia horaria</td>
              <td>—</td>
            </tr>
          </tbody>
        </Table>
        <Callout type="perla">
          <p>el calcio <strong>no baja</strong> el potasio; protege el corazón por 30-60 minutos. Si se usa digoxina, administrar el calcio lento (20-30 min) y considerar anticuerpos antidigoxina si hay intoxicación.</p>
        </Callout>
        <Callout type="perla">
          <p>la hipoglicemia es la complicación más frecuente del tratamiento con insulina (hasta 1 de cada 5 pacientes), sobre todo en ERC y en glicemia inicial normal. Por eso se controla la glicemia cada hora.</p>
        </Callout>
      </Section>
      <Section id="c13-s2" title="2. Hipokalemia (K⁺ <3,5 mEq/L)">
        <Table>
          <thead>
            <tr>
              <th>Gravedad</th>
              <th>K⁺ (mEq/L)</th>
              <th>Manifestaciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Leve</td>
              <td>3,0-3,4</td>
              <td>Habitualmente asintomática</td>
            </tr>
            <tr>
              <td>Moderada</td>
              <td>2,5-2,9</td>
              <td>Debilidad, calambres, constipación, íleo</td>
            </tr>
            <tr>
              <td>Grave</td>
              <td>&lt;2,5 <strong>o síntomas/arritmias</strong></td>
              <td>Parálisis flácida, rabdomiólisis, insuficiencia respiratoria, arritmias ventriculares</td>
            </tr>
          </tbody>
        </Table>
        <p><strong>Causas:</strong> pérdidas digestivas (vómitos, diarrea, SNG), diuréticos tiazídicos o de asa, hiperaldosteronismo, hipomagnesemia, salbutamol o insulina, alcalosis, parálisis periódica hipokalémica, realimentación.</p>
        <p><strong>ECG:</strong> depresión del ST, T aplanada o invertida, <strong>onda U</strong> prominente, QT(U) prolongado, extrasístoles, torsade de pointes.</p>
        <EcgTrace type="hipok" caption="Hipokalemia: T aplanada, onda U prominente y depresión del ST (trazado ilustrativo)" />
        <h3>Tratamiento</h3>
        <Table>
          <thead>
            <tr>
              <th>Situación</th>
              <th>Conducta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Leve-moderada, tolera VO</td>
              <td><strong>Cloruro de potasio oral</strong> 40-100 mEq/día fraccionado (p.&nbsp;ej., 20 mEq c/8 h), con comida</td>
            </tr>
            <tr>
              <td>Grave, sintomática o sin VO</td>
              <td><strong>KCl IV</strong> diluido en suero fisiológico (no glucosado: la glucosa estimula insulina y baja más el K⁺)</td>
            </tr>
            <tr>
              <td>Vía periférica</td>
              <td>Concentración ≤40-60 mEq/L · velocidad ≤10 mEq/h (hasta 20 mEq/h con monitor ECG)</td>
            </tr>
            <tr>
              <td>Vía central (UPC)</td>
              <td>Hasta 20-40 mEq/h solo con monitorización continua y controles seriados</td>
            </tr>
            <tr>
              <td>Magnesio bajo o desconocido</td>
              <td><strong>Sulfato de magnesio</strong> 2 g IV en 15-60 min (en torsade: 2 g en 1-2 min). Sin corregir el magnesio, la hipokalemia es refractaria</td>
            </tr>
          </tbody>
        </Table>
        <ul>
          <li>Ampolla de <strong>KCl 10% de 10 mL = 1 g = 13,4 mEq de K⁺</strong></li>
          <li>Ejemplo periférico: 2 ampollas (≈27 mEq) en 500 mL de SF 0,9% a pasar en 3 h (≈9 mEq/h)</li>
          <li>Regla aproximada: cada 10 mEq aportados elevan el K⁺ sérico ≈0,1 mEq/L (si no hay redistribución)</li>
          <li>Control de K⁺ cada 2-4 h durante la reposición IV</li>
        </ul>
        <Callout type="perla">
          <p>la parálisis periódica hipokalémica (debilidad flácida aguda tras comida rica en carbohidratos o ejercicio, frecuente asociada a tirotoxicosis) se corrige con dosis bajas de K⁺ (≤90 mEq en 24 h) por el riesgo de hiperkalemia de rebote cuando el potasio vuelve a salir de la célula.</p>
        </Callout>
      </Section>
      <Section id="c13-s3" title="3. Calcio: corrección y conceptos">
        <ul>
          <li><strong>Calcio corregido</strong> (mg/dL) = calcio total + 0,8 × (4,0 − albúmina en g/dL)</li>
          <li>Preferir <strong>calcio iónico</strong> (normal ≈1,12-1,32 mmol/L o 4,5-5,3 mg/dL), sobre todo en pacientes críticos, con alteraciones ácido-base o transfundidos</li>
          <li>El calcio afecta el <strong>QT</strong>: corto en hipercalcemia, largo en hipocalcemia</li>
        </ul>
      </Section>
      <Section id="c13-s4" title="4. Hipercalcemia (Ca corregido >10,5 mg/dL)">
        <Table>
          <thead>
            <tr>
              <th>Gravedad</th>
              <th>Ca corregido (mg/dL)</th>
              <th>Conducta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Leve</td>
              <td>10,5-11,9</td>
              <td>Hidratación oral, suspender tiazidas, calcio y vitamina D; estudio ambulatorio</td>
            </tr>
            <tr>
              <td>Moderada</td>
              <td>12-13,9</td>
              <td>Tratamiento IV si hay síntomas o elevación aguda</td>
            </tr>
            <tr>
              <td>Grave / crisis</td>
              <td>≥14 o con síntomas neurológicos</td>
              <td>Hospitalizar, tratamiento IV agresivo</td>
            </tr>
          </tbody>
        </Table>
        <p><strong>Causas:</strong> hiperparatiroidismo primario y neoplasias explican cerca del 90% (mieloma, cáncer de mama, pulmón, riñón; PTHrP o metástasis óseas). Otras: intoxicación por vitamina D, granulomatosis, tiazidas, litio, inmovilización.</p>
        <p><strong>Clínica (huesos, piedras, quejidos abdominales y gemidos psíquicos):</strong> dolor óseo, litiasis renal, poliuria y deshidratación, náuseas, constipación, pancreatitis, úlcera, confusión, letargia y coma. <strong>ECG:</strong> QT corto, en casos graves bradiarritmias y elevación tipo J.</p>
        <EcgTrace type="hiperca" caption="Hipercalcemia: QT acortado (segmento ST casi ausente) (trazado ilustrativo)" />
        <h3>Tratamiento de la hipercalcemia grave</h3>
        <Table>
          <thead>
            <tr>
              <th>Medida</th>
              <th>Dosis</th>
              <th>Inicio</th>
              <th>Notas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Suero fisiológico 0,9%</strong></td>
              <td>200-300 mL/h, ajustar para diuresis 100-150 mL/h</td>
              <td>Horas</td>
              <td>Base del tratamiento: corrige la depleción de volumen. Precaución en IC y ERC</td>
            </tr>
            <tr>
              <td><strong>Calcitonina</strong></td>
              <td>4 UI/kg SC o IM c/12 h (hasta 6-8 UI/kg c/6 h)</td>
              <td>4-6 h</td>
              <td>Efecto rápido pero modesto; taquifilaxia a las 48 h</td>
            </tr>
            <tr>
              <td><strong>Ácido zoledrónico</strong></td>
              <td>4 mg IV en 15 min (ajustar si ERC)</td>
              <td>2-4 días</td>
              <td>Elección en hipercalcemia tumoral; efecto 2-4 semanas</td>
            </tr>
            <tr>
              <td><strong>Pamidronato</strong></td>
              <td>60-90 mg IV en 2-4 h</td>
              <td>2-4 días</td>
              <td>Alternativa al zoledrónico</td>
            </tr>
            <tr>
              <td><strong>Denosumab</strong></td>
              <td>120 mg SC</td>
              <td>2-4 días</td>
              <td>Útil en ERC o hipercalcemia refractaria a bifosfonatos</td>
            </tr>
            <tr>
              <td><strong>Corticoides</strong></td>
              <td>Prednisona 40-60 mg/día o hidrocortisona 100-300 mg/día</td>
              <td>2-5 días</td>
              <td>Linfoma, mieloma, granulomatosis, exceso de vitamina D</td>
            </tr>
            <tr>
              <td><strong>Furosemida</strong></td>
              <td>20-40 mg IV</td>
              <td>—</td>
              <td>Solo después de restaurar la volemia y si hay sobrecarga</td>
            </tr>
            <tr>
              <td><strong>Hemodiálisis</strong></td>
              <td>—</td>
              <td>Inmediato</td>
              <td>Ca &gt;18 mg/dL con síntomas neurológicos, o ERC/IC que impiden hidratar</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section id="c13-s5" title="5. Hipocalcemia (Ca corregido <8,5 mg/dL o iónico <1,1 mmol/L)">
        <p><strong>Causas:</strong> hipoparatiroidismo postquirúrgico (tiroidectomía, paratiroidectomía: “síndrome de hueso hambriento”), déficit de vitamina D, <strong>hipomagnesemia</strong>, ERC, pancreatitis aguda, transfusión masiva (citrato), rabdomiólisis, lisis tumoral, bifosfonatos o denosumab, sepsis.</p>
        <p><strong>Clínica:</strong> parestesias peribucales y distales, calambres, <strong>tetania</strong>, signo de <strong>Chvostek</strong> (contracción facial al percutir el nervio facial) y de <strong>Trousseau</strong> (espasmo carpopedal al inflar el manguito 20 mmHg sobre la sistólica por 3 min), laringoespasmo, broncoespasmo, convulsiones, hipotensión e insuficiencia cardíaca. <strong>ECG:</strong> QT prolongado a expensas del ST.</p>
        <EcgTrace type="hipoca" caption="Hipocalcemia: ST largo y QT prolongado con onda T de morfología normal (trazado ilustrativo)" />
        <h3>Tratamiento</h3>
        <Table>
          <thead>
            <tr>
              <th>Situación</th>
              <th>Conducta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Sintomática o Ca corregido &lt;7,5 mg/dL (iónico &lt;0,8 mmol/L)</strong></td>
              <td><strong>Gluconato de calcio 10%</strong> 10-20 mL (1-2 g) diluidos en 50-100 mL de SG 5% en 10-20 min, con monitor ECG</td>
            </tr>
            <tr>
              <td>Mantención IV</td>
              <td>Infusión de calcio elemental 0,5-1,5 mg/kg/h. Ejemplo: 10 ampollas de gluconato 10% (100 mL ≈ 930 mg de calcio elemental) en 1.000 mL de SG 5% a 50 mL/h (≈46 mg/h), ajustar según calcemia c/4-6 h</td>
            </tr>
            <tr>
              <td>Asintomática, leve</td>
              <td>Carbonato de calcio 1-2 g de calcio elemental/día VO fraccionado + vitamina D</td>
            </tr>
            <tr>
              <td>Hipoparatiroidismo / déficit de activación</td>
              <td><strong>Calcitriol</strong> 0,25-0,5 mcg VO c/12 h</td>
            </tr>
            <tr>
              <td>Hipomagnesemia asociada</td>
              <td>Sulfato de magnesio 2 g IV en 15-30 min y luego reposición; sin magnesio la hipocalcemia no corrige</td>
            </tr>
          </tbody>
        </Table>
        <ul>
          <li>Ampolla de <strong>gluconato de calcio 10% de 10 mL = 1 g = 93 mg (4,65 mEq) de calcio elemental</strong></li>
          <li>Ampolla de <strong>cloruro de calcio 10% de 10 mL = 273 mg de calcio elemental</strong> (3 veces más; irritante, preferir vía central)</li>
          <li>No mezclar calcio con bicarbonato ni fosfato en la misma vía (precipita)</li>
        </ul>
        <Callout type="perla">
          <p>en la acidosis el calcio iónico sube; al corregir rápidamente con bicarbonato puede desencadenarse tetania. En el paciente con hiperfosfatemia grave (lisis tumoral), tratar solo la hipocalcemia sintomática para evitar precipitación de fosfato de calcio.</p>
        </Callout>
      </Section>
      <Section id="c13-s6" title="6. Hiponatremia (Na⁺ <135 mEq/L)">
        <Table>
          <thead>
            <tr>
              <th>Clasificación</th>
              <th>Criterio</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Leve</td>
              <td>130-134 mEq/L</td>
            </tr>
            <tr>
              <td>Moderada</td>
              <td>125-129 mEq/L</td>
            </tr>
            <tr>
              <td>Profunda</td>
              <td>&lt;125 mEq/L</td>
            </tr>
            <tr>
              <td>Aguda / crónica</td>
              <td>&lt;48 h / ≥48 h (si no se sabe, tratar como crónica)</td>
            </tr>
            <tr>
              <td>Síntomas moderadamente graves</td>
              <td>Náuseas sin vómitos, cefalea, confusión</td>
            </tr>
            <tr>
              <td><strong>Síntomas graves</strong></td>
              <td>Vómitos, somnolencia, convulsiones, compromiso cardiorrespiratorio, coma (Glasgow ≤8)</td>
            </tr>
          </tbody>
        </Table>
        <h3>Enfoque diagnóstico en 3 preguntas</h3>
        <ol type="1">
          <li><strong>¿Es hipotónica?</strong> Osmolalidad plasmática &lt;275 mOsm/kg. Descartar pseudohiponatremia (hipertrigliceridemia, paraproteínas) e hiponatremia hipertónica (hiperglicemia: Na corregido = Na + 1,6 × [(glicemia − 100)/100], o 2,4 por encima de 400 mg/dL; manitol)</li>
          <li><strong>Osmolalidad urinaria:</strong> &lt;100 mOsm/kg → polidipsia primaria, potomanía de cerveza, dieta “té y tostadas”. &gt;100 → continuar</li>
          <li>
            <strong>Sodio urinario y volemia:</strong>
            <ul>
              <li>Na urinario &lt;30 mEq/L → baja volemia efectiva: pérdidas digestivas, tercer espacio, insuficiencia cardíaca, cirrosis, síndrome nefrótico</li>
              <li>Na urinario &gt;30 mEq/L → diuréticos (tiazidas), <strong>SIADH</strong> (fármacos, dolor, náuseas, neumonía, tumores, patología del SNC), insuficiencia suprarrenal, hipotiroidismo, nefropatía perdedora de sal</li>
            </ul>
          </li>
        </ol>
        <h3>Tratamiento</h3>
        <Table>
          <thead>
            <tr>
              <th>Escenario</th>
              <th>Conducta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Síntomas graves</strong> (cualquier cronicidad)</td>
              <td><strong>NaCl 3% 150 mL IV en 20 min</strong> → controlar Na a los 20 min → repetir hasta 2 veces más (máximo 3 bolos) hasta que el Na suba <strong>5 mEq/L</strong> o mejoren los síntomas. Luego suspender el 3% y tratar la causa</td>
            </tr>
            <tr>
              <td>Síntomas moderados</td>
              <td>NaCl 3% 150 mL en 20 min una vez; meta de aumento 5 mEq/L en 24 h</td>
            </tr>
            <tr>
              <td>Asintomática, hipovolémica</td>
              <td>Suero fisiológico 0,9% y tratar la causa (cuidado: al corregir la volemia puede haber diuresis acuosa y sobrecorrección)</td>
            </tr>
            <tr>
              <td>Asintomática, SIADH</td>
              <td>Restricción hídrica 500-1.000 mL/día; urea oral 15-30 g/día; tratar la causa</td>
            </tr>
            <tr>
              <td>Hipervolémica (IC, cirrosis)</td>
              <td>Restricción de agua y sodio, diurético de asa, tratar la enfermedad base</td>
            </tr>
          </tbody>
        </Table>
        <h3>Límites de corrección (prevenir la desmielinización osmótica)</h3>
        <ul>
          <li><strong>≤10 mEq/L en las primeras 24 h</strong> y ≤8 mEq/L en cada 24 h siguientes</li>
          <li>En alto riesgo (Na ≤120, alcoholismo, desnutrición, hipokalemia, cirrosis, trasplante hepático): <strong>≤8 mEq/L en 24 h</strong></li>
          <li>Si se sobrepasa el límite: detener el tratamiento activo, SG 5% (≈10 mL/kg en 1 h) y considerar <strong>desmopresina 2 mcg IV</strong> c/6-8 h para volver a bajar el sodio bajo supervisión de especialista</li>
          <li>Controlar Na cada 2-4 h durante la corrección activa y vigilar la diuresis (poliuria = riesgo de sobrecorrección)</li>
        </ul>
        <p><strong>Preparación aproximada de NaCl 3% (≈513 mEq/L):</strong> retirar 120 mL de un matraz de SF 0,9% de 500 mL y reemplazarlos por 6 ampollas de NaCl 10% de 20 mL (120 mL) → concentración final ≈3%. Rotular y verificar las presentaciones disponibles en el centro.</p>
        <h3>Fórmula de Adrogué-Madias</h3>
        <p><strong>Cambio de Na sérico con 1 L de solución</strong> = (Na⁺ infusión + K⁺ infusión − Na⁺ sérico) / (agua corporal total + 1)</p>
        <p>Agua corporal total (ACT) = peso × 0,6 (hombre joven), 0,5 (mujer joven y hombre mayor), 0,45 (mujer mayor).</p>
        <Table>
          <thead>
            <tr>
              <th>Solución</th>
              <th>Na⁺ (mEq/L)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NaCl 3%</td>
              <td>513</td>
            </tr>
            <tr>
              <td>NaCl 0,9%</td>
              <td>154</td>
            </tr>
            <tr>
              <td>Ringer lactato</td>
              <td>130</td>
            </tr>
            <tr>
              <td>NaCl 0,45%</td>
              <td>77</td>
            </tr>
            <tr>
              <td>SG 5%</td>
              <td>0</td>
            </tr>
          </tbody>
        </Table>
        <SodiumCalculator />
      </Section>
      <Section id="c13-s7" title="7. Hipernatremia (Na⁺ >145 mEq/L)">
        <p><strong>Causas:</strong> pérdida de agua libre sin acceso al agua (adulto mayor dependiente, compromiso de conciencia), fiebre, diarrea osmótica, diuresis osmótica (hiperglicemia, manitol), <strong>diabetes insípida</strong> central o nefrogénica (litio), aporte excesivo de sodio (bicarbonato, NaCl hipertónico).</p>
        <p><strong>Clínica:</strong> sed, irritabilidad, letargia, debilidad, convulsiones, coma; hemorragia intracraneana por retracción cerebral en casos agudos y graves.</p>
        <h3>Tratamiento</h3>
        <ol type="1">
          <li><strong>Si hay shock o hipovolemia grave:</strong> primero restaurar la volemia con SF 0,9% o Ringer lactato</li>
          <li><strong>Calcular el déficit de agua libre</strong> = ACT × [(Na⁺ actual / 140) − 1]</li>
          <li><strong>Elegir la vía:</strong> agua por boca o sonda nasogástrica (de elección si es posible) o SG 5% / NaCl 0,45% IV</li>
          <li>
            <strong>Velocidad de corrección:</strong>
            <ul>
              <li>Crónica (&gt;48 h o desconocida): descender <strong>≤10 mEq/L en 24 h</strong> (≈0,5 mEq/L/h)</li>
              <li>Aguda (&lt;48 h, por ejemplo, sobrecarga de sal): puede descenderse 1-2 mEq/L/h hasta cerca de 145</li>
            </ul>
          </li>
          <li>Sumar las <strong>pérdidas en curso</strong> (diuresis, fiebre, digestivas) al aporte calculado</li>
          <li><strong>Diabetes insípida central:</strong> desmopresina 1-2 mcg IV/SC o 10-20 mcg intranasal</li>
          <li>Controlar Na cada 4-6 h</li>
        </ol>
        <Callout type="perla">
          <p>la hipernatremia es casi siempre un problema de <strong>agua</strong> (no de sodio) y de <strong>acceso al agua</strong>. En el adulto mayor institucionalizado, pensar en infección como causa de la deshidratación y buscarla activamente.</p>
        </Callout>
      </Section>
      <Section id="c13-s8" title="8. Resumen rápido de electrolitos">
        <Table>
          <thead>
            <tr>
              <th>Trastorno</th>
              <th>ECG clave</th>
              <th>Primera medida urgente</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hiperkalemia</td>
              <td>T picudas, QRS ancho</td>
              <td>Gluconato de calcio 10% 10 mL IV</td>
            </tr>
            <tr>
              <td>Hipokalemia</td>
              <td>Onda U, ST descendido</td>
              <td>KCl IV ≤10-20 mEq/h + magnesio</td>
            </tr>
            <tr>
              <td>Hipercalcemia</td>
              <td>QT corto</td>
              <td>SF 0,9% 200-300 mL/h + zoledrónico</td>
            </tr>
            <tr>
              <td>Hipocalcemia</td>
              <td>QT largo</td>
              <td>Gluconato de calcio 10% 10-20 mL IV</td>
            </tr>
            <tr>
              <td>Hiponatremia grave</td>
              <td>—</td>
              <td>NaCl 3% 150 mL en 20 min (hasta 3 veces)</td>
            </tr>
            <tr>
              <td>Hipernatremia</td>
              <td>—</td>
              <td>Volemia, luego agua libre ≤10 mEq/L/día</td>
            </tr>
            <tr>
              <td>Hipomagnesemia</td>
              <td>QT largo, torsade</td>
              <td>Sulfato de magnesio 2 g IV</td>
            </tr>
          </tbody>
        </Table>
      </Section>
    </>
  )
}

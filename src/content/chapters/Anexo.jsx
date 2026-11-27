import Callout from '../../components/content/Callout.jsx'
import Section from '../../components/content/Section.jsx'

// Anexo · Scores clínicos más utilizados en urgencias
export default function Anexo() {
  return (
    <>
      <Callout type="nota">
        <p>Documento de referencia rápida por especialidad. Cada score incluye <strong>Detalle</strong> (qué mide/cómo se calcula), <strong>Clínica</strong> (interpretación/estratificación de riesgo) y <strong>Conducta</strong> (manejo sugerido según puntaje).</p>
      </Callout>
      <Section id="ca-s1" title="Cirugía (10 scores)">
        <h3>1. Score de Alvarado (Apendicitis Aguda)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> 10 puntos: migración del dolor (1), anorexia (1), náuseas/vómitos (1), dolor en FID (2), rebote (1), fiebre &gt;37.3°C (1), leucocitosis (2), desviación izquierda (1).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> ≤4 baja probabilidad; 5-6 posible (observación/imagen); 7-8 probable; 9-10 muy probable.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> ≤4 → alta con control o reevaluar; 5-6 → ecografía/TAC y observación seriada; ≥7 → interconsulta a cirugía, considerar apendicectomía.</p>
          </li>
        </ul>
        <h3>2. RIPASA Score (Apendicitis Aguda)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Similar a Alvarado pero incluye sexo, nacionalidad, duración de síntomas; mayor sensibilidad en población asiática/femenina.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> &lt;5 baja probabilidad; 5-7 intermedia; ≥7.5 alta probabilidad de apendicitis.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> ≥7.5 → cirugía; intermedio → imagen (TAC/eco) antes de decidir.</p>
          </li>
        </ul>
        <h3>3. Score de Ranson (Pancreatitis Aguda)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> 5 criterios al ingreso (edad, leucocitos, glicemia, LDH, GOT) + 6 a las 48h (caída Hto, aumento BUN, calcio, PaO2, déficit de base, secuestro de líquidos).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> &lt;3 puntos: leve (mortalidad &lt;5%); ≥3: pancreatitis grave (mortalidad aumenta significativamente).</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> ≥3 → UCI/UTI, monitorización estrecha, considerar TAC contrastado a las 72h.</p>
          </li>
        </ul>
        <h3>4. BISAP Score (Pancreatitis Aguda)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> BUN &gt;25, alteración conciencia (Glasgow &lt;15), SIRS, edad &gt;60, derrame pleural. 1 punto c/u (0-5).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> 0-2 bajo riesgo; ≥3 alto riesgo de mortalidad y complicaciones.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> ≥3 → hospitalización con monitorización intensiva, hidratación agresiva guiada.</p>
          </li>
        </ul>
        <h3>5. APACHE II</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> 12 variables fisiológicas + edad + comorbilidad crónica. Rango 0-71.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> A mayor puntaje, mayor mortalidad predicha (&gt;25 asociado a mortalidad &gt;50%).</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Guía ingreso a UCI y pronóstico; no cambia manejo puntual pero orienta intensidad de cuidados.</p>
          </li>
        </ul>
        <h3>6. Índice de Peritonitis de Mannheim (MPI)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Edad, sexo, falla orgánica, malignidad, duración &gt;24h, origen no colónico, extensión de peritonitis, tipo de exudado.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> &lt;21 mortalidad baja; 21-29 intermedia; &gt;29 mortalidad alta (&gt;50%).</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Puntajes altos → cirugía urgente + manejo en UCI postoperatorio.</p>
          </li>
        </ul>
        <h3>7. Boey Score (Úlcera Péptica Perforada)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> 3 factores: shock al ingreso, comorbilidad médica mayor, perforación &gt;24h de evolución.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> 0 factores: mortalidad ~1.5%; 3 factores: mortalidad hasta 100%.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Puntaje alto → cirugía de urgencia + reanimación agresiva prequirúrgica.</p>
          </li>
        </ul>
        <h3>8. Clasificación ASA (Riesgo Anestésico)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> I (sano) a VI (muerte cerebral); incluye "E" si es urgencia.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Estratifica riesgo perioperatorio y de complicaciones anestésicas.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> ASA III-IV → evaluación preanestésica exhaustiva, considerar UCI postoperatoria.</p>
          </li>
        </ul>
        <h3>9. Índice de Comorbilidad de Charlson</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Suma ponderada de 19 comorbilidades (ej. IAM, diabetes, EPOC, cáncer).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Predice mortalidad a 1 y 10 años; ajustado por edad.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Puntajes altos → discutir objetivos terapéuticos y riesgo quirúrgico con paciente/familia.</p>
          </li>
        </ul>
        <h3>10. Glasgow-Blatchford Score (Hemorragia Digestiva Alta)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> BUN, Hb, PAS, FC, melena, síncope, hepatopatía, insuficiencia cardíaca.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> 0 → bajo riesgo (manejo ambulatorio posible); ≥1 → requiere intervención.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Score 0 → alta con endoscopía ambulatoria; ≥6 → alto riesgo de necesitar transfusión/endoscopía urgente.</p>
          </li>
        </ul>
      </Section>
      <Section id="ca-s2" title="Psiquiatría (7 scores)">
        <h3>1. Columbia Suicide Severity Rating Scale (C-SSRS)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Evalúa ideación (intensidad, método, plan) y conducta suicida mediante preguntas estructuradas.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Clasifica riesgo bajo, moderado o alto según presencia de plan/intención/conducta previa.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Riesgo alto → hospitalización psiquiátrica involuntaria si es necesario, retirar medios letales, acompañamiento continuo.</p>
          </li>
        </ul>
        <h3>2. SAD PERSONS Scale</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> 10 ítems (Sexo masculino, Edad, Depresión, intento Previo, abuso de Etanol, pérdida de pensamiento Racional, falta de Soporte social, plan Organizado, No pareja, enfermedad Somática).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> 0-4 bajo riesgo; 5-6 riesgo moderado; ≥7 alto riesgo.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> ≥7 → hospitalización; 5-6 → evaluación psiquiátrica urgente y considerar internación.</p>
          </li>
        </ul>
        <h3>3. CIWA-Ar (Abstinencia Alcohólica)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> 10 ítems: náuseas, temblor, sudoración, ansiedad, agitación, alteraciones sensoriales, cefalea, orientación.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> &lt;10 leve; 10-18 moderada; &gt;18 severa (riesgo de delirium tremens/convulsiones).</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> &gt;18 → benzodiacepinas escalonadas (protocolo sintomático), vigilancia estrecha, considerar UCI.</p>
          </li>
        </ul>
        <h3>4. COWS (Clinical Opiate Withdrawal Scale)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> 11 signos/síntomas de abstinencia a opioides (FC, sudoración, temblor, ansiedad, midriasis, dolor óseo/articular, GI).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> &lt;5 mínima; 5-12 leve; 13-24 moderada; 25-36 moderadamente severa; &gt;36 severa.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Moderada-severa → iniciar manejo con agonistas opioides (metadona/buprenorfina) según protocolo local.</p>
          </li>
        </ul>
        <h3>5. Escala de Agitación-Sedación de Richmond (RASS)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Rango -5 (no responde) a +4 (combativo); evalúa nivel de agitación/sedación.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> +2 a +4 indica agitación significativa que requiere manejo.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> RASS alto → contención verbal/farmacológica (antipsicóticos/benzodiacepinas), evaluar causa orgánica.</p>
          </li>
        </ul>
        <h3>6. CAM (Confusion Assessment Method - Delirium)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> 4 criterios: inicio agudo/curso fluctuante, inatención, pensamiento desorganizado, alteración de conciencia.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Positivo si hay 1+2 y (3 o 4); diferencia delirium de patología psiquiátrica primaria.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Positivo → buscar causa orgánica (infección, metabólica, fármacos) antes de atribuir a cuadro psiquiátrico.</p>
          </li>
        </ul>
        <h3>7. CAGE (Tamizaje de Consumo de Alcohol)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> 4 preguntas: necesidad de disminuir (Cut down), molestia por críticas (Annoyed), culpa (Guilty), consumo matutino (Eye-opener).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> ≥2 respuestas positivas sugiere problema de consumo de alcohol.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Positivo → derivación a evaluación por adicciones, screening de comorbilidad psiquiátrica.</p>
          </li>
        </ul>
      </Section>
      <Section id="ca-s3" title="Medicina interna (5 scores)">
        <h3>1. CHA2DS2-VASc (Riesgo Embólico en FA)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> ICC, HTA, edad ≥75 (2pts), DM, ACV/AIT previo (2pts), enfermedad vascular, edad 65-74, sexo femenino.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> 0 (hombre) o 1 (mujer): riesgo bajo; ≥2: riesgo significativo de embolia.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Score alto → indicar anticoagulación oral (salvo contraindicación).</p>
          </li>
        </ul>
        <h3>2. HAS-BLED (Riesgo de Sangrado con Anticoagulación)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> HTA, función renal/hepática anormal, ACV previo, sangrado previo, INR lábil, edad &gt;65, fármacos/alcohol.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> ≥3 indica alto riesgo de sangrado.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> No contraindica anticoagulación per se, pero obliga a corregir factores modificables y vigilancia estrecha.</p>
          </li>
        </ul>
        <h3>3. Child-Pugh (Severidad de Hepatopatía)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Bilirrubina, albúmina, INR, ascitis, encefalopatía. Clases A (5-6), B (7-9), C (10-15).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Clase C indica cirrosis descompensada con alta mortalidad.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Clase C → evaluación para trasplante hepático, manejo estricto de complicaciones (ascitis, encefalopatía, HDA variceal).</p>
          </li>
        </ul>
        <h3>4. MELD Score (Model for End-Stage Liver Disease)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Basado en creatinina, bilirrubina, INR (y sodio en MELD-Na).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Predice mortalidad a 90 días; usado para priorización en lista de trasplante.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> MELD alto → priorizar evaluación para trasplante y manejo intensivo de complicaciones.</p>
          </li>
        </ul>
        <h3>5. Wells Score (Trombosis Venosa Profunda)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Cáncer activo, parálisis/inmovilización, encamamiento &gt;3 días, dolor localizado, edema de toda la pierna, asimetría de pantorrilla &gt;3cm, edema con fóvea, venas colaterales, diagnóstico alternativo (-2).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> &lt;1 baja probabilidad; 1-2 moderada; ≥2 alta probabilidad de TVP.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Baja probabilidad + Dímero D negativo → descarta TVP; alta probabilidad → ecografía doppler urgente.</p>
          </li>
        </ul>
      </Section>
      <Section id="ca-s4" title="Neurología (7 scores)">
        <h3>1. Escala de Coma de Glasgow (GCS)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Apertura ocular (4), respuesta verbal (5), respuesta motora (6). Rango 3-15.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> 13-15 leve; 9-12 moderado; ≤8 grave (compromiso de conciencia severo, riesgo de vía aérea).</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> ≤8 → considerar intubación orotraqueal para protección de vía aérea, TAC de cerebro urgente.</p>
          </li>
        </ul>
        <h3>2. NIHSS (National Institutes of Health Stroke Scale)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> 11 ítems que evalúan conciencia, mirada, campos visuales, fuerza, sensibilidad, lenguaje, disartria, negligencia.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> 0-4 leve; 5-15 moderado; 16-20 moderado-severo; ≥21 severo.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Guía elección de trombolisis/trombectomía y pronóstico; reevaluación seriada post-tratamiento.</p>
          </li>
        </ul>
        <h3>3. ABCD2 Score (Riesgo de ACV tras AIT)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Edad ≥60, PA ≥140/90, clínica (debilidad focal 2pts, disartria sin debilidad 1pt), duración (≥60min 2pts, 10-59min 1pt), diabetes.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> 0-3 bajo riesgo; 4-5 moderado; 6-7 alto riesgo de ACV en 48h-90 días.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> ≥4 → hospitalización y estudio urgente (imagen vascular, ecocardiograma).</p>
          </li>
        </ul>
        <h3>4. Escala de Hunt y Hess (Hemorragia Subaracnoidea)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Grados I (asintomático/cefalea leve) a V (coma profundo, postura de descerebración).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> A mayor grado, peor pronóstico y mayor mortalidad.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Grados altos → manejo en UCI neurológica, evaluación neuroquirúrgica urgente (clipaje/coiling).</p>
          </li>
        </ul>
        <h3>5. Escala de Fisher (Hemorragia Subaracnoidea - Vasoespasmo)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Basada en cantidad y distribución de sangre en TAC (grados 1-4).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Grado 3 (coágulos gruesos) mayor riesgo de vasoespasmo cerebral.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Grados altos → profilaxis con nimodipino, monitorización de vasoespasmo (doppler transcraneal).</p>
          </li>
        </ul>
        <h3>6. ICH Score (Hemorragia Intracerebral)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> GCS, volumen del hematoma, hemorragia intraventricular, origen infratentorial, edad ≥80.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Score 0 mortalidad ~0%; score ≥4 mortalidad muy alta (&gt;90%).</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Guía discusión pronóstica con familia y decisión de manejo activo vs.&nbsp;paliativo/neuroquirúrgico.</p>
          </li>
        </ul>
        <h3>7. Escala de Rankin Modificada (mRS)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Evalúa grado de discapacidad/dependencia funcional post-ACV (0 sin síntomas a 6 muerte).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Usada para medir desenlace funcional, no para decisión aguda.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Orienta plan de rehabilitación y expectativas al alta.</p>
          </li>
        </ul>
      </Section>
      <Section id="ca-s5" title="Trauma (5 scores)">
        <h3>1. Revised Trauma Score (RTS)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Combina GCS, presión arterial sistólica y frecuencia respiratoria, cada uno ponderado.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Puntajes bajos correlacionan con mayor mortalidad.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Usado en triage prehospitalario para priorizar traslado a centro de trauma.</p>
          </li>
        </ul>
        <h3>2. Injury Severity Score (ISS)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Suma de los cuadrados de las 3 puntuaciones AIS más altas en regiones corporales distintas (0-75).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> &gt;15 se considera trauma mayor; &gt;25 trauma grave.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> ISS alto → activación de equipo de trauma completo, traslado a centro de trauma nivel I.</p>
          </li>
        </ul>
        <h3>3. AAST Organ Injury Scale</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Clasifica gravedad de lesión por órgano sólido (bazo, hígado, riñón) de grado I a V según hallazgos de imagen/quirúrgicos.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Grados I-II generalmente manejo conservador; IV-V mayor probabilidad de requerir cirugía.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Grados altos + inestabilidad hemodinámica → laparotomía de urgencia; estable → manejo no operatorio con observación.</p>
          </li>
        </ul>
        <h3>4. Canadian C-Spine Rule</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Algoritmo que evalúa factores de alto riesgo, factores de bajo riesgo y capacidad de rotar el cuello para decidir necesidad de imagen cervical.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Determina si se puede descartar clínicamente lesión cervical sin imagen.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Cumple criterios de bajo riesgo y rotación completa → no requiere imagen; caso contrario → TAC de columna cervical.</p>
          </li>
        </ul>
        <h3>5. Criterios NEXUS (Columna Cervical)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> 5 criterios: sin dolor a la palpación de línea media cervical, sin déficit neurológico focal, alerta normal, sin intoxicación, sin lesión dolorosa distractora.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Cumple todos → muy baja probabilidad de lesión cervical significativa.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Cumple todos los criterios → se puede omitir imagen; si falla alguno → estudio de imagen cervical.</p>
          </li>
        </ul>
      </Section>
      <Section id="ca-s6" title="Respiratorio (5 scores)">
        <h3>1. CURB-65 (Neumonía Adquirida en la Comunidad)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Confusión, Urea &gt;7mmol/L, frecuencia Respiratoria ≥30, presión arterial Baja (PAS&lt;90 o PAD≤60), edad ≥65.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> 0-1 bajo riesgo; 2 riesgo intermedio; ≥3 alto riesgo de mortalidad.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> 0-1 → manejo ambulatorio; 2 → considerar hospitalización; ≥3 → hospitalización, considerar UCI.</p>
          </li>
        </ul>
        <h3>2. Pneumonia Severity Index (PSI/PORT Score)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Incorpora edad, comorbilidades, hallazgos de examen físico y laboratorio/imagen (más detallado que CURB-65).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Clases I-II bajo riesgo; III intermedio; IV-V alto riesgo.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Clases IV-V → hospitalización, considerar UCI en clase</p>
            <ol type="A" start={22}>
              <li></li>
            </ol>
          </li>
        </ul>
        <h3>3. Wells Score (Tromboembolismo Pulmonar)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Signos de TVP, TEP más probable que otro diagnóstico, taquicardia &gt;100, inmovilización/cirugía reciente, TEP/TVP previo, hemoptisis, cáncer activo.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> &lt;2 baja probabilidad; 2-6 moderada; &gt;6 alta probabilidad de TEP.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Baja probabilidad + Dímero D negativo → descarta TEP; alta probabilidad → AngioTAC de tórax urgente.</p>
          </li>
        </ul>
        <h3>4. Score de Ginebra Revisado (TEP)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Alternativa a Wells, totalmente basada en variables clínicas objetivas (edad, FC, cirugía/fractura previa, hemoptisis, cáncer, dolor unilateral en pierna).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Estratifica en baja, intermedia o alta probabilidad de TEP.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Igual que Wells: guía necesidad de Dímero D vs.&nbsp;imagen directa (angioTAC).</p>
          </li>
        </ul>
        <h3>5. BODE Index (EPOC)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> IMC, obstrucción (VEF1), disnea (escala mMRC), capacidad de ejercicio (test de marcha 6 min).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Predice mortalidad a mediano-largo plazo en pacientes EPOC.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Puntajes altos → derivación a rehabilitación pulmonar, evaluación de oxigenoterapia/trasplante.</p>
          </li>
        </ul>
      </Section>
      <Section id="ca-s7" title="Generales y transversales (5 scores)">
        <h3>1. qSOFA (Quick SOFA - Sepsis)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> 3 criterios: frecuencia respiratoria ≥22, alteración del estado mental, PAS ≤100 mmHg. 1 punto c/u.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> ≥2 puntos sugiere alto riesgo de mal desenlace por sepsis.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> ≥2 → iniciar bundle de sepsis (cultivos, lactato, antibióticos precoces, fluidos), considerar UCI.</p>
          </li>
        </ul>
        <h3>2. SOFA (Sequential Organ Failure Assessment)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Evalúa 6 sistemas (respiratorio, coagulación, hepático, cardiovascular, neurológico, renal), 0-4 puntos c/u.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Aumento ≥2 puntos desde basal indica disfunción orgánica asociada a sepsis.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Guía manejo en UCI y seguimiento evolutivo de falla orgánica.</p>
          </li>
        </ul>
        <h3>3. NEWS2 (National Early Warning Score)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> FR, SpO2, uso de O2 suplementario, temperatura, PAS, FC, nivel de conciencia.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> 0-4 bajo riesgo; 5-6 riesgo medio; ≥7 riesgo alto de deterioro.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> ≥7 → evaluación médica urgente, considerar traslado a UCI/monitorización continua.</p>
          </li>
        </ul>
        <h3>4. MEWS (Modified Early Warning Score)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Similar a NEWS pero más simple: FC, PAS, FR, temperatura, nivel de conciencia.</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Puntajes altos predicen deterioro clínico y necesidad de UCI.</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Score elevado → aumentar frecuencia de monitorización y activar equipo de respuesta rápida.</p>
          </li>
        </ul>
        <h3>5. Sistema de Triage de Manchester (MTS)</h3>
        <ul>
          <li>
            <p><strong>Detalle:</strong> Clasifica pacientes en 5 niveles por color según motivo de consulta y discriminantes clínicos (no diagnóstico).</p>
          </li>
          <li>
            <p><strong>Clínica:</strong> Rojo (inmediato) → Naranja (10 min) → Amarillo (60 min) → Verde (120 min) → Azul (240 min).</p>
          </li>
          <li>
            <p><strong>Conducta:</strong> Determina orden de atención y tiempo máximo de espera según nivel de urgencia asignado.</p>
          </li>
        </ul>
        <p><em>Documento de referencia clínica rápida — no reemplaza el juicio clínico ni protocolos institucionales vigentes.</em></p>
      </Section>
    </>
  )
}

import Callout from '../../components/content/Callout.jsx'
import Section from '../../components/content/Section.jsx'

// Capítulo 18 · Patologías más frecuentes del adulto mayor en urgencia (según MINSAL)
export default function Capitulo18() {
  return (
    <>
      <p>Epidemiología, cuadro clínico, diagnóstico, tratamiento y conducta de las patologías de mayor prevalencia e impacto en el adulto mayor (≥65 años) que consulta en el servicio de urgencia, alineado con las orientaciones técnicas del MINSAL (Programa Nacional de Salud del Adulto Mayor, Orientación Técnica de Valoración Geriátrica Integral, GES y normas de urgencia vigentes).</p>
      <Callout type="alerta">
        <p><strong>Principio general MINSAL:</strong> en el adulto mayor, las enfermedades se presentan con frecuencia de forma atípica (sin fiebre, sin dolor típico, con caída o delirium como única manifestación). Un alto índice de sospecha es más valioso que la clínica clásica.</p>
      </Callout>
      <Section id="c18-s1" title="1. Caídas y síndrome post-caída">
        <p><strong>Epidemiología:</strong> según MINSAL, cerca de un tercio de los mayores de 65 años que viven en la comunidad sufre al menos una caída al año, cifra que aumenta a más del 50% en mayores de 80 años e institucionalizados. Es una de las principales causas de consulta en urgencia y de pérdida de funcionalidad e independencia en este grupo.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Caída con o sin traumatismo evidente; buscar siempre la causa (intrínseca: hipotensión ortostática, arritmia, deterioro visual, sarcopenia; extrínseca: ambiental, fármacos)</p>
          </li>
          <li>
            <p>Síndrome post-caída: miedo a volver a caer, restricción de la marcha, aislamiento</p>
          </li>
          <li>
            <p>Evaluar siempre polifarmacia (psicofármacos, hipotensores, hipoglicemiantes) como factor de riesgo</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Anamnesis dirigida: circunstancias de la caída, pródromo (mareo, palpitaciones, pérdida de conciencia), fármacos vigentes</p>
          </li>
          <li>
            <p>Examen físico completo con énfasis en marcha y equilibrio (Timed Up and Go, test de Romberg)</p>
          </li>
          <li>
            <p>ECG, glicemia capilar, presión arterial en decúbito y de pie (ortostatismo)</p>
          </li>
          <li>
            <p>Imagen dirigida según sospecha de lesión (TAC de cerebro si hay TEC con anticoagulación o focalidad, radiografía si sospecha de fractura)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Manejo de lesiones agudas según hallazgo (fracturas, TEC, hematomas)</p>
          </li>
          <li>
            <p>Corrección de causas reversibles: ajuste o suspensión de fármacos de riesgo, manejo de hipotensión ortostática</p>
          </li>
          <li>
            <p>Evaluación multidimensional (Valoración Geriátrica Integral) antes del alta</p>
          </li>
        </ul>
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Hospitalizar si hay lesión significativa, causa cardiovascular no aclarada, o caídas a repetición con deterioro funcional</p>
          </li>
          <li>
            <p>Derivar a evaluación geriátrica ambulatoria y programa de prevención de caídas (EFAM/Programa del Adulto Mayor) si el alta es a domicilio</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Toda caída en el adulto mayor es un síntoma, no un diagnóstico — buscar activamente la causa cambia el pronóstico más que tratar solo la lesión.</p>
        </Callout>
      </Section>
      <Section id="c18-s2" title="2. Delirium (síndrome confusional agudo)">
        <p><strong>Epidemiología:</strong> afecta hasta 30-40% de los adultos mayores hospitalizados por causa médica y hasta 50% en el postoperatorio; se asocia a mayor mortalidad, estadía prolongada e institucionalización si no se reconoce a tiempo.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Cambio agudo y fluctuante del estado mental con alteración de la atención</p>
          </li>
          <li>
            <p>Forma hipoactiva (la más frecuente y subdiagnosticada en el adulto mayor): letargia, enlentecimiento</p>
          </li>
          <li>
            <p>Forma hiperactiva: agitación, agresividad; forma mixta</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>CAM (Confusion Assessment Method) como herramienta de tamizaje</p>
          </li>
          <li>
            <p>Descartar siempre causa orgánica: infección (ITU, neumonía), retención urinaria, fecaloma, dolor no controlado, deprivación o intoxicación por fármacos, alteración metabólica</p>
          </li>
          <li>
            <p>Panel básico: glicemia, electrolitos, función renal, hemograma, sedimento de orina, saturometría, ECG</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Medidas no farmacológicas de primera línea: reorientación temporoespacial, luz natural, evitar contención física, uso de lentes/audífonos, movilización precoz, evitar cambios de entorno</p>
          </li>
          <li>
            <p>Tratar la causa desencadenante de forma dirigida</p>
          </li>
          <li>
            <p>Evitar benzodiacepinas (empeoran el delirium, salvo en deprivación de OH/BZD)</p>
          </li>
          <li>
            <p>Si hay agitación con riesgo para el paciente o el equipo: Haloperidol 0.5-1 mg VO/IM en dosis bajas (evitar en Parkinson o demencia por cuerpos de Lewy, preferir Quetiapina en esos casos)</p>
          </li>
        </ul>
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Hospitalizar para estudio y manejo de la causa si no se resuelve con medidas iniciales</p>
          </li>
          <li>
            <p>Educar a la familia sobre el carácter fluctuante y reversible del cuadro</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El delirium hipoactivo se confunde fácilmente con depresión o demencia — ante cualquier cambio agudo del estado basal, aplicar CAM de rutina.</p>
        </Callout>
      </Section>
      <Section id="c18-s3" title="3. Infección del tracto urinario (ITU) y urosepsis">
        <p><strong>Epidemiología:</strong> la ITU es una de las infecciones más frecuentes en el adulto mayor y una causa común de sepsis en este grupo; su prevalencia aumenta con el uso de sonda vesical y la institucionalización.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Presentación atípica frecuente: ausencia de fiebre, síntomas urinarios bajos poco claros</p>
          </li>
          <li>
            <p>Delirium, caída o deterioro funcional pueden ser la única manifestación</p>
          </li>
          <li>
            <p>Bacteriuria asintomática es frecuente y <strong>no debe tratarse</strong> como ITU (salvo excepciones: procedimiento urológico invasivo)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Sedimento de orina y urocultivo antes de iniciar antibiótico</p>
          </li>
          <li>
            <p>Hemocultivos si hay sospecha de bacteriemia o criterios de sepsis</p>
          </li>
          <li>
            <p>Evitar el sobrediagnóstico: orina turbia o de mal olor por sí solas no son criterio diagnóstico de ITU</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>ITU baja no complicada: Nitrofurantoína 100 mg VO c/12 h por 5 días o Cefadroxilo según disponibilidad y función renal</p>
          </li>
          <li>
            <p>Pielonefritis/ITU complicada: Ceftriaxona 1-2 g IV c/24 h, ajustar según cultivo y función renal</p>
          </li>
          <li>
            <p>Urosepsis: manejo según protocolo de sepsis (ver Capítulo 10), antibiótico de amplio espectro dentro de la primera hora</p>
          </li>
        </ul>
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Hospitalizar si hay inestabilidad hemodinámica, mal tolerancia oral, comorbilidad significativa o falla de manejo ambulatorio previo</p>
          </li>
          <li>
            <p>Revisar y retirar sonda vesical si no es indispensable</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>No tratar la bacteriuria asintomática en el adulto mayor — es la causa más frecuente de sobreuso de antibióticos y resistencia en este grupo.</p>
        </Callout>
      </Section>
      <Section id="c18-s4" title="4. Neumonía adquirida en la comunidad (NAC) del adulto mayor">
        <p><strong>Epidemiología:</strong> la NAC es una de las principales causas de hospitalización y mortalidad infecciosa en mayores de 65 años; la letalidad aumenta significativamente con la edad y comorbilidad asociada.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Presentación atípica: puede no haber fiebre ni tos productiva; predomina taquipnea, confusión aguda, decaimiento o descompensación de comorbilidad de base</p>
          </li>
          <li>
            <p>Auscultación con crépitos localizados; polipnea como signo de alarma precoz</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Radiografía de tórax</p>
          </li>
          <li>
            <p>Score CURB-65 (Confusión, Urea &gt;7 mmol/L, FR ≥30, PAS &lt;90 o PAD ≤60, edad ≥65 — el criterio etario ya suma un punto en este grupo) para definir gravedad y lugar de manejo</p>
          </li>
          <li>
            <p>Saturometría, gases arteriales si hay dificultad respiratoria</p>
          </li>
          <li>
            <p>Hemocultivos y antígenos urinarios (neumococo/Legionella) en casos graves</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Manejo ambulatorio (CURB-65 0-1, sin comorbilidad descompensada): Amoxicilina/Ácido clavulánico VO</p>
          </li>
          <li>
            <p>Manejo hospitalizado: Ceftriaxona 1-2 g IV c/24 h + Azitromicina 500 mg VO/IV c/24 h (cobertura de atípicos)</p>
          </li>
          <li>
            <p>Oxigenoterapia titulada a SpO₂ 94-98%</p>
          </li>
          <li>
            <p>Kinesiterapia respiratoria precoz y movilización para prevenir deterioro funcional</p>
          </li>
        </ul>
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>CURB-65 ≥2: hospitalizar; ≥3-4: considerar UCI</p>
          </li>
          <li>
            <p>Evaluar siempre riesgo de aspiración y estado nutricional/deglución en el adulto mayor frágil</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>En el adulto mayor, la ausencia de fiebre no descarta neumonía — la taquipnea y el cambio del estado mental son signos de alarma más sensibles que la temperatura.</p>
        </Callout>
      </Section>
      <Section id="c18-s5" title="5. Insuficiencia cardíaca descompensada">
        <p><strong>Epidemiología:</strong> la prevalencia de insuficiencia cardíaca aumenta marcadamente con la edad y es una causa muy frecuente de reconsulta y hospitalización en el adulto mayor.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Disnea progresiva, ortopnea, disnea paroxística nocturna</p>
          </li>
          <li>
            <p>Edema de extremidades inferiores, aumento de peso, congestión pulmonar</p>
          </li>
          <li>
            <p>Presentación atípica: decaimiento, confusión, anorexia sin disnea marcada</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Radiografía de tórax (redistribución vascular, derrame pleural, cardiomegalia)</p>
          </li>
          <li>
            <p>NT-proBNP o BNP (elevado en descompensación; considerar que su punto de corte aumenta con la edad)</p>
          </li>
          <li>
            <p>ECG para buscar causa desencadenante (arritmia, isquemia)</p>
          </li>
          <li>
            <p>Ecocardiograma para evaluar función y fracción de eyección si no está reciente</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Furosemida IV en bolo (dosis según furosemida oral habitual, típicamente 40-80 mg IV) con reevaluación de diuresis</p>
          </li>
          <li>
            <p>Oxígeno si SpO₂ &lt;90%; VMNI (CPAP/BiPAP) en edema pulmonar agudo</p>
          </li>
          <li>
            <p>Vasodilatadores (nitroglicerina IV) si hay hipertensión asociada y buena perfusión</p>
          </li>
          <li>
            <p>Identificar y tratar el factor desencadenante (arritmia, infección, mala adherencia, transgresión hídrica/salina)</p>
          </li>
        </ul>
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Hospitalizar la mayoría de las descompensaciones para diuresis controlada y ajuste de terapia</p>
          </li>
          <li>
            <p>Ajustar tratamiento crónico (IECA/ARA-II, betabloqueo, antagonistas de mineralocorticoides) antes del alta según estabilidad</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El peso diario y el examen de yugulares son más útiles que la disnea subjetiva para monitorizar la respuesta diurética en el adulto mayor.</p>
        </Callout>
      </Section>
      <Section id="c18-s6" title="6. Fractura de cadera y trauma osteoporótico">
        <p><strong>Epidemiología:</strong> la fractura de cadera es una de las principales causas de hospitalización traumatológica en el adulto mayor, con alta morbimortalidad asociada (mortalidad al año que puede superar el 20-30% según comorbilidad); es problema de salud pública priorizado por MINSAL.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor inguinal o de cadera tras caída de baja energía, incapacidad para la marcha</p>
          </li>
          <li>
            <p>Acortamiento y rotación externa de la extremidad afectada (fractura desplazada)</p>
          </li>
          <li>
            <p>Puede presentarse sin deformidad evidente en fracturas no desplazadas (impactadas)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Radiografía de cadera/pelvis AP y axial</p>
          </li>
          <li>
            <p>Si alta sospecha clínica con radiografía no concluyente: TAC o RM de cadera</p>
          </li>
          <li>
            <p>Estudio preoperatorio: hemograma, perfil de coagulación, función renal, ECG, evaluación de riesgo cardiovascular</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Analgesia adecuada precoz (evitar subtratar el dolor por temor a efectos adversos)</p>
          </li>
          <li>
            <p>Manejo quirúrgico precoz (idealmente dentro de las primeras 24-48 h) reduce mortalidad y complicaciones</p>
          </li>
          <li>
            <p>Profilaxis de TVP, manejo de vía aérea y prevención de úlceras por presión mientras espera cirugía</p>
          </li>
          <li>
            <p>Evaluación anestésica y optimización de comorbilidades sin retrasar innecesariamente la cirugía</p>
          </li>
        </ul>
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Hospitalización y manejo multidisciplinario (traumatología, medicina interna/geriatría, kinesiología)</p>
          </li>
          <li>
            <p>Iniciar estudio y manejo de osteoporosis y prevención secundaria de caídas antes del alta</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La cirugía precoz (&lt;48 h) es en sí misma una intervención que reduce mortalidad — retrasarla "para optimizar" al paciente frágil suele empeorar el pronóstico.</p>
        </Callout>
      </Section>
      <Section id="c18-s7" title="7. Polifarmacia y reacciones adversas a medicamentos (RAM)">
        <p><strong>Epidemiología:</strong> la polifarmacia (uso de ≥5 fármacos) afecta a una proporción muy relevante de los adultos mayores chilenos y es causa reconocida de consulta a urgencia por RAM, caídas, delirium e interacciones.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Presentación inespecífica: caída, delirium, hipotensión, sangrado, hipoglicemia</p>
          </li>
          <li>
            <p>Sospechar siempre RAM ante cualquier síntoma nuevo en un paciente polimedicado</p>
          </li>
          <li>
            <p>Fármacos de mayor riesgo: benzodiacepinas, opioides, anticoagulantes, hipoglicemiantes, diuréticos, antihipertensivos</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Conciliación completa de medicamentos (revisar todos los fármacos, dosis y adherencia real)</p>
          </li>
          <li>
            <p>Correlacionar temporalmente el inicio/ajuste de un fármaco con el síntoma actual</p>
          </li>
          <li>
            <p>Exámenes dirigidos según fármaco sospechoso (INR en anticoagulados, glicemia en hipoglicemiantes, función renal)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Suspender o ajustar el fármaco causal</p>
          </li>
          <li>
            <p>Manejo específico de la complicación (ej. revertir anticoagulación, corregir hipoglicemia)</p>
          </li>
          <li>
            <p>Uso de criterios STOPP/START o Beers para revisar la pertinencia de la prescripción en el adulto mayor</p>
          </li>
        </ul>
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Deprescribir fármacos de beneficio dudoso o alto riesgo en el contexto de la expectativa de vida y funcionalidad del paciente</p>
          </li>
          <li>
            <p>Derivar a control con médico tratante o geriatría para revisión completa del esquema terapéutico</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Ante todo síndrome geriátrico agudo (caída, delirium, incontinencia) preguntar primero "¿qué fármaco nuevo o qué dosis cambió?" antes de pedir exámenes complejos.</p>
        </Callout>
      </Section>
      <Section id="c18-s8" title="8. Deshidratación y trastornos hidroelectrolíticos">
        <Callout type="nota">
          <p>Fórmulas y algoritmos de sodio y potasio en el <strong>Capítulo 13</strong>.</p>
        </Callout>
        <p><strong>Epidemiología:</strong> el adulto mayor tiene mayor riesgo de deshidratación por disminución de la sensación de sed, menor capacidad de concentración renal y uso frecuente de diuréticos; es causa común de consulta, especialmente en olas de calor y cuadros infecciosos intercurrentes.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Sequedad de mucosas, hipotensión, taquicardia, confusión aguda</p>
          </li>
          <li>
            <p>Puede presentarse solo como delirium o caída, sin sed referida</p>
          </li>
          <li>
            <p>Hiponatremia: náuseas, cefalea, confusión, convulsiones si es severa y de instalación rápida</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Electrolitos plasmáticos (sodio, potasio), función renal, osmolaridad si se sospecha trastorno complejo</p>
          </li>
          <li>
            <p>Evaluar volemia clínica (mucosas, turgor cutáneo poco confiable en el adulto mayor, presión arterial y frecuencia cardíaca)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Reposición de volumen con cristaloides isotónicos, ajustando velocidad según función cardíaca y renal</p>
          </li>
          <li>
            <p>Corrección de hiponatremia: <strong>gradual</strong>, no superar 8-10 mEq/L en 24 h para evitar mielinólisis pontina</p>
          </li>
          <li>
            <p>Ajustar o suspender diuréticos y otros fármacos contribuyentes</p>
          </li>
          <li>
            <p>Tratar la causa de base (infección, diarrea, poca ingesta)</p>
          </li>
        </ul>
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Hospitalizar si hay compromiso hemodinámico, alteración electrolítica severa o incapacidad de manejo ambulatorio de la hidratación</p>
          </li>
          <li>
            <p>Educar sobre ingesta hídrica en contexto de olas de calor (plan MINSAL de alerta por calor extremo)</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>En el adulto mayor la corrección demasiado rápida de la hiponatremia es tan peligrosa como la hiponatremia misma — "lento y seguro" es la regla.</p>
        </Callout>
      </Section>
      <Section id="c18-s9" title="9. Depresión y riesgo suicida en el adulto mayor">
        <p><strong>Epidemiología:</strong> la depresión está subdiagnosticada en el adulto mayor y se asocia a mayor riesgo de suicidio consumado en este grupo etario respecto a la población general, especialmente en hombres mayores que viven solos o con enfermedad crónica.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Presentación frecuentemente somática (dolor difuso, fatiga, quejas gastrointestinales) más que ánimo triste explícito</p>
          </li>
          <li>
            <p>Aislamiento social, pérdida de interés, alteración del sueño y apetito</p>
          </li>
          <li>
            <p>Ideación de muerte o desesperanza que puede pasar desapercibida si no se pregunta directamente</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Escala de Depresión Geriátrica (Yesavage) como tamizaje</p>
          </li>
          <li>
            <p>Preguntar directamente por ideación suicida ante sospecha (no aumenta el riesgo, permite intervenir)</p>
          </li>
          <li>
            <p>Descartar causa orgánica o farmacológica de los síntomas depresivos</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Evaluación de riesgo suicida inmediato: ideación, plan, medios disponibles, intentos previos</p>
          </li>
          <li>
            <p>Contención en box, no dejar solo al paciente en riesgo alto mientras se define manejo</p>
          </li>
          <li>
            <p>Inicio o ajuste de manejo farmacológico y derivación a salud mental según nivel de riesgo</p>
          </li>
        </ul>
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Riesgo suicida alto: hospitalización o derivación urgente a psiquiatría, activar red de apoyo familiar</p>
          </li>
          <li>
            <p>Riesgo bajo-moderado: derivación a control de salud mental ambulatorio, no dar de alta sin plan de seguimiento claro</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El adulto mayor rara vez "amenaza" antes de un intento suicida — la desesperanza silenciosa y el aislamiento son señales de alarma más frecuentes que la verbalización directa.</p>
        </Callout>
        <p><em>Manual de bolsillo — Capítulo 18: Patologías más frecuentes del adulto mayor en urgencia. Contenido alineado con las orientaciones técnicas del Programa Nacional de Salud del Adulto Mayor y normas de urgencia del MINSAL. Las dosis son de referencia general y deben ajustarse a función renal/hepática, fragilidad, polifarmacia y protocolos institucionales vigentes.</em></p>
      </Section>
    </>
  )
}

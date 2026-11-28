import ChapterRefs from '../../components/content/ChapterRefs.jsx'
import Callout from '../../components/content/Callout.jsx'
import Section from '../../components/content/Section.jsx'
import Table from '../../components/content/Table.jsx'

// Capítulo 20 · Resumen importante: abordaje integral del paciente en urgencia (Fases 1, 2 y 3)
export default function Capitulo21() {
  return (
    <>
      <p>Este capítulo cierra el manual integrando los contenidos de los Capítulos 1 al 19 en una lógica clínica única: <strong>toda consulta de urgencia se resuelve en tres fases secuenciales</strong>. No reemplaza el detalle de cada capítulo — es el mapa que recuerda, en segundos, qué hacer primero, qué buscar después y cómo cerrar el caso.</p>
      <Callout type="alerta">
        <p>Las tres fases no son rígidas: en el paciente crítico se superponen (se reanima mientras se diagnostica). El orden importa como <em>prioridad de pensamiento</em>, no como pasos obligatoriamente secuenciales.</p>
      </Callout>
      <Section id="c21-s1" title="FASE 1 — Evaluación inicial y estabilización (los primeros minutos)">
        <p><strong>Objetivo:</strong> identificar y tratar lo que mata en minutos, antes de tener un diagnóstico completo.</p>
        <h3>1.1 ABCDE sistemático</h3>
        <ul>
          <li>
            <p><strong>A (vía aérea):</strong> permeabilidad, riesgo de obstrucción, protección si hay compromiso de conciencia</p>
          </li>
          <li>
            <p><strong>B (ventilación):</strong> frecuencia respiratoria, saturación, auscultación (crépitos, sibilancias, silencio auscultatorio)</p>
          </li>
          <li>
            <p><strong>C (circulación):</strong> presión arterial, frecuencia cardíaca, perfusión distal, acceso venoso, ECG inmediato si hay dolor torácico o arritmia</p>
          </li>
          <li>
            <p><strong>D (déficit neurológico):</strong> Glasgow, glicemia capilar inmediata (descarta hipoglicemia como mimic de ACV, convulsión o coma), pupilas</p>
          </li>
          <li>
            <p><strong>E (exposición):</strong> temperatura, lesiones ocultas, signos de sangrado externo</p>
          </li>
        </ul>
        <h3>1.2 Códigos y activaciones que no esperan</h3>
        <ul>
          <li>
            <p><strong>Código Infarto (SCACEST):</strong> ECG &lt;10 min desde el ingreso ante dolor torácico <ChapterRefs to={['c5-s1', 'c10-s1', 'c19-s1']} /></p>
          </li>
          <li>
            <p><strong>Código ACV:</strong> glicemia + TAC de cerebro &lt;25 min ante déficit focal agudo <ChapterRefs to={['c10-s2', 'c14-s1']} /></p>
          </li>
          <li>
            <p><strong>Sepsis/shock séptico:</strong> lactato + hemocultivos + antibiótico en la primera hora <ChapterRefs to={['c10-s3', 'c11-s4', 'c12-s3']} /></p>
          </li>
          <li>
            <p><strong>Paro cardiorrespiratorio / ritmos desfibrilables:</strong> RCP y desfibrilación inmediata, sin esperar diagnóstico etiológico <ChapterRefs to={['c1-s4', 'c19-s7']} /></p>
          </li>
          <li>
            <p><strong>Shock anafiláctico:</strong> Adrenalina IM como primera medida, antes que cualquier otro fármaco <ChapterRefs to={['c10-s10', 'c11-s5']} /></p>
          </li>
        </ul>
        <h3>1.3 Reglas de oro de esta fase</h3>
        <ul>
          <li>
            <p>La sospecha clínica basta para activar un protocolo — no esperar la confirmación diagnóstica</p>
          </li>
          <li>
            <p>Ante taquicardia de complejo ancho con duda diagnóstica: tratar siempre como taquicardia ventricular <ChapterRefs to={['c19-s6']} /></p>
          </li>
          <li>
            <p>Ante inestabilidad hemodinámica con arritmia: cardioversión eléctrica inmediata, no farmacológica</p>
          </li>
          <li>
            <p>En el adulto mayor, un síntoma "atípico" (caída, delirium, ausencia de fiebre) puede ser la única manifestación de una emergencia grave <ChapterRefs to={['c18-s2']} /></p>
          </li>
          <li>
            <p>Analgesia adecuada desde el inicio — el dolor no tratado no es "más seguro", retrasa la evaluación y empeora el pronóstico <ChapterRefs to={['c8-s1']} /></p>
          </li>
        </ul>
        <Callout type="perla">
          <p><strong>Perla de fase:</strong> si el paciente no está estable, no avanzar a la Fase 2 sin haber intentado estabilizar primero — pero tampoco retrasar el diagnóstico dirigido cuando la estabilización ya se inició (se hacen en paralelo, no en serie).</p>
        </Callout>
      </Section>
      <Section id="c21-s2" title="FASE 2 — Diagnóstico dirigido (aclarar la causa)">
        <p><strong>Objetivo:</strong> una vez controlado lo inmediato, precisar el diagnóstico con la mínima cantidad de estudios necesarios y de mayor rendimiento.</p>
        <h3>2.1 Anamnesis y examen dirigidos por síntoma guía</h3>
        <ul>
          <li>
            <p><strong>Dolor torácico:</strong> caracterizar tipo, irradiación, duración; diferenciar isquémico, pericárdico, pleurítico, aórtico <ChapterRefs to={['c5-s1', 'c19-s1']} /></p>
          </li>
          <li>
            <p><strong>Cefalea:</strong> distinguir cefalea primaria de secundaria — banderas rojas (inicio súbito/"peor de la vida", focalidad, fiebre, edad &gt;50 con cefalea nueva) obligan a estudio de imagen <ChapterRefs to={['c6-s4']} /></p>
          </li>
          <li>
            <p><strong>Dolor abdominal:</strong> localización, signos peritoneales, correlación con patología ginecológica en la mujer en edad fértil <ChapterRefs to={['c4-s1', 'c7-s1', 'c16-s2']} /></p>
          </li>
          <li>
            <p><strong>Disnea:</strong> diferenciar origen cardiogénico, respiratorio y tromboembólico con clínica + ecografía a la cabecera <ChapterRefs to={['c2-s1', 'c10-s4', 'c11-s9']} /></p>
          </li>
          <li>
            <p><strong>Síncope/mareo:</strong> diferenciar cardiogénico (mayor riesgo), ortostático, vasovagal y vertiginoso (HINTS si es vértigo) <ChapterRefs to={['c10-s7']} /></p>
          </li>
        </ul>
        <h3>2.2 Herramientas de estratificación que no se deben omitir</h3>
        <ul>
          <li>
            <p><strong>HEART / TIMI / GRACE:</strong> riesgo en SCASEST <ChapterRefs to={['c5-s1', 'c10-s1', 'c19-s2']} /></p>
          </li>
          <li>
            <p><strong>CURB-65:</strong> gravedad de neumonía, con el criterio etario relevante en el adulto mayor <ChapterRefs to={['c2-s4', 'c18-s4']} /></p>
          </li>
          <li>
            <p><strong>qSOFA / SOFA:</strong> disfunción orgánica en sospecha de sepsis <ChapterRefs to={['c10-s3', 'c12-s1']} /></p>
          </li>
          <li>
            <p><strong>Wells / Ginebra + dímero D:</strong> probabilidad de TEP antes de imagen <ChapterRefs to={['c11-s9', 'c19-s10']} /></p>
          </li>
          <li>
            <p><strong>CHA₂DS₂-VASc / HAS-BLED:</strong> riesgo embólico y de sangrado en fibrilación/flutter auricular <ChapterRefs to={['c19-s3']} /></p>
          </li>
          <li>
            <p><strong>Glasgow-Blatchford:</strong> riesgo en hemorragia digestiva alta <ChapterRefs to={['c10-s9']} /></p>
          </li>
          <li>
            <p><strong>CAM:</strong> tamizaje de delirium en el adulto mayor <ChapterRefs to={['c10-s5', 'c18-s2']} /></p>
          </li>
        </ul>
        <h3>2.3 Estudios de alto rendimiento por sospecha</h3>
        <ul>
          <li>
            <p>ECG de 12 derivaciones: dolor torácico, palpitaciones, síncope, alteración electrolítica <ChapterRefs to={['c19-s1']} /></p>
          </li>
          <li>
            <p>Ecografía a la cabecera (protocolo RUSH/pulmonar): shock indiferenciado, disnea, sospecha de taponamiento <ChapterRefs to={['c10-s10', 'c11-s10', 'c19-s12']} /></p>
          </li>
          <li>
            <p>TAC de cerebro sin contraste: déficit neurológico agudo, cefalea con banderas rojas, TEC en anticoagulado <ChapterRefs to={['c6-s4', 'c14-s1', 'c18-s1']} /></p>
          </li>
          <li>
            <p>Laboratorio dirigido, no "panel completo por costumbre": troponina seriada, lactato, electrolitos, función renal según la hipótesis clínica</p>
          </li>
        </ul>
        <h3>2.4 Reglas de oro de esta fase</h3>
        <ul>
          <li>
            <p>Un ECG normal no descarta SCA ni TEP; un dímero D negativo con baja probabilidad clínica sí ayuda a descartar TEP</p>
          </li>
          <li>
            <p>En el adulto mayor, revisar siempre polifarmacia como posible causa antes de atribuir el cuadro solo a "edad" <ChapterRefs to={['c18-s7']} /></p>
          </li>
          <li>
            <p>La bacteriuria asintomática no se trata como ITU — evitar sobrediagnóstico y sobretratamiento <ChapterRefs to={['c18-s3']} /></p>
          </li>
          <li>
            <p>Diferenciar causas ginecológicas y obstétricas en toda mujer en edad fértil con dolor abdominal o pélvico <ChapterRefs to={['c7-s1', 'c16-s6']} /></p>
          </li>
        </ul>
        <Callout type="perla">
          <p><strong>Perla de fase:</strong> el examen o score que más cambia la conducta es el que se debe priorizar primero — no todos los exámenes disponibles aportan lo mismo a la decisión clínica inmediata.</p>
        </Callout>
      </Section>
      <Section id="c21-s3" title="FASE 3 — Tratamiento definitivo, conducta y disposición">
        <p><strong>Objetivo:</strong> tratar la causa identificada, decidir el destino del paciente (alta, hospitalización, UCI, pabellón) y asegurar continuidad de cuidado.</p>
        <h3>3.1 Tratamiento dirigido a la etiología</h3>
        <ul>
          <li>
            <p>Reperfusión (angioplastía/trombolisis) en SCACEST; doble antiagregación y anticoagulación en SCASEST <ChapterRefs to={['c5-s1', 'c10-s1', 'c19-s1']} /></p>
          </li>
          <li>
            <p>Trombolisis/trombectomía en ACV isquémico dentro de ventana; control estricto de PA en ACV hemorrágico <ChapterRefs to={['c14-s1']} /></p>
          </li>
          <li>
            <p>Antibiótico precoz (primera hora) en sepsis y meningitis bacteriana sospechada; nunca retrasar por esperar exámenes <ChapterRefs to={['c6-s5', 'c10-s8', 'c12-s3']} /></p>
          </li>
          <li>
            <p>Corrección farmacológica escalonada del dolor según intensidad y causa (escalera analgésica, bloqueos cuando corresponda) <ChapterRefs to={['c8-s1']} /></p>
          </li>
          <li>
            <p>Manejo específico por tipo de shock: volumen y control del sangrado en hipovolémico, vasopresor en distributivo, tratar la causa en obstructivo y cardiogénico <ChapterRefs to={['c11-s1']} /></p>
          </li>
          <li>
            <p>Corrección gradual (nunca rápida) de hiponatremia y de trastornos hidroelectrolíticos en el adulto mayor <ChapterRefs to={['c13-s6', 'c18-s8']} /></p>
          </li>
        </ul>
        <h3>3.2 Criterios de disposición</h3>
        <ul>
          <li>
            <p><strong>Alta con control ambulatorio:</strong> cuadro de bajo riesgo por score validado, causa reversible corregida, tolerancia oral adecuada, red de apoyo y comprensión de signos de alarma</p>
          </li>
          <li>
            <p><strong>Hospitalización en sala:</strong> riesgo intermedio, necesidad de tratamiento IV, estudio o vigilancia que no requiere monitorización invasiva</p>
          </li>
          <li>
            <p><strong>UCI/UTI:</strong> inestabilidad hemodinámica persistente, necesidad de ventilación mecánica o vasopresores, falla orgánica múltiple</p>
          </li>
          <li>
            <p><strong>Pabellón urgente:</strong> abdomen agudo quirúrgico, fractura de cadera (idealmente &lt;24-48 h), taponamiento cardíaco, hemorragia no controlada</p>
          </li>
        </ul>
        <h3>3.3 Antes de dar el alta — checklist final</h3>
        <ul>
          <li>
            <p>¿Se descartaron las causas graves relevantes para el síntoma guía (banderas rojas)?</p>
          </li>
          <li>
            <p>¿Se revisó y ajustó la polifarmacia, especialmente en el adulto mayor? <ChapterRefs to={['c18-s7']} /></p>
          </li>
          <li>
            <p>¿Se explicaron signos de alarma para reconsulta en lenguaje simple?</p>
          </li>
          <li>
            <p>¿Existe plan de seguimiento (control médico, especialista, programa de prevención de caídas, salud mental)?</p>
          </li>
          <li>
            <p>¿Se evaluó el riesgo suicida en todo paciente con síntomas depresivos o crisis vital, y se dejó plan claro si el riesgo es bajo-moderado? <ChapterRefs to={['c18-s9']} /></p>
          </li>
        </ul>
        <h3>3.4 Reglas de oro de esta fase</h3>
        <ul>
          <li>
            <p>La cirugía o el tratamiento definitivo precoz mejora el pronóstico más que "optimizar" indefinidamente a un paciente frágil (ej. fractura de cadera) <ChapterRefs to={['c18-s6']} /></p>
          </li>
          <li>
            <p>Nunca cardiovertir electivamente sin definir el riesgo embólico y el tiempo de evolución <ChapterRefs to={['c19-s3']} /></p>
          </li>
          <li>
            <p>El alta nunca es solo "ausencia de hallazgos" — es un plan activo de seguimiento y prevención</p>
          </li>
        </ul>
        <Callout type="perla">
          <p><strong>Perla de fase:</strong> un buen tratamiento mal comunicado en el alta fracasa igual que un mal tratamiento — la disposición y la educación al paciente son parte del acto médico, no un trámite administrativo.</p>
        </Callout>
      </Section>
      <Section id="c21-s4" title="Cuadro-resumen de las tres fases">
        <Table>
          <thead>
            <tr>
              <th>Fase</th>
              <th>Pregunta central</th>
              <th>Acción típica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Estabilización</strong></td>
              <td>¿Qué puede matar en minutos?</td>
              <td>ABCDE, códigos de activación, tratar antes de diagnosticar por completo</td>
            </tr>
            <tr>
              <td><strong>2. Diagnóstico dirigido</strong></td>
              <td>¿Cuál es la causa más probable y de mayor riesgo?</td>
              <td>Anamnesis/examen dirigidos, scores de estratificación, estudio de alto rendimiento</td>
            </tr>
            <tr>
              <td><strong>3. Tratamiento y disposición</strong></td>
              <td>¿Cómo se trata y dónde debe continuar el paciente?</td>
              <td>Tratamiento etiológico, definición de destino, checklist de alta</td>
            </tr>
          </tbody>
        </Table>
        <p><em>Manual de bolsillo — Capítulo 20: Resumen importante. Este capítulo integra en tres fases de razonamiento clínico el contenido completo de los Capítulos 1 a 19. No sustituye el detalle clínico, diagnóstico y terapéutico de cada capítulo específico, y debe usarse junto con los protocolos institucionales y normas MINSAL vigentes.</em></p>
      </Section>
    </>
  )
}

import Callout from '../../components/content/Callout.jsx'
import Flow, { FlowStep } from '../../components/content/Flow.jsx'
import Section from '../../components/content/Section.jsx'
import Table from '../../components/content/Table.jsx'

// Capítulo 12 · Sepsis y shock séptico — Guías SOCHIMI
export default function Capitulo12() {
  return (
    <>
      <p>Manejo inicial de la sepsis según las <strong>Recomendaciones SOCHIMI para el Manejo Inicial de la Sepsis</strong> (Sociedad Chilena de Medicina Intensiva, documento de consenso, Revista Chilena de Medicina Intensiva 2017; 32(2):107-126), complementadas con la actualización internacional <strong>Surviving Sepsis Campaign 2026</strong> (SCCM/ESICM, publicada en marzo de 2026).</p>
      <Callout type="alerta">
        <p><strong>Mensaje central SOCHIMI:</strong> la sepsis y el shock séptico son emergencias médicas. Una vez identificados se debe iniciar de inmediato el <strong>Enfrentamiento Operativo de la Reanimación</strong>, sin esperar exámenes ni traslado.</p>
      </Callout>
      <Section id="c12-s1" title="1. Definiciones (Sepsis-3)">
        <Table>
          <thead>
            <tr>
              <th>Término</th>
              <th>Definición operativa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Sepsis</strong></td>
              <td>Disfunción orgánica que amenaza la vida, causada por una respuesta desregulada del huésped a la infección. Operativamente: infección sospechada o confirmada + aumento agudo del SOFA ≥2 puntos</td>
            </tr>
            <tr>
              <td><strong>Shock séptico</strong></td>
              <td>Subgrupo de sepsis con alteraciones circulatorias y metabólicas graves: necesidad de vasopresores para mantener <strong>PAM ≥65 mmHg</strong> y <strong>lactato &gt;2 mmol/L</strong> pese a una reanimación con volumen adecuada (mortalidad &gt;40%)</td>
            </tr>
            <tr>
              <td><strong>qSOFA</strong></td>
              <td>FR ≥22/min · alteración de conciencia (Glasgow &lt;15) · PAS ≤100 mmHg. ≥2 = alto riesgo de mal pronóstico. <strong>No</strong> sirve para descartar sepsis</td>
            </tr>
            <tr>
              <td><strong>SIRS</strong></td>
              <td>≥2 de: T° &gt;38 °C o &lt;36 °C · FC &gt;90 · FR &gt;20 o PaCO₂ &lt;32 mmHg · leucocitos &gt;12.000, &lt;4.000 o &gt;10% baciliformes</td>
            </tr>
          </tbody>
        </Table>
        <h3>Tabla SOFA resumida</h3>
        <Table>
          <thead>
            <tr>
              <th>Sistema</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Respiratorio PaO₂/FiO₂</td>
              <td>≥400</td>
              <td>&lt;400</td>
              <td>&lt;300</td>
              <td>&lt;200 con soporte ventilatorio</td>
              <td>&lt;100 con soporte ventilatorio</td>
            </tr>
            <tr>
              <td>Coagulación plaquetas (×10³/µL)</td>
              <td>≥150</td>
              <td>&lt;150</td>
              <td>&lt;100</td>
              <td>&lt;50</td>
              <td>&lt;20</td>
            </tr>
            <tr>
              <td>Hígado bilirrubina (mg/dL)</td>
              <td>&lt;1,2</td>
              <td>1,2-1,9</td>
              <td>2,0-5,9</td>
              <td>6,0-11,9</td>
              <td>≥12</td>
            </tr>
            <tr>
              <td>Cardiovascular</td>
              <td>PAM ≥70</td>
              <td>PAM &lt;70</td>
              <td>Dopamina &lt;5 o dobutamina</td>
              <td>Dopamina 5,1-15 o NA ≤0,1 mcg/kg/min</td>
              <td>Dopamina &gt;15 o NA &gt;0,1 mcg/kg/min</td>
            </tr>
            <tr>
              <td>SNC Glasgow</td>
              <td>15</td>
              <td>13-14</td>
              <td>10-12</td>
              <td>6-9</td>
              <td>&lt;6</td>
            </tr>
            <tr>
              <td>Renal creatinina (mg/dL) o diuresis</td>
              <td>&lt;1,2</td>
              <td>1,2-1,9</td>
              <td>2,0-3,4</td>
              <td>3,5-4,9 o &lt;500 mL/día</td>
              <td>≥5,0 o &lt;200 mL/día</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section id="c12-s2" title="2. Reconocimiento precoz — sugerencias SOCHIMI">
        <ul>
          <li>En pacientes con <strong>criterios SIRS y sospecha de infección</strong>, iniciar de inmediato el Enfrentamiento Operativo de la Reanimación</li>
          <li>En esos pacientes, aplicar <strong>qSOFA o SOFA</strong> para buscar disfunción orgánica</li>
          <li>En pacientes con <strong>disfunción orgánica sin causa clara</strong>, aunque no tengan SIRS, sospechar sepsis e iniciar el enfrentamiento operativo</li>
          <li><strong>No</strong> usar SOFA ni qSOFA <em>a priori</em> para decidir si hay sospecha de infección ni para decidir el inicio de la reanimación</li>
        </ul>
        <Callout type="nuevo">
          <p><strong>Actualización SSC 2026:</strong> para tamizaje intrahospitalario se recomienda (fuerte, certeza moderada) usar <strong>NEWS, NEWS2, MEWS o SIRS en lugar de qSOFA</strong> como herramienta única. Ningún biomarcador aislado confirma ni descarta sepsis.</p>
        </Callout>
      </Section>
      <Section id="c12-s3" title="3. Paquete (bundle) SOCHIMI para el manejo inicial">
        <p>El tiempo cero es el <strong>triaje en urgencia</strong> (o la primera anotación clínica con todos los elementos de sepsis si el paciente está en otro lugar).</p>
        <Table>
          <thead>
            <tr>
              <th>Plazo</th>
              <th>Medida</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Dentro de 1 hora</strong></td>
              <td>Primera dosis de <strong>cada</strong> antibiótico empírico de amplio espectro desde que se sospecha o reconoce sepsis o shock séptico (evidencia moderada)</td>
            </tr>
            <tr>
              <td><strong>Dentro de 3 horas</strong></td>
              <td>1. Medir <strong>lactato</strong> (o déficit de base si no hay lactato)<br />2. <strong>Hemocultivos</strong> (al menos 2) antes del antibiótico, sin retrasar su primera dosis más de 45 minutos<br />3. <strong>Antibióticos IV</strong> de amplio espectro precoces; en shock séptico, esquema combinado; iniciar con dosis máximas recomendadas<br />4. <strong>Cristaloides 30 mL/kg</strong> si hay hipotensión y/o lactato &gt;2 mmol/L</td>
            </tr>
            <tr>
              <td><strong>Dentro de 6 horas</strong></td>
              <td>5. <strong>Noradrenalina</strong> si la hipotensión persiste tras fluidos, meta <strong>PAM 65-70 mmHg</strong><br />6. Si hay hipotensión persistente y/o lactato &gt;2 mmol/L: <strong>reevaluar volemia y perfusión</strong> con evaluación clínica seriada (complementar con PVC, SvcO₂, diferencia venoarterial de CO₂, ecocardiografía, prueba de respuesta a fluidos)<br />7. <strong>Repetir lactato</strong> si el inicial era &gt;2 mmol/L</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section id="c12-s4" title="4. Recomendaciones SOCHIMI por área (con calidad de evidencia)">
        <h3>Lactato</h3>
        <Table>
          <thead>
            <tr>
              <th>Recomendación</th>
              <th>Evidencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Medir lactato en todo paciente con sospecha de sepsis, independiente de la presión arterial</td>
              <td>Moderada</td>
            </tr>
            <tr>
              <td>Pacientes con lactato elevado deben manejarse en una Unidad de Paciente Crítico (UPC)</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>Si no se dispone de lactato, usar el déficit de base para estratificar gravedad</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>Medición seriada de lactato para guiar la fase inicial de la reanimación</td>
              <td>Moderada</td>
            </tr>
          </tbody>
        </Table>
        <h3>Cultivos</h3>
        <Table>
          <thead>
            <tr>
              <th>Recomendación</th>
              <th>Evidencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tomar cultivos de todos los sitios probables de infección</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>Incluir siempre al menos dos hemocultivos (≥10 mL por frasco, sin esperar fiebre)</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>La toma de cultivos no debe retrasar más de 45 minutos la primera dosis de antibiótico</td>
              <td>Baja</td>
            </tr>
          </tbody>
        </Table>
        <h3>Antibióticos</h3>
        <Table>
          <thead>
            <tr>
              <th>Recomendación</th>
              <th>Evidencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primera dosis de cada antibiótico empírico dentro de la primera hora</td>
              <td>Moderada</td>
            </tr>
            <tr>
              <td>Esquema de amplio espectro que cubra todos los focos y microorganismos potenciales</td>
              <td>Moderada</td>
            </tr>
            <tr>
              <td>Dosificación según farmacocinética/farmacodinamia; primera dosis máxima, sin ajuste renal</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>En shock séptico, terapia combinada con fármacos de distinto mecanismo de acción</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>Evaluación diaria y desescalamiento según cultivos y evolución</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>Duración habitual de 7 a 10 días (algunos casos requieren más)</td>
              <td>Baja</td>
            </tr>
          </tbody>
        </Table>
        <h3>Fluidos</h3>
        <Table>
          <thead>
            <tr>
              <th>Recomendación</th>
              <th>Evidencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Al menos <strong>30 mL/kg</strong> de fluidos en las primeras 3 horas (≈2 L en un adulto de 70 kg)</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td><strong>Cristaloides</strong> como fluido de primera elección (suero fisiológico 0,9% o Ringer lactato)</td>
              <td>Moderada</td>
            </tr>
            <tr>
              <td><strong>No usar almidones</strong></td>
              <td>Alta</td>
            </tr>
            <tr>
              <td>Evitar gelatinas</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>Albúmina: considerarla si se han requerido &gt;3-4 L de cristaloides, hay permeabilidad capilar persistentemente aumentada o albúmina &lt;2,2 g/dL</td>
              <td>Sin graduación</td>
            </tr>
            <tr>
              <td>Tras los 30 mL/kg, detener la infusión continua y decidir más volumen según examen físico y monitorización</td>
              <td>Sin graduación</td>
            </tr>
          </tbody>
        </Table>
        <h3>Presión arterial y vasoactivos</h3>
        <Table>
          <thead>
            <tr>
              <th>Recomendación</th>
              <th>Evidencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monitorización continua de PAM con línea arterial en todo shock séptico</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>Meta de <strong>PAM 65-70 mmHg</strong> en la fase inicial</td>
              <td>Moderada</td>
            </tr>
            <tr>
              <td><strong>Noradrenalina</strong> como vasopresor de primera elección</td>
              <td>Moderada</td>
            </tr>
            <tr>
              <td>Adrenalina como segunda elección si no hay noradrenalina</td>
              <td>Moderada</td>
            </tr>
            <tr>
              <td>Dopamina, vasopresina o terlipresina como vasopresor inicial solo en casos excepcionales</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>No usar fenilefrina como primera línea</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td><strong>Dobutamina</strong> como inótropo de elección en disfunción miocárdica con bajo débito</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>Milrinona en casos seleccionados o ante efectos adversos de dobutamina</td>
              <td>Baja</td>
            </tr>
          </tbody>
        </Table>
        <h3>Reevaluación de la perfusión</h3>
        <Table>
          <thead>
            <tr>
              <th>Recomendación</th>
              <th>Evidencia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Guiar el aporte adicional de fluidos por evaluación clínica seriada de hemodinamia y perfusión: <strong>tiempo de llene capilar</strong>, diferencia de temperatura central-periférica, score de moteado</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>Usar índices dinámicos de respuesta a fluidos (elevación pasiva de piernas, variación de presión de pulso) y ecocardiografía si la clínica no define el tipo de shock</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>Transfundir glóbulos rojos solo con Hb &lt;7 g/dL, salvo IAM, hipoxemia grave o hemorragia aguda</td>
              <td>Alta</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section id="c12-s5" title="5. Tiempo de llene capilar: aporte chileno a la reanimación">
        <p>El ensayo <strong>ANDROMEDA-SHOCK</strong> (liderado por investigadores chilenos, 2019) comparó reanimar guiándose por el <strong>tiempo de llene capilar</strong> cada 30 minutos versus por el lactato cada 2 horas durante 8 horas. La mortalidad a 28 días fue 34,9% vs 43,4%, diferencia no significativa, con menor disfunción orgánica a las 72 h en el grupo de llene capilar. Por eso el llene capilar es una alternativa válida, rápida y barata, especialmente en servicios sin acceso inmediato a lactato.</p>
        <p><strong>Técnica estandarizada:</strong></p>
        <ol type="1">
          <li>Presionar con un portaobjetos de vidrio la cara ventral de la falange distal del dedo índice derecho hasta que el lecho se ponga blanco</li>
          <li>Mantener la presión 10 segundos</li>
          <li>Soltar y cronometrar el retorno del color: <strong>normal ≤3 segundos</strong></li>
          <li>Si está alterado: evaluar respuesta a fluidos y repetir cada 30 minutos</li>
        </ol>
        <Callout type="nuevo">
          <p><strong>SSC 2026:</strong> sugiere usar el tiempo de llene capilar para guiar la reanimación como complemento de otras medidas de perfusión (condicional, certeza baja).</p>
        </Callout>
      </Section>
      <Section id="c12-s6" title="6. Algoritmo operativo de reanimación (primeras 6 horas)">
        <Flow>
          <FlowStep step={1} label="0 min · Sospecha">
            SIRS o disfunción orgánica + posible infección → activar Código Sepsis
          </FlowStep>
          <FlowStep step={2} label="0-45 min">
            2 hemocultivos + cultivos del foco · lactato · gases · hemograma, PCR, creatinina, bilirrubina, plaquetas, TP
          </FlowStep>
          <FlowStep step={3} label="≤ 1 h">
            Antibiótico IV de amplio espectro a dosis máxima · iniciar cristaloides
          </FlowStep>
          <FlowStep step={4} label="≤ 3 h">
            30 mL/kg si hipotensión o lactato &gt;2 · reevaluar tras cada bolo de 250-500 mL
          </FlowStep>
          <FlowStep step={5} label="≤ 6 h">
            PAM &lt;65 persistente → noradrenalina · llene capilar c/30 min · lactato de control · línea arterial · control del foco · UPC
          </FlowStep>
        </Flow>
      </Section>
      <Section id="c12-s7" title="7. Vasoactivos: dosis y preparación">
        <Table>
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Preparación habitual</th>
              <th>Dosis</th>
              <th>Comentario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Noradrenalina</strong></td>
              <td>4 mg en 250 mL SG5% o SF (16 mcg/mL); 8 mg/250 mL en doble concentración</td>
              <td>0,05-0,5 mcg/kg/min (puede requerir &gt;1)</td>
              <td>Primera línea. Puede iniciarse por vía periférica de buen calibre y proximal, con vigilancia del sitio, mientras se instala un CVC</td>
            </tr>
            <tr>
              <td><strong>Vasopresina</strong></td>
              <td>20 U en 100 mL (0,2 U/mL)</td>
              <td>0,03 U/min (dosis fija)</td>
              <td>Agregar cuando la noradrenalina va en aumento (habitualmente 0,25-0,5 mcg/kg/min)</td>
            </tr>
            <tr>
              <td><strong>Adrenalina</strong></td>
              <td>4 mg en 250 mL (16 mcg/mL)</td>
              <td>0,05-0,5 mcg/kg/min</td>
              <td>Segunda elección (SOCHIMI) o tercer fármaco si no se logra la meta; eleva el lactato</td>
            </tr>
            <tr>
              <td><strong>Dobutamina</strong></td>
              <td>250 mg en 250 mL (1 mg/mL)</td>
              <td>2,5-20 mcg/kg/min</td>
              <td>Disfunción miocárdica con hipoperfusión persistente pese a PAM adecuada</td>
            </tr>
            <tr>
              <td><strong>Hidrocortisona</strong></td>
              <td>50 mg IV c/6 h o 200 mg/día en infusión</td>
              <td>200 mg/día</td>
              <td>Shock que requiere noradrenalina ≥0,25 mcg/kg/min por ≥4 h (recomendación condicional)</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section id="c12-s8" title="8. Antibióticos empíricos según foco (orientación)">
        <p>Ajustar siempre a la epidemiología local, alergias, función renal (desde la segunda dosis) y protocolo PROA del centro.</p>
        <Table>
          <thead>
            <tr>
              <th>Foco</th>
              <th>Esquema empírico inicial</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Neumonía comunitaria grave</td>
              <td>Ceftriaxona 2 g IV c/24 h + azitromicina 500 mg IV c/24 h (o levofloxacino 750 mg IV c/24 h)</td>
            </tr>
            <tr>
              <td>Urinario (pielonefritis, urosepsis)</td>
              <td>Ceftriaxona 1-2 g IV c/24 h; con factores de riesgo de BLEE: ertapenem 1 g c/24 h o meropenem</td>
            </tr>
            <tr>
              <td>Intraabdominal comunitario</td>
              <td>Ceftriaxona 2 g IV c/24 h + metronidazol 500 mg IV c/8 h; grave: piperacilina-tazobactam 4,5 g IV c/6 h</td>
            </tr>
            <tr>
              <td>Piel y partes blandas / fascitis necrotizante</td>
              <td>Piperacilina-tazobactam 4,5 g c/6 h + clindamicina 900 mg IV c/8 h ± vancomicina; <strong>cirugía urgente</strong></td>
            </tr>
            <tr>
              <td>Meningitis bacteriana</td>
              <td>Ceftriaxona 2 g IV c/12 h + vancomicina; agregar ampicilina 2 g c/4 h si &gt;50 años o inmunosuprimido; dexametasona 10 mg c/6 h antes o con la primera dosis</td>
            </tr>
            <tr>
              <td>Neutropenia febril</td>
              <td>Cefepime 2 g IV c/8 h o piperacilina-tazobactam 4,5 g c/6 h (± vancomicina si catéter, piel o inestabilidad)</td>
            </tr>
            <tr>
              <td>Asociada a atención de salud / riesgo de multirresistentes</td>
              <td>Meropenem 1-2 g IV c/8 h + vancomicina carga 25-30 mg/kg</td>
            </tr>
            <tr>
              <td>Foco desconocido con shock</td>
              <td>Cobertura amplia combinada según riesgo local (p.&nbsp;ej., piperacilina-tazobactam o meropenem + vancomicina)</td>
            </tr>
          </tbody>
        </Table>
        <Callout type="nuevo">
          <p><strong>SSC 2026 — infusión prolongada:</strong> para betalactámicos (piperacilina-tazobactam, cefepime, meropenem) se recomienda una dosis de carga seguida de <strong>infusión prolongada</strong> (3-4 h o continua) en vez de bolos (recomendación fuerte, certeza moderada).</p>
        </Callout>
      </Section>
      <Section id="c12-s9" title="9. Control del foco">
        <ul>
          <li>Buscar activamente el foco con clínica, laboratorio e imágenes (ecografía al lado de la cama, TAC según sospecha)</li>
          <li>Definir rápidamente si requiere drenaje percutáneo o cirugía: absceso, colangitis, empiema, fascitis, isquemia intestinal, obstrucción urinaria infectada</li>
          <li>Retirar catéteres o dispositivos sospechosos una vez obtenido otro acceso vascular</li>
        </ul>
      </Section>
      <Section id="c12-s10" title="10. Qué cambia con Surviving Sepsis Campaign 2026">
        <Table>
          <thead>
            <tr>
              <th>Tema</th>
              <th>Recomendación 2026</th>
              <th>Fuerza</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tipo de cristaloide</td>
              <td><strong>Balanceados</strong> (Ringer lactato, Plasma-Lyte) por sobre SF 0,9%; SF si hay TEC</td>
              <td>Condicional</td>
            </tr>
            <tr>
              <td>Volumen inicial</td>
              <td>≥30 mL/kg en las primeras 3 h en hipoperfusión o shock; luego individualizar</td>
              <td>Condicional</td>
            </tr>
            <tr>
              <td>Guía de fluidos</td>
              <td>Medidas dinámicas (elevación pasiva de piernas, variación de presión de pulso) por sobre examen o medidas estáticas</td>
              <td>Condicional</td>
            </tr>
            <tr>
              <td>Albúmina</td>
              <td>Cristaloides solos en vez de agregar albúmina de rutina</td>
              <td>Condicional</td>
            </tr>
            <tr>
              <td>Inicio de vasopresor</td>
              <td>Iniciar por <strong>vía periférica</strong> en vez de esperar un acceso central</td>
              <td>Condicional</td>
            </tr>
            <tr>
              <td>Meta de PAM</td>
              <td>65 mmHg (±5); en <strong>≥65 años, 60-65 mmHg</strong></td>
              <td>Fuerte / condicional</td>
            </tr>
            <tr>
              <td>Vasopresina</td>
              <td>Agregarla cuando la dosis de noradrenalina va en aumento</td>
              <td>Condicional</td>
            </tr>
            <tr>
              <td>Antibiótico</td>
              <td>Inmediato, idealmente &lt;1 h en shock o sepsis probable; en sepsis solo posible sin shock, evaluación rápida y antibiótico dentro de 3 h si persiste la sospecha</td>
              <td>Fuerte / condicional</td>
            </tr>
            <tr>
              <td>Procalcitonina</td>
              <td>No para decidir el inicio; sí para ayudar a suspender cuando la duración no es clara</td>
              <td>Condicional</td>
            </tr>
            <tr>
              <td>Corticoides</td>
              <td>Hidrocortisona IV en shock séptico</td>
              <td>Condicional</td>
            </tr>
            <tr>
              <td>Remoción de fluidos</td>
              <td>Tras la fase aguda: diuréticos y, si no basta, ultrafiltración</td>
              <td>Condicional</td>
            </tr>
            <tr>
              <td>Ingreso a UCI</td>
              <td>Dentro de 6 horas en quien lo requiera</td>
              <td>Condicional</td>
            </tr>
            <tr>
              <td><strong>En contra</strong></td>
              <td>Almidones (fuerte), gelatinas, vitamina C IV, vitamina D, inmunoglobulinas, purificación sanguínea, terlipresina, levosimendán, bicarbonato para mejorar hemodinamia, antipiréticos para mejorar desenlaces, probióticos, antifúngicos empíricos de rutina</td>
              <td>—</td>
            </tr>
          </tbody>
        </Table>
        <Callout type="perla">
          <p>la diferencia principal entre SOCHIMI 2017 y SSC 2026 está en la <strong>meta de PAM</strong> (SOCHIMI 65-70; SSC 65, y 60-65 en mayores de 65 años), la preferencia por <strong>cristaloides balanceados</strong> y el inicio <strong>periférico precoz</strong> de noradrenalina. El núcleo es idéntico: reconocer temprano, cultivos sin retrasar el antibiótico, antibiótico en la primera hora, 30 mL/kg, noradrenalina y reevaluación seriada de la perfusión.</p>
        </Callout>
        <Callout type="perla">
          <p>“más fluidos” no es sinónimo de “mejor reanimación”. Después de los primeros 30 mL/kg, cada bolo debe responder a una pregunta: ¿el paciente responde a volumen y lo necesita? El llene capilar, el lactato y la ecografía orientan la decisión.</p>
        </Callout>
      </Section>
    </>
  )
}

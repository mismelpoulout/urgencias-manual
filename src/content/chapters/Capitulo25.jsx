import Callout from '../../components/content/Callout.jsx'
import Connections from '../../components/content/Connections.jsx'
import EcgTrace from '../../components/content/EcgTrace.jsx'
import Flow, { FlowStep } from '../../components/content/Flow.jsx'
import { EcgGrid } from '../../components/content/Grids.jsx'
import Section from '../../components/content/Section.jsx'
import Table from '../../components/content/Table.jsx'

// Capítulo 24 · Intoxicaciones y autólisis fallidas (el id c25 es el ancla permanente, no el número del capítulo)

const PARTS = [
  ['clinica', 'Clínica'],
  ['manejo', 'Manejo y tratamiento'],
  ['conducta', 'Conducta'],
  ['evolucion', 'Evolución'],
]

// Ficha de un cuadro: las cuatro partes en el mismo orden y los enlaces junto a la conducta.
function Picture({ title, links, ...parts }) {
  return (
    <>
      {title && <h3>{title}</h3>}
      {PARTS.map(([key, label]) => (
        <div key={key}>
          <h4>{label}</h4>
          <ul>
            {parts[key].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          {key === 'conducta' && <Connections {...links} />}
        </div>
      ))}
    </>
  )
}

export default function Capitulo25() {
  return (
    <>
      <p>Clínica, manejo, tratamiento, conducta y evolución de las intoxicaciones agudas del adulto y de la persona que sobrevive a un intento de autólisis. Primero se estabiliza, luego se identifica el tóxico y, una vez fuera de riesgo, se evalúa siempre la salud mental.</p>
      <Callout type="alerta">
        <p><strong>Capítulo pendiente de validación clínica y toxicológica.</strong> Dosis orientativas para adultos. Ante toda intoxicación relevante consultar al <strong>CITUC: +56 2 2635 3800</strong>. Prevención del suicidio en Chile: línea <strong>*4141</strong>. Emergencias: SAMU <strong>131</strong>.</p>
      </Callout>

      <Section id="c25-s1" title="1. Enfoque inicial del paciente intoxicado">
        <Flow>
          <FlowStep step={1} label="Proteger">
            Elementos de protección y descontaminación si hay plaguicidas, gases o químicos
          </FlowStep>
          <FlowStep step={2} label="ABCDE">
            Vía aérea, ventilación, circulación, Glasgow, pupilas, temperatura y <strong>glicemia capilar</strong>
          </FlowStep>
          <FlowStep step={3} label="Antídotos urgentes">
            Glucosa (con tiamina si hay alcohol o desnutrición), naloxona si hay depresión respiratoria, oxígeno al 100% si hay humo o gases
          </FlowStep>
          <FlowStep step={4} label="Identificar">
            Qué, cuánto, cuándo, vía, mezclas e intención; revisar envases, recetas y testigos
          </FlowStep>
          <FlowStep step={5} label="Decidir">
            Descontaminación, antídoto, eliminación, tiempo de observación, destino y salud mental
          </FlowStep>
        </Flow>
        <h3>Estudios iniciales</h3>
        <ul>
          <li><strong>ECG a todos</strong> los intoxicados y monitor si hay cardiotóxicos o compromiso de conciencia</li>
          <li>Gases, electrolitos, creatinina, glicemia, perfil hepático, TP/INR, CK, lactato y β-hCG en mujeres en edad fértil</li>
          <li><strong>Paracetamolemia en toda ingesta con intención de autólisis</strong>, aunque no la refiera; salicilemia, litemia, alcoholemia y otros niveles según sospecha</li>
          <li><strong>Anión gap</strong> = Na − (Cl + HCO₃), normal 8-12. <strong>Brecha osmolar</strong> = osmolalidad medida − calculada (2 × Na + glicemia/18 + BUN/2,8); &gt;10 sugiere alcoholes, aunque un valor normal no los descarta</li>
          <li>El tamizaje de drogas en orina rara vez cambia la conducta inicial</li>
          <li><strong>Imagen:</strong> radiografía de tórax si hay aspiración o hipoxemia; de abdomen ante hierro, comprimidos radiopacos o paquetes; TAC de cerebro si hay trauma, focalidad o coma no explicado</li>
        </ul>
        <Callout type="perla">
          <p>No usar flumazenil como parte de un “cóctel del coma”. Y no atribuir el compromiso de conciencia al tóxico sin descartar hipoglicemia, trauma, infección y lesión cerebral.</p>
        </Callout>
        <Connections
          drugs={['glucosa', 'tiamina', 'naloxona']}
          imaging={['c20-s3', 'c20-s4', 'c20-s5']}
          ecg={['c20-s1']}
          scores={['glasgow']}
          links={['c3-s1', 'c10-s5', 'c10-s6']}
        />
      </Section>

      <Section id="c25-s2" title="2. Toxíndromes">
        <Table>
          <thead>
            <tr>
              <th>Toxíndrome</th>
              <th>Hallazgos</th>
              <th>Causas frecuentes</th>
              <th>Primera medida</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Opioide</strong></td>
              <td>Miosis, hipoventilación, depresión de conciencia</td>
              <td>Morfina, tramadol, metadona, fentanilo</td>
              <td>Ventilar y naloxona</td>
            </tr>
            <tr>
              <td><strong>Sedante-hipnótico</strong></td>
              <td>Somnolencia, disartria, ataxia, signos vitales casi normales</td>
              <td>Benzodiacepinas, zolpidem, barbitúricos</td>
              <td>Soporte de vía aérea</td>
            </tr>
            <tr>
              <td><strong>Colinérgico</strong></td>
              <td>Broncorrea, broncoespasmo, miosis, sudor, sialorrea, bradicardia, fasciculaciones</td>
              <td>Organofosforados, carbamatos</td>
              <td>Descontaminar y atropina</td>
            </tr>
            <tr>
              <td><strong>Anticolinérgico</strong></td>
              <td>Delirium, midriasis, piel seca y roja, taquicardia, fiebre, retención urinaria, íleo</td>
              <td>Antihistamínicos, tricíclicos, antipsicóticos</td>
              <td>Benzodiacepina, enfriar, ECG</td>
            </tr>
            <tr>
              <td><strong>Simpaticomimético</strong></td>
              <td>Agitación, midriasis, sudor, taquicardia, hipertensión, hipertermia</td>
              <td>Cocaína, anfetaminas, MDMA</td>
              <td>Benzodiacepinas y enfriamiento</td>
            </tr>
            <tr>
              <td><strong>Serotoninérgico</strong></td>
              <td>Clonus, hiperreflexia, agitación, sudor, diarrea, hipertermia; inicio en horas</td>
              <td>ISRS, IRSN, tramadol, linezolid, azul de metileno</td>
              <td>Suspender y benzodiacepinas</td>
            </tr>
            <tr>
              <td><strong>Neuroléptico maligno</strong></td>
              <td>Rigidez en tubo de plomo, hipertermia, compromiso de conciencia, CK alta; inicio en días</td>
              <td>Antipsicóticos, suspensión de dopaminérgicos</td>
              <td>Suspender, enfriar, UCI</td>
            </tr>
          </tbody>
        </Table>
      </Section>

      <Section id="c25-s3" title="3. Descontaminación, eliminación y antídotos">
        <ul>
          <li><strong>Piel y ojos:</strong> retirar la ropa e irrigar abundantemente con agua o suero</li>
          <li><strong>Carbón activado</strong> 1 g/kg (≈50 g): idealmente en la primera o segunda hora, con vía aérea protegida; más tarde si hay comprimidos de liberación prolongada o ingesta masiva</li>
          <li><strong>No sirve</strong> para hierro, litio, metales, alcoholes ni cianuro de acción rápida. <strong>Contraindicado</strong> con cáusticos, hidrocarburos, vía aérea no protegida, íleo o perforación</li>
          <li><strong>Dosis múltiples</strong> (25 g cada 4 horas): carbamazepina, fenobarbital, teofilina, dapsona o quinina en intoxicación grave</li>
          <li><strong>Irrigación intestinal total</strong> con polietilenglicol 1,5-2 L/h: hierro, litio, liberación prolongada o paquetes de drogas</li>
          <li><strong>No</strong> inducir el vómito ni neutralizar. El lavado gástrico no se usa de rutina</li>
          <li><strong>Alcalinización urinaria:</strong> salicilatos. <strong>Hemodiálisis:</strong> salicilatos, litio, metanol, etilenglicol, valproato, metformina, teofilina y carbamazepina en casos graves</li>
        </ul>
        <Table>
          <thead>
            <tr>
              <th>Tóxico</th>
              <th>Antídoto o tratamiento específico</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Paracetamol</td><td>N-acetilcisteína</td></tr>
            <tr><td>Opioides</td><td>Naloxona</td></tr>
            <tr><td>Benzodiacepinas (casos seleccionados)</td><td>Flumazenil</td></tr>
            <tr><td>Tricíclicos y bloqueadores de canales de sodio</td><td>Bicarbonato de sodio</td></tr>
            <tr><td>Betabloqueadores y calcioantagonistas</td><td>Calcio, insulina en dosis altas con glucosa, glucagón, vasopresores</td></tr>
            <tr><td>Digoxina</td><td>Anticuerpos antidigoxina (Fab)</td></tr>
            <tr><td>Organofosforados y carbamatos</td><td>Atropina; pralidoxima en organofosforados</td></tr>
            <tr><td>Metanol y etilenglicol</td><td>Fomepizol (alternativa: etanol)</td></tr>
            <tr><td>Monóxido de carbono</td><td>Oxígeno al 100% o hiperbárico</td></tr>
            <tr><td>Cianuro</td><td>Hidroxocobalamina</td></tr>
            <tr><td>Metahemoglobinemia</td><td>Azul de metileno</td></tr>
            <tr><td>Anestésicos locales</td><td>Emulsión lipídica 20%</td></tr>
            <tr><td>Hierro</td><td>Deferoxamina</td></tr>
            <tr><td>Isoniazida</td><td>Piridoxina 1 g por gramo ingerido (5 g si se desconoce)</td></tr>
            <tr><td>Sulfonilureas</td><td>Glucosa y octreótido</td></tr>
            <tr><td>Valproato</td><td>L-carnitina</td></tr>
            <tr><td>Síndrome serotoninérgico</td><td>Benzodiacepinas; ciproheptadina</td></tr>
            <tr><td>Síndrome neuroléptico maligno</td><td>Dantroleno o bromocriptina en casos graves</td></tr>
          </tbody>
        </Table>
        <Connections
          drugs={['carbon-activado', 'n-acetilcisteina', 'naloxona', 'flumazenil', 'bicarbonato', 'atropina', 'pralidoxima', 'fomepizol', 'hidroxocobalamina', 'azul-metileno', 'emulsion-lipidica', 'deferoxamina', 'octreotido', 'anticuerpos-antidigoxina', 'etanol', 'piridoxina', 'levocarnitina', 'ciproheptadina', 'bromocriptina']}
          links={['c22-antidotos', 'c22-mezclas']}
        />
      </Section>

      <Section id="c25-s4" title="4. Electrocardiograma en el intoxicado">
        <Table>
          <thead>
            <tr>
              <th>Hallazgo</th>
              <th>Sospechar</th>
              <th>Conducta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>QRS &gt;100 ms</strong> o R terminal en aVR</td>
              <td>Tricíclicos, antiarrítmicos clase I, carbamazepina, cocaína, antihistamínicos</td>
              <td>Bicarbonato 1-2 mEq/kg en bolos hasta estrechar el QRS</td>
            </tr>
            <tr>
              <td><strong>QTc &gt;500 ms</strong></td>
              <td>Antipsicóticos, citalopram, metadona, macrólidos, antiarrítmicos</td>
              <td>Sulfato de magnesio 2 g, potasio 4,5-5 mEq/L, suspender fármacos que prolongan el QT</td>
            </tr>
            <tr>
              <td><strong>Bradicardia o bloqueo AV</strong></td>
              <td>Betabloqueadores, calcioantagonistas, digoxina, clonidina, colinérgicos</td>
              <td>Atropina y antídoto específico; marcapasos si no responde</td>
            </tr>
            <tr>
              <td><strong>Taquicardia sinusal</strong></td>
              <td>Anticolinérgicos, simpaticomiméticos, abstinencia, hipovolemia</td>
              <td>Fluidos, benzodiacepinas, tratar la causa</td>
            </tr>
            <tr>
              <td><strong>Cambios del ST</strong></td>
              <td>Cocaína, monóxido de carbono, hipoxia, hipotensión</td>
              <td>Troponina y manejo como isquemia, tratando el tóxico</td>
            </tr>
            <tr>
              <td><strong>T picudas, QRS ancho</strong></td>
              <td>Hiperkalemia: digoxina aguda, rabdomiólisis, falla renal</td>
              <td>Medir potasio y tratar</td>
            </tr>
          </tbody>
        </Table>
        <EcgGrid>
          <EcgTrace type="tv" caption="Taquicardia de QRS ancho: en el intoxicado pensar en bloqueo de canales de sodio y administrar bicarbonato" />
          <EcgTrace type="bav3" caption="Bloqueo AV completo: pensar en betabloqueadores, calcioantagonistas o digoxina" />
        </EcgGrid>
        <Connections
          drugs={['bicarbonato', 'sulfato-magnesio', 'atropina', 'gluconato-calcio']}
          ecg={['c19-s6', 'c19-s8', 'c19-s9', 'c19-s1']}
          links={['c1-s4', 'c1-s5', 'c13-s1', 'c23-s2']}
        />
      </Section>

      <Section id="c25-s5" title="5. Paracetamol">
        <Picture
          clinica={[
            <><strong>0-24 h:</strong> asintomático o náuseas y vómitos</>,
            <><strong>24-72 h:</strong> dolor en hipocondrio derecho; suben transaminasas e INR</>,
            <><strong>72-96 h:</strong> daño máximo, ictericia, encefalopatía, hipoglicemia, falla renal</>,
            <>Dosis potencialmente tóxica en ingesta aguda: <strong>≥150 mg/kg o ≥7,5 g</strong></>,
          ]}
          manejo={[
            <>Paracetamolemia a las <strong>4 horas</strong> o apenas llegue si ya pasaron, y graficar en el nomograma de Rumack-Matthew (línea de tratamiento 150 mcg/mL a las 4 h)</>,
            <>Carbón activado si consulta dentro de las primeras 4 horas y la vía aérea es segura</>,
            <><strong>N-acetilcisteína</strong> si el nivel está sobre la línea. Iniciar sin esperar el resultado si no estará antes de 8 horas, la hora es desconocida con sospecha tóxica o ya hay daño hepático</>,
            <>Esquema IV: 150 mg/kg en 60 minutos, luego 50 mg/kg en 4 horas y 100 mg/kg en 16 horas</>,
            <>Reacción anafilactoide: pausar, antihistamínico y reiniciar más lento</>,
            <>El nomograma no sirve en ingestas repetidas o de hora desconocida: tratar si hay paracetamol detectable o transaminasas altas</>,
            <>Ingesta de alto riesgo (≥30 g o nivel sobre la línea de 300): consultar toxicología por dosis mayores, y hemodiálisis si hay coma y acidosis</>,
          ]}
          conducta={[
            <>Suspender la N-acetilcisteína solo con paracetamol &lt;10 mcg/mL, INR &lt;2, transaminasas normales o en descenso (25-50% desde el máximo) y paciente asintomático; si no, continuar</>,
            <>Contactar precozmente a un centro de trasplante si: pH &lt;7,30 tras reanimar, o la tríada INR &gt;6,5, creatinina &gt;3,4 mg/dL y encefalopatía grado III-IV (criterios de King’s College); lactato persistentemente &gt;3 es otra señal</>,
            <>Alta médica si el nivel está bajo la línea en una ingesta aguda con hora confiable; <strong>nunca</strong> sin evaluación de salud mental</>,
          ]}
          links={{ drugs: ['n-acetilcisteina', 'carbon-activado', 'ondansetron', 'vitamina-k'], imaging: ['c20-s5'], links: ['c25-s18'] }}
          evolucion={[
            <>Tratado antes de 8 horas, la hepatotoxicidad grave es rara</>,
            <>Quien sobrevive a la falla hepática sin trasplante suele recuperar el hígado por completo en semanas</>,
            <>Controlar transaminasas, INR, creatinina y glicemia cada 12-24 horas mientras estén alterados</>,
          ]}
        />
      </Section>

      <Section id="c25-s6" title="6. Benzodiacepinas e hipnóticos">
        <Picture
          clinica={[
            'Somnolencia, disartria, ataxia, hiporreflexia; coma y depresión respiratoria sobre todo si se asocian alcohol u opioides',
            'Un compromiso hemodinámico importante obliga a buscar otra sustancia',
          ]}
          manejo={[
            'Soporte: vía aérea, posición lateral, oxígeno, capnografía; intubar si no protege la vía aérea',
            <><strong>Flumazenil</strong> 0,2 mg IV titulando solo en sedación iatrogénica o ingesta pura sin riesgo. <strong>Contraindicado</strong> con uso crónico de benzodiacepinas, epilepsia, tricíclicos u otros proconvulsivantes o ECG alterado</>,
            'El carbón activado rara vez aporta y aumenta el riesgo de aspiración',
          ]}
          conducta={[
            'Observar al menos 6 horas y hasta recuperar el estado basal; más en mayores, hepatópatas o fármacos de vida media larga',
            'UCI si requiere ventilación o hay mezcla con depresores',
            'Realizar la entrevista de riesgo suicida cuando esté lúcido, no durante la sedación',
          ]}
          links={{ drugs: ['flumazenil', 'midazolam', 'diazepam', 'clonazepam', 'alprazolam', 'zolpidem'], ecg: ['c20-s1'], scores: ['glasgow', 'rass'], links: ['c3-s1', 'c25-s18'] }}
          evolucion={[
            'Habitualmente favorable con soporte',
            'Complicaciones: neumonía aspirativa, hipotermia, rabdomiólisis, lesiones por presión y abstinencia con convulsiones en usuarios crónicos',
          ]}
        />
      </Section>

      <Section id="c25-s7" title="7. Antidepresivos tricíclicos">
        <Picture
          clinica={[
            'Síndrome anticolinérgico, somnolencia, hipotensión, convulsiones, arritmias ventriculares y coma',
            'El deterioro puede ser brusco, habitualmente en las primeras 6 horas',
            <><strong>ECG:</strong> QRS &gt;100 ms predice convulsiones y &gt;160 ms arritmias; R terminal alta en aVR, QT largo, taquicardia</>,
          ]}
          manejo={[
            'Monitor continuo, intubación precoz si hay compromiso de conciencia, carbón activado con vía aérea protegida',
            <><strong>Bicarbonato de sodio</strong> 1-2 mEq/kg en bolos repetidos ante QRS ancho, arritmia o hipotensión; luego infusión con meta de pH 7,45-7,55 vigilando sodio y potasio</>,
            'Convulsiones: benzodiacepinas. Hipotensión: cristaloides y noradrenalina',
            'Rescate en shock o arritmia refractaria: emulsión lipídica y soporte extracorpóreo',
            <><strong>No usar</strong> antiarrítmicos clase Ia o Ic, flumazenil, fisostigmina ni fenitoína</>,
          ]}
          conducta={[
            'Asintomático con ECG normal tras al menos 6 horas de monitorización: apto médicamente para evaluación psiquiátrica',
            'Cualquier alteración neurológica, del ECG o hemodinámica: UCI hasta 24 horas sin alteraciones',
          ]}
          links={{ drugs: ['bicarbonato', 'midazolam', 'lorazepam', 'noradrenalina', 'emulsion-lipidica', 'amitriptilina'], ecg: ['c19-s6', 'c20-s1'], imaging: ['c20-s5'], links: ['c25-s4', 'c10-s6', 'c25-s18'] }}
          evolucion={[
            'Quien sobrevive las primeras 24 horas suele recuperarse completamente',
            'Complicaciones: aspiración, daño hipóxico, rabdomiólisis',
          ]}
        />
      </Section>

      <Section id="c25-s8" title="8. ISRS, IRSN y antipsicóticos">
        <Picture
          title="Antidepresivos serotoninérgicos"
          clinica={[
            'Ingesta aislada de ISRS: habitualmente leve. Venlafaxina y bupropión causan convulsiones y alteraciones del QRS y QT; citalopram y escitalopram prolongan el QT',
            <><strong>Criterios de Hunter</strong> (con serotoninérgico): clonus espontáneo; clonus inducible u ocular con agitación o sudoración; temblor con hiperreflexia; o hipertonía, T° &gt;38 °C y clonus</>,
          ]}
          manejo={[
            'Suspender todo serotoninérgico, benzodiacepinas, fluidos y enfriamiento',
            'Moderado sin respuesta: ciproheptadina 12 mg VO y 2 mg cada 2 horas (máx. 32 mg/día)',
            'Hipertermia >41 °C: intubación y bloqueo neuromuscular no despolarizante',
          ]}
          conducta={[
            'ECG seriado y observación de 6 a 24 horas según el fármaco y la formulación',
            'Síndrome serotoninérgico moderado o grave: hospitalizar; grave, UCI',
          ]}
          links={{ drugs: ['sertralina', 'fluoxetina', 'escitalopram', 'venlafaxina', 'ciproheptadina', 'lorazepam', 'rocuronio'], ecg: ['c19-s6'], links: ['c25-s4', 'c22-mezclas', 'c25-s18'] }}
          evolucion={['El síndrome serotoninérgico suele resolverse en 24-72 horas', 'Complicaciones: rabdomiólisis, falla renal, coagulopatía']}
        />
        <Picture
          title="Antipsicóticos y síndrome neuroléptico maligno"
          clinica={[
            'Sedación, hipotensión, signos anticolinérgicos, distonías, QT prolongado',
            'Síndrome neuroléptico maligno: rigidez, hipertermia, disautonomía, confusión y CK elevada',
          ]}
          manejo={[
            'Soporte, cristaloides y noradrenalina si hay hipotensión; magnesio ante torsión de puntas',
            'Distonía aguda: difenhidramina 25-50 mg IV o benzodiacepina',
            'Neuroléptico maligno: suspender, enfriar, hidratar, benzodiacepinas; dantroleno o bromocriptina en casos graves',
          ]}
          conducta={['Monitor al menos 6 horas; más si el QT está prolongado o es de liberación prolongada', 'Síndrome neuroléptico maligno: UCI']}
          links={{ drugs: ['haloperidol', 'quetiapina', 'risperidona', 'olanzapina', 'clorpromazina', 'difenhidramina', 'dantroleno', 'bromocriptina', 'sulfato-magnesio'], ecg: ['c20-s1', 'c19-s6'], links: ['c10-s5'] }}
          evolucion={['La mayoría se recupera en 24-48 horas', 'El neuroléptico maligno puede durar 1-2 semanas o más con antipsicóticos de depósito']}
        />
      </Section>

      <Section id="c25-s9" title="9. Litio y anticonvulsivantes">
        <Picture
          title="Litio"
          clinica={[
            'Aguda: predominan náuseas, vómitos y diarrea; los síntomas neurológicos aparecen después',
            'Crónica (deshidratación, falla renal, AINE, diuréticos, IECA): temblor grueso, ataxia, confusión, convulsiones, aun con niveles poco elevados',
          ]}
          manejo={[
            'Suero fisiológico para restaurar volemia y diuresis; evitar diuréticos y AINE',
            'El carbón activado no sirve; irrigación intestinal total en liberación prolongada',
            'Litemia y sodio cada 4-6 horas',
            'Hemodiálisis: compromiso de conciencia, convulsiones o arritmia; o litio >4 mEq/L con falla renal (considerar si >5)',
          ]}
          conducta={['Hospitalizar toda intoxicación sintomática o con niveles en ascenso', 'Alta médica con niveles en descenso bajo 1,5 mEq/L y sin síntomas']}
          links={{ drugs: ['litio'], ecg: ['c20-s1'], imaging: ['c20-s5'], links: ['c13-s6', 'c13-s7', 'c25-s18'] }}
          evolucion={['Rebote de la litemia tras la diálisis: controlar', 'Puede dejar secuela cerebelosa o cognitiva permanente y diabetes insípida']}
        />
        <Picture
          title="Anticonvulsivantes"
          clinica={[
            'Valproato: depresión de conciencia, hiperamonemia, acidosis, hipernatremia, trombocitopenia',
            'Carbamazepina: coma, convulsiones, signos anticolinérgicos, QRS ancho, evolución fluctuante',
            'Fenitoína: nistagmo, ataxia, confusión',
          ]}
          manejo={[
            'Soporte y carbón activado; dosis múltiples en carbamazepina y fenobarbital',
            'Valproato con hiperamonemia o gravedad: L-carnitina 100 mg/kg (máx. 6 g) y luego dosis de mantención',
            'QRS ancho: bicarbonato',
            'Hemodiálisis: valproato >1.300 mg/L, edema cerebral o shock; carbamazepina con convulsiones o arritmias refractarias',
          ]}
          conducta={['Niveles seriados hasta confirmar descenso; observación prolongada en formulaciones de liberación lenta', 'Antes de reiniciar el tratamiento, revisar interacciones: los carbapenémicos desploman el valproato']}
          links={{ drugs: ['levocarnitina', 'acido-valproico', 'carbamazepina', 'fenitoina', 'fenobarbital', 'carbon-activado', 'bicarbonato'], ecg: ['c19-s6'], imaging: ['c20-s4', 'c20-s5'], links: ['c10-s6'] }}
          evolucion={['Recuperación en 1-3 días en la mayoría', 'Vigilar edema cerebral, hepatotoxicidad y pancreatitis con valproato']}
        />
      </Section>

      <Section id="c25-s10" title="10. Opioides">
        <Picture
          clinica={[
            'Miosis, bradipnea, depresión de conciencia; la miosis puede faltar con tramadol, petidina o mezclas',
            'Tramadol: convulsiones y síndrome serotoninérgico. Metadona: QT largo',
          ]}
          manejo={[
            'Primero ventilar con bolsa y oxígeno',
            <><strong>Naloxona</strong> 0,04-0,4 mg IV, aumentando cada 2-3 minutos (hasta 10 mg) con meta de ventilación adecuada, no de despertar completo. Vías IM o intranasal si no hay acceso</>,
            'Recaída: infusión de dos tercios de la dosis eficaz por hora',
            'Medir paracetamol: muchos preparados lo combinan',
          ]}
          conducta={[
            'Observar al menos 2 horas tras la última naloxona en fármacos de acción corta; 12-24 horas en metadona o liberación prolongada',
            'Infusión de naloxona o ventilación: UCI',
            'Al alta: educación, naloxona si está disponible y derivación por consumo',
          ]}
          links={{ drugs: ['naloxona', 'morfina', 'tramadol', 'metadona', 'fentanilo', 'oxicodona'], imaging: ['c20-s3'], ecg: ['c20-s1'], scores: ['cows', 'glasgow'], links: ['c25-s5', 'c8-s4', 'c25-s18'] }}
          evolucion={['Rápida reversión si no hubo hipoxia prolongada', 'Complicaciones: aspiración, edema pulmonar no cardiogénico, rabdomiólisis, daño hipóxico']}
        />
      </Section>

      <Section id="c25-s11" title="11. Betabloqueadores, calcioantagonistas y digoxina">
        <Picture
          title="Betabloqueadores y calcioantagonistas"
          clinica={[
            'Bradicardia, bloqueo AV, hipotensión, shock; convulsiones y QRS ancho con propranolol',
            'Orienta la glicemia: baja o normal en betabloqueadores, alta en calcioantagonistas',
          ]}
          manejo={[
            'Carbón activado; irrigación intestinal en liberación prolongada',
            'Atropina y bolos prudentes de cristaloides',
            'Calcio: gluconato 10% 30-60 mL o cloruro 10% 10-20 mL, repetir',
            <><strong>Insulina en dosis altas</strong> precoz: 1 U/kg en bolo y 0,5-1 U/kg/h (titulable hasta 10), con glucosa y control horario de glicemia y potasio</>,
            'Noradrenalina o adrenalina según el perfil hemodinámico; glucagón 3-10 mg en betabloqueadores',
            'Refractario: marcapasos y ECMO. La emulsión lipídica no se recomienda de rutina',
          ]}
          conducta={[
            'UCI ante cualquier bradicardia, bloqueo o hipotensión',
            'Asintomático: monitorizar 6-8 horas (liberación inmediata) o 24 horas (liberación prolongada y sotalol)',
          ]}
          links={{ drugs: ['atropina', 'cloruro-calcio', 'gluconato-calcio', 'insulina', 'glucosa', 'glucagon', 'noradrenalina', 'adrenalina', 'metoprolol', 'verapamilo', 'diltiazem'], ecg: ['c19-s8', 'c20-s1'], links: ['c1-s5', 'c11-s3', 'c23-s3'] }}
          evolucion={['Puede haber shock tardío con formulaciones de liberación prolongada', 'Vigilar hipoglicemia e hipokalemia durante y después de la insulina']}
        />
        <Picture
          title="Digoxina"
          clinica={[
            'Náuseas, vómitos, confusión, alteraciones visuales; cualquier arritmia, en especial extrasístoles y bloqueo AV',
            'Aguda: hiperkalemia marca la gravedad. Crónica: falla renal, mayores, hipokalemia',
          ]}
          manejo={[
            'Medir digoxinemia (a las 6 horas o más), potasio, magnesio y creatinina',
            <><strong>Anticuerpos Fab antidigoxina</strong> ante arritmia de riesgo vital, potasio &gt;5 en intoxicación aguda, ingesta ≥10 mg o nivel &gt;10 ng/mL. Empírico en la aguda: 10-20 viales; crónica: 3-6</>,
            'Atropina para la bradicardia; corregir potasio y magnesio. Administrar calcio solo con precaución',
          ]}
          conducta={['Monitorización continua; UCI si hay arritmias o hiperkalemia', 'Tras los Fab, la digoxinemia total deja de ser interpretable']}
          links={{ drugs: ['anticuerpos-antidigoxina', 'digoxina', 'atropina', 'sulfato-magnesio', 'cloruro-potasio'], ecg: ['c19-s8', 'c19-s6', 'c19-s9'], imaging: ['c20-s5'], links: ['c13-s1', 'c13-s2', 'c18-s7'] }}
          evolucion={['Con Fab, las arritmias suelen revertir en horas', 'Puede reaparecer toxicidad en falla renal']}
        />
      </Section>

      <Section id="c25-s12" title="12. Salicilatos, AINE, hipoglicemiantes y anticoagulantes">
        <Picture
          title="Salicilatos y AINE"
          clinica={[
            'Salicilatos: tinnitus, hiperventilación, vómitos, hipertermia, confusión; alcalosis respiratoria con acidosis metabólica',
            'AINE: habitualmente leve; en ingesta masiva, acidosis, falla renal y convulsiones',
          ]}
          manejo={[
            'Carbón activado; salicilemia y gases cada 2-4 horas',
            'Alcalinizar con bicarbonato (orina pH 7,5-8) manteniendo potasio normal y reponiendo glucosa',
            'Evitar intubar; si es inevitable, mantener la hiperventilación',
            'Hemodiálisis: compromiso neurológico, hipoxemia o edema pulmonar, falla renal, pH ≤7,2 o salicilemia >90-100 mg/dL',
          ]}
          conducta={['Hospitalizar si hay síntomas o niveles en ascenso', 'Alta médica con niveles en descenso, ácido-base normal y sin síntomas']}
          links={{ drugs: ['aspirina', 'ibuprofeno', 'bicarbonato', 'carbon-activado'], imaging: ['c20-s5', 'c20-s3'], links: ['c10-s4'] }}
          evolucion={['La absorción puede ser errática y empeorar tardíamente', 'La intoxicación crónica en mayores se confunde con sepsis o delirium']}
        />
        <Picture
          title="Hipoglicemiantes"
          clinica={['Insulina y sulfonilureas: hipoglicemia prolongada y recurrente', 'Metformina: vómitos, acidosis láctica, shock']}
          manejo={[
            'Glucosa en bolo e infusión; glicemia horaria',
            'Sulfonilureas: octreótido 50 mcg SC cada 6 horas',
            'Metformina grave: bicarbonato según gravedad y hemodiálisis',
          ]}
          conducta={['Observar al menos 12-24 horas tras sulfonilureas o insulina de acción prolongada, incluyendo la noche', 'No dar de alta hasta mantener glicemia sin aporte']}
          links={{ drugs: ['glucosa', 'octreotido', 'glucagon', 'insulina'], imaging: ['c20-s5'], links: ['c10-s6'] }}
          evolucion={['La recaída es frecuente al suspender la glucosa', 'La hipoglicemia prolongada puede dejar daño neurológico']}
        />
        <Picture
          title="Anticoagulantes y raticidas"
          clinica={['Sin síntomas al inicio; sangrado en piel, mucosas, digestivo o intracraneal', 'Superwarfarinas (raticidas): efecto por semanas o meses']}
          manejo={[
            'TP/INR basal y a las 48-72 horas; en anticoagulantes directos, función renal y pruebas específicas',
            'Sin sangrado: no revertir de rutina. Con sangrado vital: complejo protrombínico, idarucizumab, andexanet o protamina según el fármaco',
            'Vitamina K en antagonistas, por tiempo prolongado en superwarfarinas',
          ]}
          conducta={['Cefalea o golpe en la cabeza: TAC inmediata', 'Control ambulatorio de INR solo con evaluación de salud mental y entorno seguro']}
          links={{ drugs: ['warfarina', 'vitamina-k', 'complejo-protrombinico', 'idarucizumab', 'andexanet', 'protamina'], imaging: ['c20-s4'], links: ['c24-s6', 'c14-s7', 'c9-s7'] }}
          evolucion={['El INR puede subir recién a los 2-3 días', 'Reevaluar la indicación original de anticoagulación antes de reiniciarla']}
        />
      </Section>

      <Section id="c25-s13" title="13. Alcoholes">
        <Picture
          title="Etanol"
          clinica={['Desinhibición, ataxia, coma, hipoventilación, hipotermia, hipoglicemia']}
          manejo={['Soporte, glicemia, tiamina antes o junto con la glucosa, abrigo y posición segura', 'Descartar trauma craneal y mezclas']}
          conducta={['Reevaluar hasta la sobriedad clínica; TAC si no mejora como se espera o hay trauma', 'Anticipar la abstinencia y evaluar consumo problemático']}
          links={{ drugs: ['tiamina', 'glucosa', 'diazepam', 'lorazepam'], imaging: ['c20-s4'], scores: ['ciwa', 'cage', 'glasgow'], links: ['c24-s8', 'c10-s5'] }}
          evolucion={['Mejoría en horas; abstinencia entre 6 y 72 horas en dependientes', 'Complicaciones: aspiración, delirium tremens, Wernicke']}
        />
        <Picture
          title="Metanol y etilenglicol"
          clinica={[
            'Ebriedad, y tras 6-24 horas acidosis metabólica con anión gap alto, respiración profunda y coma',
            'Metanol: visión borrosa o ceguera. Etilenglicol: falla renal, hipocalcemia, cristales de oxalato, QT largo',
          ]}
          manejo={[
            <><strong>Fomepizol</strong> 15 mg/kg y luego 10 mg/kg cada 12 horas (ajustar durante diálisis); si no hay, etanol</>,
            'Bicarbonato en acidosis grave',
            'Metanol: ácido folínico o fólico. Etilenglicol: tiamina y piridoxina',
            'Hemodiálisis: acidosis grave (pH ≤7,15), compromiso visual o neurológico, falla renal o niveles muy altos',
          ]}
          conducta={['Tratar ante la sospecha, sin esperar niveles', 'UCI y nefrología desde el inicio; avisar a salud pública si puede haber más afectados por alcohol adulterado']}
          links={{ drugs: ['fomepizol', 'etanol', 'piridoxina', 'bicarbonato', 'tiamina', 'gluconato-calcio'], imaging: ['c20-s5', 'c20-s4'], ecg: ['c20-s1'], links: ['c13-s5'] }}
          evolucion={['El daño visual puede ser permanente', 'La falla renal por etilenglicol suele recuperarse en semanas']}
        />
      </Section>

      <Section id="c25-s14" title="14. Cocaína, anfetaminas y otros estimulantes">
        <Picture
          clinica={[
            'Agitación, psicosis, midriasis, sudor, taquicardia, hipertensión, hipertermia',
            'Dolor torácico e infarto, arritmias, disección aórtica, ACV, convulsiones; hiponatremia con MDMA',
          ]}
          manejo={[
            <><strong>Benzodiacepinas</strong> como primera línea; enfriamiento agresivo si hay hipertermia</>,
            'Dolor torácico: ECG seriado, troponina, aspirina y nitroglicerina; hipertensión persistente: nitroglicerina o nicardipino',
            'QRS ancho: bicarbonato',
            'Evitar betabloqueadores en la intoxicación aguda; evitar contención física sin sedación',
          ]}
          conducta={['Observar hasta normalizar conducta y signos vitales; dolor torácico, protocolo con troponina seriada', 'UCI ante hipertermia, arritmia, convulsiones o falla de órganos']}
          links={{ drugs: ['midazolam', 'lorazepam', 'nitroglicerina', 'aspirina', 'nicardipino', 'bicarbonato'], ecg: ['c19-s1', 'c19-s2', 'c19-s6'], imaging: ['c20-s4'], scores: ['rass'], links: ['c23-s4', 'c1-s8', 'c13-s6'] }}
          evolucion={['Resolución en horas en casos leves', 'Complicaciones: rabdomiólisis, falla renal y hepática, daño miocárdico']}
        />
      </Section>

      <Section id="c25-s15" title="15. Plaguicidas: organofosforados, carbamatos y paraquat">
        <Picture
          title="Organofosforados y carbamatos"
          clinica={[
            'Muscarínicos: sialorrea, lagrimeo, micción, diarrea, vómitos, broncorrea, broncoespasmo, bradicardia, miosis',
            'Nicotínicos: fasciculaciones, debilidad, parálisis, taquicardia. Centrales: convulsiones, coma',
          ]}
          manejo={[
            'Protección del personal, retirar la ropa y lavar la piel',
            <><strong>Atropina</strong> 1-3 mg IV, duplicando cada 5 minutos hasta secar las secreciones y ventilar bien; luego infusión (10-20% de la dosis total de carga por hora). La taquicardia no la contraindica</>,
            <><strong>Pralidoxima</strong> 30 mg/kg en 30 minutos y 8 mg/kg/h, precoz, en organofosforados</>,
            'Convulsiones: benzodiacepinas. Intubar sin succinilcolina',
          ]}
          conducta={['UCI en todo paciente con síntomas respiratorios o neurológicos', 'Asintomático: observar al menos 12 horas (más en compuestos liposolubles)', 'Colinesterasa eritrocitaria o plasmática para confirmar y seguir']}
          links={{ drugs: ['atropina', 'pralidoxima', 'diazepam', 'rocuronio'], imaging: ['c20-s3', 'c20-s5'], ecg: ['c20-s1'], links: ['c3-s6', 'c25-s18'] }}
          evolucion={['Síndrome intermedio a las 24-96 horas: debilidad de flexores del cuello, pares craneales y falla respiratoria', 'Neuropatía tardía a las 1-3 semanas']}
        />
        <Picture
          title="Paraquat"
          clinica={['Quemaduras orales y digestivas, vómitos; falla renal, hepática y fibrosis pulmonar progresiva']}
          manejo={['Descontaminación inmediata: carbón activado o tierra de Fuller lo antes posible', 'Oxígeno solo si SpO₂ <90%: aumenta el daño pulmonar', 'No hay antídoto; consultar toxicología']}
          conducta={['Hospitalizar toda ingesta, aunque parezca pequeña', 'Informar el pronóstico y adecuar el esfuerzo con cuidados paliativos cuando corresponda']}
          links={{ drugs: ['carbon-activado', 'morfina'], imaging: ['c20-s3', 'c20-s4'], links: ['c10-s4'] }}
          evolucion={['Mortalidad muy alta en ingestas importantes', 'La falla respiratoria puede aparecer días o semanas después']}
        />
      </Section>

      <Section id="c25-s16" title="16. Gases tóxicos y cáusticos">
        <Picture
          title="Monóxido de carbono y cianuro"
          clinica={[
            'Monóxido: cefalea, náuseas, mareo, confusión, síncope; varios afectados en el mismo lugar. La oximetría de pulso es falsamente normal',
            'Cianuro (humo de incendio, químicos): coma brusco, convulsiones, shock, lactato muy alto (≥8 mmol/L)',
          ]}
          manejo={[
            'Retirar de la fuente y oxígeno al 100% con mascarilla de reservorio; cooximetría para carboxihemoglobina',
            'Oxígeno hiperbárico: pérdida de conciencia, déficit neurológico, isquemia, embarazo o carboxihemoglobina >25% (>15-20% en embarazo)',
            <>Sospecha de cianuro: <strong>hidroxocobalamina</strong> 5 g IV en 15 minutos, repetible; en humo, no usar nitritos</>,
          ]}
          conducta={['ECG y troponina en todos', 'Alta tras al menos 6 horas de oxígeno, asintomático y con estudios normales; no volver al lugar sin revisar la fuente']}
          links={{ drugs: ['hidroxocobalamina', 'midazolam'], ecg: ['c19-s1', 'c19-s2'], imaging: ['c20-s3', 'c20-s5'], links: ['c24-s12', 'c25-s18'] }}
          evolucion={['Síndrome neurológico tardío entre 2 y 40 días: controlar memoria, conducta y marcha']}
        />
        <Picture
          title="Cáusticos"
          clinica={['Dolor oral y retroesternal, sialorrea, disfagia, estridor, vómitos con sangre', 'La ausencia de lesiones en la boca no descarta daño esofágico']}
          manejo={[
            'Vía aérea precoz si hay estridor o disfonía',
            'No inducir vómito, no dar carbón, no neutralizar, no pasar sonda a ciegas; régimen cero',
            'Inhibidor de bomba y analgesia; sin corticoides de rutina',
          ]}
          conducta={['Endoscopía en las primeras 12-24 horas (clasificación de Zargar) en intento de autólisis o con síntomas', 'TAC con contraste y cirugía urgente si se sospecha perforación o necrosis']}
          links={{ drugs: ['omeprazol', 'fentanilo', 'ceftriaxona'], imaging: ['c20-s3', 'c20-s4'], links: ['c3-s2', 'c4-s5', 'c25-s18'] }}
          evolucion={['Perforación y mediastinitis en las primeras semanas', 'Estenosis a las 3-8 semanas; mayor riesgo de cáncer esofágico a largo plazo']}
        />
      </Section>

      <Section id="c25-s17" title="17. Autólisis fallida por métodos no tóxicos">
        <p>El manejo es el del daño físico, siempre seguido de la evaluación de salud mental. Buscar una intoxicación asociada y lesiones antiguas.</p>
        <Picture
          title="Ahorcamiento o asfixia"
          clinica={['Compromiso de conciencia, disfonía, estridor, dolor cervical, petequias, marcas en el cuello; puede haber consulta casi sin síntomas']}
          manejo={[
            'Oxigenación, restricción cervical y vía aérea precoz: el edema puede progresar',
            'AngioTAC de cuello y TAC de cerebro ante cualquier signo o mecanismo de riesgo',
            'Paro recuperado: cuidados postparo y control de la temperatura',
          ]}
          conducta={['Observar al menos 24 horas si hubo pérdida de conciencia, síntomas o hallazgos', 'UCI si hubo paro, intubación o lesión vascular o laríngea']}
          links={{ imaging: ['c20-s4', 'c20-s3'], ecg: ['c20-s1'], scores: ['glasgow'], links: ['c3-s8', 'c14-s10', 'c24-s11', 'c25-s18'] }}
          evolucion={['Edema pulmonar o laríngeo tardío', 'El pronóstico neurológico depende del tiempo de hipoxia']}
        />
        <Picture
          title="Heridas autoinfligidas, precipitación e inmersión"
          clinica={['Heridas cortantes en muñeca, antebrazo o cuello; politraumatismo por precipitación; hipoxemia e hipotermia por inmersión; heridas penetrantes']}
          manejo={[
            'Seguir xABCDE: control de la hemorragia primero',
            'Examinar tendones, nervios y vasos distales antes de anestesiar; explorar en pabellón las heridas profundas o de cuello',
            'Analgesia adecuada, antibiótico según la herida y profilaxis antitetánica',
            'Inmersión: oxigenación, recalentamiento y observación respiratoria',
          ]}
          conducta={['Destino según la lesión, manteniendo acompañamiento continuo en cualquier unidad', 'Tratar sin juicios ni procedimientos sin analgesia']}
          links={{ drugs: ['lidocaina', 'fentanilo', 'cefazolina', 'vacuna-antitetanica', 'acido-tranexamico'], imaging: ['c20-s3', 'c20-s4'], links: ['c24-s5', 'c24-s10', 'c24-s12', 'c25-s18'] }}
          evolucion={['Secuelas funcionales posibles: derivar a cirugía y rehabilitación', 'La repetición es frecuente sin seguimiento']}
        />
      </Section>

      <Section id="c25-s18" title="18. Conducta ante el intento de autólisis: riesgo, destino y seguimiento">
        <h3>Desde el ingreso</h3>
        <ul>
          <li><strong>Acompañamiento continuo</strong>, también en el baño, en imágenes y en traslados</li>
          <li>Retirar fármacos, objetos cortantes, cordones y pertenencias de riesgo; ubicar en un box visible</li>
          <li>Trato respetuoso y sin juicios. Preguntar directamente por suicidio <strong>no induce</strong> la conducta</li>
          <li>Agitación: primero contención verbal; luego fármacos y contención física solo si es necesaria, protocolizada y vigilada</li>
          <li>Si quiere retirarse con riesgo alto o capacidad alterada, impedirlo por las vías legales y registrar</li>
        </ul>
        <h3>Entrevista (con el paciente lúcido y en privado)</h3>
        <ul>
          <li>Qué ocurrió, desencadenante, planificación, precauciones para no ser descubierto, carta o despedida</li>
          <li>Qué esperaba que ocurriera, cómo vive haber sobrevivido y si persisten la ideación, el plan o el acceso a medios</li>
          <li>Intentos previos, trastorno mental, consumo de sustancias, pérdidas, violencia, enfermedad o dolor crónico, red de apoyo</li>
          <li>Información de familiares o cercanos; la confidencialidad cede ante un riesgo vital</li>
        </ul>
        <Table>
          <thead>
            <tr>
              <th>Riesgo</th>
              <th>Orientan a este nivel</th>
              <th>Destino y conducta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Alto</strong></td>
              <td>Intento grave o planificado, ideación persistente con plan, lamenta sobrevivir, intentos repetidos, psicosis, depresión grave, intoxicación persistente, sin red de apoyo</td>
              <td>Hospitalización (psiquiatría, o sala médica con vigilancia mientras requiera tratamiento)</td>
            </tr>
            <tr>
              <td><strong>Intermedio</strong></td>
              <td>Factores de riesgo relevantes, ambivalencia, apoyo parcial</td>
              <td>Evaluación psiquiátrica en urgencia antes de decidir; hospitalizar ante la duda</td>
            </tr>
            <tr>
              <td><strong>Menor</strong></td>
              <td>Sin ideación actual, crisis resuelta, se compromete con el plan, red disponible y control asegurado</td>
              <td>Alta solo tras evaluación de salud mental, con plan de seguridad y hora de control</td>
            </tr>
          </tbody>
        </Table>
        <Callout type="alerta">
          <p>Las escalas apoyan, pero <strong>no descartan riesgo ni deciden el alta</strong>. Un método de baja letalidad no significa bajo riesgo.</p>
        </Callout>
        <h3>Antes del alta: plan de seguridad</h3>
        <ol type="1">
          <li>Señales de alarma personales</li>
          <li>Estrategias propias para atravesar la crisis</li>
          <li>Personas y lugares que ayudan a distraerse</li>
          <li>Personas a quienes pedir ayuda</li>
          <li>Profesionales y teléfonos: <strong>*4141</strong>, SAMU <strong>131</strong>, Salud Responde <strong>600 360 7777</strong></li>
          <li><strong>Restringir medios:</strong> custodia de medicamentos por un tercero, entrega fraccionada y retiro de plaguicidas, armas y otros</li>
        </ol>
        <h3>Aspectos farmacológicos y legales</h3>
        <ul>
          <li>No entregar recetas con cantidades grandes; evitar tricíclicos y asociaciones de riesgo</li>
          <li>Hospitalización involuntaria: solo como último recurso y cumpliendo los requisitos y avisos de la <strong>Ley 21.331</strong></li>
          <li>Registrar y notificar el intento según la vigilancia vigente del MINSAL</li>
          <li><strong>Niños y adolescentes:</strong> evaluación especializada, hospitalización con criterio amplio, informar a los cuidadores, activar el protocolo escolar y denunciar si hay sospecha de maltrato o abuso</li>
        </ul>
        <h3>Evolución y seguimiento</h3>
        <ul>
          <li>El riesgo de repetición y de muerte es máximo en las <strong>primeras semanas</strong> tras el alta</li>
          <li>Contacto en 24-72 horas y control de salud mental dentro de los primeros 7 días</li>
          <li>Seguimiento activo ante inasistencia, con participación de la red de apoyo y de atención primaria</li>
          <li>Apoyar a la familia y también al equipo tratante</li>
        </ul>
        <Connections
          drugs={['lorazepam', 'haloperidol', 'quetiapina', 'sertralina', 'litio']}
          scores={['cssrs', 'sadpersons', 'rass', 'ciwa']}
          links={['c18-s9', 'c10-s5', 'c24-s14', 'c25-s5', 'c21-s3']}
        />
      </Section>
    </>
  )
}

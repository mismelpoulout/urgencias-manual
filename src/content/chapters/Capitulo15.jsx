import Callout from '../../components/content/Callout.jsx'
import FaceDiagrams from '../../components/content/FaceDiagrams.jsx'
import Flow, { FlowStep } from '../../components/content/Flow.jsx'
import Section from '../../components/content/Section.jsx'
import Table from '../../components/content/Table.jsx'

// Capítulo 15 · Parálisis central vs parálisis periférica
export default function Capitulo15() {
  return (
    <>
      <p>Cómo distinguir en la urgencia una lesión de <strong>primera motoneurona</strong> (central: corteza, cápsula interna, tronco, médula) de una lesión de <strong>segunda motoneurona</strong> (periférica: núcleo motor, raíz, nervio, unión neuromuscular), con foco en la parálisis facial y la conducta inmediata.</p>
      <Callout type="alerta">
        <p><strong>La pregunta que define la conducta:</strong> ¿puede ser un ACV? Toda parálisis central de inicio brusco es un <strong>Código ACV</strong> hasta demostrar lo contrario: hora de inicio, glicemia capilar, NIHSS y TAC/angio-TAC de inmediato (ver Capítulo 14).</p>
      </Callout>
      <Section id="c15-s1" title="1. Parálisis facial: la clave está en la frente">
        <p>El núcleo del nervio facial tiene dos porciones. La porción <strong>superior</strong> (frente y orbicular de los párpados) recibe inervación de <strong>ambas</strong> cortezas; la porción <strong>inferior</strong> (boca y mitad inferior de la cara) recibe inervación solo de la corteza <strong>contralateral</strong>. Por eso:</p>
        <ul>
          <li><strong>Lesión central</strong> (supranuclear): la frente se salva porque la otra corteza la sigue inervando → solo cae la mitad inferior de la cara, del lado <strong>opuesto</strong> a la lesión</li>
          <li><strong>Lesión periférica</strong> (núcleo o nervio): se pierde toda la hemicara del <strong>mismo</strong> lado, incluida la frente</li>
        </ul>
        <FaceDiagrams />
        <h3>Diferencias clínicas</h3>
        <Table>
          <thead>
            <tr>
              <th>Característica</th>
              <th>Parálisis facial central</th>
              <th>Parálisis facial periférica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Frente (arrugar, elevar cejas)</td>
              <td><strong>Conservada</strong></td>
              <td><strong>Paralizada</strong></td>
            </tr>
            <tr>
              <td>Cierre palpebral</td>
              <td>Conservado o levemente débil</td>
              <td>Incompleto (lagoftalmo), signo de Bell</td>
            </tr>
            <tr>
              <td>Mitad inferior de la cara</td>
              <td>Paralizada</td>
              <td>Paralizada</td>
            </tr>
            <tr>
              <td>Lado de la lesión</td>
              <td><strong>Contralateral</strong> a la parálisis</td>
              <td><strong>Ipsilateral</strong></td>
            </tr>
            <tr>
              <td>Movimientos emocionales (sonrisa espontánea)</td>
              <td>Pueden estar conservados</td>
              <td>Abolidos</td>
            </tr>
            <tr>
              <td>Gusto 2/3 anteriores, lagrimeo, hiperacusia</td>
              <td>Normales</td>
              <td>Pueden alterarse (según el nivel de la lesión)</td>
            </tr>
            <tr>
              <td>Dolor retroauricular</td>
              <td>No</td>
              <td>Frecuente en Bell (precede 1-2 días)</td>
            </tr>
            <tr>
              <td>Signos acompañantes</td>
              <td>Hemiparesia del mismo lado de la parálisis facial, afasia, disartria, hemianopsia, negligencia</td>
              <td>Habitualmente aislada (buscar vesículas, otitis, masa parotídea)</td>
            </tr>
            <tr>
              <td>Inicio</td>
              <td>Brusco (minutos)</td>
              <td>Progresa en 24-72 h</td>
            </tr>
            <tr>
              <td>Causa más frecuente</td>
              <td><strong>ACV</strong>, tumor, absceso, esclerosis múltiple</td>
              <td><strong>Parálisis de Bell</strong> (idiopática), Ramsay Hunt, otitis, trauma, tumor parotídeo, Guillain-Barré (bilateral)</td>
            </tr>
          </tbody>
        </Table>
        <h3>Escala de House-Brackmann (parálisis periférica)</h3>
        <Table>
          <thead>
            <tr>
              <th>Grado</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>Normal</td>
            </tr>
            <tr>
              <td>II</td>
              <td>Disfunción leve: debilidad mínima visible de cerca, cierre ocular completo con mínimo esfuerzo</td>
            </tr>
            <tr>
              <td>III</td>
              <td>Moderada: asimetría evidente sin desfiguración, cierre ocular completo con esfuerzo, frente con movimiento leve a moderado</td>
            </tr>
            <tr>
              <td>IV</td>
              <td>Moderadamente grave: debilidad evidente o asimetría desfigurante, cierre ocular incompleto, frente inmóvil</td>
            </tr>
            <tr>
              <td>V</td>
              <td>Grave: movimiento apenas perceptible, cierre ocular incompleto</td>
            </tr>
            <tr>
              <td>VI</td>
              <td>Parálisis total</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section id="c15-s2" title="2. Conducta ante parálisis facial">
        <h3>Parálisis central (o duda)</h3>
        <ol type="1">
          <li>Activar <strong>Código ACV</strong>: hora de último momento normal, glicemia capilar, NIHSS</li>
          <li>TAC de cerebro sin contraste urgente + angio-TAC si es candidato a reperfusión</li>
          <li>Trombólisis IV dentro de 4,5 h o trombectomía según protocolo (ver Capítulo 14)</li>
          <li>Control de presión arterial según la estrategia de reperfusión, cabecera 0-30°, régimen cero hasta evaluar deglución</li>
        </ol>
        <h3>Parálisis periférica idiopática (Bell)</h3>
        <Table>
          <thead>
            <tr>
              <th>Medida</th>
              <th>Indicación y dosis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Corticoides (dentro de 72 h)</strong></td>
              <td>Prednisona 60 mg/día VO por 5 días y luego descender 10 mg/día (total 10 días), o 50 mg/día por 10 días. Es la única intervención con beneficio demostrado</td>
            </tr>
            <tr>
              <td><strong>Antiviral</strong> (opcional, asociado al corticoide)</td>
              <td>Valaciclovir 1 g VO c/8 h por 7 días, o aciclovir 400 mg VO 5 veces al día por 10 días. Considerar en parálisis grave (House-Brackmann V-VI). Nunca como monoterapia</td>
            </tr>
            <tr>
              <td><strong>Protección ocular</strong> (siempre que el cierre sea incompleto)</td>
              <td>Lágrimas artificiales c/1-2 h durante el día, ungüento oftálmico lubricante y oclusión nocturna del ojo, lentes de sol. Derivar a oftalmología si hay dolor ocular, ojo rojo o baja de visión</td>
            </tr>
            <tr>
              <td><strong>Control</strong></td>
              <td>A la semana y derivación a ORL/neurología si no hay mejoría en 3 semanas o es incompleta a los 3 meses</td>
            </tr>
          </tbody>
        </Table>
        <h3>Signos de alarma que obligan a buscar otra causa</h3>
        <ul>
          <li>Frente conservada (sospechar central), otros pares craneanos afectados o déficit en extremidades</li>
          <li><strong>Vesículas</strong> en conducto auditivo, pabellón o paladar + otalgia intensa → <strong>síndrome de Ramsay Hunt</strong> (herpes zóster): valaciclovir 1 g c/8 h por 7 días + prednisona</li>
          <li>Otitis media aguda o colesteatoma, mastoiditis → evaluación ORL urgente</li>
          <li>Masa parotídea, parálisis progresiva más allá de 72 h, recurrente o sin mejoría a los 3 meses → imagen (RM)</li>
          <li><strong>Bilateral</strong> → Guillain-Barré, sarcoidosis, Lyme, VIH, leucemia</li>
          <li>Trauma con fractura del hueso temporal o herida facial</li>
        </ul>
        <Callout type="perla">
          <p>la parálisis de Bell tiene buen pronóstico (70-85% se recupera por completo), pero el riesgo real es la <strong>úlcera corneal</strong> por exposición. La protección ocular es tan importante como el corticoide.</p>
        </Callout>
      </Section>
      <Section id="c15-s3" title="3. Más allá de la cara: síndrome de primera vs segunda motoneurona">
        <Table>
          <thead>
            <tr>
              <th>Hallazgo</th>
              <th>Primera motoneurona (central)</th>
              <th>Segunda motoneurona (periférica)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Distribución</td>
              <td>Hemicuerpo, predominio distal y en extensores de extremidad superior/flexores de la inferior (patrón piramidal)</td>
              <td>Según raíz, nervio o miotoma; puede ser focal, distal o proximal</td>
            </tr>
            <tr>
              <td>Tono</td>
              <td><strong>Espasticidad</strong> (en “navaja”)</td>
              <td><strong>Flacidez</strong> (hipotonía)</td>
            </tr>
            <tr>
              <td>Reflejos osteotendinosos</td>
              <td><strong>Aumentados</strong>, clonus, aumento del área reflexógena</td>
              <td><strong>Disminuidos o abolidos</strong></td>
            </tr>
            <tr>
              <td>Reflejo plantar</td>
              <td><strong>Babinski</strong> (extensor)</td>
              <td>Flexor o ausente</td>
            </tr>
            <tr>
              <td>Atrofia</td>
              <td>Tardía y leve (por desuso)</td>
              <td><strong>Precoz y marcada</strong></td>
            </tr>
            <tr>
              <td>Fasciculaciones</td>
              <td>Ausentes</td>
              <td>Presentes (lesión de asta anterior o raíz)</td>
            </tr>
            <tr>
              <td>Ejemplos</td>
              <td>ACV, tumor cerebral, compresión medular, esclerosis múltiple</td>
              <td>Guillain-Barré, radiculopatía, neuropatía, lesión de nervio, ELA (mixta), miastenia (unión, sin cambios de reflejos)</td>
            </tr>
          </tbody>
        </Table>
        <Callout type="alerta">
          <p><strong>Atención:</strong> en la fase <strong>aguda</strong> de una lesión central (ACV extenso, shock medular por trauma o compresión) la extremidad puede estar <strong>flácida e hiporrefléctica</strong> durante horas a semanas. La flacidez inicial no descarta una lesión central: la topografía (hemicuerpo, nivel sensitivo, Babinski) sí orienta.</p>
        </Callout>
      </Section>
      <Section id="c15-s4" title="4. Localización rápida por patrón de debilidad">
        <Table>
          <thead>
            <tr>
              <th>Patrón</th>
              <th>Localización probable</th>
              <th>Conducta inmediata</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hemiparesia + parálisis facial <strong>del mismo lado</strong> (central) ± afasia o negligencia</td>
              <td>Hemisferio cerebral contralateral</td>
              <td>Código ACV, TAC/angio-TAC</td>
            </tr>
            <tr>
              <td>Parálisis de par craneano de un lado + hemiparesia del lado <strong>opuesto</strong> (síndrome alterno)</td>
              <td>Tronco encefálico</td>
              <td>Código ACV de circulación posterior, angio-TAC</td>
            </tr>
            <tr>
              <td>Paraparesia o cuadriparesia + <strong>nivel sensitivo</strong> + retención urinaria</td>
              <td>Médula espinal</td>
              <td><strong>RM urgente</strong>; si hay neoplasia conocida: dexametasona 10 mg IV y consulta a neurocirugía/radioterapia</td>
            </tr>
            <tr>
              <td>Debilidad <strong>simétrica ascendente</strong>, arreflexia, parestesias distales, días a semanas</td>
              <td>Raíces/nervios: <strong>Guillain-Barré</strong></td>
              <td>Capacidad vital forzada seriada; UCI si CVF &lt;20 mL/kg, presión inspiratoria máxima &gt; −30 cmH₂O o disautonomía. IgIV 0,4 g/kg/día por 5 días o plasmaféresis</td>
            </tr>
            <tr>
              <td>Ptosis, diplopía y debilidad <strong>fatigable</strong> que empeora al final del día, reflejos normales</td>
              <td>Unión neuromuscular: <strong>miastenia gravis</strong></td>
              <td>CVF seriada; evitar aminoglucósidos, fluoroquinolonas, magnesio y betabloqueadores; neurología</td>
            </tr>
            <tr>
              <td>Debilidad flácida generalizada aguda, sin compromiso sensitivo, con K⁺ bajo o alto</td>
              <td>Muscular / metabólica: <strong>parálisis periódica</strong></td>
              <td>Electrolitos y ECG (ver Capítulo 13)</td>
            </tr>
            <tr>
              <td>Mano o pie caído aislado, déficit sensitivo en territorio de un nervio</td>
              <td>Nervio periférico (radial, peroneo)</td>
              <td>Descartar compresión; férula y derivación</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section id="c15-s5" title="5. Algoritmo de conducta">
        <Flow>
          <FlowStep step={1} label="1 · ¿Inicio brusco?">
            Minutos u horas, con déficit focal → Código ACV inmediato (glicemia, NIHSS, TAC)
          </FlowStep>
          <FlowStep step={2} label="2 · ¿Frente conservada?">
            Sí → central · No → periférica. Buscar otros signos de vía piramidal
          </FlowStep>
          <FlowStep step={3} label="3 · ¿Reflejos y tono?">
            Aumentados + Babinski → central · Abolidos + flacidez + atrofia → periférica
          </FlowStep>
          <FlowStep step={4} label="4 · ¿Nivel sensitivo o esfínteres?">
            Sí → médula: RM urgente
          </FlowStep>
          <FlowStep step={5} label="5 · ¿Compromiso respiratorio?">
            Guillain-Barré o miastenia: CVF seriada y UCI precoz
          </FlowStep>
        </Flow>
        <Callout type="perla">
          <p>pedir al paciente que <strong>arrugue la frente y cierre los ojos con fuerza</strong> es la maniobra de 5 segundos más rentable del examen neurológico en urgencia: separa un probable ACV de una parálisis de Bell.</p>
        </Callout>
      </Section>
    </>
  )
}

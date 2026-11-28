import Callout from '../../components/content/Callout.jsx'
import Connections from '../../components/content/Connections.jsx'
import Flow, { FlowStep } from '../../components/content/Flow.jsx'
import Section from '../../components/content/Section.jsx'
import Table from '../../components/content/Table.jsx'
import ToolLink from '../../components/tools/ToolLink.jsx'

// Capítulo 23 · Politraumatizado (el id c24 es el ancla permanente, no el número del capítulo)
export default function Capitulo24() {
  return (
    <>
      <p>Manejo y conducta del paciente politraumatizado adulto desde la escena hasta su destino definitivo, ordenados según la secuencia <strong>xABCDE</strong>: primero la hemorragia externa exanguinante y luego vía aérea, ventilación, circulación, déficit neurológico y exposición.</p>
      <Callout type="alerta">
        <p><strong>Capítulo pendiente de validación clínica.</strong> Dosis y metas orientativas para adultos, con referencia a ATLS 11.ª edición y a la guía europea de hemorragia en trauma (6.ª ed., 2023). Contrastar con el protocolo local antes de usar.</p>
      </Callout>

      <Section id="c24-s1" title="1. Definición, gravedad y criterios de centro de trauma">
        <p><strong>Politraumatizado:</strong> paciente con lesiones traumáticas en dos o más regiones, con riesgo vital por al menos una de ellas o por su suma. Operativamente se usa <strong>ISS ≥16</strong>; la definición de Berlín exige AIS ≥3 en dos o más regiones más una alteración fisiológica (PAS ≤90, Glasgow ≤8, déficit de base ≤−6, coagulopatía o edad ≥70 años).</p>
        <Table>
          <thead>
            <tr>
              <th>Criterio</th>
              <th>Trasladar al centro de trauma de mayor complejidad disponible si hay</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Fisiológico</strong></td>
              <td>No obedece órdenes · FR &lt;10 o &gt;29 o dificultad respiratoria · SpO₂ &lt;90% con aire ambiente · PAS &lt;90 (10-64 años) o &lt;110 (≥65 años) · FC mayor que la PAS</td>
            </tr>
            <tr>
              <td><strong>Anatómico</strong></td>
              <td>Herida penetrante en cabeza, cuello, tronco o raíz de extremidades · deformidad del cráneo · déficit motor o sensitivo nuevo · tórax inestable · sospecha de fractura de pelvis · dos o más fracturas de huesos largos proximales · extremidad aplastada, desguantada o sin pulso · amputación proximal a muñeca o tobillo · sangrado que requiere torniquete o taponamiento</td>
            </tr>
            <tr>
              <td><strong>Mecanismo</strong></td>
              <td>Eyección del vehículo · intrusión importante o necesidad de rescate · fallecido en el mismo habitáculo · peatón o ciclista lanzado o atropellado · motociclista separado del vehículo con impacto importante · caída &gt;3 m</td>
            </tr>
            <tr>
              <td><strong>Del paciente</strong></td>
              <td>Anticoagulantes con golpe en la cabeza · ≥65 años · niños pequeños · embarazo &gt;20 semanas · quemadura asociada · juicio del equipo prehospitalario</td>
            </tr>
          </tbody>
        </Table>
        <Connections scores={['rts', 'iss', 'glasgow']} links={['c11-s10', 'c18-s1']} />
      </Section>

      <Section id="c24-s2" title="2. Prehospitalario: escena, triage y comunicación">
        <ol type="1">
          <li><strong>Seguridad de la escena:</strong> tránsito, fuego, electricidad, materiales peligrosos y violencia. Un reanimador lesionado es una víctima más.</li>
          <li><strong>Elementos de protección personal</strong> y evaluación del número de víctimas; pedir apoyo precozmente (SAMU 131, bomberos, policía).</li>
          <li><strong>Cinemática:</strong> energía, altura, deformidad del vehículo, uso de cinturón o casco, eyección, tiempo de atrapamiento.</li>
          <li>Con <strong>múltiples víctimas</strong>, aplicar triage START antes de tratar individualmente.</li>
        </ol>
        <h3>Triage START (múltiples víctimas, adultos)</h3>
        <Table>
          <thead>
            <tr>
              <th>Categoría</th>
              <th>Criterio</th>
              <th>Conducta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Verde · leve</strong></td>
              <td>Camina</td>
              <td>Agrupar en zona segura y reevaluar</td>
            </tr>
            <tr>
              <td><strong>Rojo · inmediato</strong></td>
              <td>Respira solo al abrir la vía aérea, FR &gt;30, sin pulso radial o llene capilar &gt;2 s, o no obedece órdenes</td>
              <td>Primera prioridad de tratamiento y traslado</td>
            </tr>
            <tr>
              <td><strong>Amarillo · diferible</strong></td>
              <td>No camina, con FR ≤30, pulso radial presente y obedece órdenes</td>
              <td>Segunda prioridad; reevaluar con frecuencia</td>
            </tr>
            <tr>
              <td><strong>Negro</strong></td>
              <td>No respira pese a abrir la vía aérea</td>
              <td>No destinar recursos mientras haya víctimas salvables</td>
            </tr>
          </tbody>
        </Table>
        <h3>Prealerta y entrega del paciente (MIST)</h3>
        <ul>
          <li><strong>M</strong>ecanismo y hora del evento</li>
          <li><strong>I</strong> lesiones encontradas o sospechadas (<em>injuries</em>)</li>
          <li><strong>S</strong>ignos vitales, Glasgow y su evolución</li>
          <li><strong>T</strong>ratamiento realizado: torniquete (con hora), vía aérea, descompresión, volumen, fármacos (hora del ácido tranexámico)</li>
        </ul>
      </Section>

      <Section id="c24-s3" title="3. Prehospitalario: evaluación y manejo xABCDE">
        <Table>
          <thead>
            <tr>
              <th>Paso</th>
              <th>Buscar</th>
              <th>Intervención</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>x · Hemorragia exanguinante</strong></td>
              <td>Sangrado externo masivo, amputación, charco de sangre, ropa empapada</td>
              <td>Compresión directa · <strong>torniquete</strong> 5-7 cm proximal a la herida, fuera de la articulación, apretado hasta detener el sangrado y con la hora anotada · taponamiento con gasa hemostática en ingle, axila o cuello</td>
            </tr>
            <tr>
              <td><strong>A · Vía aérea y columna</strong></td>
              <td>Obstrucción, sangre, vómito, estridor, trauma facial o cervical</td>
              <td>Restricción del movimiento cervical · tracción mandibular y aspiración · cánula orofaríngea (evitar la nasofaríngea si se sospecha fractura de base de cráneo) · dispositivo supraglótico o intubación según competencia · cricotirotomía si no se logra oxigenar</td>
            </tr>
            <tr>
              <td><strong>B · Ventilación</strong></td>
              <td>FR, simetría, murmullo, enfisema, herida soplante, desviación traqueal (tardía)</td>
              <td>Oxígeno para SpO₂ ≥94% · <strong>neumotórax a tensión:</strong> descompresión en 4.º-5.º espacio, línea axilar anterior (alternativa 2.º espacio, línea medioclavicular), o toracostomía digital · herida abierta: parche con válvula o sellado en tres lados</td>
            </tr>
            <tr>
              <td><strong>C · Circulación</strong></td>
              <td>Pulsos, FC, PA, piel, llene capilar, pelvis, abdomen, muslos</td>
              <td>Faja pélvica a nivel de los trocánteres si hay sospecha y compromiso · dos vías gruesas o intraósea, sin retrasar el traslado · hemoderivados si existen; si no, bolos de 250 mL reevaluando · ácido tranexámico</td>
            </tr>
            <tr>
              <td><strong>D · Neurológico</strong></td>
              <td>Glasgow, pupilas, movilidad y sensibilidad, glicemia</td>
              <td>Corregir hipoglicemia · evitar hipoxia e hipotensión · tratar convulsiones</td>
            </tr>
            <tr>
              <td><strong>E · Exposición</strong></td>
              <td>Lesiones ocultas en dorso, axilas y periné</td>
              <td>Exponer lo necesario y <strong>prevenir hipotermia</strong>: retirar ropa mojada, manta térmica, ambiente cálido</td>
            </tr>
          </tbody>
        </Table>
        <h3>Metas y fármacos en terreno</h3>
        <ul>
          <li><strong>Hipotensión permisiva</strong> sin TEC: PAS 80-90 mmHg hasta controlar el sangrado. <strong>Con TEC o lesión medular no se permite:</strong> PAS ≥100-110 mmHg (PAM ≥80)</li>
          <li><strong>Ácido tranexámico</strong> 1 g IV en 10 minutos ante hemorragia significativa, <strong>antes de 3 horas</strong> del trauma; luego 1 g en 8 horas</li>
          <li><strong>Analgesia:</strong> fentanilo 25-100 mcg IV titulado o ketamina 0,1-0,3 mg/kg; evitar AINE si hay sangrado</li>
          <li><strong>Inmovilización:</strong> alinear y ferulizar fracturas revisando pulsos antes y después; la tabla espinal sirve para extraer, no para traslados prolongados</li>
          <li>En heridas penetrantes, no retirar objetos empalados y no demorar el traslado por inmovilizar la columna si no hay déficit neurológico</li>
        </ul>
        <h3>Paro cardíaco traumático</h3>
        <p>Tratar de inmediato las causas reversibles, en paralelo con la reanimación: controlar la hemorragia externa, asegurar vía aérea y oxigenación, <strong>descomprimir ambos hemitórax</strong>, colocar faja pélvica y reponer sangre. En trauma penetrante de tórax con signos de vida recientes, considerar toracotomía de reanimación si hay operador y condiciones. Las compresiones no sustituyen a estas maniobras.</p>
        <ToolLink to="c23-s2">Abrir cronómetro de paro</ToolLink>
        <Connections
          drugs={['acido-tranexamico', 'fentanilo', 'ketamina', 'cloruro-sodio-3', 'glucosa']}
          ecg={['c19-s7', 'c19-s12']}
          scores={['glasgow', 'rts']}
          links={['c3-s8', 'c2-s5', 'c11-s1']}
        />
      </Section>

      <Section id="c24-s4" title="4. Conducta prehospitalaria y traslado">
        <Flow>
          <FlowStep step={1} label="Crítico">
            Alteración de A, B, C o D que no se corrige en terreno → traslado inmediato (meta: <strong>≤10 minutos en escena</strong>), procedimientos en ruta y prealerta
          </FlowStep>
          <FlowStep step={2} label="Potencialmente grave">
            Estable pero con criterio anatómico, de mecanismo o del paciente → centro de trauma, reevaluación seriada
          </FlowStep>
          <FlowStep step={3} label="Vía aérea imposible">
            Centro más cercano capaz de asegurarla, y luego traslado secundario
          </FlowStep>
          <FlowStep step={4} label="Estable sin criterios">
            Servicio de urgencia según red local; reevaluar signos vitales antes y durante el traslado
          </FlowStep>
        </Flow>
        <ul>
          <li>Repetir xABCDE tras cada intervención, cambio de posición o deterioro; en críticos, signos vitales cada 5 minutos</li>
          <li>Revisar en ruta torniquetes, tubo, descompresión torácica (puede ocluirse) y temperatura</li>
          <li>No perder tiempo en la escena para canalizar, inmovilizar fracturas menores o completar el examen secundario</li>
        </ul>
        <Callout type="perla">
          <p>El tratamiento definitivo de la hemorragia interna está en el pabellón o en angiografía: en el paciente que sangra por dentro, la mejor intervención prehospitalaria es llegar rápido y con prealerta.</p>
        </Callout>
      </Section>

      <Section id="c24-s5" title="5. Hospitalario: recepción y revisión primaria">
        <p><strong>Antes de la llegada:</strong> activar el equipo de trauma, asignar líder y roles, preparar vía aérea, calentador de fluidos, hemoderivados, ecógrafo y avisar a cirugía, imágenes y banco de sangre. <strong>A la llegada:</strong> escuchar el MIST en silencio (salvo riesgo inmediato) y reiniciar la secuencia xABCDE.</p>
        <Table>
          <thead>
            <tr>
              <th>Paso</th>
              <th>Conducta hospitalaria</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>x</strong></td>
              <td>Revisar torniquetes y taponamientos; control manual y quirúrgico del sangrado externo</td>
            </tr>
            <tr>
              <td><strong>A</strong></td>
              <td>Intubar si Glasgow ≤8, vía aérea amenazada, falla ventilatoria o inestabilidad que lo exija. Secuencia rápida con estabilización manual cervical: ketamina o etomidato en dosis reducida y rocuronio 1,2 mg/kg. <strong>Reanimar el shock antes de inducir</strong> siempre que la vía aérea lo permita</td>
            </tr>
            <tr>
              <td><strong>B</strong></td>
              <td>Drenaje pleural 28-32 Fr tras descompresión o ante hemoneumotórax; ventilación protectora (6 mL/kg de peso ideal); capnografía</td>
            </tr>
            <tr>
              <td><strong>C</strong></td>
              <td>Identificar las fuentes de sangrado: externa, tórax, abdomen, pelvis y retroperitoneo, huesos largos. E-FAST, dos accesos, grupo y pruebas cruzadas, protocolo de transfusión masiva si corresponde</td>
            </tr>
            <tr>
              <td><strong>D</strong></td>
              <td>Glasgow, pupilas y nivel motor y sensitivo antes de sedar; buscar signos de herniación</td>
            </tr>
            <tr>
              <td><strong>E</strong></td>
              <td>Exposición completa, giro en bloque, temperatura central y calentamiento activo</td>
            </tr>
          </tbody>
        </Table>
        <h3>Estudios que acompañan la revisión primaria</h3>
        <ul>
          <li><strong>E-FAST:</strong> pericardio, hipocondrio derecho e izquierdo, pelvis y ambos pulmones (neumotórax y hemotórax). Un resultado negativo no descarta lesión retroperitoneal ni de víscera hueca: repetirlo ante cambios</li>
          <li><strong>Radiografías</strong> de tórax y pelvis en el paciente inestable o cuando no habrá TAC inmediata</li>
          <li><strong>Laboratorio:</strong> gases, lactato y déficit de base, hemograma, TP/INR, TTPa, fibrinógeno, plaquetas, calcio iónico, potasio, creatinina, grupo y Rh, β-hCG, alcoholemia y toxicológico según contexto; pruebas viscoelásticas si hay</li>
          <li><strong>ECG y monitor</strong> en todo trauma torácico, electrocución, síncope previo o persona mayor</li>
          <li><strong>Sonda urinaria y gástrica</strong> cuando estén indicadas: no instalar sonda urinaria si hay sangre en el meato o sospecha de lesión uretral; usar vía orogástrica si se sospecha fractura de base de cráneo</li>
        </ul>
        <Connections
          drugs={['ketamina', 'etomidato', 'rocuronio', 'sugammadex', 'fentanilo', 'midazolam']}
          imaging={['c20-s3', 'c20-s5']}
          ecg={['c20-s1', 'c19-s10']}
          links={['c3-s2', 'c3-s6', 'c3-s9', 'c10-s10']}
        />
      </Section>

      <Section id="c24-s6" title="6. Shock hemorrágico y reanimación de control de daños">
        <p>En trauma, la hipotensión es hemorrágica hasta demostrar lo contrario. Descartar en paralelo causas obstructivas (neumotórax a tensión, taponamiento) y shock neurogénico.</p>
        <ul>
          <li><strong>Índice de shock</strong> (FC / PAS) &gt;1: sospechar hemorragia importante aunque la PA parezca aceptable</li>
          <li><strong>Score ABC</strong> para transfusión masiva (1 punto cada uno): mecanismo penetrante, PAS ≤90, FC ≥120, FAST positivo. Con <strong>≥2</strong>, activar el protocolo</li>
          <li>Hemoderivados en razón <strong>1:1:1</strong> (glóbulos rojos, plasma, plaquetas); limitar cristaloides y no usar coloides sintéticos</li>
          <li>El vasopresor no reemplaza al volumen ni al control del sangrado; considerarlo de forma transitoria si la meta no se logra</li>
        </ul>
        <Table>
          <thead>
            <tr>
              <th>Parámetro</th>
              <th>Meta durante la reanimación</th>
              <th>Corrección</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Presión arterial sin TEC</td>
              <td>PAS 80-90 mmHg hasta el control del sangrado</td>
              <td>Hemoderivados en bolos titulados</td>
            </tr>
            <tr>
              <td>Presión arterial con TEC grave</td>
              <td>PAM ≥80 mmHg</td>
              <td>Volumen y, si es necesario, noradrenalina</td>
            </tr>
            <tr>
              <td>Hemoglobina</td>
              <td>7-9 g/dL</td>
              <td>Glóbulos rojos</td>
            </tr>
            <tr>
              <td>Fibrinógeno</td>
              <td>&gt;1,5 g/L</td>
              <td>Fibrinógeno 3-4 g o crioprecipitado</td>
            </tr>
            <tr>
              <td>Plaquetas</td>
              <td>&gt;50.000/µL (&gt;100.000 con TEC o sangrado activo)</td>
              <td>Concentrado plaquetario</td>
            </tr>
            <tr>
              <td>Calcio iónico</td>
              <td>&gt;1,1 mmol/L</td>
              <td>Cloruro o gluconato de calcio; controlar tras cada tanda de hemoderivados</td>
            </tr>
            <tr>
              <td>Temperatura</td>
              <td>≥36 °C</td>
              <td>Calentador de fluidos y manta de aire</td>
            </tr>
            <tr>
              <td>Equilibrio ácido-base</td>
              <td>pH &gt;7,2 y lactato en descenso</td>
              <td>Restaurar perfusión; no corregir la acidosis solo con bicarbonato</td>
            </tr>
          </tbody>
        </Table>
        <h3>Reversión de anticoagulantes en trauma con sangrado vital</h3>
        <Table>
          <thead>
            <tr>
              <th>Fármaco del paciente</th>
              <th>Reversión</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Warfarina o acenocumarol</td>
              <td>Complejo protrombínico 25-50 UI/kg + vitamina K 5-10 mg IV</td>
            </tr>
            <tr>
              <td>Dabigatrán</td>
              <td>Idarucizumab 5 g IV</td>
            </tr>
            <tr>
              <td>Apixabán o rivaroxabán</td>
              <td>Andexanet alfa; si no está disponible, complejo protrombínico 25-50 UI/kg</td>
            </tr>
            <tr>
              <td>Heparina no fraccionada</td>
              <td>Protamina 1 mg por cada 100 UI recientes (máx. 50 mg)</td>
            </tr>
            <tr>
              <td>Antiagregantes</td>
              <td>No transfundir plaquetas de rutina; decidir con neurocirugía o cirugía según la lesión</td>
            </tr>
          </tbody>
        </Table>
        <h3>Respuesta a la reanimación inicial</h3>
        <Flow>
          <FlowStep step={1} label="No responde">
            Pabellón o angioembolización inmediata (cirugía de control de daños)
          </FlowStep>
          <FlowStep step={2} label="Respuesta transitoria">
            Sigue sangrando: hemoderivados, protocolo masivo y control definitivo urgente
          </FlowStep>
          <FlowStep step={4} label="Responde y se mantiene">
            TAC con contraste y manejo según lesiones, con vigilancia estrecha
          </FlowStep>
        </Flow>
        <Callout type="alerta">
          <p><strong>Rombo letal:</strong> hipotermia, acidosis, coagulopatía e hipocalcemia se potencian entre sí. Prevenirlas desde el primer minuto.</p>
        </Callout>
        <Connections
          drugs={['acido-tranexamico', 'complejo-protrombinico', 'vitamina-k', 'idarucizumab', 'andexanet', 'protamina', 'fibrinogeno', 'cloruro-calcio', 'gluconato-calcio', 'noradrenalina']}
          imaging={['c20-s5']}
          ecg={['c19-s9']}
          scores={['aast']}
          links={['c11-s1', 'c13-s3', 'c23-s3', 'c22-mezclas']}
        />
      </Section>

      <Section id="c24-s7" title="7. Revisión secundaria e imágenes">
        <p>Se inicia solo cuando la revisión primaria está completa y la reanimación en curso. Anamnesis <strong>SAMPLE</strong>: signos y síntomas, alergias, medicamentos (anticoagulantes), patologías y embarazo, última ingesta y eventos del trauma. Examen de cabeza a pies, incluyendo dorso, periné y examen neurológico completo.</p>
        <Table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Indicación</th>
              <th>Qué buscar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>TAC de cuerpo completo</strong></td>
              <td>Alta energía o múltiples regiones, en paciente estable o que responde</td>
              <td>Cerebro, columna, tórax, abdomen, pelvis y sangrado activo</td>
            </tr>
            <tr>
              <td><strong>TAC de cerebro</strong></td>
              <td>Glasgow &lt;15, pérdida de conciencia, amnesia, vómitos, focalidad, signos de fractura, anticoagulantes o edad ≥65</td>
              <td>Hematoma epidural, subdural, contusión, hemorragia subaracnoidea, desviación de línea media</td>
            </tr>
            <tr>
              <td><strong>TAC de columna cervical</strong></td>
              <td>No cumple criterios para descartar con regla canadiense o NEXUS</td>
              <td>Fracturas y luxaciones; resonancia si hay déficit sin lesión ósea</td>
            </tr>
            <tr>
              <td><strong>Radiografía de tórax</strong></td>
              <td>Revisión primaria; control de tubo y drenaje</td>
              <td>Neumotórax, hemotórax, contusión, fracturas costales, mediastino ancho</td>
            </tr>
            <tr>
              <td><strong>AngioTAC de tórax o cuello</strong></td>
              <td>Desaceleración brusca, mediastino ancho, signos vasculares cervicales, fracturas cervicales altas</td>
              <td>Lesión aórtica, disección carotídea o vertebral</td>
            </tr>
            <tr>
              <td><strong>TAC de abdomen y pelvis con contraste</strong></td>
              <td>Dolor, signo del cinturón, FAST positivo estable, hematuria, examen no confiable</td>
              <td>Lesión de órgano sólido (grado AAST), extravasación, víscera hueca, retroperitoneo</td>
            </tr>
            <tr>
              <td><strong>Radiografías de extremidades / angioTAC</strong></td>
              <td>Dolor o deformidad; índice tobillo-brazo &lt;0,9 o pulsos asimétricos</td>
              <td>Fracturas, luxaciones y lesión arterial</td>
            </tr>
          </tbody>
        </Table>
        <Callout type="alerta">
          <p>Un paciente inestable <strong>no va al escáner</strong>: va a pabellón, angiografía o continúa la reanimación en el box.</p>
        </Callout>
        <Connections
          imaging={['c20-s3', 'c20-s4', 'c20-s5']}
          scores={['cspine', 'nexus', 'iss']}
          links={['c14-s10']}
        />
      </Section>

      <Section id="c24-s8" title="8. Traumatismo encefalocraneano (TEC)">
        <p><strong>Gravedad por Glasgow tras la reanimación:</strong> leve 13-15 · moderado 9-12 · grave ≤8. <strong>Alarma:</strong> descenso de 2 o más puntos, anisocoria, déficit motor nuevo o tríada de Cushing (hipertensión, bradicardia, respiración irregular).</p>
        <h3>Manejo: evitar la lesión secundaria</h3>
        <ul>
          <li>SpO₂ ≥94% y PaCO₂ 35-45 mmHg; no hiperventilar de rutina</li>
          <li>PAS ≥100 mmHg entre los 50 y 69 años; ≥110 mmHg de 15 a 49 y desde los 70</li>
          <li>Cabecera a 30° (si la columna y la hemodinamia lo permiten), cuello alineado, normoglicemia, normotermia y sodio normal o normal-alto</li>
          <li><strong>Signos de herniación:</strong> NaCl 3% 2-5 mL/kg en 10-20 minutos o manitol 0,5-1 g/kg (no usar manitol si hay hipotensión); hiperventilación breve (PaCO₂ 30-35) solo como puente a neurocirugía</li>
          <li>Anticonvulsivante profiláctico por 7 días en TEC grave o con lesiones de alto riesgo; tratar de inmediato las crisis</li>
          <li>Ácido tranexámico antes de 3 horas: considerarlo en TEC leve o moderado con hemorragia intracraneal. Revertir anticoagulantes</li>
          <li><strong>No usar corticoides</strong></li>
        </ul>
        <h3>Conducta</h3>
        <ul>
          <li><strong>Neurocirugía urgente:</strong> hematoma con efecto de masa, fractura hundida o abierta, deterioro neurológico</li>
          <li><strong>UCI:</strong> TEC grave, o moderado con lesión en la TAC</li>
          <li><strong>Observación:</strong> TEC leve con factores de riesgo, anticoagulado o intoxicado: reevaluar y repetir TAC ante cualquier deterioro</li>
          <li><strong>Alta:</strong> Glasgow 15, TAC normal o no indicada, sin anticoagulación de riesgo, con acompañante y signos de alarma por escrito</li>
        </ul>
        <h3>Evolución</h3>
        <p>El hematoma epidural puede cursar con intervalo lúcido y deterioro rápido; el subdural puede manifestarse en días o semanas, sobre todo en mayores y anticoagulados. Secuelas posibles: epilepsia, trastornos cognitivos y del ánimo, síndrome posconmocional.</p>
        <Connections
          drugs={['cloruro-sodio-3', 'manitol', 'levetiracetam', 'fenitoina', 'acido-tranexamico', 'propofol', 'midazolam']}
          imaging={['c20-s4']}
          scores={['glasgow']}
          links={['c10-s6', 'c15-s4']}
        />
      </Section>

      <Section id="c24-s9" title="9. Trauma torácico">
        <Table>
          <thead>
            <tr>
              <th>Lesión</th>
              <th>Clínica y diagnóstico</th>
              <th>Manejo y conducta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Neumotórax a tensión</strong></td>
              <td>Disnea, hipotensión, murmullo abolido, yugulares ingurgitadas; diagnóstico clínico o ecográfico</td>
              <td>Descompresión inmediata, sin esperar radiografía, y luego drenaje pleural</td>
            </tr>
            <tr>
              <td><strong>Neumotórax abierto</strong></td>
              <td>Herida soplante</td>
              <td>Parche con válvula, drenaje pleural alejado de la herida y cirugía</td>
            </tr>
            <tr>
              <td><strong>Hemotórax masivo</strong></td>
              <td>Shock, matidez, murmullo disminuido</td>
              <td>Reponer sangre y drenar. <strong>Toracotomía</strong> si débito inicial &gt;1.500 mL o &gt;200 mL/h por 2-4 horas</td>
            </tr>
            <tr>
              <td><strong>Tórax volante</strong></td>
              <td>Movimiento paradójico, hipoxemia por contusión asociada</td>
              <td>Analgesia multimodal y bloqueos, oxígeno, ventilación no invasiva o invasiva; evaluar fijación quirúrgica</td>
            </tr>
            <tr>
              <td><strong>Contusión pulmonar</strong></td>
              <td>Hipoxemia que empeora en 24-48 horas</td>
              <td>Oxigenación, fluidos prudentes, vigilar SDRA y neumonía</td>
            </tr>
            <tr>
              <td><strong>Taponamiento cardíaco</strong></td>
              <td>Herida precordial, hipotensión, derrame en E-FAST</td>
              <td>Cirugía urgente; pericardiocentesis solo como puente</td>
            </tr>
            <tr>
              <td><strong>Lesión cardíaca cerrada</strong></td>
              <td>Golpe esternal; arritmias, cambios del ST, troponina alta</td>
              <td>ECG y troponina: si ambos son normales es improbable; si hay alteración, monitor 24 horas y ecocardiograma</td>
            </tr>
            <tr>
              <td><strong>Lesión aórtica</strong></td>
              <td>Desaceleración, mediastino ancho; angioTAC</td>
              <td>Control de frecuencia y presión (FC &lt;80, PAS 100-120) si no hay TEC ni shock; reparación endovascular o quirúrgica</td>
            </tr>
          </tbody>
        </Table>
        <h3>Conducta y evolución</h3>
        <ul>
          <li>Fracturas costales múltiples en mayores de 65 años: hospitalizar, por el alto riesgo de neumonía</li>
          <li>Neumotórax pequeño y estable sin ventilación mecánica: observar y repetir imagen</li>
          <li>Vigilar fuga aérea persistente, hemotórax retenido, empiema, neumonía y SDRA</li>
        </ul>
        <Connections
          drugs={['fentanilo', 'ketamina', 'paracetamol', 'esmolol', 'cefazolina']}
          imaging={['c20-s3', 'c20-s4']}
          ecg={['c19-s12', 'c19-s6', 'c19-s1']}
          links={['c2-s5', 'c2-s6', 'c1-s9', 'c8-s4']}
        />
      </Section>

      <Section id="c24-s10" title="10. Trauma abdominal y pélvico">
        <Table>
          <thead>
            <tr>
              <th>Situación</th>
              <th>Conducta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Trauma cerrado inestable con FAST positivo</td>
              <td>Laparotomía urgente</td>
            </tr>
            <tr>
              <td>Inestable con FAST negativo</td>
              <td>Buscar otra fuente (tórax, pelvis, retroperitoneo, externa); repetir FAST o aspirado peritoneal diagnóstico</td>
            </tr>
            <tr>
              <td>Estable</td>
              <td>TAC con contraste; órgano sólido sin sangrado activo: manejo no operatorio en unidad monitorizada; extravasación: angioembolización</td>
            </tr>
            <tr>
              <td>Penetrante con inestabilidad, peritonitis, evisceración o arma de fuego transabdominal</td>
              <td>Laparotomía; no retirar objetos empalados fuera de pabellón; cubrir vísceras con apósitos húmedos</td>
            </tr>
            <tr>
              <td>Herida por arma blanca, estable y sin peritonitis</td>
              <td>Exploración local, TAC y examen seriado</td>
            </tr>
            <tr>
              <td>Fractura de pelvis con shock</td>
              <td>Faja pélvica, transfusión, ácido tranexámico y control con angioembolización, empaquetamiento preperitoneal o fijación (oclusión endovascular de aorta en centros entrenados)</td>
            </tr>
          </tbody>
        </Table>
        <ul>
          <li>No repetir maniobras de estabilidad de la pelvis: aumentan el sangrado</li>
          <li>Sangre en el meato, hematoma perineal o escrotal: uretrografía retrógrada antes de sondar</li>
          <li><strong>Evolución:</strong> vigilar resangrado, lesión de víscera hueca de presentación tardía, síndrome compartimental abdominal y sepsis. Tras esplenectomía, vacunar contra gérmenes capsulados</li>
        </ul>
        <Connections
          drugs={['acido-tranexamico', 'ceftriaxona', 'metronidazol', 'piperacilina-tazobactam', 'fentanilo']}
          imaging={['c20-s4', 'c20-s5']}
          scores={['aast']}
          links={['c4-s5', 'c11-s1', 'c7-s10']}
        />
      </Section>

      <Section id="c24-s11" title="11. Columna y médula espinal">
        <ul>
          <li><strong>Sospechar</strong> con dolor en la línea media, déficit neurológico, alteración de conciencia, intoxicación, lesión distractora o alta energía</li>
          <li><strong>Examen:</strong> nivel sensitivo y motor, tono rectal cuando se sospeche lesión medular y clasificación ASIA; repetir y registrar la evolución</li>
          <li><strong>Lesión cervical alta:</strong> vigilar la ventilación (capacidad vital, uso de musculatura accesoria) e intubar precozmente</li>
          <li><strong>Shock neurogénico</strong> (hipotensión con bradicardia): descartar primero hemorragia; volumen prudente, noradrenalina y atropina si la bradicardia es sintomática. Meta de PAM 85-90 mmHg durante 5-7 días según protocolo</li>
          <li><strong>No</strong> usar metilprednisolona en dosis altas de rutina</li>
          <li><strong>Conducta:</strong> neurocirugía o equipo de columna precoz; descompresión idealmente antes de 24 horas cuando esté indicada; retirar la tabla cuanto antes para evitar lesiones por presión</li>
          <li><strong>Evolución:</strong> el shock medular puede ocultar el daño definitivo en los primeros días; riesgo de falla respiratoria, trombosis, íleo, retención urinaria y úlceras</li>
        </ul>
        <Connections
          drugs={['noradrenalina', 'atropina', 'fentanilo', 'paracetamol', 'enoxaparina']}
          imaging={['c20-s4']}
          ecg={['c20-s1']}
          scores={['cspine', 'nexus']}
          links={['c11-s6', 'c15-s3']}
        />
      </Section>

      <Section id="c24-s12" title="12. Extremidades, aplastamiento y quemaduras">
        <h3>Fracturas y lesiones de extremidades</h3>
        <ul>
          <li><strong>Fractura expuesta:</strong> cefazolina 2 g IV en la primera hora (agregar gentamicina en grado III), profilaxis antitetánica, apósito húmedo con suero, férula y aseo quirúrgico</li>
          <li><strong>Isquemia:</strong> reducir y alinear, revisar pulsos y revascularizar antes de 6 horas</li>
          <li><strong>Síndrome compartimental:</strong> dolor desproporcionado y al estiramiento pasivo; la pérdida de pulso es tardía. Presión diferencial (PAD − compartimental) &lt;30 mmHg: <strong>fasciotomía</strong></li>
          <li><strong>Amputación:</strong> envolver el segmento en gasa húmeda, en bolsa sellada dentro de agua con hielo, sin contacto directo con el hielo; rotular con la hora</li>
        </ul>
        <h3>Aplastamiento y rabdomiólisis</h3>
        <ul>
          <li>Iniciar suero fisiológico (cerca de 1 L/h en el adulto) <strong>antes de liberar</strong> la extremidad atrapada y titular a la diuresis</li>
          <li>Monitorizar ECG: la liberación puede causar <strong>hiperkalemia</strong> y arritmias. Evitar succinilcolina y fluidos con potasio</li>
          <li>Controlar CK, potasio, calcio, fósforo, creatinina y diuresis; diálisis si hay falla renal o hiperkalemia refractaria</li>
        </ul>
        <h3>Quemaduras asociadas</h3>
        <ul>
          <li>Detener la combustión y enfriar con agua templada 20 minutos (útil hasta 3 horas), evitando hipotermia</li>
          <li>Sospechar lesión inhalatoria (hollín, disfonía, estridor): intubar precozmente y evaluar monóxido de carbono y cianuro</li>
          <li>Reposición inicial: Ringer lactato 2 mL × kg × % de superficie quemada en 24 horas (mitad en las primeras 8), titulando a diuresis 0,5 mL/kg/h; mayor en quemadura eléctrica</li>
          <li>Derivar a centro de quemados según extensión, profundidad, localización, edad y lesiones asociadas</li>
        </ul>
        <Connections
          drugs={['cefazolina', 'gentamicina', 'gluconato-calcio', 'insulina', 'glucosa', 'salbutamol', 'hidroxocobalamina', 'vacuna-antitetanica']}
          imaging={['c20-s5']}
          ecg={['c19-s9', 'c20-s1']}
          links={['c13-s1', 'c25-s16', 'c18-s6']}
        />
      </Section>

      <Section id="c24-s13" title="13. Poblaciones especiales">
        <Table>
          <thead>
            <tr>
              <th>Paciente</th>
              <th>Particularidades de manejo y conducta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Embarazada</strong></td>
              <td>La mejor reanimación fetal es la materna. Desde las 20 semanas, desplazar el útero a la izquierda; el shock aparece tarde. Monitorización fetal al menos 4-6 horas si hay viabilidad, buscar desprendimiento de placenta, inmunoglobulina anti-D si es Rh negativa. En paro con útero a nivel del ombligo o más, cesárea de reanimación antes de 5 minutos. No omitir imágenes necesarias</td>
            </tr>
            <tr>
              <td><strong>Persona mayor</strong></td>
              <td>PAS &lt;110 puede ser shock; betabloqueadores ocultan la taquicardia. TAC precoz si usa anticoagulantes, revisar la causa de la caída (arritmia, síncope, fármacos) y bajar el umbral de hospitalización</td>
            </tr>
            <tr>
              <td><strong>Niño</strong></td>
              <td>Mantiene la presión hasta fases avanzadas; límite bajo de PAS: 70 + 2 × edad en años. Bolo de cristaloide 10-20 mL/kg y paso precoz a hemoderivados (10 mL/kg); ácido tranexámico 15 mg/kg. Sospechar maltrato si la historia no concuerda</td>
            </tr>
            <tr>
              <td><strong>Anticoagulado</strong></td>
              <td>Revertir según el fármaco, TAC precoz y observación aunque el examen inicial sea normal</td>
            </tr>
            <tr>
              <td><strong>Intoxicado o intento de autólisis</strong></td>
              <td>El Glasgow bajo no se atribuye al tóxico sin descartar lesión. Tras estabilizar, acompañamiento continuo y evaluación de salud mental antes del alta</td>
            </tr>
          </tbody>
        </Table>
        <Connections
          scores={['glasgow']}
          imaging={['c20-s4']}
          ecg={['c19-s8', 'c19-s3']}
          links={['c18-s1', 'c18-s7', 'c25-s17', 'c25-s18']}
        />
      </Section>

      <Section id="c24-s14" title="14. Conducta definitiva, destino y evolución">
        <Flow>
          <FlowStep step={1} label="Pabellón">
            Inestabilidad con sangrado interno, peritonitis, lesión neuroquirúrgica, taponamiento, isquemia o compartimental
          </FlowStep>
          <FlowStep step={2} label="Angiografía">
            Sangrado activo en pelvis u órgano sólido y lesiones vasculares tratables por vía endovascular
          </FlowStep>
          <FlowStep step={3} label="UCI / UTI">
            Ventilación mecánica, vasoactivos, transfusión masiva, TEC grave, lesión medular alta o manejo no operatorio de riesgo
          </FlowStep>
          <FlowStep step={4} label="Sala">
            Lesiones estables que requieren analgesia, vigilancia o cirugía diferida
          </FlowStep>
          <FlowStep step={5} label="Alta">
            Signos vitales normales, estudio completo sin lesiones que lo impidan, dolor controlado, deambulación segura, acompañante y signos de alarma
          </FlowStep>
        </Flow>
        <ul>
          <li><strong>Traslado secundario:</strong> decidir apenas se reconozca que las necesidades superan los recursos, sin retrasarlo por estudios que no cambiarán la conducta; coordinar médico a médico y enviar registro e imágenes</li>
          <li><strong>Revisión terciaria</strong> antes de 24 horas y al recuperar la conciencia, para detectar lesiones inadvertidas</li>
          <li><strong>Tromboprofilaxis</strong> mecánica desde el ingreso y farmacológica (enoxaparina) apenas el sangrado esté controlado, idealmente en 24-48 horas</li>
          <li>Registrar horas, lesiones, intervenciones y evolución; cumplir las notificaciones legales (violencia, accidentes del tránsito y del trabajo) y conservar evidencias</li>
        </ul>
        <h3>Evolución esperable y complicaciones</h3>
        <Table>
          <thead>
            <tr>
              <th>Momento</th>
              <th>Vigilar</th>
              <th>Cómo se detecta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Primeras 6 horas</strong></td>
              <td>Resangrado, coagulopatía, hipotermia, hematoma intracraneal en expansión, neumotórax</td>
              <td>Signos vitales, lactato, Hb, coagulación, Glasgow y pupilas seriados</td>
            </tr>
            <tr>
              <td><strong>6-72 horas</strong></td>
              <td>Síndrome compartimental, rabdomiólisis y lesión renal, contusión pulmonar, SDRA, embolia grasa, lesiones inadvertidas, privación de alcohol</td>
              <td>Examen terciario, CK, creatinina, oxigenación, imagen de control</td>
            </tr>
            <tr>
              <td><strong>Días a semanas</strong></td>
              <td>Trombosis venosa y embolia pulmonar, neumonía, sepsis, infección de herida, falla multiorgánica</td>
              <td>Curva febril, cultivos, ECG e imágenes según síntomas</td>
            </tr>
            <tr>
              <td><strong>Meses</strong></td>
              <td>Dolor crónico, discapacidad, estrés postraumático, depresión</td>
              <td>Rehabilitación precoz y salud mental</td>
            </tr>
          </tbody>
        </Table>
        <Connections
          drugs={['enoxaparina', 'paracetamol', 'morfina', 'cefazolina', 'vacuna-antitetanica']}
          imaging={['c20-s3', 'c20-s4', 'c20-s5']}
          ecg={['c19-s10']}
          scores={['news2']}
          links={['c1-s7', 'c2-s6', 'c12-s2', 'c21-s3']}
        />
      </Section>
    </>
  )
}

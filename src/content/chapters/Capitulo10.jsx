import Callout from '../../components/content/Callout.jsx'
import Section from '../../components/content/Section.jsx'
import ToolLink from '../../components/tools/ToolLink.jsx'

// Capítulo 10 · Los síndromes más comunes en el servicio de urgencia
export default function Capitulo10() {
  return (
    <>
      <p>Identificación, cuadro clínico, diagnóstico y tratamiento inicial de los síndromes de mayor frecuencia en la urgencia, alineados con los protocolos y orientaciones técnicas vigentes del MINSAL (Código ACV, manejo de sepsis, GES y normas de urgencia 2025).</p>
      <Section id="c10-s1" title="1. Síndrome coronario agudo (SCA)">
        <p><strong>Identificación:</strong> dolor torácico de inicio agudo en paciente con factores de riesgo cardiovascular (HTA, DM2, dislipidemia, tabaquismo, antecedente familiar).</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor retroesternal opresivo, irradiado a brazo izquierdo, mandíbula o dorso, &gt;20 minutos</p>
          </li>
          <li>
            <p>Disnea, diaforesis, náuseas; puede ser atípico en diabéticos, adultos mayores y mujeres</p>
          </li>
          <li>
            <p>Signos de falla de bomba (Killip) en casos avanzados</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>ECG de 12 derivaciones dentro de los primeros 10 minutos del ingreso</p>
          </li>
          <li>
            <p>Clasificación: SCA con supradesnivel ST (SCACEST) vs sin supradesnivel (SCASEST/angina inestable)</p>
          </li>
          <li>
            <p>Troponina de alta sensibilidad seriada (0-1 h o 0-3 h según protocolo local)</p>
          </li>
          <li>
            <p>Score HEART o TIMI para estratificación de riesgo en SCASEST</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Aspirina 300 mg VO (masticada) de carga</p>
          </li>
          <li>
            <p>Clopidogrel 300-600 mg VO de carga (o Ticagrelor 180 mg VO si no hay contraindicación)</p>
          </li>
          <li>
            <p>Oxígeno solo si SpO₂ &lt;90%</p>
          </li>
          <li>
            <p>Nitroglicerina SL 0.4 mg (contraindicada si hipotensión, IAM de VD o uso reciente de inhibidores de PDE5)</p>
          </li>
          <li>
            <p>Morfina 2-4 mg IV si dolor persiste pese a nitratos</p>
          </li>
          <li>
            <p>Heparina no fraccionada (bolo 60 UI/kg, máx. 4.000 UI) o Enoxaparina 1 mg/kg SC c/12 h</p>
          </li>
          <li>
            <p><strong>SCACEST:</strong> reperfusión urgente — angioplastía primaria (meta puerta-balón &lt;90 min) o trombolisis (Tenecteplase según peso) si no hay acceso a hemodinamia dentro de 120 min, activando red de derivación según norma de Código Infarto/GES</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Un ECG normal no descarta SCA — la troponina seriada y la clínica mandan la decisión, especialmente en SCASEST.</p>
        </Callout>
      </Section>
      <Section id="c10-s2" title="2. Código ACV / Síndrome de déficit neurológico agudo">
        <ToolLink to="c23-s5">Seguir el algoritmo de ACV</ToolLink>
        <p><strong>Identificación:</strong> inicio súbito de déficit neurológico focal; se activa como Código ACV desde el primer contacto (prehospitalario o triage).</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Asimetría facial, debilidad de extremidades, alteración del habla o lenguaje</p>
          </li>
          <li>
            <p>Escala de Cincinnati positiva en la pesquisa prehospitalaria</p>
          </li>
          <li>
            <p>Tiempo de inicio de síntomas es el dato más crítico a precisar (última vez visto sano)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Glicemia capilar inmediata (descartar hipoglicemia como mimic)</p>
          </li>
          <li>
            <p>TAC de cerebro sin contraste urgente (meta puerta-imagen &lt;25 min) para diferenciar isquémico de hemorrágico</p>
          </li>
          <li>
            <p>NIHSS para cuantificar severidad</p>
          </li>
          <li>
            <p>AngioTAC de vasos cerebrales si se sospecha oclusión de gran vaso (candidato a trombectomía)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p><strong>ACV isquémico dentro de ventana:</strong> trombolisis con Alteplase 0.9 mg/kg IV (máx. 90 mg; 10% en bolo, resto en infusión de 60 min) dentro de 4.5 h desde el inicio de síntomas, si no hay contraindicación</p>
          </li>
          <li>
            <p>Trombectomía mecánica hasta 24 h en oclusión de gran vaso seleccionada por imagen</p>
          </li>
          <li>
            <p>Manejo de presión arterial: permitir hasta 220/120 mmHg si no se trombolisa; si se trombolisa, meta &lt;180/105 mmHg</p>
          </li>
          <li>
            <p><strong>ACV hemorrágico:</strong> control estricto de PA (meta PAS &lt;140 mmHg), reversión de anticoagulación si corresponde, evaluación neuroquirúrgica</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>"tiempo es cerebro" — cada Código ACV debe activarse antes de tener el diagnóstico confirmado; la sospecha clínica basta para iniciar el protocolo.</p>
        </Callout>
      </Section>
      <Section id="c10-s3" title="3. Sepsis y shock séptico">
        <Callout type="nota">
          <p>Desarrollo completo con las <strong>Recomendaciones SOCHIMI</strong> y la actualización Surviving Sepsis Campaign 2026 en el <strong>Capítulo 12</strong>.</p>
        </Callout>
        <p><strong>Identificación:</strong> paciente con foco infeccioso sospechado o confirmado que presenta signos de disfunción orgánica.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Fiebre o hipotermia, taquicardia, taquipnea</p>
          </li>
          <li>
            <p>Alteración del estado mental, oliguria, piel moteada</p>
          </li>
          <li>
            <p>Hipotensión que no responde a volumen en shock séptico</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>qSOFA (≥2: FR ≥22, alteración de conciencia, PAS ≤100 mmHg) como tamizaje rápido</p>
          </li>
          <li>
            <p>SOFA para confirmar disfunción orgánica en el paciente hospitalizado</p>
          </li>
          <li>
            <p>Lactato sérico, hemocultivos (2 sets) antes de iniciar antibiótico si no retrasa el tratamiento</p>
          </li>
          <li>
            <p>Búsqueda activa del foco (orina, radiografía de tórax, imágenes según sospecha)</p>
          </li>
        </ul>
        <p><strong>Tratamiento (paquete de la primera hora):</strong></p>
        <ul>
          <li>
            <p>Cristaloides IV 30 mL/kg en las primeras 3 horas si hay hipoperfusión</p>
          </li>
          <li>
            <p>Antibiótico empírico de amplio espectro dentro de la primera hora (ajustar según foco sospechado, ej. Ceftriaxona 2 g IV o Piperacilina-tazobactam 4.5 g IV según sospecha)</p>
          </li>
          <li>
            <p>Noradrenalina como vasopresor de primera línea si persiste hipotensión pese a volumen (meta PAM ≥65 mmHg)</p>
          </li>
          <li>
            <p>Reevaluación con lactato de control y estado de volumen</p>
          </li>
          <li>
            <p>Ingreso a UCI si requiere vasopresores o falla orgánica múltiple</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Cada hora de retraso en el antibiótico apropiado aumenta la mortalidad en shock séptico — no esperar exámenes para iniciar tratamiento.</p>
        </Callout>
      </Section>
      <Section id="c10-s4" title="4. Síndrome de dificultad respiratoria aguda / Insuficiencia respiratoria">
        <p><strong>Identificación:</strong> disnea de inicio agudo o subagudo, con o sin antecedente respiratorio o cardíaco previo.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Taquipnea, uso de musculatura accesoria, cianosis en casos severos</p>
          </li>
          <li>
            <p>Auscultación orientadora: crépitos (EPA/neumonía), sibilancias (asma/EPOC), murmullo pulmonar abolido (neumotórax/derrame)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Saturometría y gases arteriales (relación PaO₂/FiO₂ para clasificar SDRA: leve 200-300, moderado 100-200, severo &lt;100)</p>
          </li>
          <li>
            <p>Radiografía de tórax; ecografía pulmonar a la cabecera (líneas B difusas en edema, deslizamiento pleural ausente en neumotórax)</p>
          </li>
          <li>
            <p>NT-proBNP si se sospecha origen cardiogénico</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Oxigenoterapia titulada a SpO₂ 94-98% (88-92% en EPOC retenedor de CO₂)</p>
          </li>
          <li>
            <p>Ventilación no invasiva (CPAP/BiPAP) en edema pulmonar agudo cardiogénico y exacerbación de EPOC</p>
          </li>
          <li>
            <p>Manejo dirigido a la causa: Furosemida 40 mg IV en EPA, Salbutamol + Bromuro de ipratropio nebulizado en broncoespasmo, drenaje pleural en neumotórax a tensión</p>
          </li>
          <li>
            <p>Intubación orotraqueal y ventilación mecánica invasiva si hay falla respiratoria refractaria (considerar volumen corriente bajo 6 mL/kg de peso predicho si SDRA)</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La ecografía pulmonar a pie de cama distingue en minutos edema pulmonar, neumotórax y derrame, acelerando el tratamiento dirigido.</p>
        </Callout>
      </Section>
      <Section id="c10-s5" title="5. Síndrome confusional agudo (Delirium)">
        <p><strong>Identificación:</strong> más frecuente en adultos mayores hospitalizados o con comorbilidad; cambio agudo y fluctuante del estado mental.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Alteración de la atención y conciencia de inicio agudo, curso fluctuante</p>
          </li>
          <li>
            <p>Puede ser hiperactivo (agitación), hipoactivo (letargia, más subdiagnosticado) o mixto</p>
          </li>
          <li>
            <p>Buscar siempre causa orgánica subyacente (nunca es un diagnóstico primario en el adulto mayor)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>CAM (Confusion Assessment Method): inicio agudo + curso fluctuante + inatención + (pensamiento desorganizado o alteración de conciencia)</p>
          </li>
          <li>
            <p>Panel de causas reversibles: glicemia, electrolitos, función renal, hemograma, sedimento de orina, saturometría, ECG</p>
          </li>
          <li>
            <p>Descartar globo vesical y fecaloma como causas frecuentes y reversibles</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Manejo no farmacológico de primera línea: reorientación, luz natural, evitar contención física, movilización precoz, corrección de déficit sensorial (lentes, audífonos)</p>
          </li>
          <li>
            <p>Tratar la causa desencadenante (infección, retención urinaria, dolor no controlado, deprivación de fármacos)</p>
          </li>
          <li>
            <p>Si hay agitación severa con riesgo para el paciente o el equipo: Haloperidol 0.5-1 mg IM/IV (evitar en Parkinson o demencia por cuerpos de Lewy, usar Quetiapina en esos casos)</p>
          </li>
          <li>
            <p>Evitar benzodiacepinas salvo delirium por deprivación de alcohol o benzodiacepinas</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El delirium hipoactivo es el más frecuente y el más subdiagnosticado — sospecharlo en todo adulto mayor "tranquilo mente decaído" durante la hospitalización.</p>
        </Callout>
      </Section>
      <Section id="c10-s6" title="6. Síndrome convulsivo / Estado epiléptico">
        <p><strong>Identificación:</strong> paciente con crisis convulsiva presenciada, con o sin antecedente de epilepsia conocida.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Crisis tónico-clónica generalizada, pérdida de conciencia, período postictal</p>
          </li>
          <li>
            <p>Estado epiléptico: crisis &gt;5 minutos o crisis recurrentes sin recuperación de conciencia entre ellas</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Glicemia capilar inmediata (hipoglicemia es causa reversible frecuente)</p>
          </li>
          <li>
            <p>Electrolitos (sodio, calcio, magnesio), función renal, niveles de fármacos antiepilépticos si corresponde</p>
          </li>
          <li>
            <p>TAC de cerebro si es primera crisis, focalidad neurológica persistente o trauma asociado</p>
          </li>
          <li>
            <p>EEG si no hay recuperación de conciencia esperada (descartar estado no convulsivo)</p>
          </li>
        </ul>
        <p><strong>Tratamiento (estado epiléptico):</strong></p>
        <ul>
          <li>
            <p><strong>Minuto 0-5:</strong> vía aérea, oxígeno, monitorización, glicemia; Tiamina 100 mg IV + glucosa si hipoglicemia o etilismo</p>
          </li>
          <li>
            <p><strong>Minuto 5-20 (primera línea):</strong> Lorazepam 0.1 mg/kg IV (máx. 4 mg por dosis, repetir una vez) o Diazepam 0.15-0.2 mg/kg IV si no hay lorazepam</p>
          </li>
          <li>
            <p><strong>Minuto 20-40 (segunda línea):</strong> Levetiracetam 60 mg/kg IV (máx. 4.500 mg) o Ácido valproico 40 mg/kg IV o Fenitoína 20 mg/kg IV a velocidad controlada</p>
          </li>
          <li>
            <p><strong>Refractario (&gt;40 min):</strong> inducción de coma con Midazolam, Propofol o Tiopental en UCI, con intubación y EEG continuo</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>No esperar los 5 minutos completos si la crisis no cede espontáneamente y ya se dispone de acceso venoso — tratar precozmente reduce la progresión a estado refractario.</p>
        </Callout>
      </Section>
      <Section id="c10-s7" title="7. Síndrome vertiginoso">
        <p><strong>Identificación:</strong> sensación de movimiento (rotatorio) o inestabilidad de inicio agudo; el desafío es diferenciar vértigo periférico de central.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Periférico: vértigo intenso, náuseas/vómitos marcados, nistagmo horizontal unidireccional, se atenúa con la fijación visual</p>
          </li>
          <li>
            <p>Central: puede tener menor intensidad subjetiva pero con signos de alarma (diplopía, disartria, ataxia, cefalea intensa, nistagmo vertical o que cambia de dirección)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>HINTS (Head Impulse, Nystagmus, Test of Skew) realizado por personal entrenado: más sensible que la TAC para diferenciar central de periférico en la fase aguda</p>
          </li>
          <li>
            <p>Dix-Hallpike si se sospecha vértigo posicional paroxístico benigno (VPPB)</p>
          </li>
          <li>
            <p>TAC/RM de cerebro si hay signos de alarma o HINTS sugerente de causa central (sospecha de ACV de fosa posterior)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p><strong>VPPB:</strong> maniobra de reposición canalicular (Epley) — de elección, resolutiva en la mayoría de los casos</p>
          </li>
          <li>
            <p><strong>Vértigo periférico agudo (neuritis vestibular):</strong> Betahistina 24 mg VO c/12 h; antieméticos como Metoclopramida 10 mg IV; corticoides (Prednisona 1 mg/kg/día en descenso) si se inicia dentro de las primeras 72 h</p>
          </li>
          <li>
            <p><strong>Sospecha de causa central:</strong> manejo como Código ACV según hallazgos, evaluación neurológica urgente</p>
          </li>
          <li>
            <p>Evitar sedantes vestibulares (Betahistina/benzodiacepinas) más allá de 48-72 h por riesgo de retrasar la compensación vestibular</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El HINTS bien realizado es más sensible que la TAC de cerebro para descartar un ACV de fosa posterior en el vértigo agudo — "un HINTS periférico" con TAC normal no descarta central si la técnica fue mal aplicada.</p>
        </Callout>
      </Section>
      <Section id="c10-s8" title="8. Síndrome meníngeo">
        <p><strong>Identificación:</strong> cefalea intensa de inicio agudo asociada a signos de irritación meníngea, con o sin fiebre.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Cefalea, fiebre, rigidez de nuca (tríada clásica, presente solo en una minoría)</p>
          </li>
          <li>
            <p>Signos de Kernig y Brudzinski positivos</p>
          </li>
          <li>
            <p>Fotofobia, náuseas, vómitos; compromiso de conciencia y petequias en meningococcemia (signo de gravedad)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Punción lumbar (salvo contraindicación: signos de hipertensión endocraneana, focalidad neurológica, inmunosupresión — en esos casos, TAC de cerebro previo)</p>
          </li>
          <li>
            <p>Citoquímico de LCR: pleocitosis neutrofílica + glucosa baja + proteínas altas orienta a bacteriana; pleocitosis linfocitaria con glucosa normal orienta a viral</p>
          </li>
          <li>
            <p>Hemocultivos antes o simultáneos al inicio de antibiótico si la punción se retrasa</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p><strong>No retrasar el antibiótico esperando la punción lumbar si hay sospecha de meningitis bacteriana</strong></p>
          </li>
          <li>
            <p>Ceftriaxona 2 g IV c/12 h (empírico); agregar Ampicilina 2 g IV c/4 h si hay sospecha de Listeria (adultos &gt;50 años, inmunosuprimidos)</p>
          </li>
          <li>
            <p>Dexametasona 10 mg IV previo o junto a la primera dosis de antibiótico (reduce complicaciones neurológicas en meningitis neumocócica)</p>
          </li>
          <li>
            <p>Aislamiento de gotitas hasta 24 h de antibiótico si se sospecha meningococo</p>
          </li>
          <li>
            <p>Profilaxis a contactos estrechos con Ciprofloxacino o Rifampicina si se confirma meningococo</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La tríada clásica (fiebre + rigidez de nuca + compromiso de conciencia) está ausente en gran parte de los casos — un alto índice de sospecha clínica es más útil que esperar el cuadro completo.</p>
        </Callout>
      </Section>
      <Section id="c10-s9" title="9. Síndrome anémico agudo / Hemorragia digestiva">
        <p><strong>Identificación:</strong> paciente con palidez, fatiga o inestabilidad hemodinámica de inicio agudo, con o sin sangrado evidente (hematemesis, melena, hematoquecia).</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Palidez de piel y mucosas, taquicardia, hipotensión ortostática o shock según magnitud de la pérdida</p>
          </li>
          <li>
            <p>Hematemesis o melena orientan a hemorragia digestiva alta; hematoquecia a baja (aunque una HDA masiva también puede presentarse como hematoquecia)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Hemograma (considerar que la hemoglobina puede no reflejar la pérdida aguda real en las primeras horas por hemoconcentración)</p>
          </li>
          <li>
            <p>Score de Glasgow-Blatchford para estratificar riesgo y necesidad de endoscopía urgente en HDA</p>
          </li>
          <li>
            <p>Perfil de coagulación, función renal (BUN elevado desproporcionado a creatinina sugiere HDA)</p>
          </li>
          <li>
            <p>Endoscopía digestiva alta dentro de 24 h (o antes si hay inestabilidad) en sospecha de HDA</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Reanimación con cristaloides y transfusión de glóbulos rojos si Hb &lt;7 g/dL (umbral más liberal en cardiopatía isquémica o inestabilidad: &lt;8-9 g/dL)</p>
          </li>
          <li>
            <p>Omeprazol 80 mg IV en bolo, luego infusión 8 mg/h (o 40 mg IV c/12 h) ante sospecha de HDA</p>
          </li>
          <li>
            <p>Terlipresina o somatostatina + Ceftriaxona profiláctica si se sospecha origen variceal (cirrótico)</p>
          </li>
          <li>
            <p>Corrección de coagulopatía (vitamina K, plasma fresco congelado, reversión de anticoagulantes según corresponda)</p>
          </li>
          <li>
            <p>Endoscopía terapéutica o angiografía/cirugía si el sangrado persiste pese al manejo médico</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>En el paciente cirrótico con hematemesis, iniciar Terlipresina y antibiótico profiláctico antes de la endoscopía cambia el pronóstico, no solo el manejo endoscópico.</p>
        </Callout>
      </Section>
      <Section id="c10-s10" title="10. Síndrome de shock">
        <p><strong>Identificación:</strong> falla circulatoria aguda con hipoperfusión tisular; requiere identificar rápidamente el tipo de shock para dirigir el tratamiento.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Hipotensión, taquicardia, piel fría y moteada (o caliente en shock distributivo temprano), alteración de conciencia, oliguria</p>
          </li>
          <li>
            <p>Clasificación: hipovolémico (hemorragia, deshidratación), cardiogénico (falla de bomba), distributivo (séptico, anafiláctico, neurogénico), obstructivo (TEP masivo, taponamiento, neumotórax a tensión)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Lactato sérico como marcador de hipoperfusión y respuesta a tratamiento</p>
          </li>
          <li>
            <p>Ecografía a la cabecera (protocolo RUSH): evalúa bomba (función cardíaca, derrame pericárdico), estanque (volumen intravascular, vena cava inferior) y tuberías (aorta, TVP) para orientar el tipo de shock</p>
          </li>
          <li>
            <p>Gases venosos/arteriales, función renal, hemograma según sospecha etiológica</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p><strong>Hipovolémico/hemorrágico:</strong> control del sangrado, cristaloides y transfusión precoz (protocolo de transfusión masiva si corresponde)</p>
          </li>
          <li>
            <p><strong>Cardiogénico:</strong> evitar sobrecarga de volumen; Noradrenalina o Dobutamina según perfil hemodinámico; tratar la causa (ej. reperfusión en SCA)</p>
          </li>
          <li>
            <p><strong>Distributivo (séptico):</strong> cristaloides 30 mL/kg + Noradrenalina como vasopresor de primera línea; en anafiláctico, Adrenalina IM 0.5 mg en cara anterolateral del muslo como primera medida, antes que cualquier otro fármaco</p>
          </li>
          <li>
            <p><strong>Obstructivo:</strong> tratamiento específico de la causa (trombolisis en TEP masivo, pericardiocentesis en taponamiento, descompresión con aguja en neumotórax a tensión)</p>
          </li>
          <li>
            <p>Monitorización continua y reevaluación frecuente de la respuesta a cada intervención</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>En shock anafiláctico la Adrenalina IM es la primera y más importante medida — los antihistamínicos y corticoides son manejo adyuvante, nunca de primera línea.</p>
        </Callout>
        <p><em>Manual de bolsillo — Capítulo 10: Síndromes más comunes en la urgencia. Las dosis son de referencia general y deben ajustarse a función renal/hepática, peso e interacciones del paciente, y a los protocolos institucionales y normas MINSAL vigentes.</em></p>
      </Section>
    </>
  )
}

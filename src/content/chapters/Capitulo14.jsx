import Callout from '../../components/content/Callout.jsx'
import Section from '../../components/content/Section.jsx'

// Capítulo 14 · Accidente cerebrovascular (ACV) en el servicio de urgencia
export default function Capitulo14() {
  return (
    <>
      <Callout type="nota">
        <p>Para distinguir una parálisis facial <strong>central</strong> (ACV) de una <strong>periférica</strong> (Bell), ver el <strong>Capítulo 15</strong>.</p>
      </Callout>
      <p>Definición, cuadro clínico, diagnóstico y tratamiento inicial de los principales síndromes de accidente cerebrovascular en urgencia, alineados con el protocolo Código ACV del MINSAL y las guías vigentes de manejo de enfermedad cerebrovascular isquémica y hemorrágica.</p>
      <Section id="c14-s1" title="1. ACV isquémico de arteria cerebral media (ACM)">
        <p><strong>Definición:</strong> infarto cerebral por oclusión de la arteria cerebral media o sus ramas, el territorio vascular más frecuentemente comprometido en el ACV isquémico.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Hemiparesia y hemihipoestesia contralaterales de predominio faciobraquial (cara y brazo más comprometidos que la pierna)</p>
          </li>
          <li>
            <p>Afasia (si compromete el hemisferio dominante, habitualmente izquierdo) o heminegligencia y anosognosia (si compromete el hemisferio no dominante)</p>
          </li>
          <li>
            <p>Hemianopsia homónima contralateral y desviación oculocefálica hacia el lado de la lesión</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Glicemia capilar inmediata para descartar hipoglicemia como mimic</p>
          </li>
          <li>
            <p>TAC de cerebro sin contraste urgente (meta puerta-imagen &lt;25 minutos): puede ser normal en las primeras horas o mostrar signos precoces (pérdida de diferenciación corteza-sustancia blanca, signo de la arteria cerebral media hiperdensa)</p>
          </li>
          <li>
            <p>Score ASPECTS (Alberta Stroke Program Early CT Score) sobre TAC simple: 10 puntos normal, restar 1 punto por cada región afectada; ASPECTS ≤6 se asocia a mayor riesgo de transformación hemorrágica</p>
          </li>
          <li>
            <p>NIHSS (National Institutes of Health Stroke Scale) para cuantificar severidad y monitorizar evolución</p>
          </li>
          <li>
            <p>AngioTAC de vasos cerebrales si se sospecha oclusión de gran vaso, candidata a trombectomía</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Trombolisis con Alteplase 0.9 mg/kg IV (dosis máxima 90 mg; 10% en bolo en 1 minuto, 90% en infusión durante 60 minutos) dentro de 4.5 horas desde el inicio de síntomas, si no hay contraindicación</p>
          </li>
          <li>
            <p>Trombectomía mecánica hasta 24 horas en oclusión de gran vaso (ACM proximal, M1) seleccionada por criterios de imagen (perfusión o mismatch clínico-radiológico)</p>
          </li>
          <li>
            <p>Manejo de presión arterial: permitir hasta 220/120 mmHg si no se trombolisa; meta &lt;180/105 mmHg si se trombolisa o se realiza trombectomía</p>
          </li>
          <li>
            <p>Aspirina 300 mg VO/SNG a las 24 horas de la trombolisis (o de inmediato si no se trombolisó), tras descartar transformación hemorrágica con TAC de control</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La combinación de afasia (o heminegligencia) más hemiparesia faciobraquial es altamente sugerente de compromiso de arteria cerebral media — el territorio isquémico más frecuente y el de mayor beneficio potencial con trombectomía.</p>
        </Callout>
      </Section>
      <Section id="c14-s2" title="2. ACV isquémico de arteria cerebral anterior (ACA)">
        <p><strong>Definición:</strong> infarto cerebral por oclusión de la arteria cerebral anterior, territorio menos frecuente que el de la ACM.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Hemiparesia y hemihipoestesia contralaterales de predominio crural (pierna más comprometida que el brazo o la cara)</p>
          </li>
          <li>
            <p>Alteraciones conductuales: abulia, apatía, mutismo acinético en lesiones bilaterales o extensas</p>
          </li>
          <li>
            <p>Incontinencia urinaria, reflejo de prensión (grasping) contralateral, posible apraxia de la marcha</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>TAC de cerebro sin contraste urgente; puede mostrar hipodensidad en la región frontomedial y parasagital</p>
          </li>
          <li>
            <p>NIHSS (puede subestimar la severidad real, ya que la escala pondera más el compromiso de brazo/cara que el de pierna)</p>
          </li>
          <li>
            <p>AngioTAC si se sospecha oclusión proximal candidata a trombectomía (menos frecuente que en territorio de ACM por dificultad técnica de acceso)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Trombolisis con Alteplase 0.9 mg/kg IV (igual esquema que ACM) dentro de la ventana de 4.5 horas</p>
          </li>
          <li>
            <p>Trombectomía mecánica según disponibilidad técnica y criterios de imagen, aunque de menor rendimiento que en ACM por la anatomía vascular</p>
          </li>
          <li>
            <p>Mismo manejo de presión arterial y antiagregación diferida que en el ACV de ACM</p>
          </li>
          <li>
            <p>Vigilancia de complicaciones conductuales (abulia) que pueden dificultar la rehabilitación precoz</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Un paciente con debilidad predominante de la pierna y cambio conductual (abulia, mutismo) más que déficit facial franco debe hacer sospechar compromiso de arteria cerebral anterior, territorio menos reconocido que el de la ACM.</p>
        </Callout>
      </Section>
      <Section id="c14-s3" title="3. ACV isquémico de arteria cerebral posterior (ACP)">
        <p><strong>Definición:</strong> infarto cerebral por oclusión de la arteria cerebral posterior o sus ramas, que irriga predominantemente el lóbulo occipital y estructuras talámicas.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Hemianopsia homónima contralateral, frecuentemente como único hallazgo o predominante (con relativa preservación de fuerza y sensibilidad)</p>
          </li>
          <li>
            <p>Alexia sin agrafia si compromete el hemisferio dominante (esplenio del cuerpo calloso)</p>
          </li>
          <li>
            <p>Síndrome talámico si hay compromiso del tálamo: hemihipoestesia contralateral con posterior dolor neuropático (síndrome de Dejerine-Roussy)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>TAC de cerebro sin contraste (menor sensibilidad para infartos occipitales y de fosa posterior en etapa aguda)</p>
          </li>
          <li>
            <p>Resonancia magnética con difusión (más sensible que la TAC para este territorio) si el diagnóstico es incierto y el paciente está estable</p>
          </li>
          <li>
            <p>AngioTAC de vasos cerebrales para evaluar el territorio vertebrobasilar</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Trombolisis con Alteplase 0.9 mg/kg IV dentro de ventana de 4.5 horas si cumple criterios, igual esquema que en otros territorios</p>
          </li>
          <li>
            <p>Trombectomía mecánica en oclusión proximal de arteria basilar o cerebral posterior seleccionada, con ventana extendida hasta 24 horas en casos seleccionados</p>
          </li>
          <li>
            <p>Manejo de presión arterial según el mismo esquema que otros ACV isquémicos</p>
          </li>
          <li>
            <p>Evaluación oftalmológica/neurológica de la hemianopsia para planificación de rehabilitación</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Un paciente que consulta solo por "no ver bien de un lado" sin déficit motor evidente puede tener un ACV de arteria cerebral posterior — la ausencia de debilidad no descarta un ACV.</p>
        </Callout>
      </Section>
      <Section id="c14-s4" title="4. ACV isquémico de circulación posterior (vertebrobasilar)">
        <p><strong>Definición:</strong> infarto de tronco encefálico o cerebelo por compromiso del sistema vertebrobasilar, de mayor dificultad diagnóstica por su presentación con frecuencia inespecífica.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Vértigo, ataxia, diplopía, disartria, disfagia — síntomas que pueden confundirse con causas periféricas (síndrome vertiginoso central)</p>
          </li>
          <li>
            <p>Signos cruzados (déficit de pares craneales ipsilaterales a la lesión con hemiparesia/hemihipoestesia contralateral) sugieren compromiso de tronco encefálico</p>
          </li>
          <li>
            <p>Compromiso de conciencia y signos de herniación en infartos cerebelosos extensos con efecto de masa</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>HINTS (Head Impulse, Nystagmus, Test of Skew) realizado por personal entrenado en el vértigo agudo, más sensible que la TAC inicial para diferenciar causa central de periférica</p>
          </li>
          <li>
            <p>TAC de cerebro sin contraste (baja sensibilidad para fosa posterior en fase aguda, por artefacto óseo)</p>
          </li>
          <li>
            <p>Resonancia magnética con difusión (examen de elección si hay alta sospecha y TAC no concluyente)</p>
          </li>
          <li>
            <p>AngioTAC de troncos supraaórticos y circulación posterior para evaluar oclusión de arteria basilar</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Trombolisis con Alteplase 0.9 mg/kg IV dentro de ventana de 4.5 horas si cumple criterios</p>
          </li>
          <li>
            <p>Trombectomía mecánica en oclusión de arteria basilar, con ventana extendida (hasta 24 h) dado el curso frecuentemente fluctuante y la alta mortalidad sin tratamiento</p>
          </li>
          <li>
            <p>Manejo de presión arterial según esquema estándar de ACV isquémico</p>
          </li>
          <li>
            <p>Vigilancia estrecha de la vía aérea y del estado de conciencia; interconsulta neuroquirúrgica precoz en infarto cerebeloso extenso con riesgo de hidrocefalia obstructiva o herniación (puede requerir craniectomía descompresiva)</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Un HINTS central en un paciente con "solo vértigo" debe hacer sospechar un infarto de fosa posterior aunque la TAC inicial sea normal — la resonancia con difusión es el examen que confirma el diagnóstico.</p>
        </Callout>
      </Section>
      <Section id="c14-s5" title="5. Ataque isquémico transitorio (AIT)">
        <p><strong>Definición:</strong> episodio breve de disfunción neurológica focal causado por isquemia cerebral, medular o retiniana, sin evidencia de infarto agudo en la neuroimagen, con resolución completa habitualmente dentro de la primera hora.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Déficit neurológico focal de instalación súbita y resolución completa (debilidad, alteración del habla, pérdida visual transitoria — amaurosis fugaz)</p>
          </li>
          <li>
            <p>Los síntomas ya deben haber resuelto al momento de la evaluación; el diagnóstico es retrospectivo</p>
          </li>
          <li>
            <p>Representa una urgencia médica por el alto riesgo de ACV establecido en los días siguientes</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Score ABCD2 para estratificar riesgo de ACV a corto plazo (Edad ≥60 años: 1 punto; presión arterial ≥140/90: 1 punto; clínica —debilidad unilateral: 2 puntos, alteración del habla sin debilidad: 1 punto—; Duración ≥60 min: 2 puntos, 10-59 min: 1 punto; Diabetes: 1 punto); score ≥4 indica alto riesgo y hospitalización</p>
          </li>
          <li>
            <p>Resonancia magnética con difusión (de elección) o TAC de cerebro para descartar infarto establecido</p>
          </li>
          <li>
            <p>Estudio vascular (Doppler carotídeo o angioTAC de troncos supraaórticos) y estudio cardíaco (ECG, ecocardiograma, monitorización de arritmias) para identificar la fuente embólica</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Aspirina 300 mg VO de carga, seguida de 100 mg VO/día, iniciada de inmediato tras descartar hemorragia</p>
          </li>
          <li>
            <p>Doble antiagregación (Aspirina 100 mg/día + Clopidogrel 75 mg/día, con carga de 300 mg de Clopidogrel) por 21 días en AIT de alto riesgo (ABCD2 ≥4) o AIT recurrente, seguida de monoterapia</p>
          </li>
          <li>
            <p>Anticoagulación (ej. con un anticoagulante oral directo) si se confirma fibrilación auricular como causa embólica</p>
          </li>
          <li>
            <p>Hospitalización para estudio y observación si ABCD2 ≥4 o si el estudio no puede completarse de forma ambulatoria en 24-48 horas</p>
          </li>
          <li>
            <p>Control agresivo de factores de riesgo vascular (estatinas de alta intensidad, manejo de HTA y diabetes)</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El AIT es una "alarma de infarto" — hasta un 10-15% de los pacientes con AIT sufren un ACV establecido dentro de los 90 días siguientes, la mitad de ellos en las primeras 48 horas.</p>
        </Callout>
      </Section>
      <Section id="c14-s6" title="6. ACV isquémico lacunar">
        <p><strong>Definición:</strong> infarto pequeño y profundo (habitualmente &lt;15-20 mm) por oclusión de una arteria perforante, secundario a enfermedad de pequeño vaso (lipohialinosis asociada a HTA crónica y diabetes).</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Síndromes lacunares clásicos: hemiparesia motora pura (cápsula interna o protuberancia), síndrome sensitivo puro (tálamo), disartria-mano torpe (protuberancia o cápsula interna), hemiparesia atáxica</p>
          </li>
          <li>
            <p>Ausencia característica de compromiso cortical (sin afasia, sin heminegligencia, sin hemianopsia)</p>
          </li>
          <li>
            <p>Frecuentemente sin alteración del estado de conciencia</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>TAC de cerebro sin contraste (puede no mostrar la lesión aguda por su pequeño tamaño)</p>
          </li>
          <li>
            <p>Resonancia magnética con difusión (mucho más sensible para confirmar el infarto lacunar agudo)</p>
          </li>
          <li>
            <p>Estudio de factores de riesgo vascular: presión arterial, hemoglobina glicosilada, perfil lipídico</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Trombolisis con Alteplase 0.9 mg/kg IV dentro de ventana de 4.5 horas si cumple criterios y el déficit es incapacitante (no excluir solo por presentar un síndrome lacunar)</p>
          </li>
          <li>
            <p>Aspirina 300 mg de carga seguida de 100 mg/día si no se trombolisa o tras las 24 horas de trombolisis</p>
          </li>
          <li>
            <p>Control estricto de presión arterial y glicemia como principal medida de prevención secundaria (la enfermedad de pequeño vaso está directamente ligada a HTA crónica mal controlada)</p>
          </li>
          <li>
            <p>Estatina de alta intensidad (Atorvastatina 40-80 mg VO/día) independiente del perfil lipídico basal</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Un síndrome lacunar clásico sin compromiso cortical (sin afasia ni heminegligencia) no debe hacer subestimar la urgencia — la ventana de trombolisis y las metas de tiempo son las mismas que para cualquier ACV isquémico.</p>
        </Callout>
      </Section>
      <Section id="c14-s7" title="7. Hemorragia intracerebral (ACV hemorrágico)">
        <p><strong>Definición:</strong> sangrado agudo dentro del parénquima cerebral, más frecuentemente por rotura de pequeñas arterias perforantes en el contexto de HTA crónica, angiopatía amiloide o uso de anticoagulantes.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Déficit neurológico focal de instalación súbita, frecuentemente con cefalea intensa asociada, náuseas y vómitos (más frecuentes que en el ACV isquémico)</p>
          </li>
          <li>
            <p>Deterioro progresivo del estado de conciencia en las primeras horas por expansión del hematoma o edema perilesional</p>
          </li>
          <li>
            <p>Hipertensión arterial marcada al ingreso es un hallazgo frecuente</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>TAC de cerebro sin contraste urgente (examen de elección, alta sensibilidad inmediata para sangrado agudo): hiperdensidad espontánea en el parénquima</p>
          </li>
          <li>
            <p>Score ICH (Intracerebral Hemorrhage Score) para pronóstico: considera Glasgow, volumen del hematoma (&gt;30 mL), presencia de sangre intraventricular, localización infratentorial y edad ≥80 años</p>
          </li>
          <li>
            <p>AngioTAC con fase venosa para buscar el "signo de la mancha" (spot sign), predictor de expansión del hematoma</p>
          </li>
          <li>
            <p>Estudio de coagulación y revisión de uso de anticoagulantes/antiagregantes</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Control estricto de presión arterial: meta PAS &lt;140 mmHg alcanzada de forma gradual en la primera hora (Labetalol IV o Nicardipino en infusión, según disponibilidad)</p>
          </li>
          <li>
            <p>Reversión urgente de la anticoagulación si corresponde: Complejo protrombínico (CCP) 25-50 UI/kg IV para antagonistas de vitamina K o anticoagulantes orales directos, o Idarucizumab 5 g IV si el paciente recibía Dabigatrán</p>
          </li>
          <li>
            <p>Corrección de coagulopatía y trombocitopenia severa (transfusión de plaquetas si &lt;50.000/mm³ y hay sangrado activo o se requiere neurocirugía)</p>
          </li>
          <li>
            <p>Evaluación neuroquirúrgica: craniectomía descompresiva o evacuación del hematoma en hemorragias cerebelosas &gt;3 cm con deterioro neurológico o compresión de tronco, o hematomas lobares extensos con deterioro progresivo</p>
          </li>
          <li>
            <p>Manejo de la presión intracraneana elevada si hay signos de herniación (cabecera a 30°, manitol o solución salina hipertónica)</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>A diferencia del ACV isquémico, en la hemorragia intracerebral la meta de presión arterial es más estricta y agresiva (PAS &lt;140 mmHg) porque reducirla precozmente disminuye el riesgo de expansión del hematoma.</p>
        </Callout>
      </Section>
      <Section id="c14-s8" title="8. Hemorragia subaracnoidea aneurismática">
        <p><strong>Definición:</strong> sangrado agudo en el espacio subaracnoideo, más frecuentemente por rotura de un aneurisma sacular, con alta mortalidad y morbilidad si no se trata de forma precoz.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Cefalea de inicio súbito, de máxima intensidad desde el comienzo ("la peor cefalea de mi vida" o cefalea en trueno)</p>
          </li>
          <li>
            <p>Rigidez de nuca, fotofobia, vómitos; puede haber pérdida de conciencia transitoria al inicio del cuadro</p>
          </li>
          <li>
            <p>Signos focales si hay hematoma asociado o vasoespasmo tardío; posible parálisis del III par craneal (aneurisma de arteria comunicante posterior)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>TAC de cerebro sin contraste dentro de las primeras 6 horas del inicio de la cefalea (alta sensibilidad en ese período; disminuye con el tiempo)</p>
          </li>
          <li>
            <p>Punción lumbar si la TAC es normal y la sospecha clínica persiste (más allá de 6 horas): xantocromía en el sobrenadante centrifugado del LCR</p>
          </li>
          <li>
            <p>Escala de Hunt y Hess (I a V) y escala de Fisher (según cantidad de sangre en TAC) para pronóstico y riesgo de vasoespasmo</p>
          </li>
          <li>
            <p>AngioTAC o angiografía cerebral digital para localizar el aneurisma causal</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Manejo de la vía aérea y estabilización según Hunt-Hess (intubación si Hunt-Hess IV-V)</p>
          </li>
          <li>
            <p>Control de presión arterial evitando hipotensión (meta PAS &lt;160 mmHg) hasta la exclusión del aneurisma, para reducir riesgo de resangrado sin comprometer la perfusión cerebral</p>
          </li>
          <li>
            <p>Nimodipino 60 mg VO/SNG cada 4 horas por 21 días, para prevención del vasoespasmo cerebral tardío</p>
          </li>
          <li>
            <p>Exclusión precoz del aneurisma (clipaje neuroquirúrgico o embolización endovascular con coils) dentro de las primeras 24-72 horas</p>
          </li>
          <li>
            <p>Manejo de hidrocefalia aguda con drenaje ventricular externo si corresponde</p>
          </li>
          <li>
            <p>Analgesia (evitar AINEs por riesgo de sangrado; usar opioides) y profilaxis anticonvulsivante solo si hay convulsiones o alto riesgo específico</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Toda cefalea en trueno (máxima intensidad desde el inicio) debe considerarse hemorragia subaracnoidea hasta demostrar lo contrario, incluso con examen neurológico normal — una TAC normal después de 6 horas no descarta el diagnóstico sin punción lumbar.</p>
        </Callout>
      </Section>
      <Section id="c14-s9" title="9. Trombosis de senos venosos cerebrales">
        <p><strong>Definición:</strong> oclusión trombótica de uno o más senos venosos durales o venas corticales, que provoca hipertensión venosa, edema cerebral y eventualmente infarto venoso o hemorragia.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Cefalea subaguda y progresiva (síntoma más frecuente), a menudo de características atípicas y de difícil manejo con analgesia habitual</p>
          </li>
          <li>
            <p>Puede asociar convulsiones, déficit neurológico focal, edema de papila y compromiso de conciencia en casos avanzados</p>
          </li>
          <li>
            <p>Factores de riesgo: puerperio, uso de anticonceptivos orales, trombofilia, deshidratación severa, infecciones de senos paranasales o mastoiditis</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>AngioTAC o angioresonancia venosa cerebral (examen de elección): ausencia de relleno del seno comprometido ("signo del delta vacío" en la TAC con contraste)</p>
          </li>
          <li>
            <p>TAC de cerebro simple puede mostrar el "signo de la cuerda" (hiperdensidad espontánea del seno trombosado) o infarto venoso hemorrágico</p>
          </li>
          <li>
            <p>Dímero D elevado apoya el diagnóstico, pero un valor normal no lo descarta completamente en presentaciones subagudas</p>
          </li>
          <li>
            <p>Estudio de trombofilia diferido (no debe retrasar el tratamiento agudo)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Anticoagulación con Heparina de bajo peso molecular (Enoxaparina 1 mg/kg SC c/12 h) o Heparina no fraccionada en infusión, <strong>incluso en presencia de infarto venoso hemorrágico asociado</strong></p>
          </li>
          <li>
            <p>Manejo sintomático de la hipertensión endocraneana (cabecera elevada, analgesia, acetazolamida en casos seleccionados con hipertensión intracraneana sin lesión de masa significativa)</p>
          </li>
          <li>
            <p>Tratamiento anticonvulsivante si hay crisis (Levetiracetam según esquema estándar)</p>
          </li>
          <li>
            <p>Trombolisis local o trombectomía endovascular en casos refractarios a anticoagulación con deterioro neurológico progresivo</p>
          </li>
          <li>
            <p>Traslape a anticoagulación oral prolongada (mínimo 3-6 meses, más prolongada o indefinida según causa identificada) tras la fase aguda</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>A diferencia de la mayoría de las hemorragias cerebrales, en la trombosis venosa cerebral la anticoagulación se mantiene como tratamiento de elección incluso cuando ya existe un infarto venoso hemorrágico asociado.</p>
        </Callout>
      </Section>
      <Section id="c14-s10" title="10. Disección arterial cervicocefálica (carotídea o vertebral)">
        <p><strong>Definición:</strong> desgarro de la íntima de la arteria carótida o vertebral con formación de un hematoma intramural, que puede causar isquemia cerebral por embolización distal o por reducción del flujo, y es una causa importante de ACV en pacientes jóvenes.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor cervical o cefalea ipsilateral de inicio agudo, frecuentemente tras trauma cervical (incluso menor) o maniobras de hiperextensión/rotación del cuello</p>
          </li>
          <li>
            <p>Síndrome de Horner parcial ipsilateral (ptosis y miosis, sin anhidrosis por preservación de fibras simpáticas periarteriales distales) en disección carotídea</p>
          </li>
          <li>
            <p>Déficit neurológico focal isquémico que puede aparecer horas a días después del dolor inicial (intervalo libre característico)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>AngioTAC o angioresonancia de troncos supraaórticos y vasos cervicales (examen de elección): signo de la "media luna" por hematoma mural, estenosis irregular o "signo de la llama" en la oclusión</p>
          </li>
          <li>
            <p>Resonancia magnética cervical con secuencia de supresión de grasa para visualizar directamente el hematoma intramural</p>
          </li>
          <li>
            <p>TAC/RM de cerebro para evaluar infarto isquémico asociado si ya hay déficit establecido</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Antitrombótico como primera línea en la mayoría de los casos: antiagregación (Aspirina 100 mg/día) o anticoagulación (Heparina seguida de traslape a anticoagulante oral) según evidencia disponible y características del paciente — ambas estrategias han mostrado eficacia similar en estudios comparativos</p>
          </li>
          <li>
            <p>Trombolisis con Alteplase 0.9 mg/kg IV dentro de ventana de 4.5 horas si se presenta con ACV isquémico establecido secundario a la disección, sin contraindicación específica adicional</p>
          </li>
          <li>
            <p>Trombectomía mecánica si hay oclusión de gran vaso asociada</p>
          </li>
          <li>
            <p>Duración habitual del tratamiento antitrombótico de 3-6 meses, con control angiográfico para evaluar resolución de la disección antes de suspender</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>En un paciente joven con dolor cervical o cefalea unilateral asociado a un síndrome de Horner parcial (sin anhidrosis), sospechar disección carotídea incluso sin trauma evidente ni déficit neurológico aún establecido.</p>
        </Callout>
        <p><em>Manual de bolsillo — Capítulo 11: Accidente cerebrovascular en la urgencia. Las dosis son de referencia general y deben ajustarse a función renal/hepática, peso e interacciones del paciente, y a los protocolos institucionales y normas MINSAL (Código ACV) vigentes.</em></p>
      </Section>
    </>
  )
}

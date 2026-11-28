import Callout from '../../components/content/Callout.jsx'
import EcgTrace from '../../components/content/EcgTrace.jsx'
import Section from '../../components/content/Section.jsx'
import ToolLink from '../../components/tools/ToolLink.jsx'

// Capítulo 19 · Electrocardiografía de urgencia
export default function Capitulo19() {
  return (
    <>
      <p>Reconocimiento rápido de los patrones electrocardiográficos más relevantes en el servicio de urgencia, con su correlato clínico, criterios diagnósticos y conducta inmediata.</p>
      <Callout type="alerta">
        <p><strong>Regla de oro:</strong> todo ECG de urgencia debe leerse con la clínica al lado — un ECG "normal" no descarta patología grave (SCA, TEP), y un ECG "anormal" puede ser la variante basal del paciente. Comparar siempre con ECG previos si están disponibles.</p>
      </Callout>
      <Section id="c19-s1" title="1. Infarto agudo al miocardio con supradesnivel ST (SCACEST)">
        <p><strong>Clínica:</strong> dolor torácico opresivo típico &gt;20 minutos, puede asociarse a disnea, diaforesis y síntomas atípicos en diabéticos, mujeres y adultos mayores.</p>
        <p><strong>Diagnóstico ECG:</strong></p>
        <ul>
          <li>
            <p>Supradesnivel del ST ≥1 mm en ≥2 derivadas contiguas (≥2 mm en V2-V3 en hombres ≥40 años, ≥2.5 mm en hombres &lt;40, ≥1.5 mm en mujeres)</p>
          </li>
          <li>
            <p>Localización según derivadas: anterior (V1-V4), inferior (II, III, aVF), lateral (I, aVL, V5-V6)</p>
          </li>
          <li>
            <p>Buscar siempre infarto de ventrículo derecho (V3R-V4R) en IAM inferior, y descenso especular en derivadas opuestas</p>
          </li>
          <li>
            <p>Bloqueo completo de rama izquierda nuevo o presumiblemente nuevo con clínica compatible se maneja como equivalente SCACEST</p>
          </li>
        </ul>
        <EcgTrace type="stemi" caption="SCACEST: supradesnivel del ST convexo (trazado ilustrativo)" />
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Activación inmediata de red de derivación (Código Infarto/GES), ECG dentro de los primeros 10 minutos del ingreso</p>
          </li>
          <li>
            <p>Reperfusión urgente: angioplastía primaria (meta puerta-balón &lt;90 min) o trombolisis si no hay acceso a hemodinamia dentro de 120 min</p>
          </li>
          <li>
            <p>Carga de antiagregantes (Aspirina + Clopidogrel/Ticagrelor) y anticoagulación según protocolo local</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>En el IAM inferior, siempre pedir derivadas derechas (V4R) — el compromiso de ventrículo derecho contraindica el uso de nitratos y morfina por riesgo de hipotensión severa.</p>
        </Callout>
      </Section>
      <Section id="c19-s2" title="2. Síndrome coronario agudo sin supradesnivel ST (SCASEST)">
        <p><strong>Clínica:</strong> dolor torácico anginoso en reposo o de esfuerzo progresivo, sin las características de SCACEST; puede ser indistinguible clínicamente de la angina inestable.</p>
        <p><strong>Diagnóstico ECG:</strong></p>
        <ul>
          <li>
            <p>Infradesnivel del ST ≥0.5 mm en ≥2 derivadas contiguas, y/o inversión de la onda T ≥1 mm en derivadas con onda R prominente</p>
          </li>
          <li>
            <p>Puede haber ECG normal hasta en un tercio de los casos — no descarta el diagnóstico</p>
          </li>
          <li>
            <p>Comparar con troponina de alta sensibilidad seriada (0-1 h o 0-3 h) para diferenciar de angina inestable</p>
          </li>
        </ul>
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Estratificación de riesgo con score HEART o GRACE</p>
          </li>
          <li>
            <p>Doble antiagregación, anticoagulación (Heparina no fraccionada o Enoxaparina) y manejo antiisquémico</p>
          </li>
          <li>
            <p>Coronariografía según estratificación de riesgo: urgente (&lt;2 h) en muy alto riesgo, precoz (&lt;24 h) en alto riesgo</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El patrón de "onda T bifásica o invertida profunda en V2-V3" (patrón de Wellens) sugiere estenosis crítica de la descendente anterior proximal — evitar test de esfuerzo, requiere coronariografía.</p>
        </Callout>
      </Section>
      <Section id="c19-s3" title="3. Fibrilación auricular">
        <p><strong>Clínica:</strong> palpitaciones, disnea, fatiga o hallazgo incidental; puede presentarse con inestabilidad hemodinámica o como causa de descompensación de insuficiencia cardíaca. Es causa frecuente de ACV embólico.</p>
        <p><strong>Diagnóstico ECG:</strong></p>
        <ul>
          <li>
            <p>Ausencia de ondas P, actividad auricular irregular (ondas fibrilatorias), intervalos R-R irregularmente irregulares</p>
          </li>
          <li>
            <p>Respuesta ventricular variable (lenta, controlada o rápida)</p>
          </li>
        </ul>
        <EcgTrace type="fa" caption="Fibrilación auricular: R-R irregular, sin ondas P (trazado ilustrativo)" />
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Si hay inestabilidad hemodinámica (hipotensión, edema pulmonar agudo, isquemia): cardioversión eléctrica sincronizada inmediata</p>
          </li>
          <li>
            <p>Si estable: control de frecuencia (betabloqueo o calcioantagonistas no dihidropiridínicos) vs control de ritmo según tiempo de evolución y contexto clínico</p>
          </li>
          <li>
            <p>Evaluación de score CHA₂DS₂-VASc para anticoagulación y HAS-BLED para riesgo de sangrado</p>
          </li>
          <li>
            <p>Cardioversión electiva solo si &lt;48 h de evolución confirmada o tras descartar trombo auricular (ecocardiograma transesofágico) o anticoagulación adecuada previa</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Nunca cardiovertir electivamente una FA de más de 48 h o de tiempo incierto sin anticoagulación o estudio de trombo auricular — el riesgo embólico es la principal complicación evitable.</p>
        </Callout>
      </Section>
      <Section id="c19-s4" title="4. Flutter auricular">
        <p><strong>Clínica:</strong> similar a la fibrilación auricular, palpitaciones o hallazgo incidental; frecuentemente con respuesta ventricular regular y rápida (típicamente 150 lpm con bloqueo 2:1).</p>
        <p><strong>Diagnóstico ECG:</strong></p>
        <ul>
          <li>
            <p>Ondas "en serrucho" (ondas F) regulares, mejor visibles en derivadas II, III, aVF, a una frecuencia auricular típica de ~300 lpm</p>
          </li>
          <li>
            <p>Conducción AV variable (2:1, 3:1, 4:1) determina la frecuencia ventricular</p>
          </li>
        </ul>
        <EcgTrace type="flutter" caption="Flutter auricular 2:1 con ondas F en serrucho (trazado ilustrativo)" />
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Manejo similar a fibrilación auricular: cardioversión si inestable, control de frecuencia/ritmo y anticoagulación según riesgo embólico (mismo enfoque que FA)</p>
          </li>
          <li>
            <p>El flutter suele responder bien a cardioversión eléctrica con baja energía</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Ante taquicardia regular de ~150 lpm sin causa clara, sospechar flutter con bloqueo 2:1 y buscar activamente las ondas en serrucho, a veces enmascaradas por la onda T.</p>
        </Callout>
      </Section>
      <Section id="c19-s5" title="5. Taquicardia supraventricular paroxística (TSV)">
        <p><strong>Clínica:</strong> palpitaciones de inicio y término súbito, puede asociarse a mareo, disnea o angustia; generalmente en pacientes jóvenes sin cardiopatía estructural.</p>
        <p><strong>Diagnóstico ECG:</strong></p>
        <ul>
          <li>
            <p>Taquicardia regular de complejo QRS angosto, frecuencia habitualmente 150-220 lpm</p>
          </li>
          <li>
            <p>Onda P frecuentemente no visible (oculta en el QRS o inmediatamente después) en la reentrada nodal AV</p>
          </li>
        </ul>
        <EcgTrace type="tsv" caption="TSV: QRS estrecho regular a 180 lpm (trazado ilustrativo)" />
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Maniobras vagales (Valsalva modificada, masaje carotídeo si no hay contraindicación) como primera medida</p>
          </li>
          <li>
            <p>Adenosina 6 mg IV en bolo rápido, seguido de flush; si no revierte, segunda dosis de 12 mg</p>
          </li>
          <li>
            <p>Si inestable hemodinámicamente: cardioversión eléctrica sincronizada inmediata</p>
          </li>
          <li>
            <p>Considerar calcioantagonistas o betabloqueo si recurre o hay contraindicación a adenosina</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Advertir siempre al paciente antes de administrar Adenosina — la sensación de "muerte inminente" transitoria es un efecto esperado y no debe confundirse con deterioro clínico real.</p>
        </Callout>
      </Section>
      <Section id="c19-s6" title="6. Taquicardia ventricular">
        <p><strong>Clínica:</strong> puede ser bien tolerada o cursar con síncope, shock o paro cardíaco; sospechar siempre en pacientes con cardiopatía estructural o infarto previo.</p>
        <p><strong>Diagnóstico ECG:</strong></p>
        <ul>
          <li>
            <p>Taquicardia regular de complejo QRS ancho (≥120 ms), frecuencia habitualmente 100-250 lpm</p>
          </li>
          <li>
            <p>Criterios que sugieren origen ventricular (vs.&nbsp;TSV con aberrancia): disociación AV, complejos de fusión/captura, concordancia precordial, QRS muy ancho (&gt;160 ms)</p>
          </li>
          <li>
            <p>Ante la duda entre TV y TSV con aberrancia, <strong>tratar siempre como TV</strong> (es la opción más segura)</p>
          </li>
        </ul>
        <EcgTrace type="tv" caption="Taquicardia ventricular monomorfa: QRS ancho regular (trazado ilustrativo)" />
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Inestable (hipotensión, compromiso de conciencia, angina, edema pulmonar): cardioversión eléctrica sincronizada inmediata</p>
          </li>
          <li>
            <p>Estable: Amiodarona 150 mg IV en 10 minutos, puede repetirse, seguida de infusión de mantención</p>
          </li>
          <li>
            <p>TV sin pulso: manejo como paro cardíaco, desfibrilación inmediata según protocolo de reanimación avanzada</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>En taquicardia de complejo ancho, si hay duda diagnóstica, tratar como taquicardia ventricular — asumir TSV con aberrancia y usar verapamilo puede precipitar colapso hemodinámico.</p>
        </Callout>
      </Section>
      <Section id="c19-s7" title="7. Fibrilación ventricular / Taquicardia ventricular sin pulso">
        <ToolLink to="c23-s2">Abrir cronómetro de paro</ToolLink>
        <p><strong>Clínica:</strong> paro cardiorrespiratorio, pérdida súbita de conciencia, ausencia de pulso palpable.</p>
        <p><strong>Diagnóstico ECG:</strong></p>
        <ul>
          <li>
            <p>Fibrilación ventricular: actividad eléctrica caótica, sin complejos QRS identificables, amplitud variable</p>
          </li>
          <li>
            <p>TV sin pulso: morfología de TV pero sin pulso central palpable</p>
          </li>
        </ul>
        <EcgTrace type="fv" caption="Fibrilación ventricular: actividad caótica (trazado ilustrativo)" />
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Iniciar reanimación cardiopulmonar inmediata y desfibrilación no sincronizada tan pronto esté disponible</p>
          </li>
          <li>
            <p>Adrenalina 1 mg IV/IO cada 3-5 minutos según protocolo de soporte vital avanzado</p>
          </li>
          <li>
            <p>Amiodarona 300 mg IV/IO en bolo tras la tercera descarga si persiste el ritmo desfibrilable (segunda dosis de 150 mg si recurre)</p>
          </li>
          <li>
            <p>Buscar y tratar causas reversibles (H y T: hipoxia, hipovolemia, hipo/hiperkalemia, hipotermia, taponamiento, neumotórax a tensión, tóxicos, trombosis coronaria/pulmonar)</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La calidad de las compresiones y la desfibrilación precoz son los factores que más impactan la sobrevida — minimizar las interrupciones de la RCP es tan importante como el fármaco administrado.</p>
        </Callout>
      </Section>
      <Section id="c19-s8" title="8. Bloqueos auriculoventriculares">
        <p><strong>Clínica:</strong> desde asintomático (hallazgo incidental) hasta síncope, mareo, fatiga o signos de bajo débito según el grado y la frecuencia ventricular resultante.</p>
        <p><strong>Diagnóstico ECG:</strong></p>
        <ul>
          <li>
            <p><strong>BAV de primer grado:</strong> intervalo PR prolongado (&gt;200 ms), constante, cada P conduce</p>
          </li>
          <li>
            <p><strong>BAV de segundo grado Mobitz I (Wenckebach):</strong> alargamiento progresivo del PR hasta que una onda P no conduce; generalmente benigno y a nivel del nodo AV</p>
          </li>
          <li>
            <p><strong>BAV de segundo grado Mobitz II:</strong> PR constante con ondas P que bloquean súbitamente sin alargamiento previo; mayor riesgo de progresión a bloqueo completo</p>
          </li>
          <li>
            <p><strong>BAV de tercer grado (completo):</strong> disociación completa entre ondas P y QRS, cada uno a su propia frecuencia</p>
          </li>
        </ul>
        <EcgTrace type="bav1" caption="BAV 1.er grado: PR >200 ms" />
        <EcgTrace type="mobitz1" caption="BAV 2.º grado Mobitz I" />
        <EcgTrace type="mobitz2" caption="BAV 2.º grado Mobitz II" />
        <EcgTrace type="bav3" caption="BAV completo: disociación AV" />
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Primer grado y Mobitz I asintomático: observación, revisar fármacos bradicardizantes (betabloqueo, calcioantagonistas, digoxina)</p>
          </li>
          <li>
            <p>Mobitz II y BAV completo: monitorización continua, considerar marcapaso transcutáneo de respaldo</p>
          </li>
          <li>
            <p>Si hay compromiso hemodinámico o síncope: Atropina 0.5 mg IV (poco eficaz en bloqueos infranodales), marcapaso transcutáneo o transvenoso urgente</p>
          </li>
          <li>
            <p>BAV completo o Mobitz II sintomático: indicación de marcapaso definitivo</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La Atropina suele ser ineficaz en el BAV completo con QRS ancho (bloqueo infranodal) — no retrasar la instalación de marcapaso transcutáneo esperando respuesta a fármacos.</p>
        </Callout>
      </Section>
      <Section id="c19-s9" title="9. Hiperkalemia">
        <Callout type="nota">
          <p>Manejo completo del potasio, calcio y sodio en el <strong>Capítulo 13</strong>.</p>
        </Callout>
        <p><strong>Clínica:</strong> con frecuencia asintomática hasta niveles severos; puede presentarse con debilidad muscular, parestesias o arritmias malignas como primera manifestación, especialmente en insuficiencia renal.</p>
        <p><strong>Diagnóstico ECG (progresión con el aumento del potasio):</strong></p>
        <ul>
          <li>
            <p>Ondas T picudas y simétricas (cambio más precoz)</p>
          </li>
          <li>
            <p>Aplanamiento de la onda P, prolongación del PR</p>
          </li>
          <li>
            <p>Ensanchamiento del QRS, que puede evolucionar a un patrón "sinusoidal" (signo de gravedad extrema, riesgo de paro inminente)</p>
          </li>
        </ul>
        <EcgTrace type="hiperk" caption="Hiperkalemia: T picudas y QRS ancho (trazado ilustrativo)" />
        <p><strong>Conducta (según severidad y hallazgos ECG):</strong></p>
        <ul>
          <li>
            <p>Gluconato de calcio 10% 10 mL IV en 2-3 minutos si hay cambios ECG (estabiliza la membrana miocárdica, no baja el potasio)</p>
          </li>
          <li>
            <p>Insulina cristalina 10 UI IV + Glucosa 25 g IV (desplaza potasio al intracelular)</p>
          </li>
          <li>
            <p>Salbutamol nebulizado en dosis altas como medida adyuvante</p>
          </li>
          <li>
            <p>Bicarbonato de sodio IV si hay acidosis metabólica asociada</p>
          </li>
          <li>
            <p>Resinas de intercambio o diálisis urgente en hiperkalemia severa o refractaria, especialmente en falla renal</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El gluconato de calcio no reduce el potasio sérico, pero es la medida más urgente cuando hay cambios ECG — protege el corazón mientras se activan las medidas que sí bajan la kalemia.</p>
        </Callout>
      </Section>
      <Section id="c19-s10" title="10. Tromboembolismo pulmonar (TEP)">
        <p><strong>Clínica:</strong> disnea súbita, dolor torácico pleurítico, taquicardia; puede presentarse con síncope o shock en TEP masivo.</p>
        <p><strong>Diagnóstico ECG:</strong></p>
        <ul>
          <li>
            <p>Taquicardia sinusal (hallazgo más frecuente, aunque inespecífico)</p>
          </li>
          <li>
            <p>Patrón S1Q3T3 (onda S en I, onda Q e inversión de T en III): poco sensible pero sugerente si está presente</p>
          </li>
          <li>
            <p>Signos de sobrecarga de cavidades derechas: inversión de onda T en V1-V4, bloqueo incompleto o completo de rama derecha nuevo</p>
          </li>
          <li>
            <p>Un ECG normal <strong>no descarta</strong> TEP</p>
          </li>
        </ul>
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Estratificación de riesgo clínico (score de Wells o Ginebra) y de laboratorio (dímero D según probabilidad pretest)</p>
          </li>
          <li>
            <p>AngioTAC de tórax como examen de elección para confirmación diagnóstica</p>
          </li>
          <li>
            <p>Anticoagulación (Heparina no fraccionada o de bajo peso molecular) en TEP confirmado o alta sospecha mientras se completa el estudio</p>
          </li>
          <li>
            <p>TEP masivo con inestabilidad hemodinámica: trombolisis sistémica (Alteplase) según protocolo, considerar trombectomía si hay contraindicación</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Los signos de sobrecarga de ventrículo derecho en el ECG (T negativas de V1 a V4, S1Q3T3) sugieren TEP de mayor severidad y deben elevar el umbral de sospecha, aun con dímero D no disponible.</p>
        </Callout>
      </Section>
      <Section id="c19-s11" title="11. Pericarditis aguda">
        <p><strong>Clínica:</strong> dolor torácico pleurítico que mejora al inclinarse hacia adelante y empeora en decúbito, puede seguir a cuadro viral; frote pericárdico a la auscultación.</p>
        <p><strong>Diagnóstico ECG:</strong></p>
        <ul>
          <li>
            <p>Supradesnivel del ST cóncavo hacia arriba y difuso (no localizado a un territorio coronario), infradesnivel del PR</p>
          </li>
          <li>
            <p>Evolución en cuatro etapas clásicas, aunque no siempre completas: ST elevado difuso → normalización → inversión de T → normalización</p>
          </li>
          <li>
            <p>Diferenciar de SCACEST: en pericarditis el supradesnivel es difuso y cóncavo, sin imagen especular ni evolución típica de ondas Q</p>
          </li>
        </ul>
        <EcgTrace type="pericard" caption="Pericarditis: ST elevado difuso cóncavo y PR descendido (trazado ilustrativo)" />
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>AINE en dosis altas (Ibuprofeno o Aspirina) como primera línea, asociado a Colchicina para reducir recurrencia</p>
          </li>
          <li>
            <p>Evitar corticoides como primera línea (aumentan el riesgo de recurrencia), reservar para casos refractarios o etiología autoinmune</p>
          </li>
          <li>
            <p>Ecocardiograma para descartar derrame pericárdico significativo o signos de taponamiento</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El infradesnivel del segmento PR es uno de los signos más específicos de pericarditis aguda y ayuda a diferenciarla del SCACEST cuando el supradesnivel del ST genera dudas.</p>
        </Callout>
      </Section>
      <Section id="c19-s12" title="12. Taponamiento cardíaco">
        <p><strong>Clínica:</strong> disnea, hipotensión, ingurgitación yugular (tríada de Beck), pulso paradójico; puede seguir a pericarditis, trauma torácico o neoplasia.</p>
        <p><strong>Diagnóstico ECG:</strong></p>
        <ul>
          <li>
            <p>Bajo voltaje generalizado de los complejos QRS</p>
          </li>
          <li>
            <p>Alternancia eléctrica (variación latido a latido en la amplitud del QRS) — signo característico aunque no siempre presente</p>
          </li>
          <li>
            <p>Taquicardia sinusal como hallazgo frecuente asociado</p>
          </li>
        </ul>
        <p><strong>Conducta:</strong></p>
        <ul>
          <li>
            <p>Ecocardiografía a la cabecera (protocolo RUSH/FAST extendido) para confirmar derrame y signos de colapso de cavidades</p>
          </li>
          <li>
            <p>Pericardiocentesis urgente (guiada por ecografía si es posible) en taponamiento con inestabilidad hemodinámica</p>
          </li>
          <li>
            <p>Evitar ventilación con presión positiva antes de drenar si es posible, ya que puede empeorar el compromiso hemodinámico</p>
          </li>
          <li>
            <p>Manejo de la causa de base tras la estabilización inicial</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El ECG con bajo voltaje y alternancia eléctrica en un paciente hipotenso con yugulares ingurgitadas debe hacer pensar de inmediato en taponamiento y activar ecografía a la cabecera sin demora.</p>
        </Callout>
        <p><em>Manual de bolsillo — Capítulo 19: Electrocardiografía de urgencia. La interpretación del ECG siempre debe correlacionarse con la clínica del paciente y, cuando sea posible, con trazados previos. Las dosis son de referencia general y deben ajustarse a función renal/hepática, peso, comorbilidad y protocolos institucionales y normas MINSAL vigentes.</em></p>
      </Section>
    </>
  )
}

import Callout from '../../components/content/Callout.jsx'
import Section from '../../components/content/Section.jsx'
import ToolLink from '../../components/tools/ToolLink.jsx'

// Capítulo 11 · Los tipos de shock en el servicio de urgencia
export default function Capitulo11() {
  return (
    <>
      <p>Definición, cuadro clínico, diagnóstico y tratamiento inicial de los principales tipos de shock (estado de falla circulatoria aguda con hipoperfusión tisular e hipoxia celular), organizados según su mecanismo fisiopatológico predominante: hipovolémico, cardiogénico, distributivo y obstructivo.</p>
      <Section id="c11-s1" title="1. Shock hipovolémico hemorrágico">
        <p><strong>Definición:</strong> disminución crítica del volumen intravascular por pérdida sanguínea aguda, que reduce la precarga y el gasto cardíaco.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Taquicardia, hipotensión, piel fría, pálida y sudorosa (vasoconstricción compensatoria)</p>
          </li>
          <li>
            <p>Clasificación de la American College of Surgeons (ACS) según pérdida estimada: Clase I (&lt;15% volemia, sin cambios hemodinámicos significativos), Clase II (15-30%, taquicardia y taquipnea), Clase III (30-40%, hipotensión franca, confusión), Clase IV (&gt;40%, shock profundo, riesgo vital inminente)</p>
          </li>
          <li>
            <p>Relleno capilar enlentecido (&gt;2 segundos), oliguria</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Clínico, según mecanismo evidente de sangrado (trauma, hemorragia digestiva, sangrado obstétrico)</p>
          </li>
          <li>
            <p>Lactato sérico y déficit de base como marcadores de hipoperfusión y guía de reanimación</p>
          </li>
          <li>
            <p>Ecografía FAST (Focused Assessment with Sonography for Trauma) en trauma para buscar líquido libre en abdomen, tórax o pericardio</p>
          </li>
          <li>
            <p>Hemoglobina/hematocrito seriados (pueden no reflejar la pérdida real en las primeras horas)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Control inmediato del sangrado externo (compresión directa, torniquete si es en extremidad)</p>
          </li>
          <li>
            <p>Dos vías venosas periféricas de grueso calibre (14-16G)</p>
          </li>
          <li>
            <p>Cristaloides (Ringer lactato o suero fisiológico) en bolo de 500-1.000 mL mientras se dispone de hemoderivados, evitando la sobre-reanimación</p>
          </li>
          <li>
            <p>Protocolo de transfusión masiva (razón 1:1:1 de glóbulos rojos, plasma fresco congelado y plaquetas) si la pérdida es Clase III-IV o hay inestabilidad persistente</p>
          </li>
          <li>
            <p>Ácido tranexámico 1 g IV en 10 minutos seguido de 1 g IV en infusión durante 8 horas, dentro de las primeras 3 horas del trauma</p>
          </li>
          <li>
            <p>Hipotensión permisiva (meta PAS 80-90 mmHg) hasta lograr el control quirúrgico definitivo del sangrado, salvo en trauma craneoencefálico asociado</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La taquicardia puede ser el único signo temprano en un paciente joven y sano — la hipotensión aparece tardíamente, cuando la pérdida ya supera el 30% de la volemia.</p>
        </Callout>
      </Section>
      <Section id="c11-s2" title="2. Shock hipovolémico no hemorrágico">
        <p><strong>Definición:</strong> disminución del volumen intravascular por pérdida de líquidos distinta al sangrado (gastrointestinal, renal, cutánea o por secuestro en tercer espacio).</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Signos de deshidratación: mucosas secas, signo del pliegue cutáneo positivo, ojos hundidos</p>
          </li>
          <li>
            <p>Taquicardia, hipotensión ortostática, oliguria</p>
          </li>
          <li>
            <p>Antecedente de vómitos, diarrea profusa, poliuria (cetoacidosis diabética, diabetes insípida), quemaduras extensas o tercer espacio (pancreatitis, obstrucción intestinal)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Electrolitos plasmáticos (frecuente hipernatremia o hiponatremia según el tipo de pérdida) y función renal (BUN/creatinina elevados por hipoperfusión renal prerrenal)</p>
          </li>
          <li>
            <p>Gases venosos (acidosis metabólica en pérdidas digestivas bajas o cetoacidosis)</p>
          </li>
          <li>
            <p>Densidad urinaria elevada y sodio urinario bajo (&lt;20 mEq/L) como signos de depleción de volumen verdadera</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Reposición de volumen con cristaloides isotónicos (Ringer lactato o suero fisiológico 0.9%), 500-1.000 mL en bolo inicial y reevaluación</p>
          </li>
          <li>
            <p>Corrección de la causa de base (antieméticos, manejo de diarrea, insulina y volumen en cetoacidosis diabética)</p>
          </li>
          <li>
            <p>Corrección de electrolitos según déficit medido (potasio, sodio) de forma gradual, evitando correcciones demasiado rápidas de la natremia (riesgo de mielinólisis pontina)</p>
          </li>
          <li>
            <p>Monitorización de diuresis horaria (meta &gt;0.5 mL/kg/h) como indicador de respuesta a la reanimación</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>En la cetoacidosis diabética, la reposición de volumen debe iniciarse antes que la insulina — administrar insulina en un paciente hipovolémico puede precipitar colapso circulatorio.</p>
        </Callout>
      </Section>
      <Section id="c11-s3" title="3. Shock cardiogénico">
        <p><strong>Definición:</strong> falla de la función de bomba del corazón que resulta en gasto cardíaco insuficiente para mantener la perfusión tisular, con volumen intravascular adecuado o aumentado.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Hipotensión, piel fría y moteada, oliguria, alteración de conciencia</p>
          </li>
          <li>
            <p>Signos de congestión asociada: crépitos pulmonares, ingurgitación yugular, edema periférico</p>
          </li>
          <li>
            <p>Causas frecuentes: infarto agudo de miocardio extenso, arritmias graves, miocardiopatía descompensada, valvulopatía aguda</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>ECG (buscar SCA o arritmia causal) y troponina seriada</p>
          </li>
          <li>
            <p>Ecocardiograma a la cabecera: fracción de eyección reducida, disquinesia segmentaria, valvulopatía aguda</p>
          </li>
          <li>
            <p>Clasificación de Killip-Kimball en el contexto de infarto (I sin congestión, II congestión leve, III edema pulmonar, IV shock cardiogénico)</p>
          </li>
          <li>
            <p>Lactato y perfil hepático/renal como marcadores de hipoperfusión de órganos</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Evitar la sobrecarga de volumen; si hay hipoperfusión sin congestión evidente, prueba cautelosa de volumen en bolos pequeños (250 mL) con reevaluación</p>
          </li>
          <li>
            <p>Noradrenalina como vasopresor de primera línea si hay hipotensión significativa</p>
          </li>
          <li>
            <p>Dobutamina 2-20 mcg/kg/min como inotrópico si predomina la falla de bomba con presión arterial límite</p>
          </li>
          <li>
            <p>Tratar la causa: reperfusión urgente en SCA (angioplastía primaria), cardioversión/antiarrítmicos en arritmia causal</p>
          </li>
          <li>
            <p>Soporte circulatorio mecánico (balón de contrapulsación intraaórtico, ECMO veno-arterial) en centros con disponibilidad, si no hay respuesta a manejo médico</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>A diferencia del shock hipovolémico, en el shock cardiogénico la administración indiscriminada de volumen puede empeorar la congestión pulmonar y la función cardíaca.</p>
        </Callout>
      </Section>
      <Section id="c11-s4" title="4. Shock séptico">
        <Callout type="nota">
          <p>Paquete SOCHIMI, metas de reanimación, llene capilar y dosis de vasoactivos en el <strong>Capítulo 12</strong>.</p>
        </Callout>
        <p><strong>Definición:</strong> subtipo de shock distributivo definido como sepsis con hipotensión persistente que requiere vasopresores para mantener una presión arterial media (PAM) ≥65 mmHg, asociada a lactato &gt;2 mmol/L pese a una reanimación con volumen adecuada.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Fiebre o hipotermia, taquicardia, taquipnea, alteración del estado mental</p>
          </li>
          <li>
            <p>Piel caliente y enrojecida en fases tempranas (vasodilatación), que puede evolucionar a piel fría y moteada en fases tardías</p>
          </li>
          <li>
            <p>Foco infeccioso identificable en la mayoría de los casos (urinario, respiratorio, abdominal, de piel y partes blandas)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>qSOFA (≥2 puntos: frecuencia respiratoria ≥22/min, alteración de conciencia, presión arterial sistólica ≤100 mmHg) como tamizaje</p>
          </li>
          <li>
            <p>Lactato sérico seriado, hemocultivos (2 sets) antes del antibiótico si no retrasa su inicio</p>
          </li>
          <li>
            <p>Búsqueda activa del foco con imágenes según sospecha clínica</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Cristaloides 30 mL/kg IV en las primeras 3 horas</p>
          </li>
          <li>
            <p>Antibiótico empírico de amplio espectro dentro de la primera hora, ajustado al foco sospechado</p>
          </li>
          <li>
            <p>Noradrenalina como vasopresor de primera línea (meta PAM ≥65 mmHg); agregar Vasopresina 0.03 U/min si no se logra la meta con dosis crecientes de Noradrenalina</p>
          </li>
          <li>
            <p>Hidrocortisona 200 mg IV al día (en infusión continua o dividida) si hay shock refractario a vasopresores</p>
          </li>
          <li>
            <p>Control del foco infeccioso (drenaje de absceso, retiro de catéter infectado, cirugía si corresponde)</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El shock séptico se define por la necesidad de vasopresores para lograr PAM ≥65 mmHg junto con lactato &gt;2 mmol/L a pesar de volumen adecuado — no basta con la hipotensión aislada.</p>
        </Callout>
      </Section>
      <Section id="c11-s5" title="5. Shock anafiláctico">
        <ToolLink to="c23-s6">Seguir el algoritmo de anafilaxia</ToolLink>
        <p><strong>Definición:</strong> subtipo de shock distributivo por una reacción de hipersensibilidad sistémica mediada por IgE (o por mecanismos no inmunológicos similares), con vasodilatación masiva y aumento de la permeabilidad capilar.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Inicio agudo (minutos) tras exposición a un alérgeno (fármacos, alimentos, picaduras de insectos, contraste yodado)</p>
          </li>
          <li>
            <p>Compromiso cutáneo (urticaria, angioedema), respiratorio (broncoespasmo, edema de vía aérea superior con estridor) y cardiovascular (hipotensión) — el diagnóstico es clínico y no requiere que estén los tres presentes</p>
          </li>
          <li>
            <p>Puede haber síntomas gastrointestinales (dolor abdominal, vómitos, diarrea)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Clínico, basado en criterios de anafilaxia (inicio agudo con compromiso cutáneo-mucoso más compromiso respiratorio o cardiovascular, o hipotensión aislada tras exposición a alérgeno conocido)</p>
          </li>
          <li>
            <p>Triptasa sérica (idealmente entre 1-3 horas del inicio) para confirmación retrospectiva, no debe retrasar el tratamiento</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p><strong>Adrenalina intramuscular 0.5 mg (0.5 mL de solución 1:1.000) en cara anterolateral del muslo, de inmediato y como primera medida</strong> — repetir cada 5-15 minutos si no hay respuesta</p>
          </li>
          <li>
            <p>Posición supina con elevación de extremidades inferiores (evitar sedestación brusca por riesgo de colapso)</p>
          </li>
          <li>
            <p>Oxígeno de alto flujo, cristaloides IV en bolo 500-1.000 mL si hay hipotensión</p>
          </li>
          <li>
            <p>Si hay compromiso de vía aérea superior progresivo: preparación para vía aérea avanzada precoz</p>
          </li>
          <li>
            <p>Antihistamínicos (Clorfenamina 10 mg IV) y corticoides (Hidrocortisona 200 mg IV) como manejo adyuvante, nunca como primera línea ni sustituto de la adrenalina</p>
          </li>
          <li>
            <p>Observación mínima de 4-6 horas por riesgo de reacción bifásica</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El error más frecuente y más grave es retrasar la adrenalina IM esperando antihistamínicos o corticoides — estos últimos no salvan la vida en la fase aguda.</p>
        </Callout>
      </Section>
      <Section id="c11-s6" title="6. Shock neurogénico">
        <p><strong>Definición:</strong> subtipo de shock distributivo causado por la pérdida del tono simpático vascular tras una lesión medular alta (habitualmente por sobre T6), que provoca vasodilatación e hipotensión sin la taquicardia compensatoria esperada.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Hipotensión asociada a bradicardia (en lugar de la taquicardia típica de otros shocks) por pérdida del tono simpático cardíaco</p>
          </li>
          <li>
            <p>Piel caliente y seca en las zonas afectadas por la pérdida simpática (a diferencia de la piel fría y sudorosa de otros shocks)</p>
          </li>
          <li>
            <p>Antecedente de trauma raquimedular con nivel neurológico alto</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Clínico, en el contexto de trauma raquimedular confirmado o sospechado</p>
          </li>
          <li>
            <p>Debe diferenciarse activamente del shock hipovolémico, ya que un politraumatizado puede tener ambos mecanismos simultáneamente (hemorragia asociada a la lesión medular)</p>
          </li>
          <li>
            <p>Resonancia magnética o TAC de columna para caracterizar la lesión</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Descartar y tratar primero una hemorragia concomitante antes de atribuir la hipotensión únicamente al componente neurogénico</p>
          </li>
          <li>
            <p>Cristaloides IV como primera medida, con precaución de no sobrehidratar (riesgo de edema pulmonar en lesión medular alta)</p>
          </li>
          <li>
            <p>Noradrenalina o Fenilefrina como vasopresores de elección para restaurar el tono vascular</p>
          </li>
          <li>
            <p>Atropina 0.5-1 mg IV si la bradicardia es sintomática o severa</p>
          </li>
          <li>
            <p>Manejo especializado precoz en unidad de trauma raquimedular</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Hipotensión con bradicardia (no taquicardia) en un politraumatizado con trauma raquimedular alto orienta a shock neurogénico, pero siempre se debe descartar hemorragia oculta asociada.</p>
        </Callout>
      </Section>
      <Section id="c11-s7" title="7. Shock obstructivo por taponamiento cardíaco">
        <p><strong>Definición:</strong> compresión externa aguda del corazón por acumulación de líquido (o sangre) en el espacio pericárdico, que impide el llenado ventricular adecuado y reduce el gasto cardíaco.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Tríada de Beck: hipotensión, ingurgitación yugular y ruidos cardíacos apagados (presente solo en una minoría de los casos)</p>
          </li>
          <li>
            <p>Pulso paradójico: caída de la presión arterial sistólica &gt;10 mmHg durante la inspiración</p>
          </li>
          <li>
            <p>Taquicardia, disnea; antecedente de trauma torácico, neoplasia, pericarditis o procedimiento invasivo reciente</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Ecocardiograma a la cabecera (examen de elección): derrame pericárdico con colapso diastólico de cavidades derechas</p>
          </li>
          <li>
            <p>ECG: puede mostrar alternancia eléctrica y bajo voltaje generalizado</p>
          </li>
          <li>
            <p>Ecografía FAST extendida en el contexto de trauma para visualizar derrame pericárdico</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Pericardiocentesis urgente guiada por ecografía (vía subxifoidea) como medida de urgencia, evacuando incluso pequeños volúmenes que pueden ser suficientes para mejorar el gasto cardíaco</p>
          </li>
          <li>
            <p>Cristaloides IV en bolo mientras se prepara el drenaje, para mantener la precarga</p>
          </li>
          <li>
            <p>Evitar la ventilación con presión positiva si es posible, ya que reduce aún más el retorno venoso y puede precipitar el colapso</p>
          </li>
          <li>
            <p>Cirugía (ventana pericárdica o pericardiotomía) en taponamiento recurrente o de causa traumática con sangrado activo</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>En el taponamiento cardíaco agudo, drenar incluso 50-100 mL de líquido pericárdico puede revertir dramáticamente el shock, a diferencia de los derrames crónicos que toleran volúmenes mucho mayores.</p>
        </Callout>
      </Section>
      <Section id="c11-s8" title="8. Shock obstructivo por neumotórax a tensión">
        <p><strong>Definición:</strong> acumulación progresiva de aire en el espacio pleural con mecanismo valvular unidireccional, que colapsa el pulmón ipsilateral y desplaza el mediastino, comprimiendo el retorno venoso y el corazón.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Disnea severa, taquipnea, dolor torácico agudo</p>
          </li>
          <li>
            <p>Desviación traqueal contralateral, ingurgitación yugular, murmullo pulmonar abolido y timpanismo a la percusión en el hemitórax afectado</p>
          </li>
          <li>
            <p>Hipotensión progresiva y rápida hasta el paro cardiorrespiratorio si no se trata de inmediato</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p><strong>Clínico — no debe retrasarse el tratamiento esperando una radiografía de tórax</strong></p>
          </li>
          <li>
            <p>Ecografía pulmonar a la cabecera: ausencia de deslizamiento pleural (lung sliding) y de líneas B en el lado afectado</p>
          </li>
          <li>
            <p>Radiografía de tórax (solo si el paciente está estable o ya fue descomprimido) muestra hiperlucencia y colapso pulmonar con desviación del mediastino</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Descompresión con aguja inmediata: catéter de grueso calibre (14G) en el 2° espacio intercostal línea medioclavicular, o en el 4°-5° espacio intercostal línea axilar anterior (preferido en adultos por menor grosor de la pared torácica)</p>
          </li>
          <li>
            <p>Seguido de instalación de tubo pleural (toracostomía) en el 4°-5° espacio intercostal línea axilar media/anterior para manejo definitivo</p>
          </li>
          <li>
            <p>Oxígeno de alto flujo y soporte hemodinámico con cristaloides mientras se realiza la descompresión</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El neumotórax a tensión es de las pocas urgencias verdaderamente clínicas — el diagnóstico y el tratamiento no deben esperar ninguna imagen.</p>
        </Callout>
      </Section>
      <Section id="c11-s9" title="9. Shock obstructivo por tromboembolismo pulmonar (TEP) masivo">
        <p><strong>Definición:</strong> obstrucción aguda del flujo arterial pulmonar por un trombo (habitualmente originado en el sistema venoso profundo), suficiente para causar falla ventricular derecha aguda e hipotensión sistémica sostenida.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Disnea súbita, dolor torácico pleurítico, síncope</p>
          </li>
          <li>
            <p>Hipotensión sostenida (PAS &lt;90 mmHg por &gt;15 minutos) o requerimiento de vasopresores, sin otra causa explicable</p>
          </li>
          <li>
            <p>Signos de falla derecha: ingurgitación yugular, taquicardia; antecedente de inmovilización, cirugía reciente, cáncer activo o trombosis venosa profunda</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Score de Wells o Ginebra para probabilidad clínica pretest</p>
          </li>
          <li>
            <p>AngioTAC de tórax (examen de elección) si el paciente está lo suficientemente estable para trasladarse; en TEP masivo con inestabilidad, el ecocardiograma a la cabecera (dilatación e hipoquinesia de ventrículo derecho, signo de McConnell) puede bastar para decidir trombolisis sin esperar la angioTAC</p>
          </li>
          <li>
            <p>Dímero D solo útil para descartar TEP en probabilidad pretest baja-intermedia (bajo valor en el paciente inestable)</p>
          </li>
          <li>
            <p>Troponina y BNP como marcadores de disfunción ventricular derecha (estratificación de severidad)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p><strong>TEP masivo con inestabilidad hemodinámica:</strong> trombolisis sistémica con Alteplase 100 mg IV en infusión de 2 horas (o 0.6 mg/kg en bolo de 15 min en paro inminente), salvo contraindicación absoluta</p>
          </li>
          <li>
            <p>Anticoagulación con Heparina no fraccionada (bolo 80 UI/kg + infusión 18 UI/kg/h) de forma paralela o inmediatamente posterior a la trombolisis</p>
          </li>
          <li>
            <p>Soporte hemodinámico con volumen cauteloso (bolos pequeños, 250-500 mL, ya que el exceso de volumen puede empeorar la falla del ventrículo derecho) y Noradrenalina si persiste hipotensión</p>
          </li>
          <li>
            <p>Embolectomía quirúrgica o trombectomía percutánea si hay contraindicación para trombolisis o esta falla</p>
          </li>
          <li>
            <p>ECMO veno-arterial como puente en centros con disponibilidad si hay paro cardiorrespiratorio inminente o establecido</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>En el TEP masivo, a diferencia de otros shocks, el exceso de volumen puede empeorar la falla del ventrículo derecho — la reanimación con fluidos debe ser cautelosa y en bolos pequeños.</p>
        </Callout>
      </Section>
      <Section id="c11-s10" title="10. Shock mixto y shock refractario">
        <p><strong>Definición:</strong> coexistencia de más de un mecanismo fisiopatológico de shock en un mismo paciente (por ejemplo, un politraumatizado con componente hipovolémico y obstructivo, o un séptico que desarrolla disfunción miocárdica asociada), o la persistencia del shock pese a un tratamiento dirigido y adecuado (shock refractario).</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Presentación que no responde de forma esperada al manejo inicial dirigido a un único mecanismo (por ejemplo, un shock "séptico" que no mejora con volumen y vasopresores adecuados)</p>
          </li>
          <li>
            <p>Puede combinar signos de distintos tipos de shock simultáneamente (piel fría con requerimiento de vasopresores en dosis crecientes, congestión pulmonar asociada a hipovolemia)</p>
          </li>
          <li>
            <p>Alta mortalidad asociada, especialmente en el contexto de trauma grave o sepsis prolongada</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Reevaluación sistemática con ecografía a la cabecera (protocolo RUSH: bomba, estanque y tuberías) para identificar mecanismos superpuestos que la evaluación clínica inicial pudo no detectar</p>
          </li>
          <li>
            <p>Lactato seriado y variables dinámicas de respuesta a volumen (variación de presión de pulso, elevación pasiva de piernas) para guiar decisiones terapéuticas</p>
          </li>
          <li>
            <p>Ecocardiograma para descartar disfunción miocárdica sobreagregada (frecuente en sepsis prolongada — "miocardiopatía séptica")</p>
          </li>
          <li>
            <p>Función suprarrenal (cortisol basal) si hay shock refractario a altas dosis de vasopresores, para descartar insuficiencia suprarrenal relativa asociada</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Reevaluación continua del mecanismo dominante y ajuste dinámico de la estrategia (volumen, vasopresor, inotrópico) según hallazgos ecográficos y hemodinámicos seriados</p>
          </li>
          <li>
            <p>Asociación de vasopresores de distinto mecanismo cuando dosis crecientes de un solo agente no logran la meta (Noradrenalina + Vasopresina, o agregar Adrenalina en shock refractario)</p>
          </li>
          <li>
            <p>Hidrocortisona 200 mg IV al día si se sospecha insuficiencia suprarrenal relativa en shock refractario a vasopresores</p>
          </li>
          <li>
            <p>Soporte mecánico circulatorio (balón de contrapulsación, ECMO veno-arterial) en centros con disponibilidad cuando el shock persiste pese a manejo médico máximo</p>
          </li>
          <li>
            <p>Discusión precoz con equipo de cuidados intensivos y, cuando corresponda, definición de metas de manejo con la familia</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Cuando un shock no responde como se espera al tratamiento dirigido a la causa inicial, la pregunta correcta no es "qué más dar del mismo tratamiento" sino "qué otro mecanismo de shock podría estar coexistiendo".</p>
        </Callout>
        <p><em>Manual de bolsillo — Capítulo 10: Tipos de shock. Las dosis son de referencia general y deben ajustarse a función renal/hepática, peso e interacciones del paciente, y a los protocolos institucionales y normas MINSAL vigentes.</em></p>
      </Section>
    </>
  )
}

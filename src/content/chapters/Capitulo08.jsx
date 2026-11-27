import Section from '../../components/content/Section.jsx'

// Capítulo 8 · Manejo y alivio del dolor en el servicio de urgencias
export default function Capitulo08() {
  return (
    <>
      <Section id="c8-s1" title="Enfoque general">
        <p>El dolor es el motivo de consulta más frecuente en los servicios de urgencia, y su manejo oportuno es tanto un derecho del paciente como parte fundamental del tratamiento. Antes de elegir un fármaco, se debe evaluar la intensidad del dolor mediante una escala validada:</p>
        <ul>
          <li>
            <p><strong>Escala numérica</strong>: el paciente califica su dolor de 0 (sin dolor) a 10 (el peor dolor imaginable). Se considera dolor leve de 1 a 3, moderado de 4 a 6, y severo de 7 a 10.</p>
          </li>
          <li>
            <p><strong>Escala visual análoga</strong>: una línea de 10 centímetros donde el paciente marca la intensidad de su dolor, útil cuando la escala numérica es difícil de aplicar.</p>
          </li>
          <li>
            <p><strong>Escalas conductuales</strong>: para pacientes que no pueden comunicarse verbalmente (niños pequeños, personas con alteración de conciencia o demencia avanzada), se observan gestos faciales, movimientos corporales, tono muscular y llanto.</p>
          </li>
        </ul>
        <p>También se debe caracterizar el tipo de dolor (nociceptivo, es decir, originado por daño a un tejido; o neuropático, es decir, originado por daño o disfunción de un nervio), su ubicación, duración e irradiación, ya que esto orienta la elección del fármaco más apropiado.</p>
      </Section>
      <Section id="c8-s2" title="1. Dolor leve (escala 1-3)">
        <h3>Enfoque</h3>
        <p>Dolor que no interfiere de forma significativa con las actividades habituales del paciente, manejable habitualmente con fármacos no opioides por vía oral.</p>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Paracetamol 1 g vía oral cada 8 horas (dosis máxima diaria de 4 g en adultos sin enfermedad hepática).</p>
          </li>
          <li>
            <p>Ibuprofeno 400 mg vía oral cada 8 horas, con las comidas, para reducir el riesgo de molestias digestivas.</p>
          </li>
          <li>
            <p>Ácido acetilsalicílico 500 mg vía oral cada 6-8 horas, como alternativa, evitando su uso en niños y adolescentes por el riesgo del síndrome de Reye (enfermedad grave que afecta el hígado y el cerebro).</p>
          </li>
          <li>
            <p>Medidas físicas complementarias: frío local en las primeras 24-48 horas tras un traumatismo, calor local para dolores musculares, reposo relativo de la zona afectada.</p>
          </li>
        </ul>
      </Section>
      <Section id="c8-s3" title="2. Dolor moderado (escala 4-6)">
        <h3>Enfoque</h3>
        <p>Dolor que interfiere con las actividades habituales del paciente, que habitualmente requiere la combinación de fármacos no opioides con opioides débiles, o antiinflamatorios en dosis más altas por vía intravenosa.</p>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Ketorolaco 30 mg por vía intravenosa o intramuscular, dosis única, repetible cada 6-8 horas (máximo 4 dosis al día, y por no más de 5 días de uso continuo, por el riesgo de daño renal y digestivo).</p>
          </li>
          <li>
            <p>Combinación de paracetamol 1 g vía oral o intravenosa con ibuprofeno 400 mg vía oral, cada 8 horas, ya que el efecto combinado suele ser mayor que el de cada fármaco por separado.</p>
          </li>
          <li>
            <p>Tramadol 50-100 mg vía oral o por vía intravenosa cada 6-8 horas (opioide débil), con precaución en personas mayores y en quienes usan otros fármacos que actúan sobre el sistema nervioso central, por el riesgo de somnolencia excesiva y convulsiones.</p>
          </li>
          <li>
            <p>Codeína 30-60 mg vía oral cada 6 horas, habitualmente combinada con paracetamol, como alternativa al tramadol.</p>
          </li>
        </ul>
      </Section>
      <Section id="c8-s4" title="3. Dolor severo (escala 7-10)">
        <h3>Enfoque</h3>
        <p>Dolor intenso que requiere manejo con opioides de mayor potencia, generalmente por vía intravenosa, para lograr un alivio rápido y ajustable según la respuesta del paciente.</p>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Morfina 2-4 mg por vía intravenosa cada 5-15 minutos, ajustando la dosis según la respuesta del paciente (técnica llamada "titulación"), hasta lograr un alivio adecuado del dolor.</p>
          </li>
          <li>
            <p>Fentanilo 25-50 microgramos por vía intravenosa cada 5-10 minutos, alternativa a la morfina, especialmente útil en pacientes con presión arterial baja o con alergia a la morfina, por tener menor efecto sobre la presión arterial.</p>
          </li>
          <li>
            <p>Hidromorfona 0.2-0.5 mg por vía intravenosa cada 10-15 minutos, como alternativa adicional según disponibilidad local.</p>
          </li>
          <li>
            <p>Monitorización continua de la frecuencia respiratoria, la saturación de oxígeno y el nivel de conciencia durante la administración de opioides, por el riesgo de depresión respiratoria (disminución peligrosa de la respiración).</p>
          </li>
          <li>
            <p>Tener disponible naloxona 0.4 mg por vía intravenosa, intramuscular o intranasal, como antídoto en caso de sobredosis accidental de opioides, repetible cada 2-3 minutos según respuesta.</p>
          </li>
        </ul>
      </Section>
      <Section id="c8-s5" title="4. Dolor neuropático">
        <h3>Identificación</h3>
        <p>Dolor originado por daño o disfunción del sistema nervioso (por ejemplo, tras un herpes zóster, en la neuropatía diabética, o después de una cirugía con lesión de un nervio), que responde de forma limitada a los analgésicos habituales.</p>
        <h3>Cuadro clínico</h3>
        <ul>
          <li>
            <p>Dolor descrito como quemazón, ardor, corriente eléctrica u hormigueo doloroso.</p>
          </li>
          <li>
            <p>Puede acompañarse de alodinia (dolor provocado por estímulos que normalmente no son dolorosos, como el roce de la ropa) e hiperalgesia (respuesta dolorosa exagerada ante un estímulo doloroso leve).</p>
          </li>
          <li>
            <p>Suele seguir el trayecto de un nervio o una zona específica relacionada con la lesión neurológica.</p>
          </li>
        </ul>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Gabapentina 300 mg vía oral, iniciando por la noche para reducir la somnolencia diurna, con incremento progresivo de la dosis cada 2-3 días hasta 300 mg cada 8 horas, según tolerancia y respuesta.</p>
          </li>
          <li>
            <p>Pregabalina 75 mg vía oral cada 12 horas, con incremento progresivo según respuesta, como alternativa a la gabapentina.</p>
          </li>
          <li>
            <p>Amitriptilina 10-25 mg vía oral por la noche, útil especialmente en el dolor neuropático crónico, aunque su efecto completo puede tardar 1-2 semanas en manifestarse.</p>
          </li>
          <li>
            <p>Los opioides y antiinflamatorios habituales tienen efecto limitado sobre este tipo de dolor y no se recomiendan como primera línea.</p>
          </li>
          <li>
            <p>Derivación a control ambulatorio para ajuste progresivo del tratamiento, ya que estos fármacos requieren tiempo para alcanzar su efecto máximo.</p>
          </li>
        </ul>
      </Section>
      <Section id="c8-s6" title="5. Dolor en el cólico renal">
        <h3>Identificación</h3>
        <p>Dolor intenso causado por la obstrucción del paso de orina, generalmente por un cálculo (piedra) que se desplaza desde el riñón hacia la vejiga a través del uréter (el conducto que conecta ambas estructuras).</p>
        <h3>Cuadro clínico</h3>
        <ul>
          <li>
            <p>Dolor de tipo cólico (que aumenta y disminuye en oleadas), de inicio súbito, ubicado en la zona lumbar o el costado, que puede irradiarse hacia la ingle o los genitales.</p>
          </li>
          <li>
            <p>El paciente suele estar inquieto, sin poder encontrar una posición que alivie el dolor, a diferencia de otros dolores abdominales donde el paciente prefiere quedarse quieto.</p>
          </li>
          <li>
            <p>Náuseas y vómitos frecuentes.</p>
          </li>
          <li>
            <p>Puede haber sangre en la orina (visible o detectada solo en el análisis de orina).</p>
          </li>
        </ul>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Los antiinflamatorios no esteroidales son el tratamiento de primera línea para este tipo de dolor, ya que además de aliviarlo, reducen la inflamación del uréter: ketorolaco 30 mg por vía intravenosa o intramuscular, dosis única, repetible según necesidad.</p>
          </li>
          <li>
            <p>Si el dolor no cede con antiinflamatorios: agregar morfina 2-4 mg por vía intravenosa cada 5-15 minutos, titulando según respuesta.</p>
          </li>
          <li>
            <p>Metoclopramida 10 mg por vía intravenosa para el manejo de las náuseas asociadas.</p>
          </li>
          <li>
            <p>Hidratación adecuada por vía oral o intravenosa, sin necesidad de forzar volúmenes excesivos de líquido, ya que esto no ha demostrado facilitar la expulsión del cálculo y puede aumentar el dolor.</p>
          </li>
          <li>
            <p>Tamsulosina 0.4 mg vía oral una vez al día, como tratamiento ambulatorio complementario, para facilitar la expulsión de cálculos de mayor tamaño, según indicación del especialista.</p>
          </li>
        </ul>
      </Section>
      <Section id="c8-s7" title="6. Dolor abdominal agudo (consideraciones generales de analgesia)">
        <h3>Enfoque</h3>
        <p>Durante muchos años se evitó administrar analgesia a los pacientes con dolor abdominal agudo por temor a "enmascarar" los síntomas y dificultar el diagnóstico. La evidencia actual demuestra que el alivio adecuado del dolor no retrasa ni dificulta el diagnóstico, y sí mejora la evaluación al permitir un examen físico más cooperador por parte del paciente.</p>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Morfina 2-4 mg por vía intravenosa cada 5-15 minutos, titulando según respuesta, es segura y no debe retrasarse en espera de la evaluación diagnóstica.</p>
          </li>
          <li>
            <p>Evitar antiinflamatorios no esteroidales como primera opción si existe sospecha de sangrado digestivo, perforación de una víscera o enfermedad renal, por sus efectos adversos sobre estos sistemas.</p>
          </li>
          <li>
            <p>Continuar con la evaluación diagnóstica (exámenes de sangre, imágenes) en paralelo al manejo del dolor, sin esperar a que el paciente esté completamente libre de dolor para iniciar el estudio.</p>
          </li>
        </ul>
      </Section>
      <Section id="c8-s8" title="7. Analgesia en el embarazo">
        <h3>Enfoque</h3>
        <p>El manejo del dolor durante el embarazo requiere considerar tanto la seguridad de la madre como la del feto, evitando ciertos fármacos según la etapa del embarazo.</p>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Paracetamol 1 g vía oral cada 8 horas es el analgésico de elección durante todo el embarazo, considerado seguro en las dosis recomendadas.</p>
          </li>
          <li>
            <p>Evitar los antiinflamatorios no esteroidales (como ibuprofeno o ketorolaco), especialmente después de las 20 semanas de gestación, por el riesgo de afectar la función renal fetal y el cierre prematuro de una estructura del corazón fetal (el conducto arterioso).</p>
          </li>
          <li>
            <p>Opioides como morfina o fentanilo por vía intravenosa pueden usarse con precaución para el dolor severo, en la dosis mínima efectiva y por el menor tiempo posible, considerando el riesgo de depresión respiratoria en el recién nacido si se usan cerca del momento del parto.</p>
          </li>
          <li>
            <p>Evitar la aspirina en dosis analgésicas (dosis altas) durante el embarazo, especialmente en el tercer trimestre.</p>
          </li>
        </ul>
      </Section>
      <Section id="c8-s9" title="8. Analgesia en personas mayores">
        <h3>Enfoque</h3>
        <p>Las personas mayores tienen mayor riesgo de efectos adversos con los analgésicos, debido a cambios en la forma en que el cuerpo procesa los fármacos, la presencia frecuente de múltiples enfermedades y el uso de otros medicamentos.</p>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Paracetamol continúa siendo el analgésico de primera línea, con ajuste de la dosis máxima diaria (hasta 3 g al día) en personas con fragilidad o enfermedad hepática.</p>
          </li>
          <li>
            <p>Evitar o usar con mucha precaución los antiinflamatorios no esteroidales, por el mayor riesgo de sangrado digestivo, daño renal y descompensación de insuficiencia cardíaca en este grupo de edad.</p>
          </li>
          <li>
            <p>Si se requieren opioides, iniciar con dosis más bajas que en adultos jóvenes (por ejemplo, morfina 1-2 mg por vía intravenosa, en lugar de 2-4 mg) y aumentar de forma más gradual, vigilando estrechamente la aparición de confusión, somnolencia excesiva o caídas.</p>
          </li>
          <li>
            <p>Evitar el uso de tramadol junto con otros fármacos que actúen sobre el sistema nervioso central (como benzodiazepinas) por el mayor riesgo de sedación excesiva y caídas en este grupo de edad.</p>
          </li>
        </ul>
      </Section>
      <Section id="c8-s10" title="9. Analgesia en insuficiencia renal o hepática">
        <h3>Enfoque</h3>
        <p>La enfermedad renal o hepática altera la forma en que el cuerpo elimina los analgésicos, lo que puede llevar a una acumulación del fármaco y mayor riesgo de efectos adversos si no se ajusta la dosis.</p>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>En insuficiencia renal: evitar los antiinflamatorios no esteroidales, ya que pueden empeorar la función renal; la morfina requiere ajuste de dosis y de la frecuencia de administración, ya que sus productos de degradación se acumulan y pueden causar somnolencia excesiva; el fentanilo es una alternativa más segura en este contexto, ya que se elimina principalmente por el hígado.</p>
          </li>
          <li>
            <p>En insuficiencia hepática: reducir la dosis de paracetamol (máximo 2-3 g al día según el grado de daño hepático) y evitar su uso en insuficiencia hepática grave; los opioides deben usarse con dosis reducidas y mayor espaciamiento entre ellas, ya que su eliminación depende principalmente del hígado.</p>
          </li>
          <li>
            <p>En ambos casos, se recomienda iniciar con la dosis más baja posible y ajustar de forma gradual según la respuesta, con vigilancia estrecha de efectos adversos.</p>
          </li>
        </ul>
      </Section>
      <Section id="c8-s11" title="10. Analgesia para procedimientos en urgencias (sedación y analgesia para procedimientos)">
        <h3>Enfoque</h3>
        <p>Ciertos procedimientos realizados en el servicio de urgencias (reducción de fracturas o luxaciones, drenaje de abscesos grandes, cardioversión eléctrica, entre otros) requieren un manejo del dolor más intenso y, en ocasiones, sedación breve para que el paciente los tolere adecuadamente.</p>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Fentanilo 1-2 microgramos por kilogramo de peso corporal por vía intravenosa, de inicio rápido y corta duración, útil para procedimientos breves.</p>
          </li>
          <li>
            <p>Ketamina 1-2 miligramos por kilogramo de peso corporal por vía intravenosa, para sedación y analgesia en procedimientos más dolorosos o en niños, considerando que puede producir alucinaciones o agitación al despertar, por lo que se recomienda un ambiente tranquilo durante la recuperación.</p>
          </li>
          <li>
            <p>Midazolam 0.02-0.05 miligramos por kilogramo de peso corporal por vía intravenosa, asociado a los fármacos anteriores, para lograr un efecto sedante adicional y reducir el recuerdo del procedimiento por parte del paciente.</p>
          </li>
          <li>
            <p>Monitorización continua de signos vitales (frecuencia cardíaca, presión arterial, saturación de oxígeno y frecuencia respiratoria) antes, durante y después del procedimiento, con disponibilidad inmediata de equipo de reanimación y de naloxona (antídoto de opioides) y flumazenilo (antídoto de benzodiazepinas como el midazolam) en caso de complicaciones.</p>
          </li>
          <li>
            <p>Ayuno previo al procedimiento según el grado de urgencia de este: se recomienda idealmente un período de ayuno breve cuando el procedimiento puede diferirse con seguridad, aunque en situaciones urgentes no debe retrasarse la atención por este motivo.</p>
          </li>
        </ul>
        <p><em>Fin del Capítulo 8.</em></p>
      </Section>
    </>
  )
}

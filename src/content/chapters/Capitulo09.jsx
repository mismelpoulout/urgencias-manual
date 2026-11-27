import Section from '../../components/content/Section.jsx'

// Capítulo 9 · Farmacología clínica combinada en el servicio de urgencias
export default function Capitulo09() {
  return (
    <>
      <Section id="c9-s1" title="Enfoque general">
        <p>En el servicio de urgencias es habitual que un mismo paciente reciba varios fármacos de forma simultánea, ya sea porque la patología que se está tratando lo requiere (por ejemplo, combinaciones de antibióticos) o porque el paciente ya tomaba otros medicamentos de forma crónica antes de consultar. Conocer las combinaciones más utilizadas, su fundamento y las interacciones más peligrosas es esencial para un manejo seguro y eficaz. Este capítulo revisa las combinaciones farmacológicas más relevantes en la práctica de urgencias y las interacciones que requieren especial atención.</p>
      </Section>
      <Section id="c9-s2" title="1. Combinaciones antibióticas de amplio espectro">
        <h3>Fundamento</h3>
        <p>Ciertas infecciones graves requieren cubrir varios tipos de bacterias a la vez (bacterias que necesitan oxígeno para vivir, bacterias que viven sin oxígeno, y distintos grupos según su forma y estructura), por lo que se combinan antibióticos con mecanismos de acción complementarios.</p>
        <h3>Combinaciones frecuentes</h3>
        <ul>
          <li>
            <p>Ceftriaxona 1-2 g por vía intravenosa cada 24 horas, asociada a metronidazol 500 mg por vía intravenosa cada 8 horas: combinación habitual en infecciones abdominales (como una apendicitis complicada o una diverticulitis), ya que la ceftriaxona cubre bacterias que requieren oxígeno y el metronidazol cubre bacterias que viven sin oxígeno, frecuentes en el intestino.</p>
          </li>
          <li>
            <p>Ceftriaxona 2 g por vía intravenosa cada 24 horas, asociada a claritromicina 500 mg por vía intravenosa u oral cada 12 horas: combinación habitual en neumonía grave adquirida en la comunidad, ya que cubre tanto las bacterias más comunes como otros gérmenes de comportamiento distinto (llamados "atípicos") que no responden a la ceftriaxona sola.</p>
          </li>
          <li>
            <p>Piperacilina con tazobactam 4.5 g por vía intravenosa cada 6-8 horas, asociada a vancomicina 15-20 mg/kg por vía intravenosa cada 8-12 horas: combinación de amplio espectro utilizada en infecciones graves de origen incierto o en pacientes con alto riesgo de bacterias resistentes, cubriendo tanto bacterias que requieren un tipo de coloración de laboratorio (Gram negativas) como las que requieren otro (Gram positivas, incluyendo cepas resistentes a meticilina).</p>
          </li>
          <li>
            <p>Ampicilina con sulbactam 3 g por vía intravenosa cada 6 horas, como alternativa de amplio espectro más limitado, útil en infecciones mixtas de gravedad moderada.</p>
          </li>
        </ul>
        <h3>Precauciones</h3>
        <ul>
          <li>
            <p>Ajustar la dosis de los antibióticos eliminados por el riñón (como la piperacilina con tazobactam y la vancomicina) según la función renal del paciente, para evitar acumulación y toxicidad.</p>
          </li>
          <li>
            <p>Vigilar la aparición de diarrea asociada a Clostridioides difficile (una bacteria que puede proliferar tras el uso de antibióticos de amplio espectro) especialmente con el uso prolongado o combinado de varios antibióticos.</p>
          </li>
          <li>
            <p>Solicitar cultivos antes de iniciar el tratamiento siempre que sea posible, para poder ajustar o reducir el número de antibióticos una vez identificado el germen causante.</p>
          </li>
        </ul>
      </Section>
      <Section id="c9-s3" title="2. Combinaciones para el manejo de la sepsis">
        <h3>Fundamento</h3>
        <p>La sepsis (respuesta inflamatoria grave del cuerpo frente a una infección, que puede llevar a falla de uno o varios órganos) requiere un manejo combinado y simultáneo de varios frentes: control de la infección, soporte de la circulación y, si es necesario, apoyo de otros órganos.</p>
        <h3>Combinaciones frecuentes</h3>
        <ul>
          <li>
            <p>Antibióticos de amplio espectro (según el foco sospechado, ver sección anterior), administrados dentro de la primera hora desde la sospecha diagnóstica, asociados a la reanimación con líquidos intravenosos (habitualmente suero fisiológico o Ringer lactato, 30 mililitros por kilogramo de peso corporal, en las primeras 3 horas).</p>
          </li>
          <li>
            <p>Si la presión arterial no se recupera adecuadamente tras la reanimación con líquidos: agregar noradrenalina en infusión continua por vía intravenosa, ajustando la dosis para mantener una presión arterial media mayor a 65 mmHg (milímetros de mercurio, unidad de medida de la presión arterial).</p>
          </li>
          <li>
            <p>En casos de shock que no responde a la noradrenalina en dosis altas, se puede agregar vasopresina en infusión continua por vía intravenosa, como fármaco adicional para mejorar la presión arterial.</p>
          </li>
          <li>
            <p>Hidrocortisona 50 mg por vía intravenosa cada 6 horas, agregada en casos de shock séptico que no responde adecuadamente a los líquidos y los fármacos que elevan la presión arterial (llamados vasopresores).</p>
          </li>
        </ul>
        <h3>Precauciones</h3>
        <ul>
          <li>
            <p>La noradrenalina y otros vasopresores requieren idealmente administración a través de una vía venosa central (catéter colocado en una vena de mayor calibre) por el riesgo de daño en el tejido si se produce una fuga del fármaco fuera de la vena en una vía periférica; en la urgencia inicial, pueden usarse por vía periférica de forma transitoria con vigilancia estrecha.</p>
          </li>
          <li>
            <p>Reevaluar constantemente la respuesta a los líquidos intravenosos, ya que un exceso de volumen puede ser perjudicial, especialmente en pacientes con enfermedad cardíaca o renal previa.</p>
          </li>
        </ul>
      </Section>
      <Section id="c9-s4" title="3. Combinaciones analgésicas (multimodalidad del dolor)">
        <h3>Fundamento</h3>
        <p>Combinar fármacos con distintos mecanismos de acción permite lograr un mejor alivio del dolor utilizando dosis más bajas de cada uno, lo que reduce el riesgo de efectos adversos de cualquiera de ellos por separado, especialmente de los opioides.</p>
        <h3>Combinaciones frecuentes</h3>
        <ul>
          <li>
            <p>Paracetamol 1 g por vía intravenosa u oral, asociado a ibuprofeno 400 mg vía oral, ambos cada 8 horas: combinación de primera línea para dolor leve a moderado, con efecto complementario superior al de cada fármaco por separado.</p>
          </li>
          <li>
            <p>Ketorolaco 30 mg por vía intravenosa, asociado a un opioide como morfina 2-4 mg por vía intravenosa, cuando el dolor es más intenso: el antiinflamatorio reduce la cantidad de opioide necesaria para lograr un alivio adecuado (efecto llamado "ahorrador de opioides").</p>
          </li>
          <li>
            <p>Gabapentina o pregabalina asociadas a antidepresivos como la amitriptilina, en el manejo del dolor neuropático crónico, actuando sobre mecanismos distintos y complementarios del dolor.</p>
          </li>
        </ul>
        <h3>Precauciones</h3>
        <ul>
          <li>
            <p>Verificar que el paciente no esté usando ya paracetamol en otro medicamento combinado (por ejemplo, en preparados para el resfrío o en combinaciones con codeína), para no exceder la dosis máxima diaria de 4 g y evitar el riesgo de daño hepático.</p>
          </li>
          <li>
            <p>Evitar combinar dos antiinflamatorios no esteroidales distintos al mismo tiempo (por ejemplo, ibuprofeno y ketorolaco juntos), ya que no mejora el alivio del dolor y sí aumenta el riesgo de efectos adversos digestivos y renales.</p>
          </li>
        </ul>
      </Section>
      <Section id="c9-s5" title="4. Combinaciones en el síndrome coronario agudo">
        <h3>Fundamento</h3>
        <p>El tratamiento del síndrome coronario agudo (infarto o angina inestable) combina varios fármacos con objetivos distintos y complementarios: evitar que el coágulo siga creciendo, aliviar el dolor, reducir el trabajo del corazón y preparar al paciente para el procedimiento que destapará la arteria obstruida.</p>
        <h3>Combinaciones frecuentes</h3>
        <ul>
          <li>
            <p>Doble antiagregación plaquetaria: ácido acetilsalicílico 300 mg vía oral como dosis de carga, asociado a clopidogrel 300-600 mg vía oral como dosis de carga, ambos con dosis de mantenimiento posterior (ácido acetilsalicílico 100 mg al día y clopidogrel 75 mg al día).</p>
          </li>
          <li>
            <p>Anticoagulación con heparina (no fraccionada en infusión continua, o de bajo peso molecular como enoxaparina 1 mg/kg por vía subcutánea cada 12 horas), asociada a la doble antiagregación plaquetaria mencionada, para reducir el riesgo de que el coágulo continúe formándose.</p>
          </li>
          <li>
            <p>Betabloqueadores por vía oral (como metoprolol 25-50 mg vía oral cada 12 horas), asociados a nitratos (como nitroglicerina sublingual o en infusión intravenosa), para reducir el trabajo del corazón y aliviar el dolor, siempre que la presión arterial y la frecuencia cardíaca del paciente lo permitan.</p>
          </li>
        </ul>
        <h3>Precauciones</h3>
        <ul>
          <li>
            <p>Evitar los betabloqueadores en pacientes con signos de insuficiencia cardíaca aguda, presión arterial baja o riesgo de shock, ya que pueden empeorar estas condiciones.</p>
          </li>
          <li>
            <p>Evitar la combinación de nitratos con fármacos utilizados para la disfunción eréctil (como sildenafilo) por el riesgo de una caída peligrosa de la presión arterial; se debe preguntar activamente por el uso reciente de estos fármacos.</p>
          </li>
          <li>
            <p>Ajustar la dosis de heparina de bajo peso molecular en pacientes con insuficiencia renal, por el riesgo de acumulación y sangrado.</p>
          </li>
        </ul>
      </Section>
      <Section id="c9-s6" title="5. Combinaciones en la crisis asmática y la exacerbación de enfermedad pulmonar obstructiva crónica">
        <h3>Fundamento</h3>
        <p>El manejo combinado busca abrir la vía aérea a través de distintos mecanismos (relajación del músculo de los bronquios y reducción de la inflamación), actuando de forma simultánea y complementaria.</p>
        <h3>Combinaciones frecuentes</h3>
        <ul>
          <li>
            <p>Salbutamol (broncodilatador de acción rápida) 2.5-5 mg nebulizado, asociado a bromuro de ipratropio 0.5 mg nebulizado, ambos administrados juntos cada 20 minutos durante la primera hora en crisis moderadas a severas: los dos fármacos actúan sobre receptores distintos del músculo bronquial, logrando un efecto broncodilatador mayor que cada uno por separado.</p>
          </li>
          <li>
            <p>Corticoides sistémicos, como prednisona 40-50 mg vía oral una vez al día o hidrocortisona 100-200 mg por vía intravenosa cada 6-8 horas, agregados a los broncodilatadores mencionados, para reducir la inflamación de la vía aérea; su efecto se manifiesta después de varias horas, por lo que deben iniciarse precozmente y no solo cuando los broncodilatadores no son suficientes.</p>
          </li>
          <li>
            <p>Sulfato de magnesio 2 g por vía intravenosa en 20 minutos, agregado en crisis asmáticas severas que no responden adecuadamente a los broncodilatadores y corticoides, como fármaco adicional con efecto relajante sobre el músculo bronquial.</p>
          </li>
        </ul>
        <h3>Precauciones</h3>
        <ul>
          <li>
            <p>Vigilar la frecuencia cardíaca, ya que tanto el salbutamol como, en menor medida, el bromuro de ipratropio pueden acelerarla.</p>
          </li>
          <li>
            <p>Vigilar el nivel de potasio en sangre, ya que el salbutamol en dosis repetidas puede disminuirlo.</p>
          </li>
          <li>
            <p>En la enfermedad pulmonar obstructiva crónica, ajustar el oxígeno suplementario con precaución en pacientes con retención crónica de dióxido de carbono, evitando saturaciones de oxígeno demasiado altas que puedan disminuir el estímulo respiratorio.</p>
          </li>
        </ul>
      </Section>
      <Section id="c9-s7" title="6. Combinaciones en la insuficiencia cardíaca aguda descompensada">
        <h3>Fundamento</h3>
        <p>El manejo combina fármacos que reducen el volumen de líquido acumulado, fármacos que reducen el trabajo del corazón, y en casos más graves, fármacos que mejoran directamente la fuerza de contracción del corazón.</p>
        <h3>Combinaciones frecuentes</h3>
        <ul>
          <li>
            <p>Furosemida 20-40 mg por vía intravenosa, repetible según respuesta y función renal, asociada a nitroglicerina en infusión intravenosa en pacientes con presión arterial adecuada, para reducir tanto el exceso de líquido como el trabajo del corazón.</p>
          </li>
          <li>
            <p>En casos de shock cardiogénico (cuando el corazón no logra bombear suficiente sangre para mantener la presión arterial y la circulación a los órganos): agregar dobutamina en infusión continua por vía intravenosa, un fármaco que mejora la fuerza de contracción del corazón, con vigilancia estrecha por su capacidad de generar arritmias.</p>
          </li>
          <li>
            <p>Continuar, cuando sea posible, con el tratamiento crónico de base del paciente para la insuficiencia cardíaca (como betabloqueadores e inhibidores de la enzima convertidora de angiotensina), ajustando temporalmente las dosis según la estabilidad hemodinámica durante el episodio agudo.</p>
          </li>
        </ul>
        <h3>Precauciones</h3>
        <ul>
          <li>
            <p>Evitar el uso de antiinflamatorios no esteroidales en estos pacientes, ya que favorecen la retención de líquido y pueden empeorar la insuficiencia cardíaca.</p>
          </li>
          <li>
            <p>Vigilar de forma estrecha la función renal y los niveles de potasio y sodio en sangre durante el uso combinado de diuréticos con otros fármacos que actúan sobre el riñón.</p>
          </li>
        </ul>
      </Section>
      <Section id="c9-s8" title="7. Interacciones peligrosas entre fármacos de uso frecuente en urgencias">
        <h3>Combinaciones a evitar o manejar con precaución</h3>
        <ul>
          <li>
            <p><strong>Warfarina (anticoagulante oral) con antiinflamatorios no esteroidales o con antibióticos como el metronidazol o el trimetoprim con sulfametoxazol</strong>: aumenta significativamente el riesgo de sangrado, ya sea por efecto directo sobre la coagulación o por interferencia con la forma en que el cuerpo elimina la warfarina.</p>
          </li>
          <li>
            <p><strong>Inhibidores de la enzima convertidora de angiotensina (como enalapril) o antagonistas del receptor de angiotensina (como losartán) con antiinflamatorios no esteroidales y diuréticos</strong>: combinación conocida como "tríada de la muerte" para la función renal, ya que cada uno de estos fármacos, por un mecanismo distinto, puede reducir el flujo de sangre al riñón, y su uso combinado aumenta considerablemente el riesgo de daño renal agudo.</p>
          </li>
          <li>
            <p><strong>Inhibidores de la recaptación de serotonina (antidepresivos como la sertralina o la fluoxetina) con tramadol o con triptanes (como el sumatriptán)</strong>: aumenta el riesgo de síndrome serotoninérgico (exceso de actividad de la serotonina en el sistema nervioso), que se manifiesta con agitación, temblor, sudoración excesiva, aumento de la temperatura corporal y, en casos graves, rigidez muscular y alteración de la conciencia.</p>
          </li>
          <li>
            <p><strong>Betabloqueadores con verapamilo o diltiazem (fármacos usados para el control de la frecuencia cardíaca en arritmias)</strong>: ambos disminuyen la frecuencia cardíaca y la fuerza de contracción del corazón, por lo que su combinación puede causar una disminución peligrosa de la frecuencia cardíaca o empeorar una insuficiencia cardíaca no reconocida.</p>
          </li>
          <li>
            <p><strong>Metronidazol con alcohol</strong>: puede producir una reacción adversa con enrojecimiento facial, náuseas, vómitos y palpitaciones, por lo que se debe advertir al paciente evitar el alcohol durante el tratamiento y hasta 48 horas después de finalizarlo.</p>
          </li>
          <li>
            <p><strong>Múltiples fármacos que prolongan el intervalo QT (un parámetro del electrocardiograma relacionado con el riesgo de arritmias graves), como ciertos antibióticos (azitromicina, claritromicina), antieméticos (ondansetrón) y antipsicóticos (haloperidol)</strong>: su uso combinado aumenta el riesgo de una arritmia grave llamada torsión de puntas; se recomienda revisar el electrocardiograma antes de combinar varios de estos fármacos cuando sea posible.</p>
          </li>
        </ul>
        <h3>Recomendaciones generales</h3>
        <ul>
          <li>
            <p>Revisar siempre la lista completa de medicamentos que el paciente toma de forma habitual antes de agregar nuevos fármacos en el servicio de urgencias.</p>
          </li>
          <li>
            <p>Ante la duda sobre una posible interacción, consultar con el servicio de farmacia del centro o con fuentes de referencia actualizadas antes de administrar la combinación.</p>
          </li>
          <li>
            <p>Explicar al paciente, al momento del alta, las combinaciones que debe evitar con los medicamentos indicados, especialmente el alcohol y los medicamentos de venta libre que pueda tomar por cuenta propia.</p>
          </li>
        </ul>
        <p><em>Fin del Capítulo 9.</em></p>
      </Section>
    </>
  )
}

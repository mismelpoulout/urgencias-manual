import Section from '../../components/content/Section.jsx'
import ToolLink from '../../components/tools/ToolLink.jsx'

// Capítulo 5 · Las 10 causas más frecuentes de dolor torácico en el servicio de urgencias
export default function Capitulo05() {
  return (
    <>
      <Section id="c5-s1" title="1. Síndrome coronario agudo (infarto agudo de miocardio y angina inestable)">
        <ToolLink to="c23-s4">Seguir el algoritmo de dolor torácico</ToolLink>
        <h3>Identificación</h3>
        <p>Dolor torácico de origen isquémico causado por la obstrucción total o parcial de una arteria coronaria, que reduce el flujo de sangre y oxígeno al músculo del corazón.</p>
        <h3>Cuadro clínico</h3>
        <ul>
          <li>
            <p>Dolor opresivo, tipo "peso" o "aplastamiento" en el centro del pecho, que puede irradiarse al brazo izquierdo, mandíbula, cuello o espalda.</p>
          </li>
          <li>
            <p>Duración mayor a 20 minutos.</p>
          </li>
          <li>
            <p>Sudoración fría, náuseas, vómitos, sensación de muerte inminente.</p>
          </li>
          <li>
            <p>Dificultad para respirar.</p>
          </li>
          <li>
            <p>Puede presentarse sin dolor típico en mujeres, personas mayores o personas con diabetes (dolor en la espalda, cansancio extremo, malestar digestivo).</p>
          </li>
        </ul>
        <h3>Diagnóstico</h3>
        <ul>
          <li>
            <p>Electrocardiograma (registro eléctrico del corazón) dentro de los primeros 10 minutos de llegada del paciente.</p>
          </li>
          <li>
            <p>Análisis de sangre para medir troponina (proteína que se libera cuando hay daño en el músculo del corazón), tomada al ingreso y repetida a las 1-3 horas según el protocolo del centro.</p>
          </li>
          <li>
            <p>Radiografía de tórax.</p>
          </li>
        </ul>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Oxígeno suplementario solo si la saturación de oxígeno en sangre es menor a 90%.</p>
          </li>
          <li>
            <p>Ácido acetilsalicílico (aspirina) 300 mg vía oral, masticado, dosis única de carga.</p>
          </li>
          <li>
            <p>Nitroglicerina 0.4 mg sublingual, se puede repetir cada 5 minutos hasta 3 dosis, si la presión arterial sistólica es mayor a 90 mmHg (milímetros de mercurio, unidad de medida de la presión arterial).</p>
          </li>
          <li>
            <p>Morfina 2-4 mg por vía intravenosa cada 5-15 minutos si el dolor persiste pese a la nitroglicerina.</p>
          </li>
          <li>
            <p>Clopidogrel 300-600 mg vía oral, dosis de carga (segundo fármaco antiagregante plaquetario, es decir, que evita la formación de coágulos).</p>
          </li>
          <li>
            <p>Heparina no fraccionada o heparina de bajo peso molecular (enoxaparina 1 mg/kg por vía subcutánea cada 12 horas), según protocolo local.</p>
          </li>
          <li>
            <p>Traslado urgente para angioplastia (procedimiento para destapar la arteria) o uso de fármacos trombolíticos si no hay angioplastia disponible dentro de los plazos establecidos.</p>
          </li>
        </ul>
      </Section>
      <Section id="c5-s2" title="2. Tromboembolismo pulmonar">
        <h3>Identificación</h3>
        <p>Obstrucción de una arteria del pulmón por un coágulo de sangre que generalmente viaja desde las venas profundas de las piernas.</p>
        <h3>Cuadro clínico</h3>
        <ul>
          <li>
            <p>Dolor torácico tipo puntada, que aumenta al respirar profundo (dolor pleurítico).</p>
          </li>
          <li>
            <p>Dificultad para respirar de inicio súbito.</p>
          </li>
          <li>
            <p>Aumento de la frecuencia cardíaca.</p>
          </li>
          <li>
            <p>Tos, a veces con sangre.</p>
          </li>
          <li>
            <p>Hinchazón o dolor en una pierna (signo de trombosis venosa).</p>
          </li>
          <li>
            <p>Puede haber desmayo o baja repentina de la presión arterial en casos graves.</p>
          </li>
        </ul>
        <h3>Diagnóstico</h3>
        <ul>
          <li>
            <p>Escala de Wells o Ginebra (herramientas clínicas para calcular la probabilidad de tromboembolismo pulmonar según los síntomas y antecedentes).</p>
          </li>
          <li>
            <p>Dímero D (análisis de sangre que mide un producto de la degradación de coágulos), útil para descartar el diagnóstico si sale negativo en pacientes de baja probabilidad.</p>
          </li>
          <li>
            <p>Angiografía pulmonar por tomografía computarizada (estudio de imágenes con contraste que muestra directamente el coágulo).</p>
          </li>
          <li>
            <p>Electrocardiograma y ecocardiograma para evaluar el impacto sobre el corazón derecho.</p>
          </li>
        </ul>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Oxígeno suplementario según necesidad.</p>
          </li>
          <li>
            <p>Anticoagulación con heparina no fraccionada en infusión continua por vía intravenosa, o enoxaparina 1 mg/kg por vía subcutánea cada 12 horas.</p>
          </li>
          <li>
            <p>En casos de inestabilidad hemodinámica (presión arterial baja que no responde), fármacos trombolíticos como alteplasa 100 mg por vía intravenosa en infusión durante 2 horas.</p>
          </li>
          <li>
            <p>Continuar con anticoagulación oral a mediano plazo (rivaroxabán, apixabán o warfarina) según evaluación del especialista, una vez estabilizado el paciente.</p>
          </li>
          <li>
            <p>Soporte con líquidos intravenosos con precaución, evitando la sobrecarga en el corazón derecho.</p>
          </li>
        </ul>
      </Section>
      <Section id="c5-s3" title="3. Disección aórtica">
        <h3>Identificación</h3>
        <p>Desgarro en la capa interna de la aorta (la arteria principal del cuerpo) que permite que la sangre se introduzca entre las capas de la pared arterial y las separe.</p>
        <h3>Cuadro clínico</h3>
        <ul>
          <li>
            <p>Dolor torácico o de espalda de inicio súbito, muy intenso, descrito como "desgarrante" o "como una puñalada".</p>
          </li>
          <li>
            <p>El dolor puede migrar desde el pecho hacia la espalda o el abdomen a medida que avanza la disección.</p>
          </li>
          <li>
            <p>Diferencia de presión arterial entre ambos brazos.</p>
          </li>
          <li>
            <p>Puede haber síntomas neurológicos si se compromete la circulación hacia el cerebro.</p>
          </li>
          <li>
            <p>Puede acompañarse de síncope (pérdida de conciencia breve).</p>
          </li>
        </ul>
        <h3>Diagnóstico</h3>
        <ul>
          <li>
            <p>Radiografía de tórax (puede mostrar ensanchamiento del mediastino, el espacio central del tórax).</p>
          </li>
          <li>
            <p>Angiografía por tomografía computarizada de tórax, herramienta de elección para confirmar el diagnóstico.</p>
          </li>
          <li>
            <p>Ecocardiograma transesofágico si el paciente está muy inestable para trasladarlo a tomografía.</p>
          </li>
          <li>
            <p>Medición de presión arterial en ambos brazos.</p>
          </li>
        </ul>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Control estricto e inmediato de la frecuencia cardíaca y la presión arterial para reducir la fuerza que ejerce la sangre sobre la pared arterial dañada.</p>
          </li>
          <li>
            <p>Esmolol o labetalol por vía intravenosa en infusión continua, ajustando dosis para lograr una frecuencia cardíaca entre 60-80 latidos por minuto.</p>
          </li>
          <li>
            <p>Si la presión arterial sigue elevada tras controlar la frecuencia cardíaca, agregar nitroprusiato de sodio en infusión intravenosa.</p>
          </li>
          <li>
            <p>Analgesia con morfina por vía intravenosa según necesidad.</p>
          </li>
          <li>
            <p>Evaluación urgente por cirugía cardiovascular; la disección que compromete la aorta ascendente requiere cirugía de emergencia, mientras que la que compromete solo la aorta descendente puede manejarse inicialmente con fármacos.</p>
          </li>
        </ul>
      </Section>
      <Section id="c5-s4" title="4. Neumotórax a tensión">
        <h3>Identificación</h3>
        <p>Acumulación progresiva de aire en el espacio entre el pulmón y la pared torácica, que colapsa el pulmón y desplaza las estructuras del centro del tórax, comprometiendo el retorno de sangre al corazón.</p>
        <h3>Cuadro clínico</h3>
        <ul>
          <li>
            <p>Dolor torácico agudo de un solo lado.</p>
          </li>
          <li>
            <p>Dificultad respiratoria severa y progresiva.</p>
          </li>
          <li>
            <p>Disminución o ausencia de los sonidos respiratorios en el lado afectado.</p>
          </li>
          <li>
            <p>Desviación de la tráquea hacia el lado contrario al afectado.</p>
          </li>
          <li>
            <p>Distensión de las venas del cuello.</p>
          </li>
          <li>
            <p>Baja presión arterial y riesgo de paro cardiorrespiratorio si no se trata de inmediato.</p>
          </li>
        </ul>
        <h3>Diagnóstico</h3>
        <ul>
          <li>
            <p>Es un diagnóstico clínico: no se debe esperar a la radiografía si el paciente está inestable.</p>
          </li>
          <li>
            <p>Radiografía de tórax si el paciente está estable, para confirmar antes o después del tratamiento.</p>
          </li>
          <li>
            <p>Ecografía a pie de cama (ecografía pulmonar de urgencia) como herramienta rápida de confirmación.</p>
          </li>
        </ul>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Descompresión inmediata con aguja: inserción de una aguja gruesa en el segundo espacio intercostal, línea medioclavicular (o en el quinto espacio intercostal, línea axilar anterior según protocolo actualizado), del lado afectado.</p>
          </li>
          <li>
            <p>Posteriormente, instalación de un tubo de drenaje pleural (tubo que se deja conectado para drenar el aire de forma continua).</p>
          </li>
          <li>
            <p>Oxígeno suplementario a alto flujo.</p>
          </li>
          <li>
            <p>Monitorización continua de signos vitales.</p>
          </li>
        </ul>
      </Section>
      <Section id="c5-s5" title="5. Pericarditis aguda">
        <h3>Identificación</h3>
        <p>Inflamación del pericardio, la membrana que rodea al corazón, generalmente de origen viral, aunque también puede deberse a causas autoinmunes, post infarto o post cirugía cardíaca.</p>
        <h3>Cuadro clínico</h3>
        <ul>
          <li>
            <p>Dolor torácico agudo, tipo punzante, que empeora al acostarse y mejora al inclinarse hacia adelante.</p>
          </li>
          <li>
            <p>El dolor puede aumentar con la respiración profunda o la tos.</p>
          </li>
          <li>
            <p>Puede haber fiebre leve.</p>
          </li>
          <li>
            <p>Roce pericárdico a la auscultación (sonido de fricción que se escucha con el fonendoscopio).</p>
          </li>
        </ul>
        <h3>Diagnóstico</h3>
        <ul>
          <li>
            <p>Electrocardiograma, que típicamente muestra elevación difusa del segmento ST (parte del trazado eléctrico del corazón) en múltiples derivaciones.</p>
          </li>
          <li>
            <p>Ecocardiograma para evaluar si hay líquido acumulado alrededor del corazón (derrame pericárdico).</p>
          </li>
          <li>
            <p>Análisis de sangre: proteína C reactiva y velocidad de sedimentación globular (marcadores de inflamación), además de troponina para descartar compromiso del músculo cardíaco.</p>
          </li>
        </ul>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Ibuprofeno 600-800 mg vía oral cada 8 horas, o ácido acetilsalicílico 750-1000 mg vía oral cada 8 horas, durante 1-2 semanas con reducción gradual posterior.</p>
          </li>
          <li>
            <p>Colchicina 0.5 mg vía oral cada 12 horas (en personas de menos de 70 kilogramos, 0.5 mg una vez al día), durante 3 meses, para reducir el riesgo de que la pericarditis reaparezca.</p>
          </li>
          <li>
            <p>Evitar el uso de corticoides como primera línea, ya que aumentan el riesgo de recurrencia; se reservan para casos que no responden a lo anterior o que tienen contraindicación para los fármacos previos.</p>
          </li>
          <li>
            <p>Reposo y evitar actividad física intensa hasta la resolución de los síntomas y normalización de los marcadores de inflamación.</p>
          </li>
        </ul>
      </Section>
      <Section id="c5-s6" title="6. Neumonía con compromiso pleural">
        <h3>Identificación</h3>
        <p>Infección del tejido pulmonar que, cuando compromete la superficie cercana a la pleura (la membrana que recubre el pulmón), genera dolor torácico de características particulares.</p>
        <h3>Cuadro clínico</h3>
        <ul>
          <li>
            <p>Dolor torácico tipo puntada, que aumenta con la respiración profunda o la tos (dolor pleurítico).</p>
          </li>
          <li>
            <p>Fiebre, escalofríos.</p>
          </li>
          <li>
            <p>Tos con expectoración (flema), a veces con sangre.</p>
          </li>
          <li>
            <p>Dificultad para respirar.</p>
          </li>
          <li>
            <p>Puede haber confusión en personas mayores.</p>
          </li>
        </ul>
        <h3>Diagnóstico</h3>
        <ul>
          <li>
            <p>Radiografía de tórax, que muestra la zona de infección (infiltrado o consolidación pulmonar).</p>
          </li>
          <li>
            <p>Análisis de sangre: hemograma (recuento de células de la sangre) y proteína C reactiva.</p>
          </li>
          <li>
            <p>Saturación de oxígeno en sangre.</p>
          </li>
          <li>
            <p>Escala de gravedad (como el índice de gravedad de neumonía o la escala CURB-65, que evalúa confusión, nivel de urea en sangre, frecuencia respiratoria, presión arterial y edad) para decidir si el manejo será ambulatorio u hospitalario.</p>
          </li>
        </ul>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Manejo ambulatorio en casos leves: amoxicilina 1 g vía oral cada 8 horas durante 5-7 días, o claritromicina 500 mg vía oral cada 12 horas si hay alergia a la penicilina.</p>
          </li>
          <li>
            <p>Manejo hospitalario en casos moderados a graves: ceftriaxona 1-2 g por vía intravenosa cada 24 horas, asociada a claritromicina 500 mg por vía intravenosa u oral cada 12 horas.</p>
          </li>
          <li>
            <p>En casos graves con necesidad de cuidados intensivos: ampliar cobertura antibiótica según protocolo local y evaluar necesidad de soporte ventilatorio.</p>
          </li>
          <li>
            <p>Analgesia con paracetamol 1 g vía oral u intravenosa cada 8 horas para el manejo del dolor y la fiebre.</p>
          </li>
          <li>
            <p>Oxígeno suplementario según necesidad.</p>
          </li>
        </ul>
      </Section>
      <Section id="c5-s7" title="7. Espasmo esofágico y reflujo gastroesofágico">
        <h3>Identificación</h3>
        <p>Dolor torácico originado en el esófago, ya sea por contracciones anormales de su musculatura (espasmo esofágico) o por irritación de su mucosa debido al reflujo de ácido desde el estómago.</p>
        <h3>Cuadro clínico</h3>
        <ul>
          <li>
            <p>Dolor torácico opresivo o tipo ardor, que puede simular un dolor de origen cardíaco.</p>
          </li>
          <li>
            <p>Relación con las comidas o con la posición acostada.</p>
          </li>
          <li>
            <p>Sensación de ardor que sube desde el estómago hacia la garganta.</p>
          </li>
          <li>
            <p>Puede aliviarse con antiácidos.</p>
          </li>
          <li>
            <p>Dificultad para tragar en algunos casos.</p>
          </li>
        </ul>
        <h3>Diagnóstico</h3>
        <ul>
          <li>
            <p>Es fundamental descartar primero causas cardíacas y otras causas graves antes de atribuir el dolor al esófago.</p>
          </li>
          <li>
            <p>Electrocardiograma y marcadores cardíacos normales.</p>
          </li>
          <li>
            <p>Prueba terapéutica con antiácidos (si el dolor mejora, orienta hacia origen digestivo, aunque no lo confirma de forma definitiva).</p>
          </li>
          <li>
            <p>Endoscopia digestiva alta si los síntomas son recurrentes, para evaluar el estado de la mucosa del esófago.</p>
          </li>
        </ul>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Omeprazol 20-40 mg vía oral una vez al día, antes del desayuno, durante 4-8 semanas.</p>
          </li>
          <li>
            <p>Antiácidos de acción rápida (hidróxido de aluminio y magnesio) según necesidad para el alivio inmediato de los síntomas.</p>
          </li>
          <li>
            <p>Medidas generales: evitar comidas copiosas, café, alcohol y tabaco; elevar la cabecera de la cama; evitar acostarse inmediatamente después de comer.</p>
          </li>
          <li>
            <p>En caso de espasmo esofágico confirmado, se pueden usar bloqueadores de los canales de calcio como nifedipino, bajo indicación del especialista.</p>
          </li>
        </ul>
      </Section>
      <Section id="c5-s8" title="8. Costocondritis y dolor musculoesquelético de la pared torácica">
        <h3>Identificación</h3>
        <p>Inflamación de los cartílagos que unen las costillas con el esternón (hueso central del pecho), o dolor originado en los músculos y articulaciones de la pared del tórax, generalmente relacionado con esfuerzo físico o traumatismos menores.</p>
        <h3>Cuadro clínico</h3>
        <ul>
          <li>
            <p>Dolor torácico localizado, que se reproduce o intensifica al presionar la zona con el dedo.</p>
          </li>
          <li>
            <p>El dolor aumenta con los movimientos del tronco, la respiración profunda o la tos.</p>
          </li>
          <li>
            <p>No se acompaña de síntomas como sudoración, dificultad respiratoria significativa o irradiación típica del dolor cardíaco.</p>
          </li>
          <li>
            <p>Puede haber antecedente de esfuerzo físico reciente, tos prolongada o traumatismo.</p>
          </li>
        </ul>
        <h3>Diagnóstico</h3>
        <ul>
          <li>
            <p>Es un diagnóstico principalmente clínico, basado en la reproducción del dolor a la palpación.</p>
          </li>
          <li>
            <p>Se debe descartar previamente el origen cardíaco y pulmonar mediante electrocardiograma y, si es necesario, marcadores cardíacos y radiografía de tórax.</p>
          </li>
          <li>
            <p>No se requieren exámenes adicionales en casos típicos sin señales de alarma.</p>
          </li>
        </ul>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Ibuprofeno 400-600 mg vía oral cada 8 horas, con las comidas, durante 5-7 días.</p>
          </li>
          <li>
            <p>Paracetamol 1 g vía oral cada 8 horas como alternativa o complemento si hay contraindicación para los antiinflamatorios.</p>
          </li>
          <li>
            <p>Aplicación de calor local y reposo relativo de la actividad que provoca el dolor.</p>
          </li>
          <li>
            <p>Educar al paciente sobre el carácter benigno de la condición y los plazos esperados de mejoría (generalmente días a pocas semanas).</p>
          </li>
        </ul>
      </Section>
      <Section id="c5-s9" title="9. Crisis de pánico y ansiedad">
        <h3>Identificación</h3>
        <p>Episodio de ansiedad intensa que puede generar síntomas físicos indistinguibles de una urgencia cardíaca o respiratoria, por lo que siempre debe considerarse un diagnóstico de exclusión (es decir, solo se confirma después de haber descartado causas orgánicas graves).</p>
        <h3>Cuadro clínico</h3>
        <ul>
          <li>
            <p>Dolor u opresión torácica de inicio súbito.</p>
          </li>
          <li>
            <p>Sensación de falta de aire, palpitaciones, mareo.</p>
          </li>
          <li>
            <p>Hormigueo en manos y alrededor de la boca.</p>
          </li>
          <li>
            <p>Sensación de muerte inminente o de pérdida de control.</p>
          </li>
          <li>
            <p>Los síntomas suelen alcanzar su punto máximo dentro de los primeros 10 minutos y ceder gradualmente después.</p>
          </li>
        </ul>
        <h3>Diagnóstico</h3>
        <ul>
          <li>
            <p>Diagnóstico de exclusión: es indispensable descartar primero causas cardíacas, pulmonares y otras causas orgánicas mediante electrocardiograma, marcadores cardíacos, saturación de oxígeno y radiografía de tórax si corresponde.</p>
          </li>
          <li>
            <p>Evaluación de antecedentes de crisis similares previas o de trastornos de ansiedad diagnosticados.</p>
          </li>
        </ul>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Contención verbal y ambiente tranquilo; explicar al paciente lo que está ocurriendo suele reducir la intensidad de los síntomas.</p>
          </li>
          <li>
            <p>Técnicas de respiración controlada.</p>
          </li>
          <li>
            <p>En caso de síntomas muy intensos, se puede considerar una benzodiazepina de acción corta como lorazepam 0.5-1 mg vía oral o sublingual, dosis única, reservado para casos seleccionados y bajo indicación médica.</p>
          </li>
          <li>
            <p>Derivación a evaluación por salud mental para manejo a mediano y largo plazo si se confirman crisis de pánico recurrentes.</p>
          </li>
        </ul>
      </Section>
      <Section id="c5-s10" title="10. Herpes zóster torácico (antes de la aparición de las lesiones en la piel)">
        <h3>Identificación</h3>
        <p>Dolor torácico causado por la reactivación del virus varicela-zóster en un nervio intercostal (nervio que recorre el espacio entre las costillas), que puede preceder a la aparición de las lesiones cutáneas características por varios días.</p>
        <h3>Cuadro clínico</h3>
        <ul>
          <li>
            <p>Dolor torácico intenso, tipo ardor o quemazón, que sigue el trayecto de un nervio, generalmente de un solo lado del cuerpo y limitado a una franja del tórax.</p>
          </li>
          <li>
            <p>El dolor puede preceder en 2 a 4 días a la aparición de las lesiones en la piel (vesículas, es decir, pequeñas ampollas agrupadas sobre una base enrojecida).</p>
          </li>
          <li>
            <p>Puede acompañarse de hormigueo o mayor sensibilidad al tacto en la zona afectada.</p>
          </li>
          <li>
            <p>No se relaciona con el esfuerzo físico ni con la respiración de la misma forma que el dolor musculoesquelético o pleurítico.</p>
          </li>
        </ul>
        <h3>Diagnóstico</h3>
        <ul>
          <li>
            <p>Antes de la aparición de las lesiones cutáneas, el diagnóstico es de sospecha clínica y de exclusión de otras causas de dolor torácico mediante electrocardiograma y evaluación general.</p>
          </li>
          <li>
            <p>Una vez aparecen las lesiones características en la piel, siguiendo el trayecto de un nervio, el diagnóstico se vuelve clínico y evidente.</p>
          </li>
          <li>
            <p>En casos dudosos, se puede confirmar mediante reacción de cadena de la polimerasa (prueba de laboratorio que detecta material genético del virus) del líquido de las vesículas.</p>
          </li>
        </ul>
        <h3>Tratamiento</h3>
        <ul>
          <li>
            <p>Aciclovir 800 mg vía oral 5 veces al día durante 7-10 días, o valaciclovir 1 g vía oral cada 8 horas durante 7 días, idealmente iniciado dentro de las primeras 72 horas desde la aparición de las lesiones en la piel.</p>
          </li>
          <li>
            <p>Analgesia según intensidad del dolor: paracetamol 1 g vía oral cada 8 horas, o en casos de dolor más intenso, agregar gabapentina 300 mg vía oral cada 8 horas, con ajuste progresivo de dosis según respuesta y tolerancia.</p>
          </li>
          <li>
            <p>Cuidado local de las lesiones en la piel para prevenir infecciones agregadas.</p>
          </li>
          <li>
            <p>Vigilancia de complicaciones como la neuralgia postherpética (dolor persistente en la zona afectada, que puede continuar semanas o meses después de que las lesiones en la piel hayan sanado).</p>
          </li>
        </ul>
        <p><em>Fin del Capítulo 5.</em></p>
      </Section>
    </>
  )
}

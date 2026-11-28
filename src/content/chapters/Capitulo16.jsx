import Callout from '../../components/content/Callout.jsx'
import Section from '../../components/content/Section.jsx'

// Capítulo 16 · Enfermedades más comunes de la mujer en el servicio de urgencia
export default function Capitulo16() {
  return (
    <>
      <p>Epidemiología, cuadro clínico, diagnóstico y tratamiento inicial de las diez causas de consulta más frecuentes en la mujer en el servicio de urgencia, alineadas con las guías vigentes del MINSAL (Guía Perinatal, Programa Nacional de Salud de la Mujer) y la evidencia clínica actual.</p>
      <Section id="c16-s1" title="1. Infección del tracto urinario (cistitis aguda y pielonefritis aguda)">
        <p><strong>Epidemiología:</strong> es una de las infecciones bacterianas más frecuentes en la mujer; se estima que aproximadamente la mitad de las mujeres presentará al menos un episodio de infección urinaria a lo largo de su vida. <em>Escherichia coli</em> es el agente causal más frecuente, con tasas de resistencia variables en Chile (ciprofloxacino 15-20%, cotrimoxazol forte cercano al 30%, según reportes locales), lo que obliga a conocer el perfil de resistencia del centro asistencial.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Cistitis: disuria, polaquiuria, urgencia miccional, dolor suprapúbico, sin fiebre ni compromiso del estado general</p>
          </li>
          <li>
            <p>Pielonefritis: fiebre, calofríos, dolor en flanco o puñopercusión lumbar positiva, náuseas y vómitos, puede asociar signos de sepsis en casos graves</p>
          </li>
          <li>
            <p>En el embarazo, toda bacteriuria (incluso asintomática) debe tratarse por el riesgo de progresión a pielonefritis y parto prematuro</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Sedimento de orina: leucocituria, nitritos positivos (sugieren enterobacterias), bacteriuria</p>
          </li>
          <li>
            <p>Urocultivo con antibiograma antes de iniciar tratamiento en pielonefritis, embarazo, ITU recurrente o falla de tratamiento previo (no es indispensable en cistitis no complicada de bajo riesgo)</p>
          </li>
          <li>
            <p>Hemograma y PCR en sospecha de pielonefritis; hemocultivos si hay signos de sepsis</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p><strong>Cistitis no complicada:</strong> Nitrofurantoína 100 mg VO c/12 h por 5 días, o Cefadroxilo 500 mg VO c/12 h por 7 días (evitar Cotrimoxazol y Ciprofloxacino como empíricos de primera línea dado el perfil de resistencia local)</p>
          </li>
          <li>
            <p><strong>Pielonefritis aguda ambulatoria (sin criterios de gravedad):</strong> Cefadroxilo 1 g VO c/12 h o Ciprofloxacino 500 mg VO c/12 h por 10-14 días, según antibiograma</p>
          </li>
          <li>
            <p><strong>Pielonefritis con criterios de hospitalización (sepsis, intolerancia oral, embarazo, falla ambulatoria):</strong> Ceftriaxona 1-2 g IV c/24 h, ajustando según urocultivo</p>
          </li>
          <li>
            <p><strong>Embarazada:</strong> Cefadroxilo o Nitrofurantoína (evitar en el tercer trimestre) según edad gestacional; hospitalizar toda pielonefritis en el embarazo</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La bacteriuria asintomática en la embarazada siempre debe tratarse — a diferencia de la mujer no embarazada, donde habitualmente no requiere tratamiento.</p>
        </Callout>
      </Section>
      <Section id="c16-s2" title="2. Enfermedad inflamatoria pélvica (EIP)">
        <p><strong>Epidemiología:</strong> afecta principalmente a mujeres sexualmente activas en edad reproductiva, con mayor incidencia en adolescentes y adultas jóvenes (20-25 años); <em>Chlamydia trachomatis</em> y <em>Neisseria gonorrhoeae</em> son los agentes causales más frecuentes, aunque la EIP suele ser polimicrobiana.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor abdominal bajo o pélvico, habitualmente bilateral, de inicio insidioso</p>
          </li>
          <li>
            <p>Fiebre, flujo vaginal purulento, dispareunia, sangrado intermenstrual</p>
          </li>
          <li>
            <p>Dolor a la movilización cervical y anexial al examen ginecológico (hallazgo clave)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Clínico: dolor a la movilización cervical o anexial más al menos un criterio adicional (fiebre, leucorrea purulenta, leucocitosis, PCR elevada) es suficiente para iniciar tratamiento empírico</p>
          </li>
          <li>
            <p>Ecografía transvaginal para descartar absceso tubo-ovárico, que cambia el manejo</p>
          </li>
          <li>
            <p>Test de embarazo obligatorio (descartar embarazo ectópico como diagnóstico diferencial) y estudio de Chlamydia/gonorrea (PCR de secreción endocervical)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p><strong>Ambulatorio (sin criterios de gravedad):</strong> Ceftriaxona 500 mg IM en dosis única + Doxiciclina 100 mg VO c/12 h por 14 días + Metronidazol 500 mg VO c/12 h por 14 días</p>
          </li>
          <li>
            <p><strong>Hospitalizado (absceso tubo-ovárico, embarazo, intolerancia oral, falla ambulatoria):</strong> Ceftriaxona 1 g IV c/24 h + Doxiciclina 100 mg VO/IV c/12 h + Metronidazol 500 mg IV c/8 h</p>
          </li>
          <li>
            <p>Drenaje percutáneo o quirúrgico del absceso tubo-ovárico si es &gt;7-8 cm o no responde al manejo antibiótico en 48-72 horas</p>
          </li>
          <li>
            <p>Tratamiento de la pareja sexual y educación en prevención de infecciones de transmisión sexual</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El umbral de sospecha diagnóstica de EIP debe ser bajo — el retraso en el tratamiento aumenta el riesgo de infertilidad tubárica y embarazo ectópico futuro.</p>
        </Callout>
      </Section>
      <Section id="c16-s3" title="3. Torsión ovárica">
        <p><strong>Epidemiología:</strong> ocurre con mayor frecuencia en mujeres en edad reproductiva, favorecida por la presencia de un quiste ovárico o masa anexial ≥5 cm que actúa como punto de apoyo para la rotación del pedículo; también puede presentarse en el embarazo por el aumento de tamaño ovárico asociado a la hiperestimulación.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor abdominal bajo o pélvico unilateral, de inicio súbito, intenso, tipo cólico</p>
          </li>
          <li>
            <p>Náuseas y vómitos frecuentemente asociados</p>
          </li>
          <li>
            <p>Puede haber episodios previos de dolor similar autolimitado (torsión intermitente)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Ecografía transvaginal con Doppler color (examen de elección): ovario aumentado de tamaño, edema estromal, ausencia o disminución del flujo venoso/arterial (la presencia de flujo Doppler no descarta torsión, ya que el ovario tiene doble irrigación)</p>
          </li>
          <li>
            <p>Diagnóstico eminentemente clínico-quirúrgico cuando la sospecha es alta, ya que el retraso aumenta el riesgo de necrosis ovárica irreversible</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Cirugía de urgencia (laparoscopía de elección): destorsión del anexo con conservación ovárica siempre que sea posible, incluso ante apariencia isquémica del ovario (la viabilidad suele recuperarse tras la destorsión)</p>
          </li>
          <li>
            <p>Ooforectomía solo si hay necrosis franca establecida o imposibilidad de conservación</p>
          </li>
          <li>
            <p>Analgesia (Ketorolaco 30 mg IV) y manejo de náuseas mientras se define la cirugía</p>
          </li>
          <li>
            <p>Cistectomía del quiste causal en el mismo acto quirúrgico si es factible, para reducir el riesgo de recurrencia</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La torsión ovárica es una urgencia quirúrgica tiempo-dependiente — un flujo Doppler presente no la descarta, y ante alta sospecha clínica la cirugía no debe retrasarse esperando la confirmación ecográfica completa.</p>
        </Callout>
      </Section>
      <Section id="c16-s4" title="4. Rotura y hemorragia de quiste ovárico (folicular o de cuerpo lúteo)">
        <p><strong>Epidemiología:</strong> es una causa frecuente de dolor pélvico agudo en mujeres en edad reproductiva, habitualmente en la segunda mitad del ciclo menstrual (rotura de cuerpo lúteo) o en relación con la ovulación (quiste folicular); el riesgo de sangrado significativo aumenta en mujeres bajo tratamiento anticoagulante.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor pélvico unilateral de inicio agudo, coincidente con la mitad o el final del ciclo menstrual</p>
          </li>
          <li>
            <p>Puede haber signos de irritación peritoneal si hay hemoperitoneo asociado</p>
          </li>
          <li>
            <p>En sangrado significativo: taquicardia, hipotensión y signos de shock hipovolémico</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Test de embarazo (siempre, para descartar embarazo ectópico roto como diagnóstico diferencial)</p>
          </li>
          <li>
            <p>Ecografía transvaginal: quiste anexial con contenido heterogéneo (imagen en "encaje" o "vidrio esmerilado" sugerente de sangre), líquido libre en fondo de saco de Douglas</p>
          </li>
          <li>
            <p>Hemograma seriado si hay sospecha de sangrado activo significativo</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p><strong>Estable, sin signos de sangrado activo significativo:</strong> manejo conservador ambulatorio con analgesia (Ketorolaco 30 mg IV o Ibuprofeno 400-600 mg VO c/8 h) y control ecográfico en 24-48 horas</p>
          </li>
          <li>
            <p><strong>Inestabilidad hemodinámica o hemoperitoneo significativo:</strong> hospitalización, reanimación con cristaloides, y laparoscopía de urgencia para hemostasia (electrocoagulación o sutura del lecho de sangrado, conservando el ovario siempre que sea posible)</p>
          </li>
          <li>
            <p>Corrección de coagulopatía subyacente si corresponde (ej. suspensión/reversión de anticoagulantes)</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La mayoría de los quistes ováricos hemorrágicos se resuelven con manejo conservador — la cirugía se reserva para la inestabilidad hemodinámica o el hemoperitoneo de gran volumen.</p>
        </Callout>
      </Section>
      <Section id="c16-s5" title="5. Hemorragia uterina anormal aguda (metrorragia disfuncional)">
        <p><strong>Epidemiología:</strong> representa un motivo de consulta frecuente en la urgencia ginecológica, con mayor incidencia en los extremos de la vida reproductiva (adolescencia y perimenopausia), períodos en que predomina la anovulación como causa subyacente.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Sangrado uterino excesivo en cantidad, duración o frecuencia, fuera del patrón menstrual habitual de la paciente</p>
          </li>
          <li>
            <p>Puede asociar signos de anemia aguda (palidez, fatiga, taquicardia) si el sangrado es profuso o prolongado</p>
          </li>
          <li>
            <p>Historia clínica dirigida a descartar embarazo, causas estructurales (miomas, pólipos), coagulopatía y causas iatrogénicas (anticoagulantes, dispositivo intrauterino)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Test de embarazo (siempre, primer paso)</p>
          </li>
          <li>
            <p>Hemograma para evaluar magnitud de la anemia; perfil de coagulación si hay sospecha de coagulopatía (especialmente en adolescentes con sangrado severo desde la menarquia)</p>
          </li>
          <li>
            <p>Ecografía transvaginal o pélvica para descartar causas estructurales (pólipos, miomas submucosos, hiperplasia endometrial)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p><strong>Sangrado agudo severo, hemodinámicamente estable:</strong> Ácido tranexámico 1 g VO/IV c/8 h, asociado a terapia hormonal: Estrógenos conjugados VO o anticonceptivo combinado oral en dosis alta (ej. etinilestradiol/levonorgestrel c/8 h por 48-72 h, con descenso progresivo)</p>
          </li>
          <li>
            <p><strong>Sangrado severo con inestabilidad hemodinámica:</strong> hospitalización, reanimación con cristaloides y transfusión según hemoglobina, Estrógenos conjugados IV, y evaluación ginecológica para eventual legrado uterino o balón intrauterino hemostático si no responde a manejo médico</p>
          </li>
          <li>
            <p>Corrección de la anemia (fierro oral o IV según severidad) una vez controlado el episodio agudo</p>
          </li>
          <li>
            <p>Derivación a estudio y manejo ginecológico ambulatorio para tratamiento de la causa de base</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>En toda adolescente con sangrado uterino severo desde la menarquia debe descartarse una coagulopatía subyacente (como enfermedad de von Willebrand) antes de atribuirlo solo a anovulación.</p>
        </Callout>
      </Section>
      <Section id="c16-s6" title="6. Amenaza de aborto y aborto en curso (primer trimestre)">
        <p><strong>Epidemiología:</strong> la pérdida gestacional espontánea ocurre en aproximadamente 10-15% de los embarazos clínicamente reconocidos, siendo más frecuente en el primer trimestre y aumentando su incidencia con la edad materna avanzada.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Sangrado vaginal de cuantía variable asociado o no a dolor abdominal tipo cólico, en una paciente con embarazo confirmado o sospechado dentro de las primeras 12-14 semanas</p>
          </li>
          <li>
            <p><strong>Amenaza de aborto:</strong> sangrado con orificio cervical cerrado y embrión/feto viable</p>
          </li>
          <li>
            <p><strong>Aborto en curso o inevitable:</strong> sangrado más abundante, dolor tipo contracción, orificio cervical abierto, posible expulsión de restos ovulares</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Beta-hCG cuantitativa (para confirmar embarazo y como referencia de seguimiento)</p>
          </li>
          <li>
            <p>Ecografía transvaginal: presencia y viabilidad del saco gestacional/embrión (actividad cardíaca presente), o hallazgos de aborto retenido/incompleto (restos heterogéneos intrauterinos)</p>
          </li>
          <li>
            <p>Grupo sanguíneo y Rh (fundamental para definir necesidad de inmunoglobulina anti-D)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p><strong>Amenaza de aborto con embrión viable:</strong> manejo expectante ambulatorio, reposo relativo, control ecográfico seriado; no existe evidencia sólida que respalde el uso rutinario de progesterona salvo en casos seleccionados con abortos recurrentes previos</p>
          </li>
          <li>
            <p><strong>Aborto incompleto o en curso, estable:</strong> manejo expectante, médico (Misoprostol 800 mcg vía vaginal, pudiendo repetir a las 24 h) o quirúrgico (legrado uterino o aspiración manual endouterina) según preferencia de la paciente y cuantía del sangrado</p>
          </li>
          <li>
            <p><strong>Aborto con inestabilidad hemodinámica o sangrado profuso:</strong> hospitalización, reanimación con cristaloides, legrado uterino de urgencia</p>
          </li>
          <li>
            <p>Inmunoglobulina anti-D 250-300 mcg IM en toda paciente Rh negativo no sensibilizada, dentro de las 72 horas del evento</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Toda paciente Rh negativo con sangrado en el primer trimestre debe recibir inmunoglobulina anti-D independiente de si el aborto se confirma o es solo una amenaza — la sensibilización se previene, no se revierte.</p>
        </Callout>
      </Section>
      <Section id="c16-s7" title="7. Preeclampsia y síndrome de HELLP">
        <p><strong>Epidemiología:</strong> los trastornos hipertensivos del embarazo afectan aproximadamente al 3-10% de los embarazos a nivel mundial según cifras de la OMS; en Chile, estudios regionales han encontrado una prevalencia de hasta 6% de los partos, siendo la preeclampsia/eclampsia el subtipo más frecuente dentro de este grupo, con mayor riesgo en mujeres nulíparas, con embarazo múltiple, obesidad o antecedente de preeclampsia previa.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Hipertensión arterial de novo (PAS ≥140 o PAD ≥90 mmHg) después de las 20 semanas de gestación, asociada a proteinuria u otro criterio de severidad</p>
          </li>
          <li>
            <p>Cefalea intensa, alteraciones visuales (fotopsias, visión borrosa), dolor en epigastrio o hipocondrio derecho (signo de compromiso hepático)</p>
          </li>
          <li>
            <p><strong>Síndrome de HELLP:</strong> hemólisis (H), enzimas hepáticas elevadas (EL) y trombocitopenia (LP, <em>low platelets</em>), con riesgo de complicaciones graves (hematoma subcapsular hepático, coagulación intravascular diseminada)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Presión arterial seriada y proteinuria (razón proteinuria/creatininuria en muestra aislada, o proteinuria de 24 horas ≥300 mg)</p>
          </li>
          <li>
            <p>Criterios de severidad: PAS ≥160 o PAD ≥110 mmHg, trombocitopenia &lt;100.000/mm³, transaminasas elevadas al doble del valor normal, creatinina &gt;1.1 mg/dL, edema pulmonar, síntomas neurológicos o visuales persistentes</p>
          </li>
          <li>
            <p>Perfil de HELLP: hemograma con frotis (esquistocitos), LDH elevada, bilirrubina indirecta elevada, transaminasas elevadas, recuento de plaquetas</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Sulfato de magnesio: dosis de carga 4-6 g IV en 20-30 minutos, seguida de infusión de mantención 1-2 g/hora, para prevención y tratamiento de la eclampsia (mantener por 24 horas post-parto o post-última convulsión)</p>
          </li>
          <li>
            <p>Antihipertensivos si PAS ≥160 o PAD ≥110 mmHg: Labetalol 20 mg IV (dosis creciente) o Nifedipino 10 mg VO de acción rápida</p>
          </li>
          <li>
            <p>Corticoides (Betametasona 12 mg IM c/24 h por 2 dosis) para maduración pulmonar fetal si la edad gestacional lo amerita y se anticipa parto prematuro</p>
          </li>
          <li>
            <p>Interrupción del embarazo como tratamiento definitivo, con la vía y el momento definidos según edad gestacional, severidad y bienestar materno-fetal</p>
          </li>
          <li>
            <p>Manejo en unidad de alto riesgo obstétrico o UCI en síndrome de HELLP con compromiso multiorgánico</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El sulfato de magnesio es para la prevención y tratamiento de la eclampsia, no un antihipertensivo — debe usarse junto con, y no en reemplazo de, la terapia antihipertensiva cuando hay criterios de severidad.</p>
        </Callout>
      </Section>
      <Section id="c16-s8" title="8. Mastitis aguda puerperal y absceso mamario">
        <p><strong>Epidemiología:</strong> afecta a un porcentaje relevante de mujeres durante la lactancia, con mayor incidencia en las primeras 6-12 semanas post-parto; <em>Staphylococcus aureus</em> es el agente causal más frecuente, favorecido por grietas del pezón y vaciamiento mamario incompleto.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor, eritema y aumento de volumen localizado en un sector de la mama, habitualmente unilateral</p>
          </li>
          <li>
            <p>Fiebre y compromiso del estado general (síntomas símil influenza) frecuentes</p>
          </li>
          <li>
            <p>Presencia de una masa fluctuante y dolorosa sugiere progresión a absceso mamario</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Clínico en la mayoría de los casos</p>
          </li>
          <li>
            <p>Ecografía mamaria si se sospecha absceso (colección hipoecogénica con reforzamiento posterior) o si no hay respuesta al tratamiento antibiótico en 48-72 horas</p>
          </li>
          <li>
            <p>Cultivo de leche materna en mastitis recurrente o refractaria a tratamiento empírico</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Cloxacilina 500 mg VO c/6 h por 10-14 días (o Clindamicina 300 mg VO c/8 h si hay alergia a betalactámicos), cubriendo <em>S. aureus</em></p>
          </li>
          <li>
            <p><strong>Mantener la lactancia materna del lado afectado</strong> (o vaciamiento mecánico si el dolor lo impide), ya que favorece la resolución y no está contraindicada con el uso de antibióticos compatibles</p>
          </li>
          <li>
            <p>Analgesia con Paracetamol 1 g VO c/8 h o Ibuprofeno 400 mg VO c/8 h, y aplicación de calor local previo a la lactancia</p>
          </li>
          <li>
            <p>Absceso mamario confirmado: drenaje (punción ecoguiada o quirúrgico según tamaño) asociado a antibiótico</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>A diferencia de lo que muchas pacientes temen, la lactancia debe mantenerse activamente durante la mastitis — suspenderla favorece la estasis láctea y aumenta el riesgo de progresión a absceso.</p>
        </Callout>
      </Section>
      <Section id="c16-s9" title="9. Vulvovaginitis aguda (candidiasis y vaginosis bacteriana)">
        <p><strong>Epidemiología:</strong> la candidiasis vulvovaginal afecta a la mayoría de las mujeres al menos una vez en la vida, siendo la segunda causa más frecuente de flujo vaginal anormal después de la vaginosis bacteriana, que a su vez es la causa más común de consulta por flujo vaginal en mujeres en edad reproductiva.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p><strong>Candidiasis:</strong> prurito vulvovaginal intenso, flujo blanquecino grumoso ("aspecto de leche cortada"), eritema vulvar, dispareunia</p>
          </li>
          <li>
            <p><strong>Vaginosis bacteriana:</strong> flujo grisáceo homogéneo con olor característico "a pescado" (más notorio tras el coito), sin prurito ni inflamación vulvar significativa</p>
          </li>
          <li>
            <p><strong>Tricomoniasis</strong> (infección de transmisión sexual): flujo amarillo-verdoso espumoso, prurito, cuello uterino "en fresa" al examen</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Criterios de Amsel para vaginosis bacteriana (≥3 de 4): flujo homogéneo, pH vaginal &gt;4.5, test de aminas positivo (olor a pescado con KOH), presencia de "clue cells" al microscopio</p>
          </li>
          <li>
            <p>Examen en fresco con KOH al 10%: pseudohifas y esporas en candidiasis; protozoos móviles flagelados en tricomoniasis</p>
          </li>
          <li>
            <p>pH vaginal: normal/ácido en candidiasis (&lt;4.5), elevado en vaginosis bacteriana y tricomoniasis (&gt;4.5)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p><strong>Candidiasis vulvovaginal:</strong> Fluconazol 150 mg VO en dosis única, o Clotrimazol óvulo vaginal 100 mg/noche por 7 días (de elección en el embarazo, donde el fluconazol oral está contraindicado)</p>
          </li>
          <li>
            <p><strong>Vaginosis bacteriana:</strong> Metronidazol 500 mg VO c/12 h por 7 días, o Metronidazol gel vaginal 0.75% por 5 días</p>
          </li>
          <li>
            <p><strong>Tricomoniasis:</strong> Metronidazol 2 g VO en dosis única (tratar también a la pareja sexual, evitar alcohol durante el tratamiento y 24 h después por efecto disulfiram-like)</p>
          </li>
          <li>
            <p>Educación sobre higiene íntima, evitar duchas vaginales y ropa ajustada como medidas preventivas de recurrencia</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El olor a pescado que se intensifica tras el coito o con la prueba de aminas (KOH) es prácticamente patognomónico de vaginosis bacteriana, y la ausencia de prurito la distingue clínicamente de la candidiasis.</p>
        </Callout>
      </Section>
      <Section id="c16-s10" title="10. Atención de urgencia en violencia sexual">
        <p><strong>Epidemiología:</strong> la agresión sexual afecta predominantemente a mujeres y adolescentes, es un fenómeno significativamente subreportado, y requiere que todo servicio de urgencia cuente con un protocolo de atención integral, ya que la consulta precoz (idealmente dentro de las primeras 72 horas) condiciona la eficacia de las medidas de profilaxis disponibles.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Lesiones físicas genitales o extragenitales variables (pueden estar ausentes, su ausencia no descarta la agresión)</p>
          </li>
          <li>
            <p>Compromiso emocional agudo: ansiedad, shock emocional, síntomas disociativos, que requieren un abordaje contenido y no revictimizante</p>
          </li>
          <li>
            <p>Riesgo de embarazo no deseado e infecciones de transmisión sexual según el tiempo transcurrido y las características de la agresión</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Anamnesis dirigida, respetuosa y no revictimizante, documentando el relato con las palabras de la paciente</p>
          </li>
          <li>
            <p>Examen físico y ginecológico completo con consentimiento informado, documentación fotográfica y recolección de evidencia forense según protocolo (kit de constatación de lesiones y toma de muestras) si la paciente lo autoriza</p>
          </li>
          <li>
            <p>Test de embarazo basal, serologías basales (VIH, VHB, VHC, sífilis) para comparación con controles posteriores</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Anticoncepción de emergencia: Levonorgestrel 1.5 mg VO en dosis única, idealmente dentro de las primeras 72 horas (eficacia decreciente con el tiempo, puede usarse hasta 120 horas)</p>
          </li>
          <li>
            <p>Profilaxis de infecciones de transmisión sexual: Ceftriaxona 500 mg IM en dosis única + Azitromicina 1 g VO en dosis única + Metronidazol 2 g VO en dosis única</p>
          </li>
          <li>
            <p>Profilaxis post-exposición para VIH (esquema con dos o tres antirretrovirales según protocolo local) iniciada idealmente dentro de las primeras 2 horas y hasta un máximo de 72 horas</p>
          </li>
          <li>
            <p>Vacunación contra hepatitis B si no existe esquema completo previo</p>
          </li>
          <li>
            <p>Contención emocional inmediata, activación de la red de apoyo psicológico y social, y derivación a las instancias legales correspondientes según la normativa vigente, respetando siempre la voluntad de la paciente</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La profilaxis de VIH y la anticoncepción de emergencia son tiempo-dependientes — deben ofrecerse de inmediato en la primera atención, sin esperar la denuncia ni la resolución de los aspectos legales del caso.</p>
        </Callout>
        <p><em>Manual de bolsillo — Capítulo 16: Enfermedades más comunes de la mujer en la urgencia. Las dosis son de referencia general y deben ajustarse a función renal/hepática, peso, edad gestacional e interacciones de la paciente, y a los protocolos institucionales y normas MINSAL vigentes.</em></p>
      </Section>
    </>
  )
}

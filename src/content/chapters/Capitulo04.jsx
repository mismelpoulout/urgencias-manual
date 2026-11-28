import Callout from '../../components/content/Callout.jsx'
import Section from '../../components/content/Section.jsx'

// Capítulo 4 · Las 10 causas más frecuentes de dolor abdominal en urgencias
export default function Capitulo04() {
  return (
    <>
      <p>Identificación, cuadro clínico, diagnóstico y tratamiento inicial en el servicio de urgencias, con dosis y criterios específicos.</p>
      <Section id="c4-s1" title="1. Apendicitis aguda">
        <p><strong>Identificación:</strong> más frecuente en niños y adultos jóvenes; dolor abdominal migratorio característico.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor periumbilical que migra a fosa ilíaca derecha</p>
          </li>
          <li>
            <p>Anorexia, náuseas, vómitos, fiebre baja</p>
          </li>
          <li>
            <p>Signo de McBurney y Blumberg positivos, signo de Rovsing</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Score de Alvarado: ≥7 puntos, alta probabilidad; 5-6, indeterminado (requiere imagen); ≤4, baja probabilidad</p>
          </li>
          <li>
            <p>Leucocitosis con desviación izquierda</p>
          </li>
          <li>
            <p>Ecografía abdominal (primera línea en jóvenes y embarazadas: diámetro apendicular &gt;6 mm, líquido periapendicular); TAC de abdomen/pelvis con contraste si persiste la duda diagnóstica</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Ceftriaxona 2 g IV c/24 h + Metronidazol 500 mg IV c/8 h (alternativa: Clindamicina 600 mg IV c/8 h en alérgicos a betalactámicos)</p>
          </li>
          <li>
            <p>Apendicectomía (laparoscópica de elección)</p>
          </li>
          <li>
            <p>Analgesia (Ketorolaco 30 mg IV) e hidratación IV mientras se define cirugía</p>
          </li>
          <li>
            <p>En casos no complicados seleccionados, algunos centros consideran manejo antibiótico exclusivo según protocolo local</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El dolor que migra de periumbilical a fosa ilíaca derecha tiene mayor valor diagnóstico que la localización inicial por sí sola.</p>
        </Callout>
      </Section>
      <Section id="c4-s2" title="2. Colecistitis aguda">
        <p><strong>Identificación:</strong> antecedente de colelitiasis; dolor en hipocondrio derecho que no cede como el cólico biliar simple.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor en hipocondrio derecho persistente (&gt;6 horas), fiebre</p>
          </li>
          <li>
            <p>Signo de Murphy positivo</p>
          </li>
          <li>
            <p>Náuseas y vómitos</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Criterios de Tokio (TG18): signo local (Murphy, dolor/masa en hipocondrio derecho) + signo sistémico (fiebre, PCR elevada, leucocitosis) + confirmación imagenológica</p>
          </li>
          <li>
            <p>Ecografía abdominal: engrosamiento de pared vesicular &gt;3 mm, líquido perivesicular, litiasis, Murphy ecográfico</p>
          </li>
          <li>
            <p>Perfil hepático (puede estar levemente alterado sin coledocolitiasis asociada)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Ceftriaxona 2 g IV c/24 h + Metronidazol 500 mg IV c/8 h</p>
          </li>
          <li>
            <p>Casos graves (Tokio grado III) o riesgo de Pseudomonas: Piperacilina-tazobactam 4.5 g IV c/6-8 h</p>
          </li>
          <li>
            <p>Analgesia (Ketorolaco 30 mg IV), hidratación IV</p>
          </li>
          <li>
            <p>Colecistectomía laparoscópica precoz (idealmente dentro de las primeras 72 horas)</p>
          </li>
          <li>
            <p>Drenaje percutáneo (colecistostomía) si el riesgo quirúrgico es alto</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Un Murphy positivo con fiebre y leucocitosis distingue la colecistitis del cólico biliar no complicado, que no cursa con estos hallazgos.</p>
        </Callout>
      </Section>
      <Section id="c4-s3" title="3. Pancreatitis aguda">
        <p><strong>Identificación:</strong> antecedente de litiasis biliar o consumo de alcohol; dolor epigástrico irradiado en faja hacia el dorso.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor epigástrico intenso, irradiado a la espalda</p>
          </li>
          <li>
            <p>Náuseas, vómitos</p>
          </li>
          <li>
            <p>Signos de gravedad en casos hemorrágicos: equimosis periumbilical (Cullen) o en flancos (Grey-Turner)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Lipasa (o amilasa) &gt;3 veces el límite superior normal</p>
          </li>
          <li>
            <p>Diagnóstico con 2 de 3 criterios: clínica compatible, enzimas elevadas, hallazgos de imagen</p>
          </li>
          <li>
            <p>Estratificación de gravedad: BISAP (≥3 puntos: mayor mortalidad), APACHE II, o criterios de Ranson</p>
          </li>
          <li>
            <p>Ecografía para buscar causa biliar; TAC contrastado (idealmente a las 72 h) si hay duda diagnóstica o sospecha de complicación/necrosis</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Hidratación IV agresiva: Ringer lactato 5-10 mL/kg/h en las primeras horas, ajustando según respuesta y diuresis (&gt;0.5 mL/kg/h)</p>
          </li>
          <li>
            <p>Analgesia: Tramadol 50-100 mg IV c/6-8 h o Fentanilo IV según intensidad</p>
          </li>
          <li>
            <p>Ayuno inicial con reinicio precoz de la vía oral según tolerancia (habitualmente dentro de las primeras 24-72 h)</p>
          </li>
          <li>
            <p>Antibiótico solo si hay necrosis pancreática infectada confirmada o sospecha fuerte: Meropenem 1 g IV c/8 h o Imipenem 500 mg IV c/6 h (no antibiótico profiláctico de rutina en necrosis estéril)</p>
          </li>
          <li>
            <p>CPRE urgente (&lt;24-48 h) si hay colangitis aguda asociada por coledocolitiasis</p>
          </li>
          <li>
            <p>Manejo en UCI si hay criterios de gravedad</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La hidratación temprana y agresiva en las primeras 24 horas es la intervención que más impacta el pronóstico.</p>
        </Callout>
      </Section>
      <Section id="c4-s4" title="4. Obstrucción intestinal">
        <p><strong>Identificación:</strong> antecedente de cirugía abdominal previa (bridas), hernias no reducidas, o neoplasia conocida.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor abdominal cólico, distensión</p>
          </li>
          <li>
            <p>Vómitos (fecaloideos en obstrucción baja)</p>
          </li>
          <li>
            <p>Ausencia de eliminación de gases y deposiciones</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Radiografía de abdomen: niveles hidroaéreos, asas distendidas (&gt;3 cm intestino delgado, &gt;6 cm colon)</p>
          </li>
          <li>
            <p>TAC de abdomen y pelvis con contraste IV para localizar el sitio y la causa, y buscar signos de estrangulación (neumatosis, falta de realce de la pared)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Sonda nasogástrica descompresiva</p>
          </li>
          <li>
            <p>Hidratación IV con cristaloides, corrección de electrolitos (reponer K⁺ según déficit, habitualmente 20-40 mEq en volumen diluido según kalemia)</p>
          </li>
          <li>
            <p>Manejo quirúrgico si hay signos de estrangulación/isquemia, peritonitis, o falla del manejo conservador a las 24-48 h</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Fiebre, taquicardia, dolor continuo (no cólico) o irritación peritoneal en una obstrucción sugieren estrangulación — indicación quirúrgica inmediata, no conservadora.</p>
        </Callout>
      </Section>
      <Section id="c4-s5" title="5. Perforación de víscera hueca">
        <p><em>Úlcera péptica perforada</em></p>
        <p><strong>Identificación:</strong> antecedente de úlcera péptica o uso de AINEs; dolor abdominal de inicio súbito y muy intenso.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor abdominal súbito, intenso, generalizado</p>
          </li>
          <li>
            <p>Abdomen en tabla (rigidez), irritación peritoneal difusa</p>
          </li>
          <li>
            <p>Puede progresar a shock séptico</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Radiografía de tórax o abdomen en bipedestación: neumoperitoneo (aire libre subdiafragmático) — ausente hasta en 15-20% de los casos, no descarta el diagnóstico</p>
          </li>
          <li>
            <p>TAC abdominal con contraste si persiste la duda diagnóstica</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Ceftriaxona 2 g IV c/24 h + Metronidazol 500 mg IV c/8 h</p>
          </li>
          <li>
            <p>Omeprazol IV 80 mg en bolo, luego infusión 8 mg/h (o 40 mg IV c/12 h)</p>
          </li>
          <li>
            <p>Sonda nasogástrica, analgesia</p>
          </li>
          <li>
            <p>Cirugía de urgencia (sutura primaria con parche de epiplón u otra técnica según hallazgos)</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La ausencia de neumoperitoneo en la radiografía no descarta la perforación — hasta un 15-20% no lo muestra.</p>
        </Callout>
      </Section>
      <Section id="c4-s6" title="6. Diverticulitis aguda">
        <p><strong>Identificación:</strong> antecedente de enfermedad diverticular, más frecuente en adultos mayores; dolor en fosa ilíaca izquierda.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor en fosa ilíaca izquierda, fiebre</p>
          </li>
          <li>
            <p>Alteración del hábito intestinal</p>
          </li>
          <li>
            <p>Puede palparse masa en casos con absceso</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>TAC de abdomen y pelvis con contraste (examen de elección): engrosamiento de la pared colónica, infiltración de la grasa pericólica, posible absceso</p>
          </li>
          <li>
            <p>Clasificación de Hinchey para diverticulitis complicada (I: absceso pericólico; II: absceso pélvico/a distancia; III: peritonitis purulenta; IV: peritonitis fecal)</p>
          </li>
          <li>
            <p>Leucocitosis</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p><strong>No complicada leve:</strong> Ciprofloxacino 500 mg VO c/12 h + Metronidazol 500 mg VO c/8 h por 7-10 días, o Amoxicilina/Ácido clavulánico 875/125 mg VO c/12 h; manejo ambulatorio si tolera vía oral y no hay comorbilidad relevante</p>
          </li>
          <li>
            <p><strong>Complicada (Hinchey II-IV):</strong> hospitalización, Ceftriaxona 2 g IV c/24 h + Metronidazol 500 mg IV c/8 h</p>
          </li>
          <li>
            <p>Drenaje percutáneo guiado por TAC si el absceso es &gt;4 cm</p>
          </li>
          <li>
            <p>Cirugía de urgencia (habitualmente procedimiento de Hartmann) si hay peritonitis generalizada (Hinchey III-IV)</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>No se debe hacer colonoscopia en el episodio agudo por riesgo de perforación — se difiere 6 semanas tras la resolución.</p>
        </Callout>
      </Section>
      <Section id="c4-s7" title="7. Isquemia mesentérica aguda">
        <p><strong>Identificación:</strong> adulto mayor con fibrilación auricular u otra fuente embólica, o enfermedad vascular aterosclerótica.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor abdominal intenso y difuso, característicamente <strong>desproporcionado</strong> a los hallazgos del examen físico</p>
          </li>
          <li>
            <p>Puede progresar a distensión, sangre en las deposiciones, shock</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>AngioTAC de abdomen (examen de elección): defecto de relleno en vasos mesentéricos, signos de isquemia de la pared intestinal</p>
          </li>
          <li>
            <p>Lactato &gt;2 mmol/L, acidosis metabólica en etapas avanzadas (hallazgos tardíos, no deben esperarse para actuar)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Heparina no fraccionada: bolo 80 UI/kg + infusión 18 UI/kg/h</p>
          </li>
          <li>
            <p>Antibiótico de amplio espectro: Piperacilina-tazobactam 4.5 g IV c/6-8 h (cobertura de translocación bacteriana)</p>
          </li>
          <li>
            <p>Revascularización urgente: trombectomía/embolectomía endovascular o quirúrgica según disponibilidad y tiempo de isquemia</p>
          </li>
          <li>
            <p>Resección del intestino necrótico si ya hay infarto establecido</p>
          </li>
          <li>
            <p>Soporte hemodinámico con cristaloides y vasopresores según necesidad</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El dolor desproporcionado al examen físico en un paciente con factores de riesgo embólico es la clave para sospechar isquemia mesentérica antes de que aparezcan signos peritoneales tardíos.</p>
        </Callout>
      </Section>
      <Section id="c4-s8" title="8. Aneurisma de aorta abdominal roto">
        <p><strong>Identificación:</strong> adulto mayor, tabáquico, con antecedente de AAA conocido o HTA.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Tríada clásica: dolor abdominal o lumbar súbito, masa abdominal pulsátil, hipotensión/shock</p>
          </li>
          <li>
            <p>No siempre están presentes los tres elementos</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Ecografía abdominal a la cabecera del paciente (rápida, primera línea si hay inestabilidad): diámetro aórtico &gt;3 cm sugiere aneurisma, y la presencia de líquido libre en un paciente inestable orienta a rotura</p>
          </li>
          <li>
            <p>AngioTAC si el paciente está lo suficientemente estable para trasladarse</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Reanimación con hipotensión permisiva: meta PAS 80-100 mmHg, evitando sobre-reanimar antes del control quirúrgico del sangrado</p>
          </li>
          <li>
            <p>Activar protocolo de transfusión masiva si hay inestabilidad significativa</p>
          </li>
          <li>
            <p>Cirugía de urgencia (reparación abierta o endovascular), sin retrasar por estudios adicionales si hay inestabilidad</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Ante la sospecha clínica en un paciente inestable, la cirugía no debe esperar la confirmación imagenológica completa.</p>
        </Callout>
      </Section>
      <Section id="c4-s9" title="9. Embarazo ectópico roto">
        <p><strong>Identificación:</strong> mujer en edad fértil con atraso menstrual y dolor abdominal; posible antecedente de enfermedad pélvica inflamatoria o cirugía tubárica previa.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor abdominal agudo, generalmente unilateral</p>
          </li>
          <li>
            <p>Sangrado vaginal</p>
          </li>
          <li>
            <p>Signos de shock hipovolémico si hay rotura</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Beta-hCG cuantitativa positiva</p>
          </li>
          <li>
            <p>Ecografía transvaginal: ausencia de saco gestacional intrauterino con beta-hCG sobre el umbral discriminatorio (habitualmente 1.500-2.000 mUI/mL), posible masa anexial o líquido libre en fondo de saco</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p><strong>Rotura o inestabilidad hemodinámica:</strong> cirugía de urgencia (salpingectomía o salpingostomía laparoscópica) junto con reanimación con cristaloides y hemoderivados según necesidad</p>
          </li>
          <li>
            <p><strong>No complicado, con criterios cumplidos</strong> (masa &lt;3.5 cm, beta-hCG &lt;5.000 mUI/mL, sin actividad cardíaca fetal, paciente estable): Metotrexato 50 mg/m² de superficie corporal IM en dosis única, con seguimiento de beta-hCG seriada</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Toda mujer en edad fértil con dolor abdominal debe tener un test de embarazo antes de cualquier otro estudio.</p>
        </Callout>
      </Section>
      <Section id="c4-s10" title="10. Cólico renoureteral">
        <p><em>Nefrolitiasis</em></p>
        <p><strong>Identificación:</strong> antecedente de litiasis renal previa; dolor tipo cólico en el flanco.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor cólico intenso en el flanco, irradiado a fosa ilíaca o ingle</p>
          </li>
          <li>
            <p>Náuseas, vómitos, hematuria microscópica</p>
          </li>
          <li>
            <p>Paciente inquieto, se mueve buscando posición — a diferencia del abdomen agudo peritonítico, donde el paciente permanece inmóvil</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Sedimento de orina: hematuria (presente hasta en 85% de los casos, su ausencia no descarta litiasis)</p>
          </li>
          <li>
            <p>TAC de abdomen y pelvis sin contraste (examen de elección): tamaño y ubicación del cálculo</p>
          </li>
          <li>
            <p>Ecografía si se quiere evitar radiación (por ejemplo, en embarazo): hidronefrosis como signo indirecto</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Analgesia: Ketorolaco 30 mg IV o Diclofenaco 75 mg IM (AINE de primera línea); Morfina 2-4 mg IV si no hay respuesta adecuada</p>
          </li>
          <li>
            <p>Hidratación IV según tolerancia (sin sobrehidratar)</p>
          </li>
          <li>
            <p>Tamsulosina 0.4 mg VO/día como terapia expulsiva para cálculos ureterales pequeños (&lt;10 mm)</p>
          </li>
          <li>
            <p>Si hay obstrucción con signos de infección (fiebre, urosepsis): Ceftriaxona 1-2 g IV c/24 h + derivación urológica urgente para drenaje (catéter doble J o nefrostomía percutánea) — es una emergencia urológica, no basta con antibiótico</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Cólico renal + fiebre es una urgencia urológica (pielonefritis obstructiva) que requiere drenaje, no solo analgesia y antibiótico.</p>
        </Callout>
        <p><em>Manual de bolsillo — Capítulo 4: Dolor abdominal. Las dosis son de referencia general y deben ajustarse a función renal/hepática, peso e interacciones del paciente, y a los protocolos institucionales vigentes.</em></p>
      </Section>
    </>
  )
}

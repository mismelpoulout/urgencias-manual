import SirCalculator from '../../components/calculators/SirCalculator.jsx'
import Callout from '../../components/content/Callout.jsx'
import Section from '../../components/content/Section.jsx'
import Table from '../../components/content/Table.jsx'

// Capítulo 3 · Secuencia de intubación rápida (SIR)
export default function Capitulo03() {
  return (
    <>
      <p>Secuencia ordenada para asegurar la vía aérea en el paciente crítico: inducción y parálisis casi simultáneas, sin ventilación con bolsa entre ambas salvo desaturación, para reducir el riesgo de aspiración y lograr las mejores condiciones de laringoscopía al primer intento.</p>
      <Callout type="alerta">
        <p><strong>Regla de oro:</strong> resucitar antes de intubar. El período peri-intubación es el momento de mayor riesgo de paro en el paciente hipotenso, hipoxémico o acidótico: corregir primero oxigenación y presión arterial siempre que el tiempo lo permita.</p>
      </Callout>
      <Section id="c3-s1" title="1. Indicaciones de intubación">
        <ul>
          <li>Incapacidad para mantener o proteger la vía aérea (Glasgow ≤8, pérdida de reflejos protectores, quemadura inhalatoria, hematoma cervical en expansión, angioedema progresivo)</li>
          <li>Falla de oxigenación o ventilación pese a O₂ de alto flujo o VMNI (SatO₂ &lt;90% con FiO₂ alta, hipercapnia con acidosis y compromiso de conciencia)</li>
          <li>Curso clínico previsible: trauma grave, shock refractario, agitación incontrolable que impide estudio o traslado, necesidad de procedimiento o traslado prolongado</li>
        </ul>
      </Section>
      <Section id="c3-s2" title="2. Evaluación de vía aérea difícil">
        <Table>
          <thead>
            <tr>
              <th>Nemotecnia</th>
              <th>Qué evalúa</th>
              <th>Elementos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>LEMON</strong></td>
              <td>Laringoscopía difícil</td>
              <td><strong>L</strong>ook (mirar: trauma facial, barba, obesidad) · <strong>E</strong>valuar 3-3-2 (apertura bucal 3 dedos, mentón-hioides 3 dedos, hioides-tiroides 2 dedos) · <strong>M</strong>allampati · <strong>O</strong>bstrucción · <strong>N</strong>eck (movilidad cervical)</td>
            </tr>
            <tr>
              <td><strong>MOANS</strong></td>
              <td>Ventilación con bolsa difícil</td>
              <td><strong>M</strong>ascarilla mal sellada · <strong>O</strong>besidad/obstrucción · <strong>A</strong>ge &gt;55 · <strong>N</strong>o dientes · <strong>S</strong>noring/rigidez pulmonar</td>
            </tr>
            <tr>
              <td><strong>RODS</strong></td>
              <td>Dispositivo supraglótico difícil</td>
              <td><strong>R</strong>estricción de apertura bucal · <strong>O</strong>bstrucción · <strong>D</strong>isrupción de la vía aérea · <strong>S</strong>tiff (pulmón rígido)</td>
            </tr>
            <tr>
              <td><strong>SMART</strong></td>
              <td>Cricotirotomía difícil</td>
              <td><strong>S</strong>urgery previa · <strong>M</strong>asa · <strong>A</strong>cceso (obesidad) · <strong>R</strong>adioterapia · <strong>T</strong>umor</td>
            </tr>
            <tr>
              <td><strong>Fisiológicamente difícil</strong></td>
              <td>Riesgo de colapso</td>
              <td>Hipoxemia, hipotensión (índice de shock &gt;0,9), acidosis metabólica grave, falla de ventrículo derecho</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section id="c3-s3" title="3. Las 7 P de la SIR (con tiempos)">
        <Table>
          <thead>
            <tr>
              <th>Tiempo</th>
              <th>Paso</th>
              <th>Acciones clave</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>T −10 min</strong></td>
              <td><strong>1. Preparación</strong></td>
              <td>Equipo SOAP-ME: <strong>S</strong>ucción, <strong>O</strong>xígeno, <strong>A</strong>irway (laringoscopio/videolaringoscopio, tubos, bougie, dispositivo supraglótico, kit de cricotirotomía), <strong>P</strong>osición/<strong>P</strong>ersonal, <strong>M</strong>onitor + capnografía, <strong>E</strong>quipo de fármacos (dosis calculadas y rotuladas). Dos vías venosas permeables. Plan A-B-C-D verbalizado</td>
            </tr>
            <tr>
              <td><strong>T −5 min</strong></td>
              <td><strong>2. Preoxigenación</strong></td>
              <td>O₂ al 100% por 3 min (o 8 respiraciones de capacidad vital) con mascarilla de reservorio a flujo máximo, VMNI o cánula nasal de alto flujo. Cabecera a 20-30°. Mantener cánula nasal a 15 L/min durante la apnea (oxigenación apneica). Meta SatO₂ ≥94%</td>
            </tr>
            <tr>
              <td><strong>T −3 min</strong></td>
              <td><strong>3. Pretratamiento / optimización</strong></td>
              <td>Corregir hipotensión (cristaloides, noradrenalina en infusión periférica o bolos de adrenalina diluida). Fentanilo 1-3 mcg/kg si se quiere atenuar la respuesta simpática (HTA grave, disección aórtica, HSA, hipertensión endocraneana). Atropina 0,5-1 mg IV si hay bradicardia</td>
            </tr>
            <tr>
              <td><strong>T 0</strong></td>
              <td><strong>4. Parálisis con inducción</strong></td>
              <td>Inductor en bolo IV rápido seguido inmediatamente del bloqueador neuromuscular en bolo</td>
            </tr>
            <tr>
              <td><strong>T +15-30 s</strong></td>
              <td><strong>5. Posición y protección</strong></td>
              <td>Posición de olfateo o “rampa” en obesos (conducto auditivo alineado con el esternón). Presión cricoidea (Sellick) no se recomienda de rutina; retirarla si dificulta la visión. No ventilar con bolsa salvo SatO₂ &lt;93% (entonces ventilación suave, 10 L/min, baja presión)</td>
            </tr>
            <tr>
              <td><strong>T +45-60 s</strong></td>
              <td><strong>6. Paso y comprobación del tubo</strong></td>
              <td>Laringoscopía cuando haya fasciculaciones resueltas (succinilcolina) o a los 45-60 s (rocuronio). Confirmar con <strong>capnografía de onda</strong> (patrón estándar), visualización, auscultación y simetría torácica</td>
            </tr>
            <tr>
              <td><strong>T +2 min</strong></td>
              <td><strong>7. Post-intubación</strong></td>
              <td>Fijar el tubo, sedoanalgesia inmediata, programar el ventilador, radiografía de tórax, sonda orogástrica, gases arteriales a los 20-30 min</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section id="c3-s4" title="4. Fármacos de inducción (dosis en adultos)">
        <Table>
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis IV</th>
              <th>Inicio / duración</th>
              <th>Ventajas</th>
              <th>Precauciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Etomidato</strong></td>
              <td>0,3 mg/kg</td>
              <td>30-60 s / 3-5 min</td>
              <td>Estabilidad hemodinámica, neutro en hipertensión endocraneana</td>
              <td>Mioclonías; supresión suprarrenal transitoria (dosis única aceptable, discutido en sepsis)</td>
            </tr>
            <tr>
              <td><strong>Ketamina</strong></td>
              <td>1-2 mg/kg (0,5-1 mg/kg en shock)</td>
              <td>45-60 s / 10-20 min</td>
              <td>Broncodilatador, mantiene reflejos y presión arterial; elección en asma, shock y sepsis</td>
              <td>Taquicardia/HTA (precaución en SCA, disección); puede deprimir el miocardio en shock con catecolaminas agotadas</td>
            </tr>
            <tr>
              <td><strong>Propofol</strong></td>
              <td>1-2 mg/kg (0,5-1 mg/kg si inestable)</td>
              <td>15-45 s / 5-10 min</td>
              <td>Broncodilatador leve, anticonvulsivante, despertar rápido</td>
              <td>Hipotensión marcada: evitar en shock</td>
            </tr>
            <tr>
              <td><strong>Midazolam</strong></td>
              <td>0,1-0,3 mg/kg</td>
              <td>60-90 s / 15-30 min</td>
              <td>Disponible en todo servicio, anticonvulsivante</td>
              <td>Inicio lento, hipotensión dosis-dependiente; menos ideal para SIR</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section id="c3-s5" title="5. Bloqueadores neuromusculares y reversión">
        <Table>
          <thead>
            <tr>
              <th>Fármaco</th>
              <th>Dosis IV</th>
              <th>Inicio / duración</th>
              <th>Contraindicaciones y notas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Succinilcolina</strong></td>
              <td>1,5 mg/kg (peso real)</td>
              <td>45-60 s / 6-10 min</td>
              <td><strong>Contraindicada</strong> en hiperkalemia o riesgo de ella (ERC con K alto, rabdomiólisis, quemado o aplastamiento &gt;24-72 h, inmovilización prolongada, enfermedad neuromuscular o denervación), antecedente personal o familiar de hipertermia maligna, déficit de pseudocolinesterasa. Puede causar bradicardia (niños, segunda dosis)</td>
            </tr>
            <tr>
              <td><strong>Rocuronio</strong></td>
              <td>1,2 mg/kg (rango 1-1,2)</td>
              <td>45-60 s / 45-70 min</td>
              <td>Sin las contraindicaciones de la succinilcolina. Mayor duración: obliga a tener plan de rescate. Preferido cuando hay duda sobre el potasio</td>
            </tr>
            <tr>
              <td><strong>Sugammadex</strong></td>
              <td>16 mg/kg (reversión inmediata del rocuronio)</td>
              <td>1,5-3 min</td>
              <td>Reversión de rescate en “no intubo, no oxigeno” precoz si el paciente puede volver a ventilar espontáneamente. 2-4 mg/kg para bloqueo moderado o profundo programado</td>
            </tr>
          </tbody>
        </Table>
        <SirCalculator />
      </Section>
      <Section id="c3-s6" title="6. Selección práctica según escenario">
        <Table>
          <thead>
            <tr>
              <th>Escenario</th>
              <th>Inductor sugerido</th>
              <th>Bloqueador</th>
              <th>Comentario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Shock / sepsis</td>
              <td>Ketamina 0,5-1 mg/kg o etomidato 0,15-0,2 mg/kg</td>
              <td>Rocuronio 1,2-1,6 mg/kg</td>
              <td>Reducir el inductor a la mitad; vasopresor preparado o corriendo antes de inducir</td>
            </tr>
            <tr>
              <td>Asma grave / broncoespasmo</td>
              <td>Ketamina 1-2 mg/kg</td>
              <td>Rocuronio o succinilcolina</td>
              <td>Ventilar con FR baja y tiempo espiratorio largo</td>
            </tr>
            <tr>
              <td>Hipertensión endocraneana / TEC / ACV</td>
              <td>Etomidato 0,3 mg/kg (ketamina aceptable)</td>
              <td>Rocuronio o succinilcolina</td>
              <td>Evitar hipotensión (PAS ≥110) e hipoxemia; fentanilo previo</td>
            </tr>
            <tr>
              <td>Estado epiléptico</td>
              <td>Propofol 1-2 mg/kg o midazolam</td>
              <td>Rocuronio</td>
              <td>El bloqueador oculta la actividad convulsiva: considerar EEG</td>
            </tr>
            <tr>
              <td>SCA / disección aórtica</td>
              <td>Etomidato + fentanilo 2-3 mcg/kg</td>
              <td>Rocuronio</td>
              <td>Evitar taquicardia e hipertensión</td>
            </tr>
            <tr>
              <td>Hiperkalemia, ERC, rabdomiólisis, quemado tardío</td>
              <td>Etomidato o ketamina</td>
              <td><strong>Rocuronio</strong></td>
              <td>Succinilcolina contraindicada</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section id="c3-s7" title="7. Tamaño y posición del tubo">
        <ul>
          <li>Mujer adulta: tubo 7,0-7,5 · fijación ≈21 cm en la comisura labial</li>
          <li>Hombre adulto: tubo 7,5-8,0 · fijación ≈23 cm en la comisura labial</li>
          <li>Neumotaponamiento 20-30 cmH₂O</li>
          <li>Radiografía: punta del tubo 3-5 cm sobre la carina</li>
        </ul>
      </Section>
      <Section id="c3-s8" title="8. Plan de vía aérea fallida">
        <Table>
          <thead>
            <tr>
              <th>Plan</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>A</strong></td>
              <td>Laringoscopía (idealmente videolaringoscopio + bougie). Máximo 3 intentos, el cuarto solo por el operador más experto. Optimizar en cada intento: posición, succión, manipulación laríngea externa, cambio de hoja</td>
            </tr>
            <tr>
              <td><strong>B</strong></td>
              <td>Dispositivo supraglótico de segunda generación (máscara laríngea). Si oxigena: detenerse, pensar, pedir ayuda</td>
            </tr>
            <tr>
              <td><strong>C</strong></td>
              <td>Ventilación con mascarilla facial a 2 manos con cánula orofaríngea y nasofaríngea</td>
            </tr>
            <tr>
              <td><strong>D</strong></td>
              <td><strong>No intubo, no oxigeno (CICO):</strong> cricotirotomía quirúrgica con técnica bisturí-bougie-tubo 6,0 con balón. Declarar en voz alta la situación CICO</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section id="c3-s9" title="9. Cuidados post-intubación">
        <p><strong>Sedoanalgesia inmediata</strong> (el bloqueo con rocuronio dura más que el inductor):</p>
        <ul>
          <li>Fentanilo 25-100 mcg IV en bolos o infusión 0,5-2 mcg/kg/h (analgesia primero)</li>
          <li>Propofol infusión 5-50 mcg/kg/min (0,3-3 mg/kg/h) si la presión lo permite, o</li>
          <li>Midazolam 0,02-0,1 mg/kg/h si hay inestabilidad o falta de propofol</li>
          <li>Meta RASS −2 a 0 (−4 a −5 si sigue bloqueado o hay hipertensión endocraneana)</li>
        </ul>
        <p><strong>Programación inicial del ventilador (modo volumen control):</strong></p>
        <ul>
          <li>Volumen corriente 6-8 mL/kg de <strong>peso ideal</strong> (hombre: 50 + 0,91 × [talla cm − 152,4]; mujer: 45,5 + 0,91 × [talla cm − 152,4])</li>
          <li>Frecuencia 14-18/min (más alta si el paciente venía compensando una acidosis metabólica; más baja en asma/EPOC)</li>
          <li>PEEP 5 cmH₂O, FiO₂ 100% inicial y luego titular a SatO₂ 92-96%</li>
          <li>Presión meseta &lt;30 cmH₂O</li>
        </ul>
        <Callout type="perla">
          <p>si el paciente estaba compensando una acidosis metabólica (cetoacidosis, sepsis, intoxicación por salicilatos) con hiperventilación, una frecuencia respiratoria baja en el ventilador puede precipitar un paro. Igualar la ventilación minuto previa y controlar gases precozmente.</p>
        </Callout>
        <Callout type="perla">
          <p>la hipotensión post-intubación es frecuente (pérdida del tono simpático + presión positiva). Tener noradrenalina preparada o en curso antes de inducir a todo paciente con índice de shock &gt;0,9.</p>
        </Callout>
      </Section>
    </>
  )
}

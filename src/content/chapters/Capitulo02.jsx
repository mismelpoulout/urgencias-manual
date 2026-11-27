import Callout from '../../components/content/Callout.jsx'
import Section from '../../components/content/Section.jsx'

// Capítulo 2 · Las 10 urgencias respiratorias más frecuentes
export default function Capitulo02() {
  return (
    <>
      <p>Identificación, cuadro clínico, diagnóstico y tratamiento inicial en el servicio de urgencias, con dosis y criterios específicos.</p>
      <Section id="c2-s1" title="1. Insuficiencia respiratoria aguda">
        <Callout type="nota">
          <p>Si requiere intubación, ver la <strong>secuencia de intubación rápida</strong> con fármacos y dosis en el <strong>Capítulo 3</strong>.</p>
        </Callout>
        <p><em>Hipoxémica (tipo I) e hipercápnica (tipo II)</em></p>
        <p><strong>Identificación:</strong> disnea aguda con alteración del intercambio gaseoso; buscar siempre la causa de base (neumonía, EPOC, asma, edema pulmonar, TEP).</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Taquipnea, uso de musculatura accesoria, cianosis</p>
          </li>
          <li>
            <p>Alteración de conciencia en casos graves</p>
          </li>
          <li>
            <p>Taquicardia</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Gasometría arterial: PaO₂ &lt;60 mmHg (tipo I) y/o PaCO₂ &gt;50 mmHg con pH &lt;7.35 (tipo II)</p>
          </li>
          <li>
            <p>Saturometría, radiografía de tórax</p>
          </li>
          <li>
            <p>Estudio dirigido a la causa de base</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Oxígeno por cánula nasal 1-6 L/min o mascarilla Venturi FiO₂ 24-50%, titulado a meta de saturación (94-98% en general; 88-92% en EPOC retenedor de CO₂)</p>
          </li>
          <li>
            <p>VMNI: BiPAP con IPAP 10-15 cmH₂O / EPAP 5 cmH₂O si hay hipercapnia o fatiga respiratoria</p>
          </li>
          <li>
            <p>Ventilación mecánica invasiva si falla la VMNI o hay compromiso de conciencia</p>
          </li>
          <li>
            <p>Tratar la causa de base</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>En pacientes retenedores de CO₂, el exceso de oxígeno puede empeorar la hipercapnia — titular con cuidado, no suprimir el oxígeno.</p>
        </Callout>
      </Section>
      <Section id="c2-s2" title="2. Crisis asmática grave">
        <p><em>Status asmático</em></p>
        <p><strong>Identificación:</strong> antecedente de asma, exposición a un gatillante, disnea progresiva que no responde al tratamiento habitual del paciente.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Sibilancias, tos, opresión torácica, uso de musculatura accesoria</p>
          </li>
          <li>
            <p>Crisis grave: PEF &lt;50% del predicho/mejor personal; riesgo vital: PEF &lt;33%, tórax silente, bradicardia o hipotensión, agotamiento/confusión</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Clínico; PEF o espirometría si está disponible</p>
          </li>
          <li>
            <p>Gasometría en crisis grave: la normo- o hipercapnia es signo de fatiga respiratoria inminente (en asma la hipocapnia por hiperventilación es lo esperado; su normalización es alarma, no mejoría)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Salbutamol nebulizado 2.5-5 mg c/20 min x 3 dosis (o inhalador presurizado con aerocámara, 4-8 puff c/20 min)</p>
          </li>
          <li>
            <p>Bromuro de ipratropio nebulizado 0.5 mg c/20 min x 3 dosis, junto al salbutamol</p>
          </li>
          <li>
            <p>Corticoide sistémico precoz: Hidrocortisona IV 200 mg, o Prednisona VO 40-50 mg (si tolera vía oral)</p>
          </li>
          <li>
            <p>Sulfato de magnesio IV 2 g en 20 min si crisis grave refractaria a broncodilatadores</p>
          </li>
          <li>
            <p>Oxígeno para SatO₂ 93-95%; VMNI o intubación si hay fatiga respiratoria progresiva</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Un tórax silente con paciente somnoliento es una emergencia — no esperar más ciclos de nebulización, escalar el manejo de inmediato.</p>
        </Callout>
      </Section>
      <Section id="c2-s3" title="3. Exacerbación aguda de EPOC">
        <p><strong>Identificación:</strong> antecedente de EPOC, aumento de la disnea basal, cambio en volumen o color del esputo.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Disnea aumentada respecto al basal, tos, expectoración purulenta</p>
          </li>
          <li>
            <p>Sibilancias, uso de musculatura accesoria</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Clínico; criterios de Anthonisen (aumento de disnea + aumento de volumen del esputo + purulencia) para decidir antibiótico</p>
          </li>
          <li>
            <p>Gasometría arterial</p>
          </li>
          <li>
            <p>Radiografía de tórax para descartar neumonía o neumotórax como causa concomitante</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Salbutamol 2.5 mg + Ipratropio 0.5 mg nebulizados c/4-6 h</p>
          </li>
          <li>
            <p>Prednisona 40 mg VO por 5 días</p>
          </li>
          <li>
            <p>Antibiótico si cumple ≥2 criterios de Anthonisen: Amoxicilina/Ácido clavulánico 875/125 mg VO c/12 h, o Azitromicina 500 mg VO día 1 y luego 250 mg/día x 4 días</p>
          </li>
          <li>
            <p>Oxígeno controlado a meta de saturación 88-92%; VMNI (BiPAP) si hay acidosis respiratoria (pH &lt;7.35)</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Oxigenar sin control en un EPOC puede llevar a acidosis respiratoria por supresión del estímulo hipóxico — usar la meta de saturación, no "más siempre es mejor".</p>
        </Callout>
      </Section>
      <Section id="c2-s4" title="4. Neumonía grave / sepsis de foco respiratorio">
        <p><strong>Identificación:</strong> fiebre y síntomas respiratorios con criterios de gravedad.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Fiebre, tos con expectoración, disnea, dolor pleurítico</p>
          </li>
          <li>
            <p>Taquipnea; signos de sepsis: hipotensión, taquicardia, confusión</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>CURB-65 (Confusión, Urea &gt;7 mmol/L, FR ≥30/min, PA sistólica &lt;90 o diastólica ≤60 mmHg, Edad ≥65 años) — 1 punto por criterio: ≥3 indica neumonía grave, considerar UCI</p>
          </li>
          <li>
            <p>Radiografía de tórax</p>
          </li>
          <li>
            <p>Hemocultivos y lactato si hay sospecha de sepsis</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Ceftriaxona 2 g IV c/24 h + Azitromicina 500 mg IV/VO c/24 h (cobertura de atípicos)</p>
          </li>
          <li>
            <p>Si sospecha de Pseudomonas (bronquiectasias, EPOC grave, hospitalización reciente): Piperacilina-tazobactam 4.5 g IV c/6-8 h</p>
          </li>
          <li>
            <p>Si sepsis asociada: cristaloides 30 mL/kg en las primeras 3 horas; Noradrenalina 0.05-0.5 mcg/kg/min si hipotensión persistente tras volumen</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Cada hora de retraso en el antibiótico aumenta la mortalidad en sepsis — no esperar la confirmación microbiológica para iniciarlo.</p>
        </Callout>
      </Section>
      <Section id="c2-s5" title="5. Neumotórax a tensión">
        <p><strong>Identificación:</strong> antecedente de trauma torácico, procedimiento reciente (vía central, ventilación mecánica) o enfermedad pulmonar subyacente, con deterioro respiratorio y hemodinámico súbito.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Disnea súbita, dolor torácico</p>
          </li>
          <li>
            <p>Desviación traqueal contralateral, ausencia de murmullo pulmonar unilateral</p>
          </li>
          <li>
            <p>Ingurgitación yugular, hipotensión</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>Clínico — no se debe esperar una imagen para tratar si hay compromiso hemodinámico</li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Descompresión inmediata con aguja calibre 14G: 2° espacio intercostal línea medioclavicular, o 4°-5° espacio línea axilar anterior (preferido en pacientes con más panículo adiposo)</p>
          </li>
          <li>
            <p>Tubo pleural 28-32 Fr a continuación</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El neumotórax a tensión es un diagnóstico clínico — pedir una radiografía antes de descomprimir puede costar la vida del paciente.</p>
        </Callout>
      </Section>
      <Section id="c2-s6" title="6. Síndrome de dificultad respiratoria aguda (SDRA)">
        <p><strong>Identificación:</strong> factor de riesgo reciente (sepsis, neumonía, aspiración, trauma, pancreatitis) con inicio de disnea dentro de la primera semana del evento.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Disnea progresiva, taquipnea</p>
          </li>
          <li>
            <p>Hipoxemia refractaria al oxígeno suplementario</p>
          </li>
        </ul>
        <p><strong>Diagnóstico (criterios de Berlín):</strong></p>
        <ul>
          <li>
            <p>Infiltrados bilaterales en la imagen de tórax</p>
          </li>
          <li>
            <p>Inicio agudo (dentro de 1 semana)</p>
          </li>
          <li>
            <p>Hipoxemia: PaO₂/FiO₂ ≤300 (leve), ≤200 (moderado), ≤100 (grave), no explicada completamente por falla cardíaca o sobrecarga de volumen</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Ventilación mecánica protectora: volumen corriente 6 mL/kg de peso predicho, presión meseta &lt;30 cmH₂O</p>
          </li>
          <li>
            <p>PEEP según tabla ARDSnet (ajustado a FiO₂ requerida)</p>
          </li>
          <li>
            <p>Posición prono ≥16 h/día si PaO₂/FiO₂ &lt;150 pese a optimización de PEEP</p>
          </li>
          <li>
            <p>Tratar la causa de base</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La estrategia protectora (volúmenes bajos) mejora la sobrevida incluso a costa de cierta hipercapnia permisiva.</p>
        </Callout>
      </Section>
      <Section id="c2-s7" title="7. Obstrucción de vía aérea superior por cuerpo extraño">
        <p><strong>Identificación:</strong> inicio súbito durante la ingesta de alimentos, o en niños pequeños con objetos pequeños al alcance; antecedente de atragantamiento presenciado.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Tos súbita, estridor, disfonía</p>
          </li>
          <li>
            <p>Incapacidad para hablar o toser si la obstrucción es completa</p>
          </li>
          <li>
            <p>Signo universal de asfixia (manos al cuello)</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong> clínico.</p>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Obstrucción completa en adulto: maniobra de Heimlich (compresiones abdominales subdiafragmáticas)</p>
          </li>
          <li>
            <p>Lactante: 5 golpes interescapulares alternados con 5 compresiones torácicas</p>
          </li>
          <li>
            <p>Pérdida de conciencia: iniciar RCP, revisar la cavidad oral entre ciclos (barrido digital solo si se visualiza el objeto)</p>
          </li>
          <li>
            <p>Laringoscopia directa o broncoscopia rígida si el cuerpo extraño persiste tras las maniobras</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Si el paciente puede toser con fuerza o hablar, la obstrucción es parcial — no intervenir manualmente, solo animar a toser y observar de cerca.</p>
        </Callout>
      </Section>
      <Section id="c2-s8" title="8. Angioedema con compromiso de vía aérea">
        <p><strong>Identificación:</strong> antecedente de uso de IECA, alergia conocida, o episodios previos de angioedema hereditario.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Edema de labios, lengua, úvula o laringe de instalación rápida</p>
          </li>
          <li>
            <p>Estridor, disfonía, sensación de opresión faríngea</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong> clínico; estudio de C1 inhibidor (nivel y función) si se sospecha angioedema hereditario, aunque no es urgente para el manejo agudo.</p>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Asegurar la vía aérea precozmente — intubación temprana (o vía aérea quirúrgica si no es posible) ante progresión rápida, antes de que el edema la dificulte</p>
          </li>
          <li>
            <p>Si hay componente alérgico/anafiláctico: Adrenalina IM 0.3-0.5 mg (1:1000) en cara anterolateral del muslo</p>
          </li>
          <li>
            <p>Metilprednisolona 125 mg IV + Difenhidramina 50 mg IV si el origen es alérgico</p>
          </li>
          <li>
            <p>Suspender el IECA de forma definitiva</p>
          </li>
          <li>
            <p>Angioedema hereditario: concentrado de C1 inhibidor 20 UI/kg IV, o Icatibant 30 mg SC si está disponible</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>En angioedema por IECA, la adrenalina y los corticoides tienen efecto limitado — lo que salva es anticiparse y asegurar la vía aérea a tiempo.</p>
        </Callout>
      </Section>
      <Section id="c2-s9" title="9. Anafilaxia con broncoespasmo">
        <p><strong>Identificación:</strong> exposición a un alérgeno conocido (fármaco, alimento, picadura), con inicio agudo de síntomas multisistémicos.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Broncoespasmo, estridor</p>
          </li>
          <li>
            <p>Urticaria, angioedema</p>
          </li>
          <li>
            <p>Hipotensión, síntomas gastrointestinales</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong> clínico — compromiso cutáneo/mucoso más compromiso respiratorio y/o cardiovascular tras exposición a un alérgeno probable.</p>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Adrenalina IM 0.3-0.5 mg (1:1000) en cara anterolateral del muslo — de inmediato, primera línea, no retrasar; repetir c/5-15 min si es necesario</p>
          </li>
          <li>
            <p>Oxígeno; cristaloides 1-2 L en bolo si hay hipotensión</p>
          </li>
          <li>
            <p>Salbutamol nebulizado 2.5-5 mg si el broncoespasmo persiste tras la adrenalina</p>
          </li>
          <li>
            <p>Difenhidramina 25-50 mg IV y Metilprednisolona 1-2 mg/kg IV como manejo adyuvante (no de primera línea)</p>
          </li>
          <li>
            <p>Observación 4-6 h (o más según riesgo) por posible reacción bifásica</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>El error más frecuente es dar antihistamínico como primera medida — la adrenalina IM va primero, siempre.</p>
        </Callout>
      </Section>
      <Section id="c2-s10" title="10. Hemoptisis masiva">
        <p><strong>Identificación:</strong> antecedente de tuberculosis, bronquiectasias, cáncer pulmonar o coagulopatía; expectoración de gran volumen de sangre o compromiso respiratorio secundario al sangrado.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Expectoración hemoptoica abundante, disnea, ansiedad</p>
          </li>
          <li>
            <p>Riesgo de asfixia por inundación de la vía aérea — más letal que la pérdida sanguínea en sí</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Radiografía o TAC de tórax</p>
          </li>
          <li>
            <p>Broncoscopia para localizar el sitio de sangrado</p>
          </li>
          <li>
            <p>AngioTAC si se planea embolización</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Posicionar al paciente con el pulmón sangrante hacia abajo (decúbito lateral), para proteger el pulmón sano</p>
          </li>
          <li>
            <p>Ácido tranexámico 1 g IV (en 10 min) como medida adyuvante</p>
          </li>
          <li>
            <p>Asegurar la vía aérea: intubación selectiva con tubo de doble lumen o bloqueador bronquial si es necesario</p>
          </li>
          <li>
            <p>Corregir coagulopatía (plasma fresco, vitamina K, revertir anticoagulantes según corresponda)</p>
          </li>
          <li>
            <p>Embolización arterial bronquial (primera línea) o cirugía si falla o no está disponible</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>En hemoptisis masiva el paciente muere ahogado, no desangrado — proteger la vía aérea es la prioridad inmediata.</p>
        </Callout>
        <p><em>Manual de bolsillo — Capítulo 2: Urgencias respiratorias. Las dosis son de referencia general y deben ajustarse a función renal/hepática, peso e interacciones del paciente, y a los protocolos institucionales vigentes.</em></p>
      </Section>
    </>
  )
}

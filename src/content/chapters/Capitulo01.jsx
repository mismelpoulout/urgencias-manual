import Callout from '../../components/content/Callout.jsx'
import Section from '../../components/content/Section.jsx'

// Capítulo 1 · Las 10 urgencias cardiovasculares más frecuentes
export default function Capitulo01() {
  return (
    <>
      <p>Identificación, cuadro clínico, diagnóstico y tratamiento inicial en el servicio de urgencias, con dosis y criterios específicos.</p>
      <Section id="c1-s1" title="1. Síndrome coronario agudo (SCA)">
        <p><em>IAM con SDST · IAM sin SDST · Angina inestable</em></p>
        <p><strong>Identificación:</strong> dolor torácico opresivo &gt;20 min en paciente con factores de riesgo: HTA, diabetes, tabaquismo, dislipidemia, antecedentes familiares de cardiopatía coronaria precoz.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor retroesternal opresivo, irradiado a brazo izquierdo, mandíbula o espalda</p>
          </li>
          <li>
            <p>Diaforesis fría, náuseas, vómitos, disnea</p>
          </li>
          <li>
            <p>Presentaciones atípicas frecuentes en diabéticos, adultos mayores y mujeres: disnea o fatiga como único síntoma</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>ECG de 12 derivaciones en los primeros 10 minutos</p>
          </li>
          <li>
            <p><strong>IAMCEST:</strong> SDST ≥1 mm en 2 derivaciones contiguas periféricas, o ≥2 mm (hombres ≥40 años), ≥2.5 mm (hombres &lt;40) o ≥1.5 mm (mujeres) en V2-V3</p>
          </li>
          <li>
            <p><strong>IAMSEST:</strong> infradesnivel ST ≥0.5 mm o inversión de onda T, con troponina elevada</p>
          </li>
          <li>
            <p>Troponina de alta sensibilidad: algoritmo 0h/1h — valor de corte y delta de cambio según el kit del laboratorio local; una elevación con cinética dinámica (ascenso o caída &gt;20-50% según el ensayo) confirma injuria miocárdica aguda</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Aspirina 300 mg VO masticada (carga), luego 100 mg/día</p>
          </li>
          <li>
            <p>Segundo antiagregante: Clopidogrel 300-600 mg VO carga → 75 mg/día, o Ticagrelor 180 mg carga → 90 mg c/12 h</p>
          </li>
          <li>
            <p>Nitroglicerina SL 0.4 mg c/5 min hasta 3 dosis, o IV 10-20 mcg/min titulando según PA (evitar si PAS &lt;90 mmHg o sospecha de IAM de VD)</p>
          </li>
          <li>
            <p>Morfina 2-4 mg IV c/5-15 min si dolor refractario a nitratos</p>
          </li>
          <li>
            <p>Anticoagulación: Heparina no fraccionada bolo 60 UI/kg (máx. 4.000 UI) + infusión 12 UI/kg/h, o Enoxaparina 1 mg/kg SC c/12 h</p>
          </li>
          <li>
            <p>Atorvastatina 80 mg VO</p>
          </li>
          <li>
            <p>Metoprolol 25-50 mg VO c/12 h si no hay contraindicación (evitar en falla cardíaca aguda o shock)</p>
          </li>
          <li>
            <p><strong>IAMCEST:</strong> angioplastia primaria (meta puerta-balón &lt;90 min) o fibrinolisis con Tenecteplase peso-ajustado si no hay PCI disponible en &lt;120 min</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Un ECG normal no descarta SCA — repetir a los 15-30 min si la sospecha clínica persiste.</p>
        </Callout>
      </Section>
      <Section id="c1-s2" title="2. Edema pulmonar agudo cardiogénico">
        <p><em>Insuficiencia cardíaca aguda descompensada</em></p>
        <p><strong>Identificación:</strong> disnea de instalación súbita en paciente con cardiopatía previa, HTA mal controlada o valvulopatía.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Disnea intensa, ortopnea, tos con expectoración rosada</p>
          </li>
          <li>
            <p>Crepitaciones bilaterales, ingurgitación yugular, edema de extremidades</p>
          </li>
          <li>
            <p>Taquicardia; presión arterial elevada o baja según el perfil hemodinámico</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>NT-proBNP &gt;300 pg/mL (ajustar por edad: &gt;450 si &lt;50 años, &gt;900 si 50-75 años, &gt;1.800 si &gt;75 años) o BNP &gt;100 pg/mL</p>
          </li>
          <li>
            <p>Radiografía de tórax: redistribución vascular, líneas B de Kerley, derrame pleural</p>
          </li>
          <li>
            <p>Ecocardiograma y ECG para identificar la causa desencadenante</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Posición semisentada, oxígeno o VMNI: CPAP/BiPAP con PEEP/EPAP 5-10 cmH₂O</p>
          </li>
          <li>
            <p>Furosemida IV 40-80 mg en bolo; si ya usa diurético crónico, dosis IV 1-2.5 veces la dosis oral habitual</p>
          </li>
          <li>
            <p>Nitroglicerina IV 10-20 mcg/min, titulando hasta 200 mcg/min según respuesta de PA</p>
          </li>
          <li>
            <p>Dobutamina 2-20 mcg/kg/min si hay hipotensión o signos de shock</p>
          </li>
          <li>
            <p>Tratar la causa desencadenante (arritmia, isquemia, crisis hipertensiva)</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Evitar sobrecarga de volumen — la reposición IV agresiva empeora el cuadro.</p>
        </Callout>
      </Section>
      <Section id="c1-s3" title="3. Fibrilación auricular con respuesta ventricular rápida">
        <p><strong>Identificación:</strong> palpitaciones o hallazgo incidental de pulso irregular; puede cursar asintomática, especialmente en adultos mayores.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Palpitaciones, disnea, dolor torácico, mareo</p>
          </li>
          <li>
            <p>Síncope o inestabilidad hemodinámica en los casos más graves</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>ECG: ausencia de ondas P, intervalos RR irregularmente irregulares, FC &gt;100 lpm</p>
          </li>
          <li>
            <p>Ecocardiograma para buscar causa estructural o trombos</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p><strong>Inestable</strong> (hipotensión, angina, EPA, compromiso de conciencia): cardioversión eléctrica sincronizada 120-200 J bifásico</p>
          </li>
          <li>
            <p><strong>Estable — control de frecuencia:</strong></p>
          </li>
          <li>
            <p>Metoprolol IV 2.5-5 mg c/5 min hasta 3 dosis, o</p>
          </li>
          <li>
            <p>Diltiazem IV 0.25 mg/kg en 2 min, luego infusión 5-15 mg/h</p>
          </li>
          <li>
            <p>Si hay falla cardíaca asociada: Amiodarona IV 150 mg en 10 min, luego infusión 1 mg/min x 6 h, después 0.5 mg/min x 18 h</p>
          </li>
          <li>
            <p>Anticoagulación según CHA₂DS₂-VASc ≥2 (hombres) o ≥3 (mujeres): anticoagulante oral directo, p.&nbsp;ej. Apixaban 5 mg c/12 h</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Si la FA lleva &gt;48 h o tiempo incierto, no cardiovertir sin anticoagulación o ecocardiograma transesofágico que descarte trombo auricular (salvo inestabilidad que obligue a hacerlo de inmediato).</p>
        </Callout>
      </Section>
      <Section id="c1-s4" title="4. Taquicardia / fibrilación ventricular — paro cardíaco">
        <p><strong>Identificación:</strong> colapso súbito con pérdida de conciencia y ausencia de pulso central.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Inconsciencia, apnea o respiración agónica</p>
          </li>
          <li>
            <p>Ausencia de pulso palpable</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>Monitor/desfibrilador: ritmo desfibrilable — fibrilación ventricular o taquicardia ventricular sin pulso</li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>RCP de alta calidad continua (compresiones 100-120/min, profundidad 5-6 cm)</p>
          </li>
          <li>
            <p>Desfibrilación inmediata: 200 J bifásico (360 J si es monofásico)</p>
          </li>
          <li>
            <p>Epinefrina 1 mg IV/IO c/3-5 min desde el segundo ciclo</p>
          </li>
          <li>
            <p>Amiodarona 300 mg IV/IO en bolo tras el 3er choque no exitoso; segunda dosis de 150 mg si persiste. Alternativa: Lidocaína 1-1.5 mg/kg IV</p>
          </li>
          <li>
            <p>Buscar y tratar causas reversibles: hipoxia, hipovolemia, H⁺ (acidosis), hipo/hiperkalemia, hipotermia, neumotórax a tensión, taponamiento, tóxicos, trombosis (coronaria o pulmonar)</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Minimizar las interrupciones de las compresiones torácicas — cada pausa reduce la probabilidad de retorno a circulación espontánea.</p>
        </Callout>
      </Section>
      <Section id="c1-s5" title="5. Bradiarritmia severa y bloqueo AV completo">
        <p><strong>Identificación:</strong> antecedente de cardiopatía isquémica (especialmente IAM inferior), uso de fármacos bradicardizantes (beta bloqueo, calcioantagonistas, digoxina) o enfermedad del sistema de conducción.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Mareo, presíncope o síncope, fatiga</p>
          </li>
          <li>
            <p>Hipotensión; en casos graves, shock o paro cardiorrespiratorio</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>ECG: FC &lt;50 lpm sintomática; en bloqueo AV completo, disociación entre ondas P y complejos QRS</li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Atropina IV 1 mg c/3-5 min (máximo 3 mg total)</p>
          </li>
          <li>
            <p>Si no responde (frecuente en bloqueos infrahisianos con QRS ancho): Dopamina 5-20 mcg/kg/min, o Epinefrina 2-10 mcg/min en infusión</p>
          </li>
          <li>
            <p>Marcapasos transcutáneo a 60-80/min mientras se gestiona el marcapasos transvenoso definitivo</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La atropina suele ser inefectiva en bloqueos infrahisianos (QRS ancho) — no retrasar el marcapasos por repetir dosis.</p>
        </Callout>
      </Section>
      <Section id="c1-s6" title="6. Crisis hipertensiva (emergencia hipertensiva)">
        <p><strong>Identificación:</strong> presión arterial muy elevada (habitualmente &gt;180/120 mmHg) <strong>con</strong> evidencia de daño agudo de órgano blanco — lo que la distingue de la urgencia hipertensiva simple.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Cefalea intensa, alteración visual o de conciencia (encefalopatía hipertensiva)</p>
          </li>
          <li>
            <p>Dolor torácico o disnea si hay compromiso coronario o edema pulmonar</p>
          </li>
          <li>
            <p>Síntomas neurológicos focales si hay compromiso cerebrovascular</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Medición repetida de presión arterial en ambos brazos</p>
          </li>
          <li>
            <p>Evaluación dirigida del órgano afectado: fondo de ojo, función renal, ECG, TAC de cerebro si hay síntomas neurológicos</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Labetalol IV 20 mg bolo, luego 20-80 mg c/10 min (máx. acumulado 300 mg) o infusión 0.5-2 mg/min, o</p>
          </li>
          <li>
            <p>Nicardipino infusión 5 mg/h, titulando hasta máx. 15 mg/h, o</p>
          </li>
          <li>
            <p>Nitroprusiato de sodio 0.3-10 mcg/kg/min (vigilar toxicidad por cianuro en infusiones prolongadas o falla renal)</p>
          </li>
          <li>
            <p>Meta: reducir la PA media ~10-20% en la primera hora, evitando caídas bruscas</p>
          </li>
          <li>
            <p>Excepción: disección aórtica y ACV isquémico/hemorrágico tienen metas y velocidad de reducción específicas (ver disección aórtica)</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>La cifra de presión por sí sola no define la emergencia — lo que manda es el daño de órgano blanco.</p>
        </Callout>
      </Section>
      <Section id="c1-s7" title="7. Tromboembolismo pulmonar agudo">
        <p><strong>Identificación:</strong> factores de riesgo: inmovilización prolongada, cirugía reciente, cáncer activo, antecedente de trombosis venosa profunda.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Disnea de inicio súbito, dolor torácico pleurítico</p>
          </li>
          <li>
            <p>Taquicardia, taquipnea; hemoptisis en algunos casos</p>
          </li>
          <li>
            <p>Síncope o shock en TEP masivo</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Score de Wells (probabilidad clínica) o Ginebra</p>
          </li>
          <li>
            <p>Dímero D &lt;500 ng/mL (ajustado por edad en &gt;50 años: edad x 10) descarta TEP si la probabilidad clínica es baja</p>
          </li>
          <li>
            <p>AngioTAC de tórax: estudio de confirmación</p>
          </li>
          <li>
            <p>Ecocardiograma junto a la cama si el paciente está inestable (sobrecarga de ventrículo derecho)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Heparina no fraccionada: bolo 80 UI/kg + infusión 18 UI/kg/h (ajustar por TTPA), o Enoxaparina 1 mg/kg SC c/12 h</p>
          </li>
          <li>
            <p><strong>TEP de alto riesgo con inestabilidad hemodinámica:</strong> trombolisis con Alteplase 100 mg IV en 2 horas (o 0.6 mg/kg en bolo de 15 min si hay paro cardíaco)</p>
          </li>
          <li>
            <p>Soporte hemodinámico y de oxigenación según necesidad</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>No esperar la confirmación imagenológica para iniciar anticoagulación si la sospecha clínica es alta y el riesgo de sangrado es bajo.</p>
        </Callout>
      </Section>
      <Section id="c1-s8" title="8. Disección aórtica aguda">
        <p><strong>Identificación:</strong> antecedente de HTA mal controlada, enfermedad del tejido conectivo (Marfan, Ehlers-Danlos) o cirugía aórtica previa.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Dolor torácico o interescapular de inicio súbito, intenso, descrito como desgarro</p>
          </li>
          <li>
            <p>Asimetría de pulsos o de presión arterial entre extremidades</p>
          </li>
          <li>
            <p>Puede asociar soplo de insuficiencia aórtica nueva o síntomas neurológicos focales</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>AngioTAC de tórax — examen de elección si el paciente está estable</p>
          </li>
          <li>
            <p>Ecocardiograma transesofágico si el paciente está demasiado inestable para trasladar</p>
          </li>
          <li>
            <p>Radiografía de tórax: ensanchamiento mediastínico (hallazgo inespecífico, no descarta el diagnóstico si es normal)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Esmolol IV bolo 500 mcg/kg en 1 min, luego infusión 50-200 mcg/kg/min (control de FC de primera línea por su rápida titulación), o Labetalol IV bolo 20 mg luego infusión 0.5-2 mg/min</p>
          </li>
          <li>
            <p>Meta: FC &lt;60 lpm, PAS 100-120 mmHg</p>
          </li>
          <li>
            <p>Si persiste HTA tras beta bloqueo adecuado: agregar Nitroprusiato de sodio 0.3-10 mcg/kg/min</p>
          </li>
          <li>
            <p>Analgesia con Morfina o Fentanilo IV</p>
          </li>
          <li>
            <p><strong>Tipo A</strong> (compromete aorta ascendente): cirugía de urgencia</p>
          </li>
          <li>
            <p><strong>Tipo B</strong> no complicada: manejo médico; complicada: intervención endovascular</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Nunca dar solo vasodilatador sin beta bloqueo previo — la taquicardia refleja aumenta el estrés de cizallamiento sobre la pared aórtica.</p>
        </Callout>
      </Section>
      <Section id="c1-s9" title="9. Taponamiento cardíaco">
        <p><strong>Identificación:</strong> antecedente de derrame pericárdico conocido, trauma torácico, neoplasia, pericarditis o procedimiento cardíaco reciente.</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Tríada de Beck: hipotensión, ingurgitación yugular, ruidos cardíacos apagados</p>
          </li>
          <li>
            <p>Pulso paradójico (caída &gt;10 mmHg de PAS con la inspiración), disnea, taquicardia</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Ecocardiograma: derrame pericárdico con colapso diastólico de cavidades derechas</p>
          </li>
          <li>
            <p>ECG: alternancia eléctrica, bajo voltaje generalizado</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Pericardiocentesis de urgencia, idealmente guiada por ecocardiografía (abordaje subxifoideo)</p>
          </li>
          <li>
            <p>Bolo de cristaloides 500 mL IV mientras se prepara el procedimiento, para sostener la precarga</p>
          </li>
          <li>
            <p>Tratar la causa de base una vez estabilizado</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Evitar la ventilación con presión positiva antes de drenar si es posible — reduce aún más el retorno venoso y puede precipitar el colapso hemodinámico.</p>
        </Callout>
      </Section>
      <Section id="c1-s10" title="10. Shock cardiogénico">
        <p><strong>Identificación:</strong> antecedente de IAM extenso, insuficiencia cardíaca terminal o complicación mecánica (rotura de músculo papilar, comunicación interventricular post-IAM).</p>
        <p><strong>Cuadro clínico:</strong></p>
        <ul>
          <li>
            <p>Hipotensión persistente (PAS &lt;90 mmHg) pese a volumen adecuado</p>
          </li>
          <li>
            <p>Signos de hipoperfusión: piel fría y moteada, oliguria, alteración de conciencia</p>
          </li>
          <li>
            <p>Signos de congestión pulmonar asociados</p>
          </li>
        </ul>
        <p><strong>Diagnóstico:</strong></p>
        <ul>
          <li>
            <p>Clínica + ecocardiograma (función ventricular y complicaciones mecánicas)</p>
          </li>
          <li>
            <p>Lactato &gt;2 mmol/L como marcador de hipoperfusión</p>
          </li>
          <li>
            <p>Cateterismo de arteria pulmonar en casos seleccionados (índice cardíaco &lt;2.2 L/min/m²)</p>
          </li>
        </ul>
        <p><strong>Tratamiento:</strong></p>
        <ul>
          <li>
            <p>Noradrenalina 0.05-0.5 mcg/kg/min como vasopresor de primera línea si hay hipotensión severa</p>
          </li>
          <li>
            <p>Dobutamina 2-20 mcg/kg/min como soporte inotrópico</p>
          </li>
          <li>
            <p>Tratar la causa: revascularización urgente si el origen es un IAM</p>
          </li>
          <li>
            <p>Soporte circulatorio mecánico (balón de contrapulsación intraaórtico, ECMO veno-arterial) en casos refractarios</p>
          </li>
        </ul>
        <Callout type="perla">
          <p>Descartar siempre una complicación mecánica con ecocardiograma antes de asumir que el shock es solo por falla de bomba.</p>
        </Callout>
        <p><em>Manual de bolsillo — Capítulo 1: Urgencias cardiovasculares. Las dosis son de referencia general y deben ajustarse a función renal/hepática, peso e interacciones del paciente, y a los protocolos institucionales vigentes.</em></p>
      </Section>
    </>
  )
}

import EcgQuiz from '../../components/content/EcgQuiz.jsx'
import EcgTrace from '../../components/content/EcgTrace.jsx'
import { EcgGrid, ImageGrid } from '../../components/content/Grids.jsx'
import Section from '../../components/content/Section.jsx'
import Table from '../../components/content/Table.jsx'
import WikiImage from '../../components/content/WikiImage.jsx'

// Capítulo 20 · Atlas de imágenes: ECG, radiografía, TAC y laboratorio
export default function Capitulo20() {
  return (
    <>
      <p>Ejemplos visuales de los hallazgos descritos en el manual. Los trazados de ECG son ilustrativos (dibujados a velocidad estándar de 25 mm/s, 10 mm/mV). Las imágenes reales provienen de <strong>Wikimedia Commons</strong> con licencia libre; cada figura indica su autor y enlace.</p>
      <Section id="c20-s1" title="1. Electrocardiogramas: ritmos y patrones (trazados ilustrativos)">
        <EcgGrid>
          <EcgTrace type="sinus" caption="Ritmo sinusal normal · 75 lpm · P antes de cada QRS, PR 160 ms, QRS 80 ms" />
          <EcgTrace type="stemi" caption="Supradesnivel del ST (SCACEST): ST convexo elevado ≥1 mm en derivadas contiguas" />
          <EcgTrace type="fa" caption="Fibrilación auricular: R-R irregularmente irregular, sin ondas P, línea de base fibrilatoria" />
          <EcgTrace type="flutter" caption="Flutter auricular 2:1: ondas F en serrucho a 300/min, respuesta ventricular 150 lpm" />
          <EcgTrace type="tsv" caption="Taquicardia supraventricular: QRS estrecho regular a 180 lpm, sin P visibles" />
          <EcgTrace type="tv" caption="Taquicardia ventricular monomorfa: QRS ancho (>120 ms) regular a 180 lpm" />
          <EcgTrace type="fv" caption="Fibrilación ventricular: actividad caótica sin QRS identificables → desfibrilar" />
          <EcgTrace type="bav1" caption="Bloqueo AV de 1.er grado: PR constante >200 ms" />
          <EcgTrace type="mobitz1" caption="Bloqueo AV 2.º grado Mobitz I (Wenckebach): PR que se alarga hasta una P no conducida" />
          <EcgTrace type="mobitz2" caption="Bloqueo AV 2.º grado Mobitz II: PR constante con P bloqueadas súbitamente" />
          <EcgTrace type="bav3" caption="Bloqueo AV completo: P y QRS disociados, escape ventricular lento ≈40 lpm" />
          <EcgTrace type="pericard" caption="Pericarditis: ST elevado cóncavo difuso con descenso del PR" />
          <EcgTrace type="hiperk" caption="Hiperkalemia: T picudas, P aplanada, QRS ancho" />
          <EcgTrace type="hipok" caption="Hipokalemia: T aplanada y onda U prominente" />
          <EcgTrace type="hipoca" caption="Hipocalcemia: QT prolongado por ST largo" />
          <EcgTrace type="hiperca" caption="Hipercalcemia: QT corto" />
        </EcgGrid>
      </Section>
      <Section id="c20-s2" title="2. Electrocardiogramas reales">
        <ImageGrid>
          <WikiImage
            file="Hyperkalemia_ECG.jpg"
            fallback="hiperk"
            credit="Dr. Michael-Joseph F. Agbayani y Dr. Eddieson Gonzales · CC BY 4.0"
            alt="Hiperkalemia (K⁺ 8,2 mmol/L) en paciente con enfermedad renal: ondas T altas y picudas en precordiales."
          >
            <b>Hiperkalemia (K⁺ 8,2 mmol/L)</b> en paciente con enfermedad renal: ondas T altas y picudas en precordiales.
          </WikiImage>
          <WikiImage
            file="LowKECG.JPG"
            fallback="hipok"
            credit="James Heilman, MD · CC BY-SA 3.0"
            alt="Hipokalemia (K⁺ 1,1): depresión del ST, T invertidas, ondas U grandes y PR levemente prolongado."
          >
            <b>Hipokalemia (K⁺ 1,1)</b>: depresión del ST, T invertidas, ondas U grandes y PR levemente prolongado.
          </WikiImage>
          <WikiImage
            file="ECG_001.jpg"
            fallback="stemi"
            credit="Glenlarson · GFDL"
            alt="IAM inferior: supradesnivel del ST en DII, DIII y aVF con cambios recíprocos."
          >
            <b>IAM inferior</b>: supradesnivel del ST en DII, DIII y aVF con cambios recíprocos.
          </WikiImage>
          <WikiImage
            file="12_Lead_EKG_ST_Elevation_tracing_color_coded.jpg"
            fallback="stemi"
            credit="Displaced · Dominio público"
            alt="SCACEST anterior: supradesnivel del ST en precordiales (naranjo) e infradesnivel recíproco inferior (azul)."
          >
            <b>SCACEST anterior</b>: supradesnivel del ST en precordiales (naranjo) e infradesnivel recíproco inferior (azul).
          </WikiImage>
          <WikiImage
            file="ECG_Atrial_Fibrillation_98_bpm.jpg"
            fallback="fa"
            credit="Ewingdo · Wikimedia Commons"
            alt="Fibrilación auricular con respuesta ventricular controlada (98 lpm) en mujer de 89 años."
          >
            <b>Fibrilación auricular</b> con respuesta ventricular controlada (98 lpm) en mujer de 89 años.
          </WikiImage>
          <WikiImage
            file="3rd_degree_heart_block.PNG"
            fallback="bav3"
            credit="Wikimedia Commons"
            alt="Bloqueo AV completo: las ondas P (flechas) no guardan relación con los QRS de escape ventricular."
          >
            <b>Bloqueo AV completo</b>: las ondas P (flechas) no guardan relación con los QRS de escape ventricular.
          </WikiImage>
        </ImageGrid>
      </Section>
      <Section id="c20-s3" title="3. Radiografía de tórax">
        <ImageGrid>
          <WikiImage
            file="X-ray_of_pneumothorax_signs.jpg"
            fallback="rx-ptx"
            credit="Karthik Easvur · Wikimedia Commons"
            alt="Neumotórax: línea pleural visceral, ausencia de trama vascular periférica y colapso pulmonar. Si hay desviación del mediastino e hipotensión: descompresión inmediata."
          >
            <b>Neumotórax</b>: línea pleural visceral, ausencia de trama vascular periférica y colapso pulmonar. Si hay desviación del mediastino e hipotensión: descompresión inmediata.
          </WikiImage>
          <WikiImage
            file="X-ray_of_lobar_pneumonia.jpg"
            fallback="rx-nac"
            credit="Mikael Häggström · Wikimedia Commons"
            alt="Neumonía lobar del lóbulo medio derecho: condensación con broncograma aéreo que borra el borde cardíaco derecho (signo de la silueta)."
          >
            <b>Neumonía lobar del lóbulo medio derecho</b>: condensación con broncograma aéreo que borra el borde cardíaco derecho (signo de la silueta).
          </WikiImage>
          <WikiImage
            file="Chest_radiograph_of_a_lung_with_Kerley_B_lines_-_annotated.jpg"
            fallback="rx-ic"
            credit="Mikael Häggström · Wikimedia Commons"
            alt="Insuficiencia cardíaca: cardiomegalia, redistribución vascular, líneas B de Kerley y derrame pleural menor (anotado)."
          >
            <b>Insuficiencia cardíaca</b>: cardiomegalia, redistribución vascular, líneas B de Kerley y derrame pleural menor (anotado).
          </WikiImage>
          <WikiImage
            file="ARDS_X-Ray.jpg"
            fallback="rx-sdra"
            credit="Samir · Dominio público / GFDL"
            alt="SDRA: opacidades alveolares bilaterales difusas sin cardiomegalia (edema pulmonar no cardiogénico)."
          >
            <b>SDRA</b>: opacidades alveolares bilaterales difusas sin cardiomegalia (edema pulmonar no cardiogénico).
          </WikiImage>
        </ImageGrid>
      </Section>
      <Section id="c20-s4" title="4. Tomografía computada">
        <ImageGrid>
          <WikiImage
            file="SAB_basal_bei_Aneurysma.jpg"
            fallback="tc-hsa"
            credit="Hellerhoff · Wikimedia Commons"
            alt="Hemorragia subaracnoidea: sangre hiperdensa en las cisternas basales (patrón en “estrella”). TAC dentro de 6 h del inicio tiene sensibilidad cercana al 100%."
          >
            <b>Hemorragia subaracnoidea</b>: sangre hiperdensa en las cisternas basales (patrón en “estrella”). TAC dentro de 6 h del inicio tiene sensibilidad cercana al 100%.
          </WikiImage>
          <WikiImage
            file="Intracerebral_hemorrage_(CT_scan).jpg"
            fallback="tc-hic"
            credit="Glitzy queen00 · Wikimedia Commons"
            alt="Hemorragia intracerebral con extensión intraventricular: colección hiperdensa intraparenquimatosa con sangre en ventrículos."
          >
            <b>Hemorragia intracerebral con extensión intraventricular</b>: colección hiperdensa intraparenquimatosa con sangre en ventrículos.
          </WikiImage>
          <WikiImage
            file="Trauma_subdural.jpg"
            fallback="tc-hsd"
            credit="Wikimedia Commons"
            alt="Hematoma subdural traumático: colección extraaxial en semiluna que cruza suturas, con efecto de masa."
          >
            <b>Hematoma subdural traumático</b>: colección extraaxial en semiluna que cruza suturas, con efecto de masa.
          </WikiImage>
          <WikiImage
            file="CT_of_lobar_pneumonia.jpg"
            fallback="tc-nac"
            credit="Mikael Häggström · Wikimedia Commons"
            alt="TAC de tórax: neumonía lobar del lóbulo medio con broncograma aéreo (mismo paciente de la radiografía)."
          >
            <b>TAC de tórax: neumonía lobar</b> del lóbulo medio con broncograma aéreo (mismo paciente de la radiografía).
          </WikiImage>
        </ImageGrid>
        <p className="mini">Las imágenes reales se cargan desde Wikimedia Commons cuando la página tiene acceso a internet abierto (por ejemplo, al abrir el archivo HTML descargado). Si no cargan, se muestra un esquema de los hallazgos y un enlace directo a la imagen original.</p>
      </Section>
      <Section id="c20-s5" title="5. Laboratorio: casos ilustrativos para interpretar">
        <h3>Caso A · Gases arteriales en cetoacidosis diabética</h3>
        <Table>
          <thead>
            <tr>
              <th>Parámetro</th>
              <th>Resultado</th>
              <th>Referencia</th>
              <th>Interpretación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>pH</td>
              <td><strong>7,12</strong></td>
              <td>7,35-7,45</td>
              <td>Acidemia</td>
            </tr>
            <tr>
              <td>PaCO₂</td>
              <td><strong>19 mmHg</strong></td>
              <td>35-45</td>
              <td>Compensación respiratoria</td>
            </tr>
            <tr>
              <td>HCO₃⁻</td>
              <td><strong>7 mEq/L</strong></td>
              <td>22-26</td>
              <td>Acidosis metabólica</td>
            </tr>
            <tr>
              <td>Na⁺ / Cl⁻</td>
              <td>134 / 98 mEq/L</td>
              <td>—</td>
              <td>Anión gap = 134 − (98 + 7) = <strong>29</strong> (elevado)</td>
            </tr>
            <tr>
              <td>Glicemia</td>
              <td><strong>486 mg/dL</strong></td>
              <td>70-110</td>
              <td>Hiperglicemia</td>
            </tr>
            <tr>
              <td>Cetonemia (β-hidroxibutirato)</td>
              <td><strong>5,8 mmol/L</strong></td>
              <td>&lt;0,6</td>
              <td>Cetoacidosis</td>
            </tr>
            <tr>
              <td>K⁺</td>
              <td>5,6 mEq/L</td>
              <td>3,5-5,0</td>
              <td>Hiperkalemia por redistribución: déficit corporal total real</td>
            </tr>
          </tbody>
        </Table>
        <p><strong>Fórmula de Winter:</strong> PaCO₂ esperada = 1,5 × HCO₃⁻ + 8 ± 2 = 18,5 ± 2 → la compensación es adecuada. <strong>Conducta:</strong> cristaloides, insulina en infusión cuando K⁺ ≥3,5, reposición de potasio al bajar de 5,0-5,5.</p>
        <h3>Caso B · Perfil de sepsis con shock</h3>
        <Table>
          <thead>
            <tr>
              <th>Parámetro</th>
              <th>Resultado</th>
              <th>Interpretación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lactato</td>
              <td><strong>4,8 mmol/L</strong></td>
              <td>Hipoperfusión (&gt;2 define shock con vasopresor; ≥4 alto riesgo)</td>
            </tr>
            <tr>
              <td>Leucocitos</td>
              <td>21.400/µL, 15% baciliformes</td>
              <td>Respuesta inflamatoria</td>
            </tr>
            <tr>
              <td>Plaquetas</td>
              <td><strong>88.000/µL</strong></td>
              <td>SOFA coagulación 2</td>
            </tr>
            <tr>
              <td>Creatinina</td>
              <td><strong>2,4 mg/dL</strong> (basal 0,9)</td>
              <td>Lesión renal aguda, SOFA renal 2</td>
            </tr>
            <tr>
              <td>Bilirrubina total</td>
              <td>1,6 mg/dL</td>
              <td>SOFA hepático 1</td>
            </tr>
            <tr>
              <td>PCR / procalcitonina</td>
              <td>312 mg/L / 18 ng/mL</td>
              <td>Orientan a infección bacteriana (no definen el inicio del antibiótico)</td>
            </tr>
            <tr>
              <td>PaO₂/FiO₂</td>
              <td>240</td>
              <td>SOFA respiratorio 2</td>
            </tr>
          </tbody>
        </Table>
        <p><strong>Interpretación:</strong> SOFA ≥7 en contexto infeccioso = sepsis; si requiere noradrenalina para PAM ≥65 con este lactato, cumple criterios de <strong>shock séptico</strong> (ver Capítulo 12).</p>
        <h3>Caso C · Hiponatremia por SIADH</h3>
        <Table>
          <thead>
            <tr>
              <th>Parámetro</th>
              <th>Resultado</th>
              <th>Interpretación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Na⁺ plasmático</td>
              <td><strong>119 mEq/L</strong></td>
              <td>Hiponatremia profunda</td>
            </tr>
            <tr>
              <td>Osmolalidad plasmática</td>
              <td><strong>252 mOsm/kg</strong></td>
              <td>Hipotónica</td>
            </tr>
            <tr>
              <td>Osmolalidad urinaria</td>
              <td><strong>480 mOsm/kg</strong></td>
              <td>Orina inapropiadamente concentrada (&gt;100)</td>
            </tr>
            <tr>
              <td>Na⁺ urinario</td>
              <td><strong>58 mEq/L</strong></td>
              <td>&gt;30: no es hipovolemia</td>
            </tr>
            <tr>
              <td>Ácido úrico</td>
              <td>2,4 mg/dL</td>
              <td>Bajo, apoya SIADH</td>
            </tr>
            <tr>
              <td>TSH / cortisol</td>
              <td>Normales</td>
              <td>Descarta hipotiroidismo e insuficiencia suprarrenal</td>
            </tr>
          </tbody>
        </Table>
        <p><strong>Conducta:</strong> si hay síntomas graves, NaCl 3% 150 mL en 20 min; si no, restricción hídrica y buscar la causa (neumonía, fármacos, tumor pulmonar, patología del SNC). Límite de corrección ≤8 mEq/L en 24 h por tratarse de un Na ≤120 (ver Capítulo 13).</p>
        <h3>Caso D · Líquido cefalorraquídeo</h3>
        <Table>
          <thead>
            <tr>
              <th>Parámetro</th>
              <th>Normal</th>
              <th>Bacteriana</th>
              <th>Viral</th>
              <th>Tuberculosa / fúngica</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aspecto</td>
              <td>Claro</td>
              <td>Turbio</td>
              <td>Claro</td>
              <td>Claro u opalescente</td>
            </tr>
            <tr>
              <td>Presión de apertura</td>
              <td>6-20 cmH₂O</td>
              <td>Elevada</td>
              <td>Normal o levemente elevada</td>
              <td>Elevada</td>
            </tr>
            <tr>
              <td>Células /µL</td>
              <td>&lt;5</td>
              <td>1.000-5.000, <strong>neutrófilos</strong></td>
              <td>10-500, <strong>linfocitos</strong></td>
              <td>50-500, linfocitos</td>
            </tr>
            <tr>
              <td>Glucosa (relación LCR/plasma)</td>
              <td>&gt;0,6</td>
              <td><strong>&lt;0,4</strong></td>
              <td>Normal</td>
              <td>Baja</td>
            </tr>
            <tr>
              <td>Proteínas</td>
              <td>15-45 mg/dL</td>
              <td><strong>&gt;100-200</strong></td>
              <td>Normales o levemente altas</td>
              <td>Muy elevadas</td>
            </tr>
            <tr>
              <td>Otros</td>
              <td>—</td>
              <td>Gram positivo 60-90%</td>
              <td>PCR viral (VHS, enterovirus)</td>
              <td>ADA, tinta china, antígeno criptocócico</td>
            </tr>
          </tbody>
        </Table>
      </Section>
      <Section id="c20-s6" title="6. Autoevaluación: identificar ritmos">
        <p>Reproduzca el trazado, mire y escuche, y elija el ritmo o patrón. Al responder verá la clínica asociada.</p>
        <EcgQuiz />
      </Section>
    </>
  )
}

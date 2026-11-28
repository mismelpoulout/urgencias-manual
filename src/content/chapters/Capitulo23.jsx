import Callout from '../../components/content/Callout.jsx'
import Section from '../../components/content/Section.jsx'
import Algorithm from '../../components/tools/Algorithm.jsx'
import ArrestTimer from '../../components/tools/ArrestTimer.jsx'
import InfusionCalculator from '../../components/tools/InfusionCalculator.jsx'
import SepsisTimer from '../../components/tools/SepsisTimer.jsx'
import anaphylaxis from '../algorithms/anaphylaxis.js'
import chestPain from '../algorithms/chestPain.js'
import stroke from '../algorithms/stroke.js'

// Capítulo 22 · Herramientas de turno
export default function Capitulo23() {
  return (
    <>
      <p>Cronómetros, calculadora de infusiones y algoritmos paso a paso para usar durante la atención.</p>
      <Callout type="alerta">
        <p><strong>Herramientas de apoyo pendientes de validación clínica.</strong> No reemplazan el juicio clínico, el protocolo local ni el registro oficial. Los cronómetros se guardan solo en este dispositivo.</p>
      </Callout>
      <Section id="c23-s1" title="1. Cronómetro de Código Sepsis">
        <p>Paquete SOCHIMI con metas de 1, 3 y 6 horas desde el triaje.</p>
        <SepsisTimer />
      </Section>
      <Section id="c23-s2" title="2. Cronómetro de paro cardíaco">
        <p>Ciclos de 2 minutos, adrenalina, descargas, amiodarona y registro de eventos.</p>
        <ArrestTimer />
      </Section>
      <Section id="c23-s3" title="3. Calculadora de infusiones">
        <p>Convierte una dosis en velocidad de bomba (mL/h) y viceversa.</p>
        <InfusionCalculator />
      </Section>
      <Section id="c23-s4" title="4. Algoritmo: dolor torácico">
        <p>Adultos. De la estabilidad inicial al diagnóstico de las causas de riesgo vital.</p>
        <Algorithm data={chestPain} />
      </Section>
      <Section id="c23-s5" title="5. Algoritmo: accidente cerebrovascular">
        <p>Adultos. Código ACV, imagen y reperfusión.</p>
        <Algorithm data={stroke} />
      </Section>
      <Section id="c23-s6" title="6. Algoritmo: anafilaxia">
        <p>Adultos. La adrenalina intramuscular es la primera medida.</p>
        <Algorithm data={anaphylaxis} />
      </Section>
    </>
  )
}

import { useState } from 'react'
import Callout from '../../components/content/Callout.jsx'
import Section from '../../components/content/Section.jsx'
import Combos from '../../components/drugs/Combos.jsx'
import DrugTable from '../../components/drugs/DrugTable.jsx'
import MixChecker from '../../components/drugs/MixChecker.jsx'
import { DRUG_GROUPS } from '../drugs.js'

// Capítulo 21 · Vademécum. Los datos se editan en content/drugs.js, pharmacology.js, interactions.js y combos.js
export default function Capitulo22() {
  const [selected, setSelected] = useState([])

  const check = (drugs) => {
    setSelected(drugs)
    document.getElementById('c22-mezclas').scrollIntoView()
  }

  return (
    <>
      <p>Fármacos de uso frecuente en urgencias ordenados por grupo farmacológico, combinaciones habituales y un comprobador de mezclas.</p>
      <p><strong>Toque el nombre de un fármaco</strong> para ver cuánto demora en hacer efecto, su vida media, mecanismo de acción, metabolismo y reacciones adversas.</p>
      <Callout type="alerta">
        <p><strong>Material pendiente de validación farmacéutica.</strong> Las dosis son orientativas para adultos. Verificar siempre alergias, función renal y hepática, embarazo y el protocolo local antes de prescribir.</p>
      </Callout>
      {DRUG_GROUPS.map((g) => (
        <Section key={g.id} id={`c22-${g.id}`} title={g.name}>
          <DrugTable drugs={g.drugs} />
        </Section>
      ))}
      <Section id="c22-combos" title="Combinaciones de tratamiento por cuadro">
        <Combos onCheck={check} />
      </Section>
      <Section id="c22-mezclas" title="Comprobador: ¿se pueden mezclar?">
        <p>Responde dos preguntas distintas por cada pareja: si pueden <strong>indicarse juntos</strong> en un paciente y si pueden ir por la <strong>misma jeringa o vía intravenosa</strong>.</p>
        <Callout type="alerta">
          <p>El comprobador solo conoce las reglas cargadas en este manual. <strong>“Sin información” no significa seguro.</strong> Ante la duda, consultar al servicio de farmacia.</p>
        </Callout>
        <MixChecker selected={selected} onChange={setSelected} />
      </Section>
    </>
  )
}

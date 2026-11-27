import { useState } from 'react'
import EcgClinical from './EcgClinical.jsx'
import EcgPlayer from './EcgPlayer.jsx'
import { ECG_GUIDE } from '../../content/ecgGuide.js'

const TYPES = Object.keys(ECG_GUIDE)
const shuffle = (list) => list.map((x) => [Math.random(), x]).sort((a, b) => a[0] - b[0]).map(([, x]) => x)

// Pregunta nueva: un ritmo distinto al anterior y cuatro alternativas.
function nextQuestion(previous) {
  const [answer, ...others] = shuffle(TYPES.filter((t) => t !== previous))
  return { answer, options: shuffle([answer, ...others.slice(0, 3)]) }
}

// Autoevaluación: mirar y escuchar un trazado sin nombre, y reconocerlo.
export default function EcgQuiz() {
  const [question, setQuestion] = useState(null)
  const [chosen, setChosen] = useState(null)
  const [score, setScore] = useState({ right: 0, total: 0 })

  const next = () => {
    setQuestion({ ...nextQuestion(question?.answer), number: (question?.number ?? 0) + 1 })
    setChosen(null)
  }

  const choose = (type) => {
    setChosen(type)
    setScore((s) => ({ right: s.right + (type === question.answer), total: s.total + 1 }))
  }

  return (
    <div data-noindex className="my-4 rounded-[14px] border-[1.5px] border-line p-3 xs:p-4 print:hidden">
      {!question ? (
        <button type="button" className="h-11 rounded-xl bg-red px-5 font-semibold text-bg" onClick={next}>
          Comenzar autoevaluación
        </button>
      ) : (
        <>
          <p className="flex justify-between gap-3 font-semibold">
            <span>¿Qué ritmo o patrón es?</span>
            <span className="text-ink2 tabular-nums">
              Aciertos: {score.right} de {score.total}
            </span>
          </p>
          <EcgPlayer key={question.number} type={question.answer} mystery={!chosen} />
          <div className="mt-3 grid gap-2 xs:grid-cols-2">
            {question.options.map((type) => {
              const right = chosen && type === question.answer
              const wrong = chosen === type && !right
              return (
                <button
                  key={type}
                  type="button"
                  disabled={Boolean(chosen)}
                  onClick={() => choose(type)}
                  className={`min-h-11 rounded-xl border-[1.5px] px-3 py-2 text-left text-[14.5px] font-medium disabled:cursor-default ${
                    right ? 'border-blue bg-bluet text-blue' : wrong ? 'border-red bg-redt text-red' : 'border-line bg-bg text-ink enabled:hover:border-red'
                  }`}
                >
                  {right && '✓ '}
                  {wrong && '✗ '}
                  {ECG_GUIDE[type].name}
                </button>
              )
            })}
          </div>
          {chosen && (
            <div role="status" className="mt-3">
              <p className="!mb-1 font-semibold">
                {chosen === question.answer ? 'Correcto.' : `No: era ${ECG_GUIDE[question.answer].name}.`}
              </p>
              <EcgClinical type={question.answer} />
              <button type="button" className="mt-3 h-11 rounded-xl bg-red px-5 font-semibold text-bg" onClick={next}>
                Siguiente trazado
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

import { memo } from 'react'
import Chapter from '../content/Chapter.jsx'
import { chapters } from '../../content/index.js'

function Book() {
  return (
    <main id="libro" className="px-[max(4vw,16px)] pb-20 print:p-0">
      {chapters.map((c, i) => (
        <Chapter key={c.id} chapter={c} previous={chapters[i - 1]} next={chapters[i + 1]} />
      ))}
    </main>
  )
}

export default memo(Book)

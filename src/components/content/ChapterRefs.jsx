import { Fragment } from 'react'
import { chapterNumber, sectionLabel } from '../../content/index.js'

// Referencia «(Cap. 5, 19)» a partir de identificadores de sección: el número sale del índice,
// así no se desactualiza al reordenar el libro.
export default function ChapterRefs({ to }) {
  return (
    <>
      (Cap.&nbsp;
      {to.map((id, i) => (
        <Fragment key={id}>
          {i > 0 && ', '}
          <a href={`#${id}`} title={sectionLabel(id)} aria-label={sectionLabel(id)} className="inline-block px-0.5 pointer-coarse:py-1.5">
            {chapterNumber(id)}
          </a>
        </Fragment>
      ))}
      )
    </>
  )
}

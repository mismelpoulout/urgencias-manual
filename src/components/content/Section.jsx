export default function Section({ id, title, children }) {
  return (
    <article className="sec" id={id}>
      <h2>{title}</h2>
      {children}
    </article>
  )
}

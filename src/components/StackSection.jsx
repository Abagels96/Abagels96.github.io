export function StackSection({ areas }) {
  return (
    <section id="stack" className="panel panel--stack" aria-labelledby="stack-heading">
      <div className="section-head section-head--split">
        <span className="section-num" aria-hidden="true">
          01
        </span>
        <div>
          <h2 id="stack-heading">Stack</h2>
          <p className="section-head__lead">
            Languages, frameworks, and tooling, grouped by how I work across the stack.
          </p>
        </div>
      </div>

      <div className="bento">
        {areas.map((a) => (
          <article key={a.id} className={`bento__card bento__card--${a.id}`}>
            <h3 className="bento__title">{a.title}</h3>
            <p className="bento__body">{a.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

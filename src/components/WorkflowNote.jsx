export function WorkflowNote({ text }) {
  return (
    <aside className="workflow" aria-labelledby="workflow-heading">
      <p id="workflow-heading" className="workflow__label">
        How I work
      </p>
      <p className="workflow__text">{text}</p>
    </aside>
  )
}

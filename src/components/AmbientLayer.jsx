/**
 * Fixed full-viewport ambient: static base wash + two blurred orbs (position driven by CSS vars).
 */
export function AmbientLayer() {
  return (
    <div className="page__ambient" aria-hidden="true">
      <div className="page__ambient-base" />
      <div className="page__ambient-orb page__ambient-orb--gold" />
      <div className="page__ambient-orb page__ambient-orb--cool" />
    </div>
  )
}

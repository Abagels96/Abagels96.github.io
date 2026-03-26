export function Hero({ name, title, location, tagline }) {
  const [first, ...rest] = name.split(' ')
  const last = rest.join(' ')

  return (
    <section id="about" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__frame" aria-hidden="true" />
        <p className="hero__kicker">
          <span className="hero__kicker-line" />
          Full-stack · {location}
        </p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__name hero__name--first">{first}</span>
          {last ? (
            <span className="hero__name hero__name--last">{last}</span>
          ) : null}
        </h1>
        <p className="hero__role">{title}</p>
        <p className="hero__tagline">{tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--fill" href="#stack">
            View stack
          </a>
          <a className="btn btn--line" href="#portfolios">
            Portfolios
          </a>
          <a className="btn btn--line" href="#connect">
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

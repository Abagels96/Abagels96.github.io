export function Hero({
  name,
  title,
  location,
  eyebrow,
  heroHeadline,
  heroLead,
  primaryCta,
  secondaryCtas,
}) {
  return (
    <section id="hero" className="hero" aria-labelledby="hero-headline">
      <div className="hero__art" aria-hidden="true">
        <div className="hero__glow hero__glow--a" />
        <div className="hero__glow hero__glow--b" />
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
      </div>

      <div className="hero__shell">
        <div className="hero__content">
          <p className="hero__eyebrow hero__enter hero__enter--1">
            <span className="hero__eyebrow-dot" />
            {eyebrow}
            <span className="hero__eyebrow-sep">/</span>
            {location}
          </p>

          <p className="hero__identity hero__enter hero__enter--2">
            <span className="hero__identity-name">{name}</span>
            <span className="hero__identity-sep" aria-hidden="true">
              ·
            </span>
            <span className="hero__identity-role">{title}</span>
          </p>

          <h1 id="hero-headline" className="hero__display hero__enter hero__enter--3">
            {heroHeadline}
          </h1>

          <p className="hero__lead hero__enter hero__enter--4">{heroLead}</p>

          <div className="hero__ctas hero__enter hero__enter--5">
            <a className="btn btn--primary" href={primaryCta.href}>
              {primaryCta.label}
            </a>
            {secondaryCtas.map((cta) => (
              <a
                key={cta.label}
                className="btn btn--ghost"
                href={cta.href}
                {...(cta.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

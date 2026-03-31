import { Reveal } from './Reveal.jsx'

function projectInitials(title) {
  const words = title.replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/)
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase().slice(0, 2)
  }
  return title.slice(0, 2).toUpperCase()
}

function IconLive() {
  return (
    <svg className="showcase-btn__icon" width={18} height={18} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M10 16.5v-9l6 4.5-6 4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      />
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg className="showcase-btn__icon" width={18} height={18} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.002 12.002 0 0024 12c0-6.627-5.373-12-12-12z"
      />
    </svg>
  )
}

export function PortfolioSection({ intro, items }) {
  return (
    <section id="work" className="section section--work" aria-labelledby="work-heading">
      <div className="section__inner section__inner--wide">
        <div className="section__intro-stack">
          <Reveal variant="soft" delay={0}>
            <p className="section__eyebrow">{intro.eyebrow}</p>
          </Reveal>
          <Reveal variant="rise" delay={50}>
            <h2 id="work-heading" className="section__title">
              {intro.title}
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={110}>
            <p className="section__lead">{intro.lead}</p>
          </Reveal>
        </div>

        {items.length === 0 ? (
          <Reveal variant="fade">
            <p className="portfolio-empty">
              Nothing here yet. Add items to <code>portfolioItems</code> in <code>content.js</code>.
            </p>
          </Reveal>
        ) : (
          <ul className="showcase-grid">
            {items.map((item, index) => (
              <li key={item.id} className="showcase-grid__cell">
                <Reveal delay={index * 55}>
                  <article
                    className={`showcase-card ${item.featured ? 'showcase-card--featured' : ''}`.trim()}
                  >
                    <div className="showcase-card__media">
                      {item.image ? (
                        <img
                          className="showcase-card__img"
                          src={item.image}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="showcase-card__placeholder" aria-hidden="true">
                          <span className="showcase-card__initials">{projectInitials(item.title)}</span>
                        </div>
                      )}
                      <div className="showcase-card__media-shine" aria-hidden="true" />
                    </div>

                    <div className="showcase-card__body">
                      {item.featured ? (
                        <span className="showcase-card__badge">Featured</span>
                      ) : null}
                      <h3 className="showcase-card__title">{item.title}</h3>
                      <p className="showcase-card__impact">{item.impact}</p>

                      {item.stack?.length ? (
                        <ul className="showcase-card__stack">
                          {item.stack.map((tech) => (
                            <li key={tech}>
                              <span className="showcase-stack-pill">{tech}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      <div className="showcase-card__actions">
                        <a
                          className="showcase-btn showcase-btn--live"
                          href={item.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconLive />
                          Live demo
                        </a>
                        <a
                          className="showcase-btn showcase-btn--github"
                          href={item.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconGitHub />
                          GitHub
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

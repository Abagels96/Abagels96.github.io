import { Reveal } from './Reveal.jsx'

function Pill({ children, variant = 'compact' }) {
  return <span className={`skill-pill skill-pill--${variant}`}>{children}</span>
}

export function SkillsSection({ intro, groups }) {
  const { core, supporting, exploring } = groups

  return (
    <section id="skills" className="section section--skills" aria-labelledby="skills-heading">
      <div className="section__inner section__inner--wide">
        <div className="section__intro-stack">
          <Reveal variant="soft" delay={0}>
            <p className="section__eyebrow">{intro.eyebrow}</p>
          </Reveal>
          <Reveal variant="rise" delay={50}>
            <h2 id="skills-heading" className="section__title">
              {intro.title}
            </h2>
          </Reveal>
          <Reveal variant="fade" delay={110}>
            <p className="section__lead">{intro.lead}</p>
          </Reveal>
        </div>

        <div className="skills__layout">
          <Reveal delay={40}>
            <article className="skill-card skill-card--core" aria-labelledby="skills-core-title">
              <header className="skill-card__header">
                <h3 id="skills-core-title" className="skill-card__label">
                  {core.label}
                </h3>
                <p className="skill-card__intro">{core.intro}</p>
              </header>

              <div className="skill-card__tier">
                <p className="skill-card__tier-label">Primary</p>
                <ul className="skill-card__list skill-card__list--highlights">
                  {core.highlights.map((name) => (
                    <li key={name}>
                      <Pill variant="highlight">{name}</Pill>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="skill-card__tier skill-card__tier--sub">
                <p className="skill-card__tier-label">Also core</p>
                <ul className="skill-card__list skill-card__list--rest">
                  {core.rest.map((name) => (
                    <li key={name}>
                      <Pill variant="rest">{name}</Pill>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <div className="skills__subgrid">
            <Reveal delay={90}>
              <article className="skill-card skill-card--supporting" aria-labelledby="skills-support-title">
                <header className="skill-card__header">
                  <h3 id="skills-support-title" className="skill-card__label">
                    {supporting.label}
                  </h3>
                  <p className="skill-card__intro">{supporting.intro}</p>
                </header>
                <ul className="skill-card__list skill-card__list--compact">
                  {supporting.items.map((name) => (
                    <li key={name}>
                      <Pill variant="compact">{name}</Pill>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={130}>
              <article className="skill-card skill-card--exploring" aria-labelledby="skills-explore-title">
                <header className="skill-card__header">
                  <h3 id="skills-explore-title" className="skill-card__label">
                    {exploring.label}
                  </h3>
                  <p className="skill-card__intro">{exploring.intro}</p>
                </header>
                <ul className="skill-card__list skill-card__list--explore">
                  {exploring.items.map((name) => (
                    <li key={name}>
                      <Pill variant="explore">{name}</Pill>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

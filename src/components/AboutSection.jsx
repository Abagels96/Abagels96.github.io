import { Reveal } from './Reveal.jsx'

export function AboutSection({ title, paragraphs }) {
  return (
    <section id="about" className="section section--about" aria-labelledby="about-heading">
      <div className="section__inner">
        <div className="section__intro-stack">
          <Reveal variant="soft" delay={0}>
            <p className="section__eyebrow">Intro</p>
          </Reveal>
          <Reveal variant="rise" delay={55}>
            <h2 id="about-heading" className="section__title">
              {title}
            </h2>
          </Reveal>
        </div>
        <div className="about__copy">
          {paragraphs.map((p, i) => (
            <Reveal key={i} variant="fade" delay={90 + i * 75}>
              <p className="about__paragraph">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

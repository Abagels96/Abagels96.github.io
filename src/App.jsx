import './App.css'
import { AmbientLayer } from './components/AmbientLayer.jsx'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { AboutSection } from './components/AboutSection.jsx'
import { PortfolioSection } from './components/PortfolioSection.jsx'
import { SkillsSection } from './components/SkillsSection.jsx'
import { ConnectFooter } from './components/ConnectFooter.jsx'
import { SECTION_IDS } from './constants/sections.js'
import { useActiveSection } from './hooks/useActiveSection.js'
import { useAmbientTheme } from './hooks/useAmbientTheme.js'
import {
  meta,
  about,
  portfolioIntro,
  portfolioItems,
  skillsIntro,
  skillGroups,
  contact,
  social,
} from './content.js'

function App() {
  const activeId = useActiveSection(SECTION_IDS)
  useAmbientTheme(activeId)

  return (
    <div id="top" className="page">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <AmbientLayer />
      <Header name={meta.name} activeId={activeId} />
      <main id="main-content">
        <Hero
          name={meta.name}
          title={meta.title}
          location={meta.location}
          eyebrow={meta.eyebrow}
          heroHeadline={meta.heroHeadline}
          heroLead={meta.heroLead}
          primaryCta={meta.primaryCta}
          secondaryCtas={[
            { label: 'Contact me', href: '#contact' },
            { label: 'GitHub', href: social.github, external: true },
          ]}
        />
        <AboutSection title={about.title} paragraphs={about.paragraphs} />
        <PortfolioSection intro={portfolioIntro} items={portfolioItems} />
        <SkillsSection intro={skillsIntro} groups={skillGroups} />
        <ConnectFooter name={meta.name} contact={contact} social={social} />
      </main>
    </div>
  )
}

export default App

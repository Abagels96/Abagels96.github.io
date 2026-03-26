import './App.css'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { StackSection } from './components/StackSection.jsx'
import { PortfolioSection } from './components/PortfolioSection.jsx'
import { WorkflowNote } from './components/WorkflowNote.jsx'
import { ConnectFooter } from './components/ConnectFooter.jsx'
import { meta, portfolioItems, stackAreas, workflowNote } from './content.js'

function App() {
  return (
    <div id="top" className="page">
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <div className="page__grain" aria-hidden="true" />
      <Header name={meta.name} />
      <main>
        <Hero
          name={meta.name}
          title={meta.title}
          location={meta.location}
          tagline={meta.tagline}
        />
        <StackSection areas={stackAreas} />
        <PortfolioSection items={portfolioItems} />
        <WorkflowNote text={workflowNote} />
      </main>
      <ConnectFooter name={meta.name} linkedIn={meta.linkedIn} />
    </div>
  )
}

export default App

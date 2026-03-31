import { useEffect } from 'react'

/**
 * Moves soft indigo / violet glow orbs based on scroll section (pairs with useActiveSection).
 * Sets CSS custom properties on :root; no layout thrash. Respects reduced motion via CSS.
 */
const AMBIENT_BY_SECTION = {
  hero: { goldX: '72%', goldY: '6%', coolX: '90%', coolY: '18%' },
  about: { goldX: '16%', goldY: '32%', coolX: '20%', coolY: '48%' },
  work: { goldX: '50%', goldY: '4%', coolX: '96%', coolY: '52%' },
  skills: { goldX: '86%', goldY: '30%', coolX: '72%', coolY: '68%' },
  contact: { goldX: '26%', goldY: '76%', coolX: '12%', coolY: '82%' },
}

export function useAmbientTheme(activeId) {
  useEffect(() => {
    const pos = AMBIENT_BY_SECTION[activeId] ?? AMBIENT_BY_SECTION.hero
    const root = document.documentElement
    root.style.setProperty('--ambient-gold-x', pos.goldX)
    root.style.setProperty('--ambient-gold-y', pos.goldY)
    root.style.setProperty('--ambient-cool-x', pos.coolX)
    root.style.setProperty('--ambient-cool-y', pos.coolY)
  }, [activeId])
}

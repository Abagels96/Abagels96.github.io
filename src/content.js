/** Site copy: edit here to update the live portfolio. */

export const meta = {
  name: 'Abigail Bales',
  title: 'Full-Stack Software Developer',
  location: 'St. Louis',
  /** Short line above identity in hero */
  eyebrow: 'Full-stack developer',
  heroHeadline: 'I ship products end to end, from UI to API.',
  /** One sharp supporting line; keep short */
  heroLead:
    'Interfaces people can follow, state they can reason about, and backends the next developer won’t dread opening.',
  primaryCta: { label: 'View Projects', href: '#work' },
}

export const about = {
  title: 'About',
  paragraphs: [
    'I focus on turning fuzzy requirements into maintainable systems: structured components, predictable state, and APIs that other developers can extend without a rewrite.',
    'Recent work spans Next.js and React apps, mock-to-production flows, and full-stack features with auth, dashboards, and deployable pipelines. I use AI tools to move faster on exploration and refactors, not as a substitute for design judgment or review.',
  ],
}

/**
 * Curated skills: `highlights` get visual priority; `rest` stays core but quieter.
 * Add breadth back in `supporting.items` if a role calls for it.
 */
export const skillGroups = {
  core: {
    label: 'Core Stack',
    intro:
      'What I reach for first on full-stack web work: typed UI, a modern React surface, and data that outlasts the first deploy.',
    highlights: ['TypeScript', 'React', 'Next.js'],
    rest: ['Node.js', 'PostgreSQL', 'Git'],
  },
  supporting: {
    label: 'Supporting Tools',
    intro: 'Pulled in when deployment, schema, or integration work needs them, not sprinkled by default.',
    items: ['Tailwind CSS', 'Docker', 'AWS', 'Prisma', 'GraphQL', 'Python'],
  },
  exploring: {
    label: 'Currently Exploring',
    intro: 'Small bets, not a roadmap slide.',
    items: ['React Compiler', 'Edge runtimes', 'Zustand'],
  },
}

/** Optional: section heading copy for the skills block */
export const skillsIntro = {
  eyebrow: 'Expertise',
  title: 'Stack & depth',
  lead:
    'A short list on purpose. Core is what I ship with most; everything else is deliberate support.',
}

/** Section heading above the project grid */
export const portfolioIntro = {
  eyebrow: 'Case studies',
  title: 'Selected work',
  lead:
    'Products and experiments where the goal was clear delivery: ship something usable, measurable, and easy to pick up next.',
}

/**
 * Portfolio work: preview images are PNGs captured from `liveUrl` (see
 * npm run capture:previews). SVGs with the same `id` are kept as fallbacks.
 * `githubUrl` can point at a specific repo or your profile when code is private.
 */
export const portfolioItems = [
  {
    id: 'signal-desk',
    title: 'Signal Desk',
    impact:
      'Turned a blank canvas into a shippable writing workspace: drafts, templates, and planning without waiting on a backend.',
    stack: ['Next.js', 'Tailwind v4', 'Zustand'],
    liveUrl: 'https://abagels96.github.io/signal-desk',
    githubUrl: 'https://github.com/Abagels96/signal-desk',
    image: '/projects/signal-desk-preview.png',
  },
  {
    id: 'abailsshop',
    title: 'AbailsShop',
    impact:
      'Proved storefront and admin flows end-to-end with mock data, so swapping in real payment and inventory is a config change, not a rewrite.',
    stack: ['Next.js', 'Zustand', 'Zod'],
    liveUrl: 'https://abagels96.github.io/ecommerce',
    githubUrl: 'https://github.com/Abagels96/ecommerce',
    image: '/projects/abailsshop-preview.png',
  },
  {
    id: 'orbit-money',
    title: 'Orbit Money',
    impact:
      'Made budgets and goals legible in one screen so stakeholders could stress-test the product story before API spend.',
    stack: ['Next.js', 'TypeScript', 'Tailwind v4'],
    liveUrl: 'https://abagels96.github.io/orbit-money',
    githubUrl: 'https://github.com/Abagels96/orbit-money',
    image: '/projects/orbit-money-preview.png',
  },
  {
    id: 'mom-self-care-tracker',
    title: "Mom's Self-Care Tracker",
    impact:
      'Cut sign-up-to-dashboard friction to a single flow on Railway, so real users could track care without wiring spreadsheets.',
    stack: ['Spring Boot', 'Spring Security', 'MySQL'],
    liveUrl: 'https://momtracker.up.railway.app/login',
    githubUrl: 'https://github.com/Abagels96/Assignment15',
    image: '/projects/mom-self-care-tracker-preview.png',
  },
  {
    id: 'portfolio-next',
    title: 'Portfolio site',
    impact:
      'Single-page marketing site with React and Vite, light/dark theme, and GitHub Pages deploy—content-driven copy and room to grow without a new scaffold.',
    stack: ['React', 'Vite', 'GitHub Pages'],
    liveUrl: 'https://abagels96.github.io',
    githubUrl: 'https://github.com/Abagels96/Abagels96.github.io',
    image: '/projects/portfolio-next-preview.png',
  },
]

export const contact = {
  title: 'Let’s build something solid',
  lead:
    'Hiring, collaborating, or need a pragmatic read on frontend, API, or delivery? Reach out on LinkedIn or see recent work on GitHub.',
}

export const social = {
  linkedIn: 'https://www.linkedin.com/in/abales-1a868497/',
  github: 'https://github.com/Abagels96',
}

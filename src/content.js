/** Essential copy from the GitHub profile README */

export const meta = {
  name: 'Abigail Bales',
  title: 'Full-Stack Software Developer',
  location: 'St. Louis',
  tagline:
    'Building scalable web applications from frontend to backend. Maintainable systems from UI to API.',
  linkedIn: 'https://www.linkedin.com/in/abales-1a868497/',
  github: 'https://github.com/Abagels96',
}

/**
 * Full-stack profile (README-aligned), with recent project tooling folded in:
 * Next.js / TypeScript apps (Signal Desk, Orbit Money, AbailsShop, portfolio-next)
 * and this Vite + React portfolio site.
 */
export const stackAreas = [
  {
    id: 'frontend',
    title: 'Frontend',
    body: 'Languages: HTML5, CSS3, JavaScript (ES6+), TypeScript. Frameworks & UI: React, Vue, Angular, Next.js, Nuxt.js, Redux, React Query; Tailwind CSS & SASS. Recent work also ships with Next.js 16, React 19, Tailwind CSS v4, Zustand, Lucide React, React Hook Form, Zod, clsx, tailwind-merge, and ESLint (Next config); Vite + React for this portfolio.',
  },
  {
    id: 'backend',
    title: 'Backend',
    body: 'Languages: Java, JavaScript (Node.js), Python, C#, Go. Frameworks & runtimes: Node.js, Express, Spring Boot, Django, FastAPI, Flask, .NET Core.',
  },
  {
    id: 'data',
    title: 'Data & APIs',
    body: 'Protocols & query: SQL, GraphQL, REST. Stores & ORMs: PostgreSQL, MySQL, MongoDB, Redis; SQL & NoSQL with Prisma, Sequelize, Hibernate, SQLAlchemy.',
  },
  {
    id: 'delivery',
    title: 'Delivery & tooling',
    body: 'Markup & config: JSON, YAML, XML. Shell: Bash, PowerShell. Operations: Git, Docker, Linux, AWS; CI/CD, RESTful APIs, microservices, Agile/Scrum, unit & integration testing. App delivery with npm, Next.js and Vite builds, and experimental React Compiler on select TypeScript repos.',
  },
]

/**
 * Portfolio: edit links in this file when new deploys go live.
 */
export const portfolioItems = [
  {
    id: 'mom-self-care-tracker',
    title: "Mom's Self-Care Tracker",
    description:
      'Full-stack web app for self-care tracking, progress, and baby-related flows: sign-in, dashboard, and profile. Deployed on Railway.',
    links: [{ label: 'Live app', href: 'https://momtracker.up.railway.app/login' }],
  },
  {
    id: 'signal-desk',
    title: 'Signal Desk',
    description:
      'Front-end-only AI content and productivity studio: prompt-based writing, refinement, drafts, templates, and planning workflows through mock AI logic and a creative control-room UI.',
    links: [{ label: 'Coming soon', href: '#' }],
  },
  {
    id: 'orbit-money',
    title: 'Orbit Money',
    description:
      'Local-only personal finance OS: track transactions, budgets, savings goals, and insights through mock data in a premium dashboard experience.',
    links: [{ label: 'Coming soon', href: '#' }],
  },
  {
    id: 'abailsshop',
    title: 'AbailsShop',
    description:
      'Mock-data e-commerce storefront and admin: browse products, cart, simulated checkout, and local product inventory (no backend).',
    links: [{ label: 'Coming soon', href: '#' }],
  },
  {
    id: 'portfolio-next',
    title: 'Portfolio (Next.js)',
    description:
      'Next.js + TypeScript scaffold with Tailwind CSS v4, ESLint, and experimental React Compiler: starting point for a deployable portfolio site.',
    links: [{ label: 'Coming soon', href: '#' }],
  },
]

/** README-style note on AI-assisted workflow */
export const workflowNote =
  'Comfortable with AI-assisted editors, copilots, and modern prototyping tools, used to speed up exploration, refactors, and UI iteration without replacing solid architecture and review.'

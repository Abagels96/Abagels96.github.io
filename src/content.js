/** Essential copy from the GitHub profile README */

export const meta = {
  name: 'Abigail Bales',
  title: 'Full-Stack Software Developer',
  location: 'St. Louis',
  tagline:
    'Building scalable web applications from frontend to backend — maintainable systems from UI to API.',
  linkedIn: 'https://www.linkedin.com/in/abales-1a868497/',
}

/**
 * Unified stack — languages + frameworks/libraries in one card per domain
 * (same conceptual area; no separate “languages” vs “frameworks” blocks)
 */
export const stackAreas = [
  {
    id: 'frontend',
    title: 'Frontend',
    body: 'Languages: HTML5, CSS3, JavaScript (ES6+), TypeScript. Frameworks & UI: React, Vue, Angular, Next.js, Nuxt.js, Redux, React Query — Tailwind CSS & SASS.',
  },
  {
    id: 'backend',
    title: 'Backend',
    body: 'Languages: Java, JavaScript (Node.js), Python, C#, Go. Frameworks & runtimes: Node.js, Express, Spring Boot, Django, FastAPI, Flask, .NET Core.',
  },
  {
    id: 'data',
    title: 'Data & APIs',
    body: 'Protocols & query: SQL, GraphQL, REST. Stores & ORMs: PostgreSQL, MySQL, MongoDB, Redis — SQL & NoSQL with Prisma, Sequelize, Hibernate, SQLAlchemy.',
  },
  {
    id: 'delivery',
    title: 'Delivery & tooling',
    body: 'Markup & config: JSON, YAML, XML. Shell: Bash, PowerShell. Operations: Git, Docker, Linux, AWS — CI/CD, RESTful APIs, microservices, Agile/Scrum, unit & integration testing.',
  },
]

/**
 * Portfolio highlights — edit titles, copy, and links in this file
 */
export const portfolioItems = [
  {
    id: 'mom-self-care-tracker',
    title: "Mom's Self-Care Tracker",
    description:
      'Full-stack web app for self-care tracking, progress, and baby-related flows — sign-in, dashboard, and profile. Deployed on Railway.',
    links: [{ label: 'Live app', href: 'https://momtracker.up.railway.app/login' }],
  },
]

/** README-style note on AI-assisted workflow */
export const workflowNote =
  'Comfortable with AI-assisted editors, copilots, and modern prototyping tools — used to speed up exploration, refactors, and UI iteration without replacing solid architecture and review.'

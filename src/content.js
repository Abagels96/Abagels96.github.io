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
    id: 'project-one',
    title: 'Project title',
    description:
      'One or two sentences: problem, your role, stack, and outcome. Replace this entry in src/content.js.',
    links: [{ label: 'GitHub', href: 'https://github.com/Abagels96' }],
  },
  {
    id: 'project-two',
    title: 'Another project',
    description:
      'Describe the product or library, what you shipped, and technologies used.',
    links: [{ label: 'Repository', href: 'https://github.com/Abagels96' }],
  },
]

/** README-style note on AI-assisted workflow */
export const workflowNote =
  'Comfortable with AI-assisted editors, copilots, and modern prototyping tools — used to speed up exploration, refactors, and UI iteration without replacing solid architecture and review.'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#portfolios', label: 'Portfolios' },
  { href: '#connect', label: 'Contact' },
]

export function Header({ name }) {
  const initial = name.charAt(0)

  return (
    <header className="site-header">
      <a className="site-logo" href="#top" aria-label={`${name} - top of page`}>
        <span className="site-logo__mark" aria-hidden="true">
          {initial}
        </span>
        <span className="site-logo__text">{name.split(' ')[0]}</span>
      </a>
      <nav className="site-nav" aria-label="Primary">
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

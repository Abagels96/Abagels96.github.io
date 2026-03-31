const NAV = [
  { id: 'about', href: '#about', label: 'About' },
  { id: 'work', href: '#work', label: 'Work' },
  { id: 'skills', href: '#skills', label: 'Skills' },
  { id: 'contact', href: '#contact', label: 'Contact' },
]

export function Header({ name, activeId }) {
  const initial = name.charAt(0)

  return (
    <header className="site-header">
      <a className="site-logo" href="#hero" aria-label={`${name}, back to top`}>
        <span className="site-logo__mark" aria-hidden="true">
          {initial}
        </span>
        <span className="site-logo__text">{name.split(' ')[0]}</span>
      </a>
      <nav className="site-nav" aria-label="Primary">
        <ul>
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeId === item.id ? 'is-active' : undefined}
                aria-current={activeId === item.id ? 'page' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

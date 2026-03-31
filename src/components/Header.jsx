import { useState, useEffect, useId, useRef, useSyncExternalStore } from 'react'

const NAV = [
  { id: 'about', href: '#about', label: 'About' },
  { id: 'work', href: '#work', label: 'Work' },
  { id: 'skills', href: '#skills', label: 'Skills' },
  { id: 'contact', href: '#contact', label: 'Contact' },
]

const NAV_QUERY = '(max-width: 900px)'

function subscribeNarrow(onStoreChange) {
  const mq = window.matchMedia(NAV_QUERY)
  mq.addEventListener('change', onStoreChange)
  return () => mq.removeEventListener('change', onStoreChange)
}

function getNarrowSnapshot() {
  return window.matchMedia(NAV_QUERY).matches
}

function getNarrowServerSnapshot() {
  return false
}

function IconMenu() {
  return (
    <svg className="site-header__menu-btn-icon" width={24} height={24} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
      />
    </svg>
  )
}

function IconClose() {
  return (
    <svg className="site-header__menu-btn-icon" width={24} height={24} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      />
    </svg>
  )
}

function IconMoon() {
  return (
    <svg className="site-header__theme-icon" width={22} height={22} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998z"
      />
    </svg>
  )
}

function IconSun() {
  return (
    <svg className="site-header__theme-icon" width={22} height={22} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      <path
        fill="currentColor"
        d="M12 1.75a.75.75 0 0 1 .75.75v1.75a.75.75 0 0 1-1.5 0V2.5a.75.75 0 0 1 .75-.75zm0 18.75a.75.75 0 0 1 .75-.75v-1.75a.75.75 0 0 1-1.5 0v1.75a.75.75 0 0 1 .75.75zM4.47 4.47a.75.75 0 0 1 1.06 0l1.25 1.25a.75.75 0 0 1-1.06 1.06L4.47 5.53a.75.75 0 0 1 0-1.06zm14.06 14.06a.75.75 0 0 1-1.06 0l-1.25-1.25a.75.75 0 1 1 1.06-1.06l1.25 1.25a.75.75 0 0 1 0 1.06zM1.75 12a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H2.5a.75.75 0 0 1-.75-.75zm18.75 0a.75.75 0 0 1-.75-.75h-1.75a.75.75 0 0 1 0 1.5h1.75a.75.75 0 0 1 .75-.75zM4.47 19.53a.75.75 0 0 1 0-1.06l1.25-1.25a.75.75 0 1 1 1.06 1.06l-1.25 1.25a.75.75 0 0 1-1.06 0zm14.06-14.06a.75.75 0 0 1-1.06 0l-1.25 1.25a.75.75 0 0 1 1.06 1.06l1.25-1.25a.75.75 0 0 1 0-1.06z"
      />
    </svg>
  )
}

export function Header({ name, activeId, theme, onToggleTheme }) {
  const initial = name.charAt(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const isNarrow = useSyncExternalStore(subscribeNarrow, getNarrowSnapshot, getNarrowServerSnapshot)
  const navOpen = menuOpen && isNarrow
  const navId = useId()
  const headerRef = useRef(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const setVar = () => {
      document.documentElement.style.setProperty('--site-header-h', `${el.offsetHeight}px`)
    }
    setVar()
    const ro = new ResizeObserver(setVar)
    ro.observe(el)
    return () => {
      ro.disconnect()
      document.documentElement.style.removeProperty('--site-header-h')
    }
  }, [])

  useEffect(() => {
    if (!navOpen) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [navOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    if (navOpen) {
      window.addEventListener('keydown', onKey)
    }
    return () => window.removeEventListener('keydown', onKey)
  }, [navOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      ref={headerRef}
      className={`site-header ${navOpen ? 'site-header--nav-open' : ''}`}
    >
      <a className="site-logo" href="#hero" aria-label={`${name}, back to top`} onClick={closeMenu}>
        <span className="site-logo__mark" aria-hidden="true">
          {initial}
        </span>
        <span className="site-logo__text">{name.split(' ')[0]}</span>
      </a>
      <nav
        id={navId}
        className="site-nav"
        aria-label="Primary"
        aria-hidden={isNarrow ? !navOpen : undefined}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMenu()
        }}
      >
        <ul>
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeId === item.id ? 'is-active' : undefined}
                aria-current={activeId === item.id ? 'page' : undefined}
                onClick={closeMenu}
                tabIndex={isNarrow && !navOpen ? -1 : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="site-header__end">
        <button
          type="button"
          className="site-header__theme-btn"
          onClick={onToggleTheme}
          aria-pressed={theme === 'dark'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="visually-hidden">
            {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          </span>
          {theme === 'dark' ? <IconSun /> : <IconMoon />}
        </button>
        <button
          type="button"
          className="site-header__menu-btn"
          aria-expanded={navOpen}
          aria-controls={navId}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="visually-hidden">{navOpen ? 'Close menu' : 'Open menu'}</span>
          {navOpen ? <IconClose /> : <IconMenu />}
        </button>
      </div>
    </header>
  )
}

import { useCallback, useEffect, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'theme'

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getResolvedTheme() {
  if (typeof window === 'undefined') return 'light'
  const s = localStorage.getItem(STORAGE_KEY)
  if (s === 'light' || s === 'dark') return s
  return getSystemTheme()
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme === 'dark' ? 'dark' : 'light'
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) {
    meta.setAttribute('content', theme === 'dark' ? '#0f172a' : '#f7f8fa')
  }
}

function subscribeTheme(onStoreChange) {
  const mq = window.matchMedia('(prefers-color-scheme: dark)')
  mq.addEventListener('change', onStoreChange)
  window.addEventListener('storage', onStoreChange)
  window.addEventListener('theme-change', onStoreChange)
  return () => {
    mq.removeEventListener('change', onStoreChange)
    window.removeEventListener('storage', onStoreChange)
    window.removeEventListener('theme-change', onStoreChange)
  }
}

function getThemeSnapshot() {
  return getResolvedTheme()
}

function getThemeServerSnapshot() {
  return 'light'
}

/**
 * Resolved theme: 'light' | 'dark'. localStorage is set only after the user toggles;
 * until then, follows prefers-color-scheme.
 */
export function useTheme() {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    const next = getResolvedTheme() === 'dark' ? 'light' : 'dark'
    localStorage.setItem(STORAGE_KEY, next)
    window.dispatchEvent(new Event('theme-change'))
  }, [])

  return { theme, toggleTheme, isDark: theme === 'dark' }
}

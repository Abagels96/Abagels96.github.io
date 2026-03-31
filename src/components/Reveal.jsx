import { useEffect, useRef, useState } from 'react'

const VARIANT_CLASS = {
  rise: 'reveal--rise',
  fade: 'reveal--fade',
  soft: 'reveal--soft',
}

/**
 * Scroll-triggered entrance. Variants: rise (default), fade, soft.
 * Pass delay (ms) for staggered children. Honors prefers-reduced-motion in CSS.
 */
export function Reveal({ children, className = '', delay = 0, variant = 'rise' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const variantClass = VARIANT_CLASS[variant] ?? VARIANT_CLASS.rise

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -10% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass} ${visible ? 'reveal--visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}

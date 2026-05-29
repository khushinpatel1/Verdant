import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* Staggered scroll-reveal. Observes every .reveal element on the
   current route and adds .in as it scrolls into view. */
export function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))

    if (!('IntersectionObserver' in window) ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach(el => el.classList.add('in'))
      return
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}

import { useEffect, useRef, createContext, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const LenisContext = createContext(null)
export const useLenis = () => useContext(LenisContext)

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * The smooth-scroll spine. Initializes Lenis once, hands its RAF to GSAP's
 * ticker, and keeps ScrollTrigger in sync so pins/scrubs never jitter.
 * Under prefers-reduced-motion we skip Lenis entirely — native scroll only,
 * ScrollTrigger still runs but reads the real scrollbar.
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    if (prefersReduced()) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis
    if (import.meta.env.DEV) window.__lenis = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const tick = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // On route change: jump to top, then recompute every trigger's geometry.
  useEffect(() => {
    const lenis = lenisRef.current
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
    // let the new page paint before measuring
    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [pathname])

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  )
}

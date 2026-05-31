import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from './reducedMotion.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * The Chrome-style modular card: scales up and rounds its corners as it rises
 * into view, then settles. Self-contained (owns its own scrubbed trigger), so
 * it can be dropped anywhere — no parent ScrollScene required.
 *
 * Props:
 *  - tone: palette background token — 'forest' | 'cream' | 'terra' | 'sage'
 *  - fromScale: starting scale (default 0.86)
 *  - fromRadius / toRadius: corner radius in px (default 64 -> 20)
 */
export default function Panel({
  children,
  tone = 'cream',
  fromScale = 0.86,
  fromRadius = 64,
  toRadius = 20,
  className = '',
  style,
  ...rest
}) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return
    const el = ref.current
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: fromScale, borderRadius: fromRadius, autoAlpha: 0.6 },
        {
          scale: 1,
          borderRadius: toRadius,
          autoAlpha: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            end: 'top 42%',
            scrub: 1,
            invalidateOnRefresh: true,
          },
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [fromScale, fromRadius, toRadius])

  return (
    <div
      ref={ref}
      className={`panel panel--${tone} ${className}`}
      style={{ borderRadius: toRadius, ...style }}
      {...rest}
    >
      {children}
    </div>
  )
}

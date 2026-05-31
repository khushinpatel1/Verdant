import {
  useRef,
  useState,
  useLayoutEffect,
  createContext,
  useContext,
} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from './reducedMotion.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * The scrubbed timeline a scene owns. Layers register their tweens onto it,
 * so all motion lives on one GSAP timeline driven by scroll — no React churn.
 * `null` means "no motion" (reduced-motion): Layers then render at rest.
 */
const SceneContext = createContext(null)
export const useScene = () => useContext(SceneContext)

/**
 * A scroll-driven section. The Chrome/Apple primitive: optionally pins itself
 * and scrubs a timeline across `height`% of extra scroll distance.
 *
 * Props:
 *  - pin: pin the section while its timeline scrubs (Apple-style hold)
 *  - height: scrub length in % of viewport (default 100 = one screen of scroll)
 *  - start: ScrollTrigger start (default 'top top' when pinned, else 'top 80%')
 */
export default function ScrollScene({
  children,
  pin = false,
  height = 100,
  start,
  className = '',
  style,
  ...rest
}) {
  const ref = useRef(null)
  const [tl, setTl] = useState(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return // Layers render at rest; no triggers
    const el = ref.current
    let timeline
    const ctx = gsap.context(() => {
      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: start || (pin ? 'top top' : 'top 80%'),
          end: `+=${height}%`,
          scrub: 1,
          pin: pin ? el : false,
          pinSpacing: pin,
          invalidateOnRefresh: true,
        },
      })
      setTl(timeline)
    }, ref)
    return () => {
      setTl(null)
      ctx.revert()
    }
  }, [pin, height, start])

  return (
    <section ref={ref} className={`scene ${className}`} style={style} {...rest}>
      <SceneContext.Provider value={tl}>{children}</SceneContext.Provider>
    </section>
  )
}

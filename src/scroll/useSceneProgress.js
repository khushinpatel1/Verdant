import { useRef, useLayoutEffect } from 'react'
import { useScene } from './ScrollScene.jsx'

/**
 * For bespoke choreography inside a ScrollScene. Returns a ref whose `.current`
 * holds the live scene progress (0→1), updated each scrub frame WITHOUT causing
 * React re-renders. Read it inside a rAF/gsap callback, not in render.
 */
export function useSceneProgress() {
  const tl = useScene()
  const progress = useRef(0)

  useLayoutEffect(() => {
    if (!tl) {
      progress.current = 1 // reduced motion: treat as resolved
      return
    }
    const st = tl.scrollTrigger
    if (!st) return
    const update = () => {
      progress.current = st.progress
    }
    update()
    st.eventCallback?.('onUpdate', update)
    return () => st.eventCallback?.('onUpdate', null)
  }, [tl])

  return progress
}

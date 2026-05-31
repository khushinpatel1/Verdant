import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { useScene } from './ScrollScene.jsx'

/**
 * A depth layer inside a ScrollScene. Registers one scrubbed fromTo tween onto
 * the scene's timeline, so multiple Layers at different rates = real parallax.
 *
 * Props:
 *  - from / to: gsap vars (yPercent, scale, opacity, filter, etc.)
 *  - parallax: shortcut — drifts yPercent from 0 to -parallax across the scene
 *              (bigger = moves faster = reads as closer / or use negatives for deeper)
 *  - position: where on the timeline to place the tween (default 0 = whole scene)
 *
 * When there's no scene timeline (reduced motion), the layer renders at its
 * resting layout — author `to` to equal that resting state.
 */
export default function Layer({
  children,
  from,
  to,
  parallax,
  position = 0,
  className = '',
  style,
  as: Tag = 'div',
  ...rest
}) {
  const ref = useRef(null)
  const tl = useScene()

  useLayoutEffect(() => {
    if (!tl || !ref.current) return
    const fromVars = { ...(parallax != null ? { yPercent: 0 } : null), ...from }
    const toVars = {
      ...(parallax != null ? { yPercent: -parallax } : null),
      ...to,
      ease: 'none',
    }
    const tween = gsap.fromTo(ref.current, fromVars, toVars)
    tl.add(tween, position)
    return () => {
      tween.kill()
    }
  }, [tl, parallax, position])

  return (
    <Tag ref={ref} className={`layer ${className}`} style={style} {...rest}>
      {children}
    </Tag>
  )
}

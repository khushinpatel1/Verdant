import { useRef, useEffect } from 'react'
import { prefersReducedMotion } from './reducedMotion.js'

/**
 * A live top-note layer: a few slow, glowing motes drifting like fireflies.
 * Kept in code (canvas), not baked into video — so they never loop-jump and
 * could later react to scroll/cursor. Honors reduced motion (renders nothing).
 *
 * Props:
 *  - count: number of motes (default 14)
 *  - color: glow color (defaults to the gold token, read from CSS)
 */
export default function Fireflies({ count = 14, color, className = '', style }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)

    const glow =
      color ||
      getComputedStyle(document.documentElement)
        .getPropertyValue('--gold')
        .trim() ||
      '#C8973F'

    let w, h, raf
    const motes = []

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      w = r.width
      h = r.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const seed = () => {
      motes.length = 0
      for (let i = 0; i < count; i++) {
        motes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.8 + Math.random() * 1.8,
          // slow drift
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.14,
          phase: Math.random() * Math.PI * 2,
          speed: 0.6 + Math.random() * 0.9,
        })
      }
    }

    let t = 0
    const draw = () => {
      t += 0.016
      ctx.clearRect(0, 0, w, h)
      ctx.globalCompositeOperation = 'lighter'
      for (const m of motes) {
        m.x += m.vx
        m.y += m.vy
        // wrap softly around edges
        if (m.x < -10) m.x = w + 10
        if (m.x > w + 10) m.x = -10
        if (m.y < -10) m.y = h + 10
        if (m.y > h + 10) m.y = -10
        const pulse = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * m.speed + m.phase))
        const g = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r * 6)
        g.addColorStop(0, hexA(glow, 0.9 * pulse))
        g.addColorStop(1, hexA(glow, 0))
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(m.x, m.y, m.r * 6, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    seed()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [count, color])

  return (
    <canvas
      ref={canvasRef}
      className={`fireflies ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
}

// "#rrggbb" + alpha -> rgba()
function hexA(hex, a) {
  const h = hex.replace('#', '')
  const n =
    h.length === 3
      ? h
          .split('')
          .map((c) => c + c)
          .join('')
      : h
  const r = parseInt(n.slice(0, 2), 16)
  const g = parseInt(n.slice(2, 4), 16)
  const b = parseInt(n.slice(4, 6), 16)
  return `rgba(${r},${g},${b},${a})`
}

import { useEffect, useRef } from 'react'

/*
 * The pond. A fixed watercolor layer pinned behind the whole site — it drifts
 * slowly in place and never scrolls, so every page floats over the same still
 * water. The muse is a Japanese garden pond at dusk: green-dominant pigment
 * pooling in still water, creams as the light on its surface, a single breath
 * of warm brown as the least/lightest accent.
 *
 * Built as a plain 2D canvas (not a WebGL fluid sim): it paints a full,
 * deterministic frame on mount, so the green is visible the instant the page
 * loads — it never depends on splats accumulating over time. Soft overlapping
 * radial pools, each on its own slow sine drift, redrawn every frame. The whole
 * thing is composited 'multiply' over the cream paper via CSS, so it reads as
 * pigment soaking the page, never a flat overlay.
 */

// Green-dominant. Creams sit near paper (barely darken under multiply); the
// lone warm pool is the lightest, least-present accent.
const POOLS = [
  { x: 0.74, y: 0.30, r: 0.62, c: [70, 104, 52],  a: 0.42, ax: 0.05, ay: 0.04, sp: 0.013, ph: 0.0 }, // forest
  { x: 0.26, y: 0.66, r: 0.58, c: [122, 158, 126], a: 0.40, ax: 0.06, ay: 0.05, sp: 0.011, ph: 1.7 }, // moss
  { x: 0.52, y: 0.18, r: 0.50, c: [45, 80, 22],    a: 0.30, ax: 0.04, ay: 0.05, sp: 0.009, ph: 3.1 }, // deep forest
  { x: 0.12, y: 0.22, r: 0.46, c: [176, 198, 156], a: 0.34, ax: 0.05, ay: 0.04, sp: 0.012, ph: 4.4 }, // sage
  { x: 0.88, y: 0.78, r: 0.52, c: [96, 132, 70],   a: 0.34, ax: 0.05, ay: 0.06, sp: 0.010, ph: 2.2 }, // moss-lit
  { x: 0.46, y: 0.86, r: 0.44, c: [205, 214, 188], a: 0.30, ax: 0.06, ay: 0.04, sp: 0.014, ph: 5.5 }, // sage-cream
  { x: 0.62, y: 0.54, r: 0.40, c: [150, 120, 64],  a: 0.16, ax: 0.07, ay: 0.05, sp: 0.008, ph: 0.9 }, // warm — least
]

export default function FluidBackground({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    let w = 0, h = 0

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h)
      const maxDim = Math.max(w, h)
      for (const p of POOLS) {
        const drift = t * p.sp
        const cx = (p.x + Math.sin(drift + p.ph) * p.ax) * w
        const cy = (p.y + Math.cos(drift * 0.8 + p.ph) * p.ay) * h
        const rad = p.r * maxDim * (1 + Math.sin(drift * 1.3 + p.ph) * 0.06)
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad)
        const [r, gr, b] = p.c
        g.addColorStop(0,   `rgba(${r},${gr},${b},${p.a})`)
        g.addColorStop(0.5, `rgba(${r},${gr},${b},${p.a * 0.45})`)
        g.addColorStop(1,   `rgba(${r},${gr},${b},0)`)
        ctx.fillStyle = g
        ctx.fillRect(0, 0, w, h)
      }
    }

    resize()

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Deterministic first frame — the pond is green the instant we mount.
    draw(0)

    let raf = 0
    let start = 0
    const loop = (now) => {
      if (!start) start = now
      draw((now - start) * 0.06) // slow, dusk-still drift
      raf = requestAnimationFrame(loop)
    }

    let onResize = null
    if (!reduced) {
      raf = requestAnimationFrame(loop)
      onResize = () => { resize(); draw(0) }
      window.addEventListener('resize', onResize, { passive: true })
    }

    return () => {
      if (raf) cancelAnimationFrame(raf)
      if (onResize) window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className={`fluid-bg ${className}`} aria-hidden="true" />
}

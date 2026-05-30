import { useEffect, useRef } from 'react'
import webGLFluid from 'webgl-fluid'

/*
 * Living watercolor background. A tuned WebGL fluid sim — deliberately NOT the
 * default bright/bloom cliché. One muted moss pigment, autonomous slow splats,
 * fast-settling velocity (calm, not turbulent), transparent so the cream paper
 * and grain read through it. The muse: ink diffusing in still water — a Japanese
 * garden pond. It whispers; the type always wins.
 *
 * Earthy splat tones (normalized to the sim's ~0–0.2 range), cycled slowly so the
 * pond drifts between moss / deep forest / soft soil without ever going rainbow.
 */
const TONES = [
  { r: 0.10, g: 0.19, b: 0.09 }, // moss
  { r: 0.07, g: 0.14, b: 0.06 }, // deep forest
  { r: 0.17, g: 0.16, b: 0.09 }, // soft soil / amber-brown
  { r: 0.13, g: 0.20, b: 0.12 }, // sage-lit green
]

export default function FluidBackground({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return // static wash via CSS fallback; no animation

    const mobile = window.matchMedia('(max-width: 720px)').matches

    webGLFluid(canvas, {
      IMMEDIATE: true,
      AUTO: true,
      INTERVAL: mobile ? 2600 : 1700, // ms between autonomous splats
      TRIGGER: 'hover',
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: mobile ? 512 : 1024,
      CAPTURE_RESOLUTION: 512,
      DENSITY_DISSIPATION: 0.96,  // pigment lingers — a standing pond, slow fade
      VELOCITY_DISSIPATION: 1.6,  // motion settles → calm, but dye stays
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 2.5,                  // very low swirl — still pond, not whirlpool
      SPLAT_RADIUS: 0.40,         // soft, broad blooms
      SPLAT_FORCE: 5200,          // enough spread to bleed across the field
      SPLAT_COUNT: 9,
      COLORFUL: false,
      SPLAT_COLOR: TONES[0],
      SHADING: true,
      PAUSED: false,
      TRANSPARENT: true,
      BLOOM: false,
      SUNRAYS: false,
    })

    // Drift the pigment tone over time by re-seeding SPLAT_COLOR through the
    // hover trigger path. webgl-fluid reads SPLAT_COLOR by reference, so mutating
    // the live object steers subsequent autonomous splats.
    let i = 0
    const drift = setInterval(() => {
      i = (i + 1) % TONES.length
      Object.assign(TONES[0], TONES[i])
    }, 9000)

    return () => clearInterval(drift)
  }, [])

  return <canvas ref={canvasRef} className={`fluid-bg ${className}`} aria-hidden="true" />
}

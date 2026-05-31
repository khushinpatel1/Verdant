/*
 * MuseImage — the per-page foundation layer. One garden muse painting, anchored
 * to the empty side of a hero, long-feathered into the page so its edges dissolve
 * and the content scrolls over it. Generalizes the original Studio plum-moon.
 *
 *  tone="light"  cream-paper heroes — normal blend, gentle green harmonize.
 *  tone="dark"   forest heroes — luminosity blend, so the painting reads as a
 *                tonal ghost in the page's own green, whatever the source colours.
 *  side          which edge the subject hugs ("right" default, "left", "center").
 */
export default function MuseImage({ src, tone = 'light', side = 'right', className = '' }) {
  return (
    <figure className={`muse muse--${tone} muse--${side} ${className}`} aria-hidden="true">
      <img className="muse-img" src={src} alt="" loading="lazy" decoding="async" />
    </figure>
  )
}

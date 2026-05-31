import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import '../styles/vinita.css'

/* Private landing page for Vinita Jayant — not linked anywhere on the
   Verdant site, reachable only by direct URL (/vinita). Rendered outside
   the Verdant Shell, so it carries none of the studio's nav/branding and
   has its own typographic world (Fraunces + Jost). */

export default function Vinita() {
  const portraitRef = useRef(null)

  useEffect(() => {
    document.title = 'Vinita Jayant'

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Apple-grade smooth scroll, scoped to this page (it renders outside the
    // studio Shell, so it carries its own Lenis instance).
    let lenis = null
    let lenisRaf = 0
    if (!reduce) {
      lenis = new Lenis({
        duration: 1.15,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })
      const loop = time => { lenis.raf(time); lenisRaf = requestAnimationFrame(loop) }
      lenisRaf = requestAnimationFrame(loop)
    }

    // Scroll reveal for below-the-fold sections.
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    document.querySelectorAll('.vinita [data-rise]').forEach(el => io.observe(el))

    // Lightweight portrait parallax — no Lenis dependency.
    let raf = 0
    const onScroll = () => {
      if (raf || reduce || !portraitRef.current) return
      raf = requestAnimationFrame(() => {
        const y = window.scrollY
        portraitRef.current.style.transform = `translate3d(0, ${y * -0.06}px, 0)`
        raf = 0
      })
    }
    if (!reduce) window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
      if (lenisRaf) cancelAnimationFrame(lenisRaf)
      if (lenis) lenis.destroy()
    }
  }, [])

  return (
    <main className="vinita">
      {/* Fixed pastel back layer — everything else is foreground and scrolls over it */}
      <div className="vinita-backdrop" aria-hidden="true" />
      <div className="vinita-wrap">

        <header className="vinita-topbar">
          <span className="vinita-mark">VJ</span>
          <span>Fine Fragrance · Product Development</span>
        </header>

        {/* ── Hero ── */}
        <section className="vinita-hero">
          <div>
            <p className="vinita-eyebrow" data-enter style={{ '--d': '0.05s' }}>Vinita Jayant</p>
            <h1 className="vinita-name" data-enter style={{ '--d': '0.15s' }}>
              Beauty,<br />held to a<br /><em>higher standard.</em>
            </h1>
            <p className="vinita-role" data-enter style={{ '--d': '0.4s' }}>
              <strong>Director, Product Development</strong> at Henry Rose —
              the genderless fine fragrance house built on radical ingredient
              transparency.
            </p>
            <div className="vinita-meta" data-enter style={{ '--d': '0.55s' }}>
              <span>Santa Monica, CA</span>
              <span>12+ Years in Beauty</span>
              <span>Cosmetic Science, M.S.</span>
            </div>
          </div>

          <div className="vinita-portrait" ref={portraitRef} data-enter style={{ '--d': '0.3s' }}>
            <figure className="vinita-portrait-frame">
              <img
                className="vinita-portrait-img"
                src="/vinita/portrait.jpg"
                alt="Vinita Jayant"
                loading="eager"
              />
            </figure>
            <figcaption className="vinita-portrait-cap">
              <span>Vinita Jayant</span>
              <span>Henry Rose</span>
            </figcaption>
          </div>
        </section>

        <hr className="vinita-rule" />

        {/* ── Profile ── */}
        <section className="vinita-section">
          <span className="vinita-section-label" data-rise>Profile</span>
          <div data-rise>
            <p className="vinita-lede">
              I develop fragrances that can stand behind their own ingredient
              list — where every component is held to the strictest standards
              for health and safety <em>known today</em>, and every one is
              disclosed.
            </p>
          </div>
        </section>

        <hr className="vinita-rule" />

        {/* ── The Path ── */}
        <section className="vinita-section">
          <span className="vinita-section-label" data-rise>The Path</span>
          <ul className="vinita-path" data-rise>
            <li>
              <span className="vinita-when">Today</span>
              <div>
                <span className="vinita-where">Henry Rose</span>
                <span className="vinita-what">
                  Director of Product Development at Michelle Pfeiffer&rsquo;s
                  clean fragrance house — building from a vetted palette of
                  roughly 300 ingredients where the industry norm is thousands.
                </span>
              </div>
            </li>
            <li>
              <span className="vinita-when">Prior</span>
              <div>
                <span className="vinita-where">Juice Beauty</span>
                <span className="vinita-what">
                  Safe, clean cosmetics development — the through-line of a
                  whole career: better products, fully accountable.
                </span>
              </div>
            </li>
            <li>
              <span className="vinita-when">Earlier</span>
              <div>
                <span className="vinita-where">L&rsquo;Oréal</span>
                <span className="vinita-what">
                  Research &amp; innovation as a chemist at the world&rsquo;s
                  largest beauty company.
                </span>
              </div>
            </li>
            <li>
              <span className="vinita-when">Foundation</span>
              <div>
                <span className="vinita-where">Pharmacist &middot; M.S. Cosmetic Science</span>
                <span className="vinita-what">
                  A scientist&rsquo;s training — pharmacy, then a master&rsquo;s
                  in cosmetic science from Fairleigh Dickinson — underneath
                  everything that came after.
                </span>
              </div>
            </li>
          </ul>
        </section>

        <hr className="vinita-rule" />

        {/* ── Speaking feature (layered image) ── */}
        <section className="vinita-section" style={{ display: 'block' }}>
          <span className="vinita-section-label" data-rise style={{ display: 'block', marginBottom: '1.5rem' }}>On Stage</span>
          <div className="vinita-feature" data-rise>
            <div className="vinita-feature-media">
              {/* Drop a speaking photo at public/vinita/speaking.jpg to replace this wash */}
              <img
                src="/vinita/speaking.jpg"
                alt="Vinita Jayant speaking at the EWG Clean Conference"
                onError={e => { e.currentTarget.style.display = 'none' }}
              />
              <span className="vinita-feature-ph" aria-hidden="true">Speaking · EWG Clean Conference</span>
            </div>
            <div className="vinita-feature-cap">
              <span className="vinita-feature-tag">EWG Clean Conference</span>
              <p>&ldquo;On ingredient transparency, and a new era of accountability in fine fragrance.&rdquo;</p>
            </div>
          </div>
        </section>

        <hr className="vinita-rule" />

        {/* ── Expertise ── */}
        <section className="vinita-section">
          <span className="vinita-section-label" data-rise>Expertise</span>
          <div className="vinita-tags" data-rise>
            <span className="vinita-tag">Product Development</span>
            <span className="vinita-tag">Fine Fragrance</span>
            <span className="vinita-tag">Ingredient Transparency</span>
            <span className="vinita-tag">Cosmetic Science</span>
            <span className="vinita-tag">Clean Beauty</span>
            <span className="vinita-tag">Regulatory · MoCRA</span>
            <span className="vinita-tag">Cradle to Cradle</span>
            <span className="vinita-tag">Safety-First Formulation</span>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="vinita-contact" data-rise>
          <h2 className="vinita-contact-head">
            Let&rsquo;s <em>talk.</em>
          </h2>
          <div className="vinita-links">
            <a className="vinita-link" href="https://www.linkedin.com/in/vinitaj/" target="_blank" rel="noopener noreferrer">
              LinkedIn <span className="vinita-arrow">→</span>
            </a>
            <a className="vinita-link" href="https://www.henryrose.com" target="_blank" rel="noopener noreferrer">
              Henry Rose <span className="vinita-arrow">→</span>
            </a>
          </div>

          <div className="vinita-colophon">
            <span>Vinita Jayant</span>
            <span>Private — by invitation</span>
          </div>
        </section>

      </div>
    </main>
  )
}

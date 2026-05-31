import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import ScrollScene from '../scroll/ScrollScene.jsx'
import Layer from '../scroll/Layer.jsx'
import MediaLayer from '../scroll/MediaLayer.jsx'
import Fireflies from '../scroll/Fireflies.jsx'
import Panel from '../scroll/Panel.jsx'

const icons = {
  seed: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21V10.5" />
      <path d="M12 11C12 7 9 4.6 4.8 4.8 4.6 9 7 11.4 12 11Z" />
      <path d="M12 12.5c.2-3.1 2.4-4.6 5.6-4.4.2 3.2-2 4.7-5.6 4.4Z" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5.5 18.5C5 10.5 11 4.8 19 5.5c.7 8-5 14-13.5 13Z" />
      <path d="M6 18 16.5 7.5" />
    </svg>
  ),
  shears: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.3" />
      <circle cx="6" cy="18" r="2.3" />
      <path d="M7.9 7.4 20 16" />
      <path d="M7.9 16.6 20 8" />
    </svg>
  ),
  tree: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22v-6" />
      <path d="M9.5 19l-2.5-2M14.5 19l2.5-2" />
      <path d="M12 16c4.3 0 7.5-3 7.5-6.8C19.5 5.4 16.3 2.6 12 2.6S4.5 5.4 4.5 9.2C4.5 13 7.7 16 12 16Z" />
    </svg>
  ),
}

const seasons = [
  { num: '01', icon: 'seed',   stage: 'germination', name: 'Plant', body: 'Every product starts as a single principle: what you give us is yours. We design from that seed outward.' },
  { num: '02', icon: 'leaf',   stage: 'vegetative',  name: 'Tend',  body: 'We build in long cycles. A feature takes as long as it takes to feel right — never as long as the sprint allows.' },
  { num: '03', icon: 'shears', stage: 'pruning',     name: 'Prune', body: 'We cut what doesn’t serve you. No dark patterns, no growth hacks, no features that mine your attention.' },
  { num: '04', icon: 'tree',   stage: 'canopy',      name: 'Grow',  body: 'Software that compounds in your favor over seasons — not ours. Built to be lived with, not extracted from.' },
]

export default function Studio() {
  return (
    <main className="studio">

      {/* ── HERO ── layered scroll scene ── */}
      <ScrollScene className="sh-hero" height={120}>
        {/* deepest layer: the moonlit-garden still (video upgrades it later) */}
        <Layer
          className="sh-hero-bg"
          from={{ yPercent: 0, scale: 1.08 }}
          to={{ yPercent: 12, scale: 1.16 }}
        >
          <MediaLayer
            poster="/scenes/hero-moon.jpg"
            alt="A moonlit Japanese garden reflected in a still pond"
            objectPosition="center 42%"
          />
        </Layer>

        {/* cream wash keeps the copy legible over the painting */}
        <div className="sh-hero-scrim" aria-hidden="true" />

        {/* live top-note: drifting motes, not baked into the video */}
        <Fireflies count={16} className="sh-hero-flies" />

        {/* foreground copy: rises faster, softens as you scroll past */}
        <Layer
          className="sh-hero-inner"
          from={{ yPercent: 0, autoAlpha: 1 }}
          to={{ yPercent: -28, autoAlpha: 0.5 }}
        >
          <p className="sh-kicker reveal">
            <span className="sh-kicker-rule" aria-hidden="true" />
            Privacy-First Software Studio
          </p>

          <h1 className="sh-headline reveal" style={{ '--d': '.05s' }}>
            Software grown for <em>people,</em> not advertisers.
          </h1>

          <div className="sh-hero-foot">
            <div className="sh-hero-lead reveal" style={{ '--d': '.12s' }}>
              <p className="sh-sub">
                We build apps with one rule: what you give us stays between us.
                No ads. No tracking. No data sales. Ever.
              </p>
              <div className="sh-hero-actions">
                <Link to="/garden" className="cta-pill cta-pill--filled">Explore the Garden →</Link>
                <Link to="/about" className="cta-pill">Our Ethos</Link>
              </div>
            </div>

            <div className="sh-hero-aside reveal" style={{ '--d': '.18s' }} aria-hidden="true">
              <p className="sh-fieldnote">
                No. 01 / Field Notes
                <strong>Plum &amp; moon · est. spring</strong>
              </p>
            </div>
          </div>
        </Layer>

        {/* editorial product shelf */}
        <div className="sh-shelf">
          <Link to="/garden" className="sh-shelf-row">
            <span className="sh-shelf-name">Garden</span>
            <span className="sh-shelf-tag">01 · Finance · Live</span>
          </Link>
          <Link to="/emerald" className="sh-shelf-row sh-shelf-row--dim">
            <span className="sh-shelf-name">Emerald</span>
            <span className="sh-shelf-tag">02 · Unknown · Soon</span>
          </Link>
        </div>
      </ScrollScene>

      {/* ── MANIFESTO ── */}
      <section className="sh-manifesto">
        <div className="sh-manifesto-inner">

          <div className="sh-manifesto-left">
            <span className="section-label section-label--light reveal">The Verdant Principle</span>
            <h2 className="sh-manifesto-headline reveal" style={{ '--d': '.05s' }}>
              No ads.<br />No tracking.<br /><em>Just software.</em>
            </h2>
            <div className="sh-stats reveal" style={{ '--d': '.12s' }}>
              <div className="sh-stat">
                <span className="sh-stat-value">01</span>
                <span className="sh-stat-label">Products Live</span>
              </div>
              <div className="sh-stat">
                <span className="sh-stat-value">100%</span>
                <span className="sh-stat-label">Built on Privacy</span>
              </div>
              <div className="sh-stat">
                <span className="sh-stat-value">0</span>
                <span className="sh-stat-label">Trackers Shipped</span>
              </div>
            </div>
          </div>

          <div className="sh-manifesto-right">
            <p className="sh-manifesto-body reveal">
              Verdant is a software studio with one operating principle: what you give us is yours.
              We build AAA-quality products that don’t treat your data as inventory — because the
              best software disappears into your life instead of mining it.
            </p>
            <ul className="sh-principles reveal" style={{ '--d': '.08s' }}>
              <li className="sh-principle"><strong>No ads.</strong> Not now, not ever.</li>
              <li className="sh-principle"><strong>No data sales.</strong> Your data isn’t our product.</li>
              <li className="sh-principle"><strong>E2E encryption.</strong> We can’t see it either.</li>
              <li className="sh-principle"><strong>AAA quality.</strong> No prototypes in the wild.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ── SEASONS / APPROACH ── */}
      <section className="sh-seasons">
        <div className="sh-seasons-head reveal">
          <span className="section-label">How the work grows</span>
          <h2 className="sh-seasons-title">
            We don’t ship features. We tend a garden of them.
          </h2>
        </div>
        <div className="sh-seasons-grid">
          {seasons.map((s, i) => (
            <div key={s.num} className="sh-season reveal" style={{ '--d': `${i * 0.07}s` }}>
              <span className="sh-season-icon" aria-hidden="true">{icons[s.icon]}</span>
              <div className="sh-season-meta">
                <span className="sh-season-num">{s.num}</span>
                <span className="sh-season-stage">{s.stage}</span>
              </div>
              <h3 className="sh-season-name">{s.name}</h3>
              <p className="sh-season-body">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="sh-quote">
        <span className="sh-quote-mark reveal" aria-hidden="true">“</span>
        <p className="sh-quote-text reveal" style={{ '--d': '.05s' }}>
          If you’re not paying for the product, <em>you are the product.</em>
          We decided to end that sentence.
        </p>
        <span className="sh-quote-by reveal" style={{ '--d': '.1s' }}>— The Verdant Ethos</span>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="sh-products">
        <div className="sh-products-inner">
          <h2 className="sh-products-label reveal">The Work</h2>
          <div className="sh-products-grid">

            <Panel tone="cream" className="sh-product-panel">
              <Link to="/garden" className="sh-pcard reveal">
                <div className="sh-pcard-top">
                  <span className="sh-pcard-eyebrow">Product 01 · Finance</span>
                  <span className="sh-badge sh-badge--live sh-badge--sm">Live</span>
                </div>
                <h3 className="sh-pcard-name">Garden</h3>
                <p className="sh-pcard-desc">
                  A finance app that treats your money like a living system. Watch it grow, prune
                  what doesn’t serve you, plant for the long season.
                </p>
                <span className="sh-pcard-cta">Plant a Seed →</span>
              </Link>
            </Panel>

            <Panel tone="cream" className="sh-product-panel sh-product-panel--offset">
              <Link to="/emerald" className="sh-pcard sh-pcard--offset reveal" style={{ '--d': '.08s' }}>
                <div className="sh-pcard-top">
                  <span className="sh-pcard-eyebrow">Product 02 · Unknown</span>
                  <span className="sh-badge sh-badge--soon sh-badge--sm">Soon</span>
                </div>
                <h3 className="sh-pcard-name sh-pcard-name--dim">Emerald</h3>
                <p className="sh-pcard-desc">
                  Something is taking root. We’re not ready to say what yet — but it’s growing
                  in the right direction.
                </p>
                <span className="sh-pcard-cta">Watch this space →</span>
              </Link>
            </Panel>

          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="sh-cta-band">
        <div className="sh-cta-band-inner">
          <span className="section-label section-label--light reveal" style={{ justifyContent: 'center' }}>Join the early garden</span>
          <h2 className="sh-cta-band-title reveal" style={{ '--d': '.05s' }}>
            Grow something <em>worth keeping.</em>
          </h2>
          <p className="sh-cta-band-sub reveal" style={{ '--d': '.1s' }}>
            We’re building slowly, by design. Be among the first to plant a plot in Garden.
          </p>
          <div className="reveal" style={{ '--d': '.15s' }}>
            <Link to="/garden" className="cta-pill cta-pill--white">Get Early Access →</Link>
          </div>
        </div>
      </section>

      <Footer from="dark" />
    </main>
  )
}

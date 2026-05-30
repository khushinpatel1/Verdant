import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

const features = [
  {
    number: '01',
    title: 'Privacy, by architecture.',
    body: 'Garden is end-to-end encrypted. Not privacy-policy privacy — technical privacy. Verdant cannot read your data. No one can. Your financial life belongs to you.',
  },
  {
    number: '02',
    title: 'Grove. Your AI advisor.',
    body: "Grove doesn't push products. It doesn't serve ads. It reads your patterns and asks questions — like a good financial advisor who's paid by you, not a bank.",
  },
  {
    number: '03',
    title: 'Plant a Seed.',
    body: 'Small moves, tended over time. Garden turns the anxiety of personal finance into something you can tend. A seed today. A canopy eventually.',
  },
]

/* Hand-drawn botanical marks — line art, moss stroke. One per feature row.
   Sprout, leaf-pair, canopy: the seed → grove arc of the product itself. */
const sprout = (
  <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M60 112 V52" />
    <path d="M60 76 C40 76 26 62 24 42 48 42 60 58 60 76Z" />
    <path d="M60 60 C80 60 94 46 96 26 72 26 60 42 60 60Z" />
    <circle cx="60" cy="40" r="3" />
  </svg>
)
const leaf = (
  <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M30 96 C30 52 56 28 96 24 92 64 66 90 30 96Z" />
    <path d="M30 96 C48 78 66 60 84 42" />
  </svg>
)
const canopy = (
  <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M60 112 V58" />
    <path d="M60 84 L34 64 M60 84 L86 64 M60 70 L42 54 M60 70 L78 54" />
    <circle cx="60" cy="40" r="22" />
  </svg>
)
const marks = [sprout, leaf, canopy]

export default function Garden() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="garden-hero">
        <div className="garden-hero-scrim" aria-hidden="true" />
        <div className="garden-hero-inner">

          <p className="sh-kicker reveal">
            <span className="sh-kicker-rule" aria-hidden="true" />
            Product 01 · Finance · Live
          </p>

          <h1 className="garden-headline reveal" style={{ '--d': '.05s' }}>
            Your money.<br /><em>Your garden.</em><br />Nobody else's.
          </h1>

          <div className="garden-hero-foot">
            <div className="garden-hero-lead reveal" style={{ '--d': '.12s' }}>
              <p className="garden-sub">
                A privacy-first personal finance app. No ads. No tracking. No one looking over
                your shoulder — not even us.
              </p>
              <div className="garden-hero-actions">
                <a href="#waitlist" className="cta-pill cta-pill--filled">Plant a Seed →</a>
                <Link to="/about" className="cta-pill">Our Ethos</Link>
              </div>
            </div>

            <div className="garden-hero-aside reveal" style={{ '--d': '.18s' }} aria-hidden="true">
              <span className="garden-hero-sprig">{sprout}</span>
              <p className="sh-fieldnote">
                No. 01 / Field Notes
                <strong>Encrypted end to end</strong>
              </p>
            </div>
          </div>

          <div className="garden-facts reveal" style={{ '--d': '.24s' }}>
            <div className="garden-fact">
              <span className="garden-fact-value">E2E</span>
              <span className="garden-fact-label">Encrypted Always</span>
            </div>
            <div className="garden-fact">
              <span className="garden-fact-value">0</span>
              <span className="garden-fact-label">Ads · Trackers</span>
            </div>
            <div className="garden-fact">
              <span className="garden-fact-value">100%</span>
              <span className="garden-fact-label">Yours</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="garden-features">
        <div className="garden-features-inner">
          <span className="section-label reveal">What grows here</span>
          {features.map((f, i) => (
            <div key={f.number} className="garden-feature reveal">
              <div className="garden-feature-text">
                <span className="garden-feature-number">{f.number}</span>
                <h2 className="garden-feature-title">{f.title}</h2>
                <p className="garden-feature-body">{f.body}</p>
              </div>
              <div className="garden-feature-mark" aria-hidden="true">{marks[i]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PULL QUOTE ── */}
      <section className="garden-quote">
        <p className="garden-quote-text reveal">
          The best financial advisor is one paid by <em>you,</em> not a bank.
        </p>
        <span className="garden-quote-by reveal" style={{ '--d': '.1s' }}>— Why we built Garden</span>
      </section>

      {/* ── WAITLIST ── */}
      <section className="garden-waitlist" id="waitlist">
        <div className="garden-waitlist-inner">
          <span className="section-label reveal">Early Access</span>
          <h2 className="garden-waitlist-headline reveal" style={{ '--d': '.05s' }}>Be first in the garden.</h2>
          <p className="garden-waitlist-sub reveal" style={{ '--d': '.1s' }}>
            We're growing slowly, by design. Drop your email and we'll reach out when your
            plot is ready.
          </p>
          <form className="garden-waitlist-form reveal" style={{ '--d': '.15s' }} onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              className="garden-waitlist-input"
              placeholder="your@email.com"
              aria-label="Email address"
            />
            <button type="submit" className="cta-pill cta-pill--filled">Plant a Seed</button>
          </form>
          <p className="garden-footer-note">End-to-end encrypted. Verdant cannot see your data.</p>
        </div>
      </section>

      <Footer from="cream" />
    </main>
  )
}

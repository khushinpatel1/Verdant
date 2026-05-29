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

export default function Garden() {
  return (
    <main>
      <section className="garden-hero">
        <div className="sh-blob sh-blob--1" aria-hidden="true" />
        <div className="garden-hero-content">
          <span className="section-label section-label--light reveal">Product 01 · Finance</span>
          <h1 className="garden-headline reveal" style={{ '--d': '.05s' }}>
            Your money.<br /><em>Your garden.</em><br />Nobody else's.
          </h1>
          <p className="garden-sub reveal" style={{ '--d': '.12s' }}>
            A privacy-first personal finance app. No ads. No tracking. No one looking over
            your shoulder — not even us.
          </p>
          <div className="sh-hero-actions reveal" style={{ '--d': '.18s' }}>
            <a href="#waitlist" className="cta-pill cta-pill--white">Plant a Seed →</a>
          </div>
          <div className="garden-stats reveal" style={{ '--d': '.24s' }}>
            <div>
              <span className="garden-stat-value">E2E</span>
              <span className="garden-stat-label">Encrypted Always</span>
            </div>
            <div>
              <span className="garden-stat-value">0</span>
              <span className="garden-stat-label">Ads · Trackers</span>
            </div>
            <div>
              <span className="garden-stat-value">100%</span>
              <span className="garden-stat-label">Yours</span>
            </div>
          </div>
        </div>
      </section>

      <section className="garden-features">
        <div className="garden-features-inner">
          {features.map(f => (
            <div key={f.number} className="garden-feature reveal">
              <div className="garden-feature-text">
                <span className="garden-feature-number">{f.number}</span>
                <h2 className="garden-feature-title">{f.title}</h2>
                <p className="garden-feature-body">{f.body}</p>
              </div>
              <div className="garden-feature-visual" aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

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
            <button type="submit" className="cta-pill">Plant a Seed</button>
          </form>
        </div>
      </section>

      <div className="garden-footer-note">
        <p>End-to-end encrypted. Verdant cannot see your data.</p>
      </div>

      <Footer from="dark" />
    </main>
  )
}

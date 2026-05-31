import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import MuseImage from '../components/MuseImage.jsx'

/* Real captures of the live Garden app, each shot under a different theme + font
   to show off the customization. (Captured from the running prototype.) */
const showcase = [
  { img: 'garden-moss-cream',      screen: 'Garden', theme: 'Moss & Cream',    font: 'Editorial',
    title: 'The whole garden, at a glance.',
    body: 'Net worth, health score, every account — your entire financial life in one calm view. Nothing mined, nothing sold.' },
  { img: 'grow-pale-sage',         screen: 'Grow',   theme: 'Pale Sage',       font: 'Newsstand',
    title: 'Tend the month.',
    body: 'Transactions and budgets you actually want to open. Add one and the balances move in real time — no spreadsheet, no dread.' },
  { img: 'roots-forest-loam',      screen: 'Roots',  theme: 'Forest Loam',     font: 'Spectral',
    title: 'The roots beneath.',
    body: 'Every account, asset and debt — the structure your money actually grows from, laid out without judgement.' },
  { img: 'seeds-midnight-forest',  screen: 'Seeds',  theme: 'Midnight Forest', font: 'Caslon',
    title: 'Plant what matters.',
    body: 'Goals you germinate and tend over seasons. Small moves today, a canopy eventually.' },
  { img: 'grove-eucalyptus',       screen: 'Grove',  theme: 'Eucalyptus',      font: 'Instrument',
    title: 'Grove listens. Quietly.',
    body: 'A private advisor paid by you, never a bank. It reads your patterns and asks better questions — and never sells the answers.' },
]

/* The hero device — the real prototype adding a transaction, numbers changing.
   Cross-fades the captured frames into a slow loop. */
const txFrames = ['tx-1', 'tx-2', 'tx-3', 'tx-4']
function TxLoop() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return
    const id = setInterval(() => setI(x => (x + 1) % txFrames.length), 650)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="gx-phone gx-phone--hero" aria-hidden="true">
      <div className="gx-screen">
        {txFrames.map((f, idx) => (
          <img key={f} src={`/garden/${f}.jpg`} alt=""
               className={`gx-frame${idx === i ? ' on' : ''}`}
               loading={idx === 0 ? 'eager' : 'lazy'} decoding="async" />
        ))}
      </div>
      <span className="gx-notch" aria-hidden="true" />
    </div>
  )
}

export default function Garden() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className="garden-hero">
        <MuseImage src="/art/garden-pond.jpg" tone="light" side="right" />
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

            <div className="garden-hero-aside reveal" style={{ '--d': '.18s' }}>
              <TxLoop />
              <p className="sh-fieldnote" aria-hidden="true">
                Live capture / Add a transaction
                <strong>Numbers move as you plant</strong>
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

      {/* ── REAL-APP SHOWCASE ── alternating themed screenshots of the live app */}
      <section className="garden-showcase">
        <div className="garden-showcase-head reveal">
          <span className="section-label">The app itself</span>
          <h2 className="garden-showcase-title">
            One app. <em>Your</em> garden — themed and lettered to taste.
          </h2>
          <p className="garden-showcase-note">
            Every screen below is the real prototype, each shot under a different theme and
            typeface. Garden bends to you; it never the other way around.
          </p>
        </div>

        {showcase.map((s, i) => (
          <div key={s.img} className={`garden-shot reveal${i % 2 ? ' garden-shot--flip' : ''}`}>
            <div className="gx-phone">
              <div className="gx-screen">
                <img src={`/garden/${s.img}.jpg`} alt={`Garden ${s.screen} screen, ${s.theme} theme`} loading="lazy" decoding="async" />
              </div>
              <span className="gx-notch" aria-hidden="true" />
            </div>
            <div className="garden-shot-text">
              <span className="garden-shot-screen">{s.screen}</span>
              <h3 className="garden-shot-title">{s.title}</h3>
              <p className="garden-shot-body">{s.body}</p>
              <span className="garden-shot-meta">{s.theme} · {s.font}</span>
            </div>
          </div>
        ))}
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

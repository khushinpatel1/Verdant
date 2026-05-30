import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

/* Upcoming roles — framed as plots in the garden, waiting to be planted.
   Reads as intentional growth, not an empty team page. */
const plots = [
  { no: '02', craft: 'Design',      season: 'A future season' },
  { no: '03', craft: 'Engineering', season: 'A future season' },
]

export default function Team() {
  return (
    <main>
      <section className="team-hero">
        <span className="section-label section-label--light reveal">The Studio</span>
        <h1 className="team-hero-headline reveal" style={{ '--d': '.05s' }}>
          The people behind<br /><em>the work.</em>
        </h1>
        <p className="team-hero-sub reveal" style={{ '--d': '.12s' }}>
          A studio of one, by design — every decision from a single pair of hands.
          The garden grows slowly. Seats open by season.
        </p>
      </section>

      <section className="team-roster">
        {/* Featured founder — the planted plot */}
        <Link to="/team/kp" className="team-feature reveal">
          <div className="team-feature-portrait">
            <span className="team-feature-initials">KP</span>
            <span className="team-feature-no" aria-hidden="true">01</span>
          </div>
          <div className="team-feature-body">
            <span className="team-feature-role">Founder · Plot 01</span>
            <h2 className="team-feature-name">KP</h2>
            <p className="team-feature-bio">
              Building Verdant — privacy-first products, made slowly and meant to be
              lived with. Directs the taste; tends every detail.
            </p>
            <span className="team-feature-cta">Read the profile →</span>
          </div>
        </Link>

        {/* Open plots — seats waiting in the garden */}
        <div className="team-plots">
          <span className="team-plots-label reveal">Seasons ahead</span>
          {plots.map((p, i) => (
            <div key={p.no} className="team-plot reveal" style={{ '--d': `${0.06 + i * 0.07}s` }}>
              <span className="team-plot-no" aria-hidden="true">{p.no}</span>
              <div className="team-plot-text">
                <span className="team-plot-craft">{p.craft}</span>
                <span className="team-plot-season">{p.season}</span>
              </div>
              <span className="team-plot-seed" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21V10.5" />
                  <path d="M12 11C12 7 9 4.6 4.8 4.8 4.6 9 7 11.4 12 11Z" />
                  <path d="M12 12.5c.2-3.1 2.4-4.6 5.6-4.4.2 3.2-2 4.7-5.6 4.4Z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </section>

      <Footer from="cream" />
    </main>
  )
}

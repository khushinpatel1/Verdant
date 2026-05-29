import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

export default function Team() {
  return (
    <main>
      <section className="team-header">
        <span className="section-label section-label--light reveal">The Studio</span>
        <h1 className="team-header-headline reveal" style={{ '--d': '.05s' }}>The people behind<br /><em>the work.</em></h1>
      </section>

      <div className="team-grid">

        <Link to="/team/kp" className="team-card reveal">
          <div className="team-avatar">
            <span className="team-avatar-initials">KP</span>
          </div>
          <h2 className="team-card-name">KP</h2>
          <p className="team-card-role">Founder</p>
          <p className="team-card-bio">
            Building Verdant. Focused on privacy-first products and the long game.
          </p>
        </Link>

        <div className="team-card team-card--ghost team-card--offset1 reveal" style={{ '--d': '.08s' }} aria-hidden="true">
          <div className="team-avatar" style={{ background: 'var(--sage)' }} />
          <p className="team-card-ghost-text">Coming soon.</p>
        </div>

        <div className="team-card team-card--ghost team-card--offset2 reveal" style={{ '--d': '.16s' }} aria-hidden="true">
          <div className="team-avatar" style={{ background: 'var(--sage)' }} />
          <p className="team-card-ghost-text">Coming soon.</p>
        </div>

      </div>

      <Footer />
    </main>
  )
}

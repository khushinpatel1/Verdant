import { useParams, Navigate } from 'react-router-dom'
import Footer from '../components/Footer.jsx'

const profiles = {
  kp: {
    name: 'KP',
    title: 'Founder',
    initials: 'KP',
    bio: 'KP is the founder of Verdant Studio. He builds privacy-first products that treat users as people, not data points. Based between cities, working slowly on things that matter.',
    focusAreas: ['Privacy Architecture', 'Product Design', 'Systems Thinking'],
    currently: 'Building Garden — a personal finance app with end-to-end encryption and no ads.',
    background: [
      'Previously in fintech and consumer apps',
      'Studied computer science and design',
      'Interested in the long-term over the immediate',
    ],
    links: [
      { label: 'Twitter / X',  href: '#' },
      { label: 'GitHub',       href: '#' },
      { label: 'Email',        href: 'mailto:kp@verdant.studio' },
    ],
  },
}

export default function Profile() {
  const { slug } = useParams()
  const person   = profiles[slug]

  if (!person) return <Navigate to="/team" replace />

  return (
    <main className="profile-page">
      <div className="profile-inner">

        <div className="profile-left">
          <figure className="profile-plate">
            <span className="profile-plate-mat">
              <span className="profile-plate-field">
                {/* TODO (next build): replace this initials monogram with a real headshot
                    <img> in the same framed plate — reads as placeholder otherwise.
                    See the /vinita page for the pattern. Tracked in memory/batch-b-plan. */}
                <span className="profile-plate-monogram" aria-hidden="true">{person.initials}</span>
              </span>
            </span>
            <figcaption className="profile-plate-cap">
              <span>Plate 01</span>
              <span>{person.title}</span>
            </figcaption>
          </figure>
          <h1 className="profile-name">{person.name}</h1>
          <p className="profile-title">{person.title}</p>
        </div>

        <div className="profile-right">

          <p className="profile-bio">{person.bio}</p>

          <div>
            <span className="profile-block-label">Focus Areas</span>
            <div className="profile-tags">
              {person.focusAreas.map(tag => (
                <span key={tag} className="profile-tag">{tag}</span>
              ))}
            </div>
          </div>

          <div>
            <span className="profile-block-label">Currently</span>
            <p className="profile-currently">{person.currently}</p>
          </div>

          <div>
            <span className="profile-block-label">Background</span>
            <ul className="profile-background">
              {person.background.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <span className="profile-block-label">Connect</span>
            <div className="profile-links">
              {person.links.map(link => (
                <a key={link.label} href={link.href} className="profile-link">
                  {link.label} <span className="profile-link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer from="parchment" />
    </main>
  )
}

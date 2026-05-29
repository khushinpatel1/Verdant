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
          <div className="profile-photo-wrap">
            <svg
              className="profile-photo-deco"
              viewBox="0 0 320 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <ellipse cx="155" cy="200" rx="130" ry="170" fill="#C8D5B9" opacity="0.4" />
              <ellipse cx="210" cy="155" rx="85" ry="110" fill="#7A9E7E" opacity="0.2" />
            </svg>
            <div className="profile-photo">
              <span className="profile-photo-placeholder">{person.initials}</span>
            </div>
          </div>
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

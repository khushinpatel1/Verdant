import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/',        label: 'Studio',  end: true, desc: 'The studio' },
  { to: '/garden',  label: 'Garden',             desc: 'Finance · Live' },
  { to: '/about',   label: 'Ethos',              desc: 'What we believe' },
  { to: '/team',    label: 'Team',               desc: 'The people' },
]

// Pages with a dark background behind the nav — nav text stays cream (light).
// NOTE: '/team' (forest hero) is light, but '/team/:slug' profiles sit on light
// parchment, so they must NOT be light — cream nav on parchment is invisible.
const darkRoutes = ['/emerald', '/about', '/team']

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  const isLight = darkRoutes.some(r => pathname === r)

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`nav${isLight ? ' nav--light' : ''}${scrolled ? ' nav--scrolled' : ''}`}>
        <Link to="/" className="nav-wordmark">Verdant</Link>

        <ul className="nav-links">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/garden" className="nav-cta">Get Early Access</Link>

        <button
          className="nav-hamburger"
          style={{ color: isLight ? 'var(--white)' : 'var(--green)' }}
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`nav-overlay${open ? ' open' : ''}`} role="dialog" aria-label="Navigation menu">
        <button className="nav-overlay-close" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
        <div className="nav-overlay-inner">
          <span className="nav-overlay-eyebrow">
            <span className="nav-overlay-eyebrow-rule" aria-hidden="true" />
            Verdant — Index
          </span>
          <ul className="nav-overlay-links">
            {links.map(({ to, label, end, desc }, i) => (
              <li key={to} style={{ '--i': i }}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) => `nav-overlay-link${isActive ? ' active' : ''}`}
                >
                  <span className="nav-overlay-num" aria-hidden="true">0{i + 1}</span>
                  <span className="nav-overlay-label">{label}</span>
                  <span className="nav-overlay-desc">{desc}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="nav-overlay-foot">
            <span className="nav-overlay-foot-line">Software grown for people, not advertisers.</span>
            <a className="nav-overlay-foot-mail" href="mailto:hello@verdant.studio">hello@verdant.studio</a>
          </div>
        </div>
      </div>
    </>
  )
}

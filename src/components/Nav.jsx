import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/',        label: 'Studio',  end: true },
  { to: '/garden',  label: 'Garden' },
  { to: '/emerald', label: 'Emerald' },
  { to: '/about',   label: 'Ethos' },
  { to: '/team',    label: 'Team' },
]

const darkRoutes = ['/emerald', '/about', '/team']

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  const isLight = darkRoutes.some(r => pathname === r || pathname.startsWith('/team/'))

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
        <ul className="nav-overlay-links">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => `nav-overlay-link${isActive ? ' active' : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

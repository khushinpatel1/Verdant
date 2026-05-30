import { Link } from 'react-router-dom'

export default function Footer({ from = 'white' }) {
  return (
    <footer className={`footer footer--${from}`}>
      <div className="footer-inner">
        <span className="footer-wordmark">Verdant Studio</span>
        <span className="footer-tagline">
          Built for what grows.
          {/* easter egg — a stray jade stone, never signposted → /emerald */}
          <Link to="/emerald" className="footer-egg" aria-label=" " tabIndex={-1}>
            <span aria-hidden="true" />
          </Link>
        </span>
      </div>
    </footer>
  )
}

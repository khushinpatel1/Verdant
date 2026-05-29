export default function Footer({ from = 'white' }) {
  return (
    <footer className={`footer footer--${from}`}>
      <div className="footer-inner">
        <span className="footer-wordmark">Verdant Studio</span>
        <span className="footer-tagline">Built for what grows.</span>
      </div>
    </footer>
  )
}

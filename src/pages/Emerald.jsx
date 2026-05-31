import MuseImage from '../components/MuseImage.jsx'

export default function Emerald() {
  return (
    <main className="emerald-page">
      <MuseImage src="/art/emerald-dusk.jpg" tone="dark" side="center" />
      <div className="emerald-glow" aria-hidden="true" />
      <div className="emerald-shape" aria-hidden="true" />
      <div className="emerald-vignette" aria-hidden="true" />
      <div className="emerald-content">
        <span className="section-label section-label--light reveal" style={{ justifyContent: 'center' }}>Product 02 · Unknown</span>
        <h1 className="emerald-headline reveal" style={{ '--d': '.05s' }}>Something is<br /><em>taking root.</em></h1>
        <p className="emerald-sub reveal" style={{ '--d': '.12s' }}>
          We're not ready to say what it is.<br />
          Watch this space.
        </p>
        <p className="emerald-cipher reveal" style={{ '--d': '.2s' }} aria-hidden="true">germinating — below the surface</p>
      </div>
    </main>
  )
}

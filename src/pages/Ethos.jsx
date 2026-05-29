import Footer from '../components/Footer.jsx'

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
]

function Calendar() {
  const today    = new Date()
  const year     = today.getFullYear()
  const month    = today.getMonth()
  const todayDay = today.getDate()

  const firstDow     = new Date(year, month, 1).getDay()
  const daysInMonth  = new Date(year, month + 1, 0).getDate()

  const cells = []
  for (let i = 0; i < firstDow; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  return (
    <div className="ethos-calendar">
      <div className="ethos-calendar-header">
        <span className="ethos-calendar-month">{MONTHS[month]} {year}</span>
      </div>
      <div className="ethos-calendar-grid">
        {DAYS.map(d => (
          <div key={d} className="ethos-calendar-dow">{d}</div>
        ))}
        {cells.map((day, i) => (
          <div
            key={i}
            className={[
              'ethos-calendar-day',
              day === null       ? 'ethos-calendar-day--empty' : '',
              day === todayDay   ? 'ethos-calendar-day--today'  : '',
            ].filter(Boolean).join(' ')}
          >
            {day ?? ''}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Ethos() {
  return (
    <main>
      <section className="ethos-manifesto">
        <div className="ethos-manifesto-inner">
          <span className="section-label section-label--light reveal">Ethos</span>
          <h1 className="ethos-manifesto-headline reveal" style={{ '--d': '.05s' }}>
            What you give us<br /><em>stays between us.</em>
          </h1>
          <div className="ethos-manifesto-values">
            <div className="ethos-value reveal" style={{ '--d': '.05s' }}>
              <h3 className="ethos-value-title">No ads. Ever.</h3>
              <p className="ethos-value-body">
                We don't sell attention. We don't rent your behavior to advertisers. If
                you're not paying, you're the product — and that model ends here.
              </p>
            </div>
            <div className="ethos-value reveal" style={{ '--d': '.12s' }}>
              <h3 className="ethos-value-title">No trackers.</h3>
              <p className="ethos-value-body">
                Privacy as architecture, not policy. Our systems are designed so that even
                we cannot access what you give us. That's not a promise — it's a technical
                constraint.
              </p>
            </div>
            <div className="ethos-value reveal" style={{ '--d': '.19s' }}>
              <h3 className="ethos-value-title">Built slowly.</h3>
              <p className="ethos-value-body">
                We don't ship for growth metrics. We ship when something is right. Slow is
                smooth. Smooth is fast.
              </p>
            </div>
            <div className="ethos-value reveal" style={{ '--d': '.26s' }}>
              <h3 className="ethos-value-title">One studio.</h3>
              <p className="ethos-value-body">
                Verdant is not a venture-backed startup optimizing for exit. It's a craft
                studio. The work reflects that.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="ethos-howwework">
        <div className="ethos-howwework-inner">
          <span className="section-label reveal">Process</span>
          <h2 className="ethos-howwework-headline reveal" style={{ '--d': '.05s' }}>How we work.</h2>
          <div className="ethos-prose reveal" style={{ '--d': '.1s' }}>
            <p>
              Verdant is a solo studio. That means every decision — design, engineering,
              product — comes from one person. There's no committee. No handoff. No version
              of the work that's been softened by consensus.
            </p>
            <p>
              We build in long cycles. A feature takes as long as it takes to feel right,
              not as long as the sprint allows. This isn't inefficiency — it's how craft
              works. You can feel the difference in the product.
            </p>
            <p>
              We don't do client work. We don't consult. We build our own things, slowly,
              and we ship them when they're ready. If you want to follow along, there's a
              space for that. If you want to collaborate, there might be a season for that
              too.
            </p>
          </div>
        </div>
      </section>

      <section className="ethos-booking">
        <div className="ethos-booking-inner">
          <span className="section-label reveal">Availability</span>
          <h2 className="ethos-booking-headline reveal" style={{ '--d': '.05s' }}>Work with us.</h2>
          <p className="ethos-booking-sub reveal" style={{ '--d': '.1s' }}>Availability coming soon.</p>
          <div className="reveal" style={{ '--d': '.15s' }}><Calendar /></div>
          <p className="ethos-booking-contact">
            Until then — <a href="mailto:hello@verdant.studio">hello@verdant.studio</a>
          </p>
        </div>
      </section>

      <Footer from="cream" />
    </main>
  )
}

import PageHero from '../../components/PageHero/PageHero'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import './ServicePage.css'

const CARDS = [
  {
    img: '/images/service_1.jpg',
    alt: 'Specialized service team',
    title: 'Specialized Service Team',
    text: 'All maintenance personnel receive strict on-the-job training to execute standard maintenance procedures and provide perfect service experience, backed by a strong technical network and management system.',
  },
  {
    img: '/images/service_2.jpg',
    alt: 'Superior spare parts',
    title: 'Superior Spare Parts',
    text: 'All spare parts receive strict testing before delivery. Distribution network covers cities all over north India for rapid supply and timely replacement.',
  },
  {
    img: '/images/service_3.jpg',
    alt: 'Elevator monitoring system',
    title: 'Secure Elevator Monitoring',
    text: '24-hour elevator monitoring with timely alarm, rescue and maintenance inspection — guaranteeing safe operation and convenient elevator management.',
  },
]

const VALUES = [
  { icon: '👥', label: 'Professional Team' },
  { icon: '🔧', label: 'Convenient Service' },
  { icon: '📞', label: 'Service Line' },
  { icon: '🛡', label: 'Professional Maintenance' },
]

export default function ServicePage() {
  return (
    <main>
      <PageHero
        label="After Sales"
        heading="Service &amp; Maintenance"
        text="From installation through to lifetime preventive maintenance — our trained team keeps your elevator running safely and efficiently."
        chips={['Specialized Team', 'Spare Parts', '24-Hour Monitoring', 'Professional Maintenance']}
        dataBg="SERVICE"
      />

      <section className="service-intro">
        <div className="wrap">
          <div className="service-intro-inner">
            <div>
              <SectionLabel>After Sales</SectionLabel>
              <h2 className="service-intro-heading">SHARING Wonder Together</h2>
              <p className="service-intro-body">
                Krupa Elevators provides end-to-end support — from installation through to long-term
                preventive maintenance. Our team is trained to keep your elevator running at peak
                performance for the lifetime of the unit.
              </p>
              <p className="service-intro-body">
                With a distribution network spanning north India and a 24-hour monitoring system,
                we ensure every customer gets rapid, reliable service whenever they need it.
              </p>
            </div>
            <div>
              <img
                src="/images/service_hero.jpg"
                alt="Krupa service team at work"
                className="service-intro-img"
                loading="lazy"
              />
            </div>
          </div>

          <div className="service-cards">
            {CARDS.map(c => (
              <div className="service-card" key={c.title}>
                <img src={c.img} alt={c.alt} className="service-card-img" loading="lazy" />
                <div className="service-card-body">
                  <h3 className="service-card-title">{c.title}</h3>
                  <p className="service-card-text">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="service-values-strip">
        <div className="wrap">
          <div className="service-values-grid">
            {VALUES.map(v => (
              <div className="service-value-item" key={v.label}>
                <div className="service-value-icon">{v.icon}</div>
                <div className="service-value-label">{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

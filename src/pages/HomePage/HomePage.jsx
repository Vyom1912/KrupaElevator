import { Link } from "react-router-dom";
import { useFloorCounter } from "../../hooks/index";
import SectionLabel from "../../components/SectionLabel/SectionLabel";
import { ELEVATORS, ENERGY_FEATURES, ENERGY_STATS } from "../../data/index";
import { HeroRight, serviceRight, serviceTeam, serviceParts, serviceSystem } from "../../image";
import "./HomePage.css";

/* ── Hero ─────────────────────────────────────────────────── */
const CHIPS = [
  "VVVF Drive",
  "PMSM Motor",
  "Regenerative",
  "VDI 4707 A+",
  "ARD",
  "Auto Leveling",
];

function Hero() {
  const floor = useFloorCounter();
  return (
    <section className='hero' aria-label='Hero banner'>
      <div className='hero-left'>
        <span className='hero-tag'>
          <span className='section-label-dash' />
          Reliable Riding Experience
        </span>
        <h1 className='hero-heading'>
          Elevating Your World
          <br />
          with <em>Precision &amp; Style</em>
        </h1>
        <p className='hero-body'>
          Krupa Elevators delivers world-class vertical transportation —
          Passenger, Hospital, Goods, Capsule, Car, Home, MRL and Hydraulic
          elevators — engineered for safety, efficiency and elegance across
          Gujarat, India.
        </p>
        <div className='hero-ctas'>
          <Link to='/products' className='btn-primary'>
            Explore Our Elevators
          </Link>
          <Link to='/contact' className='btn-outline'>
            Get a Quote
          </Link>
        </div>
        <div
          className='hero-floor'
          aria-live='polite'
          aria-label='Floor display'>
          <span className='hero-floor-label'>Floor</span>
          <span className='hero-floor-digit'>{floor}</span>
        </div>
      </div>
      <div className='hero-right'>
        <img
          src={HeroRight}
          alt='Modern building with Krupa elevator installation'
          loading='eager'
        />
        <div className='hero-contact-badge'>
          +91 82008 59171 · info@krupaelevators.com
        </div>
      </div>
    </section>
  );
}

/* ── Strip ────────────────────────────────────────────────── */
function Strip() {
  return (
    <div className='strip'>
      <div className='wrap'>
        <div className='strip-inner'>
          <div className='strip-left'>
            <p className='strip-title'>
              Using high quality gear drive machines and V3F Drives, these lift
              performance is of the highest standard
            </p>
            <div className='strip-chips'>
              {CHIPS.map((c) => (
                <span key={c} className='strip-chip'>
                  {c}
                </span>
              ))}
            </div>
          </div>
          <p className='strip-quote'>
            "A flexible solution that unifies form and function. An all-round
            elevator applicable to multiple building types with outstanding
            architectural flexibility for car door and shaft dimensions. Precise
            assures smooth and safe user experience"
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Why Krupa ────────────────────────────────────────────── */
const WHY_CARDS = [
  {
    title: "Quality Manufacturing",
    text: "In-house facility with quality control at every stage of production.",
  },
  {
    title: "Experienced Team",
    text: "Trained engineers and technicians delivering strict maintenance standards.",
  },
  {
    title: "8 Product Lines",
    text: "Passenger, Hospital, Goods, Capsule, Car, Home, MRL and Hydraulic.",
  },
  {
    title: "5000 kg Max Load",
    text: "Goods and Car elevators rated up to 5000 kg for industrial use.",
  },
];

function WhyKrupa() {
  return (
    <section className='why' aria-labelledby='why-heading'>
      <div className='wrap'>
        <div className='why-inner'>
          <div>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className='why-heading' id='why-heading'>
              Built on Quality,
              <br />
              Backed by Service
            </h2>
            <p className='why-body'>
              Krupa Elevators combines German motor technology, microprocessor
              controls, and skilled local expertise to deliver elevators that
              perform reliably for decades.
            </p>
          </div>
          <div className='why-cards'>
            {WHY_CARDS.map((c) => (
              <div className='why-card' key={c.title}>
                <span className='why-card-title'>{c.title}</span>
                <p className='why-card-text'>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Product Preview ──────────────────────────────────────── */
function ProductPreview() {
  return (
    <section className='product-preview' aria-labelledby='products-preview-h'>
      <div className='wrap'>
        <div className='product-preview-head'>
          <div>
            <SectionLabel>Our Elevator Range</SectionLabel>
            <h2 className='section-heading' id='products-preview-h'>
              Eight Product Lines
            </h2>
            <p className='section-subtext'>
              Residential to industrial — each elevator built to spec with full
              technical documentation.
            </p>
          </div>
          <Link to='/products' className='view-all-link'>
            View All Products →
          </Link>
        </div>

        <div className='product-grid'>
          {ELEVATORS.map((elev) => (
            <Link
              key={elev.id}
              to={`/products#${elev.id}`}
              className='product-card'>
              <div className='product-card-img'>
                <img src={elev.image} alt={elev.imageAlt} loading='lazy' />
              </div>
              <div className='product-card-body'>
                <div className='product-card-num'>{elev.number}</div>
                <div className='product-card-title'>{elev.title}</div>
                <div className='product-card-tagline'>{elev.tagline}</div>
                <div className='product-card-specs'>
                  {elev.specs.slice(0, 2).map((s) => (
                    <div key={s.label} className='product-card-spec'>
                      <strong>{s.value}</strong>
                      {s.label}
                    </div>
                  ))}
                </div>
                <span className='product-card-cta'>View Details →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Tech Preview ─────────────────────────────────────────── */
function TechPreview() {
  const features = ENERGY_FEATURES.slice(0, 3);
  return (
    <section className='tech-preview' aria-labelledby='tech-preview-h'>
      <div className='wrap'>
        <div className='tech-preview-inner'>
          <div>
            <SectionLabel>Engineering</SectionLabel>
            <h2 className='section-heading' id='tech-preview-h'>
              Smart Technology Inside Every Elevator
            </h2>
            <p className='section-subtext' style={{ marginBottom: "28px" }}>
              VDI 4707 Energy Efficiency Class A+ certified drives, German PMSM
              motors, and regenerative energy recovery on every premium unit.
            </p>
            {features.map((f) => (
              <div className='tech-feature' key={f.mark}>
                <div className='tech-mark'>{f.mark}</div>
                <div>
                  <p className='tech-feat-title'>{f.heading}</p>
                  <p className='tech-feat-body'>{f.text}</p>
                </div>
              </div>
            ))}
            <Link to='/technology' className='tech-preview-link'>
              Explore Technology →
            </Link>
          </div>
          <div>
            <img
              src={serviceRight}
              alt='Elevator drive technology'
              className='tech-right-img'
              loading='lazy'
            />
            <div className='tech-stats'>
              {ENERGY_STATS.map((s) => (
                <div className='tech-stat' key={s.label}>
                  <span className='tech-stat-val'>{s.value}</span>
                  <span className='tech-stat-lbl'>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Service Preview ──────────────────────────────────────── */
const SVC_CARDS = [
  {
    img: serviceTeam,
    alt: "Service team",
    title: "Specialized Service Team",
    text: "Strict on-the-job training, strong technical network and management system.",
  },
  {
    img: serviceParts,
    alt: "Spare parts",
    title: "Superior Spare Parts",
    text: "All parts tested before delivery. Rapid supply network across north India.",
  },
  {
    img: serviceSystem,
    alt: "Monitoring",
    title: "24-Hour Monitoring",
    text: "Remote elevator monitoring with timely alarm, rescue and maintenance.",
  },
];

function ServicePreview() {
  return (
    <section className='service-preview' aria-labelledby='svc-preview-h'>
      <div className='wrap'>
        <div className='service-preview-head'>
          <div>
            <SectionLabel style={{ color: "rgba(255,255,255,.55)" }}>
              After Sales
            </SectionLabel>
            <h2 className='service-preview-title' id='svc-preview-h'>
              SHARING Wonder Together
            </h2>
          </div>
          <Link to='/service' className='service-preview-more'>
            Learn More →
          </Link>
        </div>
        <div className='service-cards'>
          {SVC_CARDS.map((c) => (
            <div className='service-card' key={c.title}>
              <img
                src={c.img}
                alt={c.alt}
                className='service-card-img'
                loading='lazy'
              />
              <div className='service-card-body'>
                <p className='service-card-title'>{c.title}</p>
                <p className='service-card-text'>{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact CTA ──────────────────────────────────────────── */
const CONTACT_INFO = [
  { icon: "📞", label: "Phone", val: "+91 82008 59171" },
  { icon: "✉️", label: "Email", val: "info@krupaelevators.com" },
  { icon: "🌐", label: "Website", val: "www.krupaelevators.com" },
  {
    icon: "📍",
    label: "Address",
    val: "FF-6 Sagun Enclave, Beside Nikol Community Hall,\nNr. Manohar Vill Char Rasta, Nikol,\nAhmedabad – 382430, Gujarat",
  },
];

function ContactCTA() {
  return (
    <section className='contact-cta' aria-labelledby='cta-h'>
      <div className='wrap'>
        <div className='contact-cta-inner'>
          <div>
            <div className='section-label contact-cta-label'>
              <span className='section-label-dash' />
              Get In Touch
            </div>
            <h2 className='contact-cta-heading' id='cta-h'>
              Ready to Install?
              <br />
              Let's Talk.
            </h2>
            <p className='contact-cta-body'>
              From initial consultation to installation and long-term
              maintenance — our team is ready to help with every step of your
              elevator project.
            </p>
            <div className='contact-cta-btns'>
              <Link to='/contact' className='btn-primary'>
                Request a Quote
              </Link>
              <Link to='/products' className='btn-outline'>
                View Products
              </Link>
            </div>
          </div>
          <div className='contact-info-list'>
            {CONTACT_INFO.map((item) => (
              <div className='contact-info-item' key={item.label}>
                <span className='contact-info-icon'>{item.icon}</span>
                <div>
                  <div className='contact-info-label'>{item.label}</div>
                  <div
                    className='contact-info-val'
                    style={{ whiteSpace: "pre-line" }}>
                    {item.val}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Page ─────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Strip />
      <WhyKrupa />
      <ProductPreview />
      <TechPreview />
      <ServicePreview />
      <ContactCTA />
    </main>
  );
}

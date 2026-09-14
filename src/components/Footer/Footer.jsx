import { Link } from "react-router-dom";
import "./Footer.css";

const PRODUCTS = [
  { label: "Passenger Elevator", to: "/products#passenger" },
  { label: "Hospital Elevator", to: "/products#hospital" },
  { label: "Goods Elevator", to: "/products#goods" },
  { label: "Capsule Elevator", to: "/products#capsule" },
  { label: "Car Elevator", to: "/products#car" },
  { label: "Home Elevator", to: "/products#home" },
  { label: "MRL Elevator", to: "/products#mrl" },
  { label: "Hydraulic Elevator", to: "/products#hydraulic" },
];

const COMPANY = [
  { label: "Technology", to: "/technology" },
  { label: "Service", to: "/service" },
  { label: "Contact", to: "/contact" },
];

const CONTACT = [
  { icon: "📞", val: "+91 82008 59171" },
  { icon: "✉️", val: "info@krupaelevators.com" },
  { icon: "🌐", val: "www.krupaelevators.com" },
  {
    icon: "📍",
    val: "FF-6 Sagun Enclave, Beside Nikol Community Hall,\nNr. Manohar Vill Char Rasta, Nikol,\nAhmedabad – 382430, Gujarat",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='footer' role='contentinfo'>
      {/* ── Zone 1 — white logo band ── */}
      <div className='footer-band'>
        <div className='wrap'>
          <div className='footer-band-inner'>
            <Link to='/' aria-label='Krupa Elevators home'>
              <img
                src='/images/logo.png'
                alt='Krupa Elevators'
                className='footer-logo'
              />
            </Link>
            <p className='footer-tagline'>
              Reliable Riding Experience — Passenger, Hospital, Goods,
              <br />
              Capsule, Car, Home, MRL &amp; Hydraulic elevators across Gujarat.
            </p>
            <div className='footer-certs'>
              <span className='footer-cert'>ISO Certified</span>
              <span className='footer-cert'>VDI 4707 A+</span>
              <span className='footer-cert'>German Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Zone 2 — dark grid ── */}
      {/* <div className="footer-main">
        <div className="wrap">
          <div className="footer-grid">
          
          <div className="footer-col">
              <h4 className="footer-col-title">Products</h4>
              <ul className="footer-links">
                {PRODUCTS.map(p => (
                  <li key={p.to}><Link to={p.to}>{p.label}</Link></li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-col-title">Company</h4>
              <ul className="footer-links">
                {COMPANY.map(c => (
                  <li key={c.to}><Link to={c.to}>{c.label}</Link></li>
                ))}
              </ul>
              <div className="footer-hr" />
              <h4 className="footer-col-title">Quick Specs</h4>
              <ul className="footer-links">
                <li><span>Max Capacity: 5000 kg</span></li>
                <li><span>Max Speed: 2.0 m/s</span></li>
                <li><span>Max Stops: 24</span></li>
                <li><span>8 Product Lines</span></li>
              </ul>
            </div>

            
            <div className="footer-col footer-contact-col">
              <h4 className="footer-col-title">Contact Us</h4>
              {CONTACT.map(c => (
                <div key={c.val} className="footer-contact-item">
                  <span className="footer-contact-icon">{c.icon}</span>
                  <span className="footer-contact-val">{c.val}</span>
                </div>
              ))}
              <Link to="/contact" className="footer-quote-btn">Get a Free Quote →</Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* ── Zone 3 — bottom bar ── */}
      <div className='footer-bar'>
        <div className='wrap'>
          <div className='footer-bar-inner'>
            <p>
              © {year} Krupa Elevators, Ahmedabad, Gujarat, India. All Rights
              Reserved.
            </p>
            <p>
              Engineered for Safety · Built for Performance · Designed for Life
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

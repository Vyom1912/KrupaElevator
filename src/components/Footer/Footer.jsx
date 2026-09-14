import { Link } from "react-router-dom";
import { logo } from "../../image";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='footer' role='contentinfo'>
      <div className='footer-band'>
        <div className='wrap'>
          <div className='footer-band-inner'>
            <Link to='/' aria-label='Krupa Elevators home'>
              <img src={logo} alt='Krupa Elevators' className='footer-logo' />
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

import React from "react";
import { Link } from "react-router-dom";
import { HeroRight } from "../../image";
// import "./Hero.css";
function Hero() {
  const CHIPS = [
    "VVVF Drive",
    "PMSM Motor",
    "Regenerative",
    "VDI 4707 A+",
    "ARD",
    "Auto Leveling",
  ];
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

export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import { SectionLabel } from "../index";
import { ELEVATORS } from "../../data/index";
function HomeProductPreview() {
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

export default HomeProductPreview;

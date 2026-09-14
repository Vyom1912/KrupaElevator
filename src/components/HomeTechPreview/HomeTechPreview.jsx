import React from "react";
import { Link } from "react-router-dom";
import { SectionLabel } from "../index";
import { ENERGY_FEATURES, ENERGY_STATS } from "../../data/index";
import { serviceRight } from "../../image";
function HomeTechPreview() {
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

export default HomeTechPreview;

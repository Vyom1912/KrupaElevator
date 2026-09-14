import React from "react";
import { SectionLabel } from "../../components/index";
import { ENERGY_FEATURES, ENERGY_STATS } from "../../data/index";
import { serviceRight } from "../../image";
function TechEnergy() {
  return (
    <section className='tech-section-alt' id='energy'>
      <div className='wrap'>
        <div className='energy-layout'>
          <div>
            <SectionLabel>Engineering Excellence</SectionLabel>
            <h2 className='energy-heading'>
              Energy Efficiency &amp; Smart Technology
            </h2>
            <p className='energy-body'>
              Every Krupa elevator is engineered for minimal energy consumption.
              VDI 4707 Energy Efficiency Class A+ certified.
            </p>
            {ENERGY_FEATURES.map((f) => (
              <div className='energy-feature' key={f.mark}>
                <div className='energy-mark'>{f.mark}</div>
                <div>
                  <p className='energy-feat-title'>{f.heading}</p>
                  <p className='energy-feat-body'>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img
              src={serviceRight}
              alt='Elevator technology'
              className='energy-right-img'
              loading='lazy'
            />
            <div className='energy-stats'>
              {ENERGY_STATS.map((s) => (
                <div className='energy-stat' key={s.label}>
                  <span className='energy-stat-val'>{s.value}</span>
                  <span className='energy-stat-lbl'>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechEnergy;

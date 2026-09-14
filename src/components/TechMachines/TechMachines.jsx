import React from "react";
import { MACHINES, CONTROL_PANELS } from "../../data/index";
import { SectionLabel } from "../../components/index";

function TechMachines() {
  return (
    <section className='tech-section-alt' id='machines'>
      <div className='wrap'>
        <div className='section-head'>
          <SectionLabel>Drive Technology</SectionLabel>
          <h2 className='section-heading'>Geared &amp; Gearless Machines</h2>
          <p className='section-subtext'>
            Using high quality gear drive machines and V3F Drives, these lift
            performance is of the highest standard.
          </p>
        </div>

        <div className='machines-grid'>
          {MACHINES.map((mt) => (
            <div key={mt.heading}>
              <h3 className='machine-type-heading'>{mt.heading}</h3>
              <p className='machine-type-body'>{mt.description}</p>
              <div className='machine-models'>
                {mt.models.map((m) => (
                  <div className='machine-card' key={m.name}>
                    <span className='machine-card-icon'>
                      {m.src ? (
                        <img src={m.src} alt={m.alt} loading='lazy' />
                      ) : null}
                    </span>
                    <span className='machine-card-icon-alt'>{m.alt}</span>
                    <div className='machine-card-name'>{m.name}</div>
                    <ul className='machine-card-specs'>
                      {m.specs.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className='control-panel-box'>
          <h3 className='control-panel-heading'>
            Control Panel — Microprocessor High Technology
          </h3>
          <p className='control-panel-body'>
            Every Krupa elevator is equipped with a microprocessor-based high
            technology control panel for precision operation, fault diagnostics
            and group management.
          </p>
          <div className='control-panel-grid'>
            {CONTROL_PANELS.map((cp) => (
              <div className='control-card' key={cp.name}>
                <span className='control-card-icon'>
                  <img src={cp.icon.src} alt={cp.icon.alt} loading='lazy' />
                </span>
                <div className='control-card-name'>{cp.name}</div>
                <p className='control-card-desc'>{cp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechMachines;

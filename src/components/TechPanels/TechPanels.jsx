import React from "react";
import { useState } from "react";
import { SectionLabel } from "../../components/index";
import { capsuleGlass } from "../../image";
import { PANEL_CARDS } from "../../data/index";
function TechPanels() {
  return (
    <section className='tech-section' id='panels'>
      <div className='wrap'>
        <div className='panels-layout'>
          <div>
            <SectionLabel>Operating Panels</SectionLabel>
            <h2 className='panels-heading'>COP / LOP Operating Panels</h2>
            <p className='panels-body'>
              Complete range from basic illuminated push-buttons (KE-COP-001) to
              full touch-screen glass panels (KE-COP-012).
            </p>
            <div className='panels-cards'>
              {PANEL_CARDS.map((pc) => (
                <div className='panel-card' key={pc.range}>
                  <span className='panel-card-title'>{pc.range}</span>
                  <p className='panel-card-desc'>{pc.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='panels-sticky-img'>
            <img
              src={capsuleGlass}
              alt='COP panel inside capsule elevator'
              loading='lazy'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechPanels;

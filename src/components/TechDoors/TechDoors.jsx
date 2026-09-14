import React from "react";
import { SectionLabel } from "../../components/index";
import { DOOR_COLUMNS } from "../../data/index";

function TechDoors() {
  return (
    <section className='tech-section-alt' id='door-types'>
      <div className='wrap'>
        <div className='section-head'>
          <SectionLabel>Door Options</SectionLabel>
          <h2 className='section-heading'>Manual &amp; Automatic Door Types</h2>
          <p className='section-subtext'>
            Full range of door types for every elevator — from collapsible gates
            to full-vision glass doors.
          </p>
        </div>
        <div className='doors-grid'>
          {DOOR_COLUMNS.map((col) => (
            <div key={col.type}>
              <img
                src={col.heroImage}
                alt={col.heroAlt}
                className='door-col-img'
                loading='lazy'
              />
              <h3 className='door-col-heading'>{col.heading}</h3>
              <p className='door-col-body'>{col.intro}</p>
              <div className='door-thumbs'>
                {col.thumbs.map((t) => (
                  <img key={t.src} src={t.src} alt={t.alt} loading='lazy' />
                ))}
              </div>
              <div className='door-list'>
                {col.items.map((item) => (
                  <div className='door-item' key={item.title}>
                    <span className={`door-badge ${item.badge}`}>
                      {item.badge}
                    </span>
                    <span className='door-item-title'>{item.title}</span>
                    <p className='door-item-desc'>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechDoors;

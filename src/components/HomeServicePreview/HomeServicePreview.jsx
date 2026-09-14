import React from "react";
import { Link } from "react-router-dom";
import {
  serviceRight,
  serviceTeam,
  serviceParts,
  serviceSystem,
} from "../../image";
import { SectionLabel } from "../index";
function HomeServicePreview() {
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

export default HomeServicePreview;

import React from "react";
import { SectionLabel } from "../index";
function WhyUs() {
  const WHY_CARDS = [
    {
      title: "Quality Manufacturing",
      text: "In-house facility with quality control at every stage of production.",
    },
    {
      title: "Experienced Team",
      text: "Trained engineers and technicians delivering strict maintenance standards.",
    },
    {
      title: "8 Product Lines",
      text: "Passenger, Hospital, Goods, Capsule, Car, Home, MRL and Hydraulic.",
    },
    {
      title: "5000 kg Max Load",
      text: "Goods and Car elevators rated up to 5000 kg for industrial use.",
    },
  ];

  return (
    <section className='why' aria-labelledby='why-heading'>
      <div className='wrap'>
        <div className='why-inner'>
          <div>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className='why-heading' id='why-heading'>
              Built on Quality,
              <br />
              Backed by Service
            </h2>
            <p className='why-body'>
              Krupa Elevators combines German motor technology, microprocessor
              controls, and skilled local expertise to deliver elevators that
              perform reliably for decades.
            </p>
          </div>
          <div className='why-cards'>
            {WHY_CARDS.map((c) => (
              <div className='why-card' key={c.title}>
                <span className='why-card-title'>{c.title}</span>
                <p className='why-card-text'>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;

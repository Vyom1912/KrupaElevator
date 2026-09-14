import React from "react";
import { useState } from "react";
import { SectionLabel } from "../../components/index";
import { INTERIOR_CARDS, TIER_TABS, FINISH_OPTIONS } from "../../data/index";

function Interiors() {
  const [tier, setTier] = useState("all");
  const visible =
    tier === "all"
      ? INTERIOR_CARDS
      : INTERIOR_CARDS.filter((c) => c.tier === tier);

  return (
    <section className='tech-section-dark' id='interiors'>
      <div className='wrap'>
        <div className='section-head'>
          <SectionLabel className='interiors-head-label'>
            Cabin Interiors
          </SectionLabel>
          <h2 className='interiors-head-heading'>
            Interior Design &amp; Finishes
          </h2>
          <p className='interiors-head-text'>
            From KEC-01 Basic to KEC-11 Premium — distinct wall panels,
            ceilings, flooring and handrail options, fully customizable.
          </p>
        </div>

        <div className='tier-tabs' role='tablist'>
          {TIER_TABS.map((t) => (
            <button
              key={t.value}
              className={`tier-tab${tier === t.value ? " active" : ""}`}
              onClick={() => setTier(t.value)}
              role='tab'
              aria-selected={tier === t.value}>
              {t.label}
            </button>
          ))}
        </div>

        <div className='interiors-grid'>
          {visible.map((card) => (
            <div className='interior-card' key={card.code}>
              <img
                src={card.image}
                alt={card.alt}
                className='interior-card-img'
                loading='lazy'
              />
              <div className='interior-card-body'>
                <span className='interior-card-code'>{card.code}</span>
                <p className='interior-card-text'>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='finishes-table-wrap'>
          <h3 className='finishes-heading'>Available Finish Options</h3>
          <div className='table-wrap'>
            <table className='spec-table' aria-label='Interior finish options'>
              <thead>
                <tr>
                  <th>Element</th>
                  <th>Options Available</th>
                </tr>
              </thead>
              <tbody>
                {FINISH_OPTIONS.map((r) => (
                  <tr key={r.element}>
                    <td>
                      <strong>{r.element}</strong>
                    </td>
                    <td>{r.options}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Interiors;

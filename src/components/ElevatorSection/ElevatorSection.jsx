import React from "react";
import { useState } from "react";
import { SpecTable } from "../../components/index";
function ElevatorSection({ elev }) {
  const [open, setOpen] = useState(false);
  const hasDetail = elev.typeRows?.length > 0 || elev.features?.length > 0;
  const hasTables = elev.tables?.length > 0;

  return (
    <article
      className='elev-section'
      id={elev.id}
      aria-labelledby={`${elev.id}-h`}>
      <div className='elev-bar' aria-hidden='true' />

      <div className='elev-hero'>
        <div className='elev-img-box'>
          <img src={elev.heroImage} alt={elev.imageAlt} loading='lazy' />
          <span className='elev-img-num' aria-hidden='true'>
            {elev.number}
          </span>
        </div>
        <div className='elev-meta'>
          <div className='elev-meta-tag'>{elev.context}</div>
          <h2 className='elev-meta-title' id={`${elev.id}-h`}>
            {elev.title}
          </h2>
          <p className='elev-meta-tagline'>{elev.tagline}</p>
          <p className='elev-meta-desc'>{elev.description}</p>
        </div>
      </div>

      <div
        className='elev-specs'
        aria-label={`${elev.title} key specifications`}>
        {elev.specs.map((s) => (
          <div className='elev-spec' key={s.label}>
            <span className='elev-spec-val'>{s.value}</span>
            <span className='elev-spec-lbl'>{s.label}</span>
          </div>
        ))}
      </div>

      {(hasDetail || hasTables) && (
        <>
          <button
            className={`elev-toggle${open ? " open" : ""}`}
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}>
            <span>
              {open
                ? "Hide Technical Details"
                : "View Technical Specifications"}
            </span>
            <span className='elev-toggle-arrow'>{open ? "▲" : "▼"}</span>
          </button>

          {open && (
            <div className='elev-body'>
              {hasDetail && (
                <div className='elev-detail-grid'>
                  {elev.typeRows?.length > 0 && (
                    <div className='elev-detail-panel'>
                      <h4 className='elev-detail-panel-title'>Model Types</h4>
                      {elev.typeRows.map((r, i) => (
                        <div className='elev-type-row' key={i}>
                          <span className='elev-type-label'>{r.label}</span>
                          <span className='elev-type-detail'>{r.detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {elev.features?.length > 0 && (
                    <div className='elev-detail-panel'>
                      <h4 className='elev-detail-panel-title'>Key Features</h4>
                      <ul className='elev-feature-list'>
                        {elev.features.map((f, i) => (
                          <li key={i}>
                            <span className='elev-feature-check'>✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              {hasTables && (
                <div className='elev-tables'>
                  {elev.tables.map((t, i) => (
                    <SpecTable
                      key={i}
                      heading={t.heading}
                      cols={t.cols}
                      rows={t.rows}
                      note={t.note}
                      ariaLabel={`${elev.title} — ${t.heading}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </article>
  );
}

export default ElevatorSection;

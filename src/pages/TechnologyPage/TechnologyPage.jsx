import { useState } from 'react'
import PageHero from '../../components/PageHero/PageHero'
import SectionLabel from '../../components/SectionLabel/SectionLabel'
import SpecTable from '../../components/SpecTable/SpecTable'
import {
  MACHINES,
  CONTROL_PANELS,
  DOOR_COLUMNS,
  INTERIOR_CARDS,
  TIER_TABS,
  FINISH_OPTIONS,
  PANEL_CARDS,
  ENERGY_FEATURES,
  ENERGY_STATS,
} from '../../data/index'
import './TechnologyPage.css'

/* ── Machines ─────────────────────────────────────────────── */
function Machines() {
  return (
    <section className="tech-section-alt" id="machines">
      <div className="wrap">
        <div className="section-head">
          <SectionLabel>Drive Technology</SectionLabel>
          <h2 className="section-heading">Geared &amp; Gearless Machines</h2>
          <p className="section-subtext">
            Using high quality gear drive machines and V3F Drives, these lift performance is of the highest standard.
          </p>
        </div>

        <div className="machines-grid">
          {MACHINES.map(mt => (
            <div key={mt.heading}>
              <h3 className="machine-type-heading">{mt.heading}</h3>
              <p className="machine-type-body">{mt.description}</p>
              <div className="machine-models">
                {mt.models.map(m => (
                  <div className="machine-card" key={m.name}>
                    <span className="machine-card-icon">{m.icon}</span>
                    <div className="machine-card-name">{m.name}</div>
                    <ul className="machine-card-specs">
                      {m.specs.map(s => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="control-panel-box">
          <h3 className="control-panel-heading">Control Panel — Microprocessor High Technology</h3>
          <p className="control-panel-body">
            Every Krupa elevator is equipped with a microprocessor-based high technology control panel
            for precision operation, fault diagnostics and group management.
          </p>
          <div className="control-panel-grid">
            {CONTROL_PANELS.map(cp => (
              <div className="control-card" key={cp.name}>
                <span className="control-card-icon">{cp.icon}</span>
                <div className="control-card-name">{cp.name}</div>
                <p className="control-card-desc">{cp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── SVG Drawings ─────────────────────────────────────────── */
function ManualSVG() {
  return (
    <svg viewBox="0 0 300 320" width="270" height="308" aria-label="Manual door hoistway plan" role="img" className="tech-svg">
      <title>Manual Door Elevator — Hoistway Plan</title>
      <rect x="20" y="20" width="240" height="220" fill="none" stroke="#14181B" strokeWidth="3"/>
      <rect x="50" y="48" width="180" height="164" fill="#e4f6f6" stroke="#01969C" strokeWidth="2"/>
      <rect x="100" y="210" width="80" height="12" fill="#EB5A07" opacity="0.8" rx="1"/>
      <text x="140" y="221" textAnchor="middle" fontSize="9" fill="#fff" fontFamily="Inter,sans-serif">E — Entrance</text>
      <line x1="20" y1="10" x2="260" y2="10" stroke="#555" strokeWidth="1"/>
      <line x1="20" y1="7" x2="20" y2="13" stroke="#555" strokeWidth="1"/>
      <line x1="260" y1="7" x2="260" y2="13" stroke="#555" strokeWidth="1"/>
      <text x="140" y="8" textAnchor="middle" fontSize="10" fill="#333" fontFamily="Space Grotesk,sans-serif" fontWeight="700">L — Lift-Well Width</text>
      <line x1="272" y1="20" x2="272" y2="240" stroke="#555" strokeWidth="1"/>
      <line x1="269" y1="20" x2="275" y2="20" stroke="#555" strokeWidth="1"/>
      <line x1="269" y1="240" x2="275" y2="240" stroke="#555" strokeWidth="1"/>
      <text x="289" y="130" textAnchor="middle" fontSize="10" fill="#333" fontFamily="Space Grotesk,sans-serif" fontWeight="700" transform="rotate(90,289,130)">K — Depth</text>
      <line x1="50" y1="130" x2="230" y2="130" stroke="#01969C" strokeWidth="1" strokeDasharray="5,3"/>
      <text x="140" y="125" textAnchor="middle" fontSize="13" fill="#01969C" fontWeight="700">A</text>
      <line x1="140" y1="48" x2="140" y2="210" stroke="#01969C" strokeWidth="1" strokeDasharray="5,3"/>
      <text x="126" y="132" fontSize="13" fill="#01969C" fontWeight="700">B</text>
      <rect x="20" y="256" width="240" height="46" fill="#f1f3f3" stroke="#DADFE1" strokeWidth="1" rx="1"/>
      <text x="34" y="275" fontSize="10" fill="#555" fontFamily="Inter,sans-serif">Machine Room K = 300 + C + 600</text>
      <text x="34" y="289" fontSize="10" fill="#555" fontFamily="Inter,sans-serif">L = 300 + D + 1500</text>
      <text x="20" y="250" fontSize="9" fill="#8A9297" fontFamily="Inter,sans-serif">C = Well Width · D = Well Depth · All dims mm</text>
    </svg>
  )
}

function AutoSVG() {
  return (
    <svg viewBox="0 0 300 320" width="270" height="308" aria-label="Auto door hoistway plan" role="img" className="tech-svg">
      <title>Automatic Door Elevator — Hoistway Plan</title>
      <rect x="20" y="20" width="240" height="220" fill="none" stroke="#14181B" strokeWidth="3"/>
      <rect x="50" y="48" width="180" height="164" fill="#e4f6f6" stroke="#01969C" strokeWidth="2"/>
      <rect x="82" y="210" width="46" height="11" fill="#01969C" rx="1"/>
      <rect x="172" y="210" width="46" height="11" fill="#01969C" rx="1"/>
      <line x1="128" y1="215" x2="85" y2="215" stroke="#EB5A07" strokeWidth="1.5"/>
      <polygon points="85,212 80,215 85,218" fill="#EB5A07"/>
      <line x1="170" y1="215" x2="215" y2="215" stroke="#EB5A07" strokeWidth="1.5"/>
      <polygon points="215,212 220,215 215,218" fill="#EB5A07"/>
      <text x="140" y="232" textAnchor="middle" fontSize="9" fill="#EB5A07" fontFamily="Inter,sans-serif">E — Auto Opening</text>
      <line x1="20" y1="10" x2="260" y2="10" stroke="#555" strokeWidth="1"/>
      <line x1="20" y1="7" x2="20" y2="13" stroke="#555" strokeWidth="1"/>
      <line x1="260" y1="7" x2="260" y2="13" stroke="#555" strokeWidth="1"/>
      <text x="140" y="8" textAnchor="middle" fontSize="10" fill="#333" fontFamily="Space Grotesk,sans-serif" fontWeight="700">L — Lift-Well Width</text>
      <line x1="272" y1="20" x2="272" y2="240" stroke="#555" strokeWidth="1"/>
      <line x1="269" y1="20" x2="275" y2="20" stroke="#555" strokeWidth="1"/>
      <line x1="269" y1="240" x2="275" y2="240" stroke="#555" strokeWidth="1"/>
      <text x="289" y="130" textAnchor="middle" fontSize="10" fill="#333" fontFamily="Space Grotesk,sans-serif" fontWeight="700" transform="rotate(90,289,130)">K — Depth</text>
      <line x1="50" y1="130" x2="230" y2="130" stroke="#01969C" strokeWidth="1" strokeDasharray="5,3"/>
      <text x="140" y="125" textAnchor="middle" fontSize="13" fill="#01969C" fontWeight="700">A</text>
      <line x1="140" y1="48" x2="140" y2="210" stroke="#01969C" strokeWidth="1" strokeDasharray="5,3"/>
      <text x="126" y="132" fontSize="13" fill="#01969C" fontWeight="700">B</text>
      <rect x="20" y="256" width="240" height="46" fill="#f1f3f3" stroke="#DADFE1" strokeWidth="1" rx="1"/>
      <text x="34" y="275" fontSize="10" fill="#555" fontFamily="Inter,sans-serif">Machine Room K = 300 + C + 300</text>
      <text x="34" y="289" fontSize="10" fill="#555" fontFamily="Inter,sans-serif">L = 600 + D + 1500  |  O/H: 4900 mm</text>
      <text x="20" y="250" fontSize="9" fill="#8A9297" fontFamily="Inter,sans-serif">C = Well Width · D = Well Depth · All dims mm</text>
    </svg>
  )
}

/* ── Drawings dimension tables ────────────────────────────── */
const M_COLS = ['Persons','Kg','Plat.A','Plat.B','Well C','Well D','Entrance E','Door','Machine K','Machine L','Speed m/s','Pit','O/H']
const M_ROWS = [
  ['5','340','950','1300','1350','1650','760','Collapsible','300+C+600','300+D+1500','≤0.68','1600','4900'],
  ['5','340','1300','1000','1700','1300','760','Swing','600+C+300','600+D+1500','','',''],
  ['6','408','1200','1200','1600','1500','800','Imperforate','300+C+300','600+D+1500','','',''],
  ['8','544','1500','1200','1900','1500','800','Imperforate','600+C+300','300+D+1500','','',''],
  ['13','884','1900','1500','2400','1850','900','—','600+C+600','300+D+1500','','',''],
]
const A_COLS = ['Persons','Kg','Plat.A','Plat.B','Well C','Well D','Entrance E','Door','Machine K','Machine L','Speed m/s','Pit','O/H']
const A_ROWS = [
  ['6','408','1200','1300','1700','1800','700','Auto','300+C+300','600+D+1500','≤1.5','1600','4900'],
  ['8','544','1500','1330','2000','1800','800','Auto','300+C+300','600+D+1500','','',''],
  ['10','680','1650','1450','2150','2000','800','Auto','600+C+600','600+D+1500','','',''],
  ['13','884','1900','1500','2400','2000','900','Auto','600+C+600','600+D+1500','','',''],
]

/* ── Drawings ─────────────────────────────────────────────── */
function Drawings() {
  return (
    <section className="tech-section" id="drawings">
      <div className="wrap">
        <div className="section-head">
          <SectionLabel>Technical Drawings</SectionLabel>
          <h2 className="section-heading">Hoistway &amp; Shaft Dimensions</h2>
          <p className="section-subtext">
            Standard dimension tables for manual and automatic door elevators. All dimensions in mm.
            Hoist way walls min. 230 mm brick or 150 mm R.C.C.
          </p>
        </div>

        <div className="drawing-block">
          <h3 className="drawing-block-heading">Manual Door Elevator</h3>
          <div className="drawing-layout">
            <div className="drawing-svg-box"><ManualSVG /></div>
            <div>
              <SpecTable cols={M_COLS} rows={M_ROWS} note="All dimensions in mm. General data." ariaLabel="Manual door dimensions" />
            </div>
          </div>
        </div>

        <div className="drawing-block">
          <h3 className="drawing-block-heading">Automatic Door Elevator</h3>
          <div className="drawing-layout">
            <div className="drawing-svg-box"><AutoSVG /></div>
            <div>
              <SpecTable cols={A_COLS} rows={A_ROWS} note="All dimensions in mm. General data." ariaLabel="Auto door dimensions" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Doors ────────────────────────────────────────────────── */
function Doors() {
  return (
    <section className="tech-section-alt" id="door-types">
      <div className="wrap">
        <div className="section-head">
          <SectionLabel>Door Options</SectionLabel>
          <h2 className="section-heading">Manual &amp; Automatic Door Types</h2>
          <p className="section-subtext">
            Full range of door types for every elevator — from collapsible gates to full-vision glass doors.
          </p>
        </div>
        <div className="doors-grid">
          {DOOR_COLUMNS.map(col => (
            <div key={col.type}>
              <img src={col.heroImage} alt={col.heroAlt} className="door-col-img" loading="lazy" />
              <h3 className="door-col-heading">{col.heading}</h3>
              <p className="door-col-body">{col.intro}</p>
              <div className="door-thumbs">
                {col.thumbs.map(t => <img key={t.src} src={t.src} alt={t.alt} loading="lazy" />)}
              </div>
              <div className="door-list">
                {col.items.map(item => (
                  <div className="door-item" key={item.title}>
                    <span className={`door-badge ${item.badge}`}>{item.badge}</span>
                    <span className="door-item-title">{item.title}</span>
                    <p className="door-item-desc">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Interiors ────────────────────────────────────────────── */
function Interiors() {
  const [tier, setTier] = useState('all')
  const visible = tier === 'all' ? INTERIOR_CARDS : INTERIOR_CARDS.filter(c => c.tier === tier)
  return (
    <section className="tech-section-dark" id="interiors">
      <div className="wrap">
        <div className="section-head">
          <SectionLabel className="interiors-head-label">Cabin Interiors</SectionLabel>
          <h2 className="interiors-head-heading">Interior Design &amp; Finishes</h2>
          <p className="interiors-head-text">
            From KEC-01 Basic to KEC-11 Premium — distinct wall panels, ceilings, flooring and
            handrail options, fully customizable.
          </p>
        </div>

        <div className="tier-tabs" role="tablist">
          {TIER_TABS.map(t => (
            <button
              key={t.value}
              className={`tier-tab${tier === t.value ? ' active' : ''}`}
              onClick={() => setTier(t.value)}
              role="tab"
              aria-selected={tier === t.value}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="interiors-grid">
          {visible.map(card => (
            <div className="interior-card" key={card.code}>
              <img src={card.image} alt={card.alt} className="interior-card-img" loading="lazy" />
              <div className="interior-card-body">
                <span className="interior-card-code">{card.code}</span>
                <p className="interior-card-text">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="finishes-table-wrap">
          <h3 className="finishes-heading">Available Finish Options</h3>
          <div className="table-wrap">
            <table className="spec-table" aria-label="Interior finish options">
              <thead><tr><th>Element</th><th>Options Available</th></tr></thead>
              <tbody>
                {FINISH_OPTIONS.map(r => (
                  <tr key={r.element}>
                    <td><strong>{r.element}</strong></td>
                    <td>{r.options}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Panels ───────────────────────────────────────────────── */
function Panels() {
  return (
    <section className="tech-section" id="panels">
      <div className="wrap">
        <div className="panels-layout">
          <div>
            <SectionLabel>Operating Panels</SectionLabel>
            <h2 className="panels-heading">COP / LOP Operating Panels</h2>
            <p className="panels-body">
              Complete range from basic illuminated push-buttons (KE-COP-001) to full
              touch-screen glass panels (KE-COP-012).
            </p>
            <div className="panels-cards">
              {PANEL_CARDS.map(pc => (
                <div className="panel-card" key={pc.range}>
                  <span className="panel-card-title">{pc.range}</span>
                  <p className="panel-card-desc">{pc.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="panels-sticky-img">
            <img src="/images/capsule_glass.jpg" alt="COP panel inside capsule elevator" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Energy ───────────────────────────────────────────────── */
function Energy() {
  return (
    <section className="tech-section-alt" id="energy">
      <div className="wrap">
        <div className="energy-layout">
          <div>
            <SectionLabel>Engineering Excellence</SectionLabel>
            <h2 className="energy-heading">Energy Efficiency &amp; Smart Technology</h2>
            <p className="energy-body">
              Every Krupa elevator is engineered for minimal energy consumption.
              VDI 4707 Energy Efficiency Class A+ certified.
            </p>
            {ENERGY_FEATURES.map(f => (
              <div className="energy-feature" key={f.mark}>
                <div className="energy-mark">{f.mark}</div>
                <div>
                  <p className="energy-feat-title">{f.heading}</p>
                  <p className="energy-feat-body">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <img
              src="/images/service_hero.jpg"
              alt="Elevator technology"
              className="energy-right-img"
              loading="lazy"
            />
            <div className="energy-stats">
              {ENERGY_STATS.map(s => (
                <div className="energy-stat" key={s.label}>
                  <span className="energy-stat-val">{s.value}</span>
                  <span className="energy-stat-lbl">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Page ─────────────────────────────────────────────────── */
export default function TechnologyPage() {
  return (
    <main>
      <PageHero
        label="Engineering"
        heading="Technology Inside Every Elevator"
        text="German PMSM motors, VDI 4707 Class A+ drives, regenerative energy recovery, and microprocessor control panels — built into every Krupa elevator."
        chips={['VVVF Drive', 'PMSM Motor', 'Regenerative', 'LED Standby', 'ARD', 'VDI 4707 A+']}
        dataBg="TECHNOLOGY"
      />
      <Machines />
      <Drawings />
      <Doors />
      <Interiors />
      <Panels />
      <Energy />
    </main>
  )
}

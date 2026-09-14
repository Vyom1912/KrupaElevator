import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import PageHero from "../../components/PageHero/PageHero";
import SpecTable from "../../components/SpecTable/SpecTable";
import { ELEVATORS, FILTER_TABS } from "../../data/index";
import "./ProductsPage.css";

/* ── Category accent colours ─────────────────────────────── */
const CAT_DOT = {
  residential: "#01969C",
  commercial: "#EB5A07",
  hospital: "#C0392B",
  industrial: "#8E44AD",
};

function catColor(cats) {
  if (cats.includes("hospital")) return CAT_DOT.hospital;
  if (cats.includes("industrial")) return CAT_DOT.industrial;
  if (cats.includes("commercial")) return CAT_DOT.commercial;
  return CAT_DOT.residential;
}

/* ── Scroll-spy hook ─────────────────────────────────────── */
function useProductSpy(ids) {
  const [active, setActive] = useState(ids[0] ?? "");
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const threshold = window.scrollY + 90;
        let cur = ids[0] ?? "";
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          if (el.getBoundingClientRect().top + window.scrollY <= threshold)
            cur = id;
        }
        setActive(cur);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);
  return active;
}

/* ── Sidebar ─────────────────────────────────────────────── */
function Sidebar({ activeId, filter, onFilter, elevators }) {
  const activeRef = useRef(null);

  // Scroll the sidebar nav to keep the active item visible — but only when
  // the sidebar itself is scrollable (desktop). On mobile the sidebar is a
  // horizontal bar at the top, so scrollIntoView would move the whole page.
  useEffect(() => {
    const sidebar = activeRef.current?.closest(".sidebar");
    if (!sidebar) return;
    // Only auto-scroll when the sidebar is in its vertical sticky mode
    if (sidebar.scrollHeight > sidebar.clientHeight) {
      activeRef.current?.scrollIntoView({
        block: "nearest",
        behavior: "smooth",
      });
    }
  }, [activeId]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const navH =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--nav-h"),
      ) || 64;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - navH - 6,
      behavior: "smooth",
    });
  };

  return (
    <aside className='sidebar' aria-label='Elevator navigation'>
      {/* Brand strip */}
      <div className='sidebar-brand'>
        <span className='sidebar-brand-label'>Elevator Range</span>
        {/* <span className='sidebar-brand-count'>{elevators.length} types</span> */}
      </div>

      {/* Filter pills */}
      {/* <div className="sidebar-filter">
        <span className="sidebar-filter-lbl">Filter</span>
        <div className="sidebar-pills">
          {FILTER_TABS.map(t => (
            <button
              key={t.value}
              className={`sidebar-pill${filter === t.value ? ' active' : ''}`}
              onClick={() => onFilter(t.value)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div> */}

      <div className='sidebar-rule' />

      {/* Nav items */}
      <nav className='sidebar-nav' aria-label='Jump to elevator'>
        {elevators.map((elev) => {
          const isActive = activeId === elev.id;
          const dot = catColor(elev.categories);
          return (
            <a
              key={elev.id}
              href={`#${elev.id}`}
              ref={isActive ? activeRef : null}
              className={`sidebar-item${isActive ? " active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(elev.id);
              }}
              aria-current={isActive ? "page" : undefined}>
              <span
                className='sidebar-item-dot'
                style={{ background: isActive ? dot : "transparent" }}
              />
              <span className='sidebar-item-num'>{elev.number}</span>
              <span className='sidebar-item-body'>
                <span className='sidebar-item-title'>{elev.shortTitle}</span>
                <span className='sidebar-item-ctx'>
                  {elev.context.split("·")[0].trim()}
                </span>
              </span>
              <span className='sidebar-cat-dot' style={{ background: dot }} />
            </a>
          );
        })}
      </nav>

      <div className='sidebar-rule' />

      {/* CTA */}
      <div className='sidebar-cta'>
        <p className='sidebar-cta-title'>Need a custom spec?</p>
        <p className='sidebar-cta-body'>
          Our engineers will size the right elevator for your building.
        </p>
        <Link to='/contact' className='sidebar-cta-btn'>
          Get a Free Quote
        </Link>
      </div>
    </aside>
  );
}

/* ── Single elevator section ─────────────────────────────── */
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

      {/* Image + meta row */}
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

      {/* Spec strip */}
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

      {/* Expandable details */}
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

/* ── Page ─────────────────────────────────────────────────── */
export default function ProductsPage() {
  const [filter, setFilter] = useState("all");
  const location = useLocation();
  const scrolledRef = useRef(false);

  const visible = useMemo(
    () =>
      filter === "all"
        ? ELEVATORS
        : ELEVATORS.filter((e) => e.categories.includes(filter)),
    [filter],
  );
  const ids = useMemo(() => visible.map((e) => e.id), [visible]);
  const activeId = useProductSpy(ids);

  /* Hash scroll on load */
  useEffect(() => {
    if (scrolledRef.current) return;
    const hash = location.hash.replace("#", "");
    if (!hash) return;
    const t = setTimeout(() => {
      const el = document.getElementById(hash);
      if (!el) return;
      const navH =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--nav-h",
          ),
        ) || 64;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - navH - 6,
        behavior: "smooth",
      });
      scrolledRef.current = true;
    }, 120);
    return () => clearTimeout(t);
  }, [location.hash]);

  return (
    <main>
      <PageHero
        label='Our Elevator Range'
        heading='Complete Vertical Transportation Solutions'
        text='Eight product lines — from 2-person home elevators to 5000 kg industrial goods lifts — each with full technical specifications.'
        chips={[
          "Passenger",
          "Hospital",
          "Goods",
          "Capsule",
          "Car",
          "Home",
          "MRL",
          "Hydraulic",
        ]}
        dataBg='PRODUCTS'
      />

      <div className='products-layout'>
        <Sidebar
          activeId={activeId}
          filter={filter}
          onFilter={setFilter}
          elevators={visible}
        />
        <div className='products-content'>
          {visible.map((elev) => (
            <ElevatorSection key={elev.id} elev={elev} />
          ))}
        </div>
      </div>
    </main>
  );
}

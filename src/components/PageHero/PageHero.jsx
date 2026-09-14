import SectionLabel from '../SectionLabel/SectionLabel'

export default function PageHero({ label, heading, text, chips = [], dataBg = '' }) {
  return (
    <div className="page-hero" data-title={dataBg} aria-label={`${heading} page hero`}>
      <div className="wrap">
        <SectionLabel className="page-hero-label">{label}</SectionLabel>
        <h1 className="page-hero-heading" dangerouslySetInnerHTML={{ __html: heading }} />
        {text && <p className="page-hero-text">{text}</p>}
        {chips.length > 0 && (
          <div className="page-hero-chips" aria-label="Page highlights">
            {chips.map(c => <span key={c} className="page-hero-chip">{c}</span>)}
          </div>
        )}
      </div>
    </div>
  )
}

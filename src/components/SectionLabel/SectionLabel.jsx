export default function SectionLabel({ children, className = '', style }) {
  return (
    <div className={`section-label ${className}`.trim()} style={style}>
      <span className="section-label-dash" />
      {children}
    </div>
  )
}

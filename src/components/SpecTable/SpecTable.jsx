import './SpecTable.css'

export default function SpecTable({ heading, cols, rows, note, ariaLabel }) {
  return (
    <>
      {heading && <h4 className="spec-table-heading">{heading}</h4>}
      <div className="table-wrap">
        <table className="spec-table" aria-label={ariaLabel ?? heading}>
          <thead>
            <tr>{cols.map(c => <th key={c}>{c}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>
                {row.map((cell, ci) => <td key={ci}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="spec-note">{note}</p>}
    </>
  )
}

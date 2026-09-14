import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { logo } from '../../image'
import './Navbar.css'

const PAGES = [
  { label: 'Home',       to: '/' },
  { label: 'Products',   to: '/products' },
  { label: 'Technology', to: '/technology' },
  { label: 'Service',    to: '/service' },
  { label: 'Contact',    to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    const handler = e => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation" ref={navRef}>
      <div className="navbar-inner">
        <Link to="/" aria-label="Krupa Elevators home">
          <img src={logo} alt="Krupa Elevators" className="navbar-logo" />
        </Link>

        <ul className={`navbar-links${open ? ' open' : ''}`} id="navbar-links">
          {PAGES.map(p => (
            <li key={p.to}>
              <NavLink
                to={p.to}
                end={p.to === '/'}
                className={({ isActive }) => isActive ? 'active' : undefined}
                onClick={() => setOpen(false)}
              >
                {p.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="navbar-cta" onClick={() => setOpen(false)}>
          Get a Quote
        </Link>

        <button
          className="navbar-burger"
          aria-label="Toggle navigation"
          aria-expanded={open ? 'true' : 'false'}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

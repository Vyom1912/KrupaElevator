import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

/* Global styles — design tokens and base reset only.
   Navbar, Footer, and page-level CSS are imported inside their own components. */
import './styles/tokens.css'

// import.meta.env.BASE_URL is set by Vite to match the `base` in vite.config.js.
// Locally it's '/', on GitHub Pages it's '/KrupaElevator/'.
// BrowserRouter needs this so internal links resolve correctly in both environments.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

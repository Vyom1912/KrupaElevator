import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

/* Layout — Navbar and Footer each import their own CSS */
import { Navbar, Footer } from './components/index'

/* Pages — each page imports its own CSS */
import { HomePage, ProductsPage, TechnologyPage, ServicePage, ContactPage } from './pages/index'

function ScrollReset() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <Navbar />
      <ScrollReset />
      <Routes>
        <Route path="/"           element={<HomePage />} />
        <Route path="/products"   element={<ProductsPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/service"    element={<ServicePage />} />
        <Route path="/contact"    element={<ContactPage />} />
        <Route path="*"           element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}

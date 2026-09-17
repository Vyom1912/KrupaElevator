import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BrochureModal from "./components/BrochureModal";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Interior from "./pages/Interior";
import Technologies from "./pages/Technologies";
import Services from "./pages/Services";
import Specifications from "./pages/Specifications";
import Contact from "./pages/Contact";
import { companyData } from "./data/companyData";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [brochureModalPage, setBrochureModalPage] = useState(1);

  const handleOpenBrochure = (page = 1) => {
    setBrochureModalPage(page);
    setBrochureModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900">
        <Navbar onOpenBrochure={() => handleOpenBrochure(1)} />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenBrochure={() => handleOpenBrochure(1)}
                  onOpenBrochurePage={(pg) => handleOpenBrochure(pg)}
                />
              }
            />
            <Route
              path="/products"
              element={
                <Products onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />
              }
            />
            <Route
              path="/interior"
              element={
                <Interior onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />
              }
            />
            <Route
              path="/technologies"
              element={
                <Technologies onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />
              }
            />
            <Route
              path="/services"
              element={
                <Services onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />
              }
            />
            <Route
              path="/specifications"
              element={
                <Specifications onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact onOpenBrochure={() => handleOpenBrochure(1)} />
              }
            />
            <Route
              path="*"
              element={
                <Home
                  onOpenBrochure={() => handleOpenBrochure(1)}
                  onOpenBrochurePage={(pg) => handleOpenBrochure(pg)}
                />
              }
            />
          </Routes>
        </main>

        <Footer onOpenBrochure={() => handleOpenBrochure(1)} />

        {/* Global Brochure Modal */}
        <BrochureModal
          isOpen={brochureModalOpen}
          onClose={() => setBrochureModalOpen(false)}
          initialPage={brochureModalPage}
        />

        {/* Floating Quick Action Contact Widget */}
        <div className="fixed bottom-5 right-5 z-40 flex flex-col space-y-2.5">
          <a
            href={`https://wa.me/${companyData.contacts.whatsapp}?text=Hello%20KRUPA%20Elevators%2C%20I%20would%20like%20to%20know%20more%20about%20your%20elevators.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all"
            aria-label="WhatsApp Us"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-6 h-6" />
          </a>
          <a
            href={`tel:${companyData.contacts.phoneRaw}`}
            className="w-12 h-12 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all"
            aria-label="Call Direct"
            title="Call +91 82008 59171"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>
      </div>
    </Router>
  );
}

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Phone } from "lucide-react";
import WhatsAppIcon from "./components/common/WhatsAppIcon";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BrochureModal from "./components/BrochureModal";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ElevatorDetail from "./pages/ElevatorDetail";
import DoorSystems from "./pages/DoorSystems";
import Interior from "./pages/Interior";
import Technologies from "./pages/Technologies";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { companyData } from "./data/companyData";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      // Timeout allows async DOM render and image layout calculation
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const topOffset = 85; // Fixed navbar height offset
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - topOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 120);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  // Clean legacy '#' hashes from old cached/bookmarked URLs (e.g. #/elevators -> /elevators)
  useEffect(() => {
    if (window.location.hash.startsWith("#/")) {
      const cleanSubpath = window.location.hash.slice(2);
      const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
      window.history.replaceState(null, "", (base ? base : "") + "/" + cleanSubpath);
    }
  }, []);

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
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans antialiased text-slate-900">
        <Navbar onOpenBrochure={() => handleOpenBrochure(1)} />

        <main className="flex-1">
          <Routes>
            {/* 1. Home */}
            <Route
              path="/"
              element={
                <Home
                  onOpenBrochure={() => handleOpenBrochure(1)}
                  onOpenBrochurePage={(pg) => handleOpenBrochure(pg)}
                />
              }
            />

            {/* 2. Elevators Hub & Detail Pages */}
            <Route
              path="/elevators"
              element={
                <Products onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />
              }
            />
            <Route
              path="/elevators/:elevatorId"
              element={
                <ElevatorDetail onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />
              }
            />
            <Route path="/products" element={<Navigate to="/elevators" replace />} />

            {/* Door Systems */}
            <Route
              path="/doors"
              element={
                <DoorSystems onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />
              }
            />
            <Route
              path="/doors/:category/:doorId"
              element={
                <DoorSystems onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />
              }
            />

            {/* 3. Interiors */}
            <Route
              path="/interiors"
              element={
                <Interior onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />
              }
            />
            <Route
              path="/interiors/:id"
              element={
                <Interior onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />
              }
            />
            <Route path="/interior" element={<Navigate to="/interiors" replace />} />

            {/* 4. Technology */}
            <Route
              path="/technology"
              element={
                <Technologies onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />
              }
            />
            <Route path="/technologies" element={<Navigate to="/technology" replace />} />

            {/* 5. Service */}
            <Route
              path="/services"
              element={
                <Services onOpenBrochurePage={(pg) => handleOpenBrochure(pg)} />
              }
            />
            <Route path="/service" element={<Navigate to="/services" replace />} />

            {/* 6. Contact / Enquiry */}
            <Route
              path="/contact"
              element={
                <Contact onOpenBrochure={() => handleOpenBrochure(1)} />
              }
            />

            {/* Legacy / Helper Routes */}
            <Route path="/specifications" element={<Navigate to="/elevators" replace />} />
            <Route
              path="/projects"
              element={
                <Projects onOpenBrochure={() => handleOpenBrochure(1)} />
              }
            />

            {/* Catch-all */}
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

        {/* Global Technical Brochure Modal */}
        <BrochureModal
          isOpen={brochureModalOpen}
          initialPage={brochureModalPage}
          onClose={() => setBrochureModalOpen(false)}
        />

        {/* Fixed Quick Action Call & WhatsApp Dock */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
          {/* Quick Call Button */}
          <a
            href="tel:+919727764868"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 hover:bg-brand-teal text-white shadow-lg border border-slate-700/60 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-brand-teal/40"
            title="Call Technical Desk: +91 97277 64868"
            aria-label="Call Krupa Elevators"
          >
            <Phone className="w-5 h-5 text-brand-teal group-hover:text-white transition-colors" />
            <span className="absolute right-14 px-3 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-md border border-slate-700/50">
              Call: +91 97277 64868
            </span>
          </a>

          {/* Quick WhatsApp Button */}
          <a
            href={`https://wa.me/${companyData.contacts.whatsapp}?text=${encodeURIComponent(
              "Hello Krupa Elevators, I would like to inquire about elevator specifications and request a quotation."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
            title="Chat with Technical Engineer on WhatsApp"
            aria-label="WhatsApp technical consultation"
          >
            {/* Subtle animated ambient ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
            <WhatsAppIcon className="w-7 h-7 text-white relative z-10" />
            <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-slate-900/95 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-md border border-slate-700/50">
              WhatsApp Us
            </span>
          </a>
        </div>
      </div>
    </Router>
  );
}

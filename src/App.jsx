import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Phone, MessageSquare } from "lucide-react";
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

        {/* Fixed Quick Action WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
          <a
            href={`https://wa.me/${companyData.contacts.whatsapp}?text=${encodeURIComponent(
              "Hello Krupa Elevators, I would like to inquire about elevator specifications and request a site survey."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
            title="Chat with Technical Engineer on WhatsApp"
            aria-label="WhatsApp technical consultation"
          >
            <MessageSquare className="w-6 h-6 fill-white" />
          </a>
        </div>
      </div>
    </Router>
  );
}

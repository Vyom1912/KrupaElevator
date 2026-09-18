import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, X, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { companyData } from "../data/companyData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Elevators", path: "/elevators" },
    { name: "Interiors", path: "/interiors" },
    { name: "Technology", path: "/technology" },
    { name: "Service", path: "/services" },
    { name: "Contact / Enquiry", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  // Close when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Scroll listener for elevation effect & smooth reading progress
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile navigation when tapping/clicking anywhere outside the navbar
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick, { passive: true });
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header ref={navRef} className="sticky top-0 z-50 transition-all duration-200">
      {/* Slim Top Utility Strip */}
      <div className="bg-slate-950 text-slate-400 text-[11px] py-1 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-5">
            <a
              href={`tel:${companyData.contacts.phoneRaw}`}
              className="flex items-center space-x-1.5 text-slate-300 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-3 h-3 text-brand-orange" />
              <span className="font-semibold">{companyData.contacts.phone}</span>
            </a>
            <a
              href={`mailto:${companyData.contacts.emailPrimary}`}
              className="hidden md:flex items-center space-x-1.5 hover:text-brand-teal transition-colors"
            >
              <Mail className="w-3 h-3 text-brand-teal" />
              <span>{companyData.contacts.emailPrimary}</span>
            </a>
            <span className="hidden lg:inline text-slate-500">|</span>
            <div className="hidden lg:flex items-center space-x-1 text-slate-400">
              <MapPin className="w-3 h-3 text-slate-500" />
              <span>Nikol & Bakrol Hub, Ahmedabad</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-[11px]">
            <Link
              to="/interior"
              className="inline-flex items-center space-x-1 text-slate-300 hover:text-brand-teal transition-colors"
            >
              <Sparkles className="w-3 h-3 text-brand-teal" />
              <span className="font-medium">11 Cabin Finishes</span>
            </Link>
            <span className="text-slate-600">&bull;</span>
            <Link
              to="/elevators#civil-matrix"
              className="text-slate-300 hover:text-brand-orange transition-colors font-medium"
            >
              CAD Dimensions
            </Link>
          </div>
        </div>
      </div>

      {/* Main Compact Navbar */}
      <nav
        className={`bg-white/95 backdrop-blur-md border-b transition-all duration-200 ${scrolled
            ? "shadow-sm border-slate-200/90 py-0"
            : "border-slate-200/70 py-0.5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-15">
            {/* Logo Only (no text, no slogan) */}
            <Link
              to="/"
              className="flex items-center shrink-0 group focus:outline-none"
              aria-label="Krupa Elevators Home"
            >
              <img
                src={companyData.logo}
                alt="Krupa Elevators"
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links - Compact, Refined & Elegant */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-semibold transition-all ${active
                        ? "text-brand-teal bg-brand-teal-light font-bold"
                        : "text-slate-600 hover:text-brand-teal hover:bg-slate-100/70"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Right Action Button - Compact Pill */}
            <div className="hidden lg:flex items-center space-x-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold shadow-xs hover:bg-brand-orange-hover transition-all transform active:scale-95"
              >
                <span>Request Survey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Menu & Quick CTA */}
            <div className="flex items-center lg:hidden space-x-2">
              <Link
                to="/contact"
                className="px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold shadow-xs"
              >
                Quote
              </Link>
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-brand-orange" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Backdrop Overlay - closes navbar when clicking outside */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-[88px] bg-slate-950/50 backdrop-blur-xs z-40 lg:hidden animate-in fade-in duration-200"
            aria-hidden="true"
          />
        )}

        {/* Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="relative z-50 lg:hidden bg-white border-t border-slate-200 px-4 pt-2 pb-5 space-y-1 shadow-xl animate-in slide-in-from-top-2 duration-200 max-h-[78vh] overflow-y-auto">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex justify-between items-center px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${active
                      ? "text-brand-teal bg-brand-teal-light"
                      : "text-slate-700 hover:bg-slate-50"
                    }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              );
            })}

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex justify-center items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-sm hover:bg-brand-orange-hover"
              >
                <span>Request Free Site Survey & Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Subtle Scroll Reading Progress Bar (Smooth 2px line) */}
      <div className="h-[2px] w-full bg-slate-200/50 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-teal via-teal-400 to-brand-orange transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}

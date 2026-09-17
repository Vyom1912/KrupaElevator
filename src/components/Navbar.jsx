import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, Menu, X, ChevronRight, ArrowRight, Sparkles, SlidersHorizontal } from "lucide-react";
import { companyData } from "../data/companyData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Elevator Solutions", path: "/products" },
    { name: "Interior Studio", path: "/interior" },
    { name: "Technologies", path: "/technologies" },
    { name: "Engineering Specs", path: "/specifications" },
    { name: "Services", path: "/services" },
    { name: "Contact & Survey", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  // Close when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Scroll listener for elevation effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
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
      document.body.style.overflow = "hidden"; // Prevent background scrolling
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
    <header ref={navRef} className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Quick Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center space-x-6 flex-wrap">
            <a
              href={`tel:${companyData.contacts.phoneRaw}`}
              className="flex items-center space-x-1.5 hover:text-brand-orange transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span className="font-semibold">{companyData.contacts.phone}</span>
            </a>
            <a
              href={`mailto:${companyData.contacts.emailPrimary}`}
              className="hidden sm:flex items-center space-x-1.5 hover:text-brand-teal transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-teal" />
              <span>{companyData.contacts.emailPrimary}</span>
            </a>
            <div className="hidden md:flex items-center space-x-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-teal" />
              <span>Factory: Bakrol Hub &bull; Office: Nikol, Ahmedabad</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-xs font-semibold">
            <Link
              to="/interior"
              className="inline-flex items-center space-x-1 text-slate-300 hover:text-brand-teal transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
              <span>11 Cabin Designs</span>
            </Link>
            <Link
              to="/specifications"
              className="inline-flex items-center space-x-1 text-slate-300 hover:text-brand-orange transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-brand-orange" />
              <span>Civil Dimensions</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <nav
        className={`bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled ? "shadow-md border-slate-200/80 py-1" : "border-slate-200 py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src={companyData.logo}
                alt={companyData.name}
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div>
                <span className="block text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-none">
                  KRUPA <span className="text-brand-teal">ELEVATORS</span>
                </span>
                <span className="block text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-slate-500 mt-1">
                  Reliable Riding Experience
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-xl text-xs xl:text-sm font-bold transition-all ${
                    isActive(link.path)
                      ? "text-brand-teal bg-brand-teal-light font-black shadow-xs"
                      : "text-slate-700 hover:text-brand-teal hover:bg-slate-100/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Action */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-brand-orange text-white text-xs xl:text-sm font-bold shadow-md hover:bg-brand-orange-hover hover:shadow-lg transition-all transform active:scale-95"
              >
                <span>Request Site Survey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden space-x-2">
              <Link
                to="/contact"
                className="px-3 py-1.5 rounded-full bg-brand-orange text-white text-xs font-bold shadow-sm"
              >
                Survey
              </Link>
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-brand-orange" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Backdrop Overlay - closes navbar when clicking outside */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-[110px] bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden animate-in fade-in duration-200"
            aria-hidden="true"
          />
        )}

        {/* Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="relative z-50 lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-1.5 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
              Navigation Menu
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex justify-between items-center px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  isActive(link.path)
                    ? "text-brand-teal bg-brand-teal-light border border-teal-200/50"
                    : "text-slate-700 hover:bg-slate-50 active:bg-slate-100"
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <Link
                to="/interior"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex justify-center items-center space-x-2 px-4 py-3 rounded-xl border border-teal-200 bg-teal-50/50 text-brand-teal text-xs font-bold hover:bg-teal-50"
              >
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <span>Explore 11 Cabin Interiors</span>
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex justify-center items-center space-x-2 px-4 py-3 rounded-xl bg-brand-orange text-white text-sm font-bold shadow-md hover:bg-brand-orange-hover"
              >
                <span>Request Free Site Survey & Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

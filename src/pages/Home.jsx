import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Zap,
  Maximize2,
  CheckCircle2,
  Award,
  Eye,
  Sparkles,
  Layers,
  Wrench,
  ChevronRight,
  ChevronLeft,
  Building2,
  Home as HomeIcon,
  Cross,
  Warehouse,
  Car,
  SlidersHorizontal,
  Compass,
  Cpu,
  Check
} from "lucide-react";
import { companyData } from "../data/companyData";
import { productsData, elevatorApplications, doorSystemsData } from "../data/productsData";
import { interiorSeries } from "../data/interiorsData";
import ElevatorFinder from "../components/ElevatorFinder";
import ProductModal from "../components/ProductModal";
import ScrollReveal from "../components/ScrollReveal";
import { assetUrl } from "../utils/assetPath";

const heroScenes = [
  {
    id: "building",
    tag: "High-Rise Residential",
    title: "Residential Towers & High-Rise",
    subtitle: "High-speed passenger elevator with precision group control",
    image: assetUrl("/assets/hero/building.jpg"),
  },
  {
    id: "villa",
    tag: "Private Luxury Villa",
    title: "Private Villas & Bungalows",
    subtitle: "Panoramic glass home lift with whisper-quiet acoustics",
    image: assetUrl("/assets/hero/villa.jpg"),
  },
  {
    id: "commercial",
    tag: "Commercial Atrium",
    title: "Atriums & Shopping Malls",
    subtitle: "High-traffic panoramic capsule elevators with smart dispatch",
    image: assetUrl("/assets/hero/commercial.jpg"),
  },
  {
    id: "hospital",
    tag: "Hospital & Medical",
    title: "Hospitals & Medical Centers",
    subtitle: "Stretcher-friendly jerk-free bed elevators with priority recall",
    image: assetUrl("/assets/hero/hospital.jpg"),
  },
  {
    id: "car-park",
    tag: "Automotive Car Park",
    title: "Automated Car Parks",
    subtitle: "Heavy-capacity automotive vehicle lifts & puzzle parking",
    image: assetUrl("/assets/hero/car-park.jpg"),
  },
  {
    id: "industrial",
    tag: "Industrial Logistics",
    title: "Industrial Warehouses",
    subtitle: "Rugged high-tonnage freight cargo lifts with reinforced sills",
    image: assetUrl("/assets/hero/industrial.jpg"),
  },
];

const applicationIcons = {
  "building": Building2,
  "private-villa": HomeIcon,
  "commercial": Sparkles,
  "hospital": Cross,
  "industrial": Warehouse,
  "car-park": Car,
};

const applicationShortMeta = {
  "building": { short: "Building", sub: "Residential & Towers", tag: "Residential" },
  "private-villa": { short: "Private Villa", sub: "Luxury Home Lift", tag: "Villa Lift" },
  "commercial": { short: "Commercial", sub: "Capsule Panoramic", tag: "Capsule" },
  "hospital": { short: "Hospital", sub: "Bed & Stretcher", tag: "Medical" },
  "industrial": { short: "Industrial", sub: "Heavy Freight Cargo", tag: "Industrial" },
  "car-park": { short: "Car Park", sub: "Automotive Vehicle Lift", tag: "Automotive" },
};

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const tabButtonRefs = useRef([]);

  // Auto-scroll the active tab into view horizontally on mobile
  useEffect(() => {
    if (tabButtonRefs.current[activeAppIndex]) {
      tabButtonRefs.current[activeAppIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeAppIndex]);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;
    if (isLeftSwipe) {
      setActiveAppIndex((prev) => (prev + 1) % elevatorApplications.length);
    }
    if (isRightSwipe) {
      setActiveAppIndex((prev) => (prev - 1 + elevatorApplications.length) % elevatorApplications.length);
    }
  };

  const goToPrevApp = () => {
    setActiveAppIndex((prev) => (prev - 1 + elevatorApplications.length) % elevatorApplications.length);
  };

  const goToNextApp = () => {
    setActiveAppIndex((prev) => (prev + 1) % elevatorApplications.length);
  };

  // Animated Background Loop: Smooth continuous cross-fade every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroScenes.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const activeApp = elevatorApplications[activeAppIndex];

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      {/* 1. VISIBLE DISPLAY HERO SECTION (FITS FULLY WITHIN VIEWPORT) */}
      <section className="relative h-[calc(100vh-80px)] min-h-[520px] max-h-[850px] flex items-center overflow-hidden bg-slate-950 text-white">
        {/* Full-Screen Animated Elevator Backgrounds */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {heroScenes.map((scene, idx) => {
            const isActive = idx === currentHeroIndex;
            return (
              <div
                key={scene.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-1" : "opacity-0 z-0"
                  }`}
              >
                <img
                  src={scene.image}
                  alt={scene.title}
                  className="w-full h-full object-cover object-center lg:object-right"
                />
              </div>
            );
          })}

          {/* Subtle black gradient overlay, mainly on the left for flawless readability while elevator on right remains crisp */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent sm:via-slate-950/70 lg:w-[62%] z-10 pointer-events-none" />

          {/* Subtle overall dark wash */}
          <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />

          {/* Subtle bottom gradient into page body */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Fixed Hero Foreground Content (Grounded, authentic company introduction) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-5">
            {/* Real Location & Brand Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-brand-teal/40 text-brand-teal text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-md">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <span>Krupa Elevators &bull; Ahmedabad, Gujarat</span>
            </div>

            {/* Core Genuine Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white drop-shadow-md">
              Reliable Riding Experience.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-teal-200 to-white block mt-1">
                Engineered for Safety & Precision.
              </span>
            </h1>

            {/* Grounded & Honest Company Profile */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal max-w-xl drop-shadow-sm">
              Based in Ahmedabad with manufacturing works in Bakrol and registered office in Nikol, we engineer, install, and service dependable elevator systems for residential buildings, private bungalows, commercial centers, hospitals, and industrial facilities.
            </p>

            {/* Direct Real Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-brand-orange text-white text-xs sm:text-sm font-bold shadow-xl hover:bg-brand-orange-hover hover:shadow-orange-500/25 transition-all transform active:scale-95"
              >
                <span>Explore Elevator Types</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-slate-900/85 text-white text-xs sm:text-sm font-bold border border-slate-700 hover:bg-slate-800 hover:border-brand-teal transition-all shadow-md backdrop-blur-sm"
              >
                <Phone className="w-4 h-4 text-brand-teal" />
                <span>Contact Our Office</span>
              </Link>
              <a
                href="tel:+918200859171"
                className="hidden sm:inline-flex items-center space-x-1.5 text-xs text-slate-300 hover:text-brand-orange transition-colors font-medium px-2 py-1"
              >
                <span>Direct: +91 82008 59171</span>
              </a>
            </div>

            {/* Minimal Scene Caption (Unobtrusive & Honest) */}
            <div className="flex items-center space-x-2 text-[11px] text-slate-400 font-medium pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
              <span className="text-slate-400">Application:</span>
              <span className="text-slate-200 font-semibold">{heroScenes[currentHeroIndex].title}</span>
              <span className="text-slate-500 font-mono">({currentHeroIndex + 1}/{heroScenes.length})</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ELEVATOR SOLUTIONS BY APPLICATION (6 CORE TYPES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20} duration={500}>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
              Specialized Vertical Transportation
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Elevator Solutions by Application
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Select any application type below to view tailored engineering parameters, capacity specifications, door mechanisms, and architectural photography.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Application Selector Tabs (6 Grid Cards) */}
        <ScrollReveal direction="up" delay={70} distance={15} duration={500}>
          <div className="hidden md:grid md:grid-cols-6 gap-3 mb-8">
            {elevatorApplications.map((app, idx) => {
              const isSelected = activeAppIndex === idx;
              const AppIcon = applicationIcons[app.id] || Building2;
              const meta = applicationShortMeta[app.id] || { short: app.title.split(" ")[0], sub: app.subtitle };
              return (
                <button
                  key={app.id}
                  onClick={() => setActiveAppIndex(idx)}
                  className={`relative p-3.5 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center space-y-2 group ${
                    isSelected
                      ? "bg-slate-900 text-white border-brand-teal shadow-xl ring-2 ring-brand-teal/20 scale-[1.03]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-brand-teal/50 hover:bg-slate-50/90 shadow-sm hover:scale-[1.01]"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? "bg-brand-orange text-white shadow-md shadow-orange-500/30"
                        : "bg-slate-100 text-slate-600 group-hover:bg-teal-50 group-hover:text-brand-teal"
                    }`}
                  >
                    <AppIcon className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <span
                      className={`text-xs font-black block truncate ${
                        isSelected ? "text-white" : "text-slate-900 group-hover:text-brand-teal"
                      }`}
                    >
                      {meta.short}
                    </span>
                    <span
                      className={`text-[10px] block truncate font-medium mt-0.5 ${
                        isSelected ? "text-teal-300" : "text-slate-400"
                      }`}
                    >
                      {meta.sub}
                    </span>
                  </div>
                  {isSelected && (
                    <span className="absolute -bottom-1 w-8 h-1 bg-brand-orange rounded-full shadow-sm" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Application Selector (Swipeable Pills & Stepper Bar) */}
          <div className="block md:hidden mb-6 space-y-2.5">
            {/* Horizontal Scrollable Pill Carousel */}
            <div className="flex overflow-x-auto no-scrollbar gap-2 px-1 py-1.5 snap-x snap-mandatory scroll-smooth">
              {elevatorApplications.map((app, idx) => {
                const isSelected = activeAppIndex === idx;
                const AppIcon = applicationIcons[app.id] || Building2;
                const meta = applicationShortMeta[app.id] || { short: app.title.split(" ")[0] };
                return (
                  <button
                    key={app.id}
                    ref={(el) => (tabButtonRefs.current[idx] = el)}
                    onClick={() => setActiveAppIndex(idx)}
                    className={`shrink-0 snap-center px-3.5 py-2 rounded-xl border flex items-center space-x-2 text-xs transition-all duration-300 active:scale-95 ${
                      isSelected
                        ? "bg-brand-teal text-white border-brand-teal shadow-md shadow-teal-600/30 font-bold scale-[1.02]"
                        : "bg-white text-slate-700 border-slate-200 shadow-sm font-medium hover:bg-slate-50"
                    }`}
                  >
                    <AppIcon className={`w-4 h-4 ${isSelected ? "text-brand-orange" : "text-slate-500"}`} />
                    <span>{meta.short}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Stepper & Controls Bar */}
            <div className="flex items-center justify-between bg-slate-900 text-white px-3.5 py-2.5 rounded-2xl shadow-lg border border-slate-800">
              <button
                onClick={goToPrevApp}
                aria-label="Previous Elevator Type"
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-90 text-slate-300 hover:text-white transition-all border border-slate-700"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex flex-col items-center space-y-1">
                <div className="flex items-center space-x-1.5 text-xs font-bold">
                  <span className="text-brand-orange font-mono">0{activeAppIndex + 1}</span>
                  <span className="text-slate-500 font-mono">/ 0{elevatorApplications.length}</span>
                  <span className="text-slate-400 font-normal">&bull;</span>
                  <span className="text-slate-200 truncate max-w-[130px]">
                    {applicationShortMeta[activeApp.id]?.short || activeApp.title.split(" ")[0]}
                  </span>
                </div>

                {/* 6 Segmented Animated Dots */}
                <div className="flex items-center space-x-1">
                  {elevatorApplications.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveAppIndex(i)}
                      aria-label={`Jump to application ${i + 1}`}
                      className={`transition-all duration-300 rounded-full ${
                        i === activeAppIndex
                          ? "w-5 h-1.5 bg-brand-orange shadow-sm shadow-orange-500/50"
                          : "w-1.5 h-1.5 bg-slate-700 hover:bg-slate-500"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={goToNextApp}
                aria-label="Next Elevator Type"
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-90 text-slate-300 hover:text-white transition-all border border-slate-700"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Active Application Detailed Showcase Card (with Touch Swipe & Smooth Transition) */}
        <ScrollReveal direction="up" delay={130} distance={20} duration={550}>
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all relative select-none"
          >
            {/* Left: Continuous Cross-Fade Image Stack (Zero White Flash) */}
            <div className="lg:col-span-6 h-72 sm:h-96 lg:h-auto min-h-[300px] sm:min-h-[380px] lg:min-h-[500px] relative overflow-hidden bg-slate-950">
              {elevatorApplications.map((app, idx) => {
                const isCurrent = idx === activeAppIndex;
                const AppIcon = applicationIcons[app.id] || Building2;
                return (
                  <div
                    key={app.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      isCurrent
                        ? "opacity-100 scale-100 z-10"
                        : "opacity-0 scale-105 pointer-events-none z-0"
                    }`}
                  >
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-transparent hidden lg:block" />

                    {/* Floating Top Pill Badge */}
                    <div className="absolute top-3.5 sm:top-4 left-3.5 sm:left-4 flex items-center space-x-2 bg-slate-900/90 border border-teal-500/40 text-brand-teal px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-md">
                      <AppIcon className="w-3.5 h-3.5 text-brand-orange" />
                      <span className="text-white font-semibold">{app.title.split(" ")[0]}</span>
                      <span className="text-slate-400 font-mono text-[10px]">({idx + 1}/6)</span>
                    </div>

                    {/* Bottom Overlay Title on Image */}
                    <div className="absolute bottom-3.5 sm:bottom-4 left-3.5 sm:left-4 right-3.5 sm:right-4 text-white">
                      <span className="text-xs font-bold text-teal-300 block mb-0.5">{app.subtitle}</span>
                      <h3 className="text-xl sm:text-2xl font-black tracking-tight">{app.title}</h3>
                      {/* Mobile swipe hint */}
                      <div className="flex items-center space-x-1.5 text-[11px] text-slate-300/80 pt-1.5 lg:hidden">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                        <span>Swipe card left / right to change elevator</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: Detailed Parameters & Specs (Smooth Animated Re-render with Key) */}
            <div
              key={activeApp.id}
              className="lg:col-span-6 p-5 sm:p-8 lg:p-10 flex flex-col justify-between space-y-5 sm:space-y-6 animate-fade-slide-up"
            >
              <div className="space-y-4">
                <div>
                  <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-md bg-orange-50 border border-orange-200/80 text-brand-orange text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    <span>Application Parameters &bull; {applicationShortMeta[activeApp.id]?.tag || "Elevator"}</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{activeApp.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {activeApp.description}
                  </p>
                </div>

                {/* Key Quick Metrics */}
                <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 sm:p-4 rounded-2xl border border-slate-100 text-xs">
                  <div className="flex items-start space-x-2.5">
                    <div className="p-2 rounded-xl bg-teal-50 border border-teal-100 text-brand-teal shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px] font-medium">Capacity Range</span>
                      <strong className="text-slate-900 text-xs sm:text-sm font-bold">{activeApp.capacity}</strong>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <div className="p-2 rounded-xl bg-orange-50 border border-orange-100 text-brand-orange shrink-0 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px] font-medium">Operating Speed</span>
                      <strong className="text-brand-orange text-xs sm:text-sm font-bold">{activeApp.speed}</strong>
                    </div>
                  </div>
                </div>

                {/* Suitable For Pill */}
                {activeApp.suitableFor && (
                  <div className="text-xs text-slate-600 bg-slate-50/80 px-3 py-2 rounded-xl border border-slate-100">
                    <span className="font-bold text-slate-800">Suitable For: </span>
                    <span>{activeApp.suitableFor}</span>
                  </div>
                )}

                {/* Highlights Checklist */}
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-800 block">Engineering Highlights:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeApp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Compatible Door Systems */}
                <div className="pt-1">
                  <span className="text-xs font-bold text-slate-800 block mb-1.5">Compatible Door Configurations:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeApp.doorTypes.map((door, di) => (
                      <span
                        key={di}
                        className="px-2.5 py-1 rounded-lg bg-teal-50 text-brand-teal border border-teal-200/60 text-[11px] font-semibold"
                      >
                        {door}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/specifications"
                  className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-50 text-center transition-colors flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-brand-teal" />
                  <span>View Full Civil Dimensions</span>
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto py-3 px-6 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold shadow-md transition-all text-center flex items-center justify-center space-x-1.5 active:scale-95"
                >
                  <span>Request Site Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. INTERACTIVE CABIN DESIGNS SPOTLIGHT (KEC-01 to KEC-11) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20} duration={500}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block mb-1">
                Freedom of Design
              </span>
              <h2 className="text-3xl font-black text-slate-900">Cabin Interiors: KEC-01 to KEC-11</h2>
              <p className="text-sm text-slate-600 max-w-xl mt-1">
                Photorealistic architectural finishes including Hairline S.S., Titanium Gold Mirrors, Rose Gold, Imitation Bronze, and Laser Etching.
              </p>
            </div>
            <Link
              to="/interior"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-hover"
            >
              <span>Launch Full Cabin Studio</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* 6 Featured Cabins Grid with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interiorSeries.slice(0, 6).map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={idx * 60}
              distance={20}
              duration={500}
              className="h-full"
            >
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
                <div>
                  <div className="h-56 bg-slate-900 relative overflow-hidden group/img">
                    <img
                      src={item.image}
                      alt={item.model}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-slate-900 border border-slate-200">
                      {item.series}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-teal-300">
                      {item.model}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-brand-teal transition-colors">
                      {item.model}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-2 border-t border-slate-100 space-y-1 text-[11px] text-slate-600">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Wall Finish:</span>
                        <span className="font-bold text-slate-800 truncate max-w-[170px]">{item.specs.carWall}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Ceiling:</span>
                        <span className="font-bold text-slate-800 truncate max-w-[170px]">{item.specs.ceiling}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to="/interior"
                    className="w-full flex items-center justify-center space-x-1 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    <span>Inspect Materials</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 4. DIRECT ON-SITE ENGINEERING SYSTEMS & SPECIFICATIONS */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal direction="up" distance={20} duration={500}>
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
                Core Technical Systems
              </span>
              <h2 className="text-3xl sm:text-4xl font-black">
                Engineering Specs & Green Efficiency
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                All technology specifications are integrated directly into every Krupa elevator system, ensuring whisper-quiet travel, reduced power consumption, and passenger peace of mind.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal direction="up" delay={0} distance={20} duration={500} className="h-full">
              <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-3 h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-teal/20 text-brand-teal flex items-center justify-center font-black">
                    <Zap className="w-6 h-6" />
                  </div>
                  <strong className="text-2xl font-black block text-white">PMS Gearless Motor</strong>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Permanent Magnet Synchronous motor consuming up to 30% less power than conventional geared units. 100% gear oil-free, eliminating oil leak hazards and maintenance downtime.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-semibold text-teal-300 border-t border-slate-700/60">
                  ✓ Available in MRL (Machine Roomless) configuration
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={80} distance={20} duration={500} className="h-full">
              <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-3 h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 text-brand-orange flex items-center justify-center font-black">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <strong className="text-2xl font-black block text-white">German Know-How V3F</strong>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Variable Voltage Variable Frequency (V3F) inverter drive providing ultra-smooth S-curve acceleration and deceleration with ±3mm flush floor landing accuracy.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-semibold text-brand-orange border-t border-slate-700/60">
                  ✓ Zero jerk stops & energy regeneration
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={160} distance={20} duration={500} className="h-full">
              <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-3 h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-black">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <strong className="text-2xl font-black block text-white">Full Safety Ecosystem</strong>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Inbuilt CDL (Car Door Lock), Full-Height Infrared Curtain of Light (128 safety beams), and Automatic Rescue Device (ARD) guiding the cabin safely during utility outages.
                  </p>
                </div>
                <div className="pt-2 text-[11px] font-semibold text-teal-200 border-t border-slate-700/60">
                  ✓ Automated daily brake holding tests
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Door Systems Overview */}
          <ScrollReveal direction="up" delay={120} distance={20} duration={550}>
            <div className="bg-slate-800/50 p-6 sm:p-8 rounded-3xl border border-slate-700 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <h3 className="text-xl font-bold">Door Systems: Manual & Automatic Configurations</h3>
                  <p className="text-xs text-slate-400">Available across all residential, commercial, and freight hoistways.</p>
                </div>
                <Link to="/technologies" className="text-xs font-bold text-brand-teal hover:underline flex items-center space-x-1">
                  <span>View All Technologies</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-700/80">
                  <strong className="text-white block font-bold">Center Opening Autodoor</strong>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">2-Panel & 4-Panel synchronized whisper-quiet operation.</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-700/80">
                  <strong className="text-white block font-bold">S.S. Telescopic Sliding</strong>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">Maximizes clear entrance width in narrower hoistways.</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-700/80">
                  <strong className="text-white block font-bold">Glass Big / Full Vision</strong>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">Frameless tempered safety glass for panoramic aesthetics.</span>
                </div>
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-700/80">
                  <strong className="text-white block font-bold">Industrial Bi-Parting</strong>
                  <span className="text-slate-400 text-[11px] mt-0.5 block">Vertical counterbalanced steel doors for goods & car lifts.</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. INTERACTIVE ELEVATOR FINDER WIZARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20} duration={500}>
          <ElevatorFinder
            onSelectProduct={(id) => {
              const match = productsData.find((p) => p.id === id);
              if (match) setSelectedProduct(match);
            }}
          />
        </ScrollReveal>
      </section>

      {/* 6. DIRECT ACTION & CONSULTATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20} duration={500}>
          <div className="rounded-3xl bg-gradient-to-r from-brand-teal via-teal-800 to-slate-900 text-white p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-200">
                Ahmedabad Factory & Nikol Engineering Office
              </span>
              <h2 className="text-3xl font-black">Plan Your Custom Hoistway Layout.</h2>
              <p className="text-sm text-teal-100 max-w-xl">
                Get in touch with our engineering team for free site surveys, civil pit and overhead calculations, and CAD layout support.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full bg-brand-orange text-white text-xs font-bold hover:bg-brand-orange-hover shadow-lg transition-colors"
              >
                Request Free Site Survey
              </Link>
              <a
                href={`tel:${companyData.contacts.phoneRaw}`}
                className="px-7 py-3.5 rounded-full bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 transition-colors flex items-center space-x-2 shadow-md"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Call +91 82008 59171</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

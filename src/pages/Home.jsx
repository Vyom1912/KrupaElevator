import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  CheckCircle2,
  Compass,
  ChevronRight,
  Activity,
  Building2,
  Cpu,
  Phone,
  Mail,
  MapPin,
  Send,
  Check,
  Eye,
  Settings,
  Quote,
  Maximize2
} from "lucide-react";
import { companyData, trustedSolutionSection } from "../data/companyData";
import { elevatorMaster } from "../data/elevatorMaster";
import ScrollReveal from "../components/ScrollReveal";
import { assetUrl } from "../utils/assetPath";
import WhatsAppIcon from "../components/common/WhatsAppIcon";

// Hero visual scenes
const heroScenes = [
  {
    id: "building",
    tag: "High-Rise Residential & Commercial",
    title: "Passenger Elevators",
    subtitle: "High-speed passenger elevator with precision group dispatch and whisper-quiet PMSM drive",
    image: assetUrl("/assets/hero/building.jpg"),
    link: "/elevators"
  },
  {
    id: "villa",
    tag: "Private Luxury Villas & Bungalows",
    title: "Home Villa Lifts",
    subtitle: "Panoramic glass home lift with shallow 550mm pit and single-phase 220V power compatibility",
    image: assetUrl("/assets/generated/home-elevator.jpg"),
    link: "/elevators"
  },
  {
    id: "commercial",
    tag: "Commercial Atriums & Retail",
    title: "Capsule Elevators",
    subtitle: "High-impact panoramic glass capsule elevators with architectural exterior contours",
    image: assetUrl("/assets/generated/capsule-hero.jpg"),
    link: "/elevators"
  },
  {
    id: "hospital",
    tag: "Healthcare & Critical Care",
    title: "Hospital Bed Elevators",
    subtitle: "Stretcher-friendly bed lifts with micro-leveling accuracy (±3mm) and priority medical recall",
    image: assetUrl("/assets/hero/hospital.jpg"),
    link: "/elevators"
  },
  {
    id: "car-park",
    tag: "Automotive & Parking Facilities",
    title: "Car Elevators & Parking",
    subtitle: "Heavy-capacity automotive vehicle lifts up to 4000 kg with dual-side cabin operating stations",
    image: assetUrl("/assets/hero/car-park.jpg"),
    link: "/elevators"
  },
  {
    id: "industrial",
    tag: "Industrial Logistics & Warehousing",
    title: "Goods & Freight Lifts",
    subtitle: "Rugged high-tonnage freight cargo lifts with reinforced steel sills and collapsible gates",
    image: assetUrl("/assets/hero/industrial.jpg"),
    link: "/elevators"
  }
];

// Elevator Mechanisms & Detailed Benefits Data
const elevatorMechanisms = [
  {
    id: "pmsm",
    name: "Permanent Magnet Synchronous Motor (PMSM) Gearless Drive",
    shortTitle: "PMSM Gearless Traction",
    tag: "Green Traction Technology",
    icon: Zap,
    color: "teal",
    mechanism: "Direct-drive synchronous motor utilizing high-coercivity rare-earth neodymium permanent magnets. Rotates synchronously with the stator electromagnetic field without requiring a mechanical worm reduction gearbox.",
    benefits: [
      "Consumes up to 30% less electrical energy compared to conventional geared traction machines.",
      "Whisper-quiet acoustic performance under 50 dB — eliminates mechanical gear meshing whine and vibrations.",
      "100% oil-free and maintenance-friendly: zero gear oil, zero oil changes, and zero environmental leakage.",
      "Compact, low-profile machine geometry fits directly inside shaft overhead for Machine-Room-Less (MRL) architecture."
    ],
    standard: "BIS IS 14665 Standard"
  },
  {
    id: "v3f",
    name: "Variable Voltage Variable Frequency (V3F) Vector Inverter",
    shortTitle: "V3F Vector Drive",
    tag: "Ride Comfort & Motion Control",
    icon: Activity,
    color: "teal",
    mechanism: "Microprocessor-controlled solid-state inverter modulating supply frequency and AC voltage with high-resolution closed-loop rotary encoder feedback, delivering continuous torque control across all speed ranges.",
    benefits: [
      "Custom German-engineered S-curve acceleration and deceleration profiles eliminate passenger head jolts and vibration.",
      "Millimeter-level floor leveling accuracy (±3 mm) preventing tripping hazards for children, elderly, and wheelchair users.",
      "Drastically suppresses inrush starting current, eliminating building electrical voltage dips and transformer heating.",
      "Extends the operational lifespan of wire ropes, guide rails, and traction sheaves by minimizing mechanical shock loads."
    ],
    standard: "Closed-Loop Vector Control"
  },
  {
    id: "ard",
    name: "Automatic Rescue Device (ARD) & Progressive Safety Gear",
    shortTitle: "ARD Failsafe Rescue",
    tag: "Blackout Emergency Protection",
    icon: ShieldCheck,
    color: "orange",
    mechanism: "Integrated solid-state battery power pack with intelligent logic controller paired with a centrifugal bi-directional overspeed governor and hardened tool-steel progressive safety wedges mounted under the car frame.",
    benefits: [
      "Instantly engages upon city grid power failure: safely navigates car to the nearest floor and opens doors automatically.",
      "Zero passenger entrapment risk during blackouts; operates fully unattended without requiring technician rescue.",
      "Centrifugal governor continuously monitors car speed: trips safety clamps within milliseconds if rated velocity exceeds 115%.",
      "Manufactured and 100% bench-tested strictly in compliance with IS 14665 Indian Standard elevator safety regulations."
    ],
    standard: "Automatic Rescue Certified"
  },
  {
    id: "curtain",
    name: "Full-Height Multi-Beam Infrared Safety Light Curtains",
    shortTitle: "Infrared Door Curtains",
    tag: "Non-Contact Entrance Safety",
    icon: Eye,
    color: "teal",
    mechanism: "Dense optical matrix comprising up to 154 criss-crossing invisible infrared beams spanning from 20 mm above floor level up to 1800 mm height across the elevator entrance threshold.",
    benefits: [
      "Non-contact passenger detection: interrupts door closing cycle immediately before any physical contact occurs.",
      "Safeguards small children, pet leashes, hand luggage, wheelchair rims, and hospital stretchers from door pinching.",
      "Self-diagnosing optical circuitry continuously verifies emitter/receiver alignment and signals door reopen on fault.",
      "Operates reliably in bright sunlight, ambient elevator lobby illumination, and dusty environments."
    ],
    standard: "154-Beam Non-Contact Sensor"
  },
  {
    id: "geared",
    name: "Heavy-Duty Geared Traction Drive (High-Tonnage Freight & Car Lifts)",
    shortTitle: "Heavy-Duty Geared Drive",
    tag: "Industrial Load Carrying",
    icon: Settings,
    color: "orange",
    mechanism: "Precision-machined centrifugally cast phosphor bronze worm wheel paired with a carburized case-hardened alloy steel worm shaft housed in a rigid cast-iron oil bath case, driven by a high-starting-torque electric motor.",
    benefits: [
      "Enormous load-bearing torque capacity designed to withstand dynamic shock loads of 1000 kg to 5000 kg freight.",
      "Heavy-gauge structural counterweight and guide rail assemblies built to endure industrial forklift and pallet truck loading.",
      "Smooth crawl-speed precision leveling for seamless rolling vehicle and wheeled cart transfer.",
      "Rugged durability with 25+ years expected service life under intense industrial logistics duty cycles."
    ],
    standard: "Heavy Freight Duty Cycle"
  }
];

export default function Home({ onOpenBrochure }) {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // In-page Query Form State
  const [queryForm, setQueryForm] = useState({
    name: "",
    phone: "",
    email: "",
    buildingType: "Residential Apartment",
    elevatorType: "Passenger Elevator",
    stops: "G + 4 Floors",
    capacity: "8 Persons (544 kg)",
    location: "",
    message: ""
  });
  const [querySubmitted, setQuerySubmitted] = useState(false);
  const [querySubmitting, setQuerySubmitting] = useState(false);

  // Hero carousel timer — 5.5 s per slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroScenes.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    setQuerySubmitting(true);
    // Simulate instantaneous clean submission
    setTimeout(() => {
      setQuerySubmitting(false);
      setQuerySubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[calc(100vh-64px)] min-h-[580px] max-h-[820px] bg-slate-950 overflow-hidden flex items-center">

        {/* ── Full-layer crossfade slides ────────────────────────────────────────
            Every slide is one absolute layer = image + gradient + text content.
            Only the active layer is opacity-1; all others opacity-0.
            Both image and text dissolve together for a seamless blend.          */}
        {heroScenes.map((scene, index) => {
          const isActive = index === currentHeroIndex;
          return (
            <div
              key={scene.id}
              className="absolute inset-0 flex items-center"
              style={{
                opacity: isActive ? 1 : 0,
                transition: "opacity 1.2s ease-in-out",
                zIndex: isActive ? 10 : 0,
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              {/* Background image */}
              <img
                src={scene.image}
                alt={scene.title}
                className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
              />

              {/* Dark gradient overlay — same as original */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/45" />

              {/* Foreground text content — sits on top of the gradient */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
                <div className="max-w-2xl space-y-5">

                  {/* Category tag */}
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-teal/20 border border-brand-teal/40 text-brand-teal text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                    <span>{scene.tag}</span>
                  </div>

                  {/* Title + subtitle */}
                  <div className="space-y-3">
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                      {scene.title}
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-teal-200 to-white mt-1">
                        by KRUPA Elevators
                      </span>
                    </h1>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                      {scene.subtitle}
                    </p>
                  </div>

                  {/* Company info badges */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { icon: ShieldCheck, text: "IS 14665 & BIS Certified",           color: "text-brand-teal"   },
                      { icon: Zap,         text: "Up to 30% Energy Savings",            color: "text-brand-teal"   },
                      { icon: MapPin,      text: "Ahmedabad, Gujarat — Direct Factory", color: "text-brand-orange" },
                    ].map(({ icon: Icon, text, color }) => (
                      <span
                        key={text}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold ${color} bg-slate-950/50 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full`}
                      >
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                        {text}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="pt-1 flex flex-wrap items-center gap-3">
                    <Link
                      to="/elevators"
                      className="px-6 py-3.5 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-teal/25 hover:shadow-brand-teal/40 transition-all flex items-center space-x-2 group"
                    >
                      <span>Explore Elevators</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button
                      onClick={() => {
                        document.getElementById("query-section")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all flex items-center space-x-2 cursor-pointer"
                    >
                      <span>Submit Query / Get Quote</span>
                    </button>
                  </div>

                  {/* Trust strip */}
                  <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                      <span>Direct Bakrol Manufacturing</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>24/7 Breakdown Assistance</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                      <span>Turnkey Installation</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}

        {/* ── Progress bar — refills over 5.5 s, resets when index changes ───── */}
        <div className="absolute bottom-0 left-0 right-0 z-30 h-0.5 bg-white/10">
          <div
            key={currentHeroIndex}
            className="h-full bg-brand-teal origin-left"
            style={{ animation: "hero-progress 5.5s linear forwards" }}
          />
        </div>

        {/* ── Navigation dots ──────────────────────────────────────────────────── */}
        <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center items-center space-x-2">
          {heroScenes.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentHeroIndex
                  ? "w-8 bg-brand-teal"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              title={scene.title}
              aria-label={`Go to ${scene.title}`}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ABOUT SECTION: Trusted Elevator Solution                              */}
      {/* ========================================================================= */}
      <section id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20">
        {/* Tier 1: Section Header & Architectural Manifesto Quote (Open Editorial) */}
        <div className="space-y-8">
          {/* Eyebrow & Standard Trust Line */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div className="flex items-center space-x-3">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-teal animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-teal">
                ARCHITECTURAL SPECIFICATION & OVERVIEW
              </span>
            </div>
            <div className="flex items-center space-x-4 text-xs font-medium text-slate-500">
              <span className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-teal" />
                <span>IS 14665 & BIS Certified</span>
              </span>
              <span className="hidden sm:inline text-slate-300">|</span>
              <span className="hidden sm:flex items-center space-x-1.5 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>Nikol Studio & Bakrol Plant, Ahmedabad</span>
              </span>
            </div>
          </div>

          {/* Main Title & Open Architectural Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-3">
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.08]">
                {trustedSolutionSection.heading}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed max-w-md">
                Pioneering precision vertical transportation engineered for seamless integration across contemporary residential towers and commercial infrastructures.
              </p>
            </div>

            {/* Architectural Pull Quote - Open, Left Bordered, Typographic Elegance */}
            <div className="lg:col-span-7 relative pl-6 sm:pl-8 border-l-2 border-brand-teal">
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-brand-teal/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-brand-teal" />
              </div>
              <p className="text-lg sm:text-2xl text-slate-800 font-light italic leading-relaxed tracking-tight">
                "{trustedSolutionSection.quote}"
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-mono">
                <span className="font-bold text-brand-teal tracking-wider">KRUPA ELEVATORS DIRECTIVE</span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-slate-600">Unified Form & Architectural Function</span>
                <span className="text-slate-300">&bull;</span>
                <span className="text-slate-600">Zero Middleman Markup</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: 5 Defining Attributes — Open Architectural Metric Strip (No card boxes!) */}
        <div className="space-y-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500 block">
            Five Core Attributes Defining Every Krupa Installation
          </span>
          <div className="border-y border-slate-200 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
            {trustedSolutionSection.imageBandWords.map((word, wIdx) => {
              const attrIcons = [Cpu, Sparkles, ShieldCheck, Maximize2, Activity];
              const Icon = attrIcons[wIdx] || Sparkles;
              const descriptions = [
                "Microprocessor logic & IoT telemetry",
                "Architectural SS & titanium finishes",
                "Certified heavy-gauge structural steel",
                "Maximized usable cabin floor area",
                "Sub-50dB closed-loop S-curve travel"
              ];
              const metricHighlights = [
                "32-Bit Dual CPU",
                "Grade 304 / 316",
                "IS 14665 Tested",
                "+18% Usable Vol",
                "±3mm Floor Level"
              ];

              return (
                <div
                  key={wIdx}
                  className="group relative p-5 lg:p-6 transition-all duration-300 hover:bg-teal-50/40 flex flex-col justify-between space-y-4"
                >
                  {/* Top Accent Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black text-slate-400 group-hover:text-brand-teal transition-colors">
                        0{wIdx + 1}
                      </span>
                      <Icon className="w-4 h-4 text-slate-400 group-hover:text-brand-teal transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-brand-teal transition-colors">
                        {word}
                      </h3>
                      <span className="inline-block mt-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-brand-orange">
                        {metricHighlights[wIdx]}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {descriptions[wIdx]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tier 3: Modern Elevator Narrative — Editorial Split Flow (No boxes inside boxes!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual Architectural Showcase with Blueprint Spec Overlays (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-slate-950 group">
              <img
                src={assetUrl("/assets/hero/building.jpg")}
                alt="Modern Building Elevator"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

              {/* Floating Blueprint Dimension Overlays */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90">
                <span className="bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>URBAN TOWERS & RESIDENCES</span>
                </span>
                <span className="bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                  G + 1 TO G + 40
                </span>
              </div>

              {/* Bottom Technical Spec Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-white space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-brand-teal uppercase tracking-wider">
                    Direct Plant Engineering
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    CAD DWG // REV-04
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Full hoistway layout drawings & GA structural calculations generated at Nikol design office, fabricated at Bakrol works.
                </p>
                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/10">
                  <span>SPEED: 0.65 – 2.0 M/S</span>
                  <span>CAPACITY: 4 – 26 PASS</span>
                  <span>IS 14665</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Steps — Open Vertical Hoistway Transit Track (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Contemporary Urban Mobility</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                {trustedSolutionSection.modernElevatorHeading}
              </h3>
            </div>

            {/* Vertical Transit Track (No grey cards!) */}
            <div className="relative pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-brand-teal before:via-brand-orange before:to-slate-200">
              {trustedSolutionSection.modernElevatorParagraphs.map((para, pIdx) => {
                const stepMeta = [
                  {
                    floor: "01",
                    title: "Architectural Integration & Hoistway Planning",
                    tag: "Low, Mid & High-Rise Buildings"
                  },
                  {
                    floor: "02",
                    title: "Interior & Exterior Design Flexibility",
                    tag: "Aesthetic Customization"
                  },
                  {
                    floor: "03",
                    title: "Synergy of Ride Comfort & Futuristic Technology",
                    tag: "V3F & PMSM Efficiency"
                  }
                ];
                const meta = stepMeta[pIdx];

                return (
                  <div key={pIdx} className="relative group">
                    {/* Floor Node Marker on Track */}
                    <div className="absolute -left-8 top-0.5 w-6 h-6 rounded-full bg-white border-2 border-brand-teal group-hover:border-brand-orange group-hover:bg-brand-orange transition-all duration-300 flex items-center justify-center shadow-xs">
                      <span className="text-[9px] font-mono font-black text-slate-800 group-hover:text-white transition-colors">
                        {meta.floor}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-teal transition-colors">
                          {meta.title}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-600 uppercase font-semibold">
                          [{meta.tag}]
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {para}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Action Link */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium">
                Tailored for architects, builders, structural consultants, and project heads.
              </span>
              <Link
                to="/elevators"
                className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-brand-teal hover:text-teal-700 group"
              >
                <span>Explore All 8 Elevator Models & Layouts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Tier 4: Elevate Your Experience — Open Architectural Quadrant (No card boxes!) */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-teal block mb-1">
                CORE ENGINEERING PILLARS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Elevate Your Experience
              </h3>
            </div>
            <span className="text-xs text-slate-500 max-w-sm">
              Four technical cornerstones ensuring safety, durability, and luxury throughout the elevator's 25+ year lifespan.
            </span>
          </div>

          {/* Open 4-Column Panel bounded by Hairline Dividers — NO BOX CARDS! */}
          <div className="border-t border-b border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4">
            {trustedSolutionSection.elevateYourExperience.map((pillar, pilIdx) => {
              const pillarConfigs = [
                {
                  code: "ARC-01",
                  cat: "Aesthetics",
                  icon: Sparkles,
                  badge: "11 Cabin Finishes",
                  desc: "Futuristic cabin architecture, titanium gold, rose gold, and etched stainless steel that redefine building lobby and interior prestige."
                },
                {
                  code: "MOT-02",
                  cat: "Acoustics & Ride",
                  icon: Activity,
                  badge: "Sub-50 dB Serenity",
                  desc: "German-engineered S-curve vector inverters and millimeter-level (±3 mm) precision leveling for a gentle, jerk-free passenger ride."
                },
                {
                  code: "ECO-03",
                  cat: "Sustainability",
                  icon: Zap,
                  badge: "Up to 30% Power Savings",
                  desc: "Permanent Magnet Synchronous (PMSM) direct-drive gearless machinery and auto-idle sleep standby circuitry minimizing energy consumption."
                },
                {
                  code: "SRV-04",
                  cat: "Lifecycle Support",
                  icon: ShieldCheck,
                  badge: "Turnkey Civil Guidance",
                  desc: "From Nikol CAD layout drafting and direct Bakrol manufacturing to 24/7 rapid emergency breakdown support squads across Gujarat."
                }
              ];
              const cfg = pillarConfigs[pilIdx];
              const Icon = cfg.icon;

              return (
                <div
                  key={pilIdx}
                  className="p-5 lg:p-6 space-y-4 group transition-all duration-300 hover:bg-slate-50/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold text-slate-400 group-hover:text-brand-teal transition-colors">
                      {cfg.code} // {cfg.cat}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-brand-teal group-hover:text-white text-slate-700 flex items-center justify-center transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-base font-black text-slate-900 group-hover:text-brand-teal transition-colors">
                      {pillar}
                    </h4>
                    <span className="inline-block text-[11px] font-mono font-bold text-brand-orange">
                      {cfg.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {cfg.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tier 5: Direct Engineering Presence — Unified Dual-Hub Infrastructure */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-200 pb-2">
            <div className="flex items-center space-x-2 font-mono font-bold text-slate-700 uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-brand-teal" />
              <span>Direct In-House Infrastructure (Zero Intermediaries)</span>
            </div>
            <span className="hidden sm:inline font-mono text-[11px] text-brand-orange">
              Nikol Drafting &bull; Bakrol Works &bull; 100% Bench Tested
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Nikol Studio Pane */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 group">
              <div className="h-56 sm:h-64 relative overflow-hidden">
                <img
                  src={assetUrl("/assets/facilities/design-studio.jpg")}
                  alt="Nikol CAD Design Studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-teal-300 border border-teal-500/20">
                  HUB 01 // NIKOL DESIGN OFFICE
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="text-lg font-bold text-white leading-tight">
                    Nikol CAD & Civil Engineering Center
                  </h4>
                  <span className="text-xs text-teal-200 font-mono">
                    AutoCAD GA Hoistway Drawings & Structural Load Guidance
                  </span>
                </div>
              </div>
              <div className="p-5 bg-white space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated engineering team preparing custom General Arrangement (GA) hoistway layouts, overhead beam structural calculations, pit depth guidance, and 3D architectural renderings tailored for builder project proposals.
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="flex items-center space-x-1">
                    <Compass className="w-3.5 h-3.5 text-brand-teal" />
                    <span>Nikol, Ahmedabad</span>
                  </span>
                  <span className="text-slate-800 font-bold">AutoCAD GA Service</span>
                </div>
              </div>
            </div>

            {/* Bakrol Plant Pane */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 group">
              <div className="h-56 sm:h-64 relative overflow-hidden">
                <img
                  src={assetUrl("/assets/facilities/bakrol-facility.jpg")}
                  alt="Bakrol Manufacturing Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-orange-300 border border-orange-500/20">
                  HUB 02 // BAKROL MANUFACTURING PLANT
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="text-lg font-bold text-white leading-tight">
                    Bakrol Fabrication & Assembly Works
                  </h4>
                  <span className="text-xs text-orange-200 font-mono">
                    CNC Laser Cutting, Press Brakes & Dynamic Safety Testing
                  </span>
                </div>
              </div>
              <div className="p-5 bg-white space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fully equipped manufacturing plant featuring CNC fiber laser cutting, CNC hydraulic press brakes, precision welding fixtures, and full-height test towers verifying safety gears, governors, and car balances before dispatch.
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span className="flex items-center space-x-1">
                    <Building2 className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Bakrol, Ahmedabad</span>
                  </span>
                  <span className="text-slate-800 font-bold">Direct In-House Works</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OUR ELEVATOR SECTION (Client-Friendly & Minimal)                         */}
      {/* ========================================================================= */}
      <section id="our-elevators-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
              Architectural Mobility Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Elevator Solutions for Every Building
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Engineered for whisper-quiet ride comfort, high energy savings, and reliable daily operation across residential, commercial, medical, and industrial spaces.
            </p>
          </div>
          <Link
            to="/elevators"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-bold hover:bg-brand-teal transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>Explore All 8 Elevator Models</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Curated Client-Focused Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: "passenger",
              name: "Passenger Elevators",
              tag: "Residential & Commercial",
              desc: "Smooth, silent, and energy-efficient vertical mobility tailored for apartments, offices, and hotels.",
              image: elevatorMaster.find((e) => e.id === "passenger")?.image || "/assets/elevators/passenger_elevator.jpg",
              highlight: "Whisper-quiet ride & smooth leveling"
            },
            {
              id: "capsule",
              name: "Capsule Elevators",
              tag: "Architectural Landmark",
              desc: "Futuristic curved glass panoramic cabins offering 360-degree views in atriums, malls, and luxury resorts.",
              image: elevatorMaster.find((e) => e.id === "capsule")?.image || "/assets/elevators/capsule_elevator.jpg",
              highlight: "Panoramic 360° glass aesthetics"
            },
            {
              id: "hospital",
              name: "Hospital Bed Elevators",
              tag: "Medical & Stretcher",
              desc: "Spacious cabins with antibacterial wall protection, wide doors, and emergency medical priority features.",
              image: elevatorMaster.find((e) => e.id === "hospital")?.image || "/assets/elevators/hospital_elevator.jpg",
              highlight: "Extra-deep cabins & jerk-free transit"
            },
            {
              id: "goods",
              name: "Goods & Freight Hoists",
              tag: "Industrial Logistics",
              desc: "Rugged structural steel cabins built to handle heavy cargo, forklift loading, and industrial logistics.",
              image: elevatorMaster.find((e) => e.id === "goods")?.image || "/assets/elevators/goods_elevator.jpg",
              highlight: "Heavy payload up to 5000 kg"
            }
          ].map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={idx * 35}
              distance={15}
              className="h-full"
            >
              <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
                <div>
                  <div className="h-48 bg-slate-950 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-teal-300 border border-slate-700">
                      {item.tag}
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold drop-shadow-sm">
                      {item.highlight}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-black text-slate-900 group-hover:text-brand-teal transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/elevators#elev-${item.id}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 group-hover:bg-slate-900 text-slate-700 group-hover:text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer"
                  >
                    <span>View Specifications & Layouts</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-teal" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTERIOR SECTION (Client-Friendly & Minimal)                           */}
      {/* ========================================================================= */}
      <section id="interior-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
              Architectural Aesthetics
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Cabin Interior Series
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Transform every vertical journey into an experience of luxury and comfort with stainless steel, warm LED ceilings, and titanium finishes.
            </p>
          </div>
          <Link
            to="/interiors"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-bold hover:bg-brand-teal transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>Explore All Cabin Collections</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Curated Cabin Series */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              targetHash: "basic-series-section",
              model: "Basic Series (KEC-01)",
              series: "Basic Series",
              image: assetUrl("/assets/interiors/kec-01.jpg"),
              desc: "Hairline stainless steel with full-width rear mirror that visually amplifies interior cabin space.",
              features: "S.S. Hairline • Full Rear Mirror • LED Ceiling"
            },
            {
              targetHash: "standard-series-section",
              model: "Standard Series (KEC-02)",
              series: "Standard Series",
              image: assetUrl("/assets/interiors/kec-02.jpg"),
              desc: "Active cross-flow blower fan built into the ceiling with half-mirror and wrap-around grab bars.",
              features: "Built-In Blower Fan • Half-Mirror • Ergonomic Grab Bar"
            },
            {
              targetHash: "semi-series-section",
              model: "Semi Designer (KEC-03)",
              series: "Semi Designer",
              image: assetUrl("/assets/interiors/kec-03.jpg"),
              desc: "Warm titanium gold finishes paired with elegant gold ceiling diffusers and classic marble-textured flooring.",
              features: "Titanium Gold Insets • Marble PVC • Ambient Glow"
            },
            {
              targetHash: "model-kec-10",
              model: "Premium Series (KEC-10)",
              series: "Premium Series",
              image: assetUrl("/assets/interiors/kec-10.jpg"),
              desc: "Flagship luxury featuring titanium gold mirror panels, backlit acrylic sky ceiling, and geometric floor medallion.",
              features: "Acrylic Skylight • Titanium Mirror • Ornate Marble"
            }
          ].map((item, idx) => (
            <ScrollReveal
              key={item.model}
              direction="up"
              delay={idx * 35}
              distance={15}
              className="h-full"
            >
              <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
                <div>
                  <div className="h-56 bg-slate-950 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.model}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-slate-900 border border-slate-200 shadow-xs">
                      {item.series}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-black text-slate-900 group-hover:text-brand-teal transition-colors">
                      {item.model}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="pt-2 border-t border-slate-100 text-[11px] font-medium text-brand-teal">
                      {item.features}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/interiors#${item.targetHash}`}
                    className="w-full flex items-center justify-center space-x-1.5 py-2.5 rounded-xl bg-slate-50 group-hover:bg-slate-900 text-slate-700 group-hover:text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <span>View Cabin Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-teal" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. TECHNOLOGY & MECHANISMS SECTION (Client-Friendly & Minimal)             */}
      {/* ========================================================================= */}
      <section id="mechanisms-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
              Advanced Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Technology, Safety & Control Systems
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Powered by German-engineered V3F vector drives, energy-saving PMSM motors, and comprehensive fail-safe passenger protection.
            </p>
          </div>
          <Link
            to="/technology"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs sm:text-sm font-bold hover:bg-brand-teal transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <span>Explore Technology & Control Systems</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Minimal Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Permanent Magnet PMSM Motor",
              category: "Green Drive",
              targetHash: "drive-systems-section",
              desc: "Eco-friendly gearless drive consuming up to 40% less electrical power with whisper-quiet, frictionless operation.",
              benefit: "40% Energy Savings & Zero Lubrication",
              icon: Zap
            },
            {
              title: "Microprocessor V3F Inverter",
              category: "Intelligent Motion",
              targetHash: "inverter-section",
              desc: "Closed-loop vector inverter providing smooth jerk-free S-curve acceleration and millimeter-level landing accuracy.",
              benefit: "Ultra-Smooth Ride & Precision Leveling",
              icon: Cpu
            },
            {
              title: "Multi-Beam Light Curtain",
              category: "Passenger Safety",
              targetHash: "safety-section",
              desc: "Over 128 non-contact infrared beams spanning floor to ceiling that instantly reopen doors before any physical touch.",
              benefit: "100% Non-Contact Passenger Protection",
              icon: ShieldCheck
            },
            {
              title: "Automatic Rescue Device (ARD)",
              category: "Emergency Evacuation",
              targetHash: "safety-section",
              desc: "Intelligent battery backup that automatically navigates the elevator to the nearest landing during power outages.",
              benefit: "Automatic Power-Failure Rescue",
              icon: Activity
            }
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.title}
                direction="up"
                delay={idx * 35}
                distance={15}
                className="h-full"
              >
                <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between h-full group">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange block">
                        {pillar.category}
                      </span>
                      <h3 className="text-base font-black text-slate-900 mt-0.5">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <Link
                    to={`/technology#${pillar.targetHash}`}
                    className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-brand-teal group-hover:text-teal-700 transition-colors cursor-pointer"
                  >
                    <span>{pillar.benefit}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. QUERY SECTION                                                          */}
      {/* ========================================================================= */}
      <section id="query-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Context & Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider border border-orange-500/30">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Technical Consultation & Query</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Discuss Your Elevator Requirement
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Submit your building parameters below. Our Nikol engineering headquarters prepares complimentary AutoCAD General Arrangement (GA) hoistway layouts, structural load calculations, and turnkey quotations.
                </p>
              </div>

              {/* Direct Reach Contacts */}
              <div className="space-y-3 pt-2 text-xs">
                <a
                  href={`tel:${companyData.contacts.phoneRaw}`}
                  className="flex items-center space-x-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-brand-orange transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-orange text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Direct Technical Engineer:</span>
                    <span className="font-bold text-white text-sm">{companyData.contacts.phone}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${companyData.contacts.whatsapp}?text=${encodeURIComponent(
                    "Hello Krupa Elevators, I would like to submit an elevator query and request a site survey."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-emerald-500 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">WhatsApp Direct Chat:</span>
                    <span className="font-bold text-emerald-400 text-sm">+91 {companyData.contacts.whatsapp}</span>
                  </div>
                </a>

                <div className="flex items-start space-x-3 p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <div className="w-9 h-9 rounded-xl bg-brand-teal text-white flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Nikol Engineering Office:</span>
                    <span className="text-slate-200 text-xs leading-relaxed block">
                      {companyData.contacts.office.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Query Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-xl">
              {querySubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">Query Received Successfully!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you! Our senior technical engineer from Nikol office will examine your hoistway specifications and contact you shortly with a customized GA layout drawing and quote.
                  </p>
                  <button
                    onClick={() => setQuerySubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-brand-teal transition-colors cursor-pointer"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuerySubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-black text-slate-900">Elevator Technical Query Form</h3>
                    <p className="text-xs text-slate-500">Provide details about your proposed installation.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={queryForm.name}
                        onChange={(e) => setQueryForm({ ...queryForm, name: e.target.value })}
                        placeholder="e.g. Rajesh Patel"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-brand-teal focus:bg-white outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={queryForm.phone}
                        onChange={(e) => setQueryForm({ ...queryForm, phone: e.target.value })}
                        placeholder="e.g. +91 98250 XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-brand-teal focus:bg-white outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={queryForm.email}
                        onChange={(e) => setQueryForm({ ...queryForm, email: e.target.value })}
                        placeholder="e.g. client@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-brand-teal focus:bg-white outline-hidden transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Site Location / City *
                      </label>
                      <input
                        type="text"
                        required
                        value={queryForm.location}
                        onChange={(e) => setQueryForm({ ...queryForm, location: e.target.value })}
                        placeholder="e.g. Ahmedabad, Gandhinagar, Vadodara"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-brand-teal focus:bg-white outline-hidden transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Elevator Application
                      </label>
                      <select
                        value={queryForm.elevatorType}
                        onChange={(e) => setQueryForm({ ...queryForm, elevatorType: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-brand-teal focus:bg-white outline-hidden"
                      >
                        <option value="Passenger Elevator">Passenger Elevator</option>
                        <option value="Capsule Elevator">Capsule Elevator</option>
                        <option value="Hospital Bed Elevator">Hospital Bed Elevator</option>
                        <option value="Goods / Freight Lift">Goods / Freight Lift</option>
                        <option value="Car Elevator / Parking">Car Elevator / Parking</option>
                        <option value="MRL Gearless Lift">MRL Gearless Lift</option>
                        <option value="Home Villa Elevator">Home Villa Elevator</option>
                        <option value="Hydraulic Lift">Hydraulic Lift</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Number of Floors / Stops
                      </label>
                      <input
                        type="text"
                        value={queryForm.stops}
                        onChange={(e) => setQueryForm({ ...queryForm, stops: e.target.value })}
                        placeholder="e.g. G + 3 Floors"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-brand-teal focus:bg-white outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Desired Capacity
                      </label>
                      <select
                        value={queryForm.capacity}
                        onChange={(e) => setQueryForm({ ...queryForm, capacity: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-brand-teal focus:bg-white outline-hidden"
                      >
                        <option value="4-6 Persons (272-408 kg)">4-6 Persons (272-408 kg)</option>
                        <option value="8 Persons (544 kg)">8 Persons (544 kg)</option>
                        <option value="10-13 Persons (680-884 kg)">10-13 Persons (680-884 kg)</option>
                        <option value="16-26 Persons (1088-1768 kg)">16-26 Persons (1088-1768 kg)</option>
                        <option value="Heavy Freight 1000 - 3000 kg">Heavy Freight 1000 - 3000 kg</option>
                        <option value="Car Vehicle Lift 3000+ kg">Car Vehicle Lift 3000+ kg</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Query Details / Available Shaft Dimensions
                    </label>
                    <textarea
                      rows={3}
                      value={queryForm.message}
                      onChange={(e) => setQueryForm({ ...queryForm, message: e.target.value })}
                      placeholder="Mention hoistway width, depth, pit depth, or specific architectural cabin requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs focus:ring-2 focus:ring-brand-teal focus:bg-white outline-hidden transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={querySubmitting}
                    className="w-full py-3.5 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-70"
                  >
                    {querySubmitting ? (
                      <span>Submitting Query...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Technical Query to Nikol Engineering Desk</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FOOTER SECTION (Rendered in App.jsx layout)                           */}
      {/* ========================================================================= */}
    </div>
  );
}

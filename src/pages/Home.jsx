import React, { useState, useEffect } from "react";
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

const heroScenes = [
  {
    id: "building",
    tag: "High-Rise Residential",
    title: "Residential Towers & High-Rise",
    subtitle: "High-speed passenger elevator with precision group control",
    image: "/assets/hero/building.jpg",
  },
  {
    id: "villa",
    tag: "Private Luxury Villa",
    title: "Private Villas & Bungalows",
    subtitle: "Panoramic glass home lift with whisper-quiet acoustics",
    image: "/assets/hero/villa.jpg",
  },
  {
    id: "commercial",
    tag: "Commercial Atrium",
    title: "Atriums & Shopping Malls",
    subtitle: "High-traffic panoramic capsule elevators with smart dispatch",
    image: "/assets/hero/commercial.jpg",
  },
  {
    id: "hospital",
    tag: "Hospital & Medical",
    title: "Hospitals & Medical Centers",
    subtitle: "Stretcher-friendly jerk-free bed elevators with priority recall",
    image: "/assets/hero/hospital.jpg",
  },
  {
    id: "car-park",
    tag: "Automotive Car Park",
    title: "Automated Car Parks",
    subtitle: "Heavy-capacity automotive vehicle lifts & puzzle parking",
    image: "/assets/hero/car-park.jpg",
  },
  {
    id: "industrial",
    tag: "Industrial Logistics",
    title: "Industrial Warehouses",
    subtitle: "Rugged high-tonnage freight cargo lifts with reinforced sills",
    image: "/assets/hero/industrial.jpg",
  },
];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeAppIndex, setActiveAppIndex] = useState(0);
  const [simulatedFloor, setSimulatedFloor] = useState(1);
  const [elevatorDirection, setElevatorDirection] = useState("up");
  const [doorStatus, setDoorStatus] = useState("Closed");
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Animated Background Loop: Switch every 2 seconds with smooth continuous cross-fade
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroScenes.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Animated Simulated Elevator Shaft Telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setSimulatedFloor((prev) => {
        if (prev >= 15) {
          setElevatorDirection("down");
          return 14;
        } else if (prev <= 1) {
          setElevatorDirection("up");
          return 2;
        }
        return elevatorDirection === "up" ? prev + 1 : prev - 1;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, [elevatorDirection]);

  const activeApp = elevatorApplications[activeAppIndex];

  return (
    <div className="space-y-24 pb-20 overflow-x-hidden">
      {/* 1. FULL-SCREEN ANIMATED MULTI-SCENE HERO SECTION */}
      <section className="relative min-h-[92vh] sm:min-h-[95vh] lg:min-h-screen flex items-center overflow-hidden bg-slate-950 text-white py-16 sm:py-20 lg:py-24">
        {/* Full-Screen Animated Elevator Backgrounds */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {heroScenes.map((scene, idx) => {
            const isActive = idx === currentHeroIndex;
            return (
              <div
                key={scene.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-1" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={scene.image}
                  alt={scene.title}
                  className={`w-full h-full object-cover object-center lg:object-right transition-transform duration-[3000ms] ease-out ${
                    isActive ? "scale-100" : "scale-105"
                  }`}
                />
              </div>
            );
          })}

          {/* Subtle black gradient overlay, mainly on the left for flawless readability while elevator on right remains crisp */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent sm:via-slate-950/70 lg:w-[64%] z-10 pointer-events-none" />

          {/* Subtle overall dark wash to guarantee optimal contrast on all displays */}
          <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />

          {/* Subtle bottom gradient into page body */}
          <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />
        </div>

        {/* Floating Live Showcase HUD Badge on Desktop Top-Right */}
        <div className="hidden lg:flex absolute top-10 right-8 xl:right-12 z-20 items-center space-x-3 px-4 py-2.5 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-700/80 shadow-2xl">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <div className="text-left">
            <div className="flex items-center space-x-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Live Application:</span>
              <span className="text-[10px] font-mono font-black text-brand-orange">
                0{currentHeroIndex + 1} / 0{heroScenes.length}
              </span>
            </div>
            <div className="text-xs font-black text-white">{heroScenes[currentHeroIndex].title}</div>
          </div>
        </div>

        {/* Fixed Hero Foreground Content (Stationary text, CTAs, live metrics) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            {/* Top Brand Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/85 border border-brand-teal/40 text-brand-teal text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              <span>Reliable Riding Experience • German PMS V3F Technology</span>
            </div>

            {/* Fixed Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.06] text-white drop-shadow-md">
              Elevating Architecture.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-teal-200 to-white block mt-1">
                Smooth, Silent & Safe.
              </span>
            </h1>

            {/* Fixed Descriptive Paragraph */}
            <p className="text-base sm:text-lg text-slate-200/90 leading-relaxed font-normal max-w-2xl drop-shadow-sm">
              Precision-engineered elevator systems for Residential Towers, Private Villas, Commercial Atriums, Hospitals, Industrial Hubs, and Multi-Tier Car Parks. Crafted with PMS gearless German technology and bespoke architectural interiors.
            </p>

            {/* Fixed Action CTAs */}
            <div className="flex flex-wrap gap-3.5 pt-2">
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-brand-orange text-white text-sm font-bold shadow-2xl hover:bg-brand-orange-hover hover:shadow-orange-500/30 transition-all transform active:scale-95"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/interior"
                className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-slate-900/85 text-white text-sm font-bold border border-slate-700/80 hover:bg-slate-800 hover:border-brand-teal transition-all shadow-xl backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-brand-teal" />
                <span>11 Interior Cabins (KEC Series)</span>
              </Link>
            </div>

            {/* Real-World Environment Scene Switcher (Continuous 2s loop indicators) */}
            <div className="pt-2">
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-300 mb-2">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono">Real-World Environments (2s Auto-Loop):</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {heroScenes.map((scene, idx) => {
                  const isCurrent = idx === currentHeroIndex;
                  return (
                    <button
                      key={scene.id}
                      onClick={() => setCurrentHeroIndex(idx)}
                      className={`group relative px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                        isCurrent
                          ? "bg-slate-900/90 text-brand-orange border border-brand-orange/70 shadow-lg scale-105 backdrop-blur-md"
                          : "bg-slate-950/60 text-slate-400 border border-slate-800/80 hover:text-white hover:border-slate-700 backdrop-blur-xs"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? "bg-brand-orange" : "bg-slate-500"}`} />
                      <span>{scene.tag}</span>
                      {isCurrent && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-orange rounded-full animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Technical Metrics (Stationary) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md">
                <strong className="block text-2xl font-black text-brand-teal tracking-tight">30%</strong>
                <span className="text-[11px] font-semibold text-slate-300 block mt-0.5">PMS Energy Savings</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md">
                <strong className="block text-2xl font-black text-brand-orange tracking-tight">11</strong>
                <span className="text-[11px] font-semibold text-slate-300 block mt-0.5">Architectural Cabins</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md">
                <strong className="block text-2xl font-black text-white tracking-tight">&plusmn;3 mm</strong>
                <span className="text-[11px] font-semibold text-slate-300 block mt-0.5">Closed-Loop Leveling</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md">
                <strong className="block text-2xl font-black text-teal-300 tracking-tight">&lt;50 dB</strong>
                <span className="text-[11px] font-semibold text-slate-300 block mt-0.5">Whisper-Quiet Sound</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Bottom Telemetry Strip */}
        <div className="hidden xl:flex absolute bottom-6 right-8 xl:right-12 z-20 items-center space-x-4 px-4 py-2 rounded-2xl bg-slate-950/75 backdrop-blur-md border border-slate-800/80 text-xs shadow-xl">
          <div className="flex items-center space-x-2 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            <span className="font-semibold text-white">German PMS Gearless Drive</span>
          </div>
          <span className="text-slate-700">|</span>
          <span className="font-mono text-teal-300 font-bold">Speed: 1.75 MPS</span>
          <span className="text-slate-700">|</span>
          <span className="text-brand-orange font-bold font-mono">FL {simulatedFloor < 10 ? `0${simulatedFloor}` : simulatedFloor}</span>
        </div>
      </section>

      {/* 2. ELEVATOR SOLUTIONS BY APPLICATION (6 CORE TYPES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
            Specialized Vertical Transportation
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Elevator Solutions by Application
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Select any application type below to view tailored engineering parameters, capacity specifications, door mechanisms, and architectural photography.
          </p>
        </div>

        {/* 6 Application Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {elevatorApplications.map((app, idx) => {
            const isSelected = activeAppIndex === idx;
            return (
              <button
                key={app.id}
                onClick={() => setActiveAppIndex(idx)}
                className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center space-y-1.5 ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.03]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-brand-teal hover:bg-slate-50"
                }`}
              >
                <span className={`text-xs font-black truncate max-w-full ${isSelected ? "text-brand-orange" : "text-slate-900"}`}>
                  {app.title.split(" ")[0]}
                </span>
                <span className="text-[10px] text-slate-400 truncate max-w-full font-medium">
                  {app.subtitle.split("&")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Application Detailed Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all">
          <div className="lg:col-span-6 h-80 sm:h-96 lg:h-auto relative overflow-hidden bg-slate-950 group">
            <img
              src={activeApp.image}
              alt={activeApp.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 bg-brand-teal text-white px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md">
              {activeApp.title}
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-xs font-bold text-teal-300 block">{activeApp.subtitle}</span>
              <h3 className="text-2xl font-black">{activeApp.title}</h3>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange block">
                  Application Parameters
                </span>
                <h4 className="text-2xl font-black text-slate-900 mt-1">{activeApp.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {activeApp.description}
                </p>
              </div>

              {/* Key Quick Metrics */}
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px] font-medium">Capacity Range:</span>
                  <strong className="text-slate-900 text-sm">{activeApp.capacity}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-medium">Operating Speed:</span>
                  <strong className="text-brand-orange text-sm">{activeApp.speed}</strong>
                </div>
              </div>

              {/* Highlights Checklist */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-700 block">Engineering Highlights:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeApp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <span className="font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compatible Door Systems */}
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-700 block mb-1.5">Compatible Door Configurations:</span>
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

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <Link
                to="/specifications"
                className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-50 text-center transition-colors flex items-center justify-center space-x-1.5"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-brand-teal" />
                <span>View Full Civil Dimensions</span>
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto py-3 px-6 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold shadow-md transition-colors text-center flex items-center justify-center space-x-1.5"
              >
                <span>Request Site Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE CABIN DESIGNS SPOTLIGHT (KEC-01 to KEC-11) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* 6 Featured Cabins Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interiorSeries.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
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
          ))}
        </div>
      </section>

      {/* 4. DIRECT ON-SITE ENGINEERING SYSTEMS & SPECIFICATIONS */}
      <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-teal/20 text-brand-teal flex items-center justify-center font-black">
                <Zap className="w-6 h-6" />
              </div>
              <strong className="text-2xl font-black block text-white">PMS Gearless Motor</strong>
              <p className="text-xs text-slate-300 leading-relaxed">
                Permanent Magnet Synchronous motor consuming up to 30% less power than conventional geared units. 100% gear oil-free, eliminating oil leak hazards and maintenance downtime.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-teal-300">
                ✓ Available in MRL (Machine Roomless) configuration
              </div>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 text-brand-orange flex items-center justify-center font-black">
                <Cpu className="w-6 h-6" />
              </div>
              <strong className="text-2xl font-black block text-white">German Know-How V3F</strong>
              <p className="text-xs text-slate-300 leading-relaxed">
                Variable Voltage Variable Frequency (V3F) inverter drive providing ultra-smooth S-curve acceleration and deceleration with ±3mm flush floor landing accuracy.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-brand-orange">
                ✓ Zero jerk stops & energy regeneration
              </div>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <strong className="text-2xl font-black block text-white">Full Safety Ecosystem</strong>
              <p className="text-xs text-slate-300 leading-relaxed">
                Inbuilt CDL (Car Door Lock), Full-Height Infrared Curtain of Light (128 safety beams), and Automatic Rescue Device (ARD) guiding the cabin safely during utility outages.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-teal-200">
                ✓ Automated daily brake holding tests
              </div>
            </div>
          </div>

          {/* Door Systems Overview */}
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
        </div>
      </section>

      {/* 5. INTERACTIVE ELEVATOR FINDER WIZARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ElevatorFinder
          onSelectProduct={(id) => {
            const match = productsData.find((p) => p.id === id);
            if (match) setSelectedProduct(match);
          }}
        />
      </section>

      {/* 6. DIRECT ACTION & CONSULTATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

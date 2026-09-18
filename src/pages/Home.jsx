import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Download,
  CheckCircle2,
  Award,
  Compass,
  ChevronRight,
  DoorClosed,
  DoorOpen,
  SlidersHorizontal,
  VolumeX,
  Activity,
  Shield,
  Layers,
  Building2,
  Cpu,
  Wrench,
  Clock,
  Phone
} from "lucide-react";
import { companyData } from "../data/companyData";
import { elevatorMaster } from "../data/elevatorMaster";
import { interiorSeries } from "../data/interiorsMaster";
import { technologiesMaster } from "../data/technologiesMaster";
import { servicesMaster } from "../data/servicesMaster";
import CustomizationProcess from "../components/CustomizationProcess";
import SectionHeader from "../components/common/SectionHeader";
import TrustStats from "../components/common/TrustStats";
import FAQAccordion from "../components/common/FAQAccordion";
import CTASection from "../components/common/CTASection";
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
    image: assetUrl("/assets/generated/home-elevator.jpg"),
  },
  {
    id: "commercial",
    tag: "Commercial Atrium",
    title: "Atriums & Shopping Malls",
    subtitle: "High-traffic panoramic capsule elevators with smart dispatch",
    image: assetUrl("/assets/generated/capsule-hero.jpg"),
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

// 5 Visual Cards immediately below Hero
const efficiencyCards = [
  {
    title: "Energy Efficient",
    tagline: "Up to 30% Power Savings",
    desc: "Permanent Magnet Synchronous (PMS) gearless motors and V3F vector drives minimize electricity draw and reduce building peak electrical load.",
    icon: Zap,
    color: "teal"
  },
  {
    title: "Low Noise",
    tagline: "Sub-50 dB Acoustic Comfort",
    desc: "Direct-drive gearless machinery eliminates mechanical gear meshing noise and vibration, providing whisper-quiet journeys.",
    icon: VolumeX,
    color: "teal"
  },
  {
    title: "Smooth Operation",
    tagline: "Precision S-Curve Acceleration",
    desc: "German-engineered inverter curves guarantee jerk-free start/stop transitions with millimeter-level leveling accuracy (±3 mm).",
    icon: Activity,
    color: "teal"
  },
  {
    title: "Long-Lasting Components",
    tagline: "Rigorous Factory Testing",
    desc: "100% factory-bench tested parts from our Bakrol facility, high-strength steel wire ropes, and solid-state LED systems with 6x lifespan.",
    icon: Shield,
    color: "orange"
  },
  {
    title: "Customized Solutions",
    tagline: "Tailored to Any Shaft",
    desc: "Bespoke hoistway dimensions, shallow pit depths (550 mm for villas), MRL rooftop savings, and single-phase 220V domestic power compatibility.",
    icon: SlidersHorizontal,
    color: "orange"
  }
];

// Quick Topic Directory Cards with details and direct links
const topicCards = [
  {
    title: "Elevator Applications",
    tagline: "Custom Shaft Engineering",
    desc: "Passenger, Panoramic Capsule, Hospital Bed, Heavy Goods, Car Parking, MRL, and Luxury Villa Home lifts.",
    link: "/elevators",
    cta: "Explore Elevators",
    icon: Building2,
    badge: "Applications"
  },
  {
    title: "Door Systems",
    tagline: "Manual & Automatic Entrances",
    desc: "VVVF automatic center-opening, telescopic sliding, imperforated folding gates, and architectural glass doors.",
    link: "/doors",
    cta: "Explore Door Systems",
    icon: DoorOpen,
    badge: "Entrances"
  },
  {
    title: "Cabin Interiors",
    tagline: "Curated Cabin Series",
    desc: "Basic, Standard, Semi, Design, and Premium series with decorative laser etching patterns and modern COP/LOPs.",
    link: "/interiors",
    cta: "Explore Interiors",
    icon: Sparkles,
    badge: "Aesthetics"
  },
  {
    title: "Technology & Machines",
    tagline: "Gearless PMSM & Geared Drives",
    desc: "High-efficiency Permanent Magnet direct-drive motors, German-know-how V3F inverters, and failsafe ARD.",
    link: "/technology",
    cta: "Explore Technology",
    icon: Cpu,
    badge: "Engineering"
  },
  {
    title: "Service & Maintenance",
    tagline: "Factory Care & 24/7 Response",
    desc: "Emergency technician squads across Gujarat, preventive health audits, genuine spare parts, and modernization.",
    link: "/services",
    cta: "Explore Services",
    icon: Wrench,
    badge: "Support"
  }
];

// 5 Engineering Pillars for Why Choose Us
const whyUsPillars = [
  {
    title: "Direct In-House Manufacturing",
    subtitle: "Bakrol Fabrication Plant",
    desc: "Every hoistway component, cabin frame, and door system is precision-manufactured and bench-tested at our Bakrol facility under strict quality controls.",
    icon: Award,
    highlight: "Zero Intermediary Markups"
  },
  {
    title: "Dedicated CAD & Civil Design Office",
    subtitle: "Nikol Engineering Headquarters",
    desc: "Our specialized design office generates custom AutoCAD General Arrangement (GA) layouts and structural load calculations for architects and builders.",
    icon: Compass,
    highlight: "Turnkey Civil Guidance"
  },
  {
    title: "IS 14665 & BIS Standard Compliance",
    subtitle: "Certified Safety Ecosystem",
    desc: "Full adherence to Indian Standards and international safety codes, featuring certified overspeed governors, progressive safety gear, and Inbuilt CDL locks.",
    icon: ShieldCheck,
    highlight: "100% Safety Certified"
  },
  {
    title: "24/7 Breakdown & Rapid Response",
    subtitle: "Regional Technician Squads",
    desc: "Mobile service engineers stationed across Ahmedabad, Gandhinagar, and Gujarat ready for immediate emergency breakdown callouts with genuine parts.",
    icon: Clock,
    highlight: "Immediate Assistance"
  },
  {
    title: "Bespoke Architectural Flexibility",
    subtitle: "Tailored to Any Building",
    desc: "Shallow pit depth (550 mm for villas), compact overhead (3100 mm), single-phase 220V household power compatibility, and machine-roomless (MRL) designs.",
    icon: SlidersHorizontal,
    highlight: "Fits Challenging Shafts"
  }
];

export default function Home({ onOpenBrochure }) {
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Carousel timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroScenes.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: Viewport-fitted, smooth background loop, fixed copy       */}
      {/* ========================================================================= */}
      <section className="relative w-full h-[calc(100vh-64px)] min-h-[580px] max-h-[820px] bg-slate-950 overflow-hidden flex items-center">
        {/* Animated Background Scenes */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {heroScenes.map((scene, index) => {
            const isActive = index === currentHeroIndex;
            return (
              <div
                key={scene.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={scene.image}
                  alt={scene.title}
                  className={`w-full h-full object-cover object-right md:object-center transition-transform duration-7000 ease ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/40" />
              </div>
            );
          })}
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-teal/20 border border-brand-teal/40 text-brand-teal text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              <span>IS 14665 & BIS Certified Elevators</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Smarter Elevators.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-teal-200 to-white">
                  Greater Efficiency.
                </span>
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                We engineer and manufacture elevator solutions focused on energy efficiency, smooth performance, comfort, and long-term reliability. With a range of 8 elevator applications, traction technologies, door systems, and custom configurations, we deliver solutions tailored to your building.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                to="/elevators"
                className="px-6 py-3.5 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-teal/25 hover:shadow-brand-teal/40 transition-all flex items-center space-x-2 group"
              >
                <span>Explore Elevators</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all flex items-center space-x-2"
              >
                <span>Discuss Your Requirement</span>
              </Link>
              {onOpenBrochure && (
                <button
                  onClick={onOpenBrochure}
                  className="px-4 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 text-xs sm:text-sm font-medium transition-all flex items-center space-x-1.5 cursor-pointer"
                  title="View Technical PDF Brochure"
                >
                  <Download className="w-4 h-4 text-brand-teal" />
                  <span className="hidden sm:inline">Brochure (PDF)</span>
                </button>
              )}
            </div>

            {/* Trust Highlights Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                <span>Up to 30% Energy Savings</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                <span>Direct Bakrol Manufacturing</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                <span>24/7 Breakdown Assistance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scene Indicator Navigation Dots */}
        <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center items-center space-x-2">
          {heroScenes.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => setCurrentHeroIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
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
      {/* 2. CORE TOPIC EXPLORER ROW: Details & Direct Links to Specific Pages       */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-30">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-0.5">
                Quick Directory
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Vertical Transportation Catalog & Systems
              </h2>
            </div>
            <p className="text-xs text-slate-500 max-w-md">
              Select any core engineering domain below to inspect specifications, CAD hoistway drawings, and certified component catalogs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {topicCards.map((topic, idx) => {
              const Icon = topic.icon;
              return (
                <ScrollReveal
                  key={topic.title}
                  direction="up"
                  delay={idx * 40}
                  distance={15}
                  className="h-full"
                >
                  <div className="bg-slate-50 hover:bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-brand-teal hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-teal group-hover:bg-brand-teal group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-200/60 text-slate-700 uppercase tracking-wider">
                          {topic.badge}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-teal transition-colors">
                          {topic.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-brand-orange block mt-0.5">
                          {topic.tagline}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed line-clamp-3">
                        {topic.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 mt-3">
                      <Link
                        to={topic.link}
                        className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-900 group-hover:text-brand-teal transition-colors"
                      >
                        <span>{topic.cta}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ENGINEERED FOR EFFICIENCY: 5 Visual Cards Immediately Below Hero        */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
                Core Engineering Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Engineered for Efficiency
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-1">
                Five technical benchmarks that define every Krupa elevator installation from our Nikol design office to your building shaft.
              </p>
            </div>
            <Link
              to="/technology"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-hover"
            >
              <span>Explore Green Tech & PMS Drives</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {efficiencyCards.map((card, idx) => {
              const Icon = card.icon;
              const isOrange = card.color === "orange";
              return (
                <ScrollReveal
                  key={card.title}
                  direction="up"
                  delay={idx * 50}
                  distance={20}
                  className="h-full"
                >
                  <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div className="space-y-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isOrange
                            ? "bg-orange-50 text-brand-orange group-hover:bg-brand-orange group-hover:text-white"
                            : "bg-teal-50 text-brand-teal group-hover:bg-brand-teal group-hover:text-white"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-teal transition-colors">
                          {card.title}
                        </h3>
                        <span className="text-[11px] font-bold text-teal-700 block mt-0.5">
                          {card.tagline}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TRUST STATS BAR: Key quantitative metrics & engineering authority       */}
      {/* ========================================================================= */}
      <TrustStats />

      {/* ========================================================================= */}
      {/* 4. WHY CHOOSE KRUPA ELEVATORS ("WHY US")                                   */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block mb-1">
              Proven Engineering Authority
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Why Choose Krupa Elevators
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-1">
              Direct factory manufacturing, certified safety engineering, and dedicated CAD assistance tailored to your specific building shaft.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-teal hover:text-teal-700"
          >
            <span>Book a Site Survey with Nikol Office</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {whyUsPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.title}
                direction="up"
                delay={idx * 50}
                distance={20}
                className="h-full"
              >
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 text-brand-teal group-hover:bg-brand-teal group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-teal transition-colors">
                        {pillar.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-500 block mt-0.5">
                        {pillar.subtitle}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 mt-3 text-[11px] font-bold text-brand-orange">
                    {pillar.highlight}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ABOUT KRUPA ELEVATORS                                                  */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-12 text-white border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
                <Building2 className="w-3.5 h-3.5" />
                <span>Manufacturing Authority Since 2008</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Trusted Elevator Solutions Across Gujarat & Western India
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                A flexible solution that unifies form and function. An all-round elevator applicable to multiple building types, with outstanding architectural flexibility for cabin, door, and shaft dimensions. Precision assures a smooth, quiet, and safe user experience.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <strong className="text-teal-300 block font-bold text-sm">Inspiring Design</strong>
                  <span className="text-slate-400 text-[11px]">Architectural SS & glass</span>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <strong className="text-brand-orange block font-bold text-sm">Improved Comfort</strong>
                  <span className="text-slate-400 text-[11px]">Sub-50dB closed loop</span>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <strong className="text-teal-300 block font-bold text-sm">Eco-Efficiency</strong>
                  <span className="text-slate-400 text-[11px]">Up to 30% PMS savings</span>
                </div>
                <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                  <strong className="text-brand-orange block font-bold text-sm">Ideal Partner</strong>
                  <span className="text-slate-400 text-[11px]">Full lifecycle care</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-800/90 rounded-2xl p-6 border border-slate-700 space-y-4 text-center sm:text-left">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-wider block">
                Direct Engineering Facility
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nikol design headquarters handles civil layouts, structural analysis, and AutoCAD assistance. In-house fabrication takes place at our Bakrol plant.
              </p>
              <div className="pt-2 border-t border-slate-700 flex flex-col gap-2">
                <Link
                  to="/elevators"
                  className="w-full py-2.5 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-xs font-bold text-center transition-colors"
                >
                  Browse Elevator Catalog
                </Link>
                <Link
                  to="/contact"
                  className="w-full py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-bold text-center transition-colors"
                >
                  Consult Nikol Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ELEVATOR APPLICATIONS: 8 Models with Direct Detail Links                */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
              Comprehensive Range
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Elevator Applications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-1">
              Click "View Details" on any elevator to explore its dedicated engineering page, structural breakdown, and GA hoistway layout drawings.
            </p>
          </div>
          <Link
            to="/elevators"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-teal hover:text-teal-700"
          >
            <span>Explore All Elevator Models</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {elevatorMaster.map((elevator, idx) => (
            <ScrollReveal
              key={elevator.id}
              direction="up"
              delay={idx * 30}
              distance={20}
              className="h-full"
            >
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
                <div>
                  <div className="h-44 bg-slate-900 relative overflow-hidden group/img">
                    <img
                      src={elevator.image}
                      alt={elevator.name}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-teal-300 border border-slate-700">
                      {elevator.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-base font-black text-slate-900 group-hover:text-brand-teal transition-colors">
                      {elevator.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {elevator.overview}
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex justify-between text-[11px] text-slate-500">
                      <span>Speed: <strong className="text-slate-800">{elevator.standardSpecs.ratedSpeed}</strong></span>
                      <span>Cap: <strong className="text-brand-teal">{elevator.standardSpecs.capacity.split(' ')[0]}P</strong></span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to={`/elevators/${elevator.id}`}
                    className="w-full py-2 px-3 rounded-xl bg-slate-100 group-hover:bg-slate-900 text-slate-800 group-hover:text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. ELEVATOR TECHNOLOGIES PREVIEW: PMS, Gearless, Inverter, LED, etc.      */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block mb-1">
                Green Innovation
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Elevator Technologies
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
                Advanced German-know-how V3F drives, Permanent Magnet Synchronous traction, smart microprocessors, and ARD failsafes.
              </p>
            </div>
            <Link
              to="/technology"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-xs font-bold transition-all shadow-sm shrink-0"
            >
              <span>Explore All Technologies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologiesMaster.pillars.slice(0, 6).map((tech) => (
              <div
                key={tech.id}
                className="bg-slate-800/70 p-5 rounded-2xl border border-slate-700/70 hover:border-brand-teal/60 transition-all space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-500/20 text-teal-300 border border-teal-500/30 uppercase">
                    {tech.tag}
                  </span>
                  <h3 className="text-base font-bold text-white">{tech.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {tech.summary}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-700/60 text-[11px] text-teal-200 font-medium">
                  {tech.claim}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. INTERIOR COLLECTIONS: Architectural Cabin Preview                      */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block mb-1">
              Freedom of Design
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Interior Collections
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-1">
              Classified across Basic, Standard, Semi, Design, and Premium series with titanium gold, rose gold, and laser etched mirrors.
            </p>
          </div>
          <Link
            to="/interiors"
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-orange hover:text-brand-orange-hover"
          >
            <span>Launch Full Cabin Studio</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interiorSeries.slice(0, 6).map((item, idx) => (
            <ScrollReveal
              key={item.id}
              direction="up"
              delay={idx * 50}
              distance={20}
              className="h-full"
            >
              <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
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
                    to="/interiors"
                    className="w-full flex items-center justify-center space-x-1 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    <span>Inspect Materials & Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. DOOR SYSTEMS PREVIEW: Manual vs. Automatic Comparison                  */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/80 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
                Entrance Configurations
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Door Systems: Manual & Automatic
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-1">
                Engineered for high-traffic speed, economic shaft footprint constraints, and architectural visibility.
              </p>
            </div>
            <Link
              to="/doors"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-brand-teal text-white text-xs font-bold transition-all shadow-xs shrink-0 flex items-center space-x-2"
            >
              <span>Explore Door Systems</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center space-x-2 text-brand-orange">
                <DoorClosed className="w-5 h-5" />
                <h3 className="text-base font-bold text-slate-900">Manual Doors</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Collapsible gates, imperforated folding leaves, and powder-coated full glass swing doors. Suited for residential apartments and tight shafts with economic requirements.
              </p>
              <Link
                to="/doors"
                className="inline-flex items-center space-x-1 text-xs font-bold text-brand-orange hover:text-brand-orange-hover pt-1"
              >
                <span>Browse Manual Doors</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center space-x-2 text-brand-teal">
                <DoorOpen className="w-5 h-5" />
                <h3 className="text-base font-bold text-slate-900">Automatic Doors</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                VVVF center-opening, telescopic side-slide, big vision glass, and 4-panel freight entrance systems. Fast, silent, and safe with full-height light curtains.
              </p>
              <Link
                to="/doors"
                className="inline-flex items-center space-x-1 text-xs font-bold text-brand-teal hover:text-teal-700 pt-1"
              >
                <span>Browse Automatic Doors</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CUSTOMIZATION SECTION: 8-Step Engineering Workflow                      */}
      {/* ========================================================================= */}
      <CustomizationProcess />

      {/* ========================================================================= */}
      {/* 10. SERVICE & MAINTENANCE PREVIEW                                         */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block mb-1">
                Support Beyond Installation
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Professional Elevator Service & Care
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1">
                Combining specialized certified technicians, supervisory quality audits, genuine OEM spare parts, and 24/7 telemetry monitoring.
              </p>
            </div>
            <Link
              to="/services"
              className="px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-all shadow-sm shrink-0 flex items-center space-x-2"
            >
              <span>Explore AMC Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {servicesMaster.pillars.slice(0, 3).map((serv) => (
              <div
                key={serv.id}
                className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2"
              >
                <span className="text-xs font-bold text-teal-300 font-mono">
                  PILLAR {serv.number}
                </span>
                <h3 className="text-base font-bold text-white">{serv.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {serv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 11. FAQS SECTION: Answers to Frequently Asked Questions                   */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Transparent Guidance"
          title="Frequently Asked Questions"
          description="Clear answers regarding civil pit depth, overhead clearance, single-phase 220V power, MRL space savings, and safety mechanisms."
        />
        <FAQAccordion defaultOpen={0} />
      </section>

      {/* ========================================================================= */}
      {/* 12. TECHNICAL CTA: Discuss Your Elevator Requirement                      */}
      {/* ========================================================================= */}
      <CTASection
        title="Discuss Your Elevator Requirement"
        subtitle="Our senior technical consultants provide complimentary site surveys, custom CAD layouts, and verified civil shaft calculations across Ahmedabad, Gujarat, and Western India."
        badge="Nikol Design Office & Direct Bakrol Manufacturing"
        variant="gradient"
      />
    </div>
  );
}

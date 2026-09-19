import React, { useState } from "react";
import {
  Building2,
  DoorOpen,
  DoorClosed,
  Cpu,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  X,
  Info,
  Layers,
  Phone,
  Compass,
  FileSpreadsheet,
  Check,
  Zap,
  SlidersHorizontal
} from "lucide-react";
import { elevatorMaster } from "../data/elevatorMaster";
import { elevatorApplicationDetails } from "../data/elevatorApplicationDetails";
import { getElevatorSingleTable } from "../data/elevatorSingleTables";
import {
  manualDoorSpecificationsTable,
  automaticDoorSpecificationsTable
} from "../data/doorSpecificationsTable";
import MergedSpecTable from "../components/MergedSpecTable";
import CTASection from "../components/common/CTASection";
import ScrollReveal from "../components/ScrollReveal";
import WhatsAppIcon from "../components/common/WhatsAppIcon";
import StickySidebarNav from "../components/common/StickySidebarNav";
import { assetUrl } from "../utils/assetPath";
import PageHero from "../components/common/PageHero";


export default function Products({ onOpenBrochure }) {
  // Lightbox zoom modal state
  const [lightboxImg, setLightboxImg] = useState(null);

  // Sidebar navigation sections definition
  const sidebarSections = [
    {
      id: "elevator-types-section",
      label: "1. Elevator Models",
      subItems: elevatorMaster.map((e) => ({
        id: `elev-${e.id}`,
        label: e.name.replace(" Elevator", "")
      }))
    },
    {
      id: "elevator-doors-section",
      label: "2. Door Systems",
      subItems: [
        { id: "manual-doors-section", label: "Manual Doors (5 Models)" },
        { id: "automatic-doors-section", label: "Automatic Doors (4 Models)" }
      ]
    }
  ];

  // Manufactured Manual Doors data
  const manufacturedManualDoors = [
    {
      id: "manual-collapsible",
      name: "Manual Collapsible Gate",
      tagline: "Lattice Scissors Sliding Action",
      image: assetUrl("/assets/doors/manual_collapsible_door.jpg"),
      clearOpening: "700 – 1200 mm",
      height: "2000 mm",
      desc: "Robust cold-rolled steel lattice channels offering maximum entrance aperture in compact building shafts.",
      idealFor: "Residential Apartments, Freight Hoists, Economical Buildings"
    },
    {
      id: "manual-imperforated",
      name: "Manual Imperforated Folding Door",
      tagline: "Multi-Leaf Folding with Vision Glass",
      image: assetUrl("/assets/doors/manual_imperforated_door.jpg"),
      clearOpening: "700 – 1000 mm",
      height: "2000 mm",
      desc: "Multi-leaf folding sliding action with top roller suspension and narrow vertical safety vision glass.",
      idealFor: "Factories, Warehouses, Mid-Rise Residential, Dusty Areas"
    },
    {
      id: "manual-telescopic",
      name: "Manual Telescopic Sliding Door",
      tagline: "Two-Speed Smooth Manual Sliding",
      image: assetUrl("/assets/doors/manual_telescopic_perforated.jpg"),
      clearOpening: "700 – 900 mm",
      height: "2000 mm",
      desc: "Differential speed sliding action nesting two panels into one side, maximizing clear entrance width in narrow wells.",
      idealFor: "Low-Rise Residential Buildings, Narrow Wells"
    },
    {
      id: "manual-glass-swing",
      name: "M.S. Powder Coated Glass Swing Door",
      tagline: "Concealed Hydraulic Closer + Toughened Glass",
      image: assetUrl("/assets/doors/manual_glass_swing_door.jpg"),
      clearOpening: "700 – 800 mm",
      height: "2000 – 2100 mm",
      desc: "Architectural MS box frame with 10 mm toughened safety glass and hydraulic anti-slam speed control.",
      idealFor: "Private Bungalows, Luxury Villas, Boutique Showrooms"
    },
    {
      id: "manual-flush-swing",
      name: "Manual Flush Steel Swing Door",
      tagline: "Double-Skinned Acoustic Core",
      image: assetUrl("/assets/doors/manual_telescopic_solid.jpg"),
      clearOpening: "700 – 900 mm",
      height: "2000 mm",
      desc: "Double-skinned galvanized steel door filled with mineral wool for fire resistance and acoustic isolation.",
      idealFor: "Residential Landings, Medical Clinics, Office Landings"
    }
  ];

  // Manufactured Automatic Doors data
  const manufacturedAutoDoors = [
    {
      id: "auto-2-panel-center",
      name: "S.S. Center-Opening Autodoor (2-Panel)",
      tagline: "VVVF Synchronous Belt Drive",
      image: assetUrl("/assets/doors/auto_ss_center_opening.jpg"),
      clearOpening: "700, 800, 900, 1000, 1100 mm",
      height: "2000 – 2100 mm",
      desc: "Hairline stainless steel AISI 304 power sliding door with closed-loop VVVF motor and non-contact light curtain.",
      idealFor: "Passenger Elevators, High-Rise Towers, Hotels, IT Parks"
    },
    {
      id: "auto-4-panel-center",
      name: "Center-Opening Autodoor (4-Panel)",
      tagline: "Heavy-Duty Dual-Drive High-Capacity",
      image: assetUrl("/assets/doors/auto_four_panel_door.jpg"),
      clearOpening: "1200 – 2500 mm",
      height: "2100 – 2400 mm",
      desc: "Extra-wide entrance opening for hospital stretcher trolleys and vehicles, supported by reinforced sill tracks.",
      idealFor: "Hospital Stretcher Lifts, Automobile Elevators, Heavy Cargo"
    },
    {
      id: "auto-side-telescopic",
      name: "S.S. Telescopic Autodoor (Side-Opening)",
      tagline: "Space-Saving 2-Panel Side Slide",
      image: assetUrl("/assets/doors/auto_ss_telescopic_door.jpg"),
      clearOpening: "700 – 1200 mm",
      height: "2000 mm",
      desc: "2:1 differential speed synchronization nesting panels into one side, ideal where shaft width is constrained.",
      idealFor: "Narrow Hoistway Shafts, Residential Apartments"
    },
    {
      id: "auto-panoramic-glass",
      name: "Panoramic Glass Center-Opening Autodoor",
      tagline: "Full-Vision Tempered Glass",
      image: assetUrl("/assets/doors/auto_glass_full_vision.jpg"),
      clearOpening: "800 – 1100 mm",
      height: "2000 – 2100 mm",
      desc: "Laminated 10 mm safety glass with stainless steel framing clamps and whisper-quiet bottom guides.",
      idealFor: "Capsule Elevators, Shopping Atriums, Luxury Hotels"
    },
    {
      id: "auto-small-vision",
      name: "Small Vision Glass Panel Autodoor",
      tagline: "Stainless Steel with Safety Vision Window",
      image: assetUrl("/assets/doors/auto_small_vision_door.jpg"),
      clearOpening: "700 – 1000 mm",
      height: "2000 mm",
      desc: "Combines the durability of stainless steel with a sealed safety vision window for visual hallway communication.",
      idealFor: "Commercial Offices, Educational Institutes, Hospitals"
    },
    {
      id: "auto-designer-gold",
      name: "Titanium Gold Designer Autodoor",
      tagline: "PVD Coated Floral & Geometric Etchings",
      image: assetUrl("/assets/doors/auto_glass_big_vision.jpg"),
      clearOpening: "800 – 1000 mm",
      height: "2000 – 2100 mm",
      desc: "Prestige titanium gold stainless steel with bespoke computer-etched surface motifs matching luxury cabin interiors.",
      idealFor: "Executive Penthouses, 5-Star Hotels, Heritage Clubs"
    }
  ];

  return (
    // <div className="min-h-screen bg-slate-50 pt-20 pb-20">
    <div className="min-h-screen bg-slate-50 pt-8 pb-8 ">
      {/* ========================================================================= */}
      {/* 1. PAGE HEADER (Client-Friendly & Minimal)                                */}
      {/* ========================================================================= */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-brand-teal text-xs font-bold uppercase tracking-widest mb-1">
              <Compass className="w-4 h-4" />
              <span>Architectural Elevator & Entrance Catalogue</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Elevator Models & Landing Door Systems
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mt-1 leading-relaxed">
              Explore purpose-engineered elevator applications, structural hoistway layout schematics, and high-safety automatic and manual entrance door systems adhering to BIS IS 14665 standards.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">
            <a
              href="tel:+919727764868"
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-brand-teal text-white text-xs font-bold flex items-center space-x-2 transition-all shadow-xs cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>Call: +91 97277 64868</span>
            </a>
            <a
              href={`https://wa.me/919727764868?text=${encodeURIComponent(
                "Hello Krupa Elevators, I would like to consult regarding elevator models and technical hoistway specifications."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center space-x-2 shadow-xs transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div> */}

      <PageHero
        icon={Building2}
        badge="Commercial Elevator Solutions"
        title="Passenger & Commercial Elevators"
        description="Your description here..."
        whatsappMessage="Hello Krupa Elevators, I would like to consult regarding commercial elevators."
      />

      {/* Main Container with Sticky Navigation + Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sticky Navigation (Mobile Horizontal Bar + Desktop Left Sidebar) */}
          <StickySidebarNav
            sections={sidebarSections}
            title="Elevator Hub"
          />

          {/* Main Content Body */}
          <div className="flex-1 w-full min-w-0 space-y-16">
            {/* ===================================================================== */}
            {/* SECTION 1: ELEVATOR TYPES                                             */}
            {/* Hierarchy: Elevator Type → Description → Visual/Layout → Specs        */}
            {/* ===================================================================== */}
            <section id="elevator-types-section" className="space-y-8 scroll-mt-24">
              {/* Section Title & Subtitle */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
                    Section 1
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Elevator Types & Applications
                  </h2>
                </div>
                {/* <span className="text-xs text-brand-teal font-bold bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
                  8 Certified Models Available
                </span> */}
              </div>

              {/* Open Field Display of All 8 Elevator Models */}
              <div className="space-y-16">
                {elevatorMaster.map((elev) => {
                  const appData =
                    elevatorApplicationDetails[elev.id] ||
                    elevatorApplicationDetails.passenger;
                  const singleElevatorTable = getElevatorSingleTable(elev.id);
                  const drawingKeys = Object.keys(elev.drawings || {});
                  const drawingUrl =
                    elev.drawings?.main ||
                    elev.drawings?.[drawingKeys[0]];

                  return (
                    <div
                      key={elev.id}
                      id={`elev-${elev.id}`}
                      className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-10 scroll-mt-28"
                    >
                      {/* ----------------------------------------------------------------- */}
                      {/* 1. ELEVATOR TYPE & DESCRIPTION (Client-Friendly)                  */}
                      {/* ----------------------------------------------------------------- */}
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left: Photograph */}
                        <div className="lg:col-span-5 space-y-3">
                          <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 shadow-md group h-80 sm:h-96">
                            <img
                              src={elev.image}
                              alt={elev.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent pointer-events-none" />

                            <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-teal-300 border border-slate-700">
                              {appData.category || elev.category}
                            </div>

                            <button
                              onClick={() => setLightboxImg(elev.image)}
                              className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white transition-all cursor-pointer"
                              title="Zoom Elevator"
                            >
                              <Maximize2 className="w-4 h-4" />
                            </button>

                            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                              <h3 className="text-xl font-black">{elev.name}</h3>
                              <p className="text-xs text-slate-300 font-medium">
                                {appData.tagline || elev.tagline}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Right: Client-Friendly Description & Key Parameters */}
                        <div className="lg:col-span-7 space-y-5">
                          <div className="space-y-2 border-b border-slate-100 pb-4">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-brand-teal text-xs font-bold border border-teal-200">
                                {appData.category || elev.category}
                              </span>

                            </div>

                            <h3 className="text-2xl font-black text-slate-900">
                              {elev.name}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-brand-teal">
                              {appData.tagline || elev.tagline}
                            </p>

                            {appData.quote && (
                              <blockquote className="text-xs text-slate-700 italic border-l-4 border-brand-teal pl-3 py-1 bg-teal-50/40 rounded-r-xl">
                                "{appData.quote}"
                              </blockquote>
                            )}

                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                              {appData.description || elev.overview}
                            </p>
                          </div>

                          {/* Key Technical Parameters (Easy to scan) */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                              <span className="text-[10px] uppercase font-bold text-slate-400 block">Rated Speed</span>
                              <span className="font-bold text-slate-900 text-sm">
                                {appData.specs?.availableRatedSpeed || elev.standardSpecs?.ratedSpeed || "0.65 – 1.75 m/s"}
                              </span>
                            </div>
                            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                              <span className="text-[10px] uppercase font-bold text-slate-400 block">Capacity Range</span>
                              <span className="font-bold text-brand-teal text-sm">
                                {appData.specs?.availableRatedCapacity || elev.standardSpecs?.capacity || "4 to 26 Persons"}
                              </span>
                            </div>
                            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                              <span className="text-[10px] uppercase font-bold text-slate-400 block">Max Travel</span>
                              <span className="font-bold text-slate-900 text-sm">
                                {appData.specs?.maxTravelHeight || elev.standardSpecs?.maxTravel || "Up to G+25 Floors"}
                              </span>
                            </div>
                            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                              <span className="text-[10px] uppercase font-bold text-slate-400 block">Passengers / Duty</span>
                              <span className="font-bold text-slate-900 text-sm">
                                {appData.specs?.maxPassengers || "04 to 26 Passengers"}
                              </span>
                            </div>
                          </div>

                        </div>
                      </div>

                      {/* ----------------------------------------------------------------- */}
                      {/* 2. VISUAL / STRUCTURE LAYOUT DESIGN ILLUSTRATION                   */}
                      {/* ----------------------------------------------------------------- */}
                      <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
                            Architectural Structure & Layout
                          </span>
                          <h4 className="text-lg sm:text-xl font-black text-slate-900">
                            {elev.name} — General Arrangement (GA) Layout & Clearances
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-600">
                            The diagram below visually illustrates how physical car platform dimensions, lift-well civil clearances, and entrance openings correspond to the engineering specification table.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                          {/* Structure Layout CAD Drawing */}
                          <div className="lg:col-span-6 bg-slate-950 rounded-3xl p-4 border border-slate-800 flex flex-col items-center justify-center relative group min-h-[300px]">
                            <img
                              src={drawingUrl}
                              alt={`${elev.name} Structural Drawing`}
                              className="max-h-72 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
                            />
                            <button
                              onClick={() => setLightboxImg(drawingUrl)}
                              className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white text-slate-900 text-xs font-bold flex items-center space-x-1.5 shadow-md transition-all cursor-pointer"
                            >
                              <Maximize2 className="w-3.5 h-3.5 text-brand-teal" />
                              <span>Zoom Layout</span>
                            </button>
                          </div>

                          {/* How to Read the Structure Diagram (Non-Technical Guide) */}
                          <div className="lg:col-span-6 space-y-3">
                            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-2 text-xs">
                              <strong className="text-slate-900 block text-sm">
                                Understanding the Structural Dimensions:
                              </strong>
                              <ul className="space-y-1.5 text-slate-700">
                                <li>
                                  <strong className="text-brand-orange">Dimension A × B (Platform):</strong> Usable width and depth of the elevator car inside.
                                </li>
                                <li>
                                  <strong className="text-brand-teal">Dimension C × D (Lift-Well):</strong> Required finished internal width and depth of the civil masonry/RCC shaft.
                                </li>
                                <li>
                                  <strong className="text-slate-900">Dimension E (Entrance):</strong> Clear door opening width for passengers, stretchers, or cargo.
                                </li>
                                <li>
                                  <strong className="text-slate-700">Pit & Overhead:</strong> Essential vertical clearances at shaft bottom and roof for buffer safety and maintenance.
                                </li>
                              </ul>
                            </div>

                            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 flex items-center justify-between">
                              <span>All dimensions in millimeters (mm) per IS 14665 standard.</span>
                              <span className="font-semibold text-slate-700">100% CAD Compliant</span>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-600">
                              Exact engineering specifications for {elev.name}, matching the structural callouts (A, B, C, D, E) above.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* ----------------------------------------------------------------- */}
                      {/* 3. SPECIFICATIONS TABLE (Placed Below Layout)                     */}
                      {/* ----------------------------------------------------------------- */}
                      <div className="space-y-2">
                        {/* Rendered Table */}
                        <MergedSpecTable tableData={singleElevatorTable} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ===================================================================== */}
            {/* SECTION 2: DOORS SECTION                                              */}
            {/* Grid presentation for Manual & Automatic Doors + 2 Separate Tables    */}
            {/* ===================================================================== */}
            <section id="elevator-doors-section" className="space-y-12 scroll-mt-24">
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <div className="space-y-1 max-w-3xl">
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
                    Section 2
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                    Elevator Landing Door Systems
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Over 70% of elevator passenger interaction occurs at the entrance. Krupa door systems are certified for over 3,000,000 duty cycles with strict adherence to safety, reliability, and speed.
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-brand-teal bg-teal-50 border border-teal-200 px-3.5 py-1.5 rounded-full shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                  <span>IS 14665 & Fire Rated</span>
                </div>
              </div>

              {/* ------------------------------------------------------------------- */}
              {/* CATEGORY 1: MANUAL DOORS                                            */}
              {/* Hierarchy: Category → Types & Images → Layout → Specifications      */}
              {/* ------------------------------------------------------------------- */}
              <div id="manual-doors-section" className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 scroll-mt-24">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        Manual Door Systems
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                      Economically suited for residential apartments, industrial goods hoists, and compact shafts where maximizing internal cabin width within restricted masonry is paramount.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-brand-orange bg-orange-50 border border-orange-200 px-3 py-1 rounded-full shrink-0">
                    5 Manufactured Models
                  </span>
                </div>

                {/* Grid of Manual Door Types */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {manufacturedManualDoors.map((door) => (
                    <div
                      key={door.id}
                      className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between group hover:shadow-md transition-all"
                    >
                      <div>
                        <div className="h-44 bg-slate-950 relative overflow-hidden">
                          <img
                            src={door.image}
                            alt={door.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-3 left-3 text-white text-xs font-bold drop-shadow-sm">
                            {door.tagline}
                          </div>
                        </div>

                        <div className="p-4 space-y-2">
                          <h4 className="font-black text-sm text-slate-900">
                            {door.name}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {door.desc}
                          </p>
                          <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 space-y-1">
                            <div>Opening (E): <strong className="text-slate-800">{door.clearOpening}</strong></div>
                            <div>Recommended: <span className="text-brand-teal font-medium">{door.idealFor}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Manual Door Structure / Layout Diagram */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                      Manual Door Entrance Layout Design
                    </span>
                    <h4 className="text-base font-black text-slate-900">
                      Entrance Structural Layout & Architrave Details
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-5 bg-white p-3 rounded-2xl border border-slate-200 flex items-center justify-center">
                      <img
                        src={assetUrl("/assets/drawings/manual_door_drawing.png")}
                        alt="Manual Door Structural Layout"
                        className="max-h-56 w-auto object-contain cursor-pointer"
                        onClick={() => setLightboxImg(assetUrl("/assets/drawings/manual_door_drawing.png"))}
                      />
                    </div>
                    <div className="md:col-span-7 space-y-2 text-xs text-slate-600 leading-relaxed">
                      <p>
                        Manual gates utilize overhead roller tracks with bottom brass guide sills. Because doors fold or collapse without power operator headers, they allow virtually 90% of the shaft width to be used for cabin entry.
                      </p>
                      <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                        <strong className="text-slate-900 block">Key Mechanical Safeguards:</strong>
                        <p className="text-[11px] text-slate-500">
                          Positive electro-mechanical landing door locks ensure the elevator cannot run unless all floor doors are securely closed and locked.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separate Manual Door Specifications Table */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
                      Manual Door Specification Matrix
                    </span>
                    <h4 className="text-lg font-black text-slate-900">
                      Technical Parameters & Latching Specifications
                    </h4>
                  </div>
                  <MergedSpecTable tableData={manualDoorSpecificationsTable} />
                </div>
              </div>

              {/* ------------------------------------------------------------------- */}
              {/* CATEGORY 2: AUTOMATIC DOORS                                         */}
              {/* Hierarchy: Category → Types & Images → Layout → Specifications      */}
              {/* ------------------------------------------------------------------- */}
              <div id="automatic-doors-section" className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 scroll-mt-24">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-teal" />
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        Automatic Door Systems
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                      VVVF vector power sliding doors providing touchless accessibility, barrier-free hospital stretcher transit, and high-frequency passenger flow.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-brand-teal bg-teal-50 border border-teal-200 px-3 py-1 rounded-full shrink-0">
                    6 Manufactured Models
                  </span>
                </div>

                {/* Grid of Automatic Door Types */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {manufacturedAutoDoors.map((door) => (
                    <div
                      key={door.id}
                      className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between group hover:shadow-md transition-all"
                    >
                      <div>
                        <div className="h-44 bg-slate-950 relative overflow-hidden">
                          <img
                            src={door.image}
                            alt={door.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                          <div className="absolute bottom-3 left-3 text-white text-xs font-bold drop-shadow-sm">
                            {door.tagline}
                          </div>
                        </div>

                        <div className="p-4 space-y-2">
                          <h4 className="font-black text-sm text-slate-900">
                            {door.name}
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {door.desc}
                          </p>
                          <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500 space-y-1">
                            <div>Opening (E): <strong className="text-slate-800">{door.clearOpening}</strong></div>
                            <div>Recommended: <span className="text-brand-teal font-medium">{door.idealFor}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Automatic Door Structure / Layout Diagram */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-teal uppercase tracking-wider block">
                      Automatic Door Operator Structure & Header Layout
                    </span>
                    <h4 className="text-base font-black text-slate-900">
                      VVVF Header & Landing Interlock Layout Design
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-5 bg-white p-3 rounded-2xl border border-slate-200 flex items-center justify-center">
                      <img
                        src={assetUrl("/assets/drawings/auto_door_drawing.png")}
                        alt="Automatic Door Operator Layout"
                        className="max-h-56 w-auto object-contain cursor-pointer"
                        onClick={() => setLightboxImg(assetUrl("/assets/drawings/auto_door_drawing.png"))}
                      />
                    </div>
                    <div className="md:col-span-7 space-y-2 text-xs text-slate-600 leading-relaxed">
                      <p>
                        Equipped with smart VVVF vector controllers, the operator calculates real-time door leaf inertia, executing smooth parabolic S-curves that eliminate slamming noises and mechanical wear.
                      </p>
                      <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                        <strong className="text-slate-900 block">Shaft Width Rule of Thumb:</strong>
                        <p className="text-[11px] text-slate-500">
                          For 2-Panel Center Opening, shaft width requires `Platform Width (A) + 400 to 500 mm`. For narrow hoistways, Telescopic Side Opening nests panels to one side, maximizing entrance width (E).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separate Automatic Door Specifications Table */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                      Automatic Door Specification Matrix
                    </span>
                    <h4 className="text-lg font-black text-slate-900">
                      VVVF Power Operator & Structural Dimensions Table
                    </h4>
                  </div>
                  <MergedSpecTable tableData={automaticDoorSpecificationsTable} />
                </div>
              </div>

              {/* Direct Engineering Assistance Card */}
              {/* <div className="p-6 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800 shadow-sm">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-base font-black text-white">
                    Need Custom Clear Openings or Specific Architraves?
                  </h4>
                  <p className="text-xs text-slate-400">
                    Our engineering department prepares custom AutoCAD general arrangement drawings for non-standard door heights and widths.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <a
                    href="tel:+919727764868"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center space-x-2 border border-slate-700 transition-all cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-teal" />
                    <span>Call: +91 97277 64868</span>
                  </a>
                  <a
                    href={`https://wa.me/919727764868?text=${encodeURIComponent(
                      "Hello Krupa Elevators, I would like to consult regarding elevator entrance door specifications and custom clear openings."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center space-x-2 shadow-xs transition-all cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>WhatsApp Engineering</span>
                  </a>
                </div>
              </div> */}
            </section>

            {/* Call To Action */}
            <CTASection
              title="Need Custom Hoistway Layouts or Non-Standard Dimensions?"
              subtitle="Our Nikol engineering headquarters creates bespoke AutoCAD GA drawings for narrow shafts, shallow pits, and high-tonnage cargo hoists."
              badge="Direct Nikol Engineering & CAD Team"
              variant="gradient"
            />
          </div>
        </div>
      </div>

      {/* Lightbox Modal: Full Resolution CAD Layout View */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm p-4 sm:p-10 flex items-center justify-center animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-3xl p-4 sm:p-6 max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
          >
            <div className="flex justify-between items-center pb-3 border-b border-slate-200">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Full-Resolution CAD Hoistway Layout Schematic
              </span>
              <button
                onClick={() => setLightboxImg(null)}
                className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
                aria-label="Close CAD Zoom Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
              <img
                src={lightboxImg}
                alt="Enlarged CAD Technical Drawing"
                className="max-h-[72vh] max-w-full object-contain"
              />
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
              <span>All dimensions in millimeters (mm) per IS 14665</span>
              <button
                onClick={() => setLightboxImg(null)}
                className="px-4 py-1.5 rounded-xl bg-slate-900 text-white font-bold text-xs cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

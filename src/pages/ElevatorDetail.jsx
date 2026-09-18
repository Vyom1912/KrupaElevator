import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Compass,
  Maximize2,
  X,
  FileText,
  SlidersHorizontal,
  ChevronRight,
  Download,
  CheckCircle2,
  Building2,
  Sparkles,
  Cpu,
  Layers,
  DoorClosed
} from "lucide-react";
import { elevatorMaster } from "../data/elevatorMaster";
import { allDoors } from "../data/doorsMaster";
import { companyData } from "../data/companyData";
import StandardSpecTable from "../components/StandardSpecTable";
import ElevatorStructureViewer from "../components/ElevatorStructureViewer";
import CustomizationProcess from "../components/CustomizationProcess";
import MergedCivilTable from "../components/MergedCivilTable";
import ScrollReveal from "../components/ScrollReveal";

export default function ElevatorDetail({ onOpenBrochure }) {
  const { elevatorId } = useParams();

  // Find the elevator model
  const elevator = elevatorMaster.find((e) => e.id === elevatorId);

  // If not found, redirect to elevators hub
  if (!elevator) {
    return <Navigate to="/elevators" replace />;
  }

  // Active layout drawing tab
  const drawingKeys = Object.keys(elevator.drawings || {});
  const [activeDrawingKey, setActiveDrawingKey] = useState(drawingKeys[0] || "main");
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Active visual sub-tab for layout
  const activeDrawingUrl = elevator.drawings[activeDrawingKey] || elevator.drawings.main;

  // Find compatible doors from doorsMaster
  const compatibleDoorObjects = allDoors.filter((d) =>
    elevator.compatibleDoors?.includes(d.id)
  );

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Model Title, Brochure Ref, High-Impact Visual             */}
      {/* ========================================================================= */}
      <section className="relative bg-slate-950 text-white overflow-hidden py-12 sm:py-20 border-b border-slate-800">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <img
            src={elevator.image}
            alt={elevator.name}
            className="w-full h-full object-cover filter blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs text-slate-400 mb-6 font-medium">
            <Link to="/" className="hover:text-brand-teal transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link to="/elevators" className="hover:text-brand-teal transition-colors">Elevators</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-teal-300 font-bold">{elevator.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/40 text-brand-teal text-xs font-bold uppercase tracking-wider">
                  {elevator.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono">
                  {elevator.brochurePage}
                </span>
                <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 text-xs font-bold">
                  IS 14665 Standard
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                  {elevator.name}
                </h1>
                <p className="text-base sm:text-lg text-teal-200 font-medium">
                  {elevator.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {elevator.overview}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center space-x-2"
                >
                  <span>Request Site Survey & Layout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => {
                    document.getElementById("civil-specifications")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <SlidersHorizontal className="w-4 h-4 text-brand-teal" />
                  <span>View Specifications Matrix</span>
                </button>
              </div>
            </div>

            {/* Right Card: High-Res Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                <img
                  src={elevator.image}
                  alt={elevator.name}
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-bold">{elevator.name}</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md text-teal-300 font-mono text-[11px] border border-slate-700">
                    Direct Bakrol Factory
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OVERVIEW & TYPICAL APPLICATIONS                                        */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
                  Purpose-Built Engineering
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                  Elevator Overview & Operational Scope
                </h2>
              </div>
              <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
                <Building2 className="w-4 h-4 text-brand-orange" />
                <span>Engineered for Modern Architecture</span>
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {elevator.overview}
            </p>

            {/* Typical Applications Pills */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                Target Buildings & Installations:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {elevator.typicalApplications.map((app, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Highlights */}
            {elevator.features && (
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                  Key Technical Highlights:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {elevator.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2.5 p-3 rounded-xl bg-teal-50/40 border border-teal-100 text-slate-700 text-xs"
                    >
                      <Sparkles className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 3. ELEVATOR STRUCTURE: Annotated Technical Illustration & 9 Components     */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <ElevatorStructureViewer
            structure={elevator.structure}
            elevatorName={elevator.name}
            drawingUrl={elevator.drawings.main}
          />
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 4. HOISTWAY LAYOUT DRAWINGS: Plan, Elevation, Machine & Door Views         */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 text-white space-y-6 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2 border border-teal-500/30">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Architectural Layout & Design</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  Official Hoistway General Arrangement (GA) Drawings
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  General Arrangement engineering layout drawings showing structural shaft, cabin interior, entrance width, and machine room parameters.
                </p>
              </div>

              {/* Drawing Sub-View Switcher Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 bg-slate-800 p-1.5 rounded-2xl border border-slate-700">
                {drawingKeys.map((key) => {
                  const isSelected = activeDrawingKey === key;
                  const label =
                    key === "main"
                      ? "Main GA"
                      : key === "plan"
                      ? "Plan View"
                      : key === "elevation"
                      ? "Elevation View"
                      : key === "door" || key === "doors"
                      ? "Door Details"
                      : key === "threeD" || key === "threeDShafts"
                      ? "3D Shaft"
                      : key === "terrace"
                      ? "Terrace Level"
                      : key === "parkingSystems"
                      ? "Parking Stacker"
                      : key.toUpperCase();

                  return (
                    <button
                      key={key}
                      onClick={() => setActiveDrawingKey(key)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-brand-teal text-white shadow-sm"
                          : "text-slate-400 hover:text-white hover:bg-slate-700"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Drawing Preview Container */}
            <div className="relative bg-white rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center min-h-[380px] sm:min-h-[480px] overflow-hidden group">
              <img
                src={activeDrawingUrl}
                alt={`${elevator.name} - ${activeDrawingKey}`}
                className="max-h-[420px] sm:max-h-[500px] w-auto object-contain cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.01]"
                onClick={() => setLightboxOpen(true)}
              />

              {/* Enlarge CTA Overlay */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-900 text-white text-xs font-bold shadow-md transition-all flex items-center space-x-1.5 border border-slate-700 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5 text-brand-teal" />
                <span>Enlarge Drawing</span>
              </button>

              <div className="w-full text-center text-xs text-slate-500 pt-3 border-t border-slate-100 mt-3">
                All dimensions in millimeters (mm). Compliant with IS 14665 & BIS engineering standards.
              </div>
            </div>

            {/* Parameter Guide Key */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                <strong className="text-teal-300 block font-mono text-sm">A × B</strong>
                <span className="text-slate-400 text-[11px]">
                  {elevator.isCarElevator ? "Platform Inside (Width × Depth)" : "Cabin Inside (Width × Depth)"}
                </span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                <strong className="text-teal-300 block font-mono text-sm">C × D</strong>
                <span className="text-slate-400 text-[11px]">Lift-Well / Shaft Dimensions</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                <strong className="text-brand-orange block font-mono text-sm">E</strong>
                <span className="text-slate-400 text-[11px]">Clear Entrance Opening Width</span>
              </div>
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 text-center">
                <strong className="text-teal-300 block font-mono text-sm">K × L</strong>
                <span className="text-slate-400 text-[11px]">Machine Room Finished Dimensions</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 5. TECHNICAL SPECIFICATIONS & MERGED CIVIL DIMENSIONS MATRIX               */}
      {/* ========================================================================= */}
      <section id="civil-specifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Standard Technical Specifications */}
        <ScrollReveal direction="up" distance={20}>
          <StandardSpecTable
            specs={elevator.standardSpecs}
            title={`${elevator.name} — Technical Specifications`}
            subtitle="Standardized baseline engineering parameters for architectural planning and tender verification."
          />
        </ScrollReveal>

        {/* Merged Civil Dimensions Matrix */}
        {elevator.civilMatrix && elevator.civilMatrix.length > 0 && (
          <ScrollReveal direction="up" distance={20}>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                    Civil Engineering Matrix
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    Official Hoistway & Cabin Dimension Table
                  </h3>
                </div>
                <div className="text-xs text-slate-500">
                  Common column specifications merged for architectural clarity.
                </div>
              </div>

              <MergedCivilTable
                rows={elevator.civilMatrix}
                tableTitle={`${elevator.name} Hoistway Dimensions`}
              />
            </div>
          </ScrollReveal>
        )}
      </section>

      {/* ========================================================================= */}
      {/* 6. COMPATIBLE DOOR SYSTEMS & MACHINES                                      */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
            <div>
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
                Sub-System Integration
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Compatible Door Systems & Traction Machines
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                Configure your {elevator.name} with certified door entrance mechanisms and high-efficiency drive machines from the Krupa manufacturing catalog.
              </p>
            </div>

            {/* Compatible Doors Grid */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <DoorClosed className="w-4 h-4 text-brand-teal" />
                <span>Compatible Door Configurations</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {compatibleDoorObjects.map((door) => (
                  <div
                    key={door.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal/60 transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-white text-brand-teal border border-slate-200 uppercase">
                        {door.category} Door
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Page 05
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{door.name}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {door.summary}
                    </p>
                    <div className="pt-2 text-[11px] text-slate-500 font-medium">
                      Standard Opening: <strong className="text-slate-800">{door.specs.standardOpening}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compatible Machines */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-brand-orange" />
                <span>Recommended Traction Machines</span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {elevator.compatibleMachines?.map((mach, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold shadow-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    <span>{mach}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ========================================================================= */}
      {/* 7. CUSTOMIZATION WORKFLOW: 8-Step Engineering Process                     */}
      {/* ========================================================================= */}
      <CustomizationProcess />

      {/* ========================================================================= */}
      {/* 8. BOTTOM CTA BANNER: Site Survey & Consultation                           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-brand-teal via-teal-800 to-slate-900 text-white p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-200">
              Nikol Engineering Office & Bakrol Factory
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Planning a {elevator.name} Installation?
            </h2>
            <p className="text-xs sm:text-sm text-teal-100 max-w-xl">
              Get in touch with our engineering team for free site surveys, custom CAD layout design, and verified civil shaft calculations across Gujarat and Western India.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-lg transition-all"
            >
              Request Free Site Survey
            </Link>
            <a
              href={`tel:${companyData.contacts.phoneRaw}`}
              className="px-6 py-3.5 rounded-xl bg-white text-slate-900 text-xs sm:text-sm font-bold hover:bg-slate-100 transition-colors flex items-center space-x-2 shadow-md"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call +91 82008 59171</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox for Zooming CAD Drawing */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative bg-white rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] flex flex-col items-center shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-between items-center pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <Compass className="w-5 h-5 text-brand-teal" />
                <h3 className="text-base font-black text-slate-900">
                  {elevator.name} — General Arrangement Hoistway Drawing
                </h3>
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                aria-label="Close drawing preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="overflow-auto max-h-[72vh] w-full flex items-center justify-center p-4 bg-slate-50/60 rounded-2xl my-3">
              <img
                src={activeDrawingUrl}
                alt={`${elevator.name} Engineering Drawing`}
                className="max-h-[65vh] object-contain rounded-lg shadow-sm"
              />
            </div>
            <div className="w-full text-center text-xs text-slate-500 pt-2">
              All civil dimensions in millimeters (mm). Compliant with IS 14665 & BIS engineering standards.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

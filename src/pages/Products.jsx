import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  Sparkles,
  Phone,
  Shield,
  Zap,
  Check,
  Award,
  Maximize,
  Gauge,
  Compass,
  Lock,
  Key,
  SlidersHorizontal,
  FileSpreadsheet
} from "lucide-react";
import { elevatorMaster } from "../data/elevatorMaster";
import { elevatorApplicationDetails } from "../data/elevatorApplicationDetails";
import { getElevatorSingleTable } from "../data/elevatorSingleTables";
import { manualDoors, automaticDoors, allDoors } from "../data/doorsMaster";
import { doorSpecificationsTable } from "../data/doorSpecificationsTable";
import MergedSpecTable from "../components/MergedSpecTable";
import CTASection from "../components/common/CTASection";
import ScrollReveal from "../components/ScrollReveal";
import WhatsAppIcon from "../components/common/WhatsAppIcon";
import { assetUrl } from "../utils/assetPath";

export default function Products({ onOpenBrochure }) {
  // 1. Active Selected Elevator Application (defaults to 'passenger')
  const [activeElevatorId, setActiveElevatorId] = useState("passenger");

  // 2. Active Door Category Filter ('all' | 'manual' | 'automatic')
  const [doorCategoryFilter, setDoorCategoryFilter] = useState("all");
  const displayedDoors =
    doorCategoryFilter === "all"
      ? allDoors
      : doorCategoryFilter === "manual"
        ? manualDoors
        : automaticDoors;

  // Active elevator master object
  const activeElevator =
    elevatorMaster.find((e) => e.id === activeElevatorId) || elevatorMaster[0];

  // Specific application details from krupaElevatorsData.js
  const appData =
    elevatorApplicationDetails[activeElevatorId] ||
    elevatorApplicationDetails.passenger;

  // Single unified engineering specification table for this elevator model
  const singleElevatorTable = getElevatorSingleTable(activeElevatorId);

  // Active technical CAD drawing
  const drawingKeys = Object.keys(activeElevator.drawings || {});
  const [activeDrawingKey, setActiveDrawingKey] = useState("main");
  const currentDrawingUrl =
    activeElevator.drawings[activeDrawingKey] ||
    activeElevator.drawings.main ||
    activeElevator.drawings[drawingKeys[0]];

  // Lightbox zoom modal state
  const [lightboxImg, setLightboxImg] = useState(null);

  return (
    <div className="space-y-16 sm:space-y-20 pb-20 overflow-x-hidden bg-slate-50 text-slate-900">
      {/* ========================================================================= */}
      {/* 1. PAGE HEADER / HERO                                                     */}
      {/* ========================================================================= */}
      <section className="relative bg-slate-950 text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <img
            src={activeElevator.image}
            alt="Elevator Architectural Background"
            className="w-full h-full object-cover filter blur-sm scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-wrap items-center gap-2 text-xs text-brand-teal font-mono uppercase tracking-wider">
            <span className="px-3 py-1 rounded-full bg-brand-teal/20 border border-brand-teal/40">
              Krupa Elevators Manufacturing
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">BIS IS 14665 Engineering Compliance</span>
          </div>

          <div className="space-y-3 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Elevator Applications & Technical Hub
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore complete engineering specifications, architectural shaft dimensions, and certified entrance door systems engineered at our Ahmedabad manufacturing facility.
            </p>
          </div>

          {/* Quick Hub Navigation Pills */}
          <div className="pt-2 flex flex-wrap gap-3 text-xs">
            <a
              href="#elevator-application-showcase"
              className="px-4 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              Application Details
            </a>

            <a
              href="#elevator-door-systems"
              className="px-4 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              Door Systems & Specifications
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* ========================================================================= */}
        {/* 2. ELEVATOR APPLICATION SELECTOR                                          */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                Select Elevator Application
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                8 Specialized Architectural Elevator Solutions
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              BIS IS 14665 Engineering Standard
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {elevatorMaster.map((elev) => {
              const isSelected = elev.id === activeElevatorId;
              return (
                <button
                  key={elev.id}
                  onClick={() => {
                    setActiveElevatorId(elev.id);
                    setActiveDrawingKey("main");
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-brand-teal"
                    : "bg-white text-slate-700 hover:bg-slate-100/80 border-slate-200 shadow-xs"
                    }`}
                >
                  <div className="space-y-1">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider block ${isSelected ? "text-teal-300" : "text-brand-teal"
                        }`}
                    >
                      {elev.category}
                    </span>
                    <span className="font-bold text-xs sm:text-sm block leading-snug">
                      {elev.name.replace(" Elevator", "")}
                    </span>
                  </div>
                  {/* <div className="pt-2 mt-2 border-t border-slate-100/20 flex items-center justify-between text-[10px]">
                    <span className={isSelected ? "text-slate-300" : "text-slate-500"}>
                      {elev.standardSpecs.ratedSpeed}
                    </span>
                  </div> */}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. SECTION 1: ELEVATOR APPLICATION DETAILS & SPECIFIC ARCHITECTURE        */}
        {/* ========================================================================= */}
        <div id="elevator-application-showcase" className="space-y-8 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
          {/* Split Row: Left Image | Right Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* LEFT SIDE: DISPLAY OF THE ELEVATOR IMAGE (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  {/* <span>Installed Elevator Photograph</span> */}
                </span>
                <span className="text-[11px] text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full font-semibold border border-teal-200">
                  ISO 9001:2015 Certified
                </span>
              </div>

              {/* Installed Elevator Image Card */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 shadow-md group h-[400px] sm:h-[460px]">
                <img
                  src={activeElevator.image}
                  alt={activeElevator.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white space-y-2">
                  <div className="inline-block px-2.5 py-1 rounded-md bg-brand-teal/90 text-white text-[10px] font-bold uppercase tracking-wider">
                    {appData.category}
                  </div>
                  <div className="text-xl font-black">{activeElevator.name}</div>
                  <div className="text-xs text-slate-300 font-medium">
                    {appData.tagline}
                  </div>
                  <div className="pt-2 border-t border-slate-700/80 grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <div>Speed: <strong className="text-white">{appData.specs?.availableRatedSpeed || activeElevator.standardSpecs.ratedSpeed}</strong></div>
                    <div>Capacity: <strong className="text-brand-teal">{appData.specs?.availableRatedCapacity || activeElevator.standardSpecs.capacity}</strong></div>
                  </div>
                </div>
              </div>

              {/* Architectural CAD GA Drawing Preview Button */}
              {currentDrawingUrl && (
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-xs font-bold text-slate-900 block">
                      CAD General Arrangement (GA) Drawing
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Standard IS 14665 hoistway layout schematic
                    </span>
                  </div>
                  <button
                    onClick={() => setLightboxImg(currentDrawingUrl)}
                    className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-brand-teal" />
                    <span>Zoom Drawing</span>
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT SIDE: EXPLAIN THE INFORMATION REGARDING THE APPLICATION (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Header Badges */}
              <div className="space-y-3 border-b border-slate-100 pb-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-brand-teal/20 text-brand-teal text-xs font-bold uppercase tracking-wider border border-brand-teal/30">
                    {appData.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-bold border border-orange-200">
                    IS 14665 Standard
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                    ISO 9001:2015 Certified
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {activeElevator.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-brand-teal">
                  {appData.tagline}
                </p>

                {/* Specific Brochure Narrative from krupaElevatorsData */}
                {appData.quote && (
                  <blockquote className="text-xs sm:text-sm text-slate-700 italic border-l-4 border-brand-teal pl-3 py-1 bg-teal-50/40 rounded-r-xl">
                    "{appData.quote}"
                  </blockquote>
                )}
                {appData.description && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {appData.description}
                  </p>
                )}
                {appData.description2 && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {appData.description2}
                  </p>
                )}
                {!appData.description && activeElevator.overview && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {activeElevator.overview}
                  </p>
                )}
              </div>

              {/* Key Verified Engineering Technical Parameters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Rated Speed</span>
                  <span className="font-bold text-slate-900 text-sm">
                    {appData.specs?.availableRatedSpeed || activeElevator.standardSpecs.ratedSpeed}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Capacity Range</span>
                  <span className="font-bold text-brand-teal text-sm">
                    {appData.specs?.availableRatedCapacity || activeElevator.standardSpecs.capacity}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Max Travel</span>
                  <span className="font-bold text-slate-900 text-sm">
                    {appData.specs?.maxTravelHeight || activeElevator.standardSpecs.maxTravel}
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Passengers</span>
                  <span className="font-bold text-slate-900 text-sm">
                    {appData.specs?.maxPassengers || "05 to 20"}
                  </span>
                </div>
              </div>

              {/* APPLICATION-SPECIFIC HIGHLIGHTS (ONLY what is in krupaElevatorsData.js for THIS model) */}

              {/* 1. PASSENGER ELEVATOR SPECIFICS */}
              {activeElevatorId === "passenger" && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      {appData.modernElevatorHeading}:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {appData.modernElevatorParagraphs?.map((p, pIdx) => (
                        <li key={pIdx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Elevate Your Experience Pillars */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                    {appData.elevateYourExperience?.map((pillar, pilIdx) => (
                      <div
                        key={pilIdx}
                        className="p-2.5 rounded-xl bg-teal-50/60 border border-teal-200/80 text-center text-[11px] font-bold text-brand-teal uppercase tracking-wider"
                      >
                        {pillar}
                      </div>
                    ))}
                  </div>

                  {/* High Energy Efficiency PMS Machine & Inbuilt CDL */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                    <div className="font-bold text-slate-900 flex items-center space-x-1.5">
                      <Zap className="w-4 h-4 text-brand-orange" />
                      <span>{appData.pmsMachine?.heading}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">
                      {appData.pmsMachine?.text}
                    </p>
                    <div className="pt-2 border-t border-slate-200/80 flex flex-wrap gap-2 text-[10px] font-semibold text-slate-700">
                      <span className="px-2 py-1 rounded-md bg-white border border-slate-200">Inbuilt CDL (Car Door Lock)</span>
                      <span className="px-2 py-1 rounded-md bg-white border border-slate-200">Full Height Door Light Curtain</span>
                      <span className="px-2 py-1 rounded-md bg-white border border-slate-200">Emergency Rescue Device (ARD)</span>
                      <span className="px-2 py-1 rounded-md bg-white border border-slate-200">Automatic Daily Brake Inspection</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. CAPSULE ELEVATOR SPECIFICS */}
              {activeElevatorId === "capsule" && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Architectural Glass Geometries & Shapes:
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {appData.forms?.map((frm, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs font-bold text-slate-800"
                        >
                          {frm}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Cab Types */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Available Panoramic Cab Configurations:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {appData.cabTypes?.map((cab, cIdx) => (
                        <li key={cIdx} className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                          <span>{cab}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exterior Engineering Specification */}
                  {appData.cabExterior && (
                    <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                      <span className="font-bold text-slate-900 block text-[11px] uppercase tracking-wider">
                        Cab Exterior Materials & Engineering:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
                        {Object.entries(appData.cabExterior).map(([item, mat]) => (
                          <div key={item} className="flex justify-between border-b border-slate-200/60 pb-1">
                            <span className="text-slate-500">{item}:</span>
                            <span className="font-semibold text-slate-800">{mat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 3. HOSPITAL ELEVATOR SPECIFICS */}
              {activeElevatorId === "hospital" && (
                <div className="space-y-4 pt-2">
                  <div className="p-3.5 bg-blue-50/70 rounded-2xl border border-blue-200 text-xs text-blue-950 space-y-1">
                    <div className="font-bold flex items-center space-x-1.5 text-[11px] uppercase tracking-wider text-blue-900">
                      <Shield className="w-3.5 h-3.5 text-blue-600" />
                      <span>Bed & Stretcher Deep Hoistway Accommodation:</span>
                    </div>
                    <p className="text-[11px] text-blue-900/90 leading-relaxed">
                      Cabin interior depth of 2400 mm accommodates full-size hospital beds, patient stretchers, life-support carts, and attending medical personnel with seamless roll-in roll-out access.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    {appData.highlights?.map((hl, hIdx) => (
                      <div key={hIdx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-800">
                        {hl}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Hospital Engineering Specifications:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {appData.features?.map((ft, ftIdx) => (
                        <li key={ftIdx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span>{ft}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* 4. GOODS ELEVATOR SPECIFICS */}
              {activeElevatorId === "goods" && (
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Heavy Industrial Engineering Highlights:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {appData.images?.map((feat, fIdx) => (
                        <div key={fIdx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-2 text-slate-800">
                          <Sparkles className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                          <span className="font-semibold">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 bg-amber-50/70 rounded-2xl border border-amber-200 text-xs text-amber-950">
                    <strong>Pallet & Forklift Loading:</strong> Engineered with reinforced structural steel under-platform beams, anti-slip checkered flooring, and heavy-duty guide shoes to resist forklift loading impacts.
                  </div>
                </div>
              )}

              {/* 5. CAR ELEVATOR SPECIFICS */}
              {activeElevatorId === "car" && (
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {appData.features?.map((cf, cIdx) => (
                      <div key={cIdx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-2 text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                        <span className="font-semibold">{cf}</span>
                      </div>
                    ))}
                  </div>

                  {/* Multi-Level Parking Systems Listed in Brochure */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Automated Automotive Parking Systems:
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      {appData.parkingSystems?.map((sys, sIdx) => (
                        <div key={sIdx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-800">
                          {sys}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Terrace Scope & Load Hook */}
                  {appData.terraceScope && (
                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700">
                      <strong>Client Scope at Terrace Level:</strong> {appData.terraceScope}
                    </div>
                  )}
                </div>
              )}

              {/* 6. MRL ELEVATOR SPECIFICS */}
              {activeElevatorId === "mrl" && (
                <div className="space-y-4 pt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {appData.savings?.map((sv, sIdx) => (
                      <div key={sIdx} className="p-3 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950 space-y-1">
                        <span className="font-bold block text-brand-teal uppercase text-[10px]">Architectural Benefit</span>
                        <p className="font-bold text-xs">{sv}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Machine Roomless Green Advantages:
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      {appData.benefits?.map((ben, bIdx) => (
                        <div key={bIdx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-800">
                          {ben}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 7. HOME ELEVATOR SPECIFICS */}
              {activeElevatorId === "home" && (
                <div className="space-y-4 pt-2">
                  <div className="p-3.5 rounded-2xl bg-orange-50/70 border border-orange-200 text-xs text-orange-950 flex items-start space-x-2">
                    <Zap className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <strong>{appData.energySaving}:</strong> Runs smoothly on domestic Single-Phase 230V household electrical supply. Requires no commercial 3-phase substation.
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Villa Elevator Architecture & Interior Finishes:
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">Car Ceiling Height</span>
                        <strong className="text-slate-900">{appData.dimensions?.highCarCeilingHeight}</strong>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">Entrance Height</span>
                        <strong className="text-slate-900">{appData.dimensions?.highEntranceHeight}</strong>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-1 text-xs text-slate-600">
                    {appData.mainFeaturesAndBenefits?.map((mf, mIdx) => (
                      <li key={mIdx} className="flex items-start space-x-2">
                        <Check className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span>{mf}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 8. HYDRAULIC ELEVATOR SPECIFICS */}
              {activeElevatorId === "hydraulic" && (
                <div className="space-y-4 pt-2">
                  <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-teal-950 flex items-start space-x-2">
                    <Zap className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    <div>
                      <strong>{appData.energySaving}:</strong> Zero electric power required during downward travel (gravity descent controlled by precision solenoid valves).
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Suspension & Cylinder Types:
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      {appData.actingTypes?.map((act, aIdx) => (
                        <div key={aIdx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-800">
                          {act}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Hydraulic Operational Advantages:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {appData.advantagesAndBenefits?.map((adv, adIdx) => (
                        <li key={adIdx} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Actions: Request GA Drawing, Direct Call & WhatsApp */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="px-5 py-3 rounded-2xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold shadow-sm transition-all flex items-center space-x-2 cursor-pointer hover:shadow-md"
                >
                  <span>Request Custom GA Drawing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Direct Call Button with Call Icon */}
                <a
                  href="tel:+919727764868"
                  className="px-4 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-all flex items-center space-x-2.5 cursor-pointer hover:shadow-md"
                  title="Call Technical Desk: +91 97277 64868"
                >
                  <Phone className="w-4 h-4 text-brand-teal" />
                  <span>Call: +91 97277 64868</span>
                </a>

                {/* Direct WhatsApp Button with WhatsApp Icon */}
                <a
                  href={`https://wa.me/919727764868?text=${encodeURIComponent(
                    `Hello Krupa Elevators, I would like to inquire about specifications and quotation for the ${activeElevator.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-sm transition-all flex items-center space-x-2 cursor-pointer hover:shadow-md"
                  title="Chat directly on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. SECTION 2: THE TABLE OF SPECIFICATIONS (WITH MERGED CELLS)             */}
        {/* ========================================================================= */}
        <div id="elevator-specification-table" className="pt-2">
          {/* ONLY ONE TABLE per application, with adjacent cells merged via rowSpan */}
          <MergedSpecTable tableData={singleElevatorTable} />
        </div>

        {/* ========================================================================= */}
        {/* 5. SECTION 3: ELEVATOR DOOR SYSTEMS & DEDICATED SPECIFICATIONS TABLE      */}
        {/* ========================================================================= */}
        <div id="elevator-door-systems" className="space-y-12 pt-10 border-t border-slate-200">
          {/* Main Section Header */}
          <div className="space-y-3 border-b border-slate-200 pb-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-brand-orange uppercase tracking-wider">
              <span className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-orange-100 text-brand-orange">
                <DoorClosed className="w-3.5 h-3.5" />
                <span>Engineered Landing Entrances</span>
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500 font-mono">BIS IS 14665 Certified Landing Safety</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Elevator Entrance Architecture & Door Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-4xl leading-relaxed">
              Precision entrance engineering delivering <strong>safety, reliability, and speed</strong>. Follow the structured sections below to inspect the engineering description, safety features, certified door types, and the dedicated technical dimension matrix.
            </p>
          </div>

          {/* ------------------------------------------------------------------------- */}
          {/* PART 1: DESCRIPTION (ARCHITECTURAL OVERVIEW & PHILOSOPHY)                */}
          {/* ------------------------------------------------------------------------- */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-teal">
              <Info className="w-4 h-4" />
              <span>Step 1: Engineering Description & System Overview</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Total Door System Philosophy & Operational Dynamics
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Core Philosophy */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3 hover:border-brand-teal/40 transition-all">
                <div className="w-10 h-10 rounded-2xl bg-teal-50 text-brand-teal flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-slate-900">
                  Safety, Reliability & Speed
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Over 70% of elevator passenger interactions and mechanical duty cycles happen directly at the entrance doorway. Krupa door systems are engineered with zero-compromise mechanical interlocks, whisper-quiet S-curve acceleration curves, and robust steel track assemblies rated for over <strong>3,000,000 continuous door cycles</strong>.
                </p>
              </div>

              {/* Card 2: Manual vs Automatic */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3 hover:border-brand-orange/40 transition-all">
                <div className="w-10 h-10 rounded-2xl bg-orange-50 text-brand-orange flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-slate-900">
                  Manual Gates vs. Automatic Doors
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Manual Doors</strong> (Collapsible, Imperforated, Swing) maximize entrance width within tight, compact shaft masonry for residential buildings and cargo hoists. <strong>Automatic Doors</strong> (Center-Opening & Telescopic) utilize intelligent VVVF vector motors for rapid cycling and touchless barrier-free accessibility.
                </p>
              </div>

              {/* Card 3: BIS Compliance & Fire Resistance */}
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-3 hover:border-brand-teal/40 transition-all">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-slate-900">
                  BIS IS 14665 & Fire Integrity
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every landing entrance architrave, car door lock (CDL), and landing gate manufactured at our Ahmedabad facility strictly complies with <strong>Bureau of Indian Standards IS 14665</strong>, ensuring certified fire containment, flame barrier resistance, and mechanical positive interlock integrity.
                </p>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------------- */}
          {/* PART 2: ENGINEERING FEATURES & SAFETY TECHNOLOGIES                        */}
          {/* ------------------------------------------------------------------------- */}
          <div className="space-y-6 pt-6 border-t border-slate-200">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
              <Zap className="w-4 h-4" />
              <span>Step 2: Key Engineering Features & Safety Systems</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Advanced Safety & Electromechanical Technologies
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-3xl">
                Every Krupa elevator entrance integrates active failsafes to guarantee total passenger security and eliminate door-related accidents.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Feature 1 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:shadow-xs transition-all space-y-2.5">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center">
                    <Lock className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">Inbuilt CDL (Car Door Lock)</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mechanical locking safety hook that securely locks the car door whenever the elevator is moving or stopped outside the floor leveling zone (±75 mm), preventing passengers from prying the car door open between floors.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:shadow-xs transition-all space-y-2.5">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-brand-teal flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">Infrared Multi-Beam Curtain</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A dense optical barrier of 128+ cross-beams scanning the entrance from 20 mm to 1800 mm. Detects hands, children, wheelchairs, and stretchers instantly without physical contact, immediately reopening the doors.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:shadow-xs transition-all space-y-2.5">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">VVVF Microprocessor Header</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Variable Voltage Variable Frequency closed-loop vector controller with high-resolution digital encoder. Continuously monitors door weight and wind resistance to generate whisper-quiet, jerk-free S-curve motion.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:shadow-xs transition-all space-y-2.5">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <Shield className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">Positive Electro-Mechanical Interlocks</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dual-circuit landing interlocks with heavy silver-plated contacts. The main controller circuit is physically open until every landing door on all floors is mechanically latched and verified locked.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:shadow-xs transition-all space-y-2.5">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">Heavy Extruded Sills & Rollers</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Reinforced extruded aluminum or bronze landing sills paired with sealed nylon-coated steel ball-bearing rollers, ensuring silent gliding and withstanding high-impact freight cart and stretcher rollover loads.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:shadow-xs transition-all space-y-2.5">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <Key className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">Emergency Triangle Key Release</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Standardized mechanical unlocking drop-hole on every landing door header. Allows certified elevator technicians and emergency firefighters to quickly open doors and rescue passengers during power failures.
                </p>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------------- */}
          {/* PART 3: ELEVATOR DOOR TYPES SHOWCASE                                      */}
          {/* ------------------------------------------------------------------------- */}
          <div className="space-y-6 pt-6 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-teal">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Step 3: Door Types & Configurations</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Certified Manual & Automatic Entrance Configurations
                </h3>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 rounded-2xl text-xs font-bold">
                <button
                  onClick={() => setDoorCategoryFilter("all")}
                  className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${doorCategoryFilter === "all"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  All Types ({allDoors.length})
                </button>
                <button
                  onClick={() => setDoorCategoryFilter("manual")}
                  className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${doorCategoryFilter === "manual"
                    ? "bg-brand-orange text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  Manual Gates ({manualDoors.length})
                </button>
                <button
                  onClick={() => setDoorCategoryFilter("automatic")}
                  className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${doorCategoryFilter === "automatic"
                    ? "bg-brand-teal text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  Automatic Doors ({automaticDoors.length})
                </button>
              </div>
            </div>

            {/* Grid of Door Types */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedDoors.map((door) => (
                <div
                  key={door.id}
                  className="group rounded-3xl border border-slate-200 overflow-hidden bg-white hover:shadow-md hover:border-slate-300 transition-all flex flex-col"
                >
                  {/* Image container */}
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={door.image}
                      alt={door.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                    <span
                      className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider ${door.category === "manual"
                        ? "bg-brand-orange text-white shadow-xs"
                        : "bg-brand-teal text-white shadow-xs"
                        }`}
                    >
                      {door.category === "manual" ? "Manual Gate" : "Automatic Sliding"}
                    </span>

                    <span className="absolute bottom-3 left-3 text-white text-xs font-semibold drop-shadow-sm">
                      {door.tagline}
                    </span>
                  </div>

                  {/* Body Content */}
                  {/* <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-black text-base text-slate-900 leading-snug">
                        {door.name}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {door.description || door.summary}
                      </p>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1.5 text-[11px] text-slate-700">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Clear Opening (E):</span>
                        <strong className="text-slate-900">
                          {door.specs?.standardOpening || "700 – 1200 mm"}
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Finished Height:</span>
                        <strong className="text-slate-900">
                          {door.specs?.standardHeight || "2000 mm"}
                        </strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Drive / Control:</span>
                        <span className="font-medium text-slate-800 truncate max-w-[140px]" title={door.specs?.operation || door.specs?.drive || "Microprocessor VVVF"}>
                          {door.specs?.operation?.split(" ")[0] || door.specs?.drive?.split(" ")[0] || "VVVF Vector"}
                        </span>
                      </div>
                    </div>

                    {door.applications && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          Ideal Applications:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {door.applications.map((app, aIdx) => (
                            <span
                              key={aIdx}
                              className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-medium"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div> */}
                </div>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------------------------------- */}
          {/* PART 4: DESCRIBE THE SPECIFICATION TABLES (TABLE WALKTHROUGH GUIDE)       */}
          {/* ------------------------------------------------------------------------- */}
          <div className="space-y-6 pt-6 border-t border-slate-200">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
                <FileSpreadsheet className="w-4 h-4" />
                <span>Step 4: Dimension Matrix & Engineering Table Guide</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                How to Interpret the Door Specifications Matrix
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-4xl leading-relaxed">
                Before consulting the detailed specification table below, review this structural overview describing each column parameter and how entrance dimensions interact with hoistway shaft civil engineering:
              </p>
            </div>

            {/* Structured Table Reading Guide */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xs space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-brand-orange block uppercase text-[10px]">Column 1 & 2</span>
                  <strong className="text-slate-900 block">Category & Door Model</strong>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Identifies whether the entrance is a manual mechanical folding system or an automated VVVF power sliding system, along with its landing entrance classification.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-brand-teal block uppercase text-[10px]">Column 3 & 4</span>
                  <strong className="text-slate-900 block">Clear Opening & Height (E)</strong>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Indicates the net unobstructed doorway aperture (Dimension E in mm) for passenger passage, stretcher entry, or vehicle drive-in, along with finished vertical head clearance.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-blue-600 block uppercase text-[10px]">Column 5 & 6</span>
                  <strong className="text-slate-900 block">Mechanism & Materials</strong>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Specifies the physical transmission (VVVF synchronous belt, counterbalanced bi-parting, hydraulic closer) and sheet metal/glass finishes (AISI 304, RAL powder coat).
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-purple-600 block uppercase text-[10px]">Column 7 & 8</span>
                  <strong className="text-slate-900 block">Safety Interlocks & Usage</strong>
                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    Details the certified locking failsafe (CDL, multi-beam optical barrier, positive contacts) and the optimal elevator application per architectural requirements.
                  </p>
                </div>
              </div>

              {/* Civil Hoistway Rule of Thumb */}
              <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 flex items-start space-x-3 text-xs text-teal-950">
                <Info className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong>Architectural Hoistway Width vs. Door Clearance Rule:</strong>
                  <p className="text-slate-700 text-[11px] leading-relaxed">
                    For <strong>2-Panel Center Opening</strong> doors, the lift-well shaft width generally requires `Platform Width (A) + 400 to 500 mm` to accommodate door panel pocket travel on both sides. For <strong>Telescopic Side Opening</strong> doors, panels nest into one side only, making it the ideal selection for narrow hoistways where maximizing entrance width (E) is vital.
                  </p>
                </div>
              </div>
              {/* Direct Engineering Assistance Card for Entrance Sizing */}
              <div className="p-5 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm border border-slate-800">
                <div className="space-y-1 text-center sm:text-left">
                  <h5 className="font-bold text-sm text-white">Need Custom Entrance Widths or Architrave Designs?</h5>
                  <p className="text-xs text-slate-400">Speak directly with our Ahmedabad entrance engineering department.</p>
                </div>
                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <a
                    href="tel:+919727764868"
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center space-x-2 border border-slate-700 transition-all hover:scale-102 cursor-pointer"
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
                    className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center space-x-2 shadow-sm transition-all hover:scale-102 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>WhatsApp Engineering</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------------- */}
          {/* PART 5: DEDICATED TABLE OF SPECIFICATIONS REGARDING DOORS                 */}
          {/* ------------------------------------------------------------------------- */}
          <div className="space-y-6 pt-6 border-t border-slate-200">
            <div className="space-y-1">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
                Step 5: Dedicated Entrance Specification Matrix
              </span>
              <h4 className="text-lg sm:text-xl font-black text-slate-900">
                Complete Technical Specifications & Mechanical Parameters Table
              </h4>
            </div>

            {/* Rendered Merged Table */}
            <MergedSpecTable tableData={doorSpecificationsTable} />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. CALL TO ACTION & CAD CONSULTATION                                      */}
        {/* ========================================================================= */}
        <CTASection
          title="Need Custom Hoistway Layouts or Non-Standard Dimensions?"
          subtitle="Our Nikol engineering headquarters creates bespoke AutoCAD GA drawings for narrow shafts, shallow pits, and high-tonnage cargo hoists."
          badge="Direct Nikol Engineering & CAD Team"
          variant="gradient"
        />
      </div>

      {/* ========================================================================= */}
      {/* 7. LIGHTBOX MODAL: FULL RESOLUTION CAD DRAWING VIEW                       */}
      {/* ========================================================================= */}
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
                className="px-4 py-1.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
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

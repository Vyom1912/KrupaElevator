import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SlidersHorizontal,
  Compass,
  ArrowRight,
  Maximize2,
  X,
  CheckCircle2,
  Search,
  Sparkles,
  Layers,
  DoorOpen,
  DoorClosed,
  Cpu,
  ShieldCheck,
  Building2,
  FileText
} from "lucide-react";
import { elevatorMaster } from "../data/elevatorMaster";
import { manualDoors, automaticDoors } from "../data/doorsMaster";
import { technologiesMaster } from "../data/technologiesMaster";
import { specificationsData } from "../data/specificationsData";
import MergedCivilTable from "../components/MergedCivilTable";
import StandardSpecTable from "../components/StandardSpecTable";
import CustomizationProcess from "../components/CustomizationProcess";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import ScrollReveal from "../components/ScrollReveal";

export default function Products({ onOpenBrochure }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Integrated Specifications matrix tab state
  const [activeSpecTab, setActiveSpecTab] = useState("automatic-doors");
  const [lightboxDrawing, setLightboxDrawing] = useState(null);

  // Filter elevator models by search term
  const filteredElevators = elevatorMaster.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.overview.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const currentSpec = specificationsData[activeSpecTab] || specificationsData["automatic-doors"];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden">
      {/* Page Hero */}
      <PageHero
        badge="Direct Bakrol Factory & Nikol Engineering Office"
        title="Elevator Applications & Systems"
        description="Explore purpose-built passenger, commercial, hospital, industrial, and residential elevator applications. Precision CAD layouts, certified IS 14665 engineering, and robust traction technologies."
        breadcrumbs={[{ label: "Elevators" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Quick Jump Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <a
              href="#applications"
              className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors flex items-center space-x-1.5"
            >
              <Building2 className="w-3.5 h-3.5 text-brand-teal" />
              <span>Elevator Applications</span>
            </a>
            <a
              href="#doors-section"
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors flex items-center space-x-1.5"
            >
              <DoorClosed className="w-3.5 h-3.5 text-brand-orange" />
              <span>Door Systems</span>
            </a>
            <a
              href="#machines-bridge"
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors flex items-center space-x-1.5"
            >
              <Cpu className="w-3.5 h-3.5 text-teal-500" />
              <span>Traction Machines</span>
            </a>
            <a
              href="#civil-matrix"
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors flex items-center space-x-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-slate-500" />
              <span>Civil Matrix</span>
            </a>
          </div>

          <a
            href="#civil-matrix"
            className="text-xs font-bold text-brand-teal hover:text-teal-700 transition-colors flex items-center space-x-1"
          >
            <span>Civil Hoistway Dimensions Matrix</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 1: ELEVATOR APPLICATIONS                                          */}
        {/* ========================================================================= */}
        <div id="applications" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
                Vertical Transport Solutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Elevator Applications
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
                Engineered for distinct architectural, payload, and speed requirements. Click "View Specifications & Drawings" on any model to inspect GA hoistway layouts.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search elevator applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-xs focus:outline-hidden focus:ring-1 focus:ring-brand-teal transition-all shadow-2xs"
              />
            </div>
          </div>

          {/* Elevator Applications Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredElevators.map((elevator, idx) => (
              <ScrollReveal
                key={elevator.id}
                direction="up"
                delay={idx * 30}
                distance={20}
                className="h-full"
              >
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    {/* High-Resolution Elevator Photograph */}
                    <div className="h-56 bg-slate-900 relative overflow-hidden group/img">
                      <img
                        src={elevator.image}
                        alt={elevator.name}
                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                      {/* Application Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-900/85 text-teal-300 border border-slate-700 backdrop-blur-md">
                          {elevator.category}
                        </span>
                      </div>

                      {/* Brochure Ref */}
                      <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-mono text-slate-300 border border-slate-700">
                        {elevator.brochurePage}
                      </div>

                      {/* Tagline */}
                      <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium truncate">
                        {elevator.tagline}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-3">
                      <div>
                        <span className="text-[11px] font-bold text-brand-teal block uppercase tracking-wider">
                          {elevator.category}
                        </span>
                        <h3 className="text-xl font-black text-slate-900 group-hover:text-brand-teal transition-colors">
                          {elevator.name}
                        </h3>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {elevator.overview}
                      </p>

                      {/* Quick Specs Summary */}
                      <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                        <div className="flex justify-between">
                          <span className="text-slate-400 text-[11px]">Payload Capacity:</span>
                          <span className="font-bold text-slate-900 truncate max-w-[170px]">
                            {elevator.standardSpecs.capacity}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400 text-[11px]">Rated Speed:</span>
                          <span className="font-bold text-brand-teal truncate max-w-[170px]">
                            {elevator.standardSpecs.ratedSpeed}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400 text-[11px]">Drive System:</span>
                          <span className="font-medium text-slate-800 truncate max-w-[170px]">
                            {elevator.standardSpecs.drive}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 pt-0 flex gap-2">
                    <Link
                      to={`/elevators/${elevator.id}`}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-brand-teal text-white text-xs font-bold transition-colors flex items-center justify-center space-x-2 shadow-sm"
                    >
                      <span>View Specifications & Drawings</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      to="/contact"
                      className="py-2.5 px-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-colors"
                      title="Request Site Survey"
                    >
                      Quote
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: DOOR SYSTEMS (Manual & Automatic)                              */}
        {/* ========================================================================= */}
        <div id="doors-section" className="space-y-8 pt-8 border-t border-slate-200 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider border border-orange-500/30">
                <DoorOpen className="w-3.5 h-3.5" />
                <span>Entrance Systems</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black">Door Systems: Manual & Automatic</h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                Doors are entrance configurations tailored to shaft widths and building traffic. Krupa provides both manual folding/swing doors for compact economical shafts and automatic high-speed sliding doors with full-height safety light curtains.
              </p>
            </div>
            <Link
              to="/doors"
              className="px-5 py-2.5 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-xs font-bold shadow-md transition-all flex items-center space-x-2 shrink-0 self-start sm:self-auto"
            >
              <span>Explore All Door Types</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Manual Doors Block */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center space-x-2.5 text-brand-orange">
                <DoorClosed className="w-6 h-6" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Manual Doors</h3>
                  <span className="text-xs text-slate-500">Economic & Compact Shaft Footprints</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Collapsible steel gates, imperforated folding gates, and powder-coated manual swing doors with laminated glass viewing windows. Ideal for residential walk-ups, private villas, and industrial freight elevators.
              </p>
              <div className="space-y-2 pt-2">
                {manualDoors.map((door) => (
                  <div
                    key={door.id}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs"
                  >
                    <strong className="text-slate-800 font-bold">{door.name}</strong>
                    <span className="text-slate-500 font-medium">{door.specs.standardOpening}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/doors"
                className="inline-flex items-center space-x-1 text-xs font-bold text-brand-orange hover:text-brand-orange-hover pt-1"
              >
                <span>Inspect Manual Doors Catalog</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Automatic Doors Block */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center space-x-2.5 text-brand-teal">
                <DoorOpen className="w-6 h-6" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Automatic Doors</h3>
                  <span className="text-xs text-slate-500">High Speed, Whisper Quiet & Safe</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                VVVF microprocessor-controlled center-opening, telescopic side-slide, glass big vision, and 4-panel freight entrance systems. Equipped with full-height infrared light curtains that prevent passenger trapping.
              </p>
              <div className="space-y-2 pt-2">
                {automaticDoors.slice(0, 6).map((door) => (
                  <div
                    key={door.id}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs"
                  >
                    <strong className="text-slate-800 font-bold">{door.name}</strong>
                    <span className="text-slate-500 font-medium">{door.specs.standardOpening}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/doors"
                className="inline-flex items-center space-x-1 text-xs font-bold text-brand-teal hover:text-teal-700 pt-1"
              >
                <span>Inspect Automatic Doors Catalog</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3: TRACTION MACHINES BRIDGE (Geared vs. Gearless PMSM)            */}
        {/* ========================================================================= */}
        <div id="machines-bridge" className="space-y-6 pt-8 border-t border-slate-200 scroll-mt-24">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700/80 pb-4">
              <div className="space-y-1.5">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Traction Machinery</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black">
                  Traction Machinery: Geared & Gearless PMSM
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Elevator performance depends on the right traction machine. We manufacture and deploy both heavy-duty geared machines for high-tonnage freight and Permanent Magnet Synchronous (PMS) gearless direct-drive motors for energy-efficient passenger rides.
                </p>
              </div>
              <Link
                to="/technology"
                className="px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-all shadow-md flex items-center space-x-2 shrink-0 self-start sm:self-auto"
              >
                <span>Explore Technology & Machines</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Gearless Summary */}
              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                <div className="flex items-center space-x-2 text-teal-300">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">Gearless PMS Machines</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Permanent Magnet Synchronous motors mount directly to the traction sheave, eliminating gearboxes. Delivers up to 40% energy savings, sub-50dB acoustics, and 100% gear oil-free operation for residential towers, hotels, and MRL elevators.
                </p>
                <div className="text-[11px] text-teal-300 font-bold flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal shrink-0" />
                  <span>Sub-50 dB &bull; 30-40% Energy Savings &bull; Oil-Free</span>
                </div>
              </div>

              {/* Geared Summary */}
              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3">
                <div className="flex items-center space-x-2 text-orange-300">
                  <Cpu className="w-5 h-5" />
                  <h3 className="text-base font-bold text-white">Geared Traction Machines</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Heavy-duty helical and bronze alloy worm reduction gears built for massive torque. Engineered to withstand continuous industrial duty cycles, heavy pallet-truck loading in goods elevators, and multi-tier car elevators.
                </p>
                <div className="text-[11px] text-orange-300 font-bold flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>High Starting Torque &bull; M67 & M76 Series &bull; Rugged Dependability</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CUSTOMIZATION SECTION */}
        <CustomizationProcess />

        {/* ========================================================================= */}
        {/* CIVIL HOISTWAY LAYOUTS & DIMENSION MATRIX (Catalog Data)                  */}
        {/* ========================================================================= */}
        <div id="civil-matrix" className="pt-8 border-t border-slate-200 space-y-8">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-brand-teal text-xs font-bold uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>Full Engineering Catalog</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Civil Hoistway Layouts & Dimension Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
              Architectural shaft dimensions, car inside clearances, entrance opening widths, pit depths, and overhead heights verbatim from catalog pages 18–23.
            </p>
          </div>

          {/* Model Specification Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
            {[
              { id: "automatic-doors", label: "Automatic Passenger" },
              { id: "mrl", label: "MRL Traction" },
              { id: "manual-doors", label: "Manual Passenger" },
              { id: "capsule", label: "Capsule Panoramic" },
              { id: "hospital", label: "Hospital Stretcher" },
              { id: "goods", label: "Goods Freight" },
              { id: "home", label: "Home Villa Lift" },
              { id: "hydraulic", label: "Hydraulic System" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSpecTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeSpecTab === tab.id
                    ? "bg-brand-teal text-white shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Specification Detail Card */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs text-teal-300 font-mono block">
                  Catalog Brochure {currentSpec.brochurePage}
                </span>
                <h3 className="text-xl font-black">{currentSpec.title}</h3>
                <p className="text-xs text-slate-300 mt-0.5">{currentSpec.subtitle}</p>
              </div>

              {currentSpec.drawing && (
                <button
                  onClick={() => setLightboxDrawing(currentSpec.drawing)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 text-xs font-bold border border-slate-700 transition-all flex items-center space-x-1.5 cursor-pointer self-start sm:self-auto"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Enlarge Technical Drawing</span>
                </button>
              )}
            </div>

            {/* Drawing Preview */}
            {currentSpec.drawing && (
              <div
                className="bg-white rounded-2xl p-4 flex items-center justify-center max-h-[360px] overflow-hidden cursor-zoom-in"
                onClick={() => setLightboxDrawing(currentSpec.drawing)}
              >
                <img
                  src={currentSpec.drawing}
                  alt={`${currentSpec.title} CAD Drawing`}
                  className="max-h-[320px] object-contain"
                />
              </div>
            )}

            {/* Merged Civil Specifications Table */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Official Civil Dimensions Matrix (with merged cells for common data):
              </span>
              <MergedCivilTable
                rows={currentSpec.table}
                tableTitle={currentSpec.title}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox for Zooming CAD Drawing */}
      {lightboxDrawing && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxDrawing(null)}
        >
          <div
            className="relative bg-white rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] flex flex-col items-center shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-between items-center pb-4 border-b border-slate-100">
              <h3 className="text-base font-black text-slate-900">
                Official General Arrangement (GA) Drawing
              </h3>
              <button
                onClick={() => setLightboxDrawing(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="overflow-auto max-h-[72vh] w-full flex items-center justify-center p-4 bg-slate-50/60 rounded-2xl my-3">
              <img
                src={lightboxDrawing}
                alt="Technical Drawing"
                className="max-h-[65vh] object-contain rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      )}

      <CTASection
        title="Ready to Plan Your Custom Elevator Installation?"
        subtitle="Our engineering team provides complimentary site surveys, custom CAD layouts, and verified civil shaft calculations across Gujarat and Western India."
        badge="Direct Bakrol Factory & Nikol Engineering Hub"
        variant="gradient"
      />
    </div>
  );
}

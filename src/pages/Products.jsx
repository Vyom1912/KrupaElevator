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
  Download,
  SlidersHorizontal,
  Info,
  Eye,
  Layers,
  Compass,
  ChevronRight,
  Sparkles,
  Phone,
  FileText,
  Check,
  Zap,
  Activity,
  Shield
} from "lucide-react";
import { elevatorMaster } from "../data/elevatorMaster";
import { manualDoors, automaticDoors } from "../data/doorsMaster";
import ElevatorStructureViewer from "../components/ElevatorStructureViewer";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";
import ScrollReveal from "../components/ScrollReveal";

export default function Products({ onOpenBrochure }) {
  // 1. Active Selected Elevator Model State (defaults to first elevator: 'passenger')
  const [activeElevatorId, setActiveElevatorId] = useState("passenger");

  // Find active elevator object
  const activeElevator =
    elevatorMaster.find((e) => e.id === activeElevatorId) || elevatorMaster[0];

  // 2. Active Technical Drawing Sub-tab for active elevator
  const drawingKeys = Object.keys(activeElevator.drawings || {});
  const [activeDrawingKey, setActiveDrawingKey] = useState("main");

  // Keep drawing key valid when switching elevators
  const currentDrawingUrl =
    activeElevator.drawings[activeDrawingKey] ||
    activeElevator.drawings.main ||
    activeElevator.drawings[drawingKeys[0]];

  // 3. Lightbox zoom modal state for CAD drawings
  const [lightboxImg, setLightboxImg] = useState(null);

  // 4. Door Systems Section Category Tab: 'manual' or 'auto'
  const [activeDoorType, setActiveDoorType] = useState("auto"); // 'auto' | 'manual'

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden">
      {/* Page Hero */}
      <PageHero
        badge="Direct Bakrol Factory & Nikol CAD Engineering Office"
        title="Elevator Systems & Technical Specifications"
        description="Select any elevator model below to inspect its primary photograph, GA hoistway CAD layout drawings, electro-mechanical sub-assemblies, and comprehensive civil dimension matrix."
        breadcrumbs={[{ label: "Elevators" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* ========================================================================= */}
        {/* PART 1: DIFFERENT KINDS OF ELEVATORS DISPLAYED (INTERACTIVE SELECTOR)     */}
        {/* ========================================================================= */}
        <div id="elevator-selector" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
                Step 1: Choose Elevator Model
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Different Kinds of Elevators
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
                Click any elevator model below. The system will immediately display its photograph, full GA layout structure, and raw capacity & dimensions table.
              </p>
            </div>

            {/* Quick jump to Door Systems */}
            <button
              onClick={() => {
                document.getElementById("doors-showcase")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer shrink-0"
            >
              <DoorOpen className="w-3.5 h-3.5 text-brand-orange" />
              <span>Jump to Door Systems (Manual & Auto)</span>
            </button>
          </div>

          {/* Grid of 8 Elevator Model Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3">
            {elevatorMaster.map((el) => {
              const isSelected = el.id === activeElevator.id;
              return (
                <button
                  key={el.id}
                  onClick={() => {
                    setActiveElevatorId(el.id);
                    setActiveDrawingKey("main");
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-brand-teal ring-offset-2 scale-[1.02]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-brand-teal/60 hover:bg-slate-50"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                        isSelected
                          ? "bg-brand-teal text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Building2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-black block leading-snug truncate">
                      {el.name.replace(" Elevator", "")}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] block mt-2 font-medium truncate ${
                      isSelected ? "text-teal-300" : "text-slate-400"
                    }`}
                  >
                    {el.standardSpecs.capacity.split(" ")[0]}P
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: SELECTED ELEVATOR DISPLAY (IMAGE + LAYOUT STRUCTURE)              */}
        {/* ========================================================================= */}
        <div className="space-y-12 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xs">
          {/* Header Banner for Selected Elevator */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200 pb-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-brand-teal/20 text-brand-teal text-xs font-bold uppercase tracking-wider border border-brand-teal/30">
                  {activeElevator.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-mono">
                  {activeElevator.brochurePage}
                </span>
                <span className="px-3 py-1 rounded-full bg-orange-100 text-brand-orange text-xs font-bold border border-orange-200">
                  IS 14665 Compliant
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {activeElevator.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                {activeElevator.overview}
              </p>
            </div>

            {/* Quick Consultation Button */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                to="/contact"
                className="px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold shadow-sm transition-all flex items-center space-x-1.5"
              >
                <span>Request Custom GA Drawing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Visual Showcase: FIRST IMAGE of Elevator + FULL LAYOUT STRUCTURE Drawings */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT: FIRST IMAGE OF ELEVATOR (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Installed Elevator Photograph</span>
                </span>
                <span className="text-[10px] text-slate-500 font-mono">Factory Finish</span>
              </div>

              {/* Elevator High-Res Photograph Card */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 shadow-md group h-[380px] sm:h-[440px]">
                <img
                  src={activeElevator.image}
                  alt={activeElevator.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

                {/* Badges on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5">
                  <div className="text-lg font-black">{activeElevator.name}</div>
                  <div className="text-xs text-slate-300 font-medium">
                    {activeElevator.tagline}
                  </div>
                  <div className="pt-2 border-t border-slate-700/80 flex justify-between text-xs text-slate-300">
                    <span>Speed: <strong className="text-white">{activeElevator.standardSpecs.ratedSpeed}</strong></span>
                    <span>Rated: <strong className="text-brand-teal">{activeElevator.standardSpecs.capacity}</strong></span>
                  </div>
                </div>
              </div>

              {/* Key Highlights Tags */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200/80 space-y-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Typical Building Applications:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeElevator.typicalApplications.map((app, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: FULL LAYOUT STRUCTURE (CAD Technical Hoistway Drawings) (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <Layers className="w-4 h-4 text-brand-orange" />
                  <span>Full Hoistway Layout Structure (CAD GA)</span>
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  All dimensions in mm
                </span>
              </div>

              {/* Drawing Sub-tab Selectors */}
              <div className="flex flex-wrap gap-2">
                {drawingKeys.map((key) => {
                  const isSelected = (activeDrawingKey === key);
                  const labelMap = {
                    main: "Main GA Drawing",
                    plan: "Hoistway Plan View",
                    elevation: "Cross-Section Elevation",
                    door: "Entrance Door Detail",
                    doors: "Entrance Door Detail",
                    manualAlt: "Manual Hoistway Plan",
                    optionB: "Option B Layout",
                    parkingSystems: "Parking Stacker Plan",
                    terrace: "Terrace Machine Detail",
                    threeDShafts: "3D Shaft Layout",
                    ropingPlan: "Roping Schematic"
                  };
                  const label = labelMap[key] || `${key.toUpperCase()} Layout`;

                  return (
                    <button
                      key={key}
                      onClick={() => setActiveDrawingKey(key)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isSelected
                          ? "bg-slate-900 text-white shadow-xs"
                          : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Technical Drawing Display Window */}
              <div className="relative bg-white rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between h-[380px] sm:h-[440px]">
                <div className="h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={currentDrawingUrl}
                    alt={`${activeElevator.name} Technical Layout Drawing`}
                    className="max-h-[300px] sm:max-h-[350px] w-auto object-contain transition-transform hover:scale-105 cursor-zoom-in"
                    onClick={() => setLightboxImg(currentDrawingUrl)}
                  />
                </div>

                {/* Drawing Actions Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px]">
                    Click image to expand high-resolution CAD schematic
                  </span>
                  <button
                    onClick={() => setLightboxImg(currentDrawingUrl)}
                    className="inline-flex items-center space-x-1 font-bold text-brand-teal hover:text-teal-700 cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Zoom CAD</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Hoistway Sub-Assemblies Breakdown */}
          <div className="pt-4">
            <ElevatorStructureViewer
              structure={activeElevator.structure}
              elevatorName={activeElevator.name}
              drawingUrl={activeElevator.drawings.plan || activeElevator.drawings.main}
            />
          </div>

          {/* ========================================================================= */}
          {/* PART 3: PROPER TABLE: CAPACITIES, LENGTH OF DIFFERENT THINGS, CIVIL SPECS */}
          {/* ========================================================================= */}
          <div className="space-y-6 pt-6 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
                  Standard Dimension Matrix
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {activeElevator.name} — Technical Specifications & Civil Hoistway Table
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
                  Full engineering dimensions specified in accordance with IS 14665. All dimensions in millimeters (mm).
                </p>
              </div>

              <div className="flex items-center space-x-2 text-xs text-slate-500 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
                <Info className="w-4 h-4 text-brand-orange" />
                <span>Custom hoistway dimensions available on request</span>
              </div>
            </div>

            {/* Architectural Dimension Key Explanation */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 p-3 rounded-2xl bg-white border border-slate-200 text-xs">
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="font-mono font-bold text-brand-teal block">CW (A)</span>
                <span className="text-slate-500 text-[11px]">Car Clear Width</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="font-mono font-bold text-brand-teal block">CD (B)</span>
                <span className="text-slate-500 text-[11px]">Car Clear Depth</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="font-mono font-bold text-brand-orange block">SW (C)</span>
                <span className="text-slate-500 text-[11px]">Shaft Clear Width</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="font-mono font-bold text-brand-orange block">SD (D)</span>
                <span className="text-slate-500 text-[11px]">Shaft Clear Depth</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="font-mono font-bold text-teal-600 block">OP (E)</span>
                <span className="text-slate-500 text-[11px]">Door Clear Opening</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="font-mono font-bold text-slate-700 block">Pit Depth</span>
                <span className="text-slate-500 text-[11px]">Below Lowest Floor</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <span className="font-mono font-bold text-slate-700 block">Overhead</span>
                <span className="text-slate-500 text-[11px]">Top Floor to Ceiling</span>
              </div>
            </div>

            {/* Civil Specifications Matrix Table */}
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xs">
              <table className="min-w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white font-bold border-b border-slate-800">
                    <th className="py-3 px-3.5">Persons</th>
                    <th className="py-3 px-3.5">Rated Load</th>
                    <th className="py-3 px-3.5">Car Inside (CW × CD)</th>
                    <th className="py-3 px-3.5">Lift Shaft (SW × SD)</th>
                    <th className="py-3 px-3.5">Door Opening (OP)</th>
                    <th className="py-3 px-3.5">Door Type</th>
                    <th className="py-3 px-3.5">Rated Speed</th>
                    <th className="py-3 px-3.5">Pit Depth</th>
                    <th className="py-3 px-3.5">Overhead</th>
                    <th className="py-3 px-3.5">Machine Room / Space</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {activeElevator.civilMatrix.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/60 hover:bg-teal-50/30"}
                    >
                      <td className="py-3 px-3.5 font-bold text-slate-900 whitespace-nowrap">
                        {row.persons} {typeof row.persons === "number" ? "Persons" : ""}
                      </td>
                      <td className="py-3 px-3.5 font-semibold text-brand-teal whitespace-nowrap">
                        {row.capacity} kg
                      </td>
                      <td className="py-3 px-3.5 font-mono text-slate-800 whitespace-nowrap">
                        {row.carW} × {row.carD} mm
                      </td>
                      <td className="py-3 px-3.5 font-mono font-semibold text-brand-orange whitespace-nowrap">
                        {row.shaftW} × {row.shaftD} mm
                      </td>
                      <td className="py-3 px-3.5 font-mono text-slate-700 whitespace-nowrap">
                        {row.entrance} mm
                      </td>
                      <td className="py-3 px-3.5 text-slate-600 whitespace-nowrap">
                        {row.doorType}
                      </td>
                      <td className="py-3 px-3.5 text-slate-700 whitespace-nowrap">
                        {row.speed} mps
                      </td>
                      <td className="py-3 px-3.5 font-mono text-slate-700 whitespace-nowrap">
                        {row.pit} mm
                      </td>
                      <td className="py-3 px-3.5 font-mono text-slate-700 whitespace-nowrap">
                        {row.overhead} mm
                      </td>
                      <td className="py-3 px-3.5 text-slate-600 font-mono text-[11px] whitespace-nowrap">
                        {row.machineRoom}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Standard Electrical & Safety Parameters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1 text-xs">
                <span className="text-slate-400 font-bold uppercase text-[10px] block">
                  Power Supply & Traction Drive
                </span>
                <span className="font-bold text-slate-900 block">
                  {activeElevator.standardSpecs.drive}
                </span>
                <span className="text-slate-500 text-[11px] block">
                  Voltage: {activeElevator.standardSpecs.voltage}
                </span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1 text-xs">
                <span className="text-slate-400 font-bold uppercase text-[10px] block">
                  Microprocessor Control System
                </span>
                <span className="font-bold text-slate-900 block">
                  {activeElevator.standardSpecs.control}
                </span>
                <span className="text-slate-500 text-[11px] block">
                  CAN bus serial group dispatch protocol
                </span>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1 text-xs">
                <span className="text-slate-400 font-bold uppercase text-[10px] block">
                  Blackout Rescue & Safety
                </span>
                <span className="font-bold text-brand-orange block">
                  {activeElevator.standardSpecs.rescueSystem}
                </span>
                <span className="text-slate-500 text-[11px] block">
                  IS 14665 bi-directional progressive safety clamps
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 4: TWO TYPES OF ELEVATOR DOORS: MANUAL AND AUTO                      */}
        {/* ========================================================================= */}
        <div id="doors-showcase" className="space-y-8 pt-8 border-t border-slate-200 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block mb-1">
                Step 2: Entrance Systems
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Two Types of Elevator Doors: Manual & Automatic
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
                Elevator doors are engineered to match building foot traffic and civil shaft widths. Switch between Manual and Automatic doors to inspect photographs, CAD drawings, and clear opening widths.
              </p>
            </div>

            {/* Dual Door Switcher Tabs */}
            <div className="flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shrink-0">
              <button
                onClick={() => setActiveDoorType("auto")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                  activeDoorType === "auto"
                    ? "bg-brand-teal text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <DoorOpen className="w-4 h-4" />
                <span>Automatic Doors ({automaticDoors.length})</span>
              </button>

              <button
                onClick={() => setActiveDoorType("manual")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                  activeDoorType === "manual"
                    ? "bg-brand-orange text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <DoorClosed className="w-4 h-4" />
                <span>Manual Doors ({manualDoors.length})</span>
              </button>
            </div>
          </div>

          {/* Door Systems Banner Summary */}
          <div className="p-6 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-bold">
                {activeDoorType === "auto"
                  ? "Automatic Doors: High-Speed, Silent & Full-Height Safety Curtains"
                  : "Manual Doors: Economic Space-Saving For Compact Hoistways"}
              </h3>
              <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
                {activeDoorType === "auto"
                  ? "Featuring VVVF variable frequency door headers, smooth S-curve cycling, stainless steel hairline or glass big vision panels, and up to 154-beam infrared light curtains."
                  : "Featuring high-tensile collapsible steel gates, imperforated solid privacy folding leaves, and smoked glass swing doors equipped with positive electromechanical interlocks."}
              </p>
            </div>

            <div className="flex items-center space-x-2 text-xs text-teal-300 bg-slate-800 px-3.5 py-2 rounded-xl border border-slate-700 shrink-0">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span>IS 14665 Tested Interlocks</span>
            </div>
          </div>

          {/* Door Cards Display Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeDoorType === "auto" ? automaticDoors : manualDoors).map((door, dIdx) => (
              <ScrollReveal
                key={door.id}
                direction="up"
                delay={dIdx * 40}
                distance={15}
                className="h-full"
              >
                <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    {/* Door Image + Drawing Header */}
                    <div className="grid grid-cols-2 h-48 bg-slate-900 border-b border-slate-100 overflow-hidden">
                      {/* Left: Photograph */}
                      <div className="relative overflow-hidden group/img">
                        <img
                          src={door.image}
                          alt={door.name}
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md px-2 py-0.5 rounded-md text-[9px] font-bold text-white uppercase">
                          Photo
                        </div>
                      </div>

                      {/* Right: Technical Drawing */}
                      <div
                        className="relative bg-white p-2 flex items-center justify-center cursor-zoom-in group/draw"
                        onClick={() => setLightboxImg(door.drawing)}
                      >
                        <img
                          src={door.drawing}
                          alt={`${door.name} CAD Drawing`}
                          className="max-h-full max-w-full object-contain group-hover/draw:scale-105 transition-transform"
                        />
                        <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-md p-1 rounded-md text-white">
                          <Maximize2 className="w-3 h-3" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-3">
                      <div>
                        <div className="flex items-center justify-between">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                              door.category === "automatic"
                                ? "bg-teal-50 text-brand-teal"
                                : "bg-orange-50 text-brand-orange"
                            }`}
                          >
                            {door.category === "automatic" ? "Automatic Operator" : "Manual Gate"}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            Page {door.brochurePage}
                          </span>
                        </div>
                        <h4 className="text-base font-black text-slate-900 group-hover:text-brand-teal transition-colors mt-1">
                          {door.name}
                        </h4>
                        <span className="text-[11px] font-medium text-slate-500 block">
                          {door.tagline}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {door.summary}
                      </p>

                      {/* Specifications Summary List */}
                      <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                        <div className="flex justify-between">
                          <span className="text-slate-400 text-[11px]">Clear Opening:</span>
                          <span className="font-bold text-slate-900 truncate max-w-[170px]">
                            {door.specs.standardOpening}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400 text-[11px]">Finished Height:</span>
                          <span className="font-medium text-slate-800 truncate max-w-[170px]">
                            {door.specs.standardHeight}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400 text-[11px]">Material:</span>
                          <span className="font-medium text-slate-800 truncate max-w-[170px]">
                            {door.specs.material}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => setLightboxImg(door.drawing)}
                      className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white text-xs font-bold transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Inspect CAD Drawing</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Technical Consultation CTA */}
        <CTASection
          title="Need Custom Hoistway Layouts or Non-Standard Doors?"
          subtitle="Our Nikol engineering headquarters creates bespoke AutoCAD GA drawings for narrow shafts, shallow pits, and high-tonnage cargo hoists."
          badge="Direct Nikol Engineering & CAD Team"
          variant="gradient"
        />
      </div>

      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL: FULL RESOLUTION CAD DRAWING VIEW                         */}
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  SlidersHorizontal,
  Download,
  FileText,
  Search,
  Info,
  ArrowRight,
  Maximize2,
  X,
  Layers,
  Compass,
  CheckCircle2
} from "lucide-react";
import { specificationsData } from "../data/specificationsData";
import { companyData } from "../data/companyData";
import ScrollReveal from "../components/ScrollReveal";
import { assetUrl } from "../utils/assetPath";

export default function Specifications({ onOpenBrochurePage }) {
  const [activeTab, setActiveTab] = useState("manual-doors");
  const [filterQuery, setFilterQuery] = useState("");
  const [selectedDrawingView, setSelectedDrawingView] = useState("main");
  const [lightboxImage, setLightboxImage] = useState(null);

  const tabs = [
    { id: "manual-doors", label: "Manual Passenger" },
    { id: "automatic-doors", label: "Automatic Passenger" },
    { id: "capsule", label: "Capsule Panoramic" },
    { id: "hospital", label: "Hospital Bed / Stretcher" },
    { id: "goods", label: "Goods Freight" },
    { id: "mrl", label: "MRL Gearless" },
    { id: "home", label: "Home Villa Lifts" },
    { id: "hydraulic", label: "Hydraulic Lifts" },
    { id: "car", label: "Car & Parking Systems" },
  ];

  const currentSpec = specificationsData[activeTab];

  const filteredRows = currentSpec?.rows.filter((row) =>
    !filterQuery || row.some((cell) => cell.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  // Determine active drawing based on sub-toggle if present
  const getActiveDrawing = () => {
    if (selectedDrawingView === "doors" && currentSpec.doorsDrawing) {
      return currentSpec.doorsDrawing;
    }
    if (selectedDrawingView === "parking" && currentSpec.parkingSystemsDrawing) {
      return currentSpec.parkingSystemsDrawing;
    }
    if (selectedDrawingView === "shaft3d" && currentSpec.shaft3dDrawing) {
      return currentSpec.shaft3dDrawing;
    }
    return currentSpec.drawing;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Lightbox Modal for Fullscreen Technical Drawings */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative bg-white rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] flex flex-col items-center shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-between items-center pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <Compass className="w-5 h-5 text-brand-teal" />
                <h3 className="text-base font-black text-slate-900">
                  {currentSpec.title} — Official Engineering Drawing
                </h3>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                aria-label="Close drawing preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="overflow-auto max-h-[72vh] w-full flex items-center justify-center p-4 bg-slate-50/50 rounded-2xl my-3">
              <img
                src={assetUrl(lightboxImage)}
                alt="Engineering Drawing"
                className="max-h-[65vh] object-contain rounded-lg shadow-sm"
              />
            </div>
            <div className="w-full text-center text-xs text-slate-500 pt-2">
              Transcribed verbatim from Krupa Elevators Official Catalog Page {currentSpec.brochurePage}. All dimensions in millimeters (mm).
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <ScrollReveal direction="up" distance={20} className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
          Architectural Hoistway Drawings & Engineering Diameters
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Technical Specifications Matrix
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Comprehensive civil, structural, and mechanical dimensions transcribed directly from pages 18 to 22 of the official KRUPA ELEVATORS technical brochure. Includes architectural hoistway plans, elevation sections, and verified dimension parameters. All measurements in millimeters (mm).
        </p>
      </ScrollReveal>

      {/* Tabs Bar */}
      <ScrollReveal direction="up" distance={20} delay={60} className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-8">
        <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setSelectedDrawingView("main");
                setFilterQuery("");
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-brand-teal text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Technical Drawing & Engineering Legend Section */}
        <div className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-5 sm:p-7 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-teal-light text-brand-teal">
                  Architectural GA Drawing
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-200 text-slate-700">
                  Brochure Page {currentSpec.brochurePage}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                {currentSpec.title} — Hoistway Layout & Plan
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">{currentSpec.note}</p>
            </div>

            {/* Sub-view toggles if auxiliary drawings exist */}
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              {currentSpec.doorsDrawing && (
                <button
                  onClick={() => setSelectedDrawingView(selectedDrawingView === "doors" ? "main" : "doors")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedDrawingView === "doors"
                      ? "bg-slate-900 text-white"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {selectedDrawingView === "doors" ? "Show Hoistway Plan" : "Landing Door Drawings"}
                </button>
              )}
              {currentSpec.parkingSystemsDrawing && (
                <button
                  onClick={() => setSelectedDrawingView(selectedDrawingView === "parking" ? "main" : "parking")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedDrawingView === "parking"
                      ? "bg-slate-900 text-white"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {selectedDrawingView === "parking" ? "Show Hoistway Plan" : "Parking Systems Visuals"}
                </button>
              )}
              {currentSpec.shaft3dDrawing && (
                <button
                  onClick={() => setSelectedDrawingView(selectedDrawingView === "shaft3d" ? "main" : "shaft3d")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    selectedDrawingView === "shaft3d"
                      ? "bg-slate-900 text-white"
                      : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {selectedDrawingView === "shaft3d" ? "Show Plans" : "3D Shaft Types"}
                </button>
              )}
              <button
                onClick={() => setLightboxImage(getActiveDrawing())}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:border-brand-teal transition-colors shadow-xs"
              >
                <Maximize2 className="w-3.5 h-3.5 text-brand-teal" />
                <span>Zoom Drawing</span>
              </button>
            </div>
          </div>

          {/* Side-by-side Drawing & Legend */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Drawing Preview Card */}
            <div
              onClick={() => setLightboxImage(getActiveDrawing())}
              className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-4 sm:p-6 shadow-sm flex flex-col items-center justify-center cursor-zoom-in group relative overflow-hidden"
            >
              <img
                src={assetUrl(getActiveDrawing())}
                alt={`${currentSpec.title} Architectural Drawing`}
                className="max-h-72 object-contain group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center space-x-1.5 shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to Expand Drawing</span>
                </span>
              </div>
              <div className="text-[11px] text-slate-400 font-medium text-center mt-3">
                Official Architectural Hoistway Layout & Structural Plan (Brochure p.{currentSpec.brochurePage})
              </div>
            </div>

            {/* Legend of Diameters & Variables */}
            <div className="lg:col-span-6 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-1.5">
                <Layers className="w-3.5 h-3.5 text-brand-teal" />
                <span>Dimensional Key & Parameter Guide</span>
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {currentSpec.legend?.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-teal-200 transition-colors"
                  >
                    <span className="inline-block font-black text-slate-900 text-xs text-brand-teal mr-2">
                      {item.key}:
                    </span>
                    <span className="text-xs text-slate-600 font-medium leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Active Table Details & Search */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
          <div>
            <h3 className="text-lg font-black text-slate-900">
              Verified Civil & Dimensional Matrix
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Exact dimensions and ratings transcribed verbatim from brochure tables.
            </p>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter capacity, persons, speed..."
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:border-brand-teal"
              />
            </div>
            {onOpenBrochurePage && (
              <button
                onClick={() => onOpenBrochurePage(currentSpec.brochurePage)}
                className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold shrink-0 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-brand-teal" />
                <span>Brochure p.{currentSpec.brochurePage}</span>
              </button>
            )}
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-inner">
          <table className="w-full text-left text-xs border-collapse min-w-[750px]">
            <thead>
              <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                {currentSpec.headers.map((h, i) => (
                  <th key={i} className="p-3.5 whitespace-nowrap bg-slate-100">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredRows.map((row, ri) => (
                <tr key={ri} className="hover:bg-slate-50/80 transition-colors">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`p-3.5 ${
                        ci === 0 ? "font-bold text-slate-900" : "text-slate-700"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
              {filteredRows.length === 0 && (
                <tr>
                  <td colSpan={currentSpec.headers.length} className="p-8 text-center text-slate-500">
                    No rows match your filter query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Engineering Notice */}
        <div className="flex items-start space-x-2.5 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs">
          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Brochure Engineering Clause:</strong> All dimensions are in mm. This is general engineering data and may be updated or customized based on structural grid coordinates and site conditions. All hoistway walls must be a minimum of 230 mm brickwork or 150 mm R.C.C. Pit waterproofing, overhead beam mounting, and machine room ventilation must be verified prior to civil shaft casting.
          </p>
        </div>
      </ScrollReveal>

      {/* Consultation Action */}
      <ScrollReveal direction="up" distance={20} className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl border border-slate-800">
        <div className="space-y-1">
          <h3 className="text-xl font-black">Need Custom Hoistway GA Drawings or Pit Calculations?</h3>
          <p className="text-xs text-slate-400 max-w-xl">
            Our engineering design team prepares bespoke General Arrangement (GA) drawings and CAD layouts tailored to your architectural structure and lift-well dimensions.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href={companyData.brochurePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl border border-slate-700 text-white text-xs font-bold hover:bg-slate-800 transition-colors flex items-center space-x-2"
          >
            <Download className="w-4 h-4 text-brand-teal" />
            <span>Download Full PDF</span>
          </a>
          <Link
            to="/contact"
            className="px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-colors flex items-center space-x-2 shadow-md"
          >
            <span>Request Site Survey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}

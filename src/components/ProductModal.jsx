import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  Compass,
  Maximize2,
  Phone,
  ArrowRight,
  Download,
  Layers,
  Sparkles,
  Info,
  CheckCircle2,
  FileText
} from "lucide-react";
import { companyData } from "../data/companyData";
import { specificationsData } from "../data/specificationsData";
import { assetUrl } from "../utils/assetPath";
import MergedCivilTable from "./MergedCivilTable";

export default function ProductModal({ product, onClose }) {
  const [zoomDrawing, setZoomDrawing] = useState(false);
  const [selectedDrawingView, setSelectedDrawingView] = useState("main");
  const [activeVisualTab, setActiveVisualTab] = useState("drawing"); // "drawing" or "photo"

  if (!product) return null;

  // Map product id to specificationsData key
  const getSpecKey = (id) => {
    switch (id) {
      case "passenger":
        return "automatic-doors";
      case "home-elevator":
        return "home";
      case "capsule":
        return "capsule";
      case "hospital":
        return "hospital";
      case "goods":
        return "goods";
      case "car-elevators":
        return "car";
      case "mrl":
        return "mrl";
      case "hydraulic":
        return "hydraulic";
      case "manual-doors":
        return "manual-doors";
      case "automatic-doors":
        return "automatic-doors";
      default:
        return null;
    }
  };

  const specKey = product.specKey || getSpecKey(product.id);
  const specData = specKey ? specificationsData[specKey] : null;

  const getActiveDrawing = () => {
    if (selectedDrawingView === "plan" && specData?.planDrawing) return specData.planDrawing;
    if (selectedDrawingView === "elevation" && specData?.elevationDrawing) return specData.elevationDrawing;
    if (selectedDrawingView === "doors" && specData?.doorsDrawing) return specData.doorsDrawing;
    if (selectedDrawingView === "parking" && specData?.parkingSystemsDrawing) return specData.parkingSystemsDrawing;
    if (selectedDrawingView === "shaft3d" && specData?.shaft3dDrawing) return specData.shaft3dDrawing;
    return specData?.drawing || product.drawing;
  };

  const activeDrawingPath = getActiveDrawing();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-150">
      {/* Lightbox for Zooming Drawing */}
      {zoomDrawing && activeDrawingPath && (
        <div
          className="fixed inset-0 z-60 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setZoomDrawing(false)}
        >
          <div
            className="relative bg-white rounded-3xl p-6 max-w-5xl w-full max-h-[92vh] flex flex-col items-center shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-between items-center pb-3 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <Compass className="w-5 h-5 text-brand-teal" />
                <h4 className="text-sm sm:text-base font-black text-slate-900">
                  {product.name} — Architectural Hoistway GA Drawing (Brochure p.{specData?.brochurePage || product.brochurePage})
                </h4>
              </div>
              <button
                onClick={() => setZoomDrawing(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors"
                aria-label="Close drawing preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 w-full flex items-center justify-center overflow-auto max-h-[74vh] bg-slate-50/50 rounded-2xl my-3">
              <img
                src={assetUrl(activeDrawingPath)}
                alt={`${product.name} Hoistway Layout`}
                className="max-h-[70vh] object-contain rounded-lg shadow-sm"
              />
            </div>
            <div className="w-full text-center text-xs text-slate-500 pt-1">
              All civil dimensions in millimeters (mm). Compliant with IS 14665 & BIS engineering standards.
            </div>
          </div>
        </div>
      )}

      {/* Main Modal Window */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden border border-slate-200 max-h-[94vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200/80 bg-slate-50/70 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-teal-light text-brand-teal">
                  <Compass className="w-3 h-3 text-brand-orange" />
                  <span>Layout Design & Engineering Specs</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-200 text-slate-700">
                  Brochure Page {specData?.brochurePage || product.brochurePage}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-50 border border-orange-200 text-brand-orange">
                  {product.doorOptions?.[0]?.includes("Auto") || product.name.includes("Auto") ? "Automatic Doors" : "Manual / Flexible Doors"}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                {product.tagline} &bull; <span className="text-slate-500 font-normal">{product.summary}</span>
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer shrink-0"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Modal Body: Layout Design Drawing & Merged-Cell Table */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Top Section: Architectural Drawing with Sub-View Switchers */}
          <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-4 sm:p-5 space-y-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-200/80 pb-3">
              <div>
                <span className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                  <Compass className="w-4 h-4 text-brand-teal" />
                  <span>Official General Arrangement (GA) Hoistway Layout</span>
                </span>
                <span className="text-[11px] text-slate-500 block mt-0.5">
                  Verbatim architectural dimensions & shaft clearances from Krupa brochure p.{specData?.brochurePage || product.brochurePage}
                </span>
              </div>

              {/* View Switchers & Zoom */}
              <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
                {/* Visual View: Drawing vs Photo */}
                <div className="flex items-center space-x-1 bg-white p-1 rounded-xl border border-slate-200 text-[11px]">
                  <button
                    onClick={() => setActiveVisualTab("drawing")}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                      activeVisualTab === "drawing" ? "bg-brand-teal text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    GA Drawing
                  </button>
                  <button
                    onClick={() => setActiveVisualTab("photo")}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                      activeVisualTab === "photo" ? "bg-brand-teal text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Cabin Visual
                  </button>
                </div>

                {/* Sub-Drawing Toggles */}
                {activeVisualTab === "drawing" && specData && (
                  <div className="flex items-center space-x-1 bg-white p-1 rounded-xl border border-slate-200 text-[11px]">
                    <button
                      onClick={() => setSelectedDrawingView("main")}
                      className={`px-2 py-0.5 rounded font-bold transition-colors cursor-pointer ${
                        selectedDrawingView === "main" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Main GA
                    </button>
                    {specData.planDrawing && (
                      <button
                        onClick={() => setSelectedDrawingView("plan")}
                        className={`px-2 py-0.5 rounded font-bold transition-colors cursor-pointer ${
                          selectedDrawingView === "plan" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Plan
                      </button>
                    )}
                    {specData.elevationDrawing && (
                      <button
                        onClick={() => setSelectedDrawingView("elevation")}
                        className={`px-2 py-0.5 rounded font-bold transition-colors cursor-pointer ${
                          selectedDrawingView === "elevation" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Elevation
                      </button>
                    )}
                    {specData.doorsDrawing && (
                      <button
                        onClick={() => setSelectedDrawingView("doors")}
                        className={`px-2 py-0.5 rounded font-bold transition-colors cursor-pointer ${
                          selectedDrawingView === "doors" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Doors
                      </button>
                    )}
                    {specData.parkingSystemsDrawing && (
                      <button
                        onClick={() => setSelectedDrawingView("parking")}
                        className={`px-2 py-0.5 rounded font-bold transition-colors cursor-pointer ${
                          selectedDrawingView === "parking" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        Parking
                      </button>
                    )}
                    {specData.shaft3dDrawing && (
                      <button
                        onClick={() => setSelectedDrawingView("shaft3d")}
                        className={`px-2 py-0.5 rounded font-bold transition-colors cursor-pointer ${
                          selectedDrawingView === "shaft3d" ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        3D Shaft
                      </button>
                    )}
                  </div>
                )}

                <button
                  onClick={() => setZoomDrawing(true)}
                  className="inline-flex items-center space-x-1 px-3 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:border-brand-teal transition-colors shadow-2xs cursor-pointer"
                  title="Enlarge drawing in high-resolution lightbox"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-brand-teal" />
                  <span>Enlarge</span>
                </button>
              </div>
            </div>

            {/* Drawing / Photo Preview Container */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
              <div
                onClick={() => setZoomDrawing(true)}
                className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-3 sm:p-4 flex flex-col items-center justify-center cursor-zoom-in group relative overflow-hidden h-64 sm:h-72"
              >
                {activeVisualTab === "drawing" ? (
                  activeDrawingPath ? (
                    <img
                      src={assetUrl(activeDrawingPath)}
                      alt={`${product.name} Hoistway Drawing`}
                      className="max-h-full object-contain group-hover:scale-102 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-xs text-slate-400">Technical drawing provided upon site survey</div>
                  )
                ) : (
                  <img
                    src={assetUrl(product.image)}
                    alt={product.name}
                    className="max-h-full w-full object-cover rounded-lg group-hover:scale-102 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors flex items-center justify-center pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/85 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center space-x-1.5 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click to Expand Diagram</span>
                  </span>
                </div>
              </div>

              {/* Architectural Parameters & Quick Specifications */}
              <div className="lg:col-span-5 space-y-3">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Core Technical Specifications
                  </span>
                  <div className="space-y-1.5 text-xs">
                    {Object.entries(product.keySpecs).slice(0, 4).map(([key, val], idx) => (
                      <div key={idx} className="flex justify-between items-center py-0.5 border-b border-slate-100 last:border-0">
                        <span className="text-slate-500 font-medium">{key}:</span>
                        <span className="font-bold text-slate-800 text-right truncate max-w-[170px]">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend Highlights if available */}
                {specData?.legend && (
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center space-x-1">
                      <Layers className="w-3 h-3 text-brand-teal" />
                      <span>Dimensional Key Callouts</span>
                    </span>
                    <div className="space-y-1 text-[11px]">
                      {specData.legend.slice(0, 3).map((l, idx) => (
                        <div key={idx} className="leading-snug">
                          <strong className="text-brand-teal font-black">{l.key}: </strong>
                          <span className="text-slate-600 font-medium">{l.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {specData?.note && (
              <div className="text-[11px] text-slate-500 pt-1 leading-relaxed">
                <Info className="w-3 h-3 text-brand-teal inline mr-1 -mt-0.5" />
                {specData.note}
              </div>
            )}
          </div>

          {/* Bottom Section: Civil Dimensions Matrix Table with MERGED CELLS */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
              <div>
                <h3 className="text-base font-black text-slate-900 flex items-center space-x-1.5">
                  <Layers className="w-4 h-4 text-brand-teal" />
                  <span>Civil Dimensions & Structural Matrix (in mm)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Official catalog dimensions with common specifications merged for optimal architectural readability.
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                IS 14665 & BIS Standard
              </span>
            </div>

            {/* Merged Civil Dimensions Table */}
            {specData?.headers && specData?.rows ? (
              <MergedCivilTable headers={specData.headers} rows={specData.rows} />
            ) : product.quickSpecsTable ? (
              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="py-2.5 px-3 uppercase text-[11px] tracking-wider">Parameter</th>
                      <th className="py-2.5 px-3 uppercase text-[11px] tracking-wider">Standard Range</th>
                      <th className="py-2.5 px-3 uppercase text-[11px] tracking-wider">Engineering Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {product.quickSpecsTable.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-2 px-3 font-semibold text-slate-800">{row.param}</td>
                        <td className="py-2 px-3 font-bold text-brand-teal">{row.val}</td>
                        <td className="py-2 px-3 text-slate-600">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="p-4 text-center text-xs text-slate-500 bg-slate-50 rounded-xl border border-slate-200">
                Contact engineering team for bespoke dimensional matrix.
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer: Quick Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200/80 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-3 shrink-0">
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <a
              href={companyData.brochurePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-white hover:border-brand-teal transition-colors w-full sm:w-auto"
            >
              <Download className="w-3.5 h-3.5 text-brand-teal" />
              <span>Full PDF Brochure</span>
            </a>
            <a
              href={`tel:${companyData.contacts.phoneRaw}`}
              className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>Call Engineers</span>
            </a>
          </div>

          <Link
            to="/contact"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-md hover:bg-brand-orange-hover transition-colors"
          >
            <span>Request Site Survey for {product.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

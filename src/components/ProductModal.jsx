import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  CheckCircle,
  ArrowRight,
  SlidersHorizontal,
  Phone,
  Sparkles,
  Compass,
  Maximize2
} from "lucide-react";
import { companyData } from "../data/companyData";
import { specificationsData } from "../data/specificationsData";
import { assetUrl } from "../utils/assetPath";

export default function ProductModal({ product, onClose }) {
  const [activeTab, setActiveTab] = useState("overview"); // "overview" or "technical"
  const [zoomDrawing, setZoomDrawing] = useState(false);

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
      default:
        return null;
    }
  };

  const specKey = getSpecKey(product.id);
  const specData = specKey ? specificationsData[specKey] : null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      {/* Lightbox for zooming drawing */}
      {zoomDrawing && specData?.drawing && (
        <div
          className="fixed inset-0 z-60 bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
          onClick={() => setZoomDrawing(false)}
        >
          <div
            className="relative bg-white rounded-3xl p-6 max-w-4xl w-full max-h-[90vh] flex flex-col items-center shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex justify-between items-center pb-3 border-b border-slate-100">
              <h4 className="text-sm font-black text-slate-900">
                {product.name} — Technical Hoistway GA Drawing
              </h4>
              <button
                onClick={() => setZoomDrawing(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 w-full flex items-center justify-center overflow-auto max-h-[70vh]">
              <img
                src={assetUrl(specData.drawing)}
                alt={`${product.name} Hoistway GA Drawing`}
                className="max-h-[65vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden border border-slate-200 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal-light text-brand-teal mb-1.5">
                <Sparkles className="w-3 h-3" />
                <span>{product.category}</span>
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">{product.name}</h2>
              <p className="text-xs text-brand-orange font-semibold">{product.tagline}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Sub-tabs if specData exists */}
          {specData && (
            <div className="flex items-center space-x-2 mt-4 pt-3 border-t border-slate-200/60">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  activeTab === "overview"
                    ? "bg-brand-teal text-white shadow-xs"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                Product Overview
              </button>
              <button
                onClick={() => setActiveTab("technical")}
                className={`inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  activeTab === "technical"
                    ? "bg-brand-teal text-white shadow-xs"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Technical Drawing & Dimensions</span>
              </button>
            </div>
          )}
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === "overview" ? (
            <>
              {/* Main Visual & Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-video md:aspect-square relative group">
                  <img
                    src={assetUrl(product.image)}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] text-white font-bold flex items-center space-x-1 border border-slate-700">
                    <Sparkles className="w-3 h-3 text-brand-teal" />
                    <span>Verified Engineering Solution</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-base font-bold text-slate-900">Engineering Overview</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{product.description}</p>
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Recommended Environments
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {product.idealFor?.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Specs Table */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-3">Key Technical Attributes</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {Object.entries(product.keySpecs).map(([key, value], idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors"
                    >
                      <span className="font-medium text-slate-500">{key}</span>
                      <span className="font-bold text-slate-900 text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-3">Salient Features & Safety Systems</h3>
                <ul className="space-y-2">
                  {product.features?.map((f, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Door Systems */}
              {product.doorOptions && (
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">Compatible Door Configurations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.doorOptions.map((door, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white"
                      >
                        • {door}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Technical Hoistway Drawing & Table View */
            <div className="space-y-6">
              {/* Technical Drawing */}
              {specData?.drawing && (
                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-900">
                      Official Hoistway GA Drawing (Brochure p.{specData.brochurePage})
                    </span>
                    <button
                      onClick={() => setZoomDrawing(true)}
                      className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:border-brand-teal"
                    >
                      <Maximize2 className="w-3.5 h-3.5 text-brand-teal" />
                      <span>Enlarge</span>
                    </button>
                  </div>
                  <div
                    onClick={() => setZoomDrawing(true)}
                    className="bg-white rounded-xl border border-slate-200 p-3 flex justify-center items-center cursor-zoom-in group"
                  >
                    <img
                      src={assetUrl(specData.drawing)}
                      alt={`${product.name} Hoistway Drawing`}
                      className="max-h-60 object-contain group-hover:scale-102 transition-transform"
                    />
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {specData.note}
                  </div>
                </div>
              )}

              {/* Legend Callouts */}
              {specData?.legend && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Diameter & Dimensional Key
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {specData.legend.map((l, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
                        <span className="font-black text-brand-teal">{l.key}: </span>
                        <span className="text-slate-600 font-medium">{l.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Dimension Matrix Table */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Exact Dimension Table (in mm)
                </h4>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-inner">
                  <table className="w-full text-left text-xs border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                        {specData.headers.map((h, i) => (
                          <th key={i} className="p-2.5 whitespace-nowrap bg-slate-100">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {specData.rows.map((row, ri) => (
                        <tr key={ri} className="hover:bg-slate-50 transition-colors">
                          {row.map((cell, ci) => (
                            <td
                              key={ci}
                              className={`p-2.5 ${ci === 0 ? "font-bold text-slate-900" : "text-slate-700"}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <Link
              to="/specifications"
              onClick={onClose}
              className="inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-white hover:border-brand-teal transition-colors w-full sm:w-auto"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-brand-teal" />
              <span>Full Specifications Matrix</span>
            </Link>
            <a
              href={`tel:${companyData.contacts.phoneRaw}`}
              className="inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>Call Team</span>
            </a>
          </div>

          <Link
            to="/contact"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-md hover:bg-brand-orange-hover transition-colors"
          >
            <span>Request Quote for {product.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

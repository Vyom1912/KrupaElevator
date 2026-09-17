import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Eye, Check, SlidersHorizontal, ArrowRight, Layers, X, Shield, Wind, Lightbulb, Maximize2 } from "lucide-react";
import { interiorSeries, etchingPatterns } from "../data/interiorsData";
import CabinConfigurator from "../components/CabinConfigurator";

export default function Interior() {
  const [activeSeries, setActiveSeries] = useState("All");
  const [selectedCabin, setSelectedCabin] = useState(null);

  const seriesTabs = ["All", "Basic Series", "Standard Series", "Semi Designer Series", "Premium Series"];

  const filteredModels = interiorSeries.filter(
    (item) => activeSeries === "All" || item.series === activeSeries
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
          Freedom of Design & Interior Architecture
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Car Interior Concepts & Finishes
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Create the exact aesthetic you desire. Combine materials, hairline stainless steel, titanium gold mirrors, micalex LED ceilings, and etched wall art to achieve the ideal ambiance tailored to your building.
        </p>
      </div>

      {/* Interactive Configurator Callout */}
      <CabinConfigurator />

      {/* Series Filter Tabs */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900">Elevator Cabin Designs: KEC-01 to KEC-11</h2>
            <p className="text-xs text-slate-500 mt-0.5">
              11 verified architectural interior styles across Basic, Standard, Semi-Designer, and Premium collections.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {seriesTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSeries(tab)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeSeries === tab
                    ? "bg-brand-teal text-white shadow-md scale-[1.02]"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModels.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual */}
                <div className="h-64 bg-slate-900 relative overflow-hidden group/img cursor-pointer" onClick={() => setSelectedCabin(item)}>
                  <img
                    src={item.image}
                    alt={item.model}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover/img:opacity-40 transition-opacity" />

                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-black text-slate-900 border border-slate-200 shadow-sm">
                    {item.series}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCabin(item);
                    }}
                    className="absolute bottom-3 right-3 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-bold text-white hover:bg-brand-teal transition-all flex items-center space-x-1.5 shadow-md"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-teal-300" />
                    <span>Inspect Design</span>
                  </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-brand-orange uppercase tracking-wider block">
                        Verified Model
                      </span>
                      <span className="text-[11px] font-bold text-slate-400 font-mono">
                        {item.model}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-brand-teal transition-colors mt-0.5">
                      {item.model}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-center space-x-1.5 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                        <span className="font-semibold">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Detailed Specs Breakdown */}
                  <div className="pt-2 border-t border-slate-100 space-y-2 text-[11px]">
                    <div className="flex justify-between items-start">
                      <span className="text-slate-400 font-medium shrink-0">Ceiling:</span>
                      <span className="font-bold text-slate-800 text-right max-w-[200px]">{item.specs.ceiling}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-slate-400 font-medium shrink-0">Car Wall:</span>
                      <span className="font-bold text-slate-800 text-right max-w-[200px]">{item.specs.carWall}</span>
                    </div>
                    {item.specs.cop && (
                      <div className="flex justify-between items-start">
                        <span className="text-slate-400 font-medium shrink-0">COP:</span>
                        <span className="font-bold text-slate-800 text-right max-w-[200px]">{item.specs.cop}</span>
                      </div>
                    )}
                    {item.specs.flooring && (
                      <div className="flex justify-between items-start">
                        <span className="text-slate-400 font-medium shrink-0">Flooring:</span>
                        <span className="font-bold text-slate-800 text-right max-w-[200px]">{item.specs.flooring}</span>
                      </div>
                    )}
                    {item.specs.etchingPatterns && (
                      <div className="pt-1">
                        <span className="text-slate-400 font-medium block mb-1">Laser Etched Motifs:</span>
                        <div className="flex flex-wrap gap-1">
                          {item.specs.etchingPatterns.map((pat, pi) => (
                            <span key={pi} className="px-2 py-0.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-bold">
                              {pat}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex gap-2">
                <button
                  onClick={() => setSelectedCabin(item)}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 transition-colors"
                >
                  View Details
                </button>
                <Link
                  to="/contact"
                  className="py-2.5 px-4 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-brand-orange-hover transition-colors flex items-center justify-center space-x-1 shadow-sm"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Cabin Inspection Modal */}
      {selectedCabin && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden border border-slate-200 max-h-[92vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal-light text-brand-teal mb-1">
                  {selectedCabin.series}
                </span>
                <h3 className="text-2xl font-black text-slate-900">{selectedCabin.model} Cabin Interior</h3>
              </div>
              <button
                onClick={() => setSelectedCabin(null)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors"
                aria-label="Close cabin inspection modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 aspect-[4/3] shadow-inner">
                  <img
                    src={selectedCabin.image}
                    alt={selectedCabin.model}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Design Overview</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      {selectedCabin.description}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <Lightbulb className="w-4 h-4 text-brand-orange shrink-0" />
                      <div>
                        <span className="text-slate-400 font-medium block text-[10px]">Illumination:</span>
                        <strong className="text-slate-800">{selectedCabin.specs.illumination || selectedCabin.specs.ceiling}</strong>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <Wind className="w-4 h-4 text-brand-teal shrink-0" />
                      <div>
                        <span className="text-slate-400 font-medium block text-[10px]">Ventilation System:</span>
                        <strong className="text-slate-800">{selectedCabin.specs.ventilation || "Standard Blower Ventilation"}</strong>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                      <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div>
                        <span className="text-slate-400 font-medium block text-[10px]">Mirror & Accents:</span>
                        <strong className="text-slate-800">{selectedCabin.specs.mirrorSpec || "Integrated Safety Mirror"}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Complete Specifications Grid */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-2">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                  Materials & Finish Breakdown
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[11px] font-medium">Ceiling Construction:</span>
                    <span className="font-bold text-slate-900">{selectedCabin.specs.ceiling}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[11px] font-medium">Car Wall Paneling:</span>
                    <span className="font-bold text-slate-900">{selectedCabin.specs.carWall}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[11px] font-medium">Car Operating Panel (COP):</span>
                    <span className="font-bold text-slate-900">{selectedCabin.specs.cop}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[11px] font-medium">Flooring:</span>
                    <span className="font-bold text-slate-900">{selectedCabin.specs.flooring}</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-100">
                    <span className="text-slate-400 block text-[11px] font-medium">Car Door Finish:</span>
                    <span className="font-bold text-slate-900">{selectedCabin.specs.carDoor}</span>
                  </div>
                  {selectedCabin.specs.handrail && (
                    <div className="p-3 bg-white rounded-xl border border-slate-100">
                      <span className="text-slate-400 block text-[11px] font-medium">Handrail:</span>
                      <span className="font-bold text-slate-900">{selectedCabin.specs.handrail}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 flex justify-between items-center">
              <button
                onClick={() => setSelectedCabin(null)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-white"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={() => setSelectedCabin(null)}
                className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-brand-orange-hover shadow-md"
              >
                <span>Request Quotation for {selectedCabin.model}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Etching Pattern Swatches */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl border border-slate-800">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block mb-1">
            Artistic Etching Patterns
          </span>
          <h2 className="text-2xl sm:text-3xl font-black">
            Stainless Steel Laser-Etched Motifs
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Featured on KEC-04, KEC-06, and KEC-08 models. High-precision laser etching and chemical embossing create unique visual depth and luxury reflections.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {etchingPatterns.map((pat) => (
            <div
              key={pat.code}
              className="bg-slate-800/80 border border-slate-700 p-3.5 rounded-2xl flex flex-col justify-between text-center hover:border-brand-teal hover:scale-105 transition-all duration-300 shadow-md"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-slate-700 flex items-center justify-center text-brand-orange font-mono font-black text-xs mb-2 shadow-inner">
                {pat.code}
              </div>
              <div>
                <strong className="text-xs font-bold block text-white">{pat.name}</strong>
                <span className="text-[10px] text-slate-400 block mt-0.5">{pat.finish}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

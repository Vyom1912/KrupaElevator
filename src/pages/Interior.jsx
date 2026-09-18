import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Eye,
  ArrowRight,
  Layers,
  X,
  Shield,
  Lightbulb,
  Maximize2,
  CheckCircle2,
  SlidersHorizontal,
  Compass
} from "lucide-react";
import {
  rawInteriorSeries,
  etchingPatterns,
  operatingPanels
} from "../data/interiorsMaster";
import ScrollReveal from "../components/ScrollReveal";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";

// Human-readable labels for spec keys in modal
const specLabels = {
  ceiling: "Ceiling Finish & Lighting",
  cop: "Cabin Operating Panel (COP)",
  carWall: "Cabin Wall Finish",
  flooring: "Flooring Specification",
  carDoor: "Cabin Door Finish",
  handrail: "Handrail Profile",
  ventilation: "Ventilation System",
  illumination: "Illumination System",
  mirrorSpec: "Mirror Specification",
  materials: "Material Composition"
};

export default function Interior() {
  const [selectedCabin, setSelectedCabin] = useState(null);

  // Group cabin models by series for sequential presentation
  const seriesGroups = [
    {
      seriesName: "Basic Series",
      tagline: "Essential Durability & Clean Lines",
      description: "Functional hairline stainless steel with full rear mirror, engineered for dependable daily residential transit.",
      models: rawInteriorSeries.filter((m) => m.categoryKey === "basic")
    },
    {
      seriesName: "Standard Series",
      tagline: "Comfort & Enhanced Airflow",
      description: "Incorporates built-in centrifugal blower fan ventilation and ergonomic half-height mirror with center handrail.",
      models: rawInteriorSeries.filter((m) => m.categoryKey === "standard")
    },
    {
      seriesName: "Semi Series",
      tagline: "Architectural Metallic Warmth & Gold Tones",
      description: "Titanium gold mirror, rose gold hairline, and imitation bronze finishes complemented by perimeter LED cove lighting.",
      models: rawInteriorSeries.filter((m) => m.categoryKey === "semi")
    },
    {
      seriesName: "Design Series",
      tagline: "Contemporary Modernist Geometry",
      description: "Designer etched stainless steel, linear architectural light bars, and dual-tier contour grab handles.",
      models: rawInteriorSeries.filter((m) => m.categoryKey === "design")
    },
    {
      seriesName: "Premium Series",
      tagline: "Flagship Luxury & Signature Craftsmanship",
      description: "Six-sided multi-angle lighting, translucent acrylic ceiling sky panels, and beveled titanium gold mirror inlays.",
      models: rawInteriorSeries.filter((m) => m.categoryKey === "premium")
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden">
      {/* Page Hero */}
      <PageHero
        badge="Architectural Interior Collections"
        title="Elevator Interiors Designed Around Your Space"
        subtitle="From economical hairline stainless steel to custom titanium gold luxury, our cabin collections deliver tailored aesthetics, acoustic isolation, and energy-efficient illumination for residential, commercial, and hospitality projects."
        breadcrumbs={[{ label: "Interiors" }]}
        actions={
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-lg transition-colors flex items-center space-x-2"
            >
              <span>Request Material Swatches & Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/elevators"
              className="px-6 py-3 rounded-full bg-slate-800/90 border border-slate-700 text-white text-xs sm:text-sm font-bold hover:bg-slate-700 transition-colors flex items-center space-x-2"
            >
              <SlidersHorizontal className="w-4 h-4 text-brand-teal" />
              <span>Explore Elevator Applications</span>
            </Link>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* ========================================================= */}
        {/* SECTION 1: CABIN COLLECTIONS (Sequential by Series)       */}
        {/* ========================================================= */}
        <section className="space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                Bespoke Cabin Aesthetics
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
                Architectural Cabin Series
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fabricated with SS 304 grade sheets, acoustic false ceilings, warm LED downlights, and shatter-resistant safety mirrors. Browse our series progression from functional simplicity to ultra-luxury.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-medium text-slate-500 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 self-start md:self-auto">
              <Compass className="w-4 h-4 text-brand-teal" />
              <span>Basic &bull; Standard &bull; Semi &bull; Design &bull; Premium</span>
            </div>
          </div>

          {/* Sequential Series Groups */}
          <div className="space-y-16">
            {seriesGroups.map((group) => (
              <div key={group.seriesName} className="space-y-6">
                {/* Series Header Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200">
                  <div>
                    <div className="flex items-center space-x-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-teal" />
                      <h3 className="text-lg sm:text-xl font-black text-slate-900">
                        {group.seriesName}
                      </h3>
                      <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                        — {group.tagline}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 max-w-3xl">
                      {group.description}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-white px-3 py-1 rounded-lg border border-slate-200 self-start sm:self-auto">
                    Krupa Engineering
                  </span>
                </div>

                {/* Cabins Grid for this Series */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.models.map((item, idx) => (
                    <ScrollReveal
                      key={item.id}
                      direction="up"
                      delay={idx * 30}
                      distance={20}
                      className="h-full"
                    >
                      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
                        <div>
                          {/* Large Interior Photograph */}
                          <div className="h-64 bg-slate-900 relative overflow-hidden group/img">
                            <img
                              src={item.image}
                              alt={item.model}
                              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-slate-900 border border-slate-200 uppercase tracking-wider">
                              {item.series}
                            </div>
                            <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-teal-300 border border-slate-700">
                              {item.model}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6 space-y-3">
                            <div className="flex items-center justify-between">
                              <h4 className="text-xl font-black text-slate-900 group-hover:text-brand-teal transition-colors">
                                {item.model}
                              </h4>
                              <span className="text-[10px] font-mono text-slate-400">
                                Brochure P{item.brochurePage}
                              </span>
                            </div>

                            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>

                            {/* Architectural Specifications Table */}
                            <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                              <div className="flex justify-between">
                                <span className="text-slate-400 text-[11px]">Ceiling:</span>
                                <span className="font-medium text-slate-800 text-right truncate max-w-[180px]">
                                  {item.specs.ceiling}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-400 text-[11px]">Cabin Wall:</span>
                                <span className="font-bold text-slate-900 text-right truncate max-w-[180px]">
                                  {item.specs.carWall}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-400 text-[11px]">Flooring:</span>
                                <span className="font-medium text-slate-800 text-right truncate max-w-[180px]">
                                  {item.specs.flooring}
                                </span>
                              </div>
                              {item.specs.handrail && (
                                <div className="flex justify-between">
                                  <span className="text-slate-400 text-[11px]">Handrail:</span>
                                  <span className="font-medium text-slate-800 text-right truncate max-w-[180px]">
                                    {item.specs.handrail}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Card Actions */}
                        <div className="p-6 pt-0 flex gap-2">
                          <button
                            onClick={() => setSelectedCabin(item)}
                            className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-brand-teal text-white text-xs font-bold transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
                          >
                            <Eye className="w-3.5 h-3.5 text-teal-300" />
                            <span>Inspect Finishes</span>
                          </button>
                          <Link
                            to="/contact"
                            className="py-2.5 px-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-colors"
                          >
                            Quote
                          </Link>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: LASER ETCHING PATTERNS (AG Series)             */}
        {/* ========================================================= */}
        <section className="space-y-8">
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white space-y-3 shadow-xl border border-slate-800">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">
              Architectural Surface Detailing &bull; AG Series
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Precision Laser Etching Patterns
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Permanently etched onto hairline stainless steel, titanium gold mirrors, and rose gold surfaces. These intricate geometric and organic motifs elevate elevator entrances and cabin back walls into bespoke works of architectural art.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {etchingPatterns.map((pat) => (
              <div
                key={pat.code}
                className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-teal-300 mx-auto flex items-center justify-center font-black text-sm border border-slate-700 shadow-xs">
                  {pat.code}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{pat.name}</h4>
                  <span className="text-[11px] text-brand-teal font-semibold block mt-0.5">
                    {pat.finish}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: OPERATING PANELS & INDICATORS (COP & LOP)      */}
        {/* ========================================================= */}
        <section className="space-y-8">
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white space-y-3 shadow-xl border border-slate-800">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
              User Interface Fixtures
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Cabin & Landing Operating Panels (COP & LOP)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Engineered with ergonomic tactile buttons, high-visibility digital indicators, dot-matrix displays, full-color TFT multimedia screens, and vandal-resistant stainless steel faceplates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatingPanels.map((panel) => (
              <div
                key={panel.code}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-brand-teal font-mono bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-100">
                    {panel.code}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    Interface
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900">{panel.type}</h4>

                <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-700">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Display Interface:</span>
                    <strong className="text-slate-900 font-bold">{panel.display}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Material & Finish:</span>
                    <span className="text-slate-800 font-medium">{panel.finish}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">Special Features:</span>
                    <span className="text-slate-600 leading-relaxed block">{panel.features}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Detail Lightbox Modal for Selected Cabin */}
      {selectedCabin && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedCabin(null)}
        >
          <div
            className="relative bg-white rounded-3xl p-6 sm:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl border border-slate-200 my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start pb-4 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold text-brand-teal uppercase tracking-wider block">
                  {selectedCabin.series} &bull; Brochure Page {selectedCabin.brochurePage}
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  {selectedCabin.model} — Complete Finishes & Material Specification
                </h3>
              </div>
              <button
                onClick={() => setSelectedCabin(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Large Image */}
            <div className="bg-slate-900 rounded-2xl overflow-hidden max-h-72 flex items-center justify-center">
              <img
                src={selectedCabin.image}
                alt={selectedCabin.model}
                className="w-full h-full object-cover max-h-72"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
              {selectedCabin.description}
            </p>

            {/* Complete Specifications Grid */}
            <div className="bg-slate-50 rounded-2xl p-5 space-y-2.5 text-xs">
              <strong className="text-slate-900 block font-bold text-sm mb-2">
                Architectural Finishes Breakdown:
              </strong>
              {Object.entries(selectedCabin.specs).map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-slate-200/60 pb-2">
                  <span className="text-slate-500 font-medium">
                    {specLabels[k] || k.replace(/([A-Z])/g, " $1")}:
                  </span>
                  <span className="font-bold text-slate-900 text-right max-w-sm">
                    {v}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={() => setSelectedCabin(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
              >
                Close
              </button>
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-colors"
              >
                Request Material Samples
              </Link>
            </div>
          </div>
        </div>
      )}

      <CTASection
        title="Custom Architectural Finishes for Your Building"
        subtitle="Our Nikol design studio pairs custom Italian marble inlays, PVD titanium coating, and acoustic LED false ceilings to match your architect's interior vision."
        variant="gradient"
      />
    </div>
  );
}

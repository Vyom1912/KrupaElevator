import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Layers,
  ArrowRight,
  Maximize2,
  CheckCircle2,
  Phone,
  Compass,
  Eye,
  X,
  Palette,
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  Check
} from "lucide-react";
import {
  basicSeries,
  standardSeries,
  semiDesignerSeries,
  premiumSeries,
  architecturalSurfaceDetailing,
  copLopFixtures
} from "../data/interiorsSeriesData";
import StickySidebarNav from "../components/common/StickySidebarNav";
import CTASection from "../components/common/CTASection";
import WhatsAppIcon from "../components/common/WhatsAppIcon";
import { assetUrl } from "../utils/assetPath";
import PageHero from "../components/common/PageHero";

export default function Interior({ onOpenBrochure }) {
  // Lightbox state for zooming images
  const [lightboxImg, setLightboxImg] = useState(null);

  // Sticky navigation items
  const sidebarSections = [
    { id: "basic-series-section", label: "Basic Series (KEC-01)" },
    { id: "standard-series-section", label: "Standard Series (KEC-02)" },
    { id: "semi-series-section", label: "Semi Designer (KEC-03)" },
    {
      id: "premium-series-section",
      label: "Premium Series",
      subItems: premiumSeries.models.map((m) => ({
        id: `model-${m.id}`,
        label: m.model
      }))
    },
    { id: "ag-series-section", label: "AG Surface Detailing" },
    { id: "cop-lop-section", label: "COP & LOP Fixtures" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-8">
      {/* ========================================================================= */}
      {/* 1. PAGE HEADER                                                            */}
      {/* ========================================================================= */}
      <PageHero
        icon={Palette}
        badge="Architectural Interior Aesthetics & Fixtures"
        title="Cabin Interior Series & Operating Panels"
        description="Discover Krupa's architectural cabin interiors categorized across Basic, Standard, Semi Designer, and Premium series, complemented by PVD laser-etched AG Series motifs and certified COP/LOP fixtures."
      />

      {/* Main Container with Sticky Navigation + Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
          {/* Sticky Navigation (Mobile Horizontal Bar + Desktop Left Sidebar) */}
          <StickySidebarNav
            sections={sidebarSections}
            title="Interior Hub"
          />

          {/* Main Content Body */}
          <div className="flex-1 w-full min-w-0 space-y-16">
            {/* ===================================================================== */}
            {/* 1. BASIC SERIES (KEC-01)                                              */}
            {/* Hierarchy: Series → Description → Image → Details → Specifications   */}
            {/* ===================================================================== */}
            <section
              id="basic-series-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                    {basicSeries.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {basicSeries.seriesName}
                  </h2>
                </div>
                <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Model: {basicSeries.models[0].model}
                </span>
              </div>

              {/* Model Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Image */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 shadow-md group h-80 sm:h-96">
                    <img
                      src={basicSeries.models[0].image}
                      alt={basicSeries.models[0].name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-black">{basicSeries.models[0].name}</h3>
                      <p className="text-xs text-slate-300">{basicSeries.models[0].tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Description & Highlights */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-slate-900">
                      {basicSeries.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {basicSeries.models[0].clientOverview}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-2">
                    <strong className="text-xs font-bold text-teal-950 uppercase tracking-wider block">
                      Client-Focused Design Highlights:
                    </strong>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {basicSeries.models[0].keyHighlights.map((h, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dedicated Isolated Specifications Table */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-900 block">
                      Series Mechanical & Material Specifications:
                    </span>
                    <div className="overflow-x-auto rounded-2xl border border-slate-200">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                          <tr>
                            <th className="p-3">Component</th>
                            <th className="p-3">Material & Finish Specification</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-600">
                          {basicSeries.models[0].specifications.map((row, idx) => (
                            <tr key={idx} className="hover:bg-slate-50">
                              <td className="p-3 font-semibold text-slate-800">{row.parameter}</td>
                              <td className="p-3">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ===================================================================== */}
            {/* 2. STANDARD SERIES (KEC-02)                                           */}
            {/* ===================================================================== */}
            <section
              id="standard-series-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
                    {standardSeries.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {standardSeries.seriesName}
                  </h2>
                </div>
                <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Model: {standardSeries.models[0].model}
                </span>
              </div>

              {/* Model Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Image */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 shadow-md group h-80 sm:h-96">
                    <img
                      src={standardSeries.models[0].image}
                      alt={standardSeries.models[0].name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-black">{standardSeries.models[0].name}</h3>
                      <p className="text-xs text-slate-300">{standardSeries.models[0].tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Description & Highlights */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-slate-900">
                      {standardSeries.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {standardSeries.models[0].clientOverview}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-2">
                    <strong className="text-xs font-bold text-orange-950 uppercase tracking-wider block">
                      Client-Focused Design Highlights:
                    </strong>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {standardSeries.models[0].keyHighlights.map((h, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dedicated Isolated Specifications Table */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-900 block">
                      Series Mechanical & Material Specifications:
                    </span>
                    <div className="overflow-x-auto rounded-2xl border border-slate-200">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                          <tr>
                            <th className="p-3">Component</th>
                            <th className="p-3">Material & Finish Specification</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-600">
                          {standardSeries.models[0].specifications.map((row, idx) => (
                            <tr key={idx} className="hover:bg-slate-50">
                              <td className="p-3 font-semibold text-slate-800">{row.parameter}</td>
                              <td className="p-3">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ===================================================================== */}
            {/* 3. SEMI DESIGNER SERIES (KEC-03)                                      */}
            {/* ===================================================================== */}
            <section
              id="semi-series-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
                    {semiDesignerSeries.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {semiDesignerSeries.seriesName}
                  </h2>
                </div>
                <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                  Model: {semiDesignerSeries.models[0].model}
                </span>
              </div>

              {/* Model Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Image */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 shadow-md group h-80 sm:h-96">
                    <img
                      src={semiDesignerSeries.models[0].image}
                      alt={semiDesignerSeries.models[0].name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-black">{semiDesignerSeries.models[0].name}</h3>
                      <p className="text-xs text-slate-300">{semiDesignerSeries.models[0].tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Right: Description & Highlights */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-slate-900">
                      {semiDesignerSeries.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {semiDesignerSeries.models[0].clientOverview}
                    </p>
                  </div>

                  {/* Key Highlights */}
                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
                    <strong className="text-xs font-bold text-amber-950 uppercase tracking-wider block">
                      Client-Focused Design Highlights:
                    </strong>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {semiDesignerSeries.models[0].keyHighlights.map((h, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dedicated Isolated Specifications Table */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-900 block">
                      Series Mechanical & Material Specifications:
                    </span>
                    <div className="overflow-x-auto rounded-2xl border border-slate-200">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                          <tr>
                            <th className="p-3">Component</th>
                            <th className="p-3">Material & Finish Specification</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-600">
                          {semiDesignerSeries.models[0].specifications.map((row, idx) => (
                            <tr key={idx} className="hover:bg-slate-50">
                              <td className="p-3 font-semibold text-slate-800">{row.parameter}</td>
                              <td className="p-3">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ===================================================================== */}
            {/* 4. PREMIUM SERIES (KEC-04 to KEC-11)                                  */}
            {/* ===================================================================== */}
            <section
              id="premium-series-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                    {premiumSeries.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {premiumSeries.seriesName}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {premiumSeries.headline}
                  </p>
                </div>
                <span className="text-xs font-bold text-brand-teal bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                  8 Bespoke Masterpieces
                </span>
              </div>

              {/* Open Field Display of All 8 Premium Cabin Models */}
              <div className="space-y-12 divide-y divide-slate-200">
                {premiumSeries.models.map((m, idx) => (
                  <div
                    key={m.id}
                    id={`model-${m.id}`}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-28 ${idx > 0 ? "pt-12" : ""
                      }`}
                  >
                    {/* Left: Image with Zoom */}
                    <div className="lg:col-span-5 space-y-3">
                      <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-950 shadow-md group h-80 sm:h-96">
                        <img
                          src={m.image}
                          alt={m.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-teal-300 border border-slate-700">
                          {m.model}
                        </div>
                        <button
                          onClick={() => setLightboxImg(m.image)}
                          className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-900 text-white transition-all cursor-pointer"
                          title="Zoom Cabin"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="text-lg font-black">{m.name}</h3>
                          <p className="text-xs text-slate-300">{m.tagline}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Description, Highlights & Isolated Specs Table */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-teal-50 text-brand-teal text-xs font-bold border border-teal-200">
                            {m.model}
                          </span>
                          <span className="text-xs text-slate-500 font-medium">Bespoke Stainless Steel Theme</span>
                        </div>
                        <h3 className="text-xl font-black text-slate-900">
                          {m.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {m.clientOverview}
                        </p>
                      </div>

                      {/* Key Highlights */}
                      <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-2">
                        <strong className="text-xs font-bold text-teal-950 uppercase tracking-wider block">
                          Architectural Highlights:
                        </strong>
                        <ul className="space-y-1.5 text-xs text-slate-700">
                          {m.keyHighlights.map((h, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <Check className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Dedicated Isolated Specifications Table for this Model */}
                      <div className="space-y-2 pt-2">
                        <span className="text-xs font-bold text-slate-900 block">
                          {m.model} Exact Material Specifications:
                        </span>
                        <div className="overflow-x-auto rounded-2xl border border-slate-200">
                          <table className="w-full text-left text-xs">
                            <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                              <tr>
                                <th className="p-3">Component</th>
                                <th className="p-3">Material & Finish Specification</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-slate-600">
                              {m.specifications.map((row, rIdx) => (
                                <tr key={rIdx} className="hover:bg-slate-50">
                                  <td className="p-3 font-semibold text-slate-800">{row.parameter}</td>
                                  <td className="p-3">{row.value}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ===================================================================== */}
            {/* 5. ARCHITECTURAL SURFACE DETAILING — AG SERIES                        */}
            {/* ===================================================================== */}
            <section
              id="ag-series-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1 max-w-2xl">
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-widest block">
                    {architecturalSurfaceDetailing.badge}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {architecturalSurfaceDetailing.name}
                  </h2>
                  <p className="text-xs text-slate-600">
                    {architecturalSurfaceDetailing.description}
                  </p>
                </div>
                <span className="text-xs font-bold text-brand-orange bg-orange-50 border border-orange-200 px-3 py-1 rounded-full shrink-0">
                  7 Decorative Motifs
                </span>
              </div>

              {/* Authentic Swatch Plates from Brochure Pages 06 & 07 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center space-y-3">
                  <span className="text-xs font-bold text-slate-700">
                    AG Series Surface Swatches (Page 06: AG 139, AG 155, AG 179)
                  </span>
                  <img
                    src={assetUrl("/assets/interiors/ag_swatches/ag_series_p6_swatches.png")}
                    alt="AG Series Swatches"
                    className="max-h-36 object-contain cursor-pointer rounded-xl"
                    onClick={() => setLightboxImg(assetUrl("/assets/interiors/ag_swatches/ag_series_p6_swatches.png"))}
                  />
                  <p className="text-[11px] text-slate-500 text-center">
                    Featured on Rose Gold & Titanium Mirror Premium Cabins
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center space-y-3">
                  <span className="text-xs font-bold text-slate-700">
                    AG Series Surface Swatches (Page 07: AG 117, AG 102, AG 112, AG 108)
                  </span>
                  <img
                    src={assetUrl("/assets/interiors/ag_swatches/ag_series_p7_swatches.png")}
                    alt="AG Series Geometric Swatches"
                    className="max-h-36 object-contain cursor-pointer rounded-xl"
                    onClick={() => setLightboxImg(assetUrl("/assets/interiors/ag_swatches/ag_series_p7_swatches.png"))}
                  />
                  <p className="text-[11px] text-slate-500 text-center">
                    Featured on Stainless Steel Strip Designer & Executive Suites
                  </p>
                </div>
              </div>

              {/* Grid of 7 AG Patterns */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {architecturalSurfaceDetailing.patterns.map((pat) => (
                  <div
                    key={pat.code}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5 hover:bg-slate-100/80 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-brand-orange bg-orange-100 px-2 py-0.5 rounded">
                        {pat.code}
                      </span>
                      <span className="text-[10px] text-slate-400">IS 14665</span>
                    </div>
                    <strong className="text-xs font-black text-slate-900 block">
                      {pat.name}
                    </strong>
                    <span className="text-[11px] text-slate-600 block">
                      {pat.finish}
                    </span>
                    <span className="text-[10px] text-brand-teal block pt-1 border-t border-slate-200/80">
                      {pat.featuredOn}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technical PVD Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {architecturalSurfaceDetailing.technicalFeatures.map((f, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200/80 space-y-1">
                    <strong className="text-xs font-bold text-teal-950 block">{f.title}</strong>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ===================================================================== */}
            {/* 6. COP & LOP OPERATING FIXTURES (PDF Page 9 Grounded)                 */}
            {/* ===================================================================== */}
            <section
              id="cop-lop-section"
              className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-10 scroll-mt-24"
            >
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1 max-w-3xl">
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                    Operating Fixtures
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    COP & LOP Operating Panels
                  </h2>
                  <p className="text-xs text-slate-600">
                    {copLopFixtures.description}
                  </p>
                </div>
                <span className="text-xs font-bold text-brand-teal bg-teal-50 border border-teal-200 px-3 py-1 rounded-full shrink-0">
                  Brochure Page 17 (PDF Page 9)
                </span>
              </div>

              {/* Clear Distinction: COP vs LOP (Client Education) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-brand-teal" />
                    <h3 className="font-black text-sm text-teal-950">
                      {copLopFixtures.systemsDistinction.cop.term}
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-teal-700 block uppercase">
                    Location: {copLopFixtures.systemsDistinction.cop.location}
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {copLopFixtures.systemsDistinction.cop.role}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-brand-orange" />
                    <h3 className="font-black text-sm text-orange-950">
                      {copLopFixtures.systemsDistinction.lop.term}
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-orange-700 block uppercase">
                    Location: {copLopFixtures.systemsDistinction.lop.location}
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {copLopFixtures.systemsDistinction.lop.role}
                  </p>
                </div>
              </div>

              {/* Visual Showcase: Left Hero COP Column | Right 6 Paired Models */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Hero Luxury Brushed Stainless Steel COP */}
                <div className="lg:col-span-4 rounded-3xl p-6 border border-slate-800 text-white flex flex-col items-center space-y-4">
                  <div className="text-center space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 block">
                      In-Cabin Masterpiece
                    </span>
                    <h4 className="text-sm text-slate-900 font-black">Full-Height Column COP</h4>
                    <p className="text-[11px] text-slate-400">
                      Brushed stainless steel with red digital floor matrix & round luminous buttons.
                    </p>
                  </div>
                  <img
                    src={assetUrl("/assets/interiors/cop_lop/hero_cabin_cop.png")}
                    alt="Hero Car Operating Panel"
                    className="max-h-96 w-auto object-contain cursor-pointer hover:scale-102 transition-transform"
                    onClick={() => setLightboxImg(assetUrl("/assets/interiors/cop_lop/hero_cabin_cop.png"))}
                  />
                  <div className="w-full text-center text-[10px] text-slate-400 pt-2 border-t border-slate-800">
                    Laser-engraved Krupa Elevators brandplate & emergency intercom.
                  </div>
                </div>

                {/* Right: 6 Verified Models Grid */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="space-y-1">
                    <h4 className="text-base font-black text-slate-900">
                      The 6 Paired COP & LOP Operating Suites
                    </h4>
                    <p className="text-xs text-slate-600">
                      Each suite provides a matching aesthetic between the in-cabin column (COP) and the landing hall station (LOP).
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {copLopFixtures.models.map((item, idx) => {
                      const imageFile = assetUrl(`/assets/interiors/cop_lop/ke_cop_lop_00${idx + 1}.png`);
                      return (
                        <div
                          key={item.code}
                          className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col justify-between p-3.5 space-y-3 hover:shadow-md transition-all"
                        >
                          <div className="space-y-2">
                            <div className=" rounded-xl p-2 flex items-center justify-center h-48">
                              <img
                                src={imageFile}
                                alt={item.code}
                                className="max-h-44 w-auto object-contain cursor-pointer hover:scale-105 transition-transform"
                                onClick={() => setLightboxImg(imageFile)}
                              />
                            </div>
                            <span className="font-mono text-[11px] font-bold text-brand-teal bg-teal-50 px-2 py-0.5 rounded border border-teal-200 inline-block">
                              {item.code}
                            </span>
                            <h5 className="font-bold text-xs text-slate-900 leading-snug">
                              {item.title}
                            </h5>
                            <p className="text-[11px] text-slate-600 leading-relaxed">
                              {item.finish}
                            </p>
                          </div>

                          <div className="pt-2 border-t border-slate-200 text-[10px] text-slate-500 space-y-0.5">
                            <div>Display: <strong className="text-slate-700">{item.display}</strong></div>
                            <div>Buttons: <strong className="text-slate-700">{item.buttons}</strong></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Calling Box Display Screens (From Bottom of Page 17) */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                    Display of Calling Box
                  </span>
                  <h4 className="text-base font-black text-slate-900">
                    High-Definition Landing & In-Car Floor Display Screens
                  </h4>
                </div>

                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800 shrink-0">
                    <img
                      src={assetUrl("/assets/interiors/cop_lop/calling_box_displays.png")}
                      alt="Calling Box Display Screens"
                      className="max-h-28 w-auto object-contain cursor-pointer"
                      onClick={() => setLightboxImg(assetUrl("/assets/interiors/cop_lop/calling_box_displays.png"))}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
                    {copLopFixtures.displayCallingBoxes.map((box) => (
                      <div key={box.id} className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                        <strong className="text-xs font-bold text-slate-900 block">{box.name}</strong>
                        <p className="text-[11px] text-slate-600 leading-relaxed">{box.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Call To Action */}
            <CTASection
              title="Need Custom Cabin Materials or Architectural Swatches?"
              subtitle="Our design team provides bespoke samples of titanium gold, rose gold hairline, and custom laser-etched ceiling diffusers for architects and developers."
              badge="Bespoke Cabin Studio"
              variant="gradient"
            />
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
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
                Full Resolution View
              </span>
              <button
                onClick={() => setLightboxImg(null)}
                className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
              <img
                src={lightboxImg}
                alt="Enlarged View"
                className="max-h-[72vh] max-w-full object-contain"
              />
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
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

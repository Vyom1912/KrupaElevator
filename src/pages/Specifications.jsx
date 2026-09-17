import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal, Download, FileText, Search, Info, ArrowRight } from "lucide-react";
import { specificationsData } from "../data/specificationsData";
import { companyData } from "../data/companyData";

export default function Specifications({ onOpenBrochurePage }) {
  const [activeTab, setActiveTab] = useState("manual-doors");
  const [filterQuery, setFilterQuery] = useState("");

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
          Engineering Drawings & Dimensional Data
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Technical Specifications Matrix
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Comprehensive civil, structural, and mechanical dimensions transcribed directly from pages 18 to 22 of the KRUPA ELEVATORS technical brochure. All measurements are in millimeters (mm) unless noted otherwise.
        </p>
      </div>

      {/* Tabs Bar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-6">
        <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
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

        {/* Active Table Details & Search */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">{currentSpec.title}</h2>
            <p className="text-xs text-slate-500 mt-0.5">{currentSpec.note}</p>
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
            <button
              onClick={() => onOpenBrochurePage(currentSpec.brochurePage)}
              className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold shrink-0 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-brand-teal" />
              <span>Page {currentSpec.brochurePage}</span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-inner">
          <table className="w-full text-left text-xs border-collapse min-w-[700px]">
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
                    No rows match your filter.
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
            <strong>Brochure Engineering Clause:</strong> All dimensions are in mm. This is general data and may be updated or changed without notice based on site conditions or architectural refinements. Hoistway wall thickness, pit waterproofing, and machine room ventilation must be verified prior to civil shaft casting.
          </p>
        </div>
      </div>

      {/* Consultation Action */}
      <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-1">
          <h3 className="text-xl font-black">Need Custom Hoistway or Pit Calculations?</h3>
          <p className="text-xs text-slate-400 max-w-xl">
            Our engineering team prepares bespoke GA (General Arrangement) drawings and CAD layouts tailored to your building structural grid.
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
            <span>Download PDF Brochure</span>
          </a>
          <Link
            to="/contact"
            className="px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold transition-colors flex items-center space-x-2"
          >
            <span>Request Site Survey</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

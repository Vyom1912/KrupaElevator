import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  PackageCheck,
  Activity,
  Phone,
  CheckCircle,
  Clock,
  ShieldCheck,
  Wrench,
  FileText,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { servicesData } from "../data/servicesData";
import { companyData } from "../data/companyData";

export default function Services({ onOpenBrochurePage }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [serviceType, setServiceType] = useState("AMC Contract");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
          Lifecycle Support & Operations
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Support Beyond Installation
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {servicesData.hero.summary}
        </p>
      </div>

      {/* THREE CORE BROCHURE PILLARS (PAGE 23) */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange block">
              Brochure Core Framework
            </span>
            <h2 className="text-2xl font-black text-slate-900">Sharing Wonder Together</h2>
          </div>
          <button
            onClick={() => onOpenBrochurePage(12)}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
          >
            <FileText className="w-4 h-4 text-brand-teal" />
            <span>Brochure p.12</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.pillars.map((pil) => (
            <div
              key={pil.id}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-lg hover:border-brand-teal transition-all"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-teal-light text-brand-teal flex items-center justify-center font-black text-lg">
                  {pil.number}
                </div>
                <h3 className="text-xl font-black text-slate-900">{pil.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pil.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-1.5">
                {pil.benefits.map((b, bi) => (
                  <div key={bi} className="flex items-start space-x-2 text-xs text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AMC PACKAGES */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
            Annual Maintenance Contracts
          </span>
          <h2 className="text-3xl font-black text-slate-900">Customized Maintenance Plans</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Ensure maximum uptime, ride safety, and statutory compliance with tailored AMC packages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.amcPackages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all ${
                pkg.popular
                  ? "bg-slate-900 text-white shadow-2xl border-2 border-brand-orange relative"
                  : "bg-white text-slate-900 border border-slate-200 shadow-sm"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-orange text-white text-[10px] font-black uppercase tracking-wider shadow">
                  Most Recommended
                </span>
              )}

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      pkg.popular
                        ? "bg-brand-orange/20 text-brand-orange"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {pkg.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-black mt-2">{pkg.name}</h3>
                <p
                  className={`text-xs mt-1 leading-relaxed ${
                    pkg.popular ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {pkg.idealFor}
                </p>

                <div
                  className={`mt-6 pt-6 border-t space-y-2.5 text-xs ${
                    pkg.popular ? "border-slate-800 text-slate-300" : "border-slate-100 text-slate-700"
                  }`}
                >
                  {pkg.features.map((f, fi) => (
                    <div key={fi} className="flex items-start space-x-2">
                      <CheckCircle
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          pkg.popular ? "text-brand-teal" : "text-brand-orange"
                        }`}
                      />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  to="/contact"
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-colors ${
                    pkg.popular
                      ? "bg-brand-orange hover:bg-brand-orange-hover text-white shadow-md"
                      : "bg-slate-900 hover:bg-brand-teal text-white"
                  }`}
                >
                  <span>Select {pkg.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODERNIZATION SERVICES */}
      <div className="bg-slate-100 rounded-3xl p-6 sm:p-10 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
            Elevator Upgrades
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Modernization & Retrofitting Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
            Bring aging elevator systems up to current safety, energy, and aesthetic standards without replacing the entire shaft infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {servicesData.modernization.map((mod, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center space-x-2">
                <Wrench className="w-4 h-4 text-brand-orange" />
                <h4 className="text-base font-bold text-slate-900">{mod.title}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICE INQUIRY FORM */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
            Service Desk
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Book a Maintenance Visit or AMC Survey
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our Ahmedabad technical service department schedules prompt site inspections, lubrication routines, and modernization surveys across Gujarat and North India.
          </p>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
            <div className="flex items-center space-x-2 font-bold text-slate-900">
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>24/7 Breakdown Hotline: {companyData.contacts.phone}</span>
            </div>
            <p className="text-slate-500">
              Emergency technician dispatch guaranteed within 60 minutes for high-priority entrapment situations.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900 text-center space-y-2">
              <CheckCircle className="w-12 h-12 text-brand-teal mx-auto" />
              <h3 className="text-lg font-bold">Service Request Dispatched!</h3>
              <p className="text-xs text-teal-800">
                Thank you! Our technical coordinator has received your request and will call you within 30 minutes.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-3 px-4 py-2 bg-brand-teal text-white text-xs font-bold rounded-xl"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Patel"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-teal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Service Required</label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-teal"
                  >
                    <option value="AMC Contract">New AMC Contract</option>
                    <option value="Breakdown Repair">Breakdown / Emergency Repair</option>
                    <option value="Modernization">Modernization & Upgrades</option>
                    <option value="Spare Parts">Spare Parts Requirement</option>
                    <option value="Safety Inspection">Statutory Safety Inspection</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Building City / Area</label>
                  <input
                    type="text"
                    placeholder="e.g. Nikol, Ahmedabad"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-teal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Details or Elevator Issues</label>
                <textarea
                  rows="3"
                  placeholder="Number of elevators, floors, brand or current issue..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-teal"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold shadow-md transition-colors"
              >
                Submit Service Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

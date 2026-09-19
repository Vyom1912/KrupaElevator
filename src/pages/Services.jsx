import React from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  ShieldCheck,
  Layers,
  CheckCircle2,
  Users,
  Radio
} from "lucide-react";
import { servicesMaster } from "../data/servicesMaster";
import { companyData } from "../data/companyData";
import ScrollReveal from "../components/ScrollReveal";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";

export default function Services() {
  const pillarIcons = {
    "specialized-team": Users,
    supervisors: ShieldCheck,
    "spare-parts": Layers,
    "preventive-maintenance": Wrench,
    "elevator-monitoring": Radio
  };

  return (<>
    <div className="min-h-screen bg-slate-50 pt-8 pb-8 overflow-x-hidden">
      {/* Page Hero */}

      <PageHero
        icon={Wrench}
        badge="Certified Engineering • Lifecycle Support"
        title="Reliable Support Throughout the Life of Your Elevator"
        description="Our service team provides professional installation support, preventive maintenance, troubleshooting, and ongoing elevator care. We combine trained personnel, supervisory support, genuine spare parts, and monitoring solutions to maintain reliable elevator performance."

      />


      <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 5 Service Pillars */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
              Five Core Support Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Professional Service Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
              Engineered to ensure zero unexpected breakdowns, absolute passenger safety, and prolonged mechanical longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesMaster.pillars.map((pillar) => {
              const Icon = pillarIcons[pillar.id] || Wrench;
              return (
                <ScrollReveal
                  key={pillar.id}
                  direction="up"
                  distance={20}
                  className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-8 hover:border-brand-teal/60 hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black font-mono px-2.5 py-1 rounded-lg bg-teal-50 text-brand-teal border border-teal-200">
                        PILLAR {pillar.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
                      <span className="text-[11px] font-bold text-brand-orange block mt-0.5">
                        {pillar.tagline}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                      {pillar.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span className="leading-snug">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* AMC Packages Grid */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block mb-1">
              Maintenance Contracts
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Annual Maintenance Contract (AMC) Packages
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
              Transparent, SLA-backed maintenance plans tailored to residential societies, high-traffic commercial complexes, and 24/7 hospitals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicesMaster.amcPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between border transition-all ${pkg.popular
                  ? "bg-slate-900 text-white border-brand-teal shadow-xl scale-[1.02]"
                  : "bg-white text-slate-900 border-slate-200 shadow-xs"
                  }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${pkg.popular
                        ? "bg-brand-teal text-white"
                        : "bg-slate-100 text-slate-600"
                        }`}
                    >
                      {pkg.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {pkg.priceIndicator}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <p
                    className={`text-xs leading-relaxed ${pkg.popular ? "text-slate-300" : "text-slate-600"
                      }`}
                  >
                    Ideal for: <strong>{pkg.idealFor}</strong>
                  </p>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs">
                    {pkg.features.map((f, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? "text-teal-300" : "text-brand-teal"
                            }`}
                        />
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-xl text-xs font-bold text-center block transition-colors ${pkg.popular
                      ? "bg-brand-orange hover:bg-brand-orange-hover text-white shadow-md"
                      : "bg-slate-900 hover:bg-brand-teal text-white"
                      }`}
                  >
                    Get Package Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modernization & Retrofitting Services */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 space-y-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">
              Elevator Modernization
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Upgrade Aging Elevators with Green Tech
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Transform existing legacy elevators with modern V3F drives, automatic doors, microprocessor controllers, and luxury cabin aesthetics without rebuilding the entire concrete hoistway.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {servicesMaster.modernizationServices.map((mod, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-2"
              >
                <h4 className="text-sm font-bold text-white">{mod.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
    <CTASection
      title="Schedule an On-Site Maintenance & Safety Audit"
      subtitle="Our technical supervisors inspect your elevator hoist ropes, brake holding torque, leveling switches, and controller logs to ensure 100% statutory compliance."
      variant="gradient"
      className="rounded-none"
    />
  </>
  );
}

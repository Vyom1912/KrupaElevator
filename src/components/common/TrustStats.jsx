import React from "react";
import { Zap, ShieldCheck, Clock, Factory, Award, Building2 } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { companyData } from "../../data/companyData";

export default function TrustStats({ className = "" }) {
  const trustHighlights = [
    {
      icon: Zap,
      stat: "30%",
      label: "Energy Reduction",
      sub: "PMS Gearless permanent magnet synchronous motor efficiency",
      color: "text-brand-teal",
      bg: "bg-teal-50 border-teal-100"
    },
    {
      icon: Factory,
      stat: "Bakrol Works",
      label: "In-House Manufacturing",
      sub: "Gopal Charan Industrial Hub, Ahmedabad engineering works",
      color: "text-brand-orange",
      bg: "bg-orange-50 border-orange-100"
    },
    {
      icon: Clock,
      stat: "24/7",
      label: "Breakdown Support",
      sub: "Rapid technical emergency dispatch across Gujarat",
      color: "text-brand-teal",
      bg: "bg-teal-50 border-teal-100"
    },
    {
      icon: ShieldCheck,
      stat: "100%",
      label: "Safety Redundancy",
      sub: "Inbuilt CDL locks, ARD auto-rescue, and 128-beam light curtains",
      color: "text-brand-orange",
      bg: "bg-orange-50 border-orange-100"
    }
  ];

  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <ScrollReveal direction="up" distance={20} duration={500}>
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {trustHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-start space-x-4 ${idx !== 0 ? "pt-5 sm:pt-0 sm:pl-6" : ""}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${item.bg}`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 block tracking-tight">
                      {item.stat}
                    </span>
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      {item.label}
                    </span>
                    <p className="text-[11px] text-slate-500 leading-snug font-medium">
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

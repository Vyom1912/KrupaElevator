import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Download, MapPin, ShieldCheck } from "lucide-react";
import { companyData } from "../../data/companyData";
import ScrollReveal from "../ScrollReveal";

export default function CTASection({
  title = "Ready to Plan Your Custom Elevator Installation?",
  subtitle = "Our engineering team provides complimentary site surveys, custom CAD layouts, and verified civil shaft calculations across Gujarat and Western India.",
  badge = "Ahmedabad Factory & Nikol Engineering Hub",
  variant = "gradient", // "gradient" | "dark" | "teal"
  className = ""
}) {
  const variantStyles = {
    gradient: "bg-gradient-to-r from-brand-teal via-teal-800 to-slate-950 text-white border border-teal-700/50",
    dark: "bg-slate-900 text-white border border-slate-800",
    teal: "bg-brand-teal text-white border border-teal-600",
  };

  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      <ScrollReveal direction="up" distance={20} duration={500}>
        <div
          className={`rounded-3xl p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-2xl relative overflow-hidden ${variantStyles[variant] || variantStyles.gradient}`}
        >
          {/* Ambient light blur */}
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="space-y-3 text-center lg:text-left max-w-2xl relative z-10">
            {badge && (
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-teal-100 backdrop-blur-xs">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>{badge}</span>
              </span>
            )}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-teal-100/90 leading-relaxed font-normal">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-teal-200">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                <span>Zero Cost Site Consultation</span>
              </span>
              <span>&bull;</span>
              <span>24/7 Breakdown Assistance</span>
              <span>&bull;</span>
              <span>Bakrol Works Delivery</span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto relative z-10 shrink-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-xl transition-all transform active:scale-95 flex items-center justify-center space-x-2"
            >
              <span>Request Free Site Survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${companyData.contacts.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-slate-900 text-xs sm:text-sm font-bold hover:bg-slate-100 transition-all flex items-center justify-center space-x-2 shadow-md"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call +91 82008 59171</span>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

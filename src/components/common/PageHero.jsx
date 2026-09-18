import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home as HomeIcon } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

export default function PageHero({
  badge,
  title,
  description,
  breadcrumbs = [],
  actions,
  className = ""
}) {
  return (
    <section className={`relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-12 sm:py-16 lg:py-20 border-b border-slate-800 overflow-hidden ${className}`}>
      {/* Subtle ambient glow circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4 sm:space-y-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-white transition-colors flex items-center space-x-1">
            <HomeIcon className="w-3.5 h-3.5 text-brand-teal" />
            <span>Home</span>
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-teal-300 font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Hero Title & Info */}
        <ScrollReveal direction="up" distance={20} duration={500} className="max-w-3xl space-y-3">
          {badge && (
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal/20 border border-brand-teal/40 text-brand-teal shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span>{badge}</span>
            </span>
          )}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
              {description}
            </p>
          )}
          {actions && <div className="flex flex-wrap items-center gap-3 pt-3">{actions}</div>}
        </ScrollReveal>
      </div>
    </section>
  );
}

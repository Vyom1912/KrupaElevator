import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, ShieldCheck, Layers, Sparkles } from "lucide-react";
import { projectsData } from "../../data/projectsData";
import ScrollReveal from "../ScrollReveal";
import { assetUrl } from "../../utils/assetPath";

export default function ProjectsShowcase({
  projects = projectsData,
  limit,
  showViewAll = false,
  className = ""
}) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className={`space-y-8 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project, idx) => (
          <ScrollReveal
            key={project.id}
            direction="up"
            delay={idx * 60}
            distance={20}
            duration={500}
            className="h-full"
          >
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
              <div>
                {/* Visual Cover */}
                <div className="h-52 relative overflow-hidden bg-slate-900 group/img">
                  <img
                    src={assetUrl(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-teal-300 border border-slate-700 shadow-md">
                    {project.category}
                  </div>

                  {/* Units Badge */}
                  <div className="absolute top-3.5 right-3.5 bg-white/95 text-slate-900 px-2.5 py-1 rounded-full text-[10px] font-bold shadow-md">
                    {project.units}
                  </div>

                  {/* Location & Title */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
                    <div className="flex items-center space-x-1 text-[11px] text-slate-300 mb-0.5">
                      <MapPin className="w-3 h-3 text-brand-orange shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black tracking-tight drop-shadow-xs">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <div className="text-xs font-bold text-brand-teal">
                    {project.elevatorType}
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Quick Parameters */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-[11px]">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block text-[10px]">Capacity</span>
                      <strong className="text-slate-900 font-bold truncate block">{project.capacity}</strong>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-slate-400 block text-[10px]">Speed</span>
                      <strong className="text-brand-orange font-bold truncate block">{project.speed}</strong>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1 pt-1">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center space-x-1.5 text-[11px] text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 pt-0">
                <Link
                  to="/contact"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>Request Similar Installation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {showViewAll && (
        <div className="text-center pt-2">
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-brand-teal text-white text-xs font-bold transition-all shadow-md"
          >
            <span>Explore All Verified Installations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}

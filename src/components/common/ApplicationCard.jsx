import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home as HomeIcon, Sparkles, Cross, Warehouse, Car } from "lucide-react";
import { assetUrl } from "../../utils/assetPath";

const iconMap = {
  building: Building2,
  "private-villa": HomeIcon,
  commercial: Sparkles,
  hospital: Cross,
  industrial: Warehouse,
  "car-park": Car,
};

export default function ApplicationCard({
  application,
  onSelect,
  className = ""
}) {
  if (!application) return null;
  const AppIcon = iconMap[application.id] || Building2;

  return (
    <div
      className={`bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${className}`}
    >
      <div>
        {/* Visual Cover */}
        <div className="h-48 sm:h-52 relative overflow-hidden bg-slate-950 group/img">
          <img
            src={assetUrl(application.image)}
            alt={application.title}
            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

          {/* Floating Top Pill Badge */}
          <div className="absolute top-3.5 left-3.5 flex items-center space-x-1.5 bg-slate-900/90 border border-teal-500/40 text-brand-teal px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-md">
            <AppIcon className="w-3 h-3 text-brand-orange" />
            <span className="text-white">{application.title.split(" ")[0]}</span>
          </div>

          {/* Bottom Overlay Title */}
          <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
            <span className="text-[11px] font-semibold text-teal-300 block mb-0.5">
              {application.subtitle}
            </span>
            <h3 className="text-lg sm:text-xl font-black tracking-tight">{application.title}</h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3">
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {application.description}
          </p>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-400 block text-[10px]">Capacity</span>
              <span className="font-bold text-slate-900">{application.capacity}</span>
            </div>
            <div className="text-right">
              <span className="text-slate-400 block text-[10px]">Speed</span>
              <span className="font-bold text-brand-orange">{application.speed}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="p-5 pt-0">
        <Link
          to={`/products?category=${encodeURIComponent(application.title.split(" ")[0])}`}
          className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 text-xs font-bold transition-all flex items-center justify-center space-x-1.5"
        >
          <span>Explore Suitable Models</span>
          <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
        </Link>
      </div>
    </div>
  );
}

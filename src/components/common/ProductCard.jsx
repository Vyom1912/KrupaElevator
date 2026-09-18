import React from "react";
import { Link } from "react-router-dom";
import { Maximize2, SlidersHorizontal, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { assetUrl } from "../../utils/assetPath";

export default function ProductCard({
  product,
  onOpenModal,
  className = ""
}) {
  if (!product) return null;

  return (
    <div
      className={`bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group ${className}`}
    >
      <div>
        {/* Card Image */}
        <div className="h-56 sm:h-60 relative overflow-hidden bg-slate-900 group/img">
          <img
            src={assetUrl(product.image)}
            alt={product.name}
            className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-3.5 left-3.5 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white border border-slate-700/80 shadow-md">
            {product.category}
          </div>

          {/* Quick Specs Trigger */}
          {onOpenModal && (
            <button
              onClick={() => onOpenModal(product)}
              className="absolute top-3.5 right-3.5 bg-white/95 hover:bg-white text-slate-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg backdrop-blur-xs flex items-center space-x-1.5 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="View full specs and technical drawing"
            >
              <Maximize2 className="w-3 h-3 text-brand-teal" />
              <span>Specs</span>
            </button>
          )}

          {/* Bottom Title on Image */}
          <div className="absolute bottom-3 left-3.5 right-3.5 text-white">
            <span className="text-[11px] font-semibold text-teal-300 block leading-none mb-1">
              {product.tagline}
            </span>
            <h3 className="text-lg sm:text-xl font-black tracking-tight drop-shadow-xs">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {product.summary || product.description}
          </p>

          {/* Key Specs Pills Grid */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
            {product.keySpecs?.["Capacity"] && (
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block text-[10px] font-medium">Capacity</span>
                <span className="font-bold text-slate-900 text-xs truncate block">
                  {product.keySpecs["Capacity"]}
                </span>
              </div>
            )}
            {product.keySpecs?.["Available Rated Capacity"] && (
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block text-[10px] font-medium">Capacity</span>
                <span className="font-bold text-slate-900 text-xs truncate block">
                  {product.keySpecs["Available Rated Capacity"]}
                </span>
              </div>
            )}
            {product.keySpecs?.["Rated Speed"] && (
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block text-[10px] font-medium">Speed</span>
                <span className="font-bold text-brand-orange text-xs truncate block">
                  {product.keySpecs["Rated Speed"]}
                </span>
              </div>
            )}
            {product.keySpecs?.["Available Rated Speed"] && (
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-400 block text-[10px] font-medium">Speed</span>
                <span className="font-bold text-brand-orange text-xs truncate block">
                  {product.keySpecs["Available Rated Speed"]}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-5 sm:p-6 pt-0 flex flex-wrap items-center gap-2 border-t border-slate-100/80 mt-2">
        {onOpenModal ? (
          <button
            onClick={() => onOpenModal(product)}
            className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-brand-teal text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5 shadow-sm active:scale-95 cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5 text-brand-orange" />
            <span>Full Specs</span>
          </button>
        ) : (
          <Link
            to="/elevators"
            className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-brand-teal text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5 shadow-sm active:scale-95"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-brand-teal" />
            <span>Layout & Specs</span>
          </Link>
        )}

        <Link
          to="/contact"
          className="py-2.5 px-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold shadow-sm transition-colors flex items-center justify-center space-x-1"
        >
          <span>Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

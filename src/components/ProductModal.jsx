import React from "react";
import { Link } from "react-router-dom";
import { X, CheckCircle, ArrowRight, SlidersHorizontal, Phone, Sparkles } from "lucide-react";
import { companyData } from "../data/companyData";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden border border-slate-200 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
          <div>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal-light text-brand-teal mb-1.5">
              <Sparkles className="w-3 h-3" />
              <span>{product.category}</span>
            </span>
            <h2 className="text-2xl font-black text-slate-900">{product.name}</h2>
            <p className="text-xs text-brand-orange font-semibold">{product.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Visual & Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 aspect-video md:aspect-square relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] text-white font-bold flex items-center space-x-1 border border-slate-700">
                <Sparkles className="w-3 h-3 text-brand-teal" />
                <span>Verified Engineering Solution</span>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900">Engineering Overview</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{product.description}</p>
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Recommended Environments
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.idealFor?.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Specs Table */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3">Technical Specifications Matrix</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {Object.entries(product.keySpecs).map(([key, value], idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors"
                >
                  <span className="font-medium text-slate-500">{key}</span>
                  <span className="font-bold text-slate-900 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3">Salient Features & Safety Systems</h3>
            <ul className="space-y-2">
              {product.features?.map((f, i) => (
                <li key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                  <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Door Systems */}
          {product.doorOptions && (
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-3">Compatible Door Configurations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.doorOptions.map((door, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 bg-white"
                  >
                    • {door}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <Link
              to="/specifications"
              onClick={onClose}
              className="inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-white hover:border-brand-teal transition-colors w-full sm:w-auto"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-brand-teal" />
              <span>Civil & Shaft Dimensions</span>
            </Link>
            <a
              href={`tel:${companyData.contacts.phoneRaw}`}
              className="inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>Call Team</span>
            </a>
          </div>

          <Link
            to="/contact"
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-brand-orange text-white text-xs font-bold shadow-md hover:bg-brand-orange-hover transition-colors"
          >
            <span>Request Quote for {product.name}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

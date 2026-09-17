import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Building2, Home, Cross, Warehouse, Car, Sparkles, ArrowRight, Check, Zap, SlidersHorizontal } from "lucide-react";
import { elevatorApplications } from "../data/productsData";

export default function ElevatorFinder({ onSelectProduct }) {
  const [buildingType, setBuildingType] = useState("building");
  const [floorCount, setFloorCount] = useState("mid");
  const [priority, setPriority] = useState("energy");

  const buildingOptions = [
    { id: "building", label: "Building (Residential & Comm.)", icon: Building2 },
    { id: "private-villa", label: "Private Villa / Home Lift", icon: Home },
    { id: "commercial", label: "Commercial / Atrium Mall", icon: Sparkles },
    { id: "hospital", label: "Hospital / Healthcare", icon: Cross },
    { id: "industrial", label: "Industrial / Freight Cargo", icon: Warehouse },
    { id: "car-park", label: "Automotive / Car Park", icon: Car },
  ];

  const matchedApp = elevatorApplications.find((app) => app.id === buildingType) || elevatorApplications[0];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-700/80">
      <div className="max-w-3xl mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block mb-1">
          Interactive Application Explorer
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-white">
          Find the Ideal Elevator for Your Project
        </h3>
        <p className="text-slate-300 text-sm mt-1">
          Select your building type and project priorities. Discover verified civil configurations, capacity ranges, and door systems.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Questionnaire */}
        <div className="lg:col-span-7 space-y-6">
          {/* Building Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              1. Select Elevator Application Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {buildingOptions.map((opt) => {
                const Icon = opt.icon;
                const isSelected = buildingType === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setBuildingType(opt.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? "border-brand-teal bg-brand-teal/20 shadow-lg text-white ring-1 ring-brand-teal/50 scale-[1.02]"
                        : "border-slate-700 bg-slate-800/60 text-slate-300 hover:border-slate-600 hover:bg-slate-800"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 mb-2 ${
                        isSelected ? "text-brand-orange" : "text-slate-400"
                      }`}
                    />
                    <span className="text-xs font-bold leading-snug">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Floor Range & Priority */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                2. Number of Floors
              </label>
              <select
                value={floorCount}
                onChange={(e) => setFloorCount(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-teal"
              >
                <option value="low">1 to 4 Floors (Low-Rise / Villa)</option>
                <option value="mid">5 to 12 Floors (Mid-Rise Tower)</option>
                <option value="high">13 to 25+ Floors (High-Rise Complex)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                3. Primary Priority
              </label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-teal"
              >
                <option value="energy">High Energy Efficiency (PMS Gearless / V3F)</option>
                <option value="space">Space Optimization (MRL / Low Pit Clearance)</option>
                <option value="luxury">Panoramic Architecture & Scenic Glass</option>
                <option value="capacity">Heavy Duty Freight / Bed Transit</option>
              </select>
            </div>
          </div>
        </div>

        {/* Output Result Card */}
        <div className="lg:col-span-5">
          <div className="bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
            {/* Image Preview */}
            <div className="h-44 relative overflow-hidden group">
              <img
                src={matchedApp.image}
                alt={matchedApp.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-brand-teal text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md">
                Verified Match
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-xs font-bold text-teal-300 block">{matchedApp.subtitle}</span>
                <h4 className="text-lg font-black truncate">{matchedApp.title}</h4>
              </div>
            </div>

            {/* Details */}
            <div className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <div>
                  <span className="text-slate-400 block font-medium">Rated Capacity:</span>
                  <span className="font-extrabold text-slate-800">{matchedApp.capacity}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Rated Speed:</span>
                  <span className="font-extrabold text-brand-orange">{matchedApp.speed}</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">{matchedApp.description}</p>

              {/* Highlights */}
              <div className="space-y-1.5 border-t border-slate-100 pt-3">
                {matchedApp.highlights.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 pt-2">
                <button
                  onClick={() => onSelectProduct && onSelectProduct(matchedApp.productId)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-brand-teal transition-colors text-center"
                >
                  View Details & Dimensions
                </button>
                <Link
                  to="/contact"
                  className="py-2.5 px-3 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-brand-orange-hover transition-colors flex items-center justify-center shadow-sm"
                  title="Inquire for this model"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Sparkles, Layers, Sliders, ArrowRight, Eye } from "lucide-react";

export default function CabinConfigurator() {
  const [wallFinish, setWallFinish] = useState("rose-gold");
  const [ceilingStyle, setCeilingStyle] = useState("perimeter-led");
  const [flooringType, setFlooringType] = useState("marble");
  const [mirrorOption, setMirrorOption] = useState("full-mirror");

  const wallFinishes = [
    {
      id: "ss-hairline",
      name: "S.S. Hairline Finish",
      color: "#cbd5e1",
      desc: "Classic brushed silver stainless steel",
      previewImage: "/assets/interiors/kec-01.jpg",
      modelMatch: "KEC-01"
    },
    {
      id: "rose-gold",
      name: "Rose Gold Titanium",
      color: "#e0a899",
      desc: "Warm luxury brushed rose-gold PVD coating",
      previewImage: "/assets/interiors/kec-04.jpg",
      modelMatch: "KEC-04"
    },
    {
      id: "titanium-gold",
      name: "Titanium Gold Mirror",
      color: "#eab308",
      desc: "Reflective mirror gold for grand architecture",
      previewImage: "/assets/interiors/kec-03.jpg",
      modelMatch: "KEC-03"
    },
    {
      id: "bronze",
      name: "Imitation Bronze SS",
      color: "#926848",
      desc: "Vintage bronze tones with warm ambient charm",
      previewImage: "/assets/interiors/kec-05.jpg",
      modelMatch: "KEC-05"
    },
    {
      id: "ms-powder",
      name: "Powder Coated Steel",
      color: "#64748b",
      desc: "Impact-resistant architectural powder coat",
      previewImage: "/assets/interiors/kec-07.jpg",
      modelMatch: "KEC-07"
    },
  ];

  const ceilingStyles = [
    { id: "led-recessed", name: "Recessed Round LED", desc: "Clean S.S. with circular downlights" },
    { id: "perimeter-led", name: "Four-Side LED Lamp Belt", desc: "Continuous luminous perimeter band" },
    { id: "gold-ceiling", name: "Gold Finish with LED", desc: "Titanium gold ceiling with warm optics" },
    { id: "acrylic-diffuser", name: "Acoustic Acrylic Top", desc: "Soft diffused daylight illumination" },
    { id: "blower-fan", name: "LED with Blower Fan", desc: "Integrated high-flow ventilation blower" },
  ];

  const flooringTypes = [
    { id: "marble", name: "Polished Italian Marble", desc: "Elegant veined composite stone" },
    { id: "pvc-industrial", name: "Durable Industrial PVC", desc: "High-traffic anti-scratch PVC" },
    { id: "checkered-steel", name: "S.S. Checkered Plate", desc: "Heavy-duty anti-slip embossed steel" },
  ];

  const mirrorOptions = [
    { id: "full-mirror", name: "Full Rear Wall Mirror", desc: "Expands visual depth and cabin openness" },
    { id: "half-mirror", name: "Half Rear Mirror + Handrail", desc: "Mirror top section with protective rail below" },
    { id: "designer-mirror", name: "Etched Designer Mirror", desc: "Custom laser pattern etched glass wall" },
  ];

  const currentWall = wallFinishes.find((w) => w.id === wallFinish);
  const currentCeiling = ceilingStyles.find((c) => c.id === ceilingStyle);
  const currentFloor = flooringTypes.find((f) => f.id === flooringType);
  const currentMirror = mirrorOptions.find((m) => m.id === mirrorOption);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="p-6 sm:p-8 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal/20 text-brand-teal mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Freedom of Design</span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-black">Interactive Cabin Configurator</h3>
          <p className="text-sm text-slate-400 mt-1">
            Mix and match verified finishes, ceilings, mirrors and floorings to visualize your bespoke elevator cabin.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-slate-800/80 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300">
          <Layers className="w-4 h-4 text-brand-orange" />
          <span>Real Renders for KEC Series</span>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Wall Finish Selection */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              1. Car Wall Material & Finish
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {wallFinishes.map((w) => (
                <button
                  key={w.id}
                  onClick={() => setWallFinish(w.id)}
                  className={`p-3 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                    wallFinish === w.id
                      ? "border-brand-teal bg-brand-teal-light/40 shadow-sm ring-1 ring-brand-teal/40"
                      : "border-slate-200 hover:border-slate-300 bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span
                      className="w-5 h-5 rounded-full border border-slate-300 shadow-inner shrink-0"
                      style={{ backgroundColor: w.color }}
                    />
                    <span className="text-xs font-bold text-slate-900 leading-tight">
                      {w.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 leading-snug">{w.desc}</span>
                  {wallFinish === w.id && (
                    <span className="absolute top-2 right-2 text-brand-teal">
                      <Check className="w-4 h-4" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Ceiling Style */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              2. Architectural Ceiling & Illumination
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ceilingStyles.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCeilingStyle(c.id)}
                  className={`p-3 rounded-2xl border text-left transition-all relative ${
                    ceilingStyle === c.id
                      ? "border-brand-teal bg-brand-teal-light/40 shadow-sm ring-1 ring-brand-teal/40"
                      : "border-slate-200 hover:border-slate-300 bg-slate-50/50"
                  }`}
                >
                  <div className="font-bold text-xs text-slate-900">{c.name}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{c.desc}</div>
                  {ceilingStyle === c.id && (
                    <span className="absolute top-3 right-3 text-brand-teal">
                      <Check className="w-4 h-4" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Flooring Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                3. Cabin Flooring
              </label>
              <div className="space-y-2">
                {flooringTypes.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setFlooringType(f.id)}
                    className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between text-xs ${
                      flooringType === f.id
                        ? "border-brand-teal bg-brand-teal-light/40 font-bold text-brand-teal"
                        : "border-slate-200 text-slate-700 bg-slate-50/50"
                    }`}
                  >
                    <span>{f.name}</span>
                    {flooringType === f.id && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                4. Rear Mirror Configuration
              </label>
              <div className="space-y-2">
                {mirrorOptions.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMirrorOption(m.id)}
                    className={`w-full p-2.5 rounded-xl border text-left transition-all flex items-center justify-between text-xs ${
                      mirrorOption === m.id
                        ? "border-brand-teal bg-brand-teal-light/40 font-bold text-brand-teal"
                        : "border-slate-200 text-slate-700 bg-slate-50/50"
                    }`}
                  >
                    <span>{m.name}</span>
                    {mirrorOption === m.id && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Live Visual Preview Box */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="rounded-3xl border border-slate-200 bg-slate-900 text-white overflow-hidden flex-1 flex flex-col justify-between shadow-xl">
            {/* Visual Cabin Render Preview */}
            <div className="h-56 relative overflow-hidden bg-slate-950">
              <img
                src={currentWall?.previewImage}
                alt={currentWall?.name}
                className="w-full h-full object-cover transition-all duration-700 animate-in fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute top-3 left-3 bg-brand-teal text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md">
                Base Model: {currentWall?.modelMatch}
              </div>
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wide block">
                  Live Visualizer
                </span>
                <h4 className="text-lg font-black text-white">{currentWall?.name}</h4>
              </div>
            </div>

            {/* Spec Details */}
            <div className="p-6 space-y-4">
              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex justify-between items-center">
                  <span className="text-slate-400">Ceiling:</span>
                  <strong className="text-white text-right">{currentCeiling?.name}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex justify-between items-center">
                  <span className="text-slate-400">Flooring:</span>
                  <strong className="text-white text-right">{currentFloor?.name}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex justify-between items-center">
                  <span className="text-slate-400">Rear Mirror:</span>
                  <strong className="text-white text-right">{currentMirror?.name}</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-brand-teal/15 border border-brand-teal/30 text-teal-200 text-[11px]">
                  ✓ Standard: S.S. wall-mounted COP, luminous square buttons, digital floor position indicator.
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold shadow-md transition-colors"
                >
                  <span>Inquire for {currentWall?.modelMatch} Configuration</span>
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

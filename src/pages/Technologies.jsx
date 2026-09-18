import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Cpu,
  ShieldCheck,
  CheckCircle,
  Settings,
  BatteryCharging,
  Maximize2,
  CheckCircle2,
  SlidersHorizontal,
  Sparkles,
  ArrowRight,
  Layers,
  Activity,
  Radio,
  Scale,
  Gauge,
  VolumeX,
  Clock,
  ArrowUpRight,
  AlertTriangle,
  Lightbulb,
  Check
} from "lucide-react";
import { technologiesMaster } from "../data/technologiesMaster";
import ScrollReveal from "../components/ScrollReveal";
import PageHero from "../components/common/PageHero";
import CTASection from "../components/common/CTASection";

export default function Technologies() {
  const { pillars, machineComparison, safetyEcosystem } = technologiesMaster;

  // Find specific tech pillars for dedicated showcases
  const pmsTech = pillars.find((p) => p.id === "pms") || pillars[0];
  const gearlessTech = pillars.find((p) => p.id === "gearless") || pillars[1];
  const gearedTech = pillars.find((p) => p.id === "geared") || pillars[2];
  const v3fTech = pillars.find((p) => p.id === "inverter") || pillars[3];
  const microTech = pillars.find((p) => p.id === "microprocessor") || pillars[5];
  const ardTech = pillars.find((p) => p.id === "ard") || pillars[6];
  const mrlTech = pillars.find((p) => p.id === "mrl-controller") || pillars[7];
  const ledTech = pillars.find((p) => p.id === "led") || pillars[4];
  const monitoringTech = pillars.find((p) => p.id === "monitoring") || pillars[8];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden">
      {/* Page Hero */}
      <PageHero
        badge="Brochure Pages 03 & 18 &bull; German Engineering Know-How"
        title="Traction Machines & Advanced Elevator Technology"
        subtitle="Engineered with German know-how, permanent magnet synchronous (PMSM) gearless machines, heavy-duty helical geared machines, and 32-bit microprocessor controls. Delivering up to 30% electricity savings and whisper-quiet vertical transit."
        breadcrumbs={[{ label: "Technology" }]}
        actions={
          <div className="flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-lg transition-colors flex items-center space-x-2"
            >
              <span>Consult Engineering Team</span>
              <CheckCircle className="w-4 h-4" />
            </Link>
            <Link
              to="/elevators"
              className="px-5 py-3 rounded-full bg-slate-800/90 border border-slate-700 text-white text-xs sm:text-sm font-bold hover:bg-slate-700 transition-colors flex items-center space-x-2"
            >
              <SlidersHorizontal className="w-4 h-4 text-brand-teal" />
              <span>Explore Elevator Models</span>
            </Link>
            <Link
              to="/doors"
              className="px-5 py-3 rounded-full bg-slate-800/90 border border-slate-700 text-white text-xs sm:text-sm font-bold hover:bg-slate-700 transition-colors flex items-center space-x-2"
            >
              <span>Door Systems</span>
              <ArrowRight className="w-4 h-4 text-teal-300" />
            </Link>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">

        {/* Value Proposition Intro Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">
              High Energy Efficiency Benchmark &bull; IS 14665 Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Engineering That Lowers Operating & Power Costs
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              By unifying Permanent Magnet Synchronous (PMS) direct-drive motors, German-designed V3F inverters, and automated idle sleep timers, Krupa Elevators reduce electricity consumption by up to 30% while extending component service life.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center">
              <strong className="text-2xl font-black text-brand-teal block">30%</strong>
              <span className="text-[11px] text-slate-300">Energy Savings</span>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center">
              <strong className="text-2xl font-black text-brand-orange block">&lt;50 dB</strong>
              <span className="text-[11px] text-slate-300">Whisper Quiet</span>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center">
              <strong className="text-2xl font-black text-teal-300 block">&plusmn;3 mm</strong>
              <span className="text-[11px] text-slate-300">Leveling Precision</span>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 text-center">
              <strong className="text-2xl font-black text-emerald-400 block">100%</strong>
              <span className="text-[11px] text-slate-300">Oil Free (PMS)</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SECTION 1: TRACTION MACHINES (GEARLESS PMSM vs. GEARED)    */}
        {/* ========================================================= */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
                Primary Drive Technology &bull; Brochure Pages 03 & 18
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
                Traction Machine Architecture: Gearless PMSM vs. Geared
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The traction machine is the mechanical heart of vertical transit. We manufacture and deploy both modern Permanent Magnet Synchronous (PMSM) gearless machines and heavy-duty geared traction machines tailored to passenger comfort, shaft layout, and tonnage demands.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-600 bg-slate-100 px-4 py-2 rounded-xl self-start md:self-auto">
              <Scale className="w-4 h-4 text-brand-orange" />
              <span>IS 14665 Standard Compliant</span>
            </div>
          </div>

          {/* Side-by-Side Deep Dive Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Gearless PMSM Machine Card */}
            <ScrollReveal direction="up" distance={20} className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full group">
                <div>
                  {/* Photo / Render */}
                  <div className="h-64 sm:h-72 bg-slate-900 relative overflow-hidden">
                    <img
                      src={gearlessTech.image || "/assets/technologies/pms-motor.jpg"}
                      alt="PMS Gearless Machine"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-teal-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Gearless PMSM Technology
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-slate-700/60 text-xs text-teal-300">
                      Direct-drive rotor-to-sheave mechanical efficiency with zero intermediate gears
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-5">
                    <div>
                      <span className="text-[11px] font-bold text-brand-teal uppercase tracking-wider">
                        Modern High Efficiency Standard
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 mt-1">
                        Permanent Magnet Synchronous (PMS) Gearless Machine
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        The drive sheave is mounted directly to the rotor shaft of a rare-earth permanent magnet motor. Eliminating worm gears abolishes mechanical backlash, vibration, gear wear, and lubricant oil changes.
                      </p>
                    </div>

                    {/* Key Engineering Highlights */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-100">
                      <strong className="text-xs font-bold text-slate-900 block">
                        Core Advantages:
                      </strong>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        <div className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                          <span><strong>30% - 40%</strong> lower power consumption</span>
                        </div>
                        <div className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                          <span><strong>100% Oil Free</strong> (zero environmental leaks)</span>
                        </div>
                        <div className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                          <span><strong>&lt;50 dB</strong> whisper-quiet operation</span>
                        </div>
                        <div className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                          <span>Supports <strong>MRL</strong> (no penthouse needed)</span>
                        </div>
                      </div>
                    </div>

                    {/* Manufactured Machine Models */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                        Manufactured Machine Models:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-2xl bg-slate-900 text-white space-y-1 text-xs">
                          <div className="flex justify-between items-center">
                            <strong className="text-white font-bold">I-127 Gearless</strong>
                            <span className="text-[10px] text-teal-300 font-mono">1.0 - 2.0 m/s</span>
                          </div>
                          <p className="text-[11px] text-slate-300">
                            Up to 1088 Kgs (16 Passengers). Ultra-compact profile for residential & MRL shafts.
                          </p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-slate-900 text-white space-y-1 text-xs">
                          <div className="flex justify-between items-center">
                            <strong className="text-white font-bold">Radial PMS Motor</strong>
                            <span className="text-[10px] text-teal-300 font-mono">1.5 - 2.5 m/s</span>
                          </div>
                          <p className="text-[11px] text-slate-300">
                            Up to 1768 Kgs (26 Passengers). Multi-pole high-torque motor for commercial towers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    to="/elevators"
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-brand-teal text-white text-xs font-bold transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>View Gearless Elevator Models</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Geared Traction Machine Card */}
            <ScrollReveal direction="up" delay={50} distance={20} className="h-full">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full group">
                <div>
                  {/* Drawing / Catalog Plate */}
                  <div className="h-64 sm:h-72 bg-slate-900 relative overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={gearedTech.image || "/assets/drawings/page_18.png"}
                      alt="Geared Traction Machine Drawing"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-brand-orange text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      Heavy-Duty Geared Traction
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-slate-700/60 text-xs text-amber-300">
                      Catalog Page 18: High-torque bronze worm gearing with reinforced cast-iron housing
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-5">
                    <div>
                      <span className="text-[11px] font-bold text-brand-orange uppercase tracking-wider">
                        High-Tonnage Industrial Workhorse
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 mt-1">
                        Heavy-Duty Helical & Worm Geared Traction Machine
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                        Couples an industrial AC induction motor to a precision-ground alloy bronze worm gear and helical reduction gear. Delivers massive starting torque, making it the industry standard for freight, goods, and car parking platforms.
                      </p>
                    </div>

                    {/* Key Engineering Highlights */}
                    <div className="space-y-2.5 pt-2 border-t border-slate-100">
                      <strong className="text-xs font-bold text-slate-900 block">
                        Core Advantages:
                      </strong>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        <div className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span><strong>Massive Initial Torque</strong> for heavy freight loads</span>
                        </div>
                        <div className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span><strong>Dual Failsafe Shoe Brakes</strong> for positive hold</span>
                        </div>
                        <div className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span><strong>Economical Initial Cost</strong> with proven ruggedness</span>
                        </div>
                        <div className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                          <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                          <span>Requires overhead concrete machine room</span>
                        </div>
                      </div>
                    </div>

                    {/* Manufactured Machine Models */}
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                        Manufactured Machine Models:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3.5 rounded-2xl bg-slate-900 text-white space-y-1 text-xs">
                          <div className="flex justify-between items-center">
                            <strong className="text-white font-bold">M67 Geared Machine</strong>
                            <span className="text-[10px] text-amber-300 font-mono">0.5 - 1.0 m/s</span>
                          </div>
                          <p className="text-[11px] text-slate-300">
                            Up to 884 Kgs (13 Passengers). Reliable mechanical workhorse for mid-rise residential walk-ups.
                          </p>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-slate-900 text-white space-y-1 text-xs">
                          <div className="flex justify-between items-center">
                            <strong className="text-white font-bold">M76 Geared Machine</strong>
                            <span className="text-[10px] text-amber-300 font-mono">0.25 - 1.0 m/s</span>
                          </div>
                          <p className="text-[11px] text-slate-300">
                            Up to 4000 Kgs (Freight & Automobile). Heavy bronze gear wheel built to withstand extreme shocks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <Link
                    to="/contact"
                    className="w-full py-3 rounded-xl bg-slate-900 hover:bg-brand-orange text-white text-xs font-bold transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Request Geared Machine Technical Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Direct Technical Comparison Table */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden space-y-4">
            <div className="p-6 sm:p-8 bg-slate-900 text-white space-y-2">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">
                Engineering Specification Matrix
              </span>
              <h3 className="text-xl sm:text-2xl font-black">
                {machineComparison.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                {machineComparison.subtitle}
              </p>
            </div>

            <div className="overflow-x-auto p-4 sm:p-6 pt-0">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b-2 border-slate-200 text-slate-900">
                    <th className="py-3 px-4 font-black uppercase text-[11px] tracking-wider w-1/4">
                      Engineering Parameter
                    </th>
                    <th className="py-3 px-4 font-black uppercase text-[11px] tracking-wider text-brand-teal w-1/3">
                      Gearless PMSM Machine
                    </th>
                    <th className="py-3 px-4 font-black uppercase text-[11px] tracking-wider text-brand-orange w-1/3">
                      Geared Traction Machine
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {machineComparison.parameters.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={rIdx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                    >
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        {row.feature}
                        {row.highlight && (
                          <span className="block text-[10px] text-teal-700 font-semibold mt-0.5">
                            &bull; {row.highlight}
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-medium">
                        {row.gearless}
                      </td>
                      <td className="py-3.5 px-4 text-slate-700">
                        {row.geared}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: MOTION CONTROL & DRIVES (GERMAN V3F + CAN BUS) */}
        {/* ========================================================= */}
        <section className="space-y-12">
          <div className="space-y-2 border-b border-slate-200 pb-6">
            <span className="text-xs font-bold text-brand-teal uppercase tracking-widest block">
              Motion Control & Intelligence &bull; Brochure Page 03 & 18
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
              German V3F Drive & 32-Bit Microprocessor Controller
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
              Every Krupa elevator is governed by an integrated closed-loop electronic ecosystem. High-resolution optical encoders feed live velocity data to the German-designed inverter, ensuring butter-smooth acceleration and millimeter-accurate stops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* V3F Drive Card */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4 hover:shadow-md transition-shadow">
              <div className="h-44 bg-slate-900 rounded-2xl overflow-hidden relative">
                <img
                  src={v3fTech.image || "/assets/technologies/v3f-control.jpg"}
                  alt="V3F Inverter Controller"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-teal-500 text-slate-950 font-black text-[10px] px-2.5 py-0.5 rounded-full uppercase">
                  German Know-How
                </div>
              </div>
              <div>
                <span className="text-[11px] font-bold text-brand-teal uppercase">V3F Closed-Loop Drive</span>
                <h4 className="text-lg font-black text-slate-900 mt-0.5">
                  S-Curve Acceleration Profiling
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Continuously modulates frequency and voltage to eradicate starting jolts and stopping jerks. Delivers &plusmn;3 mm flush floor leveling.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                  <span>Smooth start/stop without sensation of motion</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                  <span>Integrated regenerative dynamic braking</span>
                </li>
              </ul>
            </div>

            {/* 32-Bit Microprocessor Card */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4 hover:shadow-md transition-shadow">
              <div className="h-44 bg-slate-900 rounded-2xl p-4 flex flex-col justify-between text-white border border-slate-800">
                <div className="flex justify-between items-start">
                  <Cpu className="w-8 h-8 text-teal-400" />
                  <span className="text-[10px] font-mono bg-slate-800 text-teal-300 px-2 py-0.5 rounded border border-slate-700">
                    CAN BUS 2.0
                  </span>
                </div>
                <div>
                  <strong className="text-base font-black block">32-Bit Dual-Core DSP</strong>
                  <span className="text-xs text-slate-300">Catalog Page 18: Industrial Microcontroller</span>
                </div>
              </div>
              <div>
                <span className="text-[11px] font-bold text-brand-teal uppercase">Intelligent Dispatch</span>
                <h4 className="text-lg font-black text-slate-900 mt-0.5">
                  CAN Bus Serial Architecture
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Reduces traveling cable wiring by up to 70%. Features real-time fault logging for 100 historical system events to enable swift maintenance.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                  <span>Full self-diagnostic memory codes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                  <span>Intelligent collective selective dispatch</span>
                </li>
              </ul>
            </div>

            {/* Emergency Automatic Rescue Device (ARD) Card */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4 hover:shadow-md transition-shadow">
              <div className="h-44 bg-gradient-to-br from-amber-600 to-slate-900 rounded-2xl p-4 flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                  <BatteryCharging className="w-8 h-8 text-amber-300" />
                  <span className="text-[10px] font-mono bg-amber-950/80 text-amber-200 px-2 py-0.5 rounded border border-amber-500/40">
                    FAILSAFE BACKUP
                  </span>
                </div>
                <div>
                  <strong className="text-base font-black block">Automatic Rescue Device (ARD)</strong>
                  <span className="text-xs text-amber-100">Brochure Page 03: Blackout Evacuation</span>
                </div>
              </div>
              <div>
                <span className="text-[11px] font-bold text-brand-orange uppercase">Grid Outage Safety</span>
                <h4 className="text-lg font-black text-slate-900 mt-0.5">
                  Least-Torque Battery Evacuation
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Engages within 3 seconds of power failure. Senses cabin load, moves to the nearest landing with minimal battery draw, and unlocks doors.
                </p>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <span>Zero passenger entrapment anxiety</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <span>Audio-visual voice prompt during rescue</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Secondary Technology Features Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Slim MRL Controller */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-brand-teal">
                <Layers className="w-5 h-5" />
                <h4 className="text-sm font-black text-slate-900">Wall Architrave MRL Controller</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fits inside the landing door frame or wall jamb. Technicians conduct maintenance and emergency manual brake release safely from the lobby without stepping into the hoistway.
              </p>
            </div>

            {/* Smart Idle Eco LED Lighting */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-brand-teal">
                <Lightbulb className="w-5 h-5" />
                <h4 className="text-sm font-black text-slate-900">Automated Sleep Timer Lighting</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                When parked for over 90 seconds, cabin LED downlights and blower fans enter low-power sleep mode, cutting auxiliary standby power consumption by up to 50%.
              </p>
            </div>

            {/* 24-Hour IoT Telemetry */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center space-x-2 text-brand-teal">
                <Radio className="w-5 h-5" />
                <h4 className="text-sm font-black text-slate-900">24/7 IoT Predictive Telemetry</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sensors continuously monitor door cycling, temperature, and vibration thresholds, dispatching preemptive alerts to our Nikol engineering workshop before faults occur.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: MULTI-LAYERED SAFETY ECOSYSTEM (IS 14665)       */}
        {/* ========================================================= */}
        <section className="bg-slate-900 rounded-3xl p-6 sm:p-12 text-white border border-slate-800 space-y-8 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">
                Zero Compromise Failsafes &bull; Brochure Page 03
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black">
                Comprehensive Safety Ecosystem
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every Krupa elevator is engineered with multiple independent active and passive failsafes, fully compliant with Indian Standard IS 14665 specifications.
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs font-bold text-teal-300 bg-slate-800 px-4 py-2 rounded-xl border border-slate-700 self-start md:self-auto">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Certified Failsafes</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyEcosystem.map((safe) => (
              <div
                key={safe.id}
                className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700/80 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {safe.image && (
                    <div className="h-36 rounded-xl overflow-hidden bg-slate-950 mb-3 border border-slate-700">
                      <img
                        src={safe.image}
                        alt={safe.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center space-x-2 text-brand-orange">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                    <h4 className="text-base font-bold text-white">{safe.title}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {safe.desc}
                  </p>
                </div>
                <span className="text-[10px] text-teal-400 font-mono pt-2 border-t border-slate-700/50 block">
                  Active Failsafe &bull; IS 14665
                </span>
              </div>
            ))}
          </div>
        </section>

      </div>

      <CTASection
        title="Consult With Krupa Elevator Engineers"
        subtitle="Our technical team provides power consumption benchmarking, machine-roomless hoistway feasibility studies, and CAD layout planning across Gujarat."
        variant="gradient"
      />
    </div>
  );
}

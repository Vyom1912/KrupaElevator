import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Cpu,
  ShieldCheck,
  CheckCircle,
  Sliders,
  Settings,
  BatteryCharging,
  Maximize2,
  ShieldAlert,
  Accessibility,
  CheckCircle2,
  Anchor,
  SlidersHorizontal,
  Monitor,
  FileText
} from "lucide-react";
import { technologiesData } from "../data/technologiesData";

export default function Technologies({ onOpenBrochurePage }) {
  const iconMap = {
    ShieldAlert: ShieldAlert,
    Maximize2: Maximize2,
    BatteryCharging: BatteryCharging,
    Accessibility: Accessibility,
    CheckCircle2: CheckCircle2,
    Anchor: Anchor,
    SlidersHorizontal: SlidersHorizontal
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
          Engineering & Innovation
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Next-Generation Elevator Technologies
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          KRUPA ELEVATORS combines permanent magnet synchronous (PMS) gearless traction, German-engineered V3F inverters, multi-layered automatic safety devices, and intelligent IoT telemetry to achieve industry-leading energy savings and flawless ride comfort.
        </p>
      </div>

      {/* PMS TRACTION MACHINE & GEARED COMPARISON */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-6">
          <div>
            <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-bold bg-brand-teal-light text-brand-teal mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>Brochure Core Claim: 30% Energy Savings</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {technologiesData.tractionMachines.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-1">
              {technologiesData.tractionMachines.summary}
            </p>
          </div>
          <button
            onClick={() => onOpenBrochurePage(3)}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
          >
            <FileText className="w-4 h-4 text-brand-teal" />
            <span>Brochure p.3</span>
          </button>
        </div>

        {/* Machine Models Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {technologiesData.tractionMachines.models.map((mod, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                {mod.type}
              </span>
              <h4 className="text-base font-black text-slate-900 mt-0.5">{mod.name}</h4>
              <p className="text-xs text-slate-600 mt-1">{mod.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
            PMS Gearless vs Conventional Geared Drive
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3.5">Engineering Parameter</th>
                  <th className="p-3.5 text-brand-teal bg-teal-50/50">
                    KRUPA PMS Gearless Machine (Green Tech)
                  </th>
                  <th className="p-3.5 text-slate-500">Conventional Geared Machine</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {technologiesData.tractionMachines.comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60">
                    <td className="p-3.5 font-bold text-slate-900">{row.feature}</td>
                    <td className="p-3.5 font-semibold text-brand-teal bg-teal-50/20">
                      ✓ {row.gearless}
                    </td>
                    <td className="p-3.5 text-slate-500">{row.geared}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* GERMAN INVERTER & ECO LED SYSTEM */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* German Inverter */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-teal-light text-brand-teal flex items-center justify-center">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-orange">
              German Know-How Engineering
            </span>
            <h3 className="text-2xl font-black text-slate-900">{technologiesData.inverter.title}</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {technologiesData.inverter.summary}
          </p>
          <div className="space-y-2 pt-2 border-t border-slate-100">
            {technologiesData.inverter.benefits.map((b, i) => (
              <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                <CheckCircle className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Eco LED Lighting */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-teal">
              50% Power Savings
            </span>
            <h3 className="text-2xl font-black text-slate-900">{technologiesData.lighting.title}</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {technologiesData.lighting.summary}
          </p>
          <div className="space-y-2 pt-2 border-t border-slate-100">
            {technologiesData.lighting.highlights.map((h, i) => (
              <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                <CheckCircle className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SAFETY ECOSYSTEM GRID */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block mb-1">
            Zero-Compromise Security
          </span>
          <h2 className="text-2xl sm:text-4xl font-black">
            Krupa Elevator Safety Ecosystem
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Engineered according to rigorous safety guidelines from pages 3, 10, and 12 of the technical brochure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {technologiesData.safetySystems.map((sys) => {
            const Icon = iconMap[sys.icon] || ShieldCheck;
            return (
              <div
                key={sys.id}
                className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2.5 hover:border-brand-teal transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-700 text-brand-orange flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">{sys.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{sys.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CONTROLLER PANELS & ARD */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
            Intelligence & Logic
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Microprocessor High-Technology Control Panels
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologiesData.controllers.map((ctrl, i) => (
            <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-800 flex items-center justify-center text-xs font-black">
                0{i + 1}
              </span>
              <h3 className="text-lg font-black text-slate-900">{ctrl.name}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{ctrl.desc}</p>
              <div className="pt-3 border-t border-slate-100 space-y-1">
                {ctrl.features.map((feat, fi) => (
                  <div key={fi} className="flex items-center space-x-1.5 text-xs text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COP & LOP OPERATING PANELS */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
              User Interface Hardware
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              {technologiesData.copLop.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              {technologiesData.copLop.summary}
            </p>
          </div>
          <button
            onClick={() => onOpenBrochurePage(9)}
            className="inline-flex items-center space-x-1 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
          >
            <FileText className="w-4 h-4 text-brand-teal" />
            <span>Brochure p.9</span>
          </button>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologiesData.copLop.models.map((cop) => (
            <div key={cop.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex justify-between items-center">
                <strong className="text-xs font-extrabold text-brand-teal">{cop.id}</strong>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 font-bold text-slate-700">
                  {cop.type}
                </span>
              </div>
              <div className="text-xs space-y-1 pt-1">
                <div className="flex justify-between text-slate-600">
                  <span className="text-slate-400">Finish:</span>
                  <span className="font-semibold text-slate-800">{cop.finish}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span className="text-slate-400">Display:</span>
                  <span className="font-semibold text-slate-800">{cop.display}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span className="text-slate-400">Buttons:</span>
                  <span className="font-semibold text-slate-800">{cop.buttons}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Display Innovations */}
        <div className="pt-6 border-t border-slate-100">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            Multimedia Indicators & Display Types
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {technologiesData.copLop.displayTypes.map((disp, i) => (
              <div key={i} className="p-3.5 rounded-2xl border border-slate-200 bg-white">
                <Monitor className="w-4 h-4 text-brand-orange mb-1.5" />
                <strong className="text-xs font-bold text-slate-900 block">{disp.name}</strong>
                <p className="text-[11px] text-slate-600 mt-1 leading-snug">{disp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

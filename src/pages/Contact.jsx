import React, { useState } from "react";
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Download,
  Building,
  Factory,
  MessageSquare,
  ChevronDown
} from "lucide-react";
import { companyData } from "../data/companyData";
import ScrollReveal from "../components/ScrollReveal";
import PageHero from "../components/common/PageHero";
import { assetUrl } from "../utils/assetPath";
import WhatsAppIcon from "../components/common/WhatsAppIcon";

export default function Contact({ onOpenBrochure }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    buildingType: "Residential Apartment",
    floors: "4 to 7 Floors",
    capacity: "6 to 8 Passengers (408 - 544 kg)",
    doorType: "Automatic Center Opening",
    city: "Ahmedabad",
    message: ""
  });

  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const faqs = [
    {
      q: "Can KRUPA elevators run on domestic single-phase electrical supply?",
      a: "Yes! Our Home Elevator range is specifically engineered with high-efficiency mini gearless PMS drives designed to operate seamlessly on single-phase 220V domestic power, eliminating the need for expensive commercial three-phase substation connections."
    },
    {
      q: "What are the minimal pit and overhead clearances required?",
      a: "For our compact Home Lifts, the required pit depth is just 550 mm and overhead is 3100 mm. For standard commercial and residential passenger lifts, standard pit depth is 1600 mm and overhead clearance is 4900 to 5185 mm as outlined in our technical specification tables."
    },
    {
      q: "What safety systems protect passengers during power grid blackouts?",
      a: "Every KRUPA elevator can be equipped with an Automatic Rescue Device (ARD/ERD) powered by sealed maintenance-free batteries. During utility outages, the ARD automatically takes over, drives the elevator smoothly to the closest floor, and opens the car doors to let passengers exit safely."
    },
    {
      q: "Where are KRUPA elevators manufactured?",
      a: "Our advanced manufacturing facility is located at 353, Gopal Charan Industrial Hub, Kujad-Bakrol Road, Bakrol, Ahmedabad-382430. All structural frames, car sling assemblies, and electrical control cabinets undergo stringent testing before site delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-8 pb-8">
      {/* Page Hero */}
      <PageHero
        icon={Phone}
        badge="Direct Factory & Nikol Engineering Hub"
        title="Let's Plan Your Elevator Solution"
        description="Reach our corporate headquarters and manufacturing facility in Ahmedabad, Gujarat. Speak with our application engineers for custom architectural CAD assistance, site surveys, or immediate quotation requests."
      />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Facilities & Quick Contacts Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Office with Architectural CAD Design Studio Image */}
          <ScrollReveal direction="up" distance={18} delay={0} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="h-40 w-full relative overflow-hidden bg-slate-900">
                <img
                  src={assetUrl("/assets/facilities/design-studio.jpg")}
                  alt="Krupa Elevators Corporate Office & Design Studio in Nikol Ahmedabad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-brand-orange text-white px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow">
                  Nikol Hub
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-[11px] font-bold text-slate-200">CAD Studio & Corporate Desk</span>
                </div>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-xl bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0">
                    <Building className="w-4 h-4" />
                  </div>
                  <strong className="text-sm font-black text-slate-900 block">Registered Office</strong>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {companyData.contacts.office.address}
                </p>
              </div>
            </div>
            <div className="px-5 pb-5 pt-1 text-[11px] text-slate-400 border-t border-slate-100 mx-5 mt-auto">
              Open Mon - Sat: 9:00 AM to 7:00 PM
            </div>
          </ScrollReveal>

          {/* Factory with Bakrol Works Image */}
          <ScrollReveal direction="up" distance={18} delay={60} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="h-40 w-full relative overflow-hidden bg-slate-900">
                <img
                  src={assetUrl("/assets/facilities/bakrol-facility.jpg")}
                  alt="Krupa Elevators Bakrol Manufacturing Plant in Ahmedabad"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-brand-teal text-white px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow">
                  Bakrol Works
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <span className="text-[11px] font-bold text-teal-300">Fabrication & Testing Facility</span>
                </div>
              </div>
              <div className="p-5 space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0">
                    <Factory className="w-4 h-4" />
                  </div>
                  <strong className="text-sm font-black text-slate-900 block">Manufacturing Plant</strong>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {companyData.contacts.factory.address}
                </p>
              </div>
            </div>
            <div className="px-5 pb-5 pt-1 text-[11px] text-slate-400 border-t border-slate-100 mx-5 mt-auto">
              Visitors welcome by appointment
            </div>
          </ScrollReveal>

          {/* Phone & WhatsApp */}
          <ScrollReveal direction="up" distance={18} delay={120} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-lg transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <strong className="text-sm font-black text-slate-900 block">Phone & Direct Contact</strong>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect directly with our engineering coordinators for quick dimensional inquiries and price estimates.
              </p>
              <div className="space-y-1.5 text-xs pt-1">
                <a
                  href={`tel:${companyData.contacts.phoneRaw}`}
                  className="block font-black text-sm text-slate-900 hover:text-brand-orange transition-colors"
                >
                  {companyData.contacts.phone}
                </a>
                <span className="text-[11px] text-slate-400 block">24/7 Breakdown: +91 82008 59171</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <a
                href={`https://wa.me/${companyData.contacts.whatsapp}?text=Hi%20KRUPA%20Elevators%2C%20I%20would%20like%20to%20inquire%20about%20your%20elevators.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-bold transition-colors flex items-center justify-center space-x-1.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Email & Inquiries */}
          <ScrollReveal direction="up" distance={18} delay={180} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-lg transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <strong className="text-sm font-black text-slate-900 block">Corporate Email Desk</strong>
              <p className="text-xs text-slate-500 leading-relaxed">
                Send structural CAD drawings, tender specifications, and architectural requirements to our team.
              </p>
              <div className="space-y-1 text-xs pt-1">
                <a
                  href={`mailto:${companyData.contacts.emailPrimary}`}
                  className="block text-slate-800 font-bold hover:text-brand-teal truncate"
                >
                  {companyData.contacts.emailPrimary}
                </a>
                <a
                  href={`mailto:${companyData.contacts.emailSales}`}
                  className="block text-slate-600 hover:text-brand-teal truncate"
                >
                  {companyData.contacts.emailSales}
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <a
                href={companyData.brochurePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center justify-center space-x-1.5"
              >
                <Download className="w-4 h-4 text-brand-teal" />
                <span>Download PDF Brochure</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* INQUIRY FORM & SITE VISIT REQUEST */}
        <ScrollReveal direction="up" distance={20} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-lg space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
                Direct Quotation
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                Request a Project Quote & Site Survey
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill out the technical requirements below and our sales engineering division will provide a comprehensive proposal.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950 text-center space-y-3">
                <CheckCircle2 className="w-14 h-14 text-brand-teal mx-auto" />
                <h3 className="text-xl font-bold">Inquiry Successfully Submitted!</h3>
                <p className="text-xs text-teal-800 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our senior technical consultant will review your specifications for <strong>{formData.buildingType}</strong> ({formData.city}) and contact you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-brand-teal text-white text-xs font-bold rounded-xl shadow hover:bg-teal-600 transition-colors"
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mukesh Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98250 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-teal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Project City / State
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ahmedabad, Surat, Rajkot, Vadodara"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-teal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Building Category
                    </label>
                    <select
                      value={formData.buildingType}
                      onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-teal"
                    >
                      <option>Residential Apartment</option>
                      <option>Commercial Office Tower</option>
                      <option>Private Villa / Bungalow Lift</option>
                      <option>Hospital & Trauma Center</option>
                      <option>Industrial Freight / Warehouse</option>
                      <option>Automotive Car Park</option>
                      <option>Panoramic Glass Capsule</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Number of Floors / Stops
                    </label>
                    <select
                      value={formData.floors}
                      onChange={(e) => setFormData({ ...formData, floors: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-teal"
                    >
                      <option>G+1 to G+3 (Low Rise / Villa)</option>
                      <option>4 to 7 Floors</option>
                      <option>8 to 14 Floors</option>
                      <option>15 to 22+ Floors</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Rated Passenger Capacity
                    </label>
                    <select
                      value={formData.capacity}
                      onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-teal"
                    >
                      <option>3 to 4 Passengers (204 - 272 kg)</option>
                      <option>5 to 6 Passengers (340 - 408 kg)</option>
                      <option>8 Passengers (544 kg)</option>
                      <option>10 to 13 Passengers (680 - 884 kg)</option>
                      <option>15 to 26 Passengers (Hospital Stretcher)</option>
                      <option>Freight Heavy Load (500 to 4000 kg)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Preferred Door System
                    </label>
                    <select
                      value={formData.doorType}
                      onChange={(e) => setFormData({ ...formData, doorType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-teal"
                    >
                      <option>Automatic Center Opening</option>
                      <option>Automatic Telescopic Door</option>
                      <option>Glass Vision Door</option>
                      <option>Manual Collapsible Gate</option>
                      <option>Manual Swing Door</option>
                      <option>Vertical Bi-Parting (Freight)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Project Remarks or Special Architectural Constraints
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Shaft dimensions (if existing), preferred cabin finish (e.g. KEC-03, Rose Gold), timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-teal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs font-bold shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Technical Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Brochure Download & Fast Assist */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange">
                Brochure Archive
              </span>
              <h3 className="text-xl font-black">Official Technical Product Catalogue</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Download the comprehensive KRUPA ELEVATORS brochure in high resolution PDF format containing complete hoistway layouts, motor ratings, and architectural finishes.
              </p>
              <div className="pt-2 space-y-2">
                <a
                  href={companyData.brochurePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-xs font-bold transition-colors shadow"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Brochure (16 MB)</span>
                </a>
                {onOpenBrochure && (
                  <button
                    onClick={onOpenBrochure}
                    className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors border border-slate-700"
                  >
                    <span>Open Interactive Page Viewer</span>
                  </button>
                )}
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-orange/10 to-amber-50 p-6 rounded-3xl border border-brand-orange/20 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">
                Immediate Assistance
              </span>
              <h4 className="text-base font-bold text-slate-900">Need Immediate Site Advice?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect directly with our Chief Technical Coordinator for urgent hoistway dimension checks, custom pricing, or breakdown reports.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={`tel:${companyData.contacts.phoneRaw}`}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Call: {companyData.contacts.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${companyData.contacts.whatsapp}?text=${encodeURIComponent(
                    "Hello Krupa Elevators, I need urgent site advice and information regarding elevator specifications."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20bd5a] transition-colors shadow-xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <ScrollReveal direction="up" distance={20} className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block mb-1">
              Questions & Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Frequently Asked Technical Questions
            </h2>
          </div>

          <div className="space-y-3 divide-y divide-slate-100">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="pt-3 first:pt-0">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="w-full flex justify-between items-center text-left py-2 focus:outline-none"
                  >
                    <span className="text-sm font-bold text-slate-900">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-brand-teal" : ""
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="text-xs text-slate-600 leading-relaxed pb-3 pt-1 animate-in fade-in">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

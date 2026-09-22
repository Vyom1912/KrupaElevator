import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Download, ArrowRight } from "lucide-react";
import PageHero from "../components/common/PageHero";
import SectionHeader from "../components/common/SectionHeader";
import ProjectsShowcase from "../components/common/ProjectsShowcase";
import CTASection from "../components/common/CTASection";
import { projectsData } from "../data/projectsData";
import { companyData } from "../data/companyData";
import ScrollReveal from "../components/ScrollReveal";
import Seo from "../components/common/Seo";

export default function Projects({ onOpenBrochure }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Residential High-Rise",
    "Luxury Private Residence",
    "Commercial & Retail",
    "Healthcare & Specialized",
    "Industrial & Heavy Duty",
    "Automotive & Parking"
  ];

  const filteredProjects = projectsData.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-slate-50 space-y-12 sm:space-y-16 pb-20">
      <Seo
        title="Projects & Clients"
        description="Verified elevator installations across Gujarat and Western India — residential towers, luxury villas, hospitals, and industrial facilities engineered by Krupa Elevators."
      />

      {/* Page Hero */}
      <PageHero
        breadcrumbs={[
          { label: "About", to: "/about" },
          { label: "Projects & Clients" }
        ]}
        badge="Verified Installations Portfolio"
        title="Elevator Projects Across Gujarat & Western India"
        description="From high-rise residential towers along SG Highway to luxury penthouses in Surat and specialized trauma bed elevators in Rajkot. Explore real-world vertical transportation systems engineered by Krupa Elevators."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-sm font-bold shadow-md transition-colors flex items-center space-x-2"
            >
              <span>Book Site Survey</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={companyData.brochurePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition-colors flex items-center space-x-2 shadow-xs"
            >
              <Download className="w-4 h-4 text-brand-teal" />
              <span>Download Brochure</span>
            </a>
          </div>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Category Filter Pills */}
        <ScrollReveal direction="up" distance={15} duration={400}>
          <div className="flex flex-wrap gap-2 justify-center items-center bg-white p-3 sm:p-4 rounded-3xl border border-slate-200 shadow-sm max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow-sm scale-[1.02]"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div>
          <ProjectsShowcase projects={filteredProjects} />
        </div>
      </div>

      {/* Consultation Banner */}
      <CTASection
        title="Have an Upcoming Project in Mind?"
        subtitle="Let our engineering team prepare custom General Arrangement (GA) CAD layouts, shaft load calculations, and comprehensive cost estimates tailored to your building."
        badge="Direct Factory Support & Free Site Inspection"
      />
    </div>
  );
}

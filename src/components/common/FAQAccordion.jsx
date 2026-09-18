import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { faqsData } from "../../data/faqsData";

export default function FAQAccordion({
  faqs = faqsData,
  defaultOpen = 0,
  className = ""
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...new Set(faqs.map((f) => f.category))];

  const filteredFaqs = faqs.filter(
    (f) => activeCategory === "All" || f.category === activeCategory
  );

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Category Pills */}
      {categories.length > 2 && (
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-slate-900 text-white shadow-sm scale-[1.02]"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Accordion Cards List */}
      <div className="space-y-3 max-w-3xl mx-auto">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <ScrollReveal
              key={faq.id || idx}
              direction="up"
              delay={idx * 40}
              distance={15}
              duration={400}
            >
              <div
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-brand-teal shadow-md ring-1 ring-brand-teal/20"
                    : "border-slate-200 hover:border-slate-300 shadow-2xs"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-teal-50 text-brand-teal rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}


import React from "react";
import { Phone } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import WhatsAppIcon from "./WhatsAppIcon";

export default function PageHero({
  icon: Icon,
  badge,
  title,
  description,
  phone = "+91 97277 64868",
  whatsappMessage,
}) {
  const phoneNumber = phone.replace(/\D/g, "");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 border-b border-slate-200">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

        {/* Content */}
        <ScrollReveal
          direction="up"
          distance={20}
          duration={500}
          className="max-w-3xl"
        >
          <div>
            {/* Badge */}
            <div className="flex items-center space-x-2 text-brand-teal text-xs font-bold uppercase tracking-widest mb-1">
              {Icon && <Icon className="w-4 h-4" />}
              <span>{badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              {title}
            </h1>

            {/* Description */}
            {description && (
              <p className="text-xs sm:text-sm text-slate-600 max-w-3xl mt-1 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </ScrollReveal>

        {/* Actions */}
        <ScrollReveal
          direction="right"
          distance={20}
          duration={500}
          delay={150}
        >
          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto">

            {/* Call */}
            <a
              href={`tel:${phoneNumber}`}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-brand-teal text-white text-xs font-bold flex items-center space-x-2 transition-all shadow-xs cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>Call: {phone}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                whatsappMessage ||
                `Hello, I would like to consult regarding ${title}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center space-x-2 shadow-xs transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp Us</span>
            </a>

          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}


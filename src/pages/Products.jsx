import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, ArrowRight, CheckCircle2, SlidersHorizontal, Sparkles, Layers, ShieldCheck, DoorClosed } from "lucide-react";
import { productsData, doorSystemsData } from "../data/productsData";
import ProductModal from "../components/ProductModal";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = [
    "All",
    "Commercial & Residential",
    "Architectural & Luxury",
    "Healthcare & Specialized",
    "Industrial & Heavy Duty",
    "Automotive & Parking",
    "Green Tech & Compact",
    "Luxury & Private Residence",
    "Low Rise Solutions",
    "Economic Solutions"
  ];

  const filteredProducts = productsData.filter((prod) => {
    const matchesCategory =
      activeCategory === "All" || prod.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch =
      !searchQuery ||
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      Object.values(prod.keySpecs).some((v) => v.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-teal block">
          Complete Elevator Portfolio
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Engineered for Every Architecture
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          From silent domestic villa lifts and 66-meter high-speed passenger elevators to 4000kg freight hoists and multi-level automated car parking systems. Complete dimensional matrices and technical data are provided directly on-site.
        </p>
      </div>

      {/* Filter & Search Toolbar */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products, speed, capacity, door types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
            />
          </div>

          <div className="text-xs text-slate-500 font-semibold w-full md:w-auto text-right">
            Showing {filteredProducts.length} of {productsData.length} elevator solutions
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
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
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
          <p className="text-base font-bold text-slate-700">No matching elevator solutions found.</p>
          <p className="text-xs text-slate-500 mt-1">Try adjusting your search terms or filter category.</p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 bg-brand-teal text-white text-xs font-bold rounded-xl"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header */}
                <div className="h-56 bg-slate-950 relative overflow-hidden group/img cursor-pointer" onClick={() => setSelectedProduct(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-black text-brand-teal border border-slate-200 shadow-sm">
                    {product.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-slate-900/85 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold text-teal-300 border border-slate-700">
                    Verified Solution
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-brand-teal transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-bold text-brand-orange mt-0.5">{product.tagline}</p>
                  <p className="text-xs text-slate-600 line-clamp-3 mt-3 leading-relaxed">
                    {product.summary}
                  </p>

                  {/* Spec Highlights */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5 text-xs">
                    {Object.entries(product.keySpecs).slice(0, 4).map(([k, v], idx) => (
                      <div key={idx} className="flex justify-between items-center text-slate-600">
                        <span className="font-medium text-slate-400 text-[11px]">{k}:</span>
                        <span className="font-bold text-slate-900 text-right truncate max-w-[180px] text-[11px]">
                          {v}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Door Options Preview */}
                  {product.doorOptions && (
                    <div className="mt-4 pt-3 border-t border-dashed border-slate-200">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                        Door Systems
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {product.doorOptions.slice(0, 2).map((d, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold"
                          >
                            {d}
                          </span>
                        ))}
                        {product.doorOptions.length > 2 && (
                          <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px]">
                            +{product.doorOptions.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex gap-2">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-brand-teal transition-colors shadow-sm"
                >
                  View Technical Specs
                </button>
                <Link
                  to="/contact"
                  className="py-2.5 px-3.5 rounded-xl bg-brand-orange text-white text-xs font-bold hover:bg-brand-orange-hover transition-colors flex items-center justify-center"
                  title="Request Quote"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Direct Door Systems Catalog Section on the website */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-brand-teal">
            <DoorClosed className="w-4 h-4" />
            <span>Door Engineering Systems</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">
            Manual & Automatic Door Mechanisms
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Detailed configurations for residential, commercial, hospital, and heavy industrial hoistway openings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doorSystemsData.map((category, idx) => (
            <div key={idx} className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white">{category.category}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{category.subtitle}</p>
              </div>
              <div className="space-y-3">
                {category.items.map((item, ii) => (
                  <div key={ii} className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/60 text-xs">
                    <strong className="text-teal-300 block font-bold mb-0.5">{item.name}</strong>
                    <span className="text-slate-300 text-[11px] leading-relaxed">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specifications Link Callout */}
      <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-4 shadow-sm">
        <div>
          <h3 className="text-xl font-bold text-slate-900">Need Exact Civil Shaft & Pit Dimensions?</h3>
          <p className="text-xs text-slate-500 mt-1">
            Access the complete dimensional tables with Platform Width/Depth, Lift-Well, Overhead, and Pit Depth for all models.
          </p>
        </div>
        <Link
          to="/specifications"
          className="shrink-0 px-5 py-3 rounded-xl bg-brand-teal hover:bg-teal-600 text-white text-xs font-bold transition-colors flex items-center space-x-2 shadow-md"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span>Open Civil Dimensions Matrix</span>
        </Link>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

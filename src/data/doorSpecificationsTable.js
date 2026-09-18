/**
 * doorSpecificationsTable.js
 * 
 * Comprehensive, standalone technical specification table for all elevator door entrance systems,
 * extracted directly from Krupa Elevators brochure pages 8-9 and 18-22.
 */

export const doorSpecificationsTable = {
  title: "Elevator Landing Door Systems — Technical Specifications & Dimensions",
  subtitle: "Dimensional requirements, operation mechanisms, safety interlocks, and compatible elevator applications per IS 14665 standards.",
  columns: [
    { key: "doorCategory", label: "Category" },
    { key: "doorType", label: "Door Type / Model" },
    { key: "clearOpeningWidth", label: "Clear Opening Width (mm)" },
    { key: "standardHeight", label: "Finished Height (mm)" },
    { key: "operationMechanism", label: "Operation Mechanism" },
    { key: "materialsAndFinish", label: "Material & Finish" },
    { key: "safetyInterlock", label: "Safety / Locking System" },
    { key: "recommendedApplications", label: "Recommended Elevator Applications" }
  ],
  rows: [
    // Manual Doors
    {
      doorCategory: "Manual Door Systems",
      doorType: "Manual Collapsible Gate",
      clearOpeningWidth: "700 – 1200",
      standardHeight: "2000",
      operationMechanism: "Manual horizontal sliding lattice scissors action",
      materialsAndFinish: "High-Tensile Cold Rolled Steel / Stainless Steel vertical channels",
      safetyInterlock: "Mechanical landing lock + electrical interlock circuit",
      recommendedApplications: "Residential Apartments, Industrial Goods Hoists, Economical Builds"
    },
    {
      doorCategory: "Manual Door Systems",
      doorType: "Manual Imperforated Folding Door",
      clearOpeningWidth: "700 – 1000",
      standardHeight: "2000",
      operationMechanism: "Multi-leaf folding sliding action with top roller suspension",
      materialsAndFinish: "Pressed 1.6 mm sheet steel with narrow vertical vision glass",
      safetyInterlock: "Electro-mechanical positive interlock with safety contact",
      recommendedApplications: "Factories, Warehouses, Mid-Rise Residential, Dusty Environments"
    },
    {
      doorCategory: "Manual Door Systems",
      doorType: "Manual Telescopic Sliding Door",
      clearOpeningWidth: "700 – 900",
      standardHeight: "2000",
      operationMechanism: "Two-speed telescopic manual sliding on nylon ball-bearing rollers",
      materialsAndFinish: "Mild steel sheet with perforated mesh or two-tone solid powder coat",
      safetyInterlock: "Electro-mechanical safety interlock with emergency release key",
      recommendedApplications: "Low-Rise Residential Apartments, Space-Constrained Shafts"
    },
    {
      doorCategory: "Manual Door Systems",
      doorType: "M.S. Powder Coated Glass Swing Door",
      clearOpeningWidth: "700 – 800",
      standardHeight: "2000 – 2100",
      operationMechanism: "Single swing hinged action with concealed overhead hydraulic door closer",
      materialsAndFinish: "Precision MS box frame with 10 mm toughened clear/smoked safety glass",
      safetyInterlock: "Certified landing door lock + hydraulic anti-slam speed check",
      recommendedApplications: "Private Bungalows, Luxury Villas, Boutique Showrooms"
    },
    {
      doorCategory: "Manual Door Systems",
      doorType: "Manual Swing Door (Flush Steel)",
      clearOpeningWidth: "700 – 900",
      standardHeight: "2000",
      operationMechanism: "Flush steel hinged swing with magnetic catch and hydraulic check",
      materialsAndFinish: "Double-skinned galvanized steel with mineral wool acoustic insulation",
      safetyInterlock: "Heavy-duty latch interlock with emergency override triangle key",
      recommendedApplications: "Residential Buildings, Medical Clinics, Office Landings"
    },

    // Automatic Doors
    {
      doorCategory: "Automatic Door Systems",
      doorType: "S.S. Center-Opening Autodoor (2-Panel)",
      clearOpeningWidth: "700, 800, 900, 1000, 1100",
      standardHeight: "2000 – 2100",
      operationMechanism: "VVVF closed-loop vector controlled synchronous belt center-opening",
      materialsAndFinish: "AISI 304 Stainless Steel (Hairline, Mirror, or Etched Gold Designer)",
      safetyInterlock: "Inbuilt Car Door Lock (CDL) + full-height multi-beam infrared light curtain",
      recommendedApplications: "Passenger Elevators, High-Rise Commercial Towers, IT Parks, Hotels"
    },
    {
      doorCategory: "Automatic Door Systems",
      doorType: "Center-Opening Autodoor (4-Panel)",
      clearOpeningWidth: "1200 – 2500",
      standardHeight: "2100 – 2400",
      operationMechanism: "Heavy-duty dual-drive VVVF synchronous 4-panel center-parting header",
      materialsAndFinish: "Reinforced 1.6 mm sheet steel or Hairline Stainless Steel 304",
      safetyInterlock: "Dual mechanical lock + heavy-duty reinforced sill for wheel loading",
      recommendedApplications: "Hospital Bed & Stretcher Lifts, Automobile Parking Elevators, Goods Hoists"
    },
    {
      doorCategory: "Automatic Door Systems",
      doorType: "S.S. Telescopic Autodoor (Side-Opening)",
      clearOpeningWidth: "700 – 1200",
      standardHeight: "2000",
      operationMechanism: "2:1 differential speed synchronization side-opening sliding action",
      materialsAndFinish: "Stainless Steel 304 Hairline / M.S. Architectural Powder Coated",
      safetyInterlock: "Electronic door lock monitor + infrared obstacle rebound sensor",
      recommendedApplications: "Narrow Hoistway Shafts, Residential Retrofits, Wheelchair Clearances"
    },
    {
      doorCategory: "Automatic Door Systems",
      doorType: "Panoramic Glass Door (Big / Full Vision)",
      clearOpeningWidth: "800 – 1200",
      standardHeight: "2000 – 2400",
      operationMechanism: "Under-sill or slim overhead VVVF operator with concealed point clamps",
      materialsAndFinish: "12 mm laminated safety glass with polished stainless steel profile edges",
      safetyInterlock: "3D Light curtain barrier + ultrasonic obstacle detection",
      recommendedApplications: "Capsule Panoramic Elevators, Luxury Malls, Hotel Atriums"
    },
    {
      doorCategory: "Automatic Door Systems",
      doorType: "Small Vision Autodoor",
      clearOpeningWidth: "700 – 1000",
      standardHeight: "2000",
      operationMechanism: "Permanent magnet synchronous drive with smooth speed curve profile",
      materialsAndFinish: "1.5 mm Stainless Steel 304 with dual beveled glass observation ports",
      safetyInterlock: "Full height light curtain + electronic brake monitoring",
      recommendedApplications: "Medical Centers, Corporate Offices, Residential Societies"
    }
  ],
  notes: [
    "All entrance dimensions are in millimeters (mm).",
    "All landing doors comply with IS 14665 safety interlock and fire containment specifications.",
    "Custom finishes available: Hairline, Mirror Gold, Titanium Black, Rose Gold, and RAL Powder Coating."
  ]
};

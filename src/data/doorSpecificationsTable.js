/**
 * doorSpecificationsTable.js
 * 
 * Separate, standalone technical specification tables for Elevator Landing Door Systems:
 * - Manual Door Specifications Table
 * - Automatic Door Specifications Table
 * Derived from Krupa Elevators engineering data and IS 14665 elevator codes.
 */

export const manualDoorSpecificationsTable = {
  title: "Manual Landing Door Systems — Technical Specifications & Dimensions",
  subtitle: "Mechanical dimensions, clear openings (E), latching systems, and compatible elevator applications.",
  columns: [
    { key: "doorType", label: "Door Type / Model" },
    { key: "clearOpeningWidth", label: "Clear Opening Width (E) (mm)" },
    { key: "standardHeight", label: "Finished Height (mm)" },
    { key: "operationMechanism", label: "Operation Mechanism" },
    { key: "materialsAndFinish", label: "Material & Finish" },
    { key: "safetyInterlock", label: "Safety / Locking System" },
    { key: "recommendedApplications", label: "Recommended Applications" }
  ],
  rows: [
    {
      doorType: "Manual Collapsible Gate",
      clearOpeningWidth: "700 – 1200",
      standardHeight: "2000",
      operationMechanism: "Manual horizontal sliding lattice scissors action with top ball-bearing rollers",
      materialsAndFinish: "High-Tensile Cold Rolled Steel / Stainless Steel vertical lattice channels",
      safetyInterlock: "Mechanical landing lock + positive electrical interlock contact switch",
      recommendedApplications: "Residential Apartments, Industrial Goods Hoists, Economical Shafts"
    },
    {
      doorType: "Manual Imperforated Folding Door",
      clearOpeningWidth: "700 – 1000",
      standardHeight: "2000",
      operationMechanism: "Multi-leaf folding sliding action with top roller suspension and brass bottom guide",
      materialsAndFinish: "Pressed 1.6 mm sheet steel with narrow vertical wire-reinforced vision glass",
      safetyInterlock: "Electro-mechanical positive interlock with safety circuit contact",
      recommendedApplications: "Factories, Warehouses, Mid-Rise Residential, Dusty Environments"
    },
    {
      doorType: "Manual Telescopic Sliding Door",
      clearOpeningWidth: "700 – 900",
      standardHeight: "2000",
      operationMechanism: "Two-speed telescopic manual sliding on nylon-coated ball-bearing rollers",
      materialsAndFinish: "Mild steel sheet with perforated mesh or two-tone solid powder coat",
      safetyInterlock: "Electro-mechanical safety interlock with emergency release triangle key",
      recommendedApplications: "Low-Rise Residential Buildings, Space-Constrained Narrow Shafts"
    },
    {
      doorType: "M.S. Powder Coated Glass Swing Door",
      clearOpeningWidth: "700 – 800",
      standardHeight: "2000 – 2100",
      operationMechanism: "Single swing hinged action with concealed overhead hydraulic door closer",
      materialsAndFinish: "Precision MS box frame with 10 mm toughened clear or smoked safety glass",
      safetyInterlock: "Certified landing door lock with hydraulic anti-slam check",
      recommendedApplications: "Private Bungalows, Luxury Villas, Boutique Commercial Showrooms"
    },
    {
      doorType: "Manual Flush Steel Swing Door",
      clearOpeningWidth: "700 – 900",
      standardHeight: "2000",
      operationMechanism: "Flush steel hinged swing with magnetic catch and hydraulic check",
      materialsAndFinish: "Double-skinned galvanized steel with mineral wool acoustic fire-retardant core",
      safetyInterlock: "Heavy-duty latch interlock with emergency override drop-triangle key",
      recommendedApplications: "Residential Buildings, Medical Clinics, Office Landings"
    }
  ]
};

export const automaticDoorSpecificationsTable = {
  title: "Automatic Landing Door Systems — Technical Specifications & Dimensions",
  subtitle: "VVVF microprocessor power headers, clear openings (E), non-contact light curtains, and high-traffic ratings.",
  columns: [
    { key: "doorType", label: "Door Type / Model" },
    { key: "clearOpeningWidth", label: "Clear Opening Width (E) (mm)" },
    { key: "standardHeight", label: "Finished Height (mm)" },
    { key: "operationMechanism", label: "Operation Mechanism" },
    { key: "materialsAndFinish", label: "Material & Finish" },
    { key: "safetyInterlock", label: "Safety / Locking System" },
    { key: "recommendedApplications", label: "Recommended Applications" }
  ],
  rows: [
    {
      doorType: "S.S. Center-Opening Autodoor (2-Panel)",
      clearOpeningWidth: "700, 800, 900, 1000, 1100",
      standardHeight: "2000 – 2100",
      operationMechanism: "VVVF closed-loop vector controlled synchronous belt center-opening",
      materialsAndFinish: "AISI 304 Stainless Steel (Hairline, Mirror, or Etched Gold Designer)",
      safetyInterlock: "Inbuilt Car Door Lock (CDL) + full-height multi-beam infrared light curtain (128+ beams)",
      recommendedApplications: "Passenger Elevators, High-Rise Commercial Towers, IT Parks, Hotels"
    },
    {
      doorType: "Center-Opening Autodoor (4-Panel)",
      clearOpeningWidth: "1200 – 2500",
      standardHeight: "2100 – 2400",
      operationMechanism: "Heavy-duty dual-drive VVVF synchronous 4-panel center-parting header",
      materialsAndFinish: "Reinforced 1.6 mm sheet steel or Hairline Stainless Steel 304",
      safetyInterlock: "Dual mechanical lock + heavy-duty reinforced sill for heavy wheel rolling loads",
      recommendedApplications: "Hospital Bed & Stretcher Lifts, Automobile Parking Elevators, Goods Hoists"
    },
    {
      doorType: "S.S. Telescopic Autodoor (Side-Opening)",
      clearOpeningWidth: "700 – 1200",
      standardHeight: "2000",
      operationMechanism: "2:1 differential speed synchronization side-opening sliding action",
      materialsAndFinish: "Hairline Stainless Steel / Powder-Coated Mild Steel sheets",
      safetyInterlock: "Electro-mechanical positive landing lock with optical multi-beam protection",
      recommendedApplications: "Narrow Hoistway Shafts, Residential Buildings with limited landing width"
    },
    {
      doorType: "Panoramic Glass Center-Opening Autodoor",
      clearOpeningWidth: "800 – 1100",
      standardHeight: "2000 – 2100",
      operationMechanism: "VVVF belt drive with vibration-dampened bottom glass guide clamp",
      materialsAndFinish: "Laminated tempered safety glass (10 mm) with stainless steel top & bottom framing",
      safetyInterlock: "Optical beam sensor + mechanical safety interlock with emergency key release",
      recommendedApplications: "Capsule Elevators, Shopping Atriums, Luxury Hotels, Glass Hoistways"
    },
    {
      doorType: "Small Vision Glass Panel Autodoor",
      clearOpeningWidth: "700 – 1000",
      standardHeight: "2000",
      operationMechanism: "VVVF vector drive center-parting or telescopic sliding header",
      materialsAndFinish: "Hairline Stainless Steel with 200 mm x 1200 mm vision glass insert",
      safetyInterlock: "Car Door Lock (CDL) + full-height infrared door barrier curtain",
      recommendedApplications: "Commercial Offices, Public Libraries, Educational Institutes"
    },
    {
      doorType: "Titanium Gold Designer Autodoor",
      clearOpeningWidth: "800 – 1000",
      standardHeight: "2000 – 2100",
      operationMechanism: "Whisper-quiet VVVF drive with synchronized belt drive and soft bumpers",
      materialsAndFinish: "PVD Titanium Gold Stainless Steel with custom floral/geometric laser etching",
      safetyInterlock: "Inbuilt Car Door Lock + multi-beam non-contact light curtain",
      recommendedApplications: "Executive Penthouse Suites, Luxury Hotels, Heritage Clubhouses"
    }
  ]
};

// Combined fallback for backward compatibility
export const doorSpecificationsTable = {
  title: "Elevator Landing Door Systems — Technical Specifications & Dimensions",
  subtitle: "Dimensional requirements, operation mechanisms, safety interlocks, and compatible elevator applications per IS 14665 standards.",
  columns: [
    { key: "doorCategory", label: "Category" },
    { key: "doorType", label: "Door Type / Model" },
    { key: "clearOpeningWidth", label: "Clear Opening Width (E) (mm)" },
    { key: "standardHeight", label: "Finished Height (mm)" },
    { key: "operationMechanism", label: "Operation Mechanism" },
    { key: "materialsAndFinish", label: "Material & Finish" },
    { key: "safetyInterlock", label: "Safety / Locking System" },
    { key: "recommendedApplications", label: "Recommended Applications" }
  ],
  rows: [
    ...manualDoorSpecificationsTable.rows.map(r => ({ doorCategory: "Manual Door Systems", ...r })),
    ...automaticDoorSpecificationsTable.rows.map(r => ({ doorCategory: "Automatic Door Systems", ...r }))
  ]
};

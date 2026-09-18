import { assetUrl } from "../utils/assetPath";
import {
  manualDoorElevatorTable,
  automaticDoorElevatorTable,
  capsuleElevatorTable,
  hospitalElevatorTable,
  goodsElevatorTable,
  carElevatorTechnical,
  mrlElevatorTechnical,
  homeElevatorTechnical,
  hydraulicElevatorTechnical,
  generalNotes
} from "./krupaElevatorsData";

export const elevatorMaster = [
  {
    id: "passenger",
    name: "Passenger Elevator",
    category: "Residential & Commercial",
    tagline: "Form, Function & Architectural Flexibility",
    standard: "BIS IS 14665 Standard",
    image: assetUrl("/assets/elevators/passenger_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/auto_passenger_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/auto_door_plan.png"),
      elevation: assetUrl("/assets/drawings/auto_door_elevation.png"),
      door: assetUrl("/assets/drawings/auto_door_drawing.png"),
      manualAlt: assetUrl("/assets/drawings/manual_passenger_technical_drawing.png")
    },
    overview: "The KRUPA Passenger Elevator line unifies architectural flexibility with advanced vertical transport engineering. Created to enhance the modern and contemporary look of low, mid, and high-rise residential buildings and commercial facilities, it offers customizable cabin, entrance door, and shaft dimensions with unmatched passenger ride comfort.",
    typicalApplications: ["Residential Apartments", "Commercial Office Towers", "Shopping Malls", "Educational Institutes", "Hotels & Hospitality"],
    structure: {
      machine: "Permanent Magnet Synchronous (PMS) Gearless Machine or M67/M76 Geared Traction Machine with V3F Vector Drive.",
      controller: "32-bit Microprocessor High-Technology Control Panel with full collective group dispatch and closed-loop leveling.",
      hoistRopes: "High-tensile steel wire ropes (8x19S + FC / IWRC) engineered for maximum safety factor and low vibration.",
      guideRails: "Machined T-section steel guide rails (T75/T89) mounted with vibration-damping isolation clips.",
      counterweight: "Cast-iron or heavy composite filler blocks housed in a rigid structural steel frame matching cabin deadweight + 45-50% rated load.",
      doorSystem: "VVVF microprocessor frequency conversion entrance door header delivering smooth, whisper-quiet S-curve cycling.",
      landingDoors: "S.S. 304 Center-Opening, Telescopic, or Fire-Rated Powder-Coated Swing/Collapsible doors.",
      pit: "1600 mm deep waterproof reinforced concrete pit with heavy-duty energy-absorbing polyurethane or oil buffers.",
      overhead: "4900 mm to 5100 mm top hoistway clearance accommodating safety deceleration stroke and maintenance technician safety space."
    },
    standardSpecs: {
      application: "Low, mid & high-rise residential; low & mid-rise commercial",
      capacity: "4 to 26 Persons (272 to 1768 Kgs)",
      ratedSpeed: "0.63 to 2.0 MPS",
      voltage: "415V, 3-Phase, 50 Hz A.C. (Single-phase available for compact models)",
      entrances: "1 (Single) or 2 (Through / Opposite cabin entrances)",
      carWidth: "950 mm to 2000 mm (Dimension A - Cabin Width)",
      carDepth: "1000 mm to 2400 mm (Dimension B - Cabin Depth)",
      pitDepth: "1600 mm",
      overhead: "4900 mm (Speed 1.0 - 1.5 mps) / 5100 mm (Speed 2.0 mps)",
      doorType: "Automatic Center Opening / Telescopic / Manual Collapsible / Swing",
      drive: "Gearless PMS / Geared Traction with V3F Drive",
      control: "Full Collective Microprocessor Controller with CAN bus serial communication",
      lighting: "Energy-efficient LED downlights with automated idle sleep timer",
      rescueSystem: "Automatic Rescue Device (ARD) with battery-driven landing recall",
      monitoring: "24-Hour IoT Remote Telemetry Monitoring Available"
    },
    civilMatrix: automaticDoorElevatorTable.rows.map(r => ({
      persons: r.persons,
      capacity: r.loadKg,
      carW: r.platformEdgeWidth_A,
      carD: r.platformEdgeDepth_B,
      shaftW: r.liftWellWidth_C,
      shaftD: r.liftWellDepth_D,
      entrance: r.entranceWidth_E,
      doorType: r.doorType,
      speed: r.speedMps,
      pit: r.pitDepth,
      overhead: r.overHead,
      machineRoom: `${r.machineRoomWidth_K} × ${r.machineRoomLength_L}`
    })),
    technicalTables: [
      {
        id: "auto",
        title: automaticDoorElevatorTable.title,
        notes: automaticDoorElevatorTable.notes,
        legend: automaticDoorElevatorTable.legend,
        columns: automaticDoorElevatorTable.columns,
        rows: automaticDoorElevatorTable.rows
      },
      {
        id: "manual",
        title: manualDoorElevatorTable.title,
        notes: manualDoorElevatorTable.notes,
        legend: manualDoorElevatorTable.legend,
        columns: manualDoorElevatorTable.columns,
        rows: manualDoorElevatorTable.rows
      }
    ],
    compatibleDoors: ["ss-center-opening", "ss-telescopic", "small-vision-autodoor", "powder-coated-glass-swing"],
    compatibleMachines: ["PMS Gearless Traction", "M67 Geared Machine", "M76 Geared Machine"],
    features: [
      "Architectural flexibility adapting to custom passenger cabin, door, and shaft dimensions",
      "Silky-smooth ride comfort with sub-50dB whisper-quiet cabin acoustics",
      "Permanent Magnet Synchronous motor consuming up to 30% less energy",
      "Full safety failsafes: Inbuilt CDL, infrared light curtains, and ARD",
      "High leveling precision within ±3 mm eliminating trip hazards"
    ]
  },
  {
    id: "capsule",
    name: "Capsule Elevator",
    category: "Architectural & Commercial",
    tagline: "Futuristic Design, Architectural Jewel",
    standard: "BIS IS 14665 Standard",
    image: assetUrl("/assets/elevators/capsule_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/capsule_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/capsule_option_a_plan.png"),
      elevation: assetUrl("/assets/drawings/capsule_drawings.png"),
      optionB: assetUrl("/assets/drawings/capsule_option_b_plan.png")
    },
    overview: "KRUPA Capsule Elevators act as striking architectural centerpieces for upscale commercial centers, luxury hotels, shopping atriums, and corporate complexes. Designed with high-impact laminated safety glass, customized exterior contours, and concealed satin-finish stainless steel fixings, they turn every vertical ride into a visual attraction.",
    typicalApplications: ["Shopping Malls & Retail Atriums", "Luxury Hotels & Resorts", "Corporate Headquarters", "Multiplexes & Cultural Centers"],
    structure: {
      machine: "High-torque PMS Gearless Traction Machine positioned in overhead machine room or MRL cantilever configuration.",
      controller: "Advanced 32-bit Microprocessor Controller with scenic illumination dimmer integration.",
      hoistRopes: "Flexible pre-stretched steel wire ropes routed through lacquered aerodynamic traction crossarms.",
      guideRails: "Solid cold-drawn T-rails mounted to exposed structural steel glass hoistway framing.",
      counterweight: "Aesthetically enclosed steel frame with counterweight safety block and bottom guide shoes.",
      doorSystem: "Frameless or hairline SS glass center-opening doors with high-speed VVVF synchronized operator.",
      landingDoors: "Full-vision panoramic glass landing doors with stainless steel perimeter frames.",
      pit: "1600 mm finished pit with decorative drainage cover and polished buffer pillars.",
      overhead: "4900 mm overhead clearance accommodating capsule decorative canopy and roof maintenance station."
    },
    standardSpecs: {
      application: "Commercial atriums, luxury hotels, shopping centers, corporate headquarters",
      capacity: "06 to 16 Passengers (408 to 1088 Kgs)",
      ratedSpeed: "1.0, 1.5, 2.0 MPS",
      voltage: "415V, 3-Phase, 50 Hz",
      entrances: "1 or 2 (Front / Rear Glass Entrances)",
      carWidth: "1100 mm to 1550 mm (Dimension A)",
      carDepth: "1300 mm to 1500 mm (Dimension B)",
      pitDepth: "1600 mm",
      overhead: "4900 mm",
      doorType: "Automatic Glass Big Vision / Full Vision Panoramic Glass",
      drive: "Permanent Magnet Synchronous (PMS) Gearless Traction",
      control: "Microprocessor High-Technology Control with Group Dispatch",
      lighting: "Perimeter cove LED downlights + exterior decorative canopy illumination",
      rescueSystem: "Automatic Rescue Device (ARD) with battery backup",
      monitoring: "24-Hour IoT Remote Telemetry Ready"
    },
    civilMatrix: capsuleElevatorTable.optionA.rows.map(r => ({
      persons: r.person,
      capacity: r.kgs,
      carW: r.carInside_A,
      carD: r.carInside_B,
      shaftW: r.leftWell_C,
      shaftD: r.leftWell_D,
      entrance: r.entrance,
      doorType: "Glass Big Vision",
      speed: "1.0 / 1.5 / 2.0",
      pit: 1600,
      overhead: 4900,
      machineRoom: "Option A / B"
    })),
    technicalTables: [
      {
        id: "optA",
        title: `${capsuleElevatorTable.title} – ${capsuleElevatorTable.optionA.label}`,
        notes: capsuleElevatorTable.notes,
        legend: capsuleElevatorTable.legend,
        legendCaveat: capsuleElevatorTable.legendCaveat,
        columns: capsuleElevatorTable.optionA.columns,
        rows: capsuleElevatorTable.optionA.rows
      },
      {
        id: "optB",
        title: `${capsuleElevatorTable.title} – ${capsuleElevatorTable.optionB.label}`,
        notes: capsuleElevatorTable.notes,
        legend: capsuleElevatorTable.legend,
        legendCaveat: capsuleElevatorTable.legendCaveat,
        columns: capsuleElevatorTable.optionB.columns,
        rows: capsuleElevatorTable.optionB.rows
      }
    ],
    compatibleDoors: ["glass-big-vision", "glass-full-vision", "ss-center-opening"],
    compatibleMachines: ["I-127 Gearless PMS Machine", "Permanent Magnet Synchronous Motor"],
    features: [
      "Geometric cabin forms: Rear Side, Semi-Circle, 3-Side Cutting Edge, 5-Side Cutting Edge",
      "High-impact laminated architectural safety glass (curved or flat panels)",
      "Concealed stainless steel satin-finish structural fixing hardware",
      "Aluminum bulb plate platform with lacquered traction angles",
      "Smooth, vibration-free panoramic ride up to 66 meters travel height"
    ]
  },
  {
    id: "hospital",
    name: "Hospital Elevator",
    category: "Healthcare & Critical Care",
    tagline: "Smooth, Secure & Rapid Patient Transport",
    standard: "BIS IS 14665 Standard",
    image: assetUrl("/assets/elevators/hospital_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/hospital_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/hospital_plan.png"),
      elevation: assetUrl("/assets/drawings/hospital_elevation.png"),
      door: assetUrl("/assets/drawings/hospital_drawing.png")
    },
    overview: "KRUPA Hospital Bed Elevators are designed to provide the most secure, reliable, and sterile ambience required in critical healthcare environments. Engineered with deep stretcher-length cabins, jerk-free acceleration curves, electromagnetic compatibility (EMC) to prevent interference with sensitive medical monitors, and emergency medical priority recall.",
    typicalApplications: ["Multi-Specialty Hospitals", "Trauma Centers", "Medical Clinics", "Maternity Homes", "Diagnostic Labs"],
    structure: {
      machine: "Heavy-duty low-noise PMS Gearless or Geared Traction Machine optimized for jerk-free low-speed deceleration.",
      controller: "Medical-grade Microprocessor Controller with EMC shielding and Code Blue emergency medical override.",
      hoistRopes: "Multi-strand steel wire ropes providing maximum suspension redundancy and stability.",
      guideRails: "Rigid heavy-section guide rails preventing car rocking during heavy stretcher and equipment roll-in.",
      counterweight: "Precision-balanced counterweight frame with safety interlock.",
      doorSystem: "Extra-wide automatic center-opening or two-panel telescopic doors with door hold-open time extension button.",
      landingDoors: "Stainless Steel 304 seamless landing entrances with protective stainless bumper kickplates.",
      pit: "1600 mm concrete pit with heavy-duty energy-absorbing spring/oil buffers.",
      overhead: "5100 mm overhead height allowing high cabin ceilings and emergency medical oxygen gear."
    },
    standardSpecs: {
      application: "Hospitals, medical institutions, nursing homes, convalescent clinics",
      capacity: "15 to 26 Passengers / Bed Stretcher (1020 to 1768 Kgs)",
      ratedSpeed: "0.63 / 1.0 / 1.5 MPS",
      voltage: "415V, 3-Phase, 50 Hz",
      entrances: "1 (Single) or 2 (Opposite / Walk-through for trauma wards)",
      carWidth: "1000 mm to 1600 mm (Dimension C)",
      carDepth: "2400 mm (Stretcher length, Dimension D)",
      pitDepth: "1600 mm",
      overhead: "5100 mm",
      doorType: "Automatic Center Opening / Telescopic / Manual Collapsible Stretcher Gate",
      drive: "V3F Closed-Loop Vector Drive (Zero jerk on start & stop)",
      control: "Intellectual Microprocessor Control with Electromagnetic Compatibility (EMC)",
      lighting: "Flicker-free warm white LED recessed light panels (medical grade)",
      rescueSystem: "Automatic Rescue Device (ARD) with immediate nearest-floor landing recall",
      monitoring: "24-Hour IoT Medical Facility Priority Telemetry Ready"
    },
    civilMatrix: hospitalElevatorTable.automaticCentreOpeningDoor.rows.map(r => ({
      persons: r.person,
      capacity: r.capacityKg,
      carW: r.carWidth_C,
      carD: r.carDepth_D,
      shaftW: r.shaftWidth_A,
      shaftD: r.shaftDepth_B,
      entrance: r.entrance_E,
      doorType: "Auto Center Opening",
      speed: "0.63 / 1.0",
      pit: 1600,
      overhead: 5100,
      machineRoom: "600+C × 600+D"
    })),
    technicalTables: [
      {
        id: "autoCentre",
        title: hospitalElevatorTable.automaticCentreOpeningDoor.title,
        legend: hospitalElevatorTable.automaticCentreOpeningDoor.legend,
        columns: hospitalElevatorTable.automaticCentreOpeningDoor.columns,
        rows: hospitalElevatorTable.automaticCentreOpeningDoor.rows
      },
      {
        id: "autoTelescopic",
        title: hospitalElevatorTable.automaticTelescopicDoor.title,
        legend: hospitalElevatorTable.automaticTelescopicDoor.legend,
        columns: hospitalElevatorTable.automaticTelescopicDoor.columns,
        rows: hospitalElevatorTable.automaticTelescopicDoor.rows
      },
      {
        id: "stretcherManual",
        title: hospitalElevatorTable.title,
        notes: hospitalElevatorTable.notes,
        legend: hospitalElevatorTable.legend,
        columns: hospitalElevatorTable.columns,
        rows: hospitalElevatorTable.rows
      }
    ],
    compatibleDoors: ["center-opening-4panel", "ss-telescopic", "ss-center-opening", "manual-swing"],
    compatibleMachines: ["PMS Gearless Traction", "M76 Heavy Geared Machine"],
    features: [
      "Smooth and secure ride preventing passenger or patient discomfort",
      "Electromagnetic compatibility (EMC) protecting sensitive life-support monitors",
      "Emergency landing device ensuring rapid evacuation during power outages",
      "Deep 2400 mm cabin platform accommodating intensive care beds and medical staff",
      "Antibacterial stainless steel wall panels and seamless PVC flooring for easy sanitation"
    ]
  },
  {
    id: "goods",
    name: "Goods Elevator",
    category: "Industrial & Warehousing",
    tagline: "Sturdy & Heavy Carrying Solutions",
    standard: "BIS IS 14665 Standard",
    image: assetUrl("/assets/elevators/goods_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/goods_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/goods_plan.png"),
      elevation: assetUrl("/assets/drawings/goods_elevation.png"),
      doors: assetUrl("/assets/drawings/goods_doors_drawing.png")
    },
    overview: "KRUPA Goods Elevators are rugged industrial workhorses engineered to withstand heavy tonnage, forklift loading impacts, and demanding duty cycles. Manufactured with reinforced structural steel freight cabin frames, checkered non-slip floors, and heavy-duty traction machines to deliver seamless material transport across factories, warehouses, and logistics centers.",
    typicalApplications: ["Manufacturing Plants", "Industrial Warehouses", "Cold Storage Units", "Logistics & Distribution Hubs", "Textile & Engineering Mills"],
    structure: {
      machine: "Heavy-duty helical-worm geared traction machine or dual-piston hydraulic power unit.",
      controller: "Robust industrial-grade Microprocessor Controller with overload sensor lockouts.",
      hoistRopes: "Heavy-gauge certified steel wire ropes with calibrated spring-loaded tension equalizers.",
      guideRails: "Reinforced T-section guide rails (T89/T127) securely anchored to concrete shaft beams.",
      counterweight: "High-density steel counterweight with cast-iron ballast blocks.",
      doorSystem: "Heavy industrial vertical bi-parting doors, collapsible steel gates, or reinforced power sliding doors.",
      landingDoors: "Flush steel or collapsible steel landing gates with mechanical cam interlocks.",
      pit: "1600 mm deep reinforced concrete pit with heavy structural I-beam buffer pedestals.",
      overhead: "5100 mm / 5400 mm clearance providing safe headroom for high freight loads and overhead crane access."
    },
    standardSpecs: {
      application: "Industrial warehouses, manufacturing facilities, logistics parks, shipping hubs",
      capacity: "500 to 3000 Kgs (High-tonnage custom engineering up to 5 tons)",
      ratedSpeed: "0.25 to 1.0 MPS",
      voltage: "415V, 3-Phase, 50 Hz",
      entrances: "1 (Single Way) or 2 (Double Way / Through Cabin Access)",
      carWidth: "1500 mm to 2000 mm (Dimension A - Freight Width)",
      carDepth: "1200 mm to 3000 mm (Dimension B - Freight Depth)",
      pitDepth: "1600 mm",
      overhead: "5100 mm to 5400 mm",
      doorType: "Collapsible Landing Gate / Vertical Bi-Parting / Two-Panel Sliding",
      drive: "Heavy Duty Geared Traction Machine or Hydraulic Power Unit",
      control: "Heavy-duty Microprocessor Control with Electronic Overload Indicator",
      lighting: "Impact-resistant enclosed LED bulkhead lamps",
      rescueSystem: "Manual brake release lever + optional Automatic Rescue Device",
      monitoring: "Industrial Plant Telemetry Ready"
    },
    civilMatrix: goodsElevatorTable.rows.map(r => ({
      persons: "-",
      capacity: r.loadKg,
      carW: r.carInsideWidth_A,
      carD: r.carInsideDepth_B,
      shaftW: r.liftWellWidth_C,
      shaftD: r.liftWellDepth_D,
      entrance: r.entranceWidth,
      doorType: "Collapsible / Sliding",
      speed: r.speedMps,
      pit: r.pitDepth,
      overhead: r.overHead,
      machineRoom: `${r.machineRoomWidth_K} × ${r.machineRoomLength_L}`
    })),
    technicalTables: [
      {
        id: "goodsMain",
        title: goodsElevatorTable.title,
        notes: goodsElevatorTable.notes,
        legend: goodsElevatorTable.legend,
        columns: goodsElevatorTable.columns,
        rows: goodsElevatorTable.rows
      }
    ],
    compatibleDoors: ["collapsible", "imperforated", "vertical-bi-parting", "center-opening-4panel"],
    compatibleMachines: ["Heavy Duty Geared Traction Machine", "Industrial Hydraulic Cylinder"],
    features: [
      "Heavy duty powder coated steel freight cabin with bump-rail wall protection",
      "Reinforced sill construction capable of handling hand-pallet and forklift loads",
      "Accurate floor leveling preventing wheel snag during loading and unloading",
      "Electronic overload detection preventing dispatch when rated capacity is exceeded",
      "Travel height support up to 66 meters across multi-tier factory floors"
    ]
  },
  {
    id: "car",
    name: "Car Elevator & Multi-Level Parking",
    category: "Automotive & Logistics",
    tagline: "Pioneering Solutions for Automobile Transportation",
    standard: "BIS IS 14665 Standard",
    image: assetUrl("/assets/elevators/car_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/car_elevator_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/car_elevator_plan.png"),
      elevation: assetUrl("/assets/drawings/car_elevator_elevation.png"),
      parkingSystems: assetUrl("/assets/drawings/car_parking_systems.png")
    },
    overview: "KRUPA Car Elevators and Automated Parking Assistants provide robust vertical transportation for passenger cars, SUVs, and light commercial vehicles. Featuring expansive drive-through platforms, double-side opening configurations, checkered non-skid floors, and complementary puzzle/stacker parking systems to maximize urban parking capacity.",
    typicalApplications: ["Multi-Level Car Showrooms", "Commercial Parking Garages", "Automotive Service Centers", "Luxury Residential Towers", "Rooftop Parking Facilities"],
    structure: {
      machine: "High-capacity Geared Traction Machine or multi-stage Hydraulic Ram cylinders.",
      controller: "Dedicated Automotive Microprocessor Panel with vehicle optical positioning sensors.",
      hoistRopes: "Heavy-duty steel hoisting ropes with dynamic load equalization.",
      guideRails: "Extra-heavy machined T-rails (T127) resisting massive eccentric vehicular wheel loads.",
      counterweight: "High-tonnage counterweight with structural safety catch catches.",
      doorSystem: "Wide 4-panel center-opening automatic doors or vertical bi-parting automotive gates.",
      landingDoors: "Reinforced steel landing doors with protective bumper rub-rails.",
      pit: "1600 mm pit depth with structural buffer pillars and oil-water separator drain.",
      overhead: "4900 mm overhead clearance accommodating roof rack vehicles and SUVs."
    },
    standardSpecs: {
      isCarElevator: true,
      application: "Commercial car parks, automobile dealerships, luxury residential towers, private garages",
      capacity: "500 to 5000 Kgs (Solutions available for higher capacities)",
      ratedSpeed: "0.50 MPS (Solutions available for other speeds)",
      voltage: "415V, 3-Phase, 50 Hz",
      entrances: "1 (Single End) or 2 (Front-to-Back Drive-Through Option)",
      carWidth: "2500 mm to 2800 mm (Platform Width)",
      carDepth: "5190 mm to 6000 mm (Platform Depth)",
      pitDepth: "1600 mm",
      overhead: "4900 mm",
      doorType: "Vertical Bi-Parting Door / Auto Center Opening",
      drive: "Heavy Duty Geared Traction or Hydraulic Power Unit",
      control: "Automotive Microprocessor Control with Driver In-Car Remote Calling",
      lighting: "High-intensity flush LED ceiling strip arrays with vehicle positioning guide lights",
      rescueSystem: "Automatic Rescue Device with battery pack landing recall",
      monitoring: "Smart Parking Telemetry Integration Ready"
    },
    civilMatrix: [
      { persons: "Car / LMV", capacity: 2500, carW: 2500, carD: 5190, shaftW: 4000, shaftD: 6000, entrance: 2500, doorType: "4-Panel Auto Center", speed: "0.50", pit: 1600, overhead: 4900, machineRoom: "3500 Kg Hoist Beam" },
      { persons: "SUV / Van", capacity: 3500, carW: 2600, carD: 5500, shaftW: 4200, shaftD: 6300, entrance: 2500, doorType: "4-Panel Auto Center", speed: "0.50", pit: 1600, overhead: 4900, machineRoom: "4500 Kg Hoist Beam" },
      { persons: "Heavy Comm.", capacity: 5000, carW: 2800, carD: 6000, shaftW: 4500, shaftD: 6800, entrance: 2700, doorType: "Vertical Bi-Parting", speed: "0.50", pit: 1600, overhead: 4900, machineRoom: "6000 Kg Hoist Beam" }
    ],
    technicalTables: [
      {
        id: "carMain",
        title: carElevatorTechnical.title + " – Technical Specifications",
        loadHookNote: carElevatorTechnical.loadHookNote,
        holdingBeamCapacity: carElevatorTechnical.holdingBeamCapacity,
        columns: carElevatorTechnical.columns,
        rows: carElevatorTechnical.rows
      }
    ],
    compatibleDoors: ["center-opening-4panel", "vertical-bi-parting"],
    compatibleMachines: ["Heavy Duty Geared Traction Machine", "Multi-Ram Hydraulic Cylinder"],
    features: [
      "Front and rear double-side opening option allowing drive-through without reversing",
      "S.S. Checkered plate or Aluminum Checkered plate heavy-duty anti-slip flooring",
      "In-cabin traffic lights (Red/Green) and optical sensors for correct car positioning",
      "Complimentary automated parking solutions: Puzzle Parking, Car Scissor Lifts, Stacker Parking",
      "Safety interlocks preventing elevator movement until vehicle is completely within perimeter"
    ]
  },
  {
    id: "mrl",
    name: "MRL (Machine Room Less) Elevator",
    category: "Architectural & Space-Saving",
    tagline: "More Space, More Efficiency, Futuristic Tech",
    standard: "BIS IS 14665 Standard",
    image: assetUrl("/assets/elevators/mrl_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/mrl_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/mrl_liftwell_plan.png"),
      elevation: assetUrl("/assets/drawings/mrl_section_elevation.png"),
      terrace: assetUrl("/assets/drawings/mrl_terrace_plan.png")
    },
    overview: "KRUPA Machine Roomless (MRL) Elevators embody the concept of environmental protection and energy conservation. By mounting a permanent magnet synchronous gearless traction machine directly inside the hoistway, the need for a penthouse machine room is completely eliminated. This saves 25% of total elevator equipment area and reduces 40% of building space occupation.",
    typicalApplications: ["Residential Apartments with Terrace Penthouses", "Heritage & Low-Profile Commercial Buildings", "Villas with Strict Height Restrictions", "Modern Architecture Requiring Clean Rooflines"],
    structure: {
      machine: "Compact Permanent Magnet Synchronous (PMS) Gearless Machine mounted on shaft top guide rails.",
      controller: "Ultra-slim integrated MRL controller embedded into the top landing door architrave frame.",
      hoistRopes: "High-flexibility coated steel wire ropes routed through top diverter pulleys.",
      guideRails: "Heavy structural T-rails carrying both cabin travel guidance and machine reaction loads.",
      counterweight: "Side-mounted or rear-mounted counterweight frame maximizing usable cabin area.",
      doorSystem: "Low-profile VVVF synchronous belt-driven automatic center-opening door operator.",
      landingDoors: "Full stainless steel or architectural powder-coated landing doors.",
      pit: "1600 mm pit depth with compact high-density polyurethane energy buffers.",
      overhead: "4900 mm to 5185 mm overhead with integrated terrace inspection window (900 × 900 mm)."
    },
    standardSpecs: {
      application: "Residential towers, commercial buildings, villas requiring zero rooftop machine room",
      capacity: "05 to 26 Persons (340 to 1768 Kgs)",
      ratedSpeed: "1.00 / 1.50 / 2.0 MPS",
      voltage: "415V, 3-Phase, 50 Hz",
      entrances: "1 or 2 (Front / Rear)",
      carWidth: "1070 mm to 2100 mm (Cabin Inside C)",
      carDepth: "1270 mm to 2400 mm (Cabin Inside D)",
      pitDepth: "1600 mm",
      overhead: "4900 mm to 5185 mm (Inspection window at terrace level)",
      doorType: "Automatic Center Opening / Telescopic Doors",
      drive: "New Generation Permanent Magnet Synchronous Gearless Traction",
      control: "MRL Gearless Integrated Controller inside door jamb (Zero penthouse room)",
      lighting: "Energy-efficient solid-state LED ceiling panels with automatic sleep mode",
      rescueSystem: "Automatic Rescue Device (ARD) with electrical brake release",
      monitoring: "24-Hour IoT Remote Telemetry Ready"
    },
    civilMatrix: mrlElevatorTechnical.rows.map(r => ({
      persons: r.person,
      capacity: r.kgs,
      carW: r.cabinInsideWidth_C || "-",
      carD: r.cabinInsideDepth_D || "-",
      shaftW: r.liftWellWidth_A,
      shaftD: r.liftWellDepth_B,
      entrance: r.entry,
      doorType: "Auto Center Opening",
      speed: "1.0 / 1.5 / 2.0",
      pit: 1600,
      overhead: 5185,
      machineRoom: "Zero (Inside Shaft)"
    })),
    technicalTables: [
      {
        id: "mrlMain",
        title: mrlElevatorTechnical.title,
        notes: mrlElevatorTechnical.notes,
        legend: mrlElevatorTechnical.legend,
        dataConfidenceNote: mrlElevatorTechnical.dataConfidenceNote,
        columns: mrlElevatorTechnical.columns,
        rows: mrlElevatorTechnical.rows
      }
    ],
    compatibleDoors: ["ss-center-opening", "ss-telescopic", "small-vision-autodoor", "glass-big-vision"],
    compatibleMachines: ["New Generation PMS Gearless Machine", "I-127 Gearless Machine"],
    features: [
      "Saves 25% of total elevator equipment area by eliminating penthouse machine room",
      "Reduces 40% of building space occupation, allowing seamless architectural rooflines",
      "Whisper-quiet acoustic performance under 50 dB with permanent magnet synchronous drive",
      "Energy saving up to 40% compared to conventional geared elevator systems",
      "Inspection window at terrace level (900 × 900 mm) for convenient maintenance inspection"
    ]
  },
  {
    id: "home",
    name: "Home Elevator",
    category: "Luxury Residential & Private Villas",
    tagline: "Elevate Your Living Standard, Care for Your Family",
    standard: "BIS IS 14665 Standard",
    image: assetUrl("/assets/elevators/home_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/home_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/home_plan.png"),
      elevation: assetUrl("/assets/drawings/home_elevation.png"),
      doors: assetUrl("/assets/drawings/home_drawing.png")
    },
    overview: "KRUPA Home Elevators are custom-crafted to elevate the comfort, accessibility, and architectural prestige of private bungalows, luxury duplexes, and multi-storey villas. Operating smoothly on single-phase 220V domestic household electricity, they require an ultra-shallow pit of only 550 mm and an overhead clearance of 3100 mm, enabling hassle-free retrofits into existing homes.",
    typicalApplications: ["Private Villas & Bungalows", "Duplex Penthouses", "Multi-Storey Family Residences", "Senior-Friendly Home Renovations"],
    structure: {
      machine: "Compact Mini Gearless PMS Machine requiring zero dedicated machine room.",
      controller: "Smart Microprocessor Controller with integrated VVVF drive and whisper acoustics.",
      hoistRopes: "High-durability coated synthetic ropes or quiet suspension belts.",
      guideRails: "Precision cold-drawn guide rails anchored to brick wall or standalone steel structure.",
      counterweight: "Compact side-mounted counterweight allowing maximum cabin floor area.",
      doorSystem: "Manual swing door with gray smoked glass or automated telescopic sliding doors.",
      landingDoors: "Coated steel plate frames with gray smoked safety plastic/glass observation windows.",
      pit: "Ultra-compact 550 mm pit depth (no deep excavation needed).",
      overhead: "Compact 3100 mm overhead height easily fitting beneath standard residential ceilings."
    },
    standardSpecs: {
      application: "Multi-storey houses, penthouses, luxury bungalows, private villas",
      capacity: "3 to 4 Passengers (204 to 272 Kgs)",
      ratedSpeed: "0.30 / 0.63 MPS",
      voltage: "220V, Single Phase Domestic Power Supply (or 415V 3-Phase)",
      entrances: "1 (Single) or 2 (Opposite / Adjacent Corner Entrance)",
      carWidth: "810 mm to 850 mm (Dimension A - Cabin Width)",
      carDepth: "700 mm to 1200 mm (Dimension B - Cabin Depth)",
      pitDepth: "550 mm (Ultra-compact civil pit)",
      overhead: "3100 mm (Fits under standard residential ceiling)",
      doorType: "Manual Swing Door with Smoked Glass / Automatic Telescopic Sliding",
      drive: "Mini Gearless Machine (No machine room required)",
      control: "Touch Screen Landing Operating Panel with LCD Surface Mounted Display",
      lighting: "High Cabin Ceiling (2100mm) with LED Down Light / Rectangle Cover Light (CE-EDB-A30)",
      rescueSystem: "Integrated Battery-Powered Automatic Rescue Device (ARD)",
      monitoring: "Home Automation / Smart Villa Integration Ready"
    },
    civilMatrix: homeElevatorTechnical.rows.map(r => ({
      persons: r.persons,
      capacity: r.kgs,
      carW: r.carInsideWidth_A,
      carD: r.carInsideDepth_B,
      shaftW: r.liftWellWidth_C,
      shaftD: r.liftWellDepth_D,
      entrance: r.entrance_E,
      doorType: r.doorOperation,
      speed: r.speedMps,
      pit: r.pit,
      overhead: r.overHead,
      machineRoom: "Zero (Inside Shaft)"
    })),
    technicalTables: [
      {
        id: "homeMain",
        title: homeElevatorTechnical.title + " – Space & Civil Matrix",
        notes: homeElevatorTechnical.notes,
        legend: homeElevatorTechnical.legend,
        columns: homeElevatorTechnical.columns,
        rows: homeElevatorTechnical.rows
      }
    ],
    compatibleDoors: ["powder-coated-glass-swing", "manual-swing", "ss-telescopic", "telescopic-solid"],
    compatibleMachines: ["Mini Gearless Machine", "Single-Phase Traction Drive"],
    features: [
      "Runs on standard domestic single-phase 220V power supply (runs on household electric meter)",
      "Ultra-compact pit depth (550 mm) and overhead clearance (3100 mm)",
      "High cabin ceiling height (2100 mm) with electric fan option and LED downlights",
      "Touch screen landing operating panel with LCD surface mounted plexiglass design",
      "Saves up to 40% energy compared to hydraulic elevator systems with zero hydraulic oil",
      "Whisper-quiet, noiseless, and vibration-free ride for elderly family members"
    ]
  },
  {
    id: "hydraulic",
    name: "Hydraulic Elevator",
    category: "Low-Rise & Zero Overhead Flexibility",
    tagline: "Green Solutions For Better Tomorrow",
    standard: "BIS IS 14665 Standard",
    image: assetUrl("/assets/elevators/hydraulic_elevator.jpg"),
    drawings: {
      main: assetUrl("/assets/drawings/hydraulic_technical_drawing.png"),
      plan: assetUrl("/assets/drawings/hydraulic_center_bore_plan.png"),
      elevation: assetUrl("/assets/drawings/hydraulic_drawing.png"),
      threeDShafts: assetUrl("/assets/drawings/hydraulic_3d_shafts.png"),
      ropingPlan: assetUrl("/assets/drawings/hydraulic_roping_plan.png")
    },
    overview: "KRUPA Hydraulic Elevators are engineered for low-rise buildings, showrooms, and luxury residences where rooftop machine rooms cannot be constructed. Driven by high-pressure precision hydraulic cylinders, they offer total architectural freedom: the hydraulic machine unit can be placed flexibly up to 10 meters away on the ground floor or basement. Counterweight devices are not required, maximizing usable shaft space.",
    typicalApplications: ["Low-Rise Luxury Bungalows", "Automobile Showrooms", "Commercial Duplexes", "Industrial Mezzanines", "Heritage Buildings"],
    structure: {
      machine: "Compact Hydraulic Power Unit (Submerged motor pump, silent valve block, oil reservoir).",
      controller: "Hydraulic Microprocessor Controller with soft-stop valve sequencing and thermal cutoff.",
      hoistRopes: "Direct Central Acting cylinder (no ropes) or Indirect Side Acting 2:1 steel wire roping.",
      guideRails: "Solid machined steel guide rails carrying cabin cantilever bracket arm loads.",
      counterweight: "None required! (Hydraulic ram provides full direct vertical propulsion).",
      doorSystem: "Manual swing doors, collapsible gates, or automatic telescopic sliding doors.",
      landingDoors: "Powder-coated steel or architectural glass landing entrances.",
      pit: "1200 mm to 1500 mm pit depth accommodating cylinder buffer stops.",
      overhead: "3100 mm to 4000 mm compact overhead clearance (Zero top machine room required)."
    },
    standardSpecs: {
      application: "Low-rise buildings, villas, industrial facilities with flexible machine room placement",
      capacity: "03 to 24 Passengers (225 to 1800 Kgs) / Up to 3 Tons",
      ratedSpeed: "Up to 0.50 MPS",
      voltage: "415V, 3-Phase, 50 Hz (220V single-phase available for compact villa models)",
      entrances: "1 or 2 (Front / Rear Walk-Through)",
      carWidth: "850 mm to 1500 mm (Dimension C - Cabin Width)",
      carDepth: "900 mm to 2500 mm (Dimension D - Cabin Depth)",
      pitDepth: "1200 mm (Roping type) / 1500 mm (Center bore type)",
      overhead: "4000 mm",
      doorType: "Manual Swing Door / Collapsible Gate / Automatic Telescopic",
      drive: "Direct Central Acting / Indirect Side Acting 2:1 / Direct Side Acting Hydraulic Ram",
      control: "Integrated Hydraulic Microprocessor Controller with Soft Start/Stop Valve",
      lighting: "Recessed energy-efficient LED downlights with automatic idle turn-off",
      rescueSystem: "Emergency manual lowering valve (gravity-driven descent during power outage)",
      monitoring: "Hydraulic Pressure & Thermal Telemetry Ready"
    },
    civilMatrix: hydraulicElevatorTechnical.directOrSplitPistonTable.rows.map(r => ({
      persons: r.person,
      capacity: r.capacityKg,
      carW: r.carWidth_C || "-",
      carD: r.carDepth_D,
      shaftW: r.shaftWidth_A,
      shaftD: r.shaftDepth_B,
      entrance: 700,
      doorType: "Manual / Auto",
      speed: "Up to 0.5",
      pit: 1500,
      overhead: 4000,
      machineRoom: "Remote (0-10m)"
    })),
    technicalTables: [
      {
        id: "directOrSplit",
        title: hydraulicElevatorTechnical.directOrSplitPistonTable.title,
        description: hydraulicElevatorTechnical.directOrSplitPistonTable.description,
        note: hydraulicElevatorTechnical.directOrSplitPistonTable.note,
        legend: hydraulicElevatorTechnical.legend,
        columns: hydraulicElevatorTechnical.directOrSplitPistonTable.columns,
        rows: hydraulicElevatorTechnical.directOrSplitPistonTable.rows
      },
      {
        id: "singleSide",
        title: hydraulicElevatorTechnical.singleSideDirectSuspensionTable.title,
        description: hydraulicElevatorTechnical.singleSideDirectSuspensionTable.description,
        note: hydraulicElevatorTechnical.singleSideDirectSuspensionTable.note,
        legend: hydraulicElevatorTechnical.legend,
        columns: hydraulicElevatorTechnical.singleSideDirectSuspensionTable.columns,
        rows: hydraulicElevatorTechnical.singleSideDirectSuspensionTable.rows
      }
    ],
    compatibleDoors: ["powder-coated-glass-swing", "manual-swing", "collapsible", "ss-telescopic"],
    compatibleMachines: ["Direct Central Acting Hydraulic Ram", "Indirect Side Acting 2:1 Cylinder"],
    features: [
      "Top machine room is completely eliminated; hydraulic pump unit can be placed flexibly up to 10m away",
      "Counterweight device is not needed, which increases hoistway space utilization",
      "Wide loading range and strong adaptability; carrying ability reaches up to 3 tons",
      "Gravity descent during power outage via manual release valve, ensuring 100% passenger evacuation",
      "Multiple drive configurations: Direct Central Acting, Indirect Side Acting 2:1, Direct Side Acting"
    ]
  }
];

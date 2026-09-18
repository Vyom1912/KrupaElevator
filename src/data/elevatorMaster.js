import { assetUrl } from "../utils/assetPath";

export const elevatorMaster = [
  {
    id: "passenger",
    name: "Passenger Elevator",
    category: "Residential & Commercial",
    tagline: "Form, Function & Architectural Flexibility",
    brochurePage: "Pages 02, 18 & 19",
    image: assetUrl("/assets/elevators/building.jpg"),
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
    civilMatrix: [
      { persons: 6, capacity: 408, carW: 1200, carD: 1300, shaftW: 1700, shaftD: 1800, entrance: 700, doorType: "Auto Center Opening", speed: "1.0 / 1.5", pit: 1600, overhead: 4900, machineRoom: "300+C × 600+D" },
      { persons: 8, capacity: 544, carW: 1500, carD: 1330, shaftW: 2000, shaftD: 1800, entrance: 800, doorType: "Auto Center Opening", speed: "1.0 / 1.5", pit: 1600, overhead: 4900, machineRoom: "300+C × 600+D" },
      { persons: 10, capacity: 680, carW: 1650, carD: 1450, shaftW: 2150, shaftD: 2000, entrance: 800, doorType: "Auto Center Opening", speed: "1.0 / 1.5", pit: 1600, overhead: 4900, machineRoom: "600+C × 600+D" },
      { persons: 13, capacity: 884, carW: 1900, carD: 1500, shaftW: 2400, shaftD: 2000, entrance: 900, doorType: "Auto Center Opening", speed: "1.0 / 1.5", pit: 1600, overhead: 4900, machineRoom: "600+C × 600+D" }
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
    category: "Architectural & Luxury",
    tagline: "Panoramic Elegance & Smooth Operation",
    brochurePage: "Pages 06, 10 & 19",
    image: assetUrl("/assets/elevators/commercial.jpg"),
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
    civilMatrix: [
      { persons: 10, capacity: 680, carW: 1100, carD: 1300, shaftW: 2200, shaftD: 1325, entrance: 800, doorType: "Glass Big Vision", speed: "1.0 / 1.5 / 2.0", pit: 1600, overhead: 4900, machineRoom: "Option A / B" },
      { persons: 13, capacity: 884, carW: 1400, carD: 1550, shaftW: 2400, shaftD: 1425, entrance: 900, doorType: "Glass Big Vision", speed: "1.0 / 1.5 / 2.0", pit: 1600, overhead: 4900, machineRoom: "Option A / B" },
      { persons: 16, capacity: 1088, carW: 1500, carD: 1700, shaftW: 2800, shaftD: 1530, entrance: 1000, doorType: "Glass Big Vision", speed: "1.0 / 1.5 / 2.0", pit: 1600, overhead: 4900, machineRoom: "Option A / B" }
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
    category: "Healthcare & Stretcher Transit",
    tagline: "Smooth and Secure, Electromagnetic Compatibility",
    brochurePage: "Pages 06, 11 & 20",
    image: assetUrl("/assets/elevators/hospital.jpg"),
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
    civilMatrix: [
      { persons: 15, capacity: 1020, carW: 1000, carD: 2400, shaftW: 1900, shaftD: 3000, entrance: 800, doorType: "Auto Center Opening", speed: "0.63 / 1.0", pit: 1600, overhead: 5100, machineRoom: "600+C × 600+D" },
      { persons: 20, capacity: 1360, carW: 1300, carD: 2400, shaftW: 2300, shaftD: 3000, entrance: 900, doorType: "Auto Center Opening", speed: "0.63 / 1.0", pit: 1600, overhead: 5100, machineRoom: "600+C × 600+D" },
      { persons: 26, capacity: 1768, carW: 1600, carD: 2400, shaftW: 2600, shaftD: 3000, entrance: 1000, doorType: "Auto Center Opening", speed: "0.63 / 1.0", pit: 1600, overhead: 5100, machineRoom: "600+C × 600+D" }
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
    category: "Industrial & Freight Logistics",
    tagline: "Bear Any Heavy Load at Ease, Easy Transport",
    brochurePage: "Pages 07, 12 & 20",
    image: assetUrl("/assets/elevators/industrial.jpg"),
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
      overhead: "5100 mm clearance providing safe headroom for high freight loads and overhead crane access."
    },
    standardSpecs: {
      application: "Industrial warehouses, manufacturing facilities, logistics parks, shipping hubs",
      capacity: "500 to 4000 Kgs (High-tonnage custom engineering up to 10 tons)",
      ratedSpeed: "0.25 to 1.0 MPS",
      voltage: "415V, 3-Phase, 50 Hz",
      entrances: "1 (Single Way) or 2 (Double Way / Through Cabin Access)",
      carWidth: "1200 mm to 2000 mm (Dimension A - Freight Width)",
      carDepth: "1900 mm to 3000 mm (Dimension B - Freight Depth)",
      pitDepth: "1600 mm",
      overhead: "5100 mm",
      doorType: "Collapsible Landing Gate / Vertical Bi-Parting / Two-Panel Sliding",
      drive: "Heavy Duty Geared Traction Machine or Hydraulic Power Unit",
      control: "Heavy-duty Microprocessor Control with Electronic Overload Indicator",
      lighting: "Impact-resistant enclosed LED bulkhead lamps",
      rescueSystem: "Manual brake release lever + optional Automatic Rescue Device",
      monitoring: "Industrial Plant Telemetry Ready"
    },
    civilMatrix: [
      { persons: "-", capacity: 500, carW: 1200, carD: 1900, shaftW: 1600, shaftD: 2500, entrance: 1200, doorType: "Collapsible / Sliding", speed: "0.25 - 1.0", pit: 1600, overhead: 5100, machineRoom: "2500 × 4100" },
      { persons: "-", capacity: 1000, carW: 1500, carD: 1800, shaftW: 2300, shaftD: 2000, entrance: 1500, doorType: "Collapsible / Sliding", speed: "0.25 - 1.0", pit: 1600, overhead: 5100, machineRoom: "2500 × 4700" },
      { persons: "-", capacity: 1500, carW: 1700, carD: 2000, shaftW: 2600, shaftD: 2300, entrance: 1700, doorType: "Collapsible / Sliding", speed: "0.25 - 1.0", pit: 1600, overhead: 5100, machineRoom: "2600 × 4900" },
      { persons: "-", capacity: 2000, carW: 1700, carD: 2500, shaftW: 2600, shaftD: 2900, entrance: 1700, doorType: "Collapsible / Sliding", speed: "0.25 - 1.0", pit: 1600, overhead: 5100, machineRoom: "2600 × 5400" },
      { persons: "-", capacity: 3000, carW: 2000, carD: 3000, shaftW: 2900, shaftD: 3400, entrance: 2000, doorType: "Collapsible / Sliding", speed: "0.25 - 1.0", pit: 1600, overhead: 5100, machineRoom: "2900 × 5900" }
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
    name: "Car Elevator",
    category: "Automotive & Multi-Tier Parking",
    tagline: "The Most Reliable Parking Assistants",
    brochurePage: "Pages 07, 13 & 21",
    image: assetUrl("/assets/elevators/car-park.jpg"),
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
      capacity: "2500 to 5000 Kgs (Rated for full-sized SUVs and commercial vans)",
      ratedSpeed: "0.30 to 0.50 MPS",
      voltage: "415V, 3-Phase, 50 Hz",
      entrances: "1 (Single End) or 2 (Front-to-Back Drive-Through Option)",
      carWidth: "2500 mm (Platform Width)",
      carDepth: "5190 mm (Platform Depth)",
      pitDepth: "1600 mm",
      overhead: "4900 mm",
      doorType: "Automatic Center Opening (4-Panel) / Vertical Bi-Parting Steel Door",
      drive: "Heavy Duty Geared Traction or Hydraulic Power Unit",
      control: "Automotive Microprocessor Control with Driver In-Car Remote Calling",
      lighting: "High-intensity flush LED ceiling strip arrays with vehicle positioning guide lights",
      rescueSystem: "Automatic Rescue Device with battery pack landing recall",
      monitoring: "Smart Parking Telemetry Integration Ready"
    },
    civilMatrix: [
      { persons: "Car / LMV", capacity: 2500, carW: 2500, carD: 5190, shaftW: 4000, shaftD: 6000, entrance: 2500, doorType: "4-Panel Auto Center", speed: "0.30 / 0.50", pit: 1600, overhead: 4900, machineRoom: "3500 Kg Hoist Beam" },
      { persons: "SUV / Van", capacity: 3500, carW: 2600, carD: 5500, shaftW: 4200, shaftD: 6300, entrance: 2500, doorType: "4-Panel Auto Center", speed: "0.30 / 0.50", pit: 1600, overhead: 4900, machineRoom: "4500 Kg Hoist Beam" },
      { persons: "Heavy Comm.", capacity: 5000, carW: 2800, carD: 6000, shaftW: 4500, shaftD: 6800, entrance: 2700, doorType: "Vertical Bi-Parting", speed: "0.30 / 0.50", pit: 1600, overhead: 4900, machineRoom: "6000 Kg Hoist Beam" }
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
    name: "MRL Elevator",
    category: "Machine Roomless & Eco-Green",
    tagline: "Minimal Space, Maximum Value!",
    brochurePage: "Pages 08, 14 & 21",
    image: assetUrl("/assets/elevators/mrl.jpg"),
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
      capacity: "06 to 13 Persons (408 to 884 Kgs) / Up to 26 Persons (1768 Kgs)",
      ratedSpeed: "1.00 / 1.50 / 2.0 MPS",
      voltage: "415V, 3-Phase, 50 Hz",
      entrances: "1 or 2 (Front / Rear)",
      carWidth: "970 mm to 1620 mm (Dimension C - Cabin Width)",
      carDepth: "1130 mm to 2400 mm (Dimension D - Cabin Depth)",
      pitDepth: "1600 mm",
      overhead: "4900 mm to 5185 mm (Inspection window at terrace level)",
      doorType: "Automatic Center Opening / Telescopic Doors",
      drive: "New Generation Permanent Magnet Synchronous Gearless Traction",
      control: "MRL Gearless Integrated Controller inside door jamb (Zero penthouse room)",
      lighting: "Energy-efficient solid-state LED ceiling panels with automatic sleep mode",
      rescueSystem: "Automatic Rescue Device (ARD) with electrical brake release",
      monitoring: "24-Hour IoT Remote Telemetry Ready"
    },
    civilMatrix: [
      { persons: 6, capacity: 408, carW: 970, carD: 1130, shaftW: 1650, shaftD: 1600, entrance: 700, doorType: "Auto Center Opening", speed: "1.0 / 1.5 / 2.0", pit: 1600, overhead: 5185, machineRoom: "Zero (Inside Shaft)" },
      { persons: 8, capacity: 544, carW: 1120, carD: 1280, shaftW: 1850, shaftD: 1700, entrance: 800, doorType: "Auto Center Opening", speed: "1.0 / 1.5 / 2.0", pit: 1600, overhead: 5185, machineRoom: "Zero (Inside Shaft)" },
      { persons: 10, capacity: 680, carW: 1270, carD: 1380, shaftW: 2000, shaftD: 1850, entrance: 800, doorType: "Auto Center Opening", speed: "1.0 / 1.5 / 2.0", pit: 1600, overhead: 5185, machineRoom: "Zero (Inside Shaft)" },
      { persons: 13, capacity: 884, carW: 1070, carD: 2100, shaftW: 2100, shaftD: 2600, entrance: 800, doorType: "Auto Center Opening", speed: "1.0 / 1.5 / 2.0", pit: 1600, overhead: 5185, machineRoom: "Zero (Inside Shaft)" }
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
    category: "Luxury Residential & Private Villa",
    tagline: "Change Your Lifestyle with the Best Home Lift",
    brochurePage: "Pages 08, 15 & 22",
    image: assetUrl("/assets/elevators/private-villa.jpg"),
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
      carWidth: "800 mm to 850 mm (Dimension A - Cabin Width)",
      carDepth: "700 mm to 1150 mm (Dimension B - Cabin Depth)",
      pitDepth: "550 mm (Ultra-compact civil pit)",
      overhead: "3100 mm (Fits under standard residential ceiling)",
      doorType: "Manual Swing Door with Smoked Glass / Automatic Telescopic Sliding",
      drive: "Mini Gearless Machine (No machine room required)",
      control: "Touch Screen Landing Operating Panel with LCD Surface Mounted Display",
      lighting: "High Cabin Ceiling (2100mm) with LED Down Light / Rectangle Cover Light (CE-EDB-A30)",
      rescueSystem: "Integrated Battery-Powered Automatic Rescue Device (ARD)",
      monitoring: "Home Automation / Smart Villa Integration Ready"
    },
    civilMatrix: [
      { persons: 3, capacity: 204, carW: 810, carD: 700, shaftW: 1100, shaftD: 1200, entrance: 700, doorType: "Manual Door", speed: "0.30", pit: 550, overhead: 3100, machineRoom: "Zero (Inside Shaft)" },
      { persons: 4, capacity: 272, carW: 800, carD: 1200, shaftW: 1300, shaftD: 1400, entrance: 700, doorType: "Manual Door", speed: "0.30", pit: 550, overhead: 3100, machineRoom: "Zero (Inside Shaft)" },
      { persons: 3, capacity: 204, carW: 810, carD: 700, shaftW: 1250, shaftD: 1250, entrance: 700, doorType: "Auto Door", speed: "0.30", pit: 550, overhead: 3100, machineRoom: "Zero (Inside Shaft)" },
      { persons: 4, capacity: 272, carW: 850, carD: 1150, shaftW: 1300, shaftD: 1600, entrance: 700, doorType: "Auto Door", speed: "0.30", pit: 550, overhead: 3100, machineRoom: "Zero (Inside Shaft)" }
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
    brochurePage: "Pages 09, 16 & 22",
    image: assetUrl("/assets/elevators/hydraulic.jpg"),
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
      carWidth: "800 mm to 1500 mm (Dimension C - Cabin Width)",
      carDepth: "900 mm to 2500 mm (Dimension D - Cabin Depth)",
      pitDepth: "1200 mm (Roping type) / 1500 mm (Center bore type)",
      overhead: "3100 mm to 4000 mm",
      doorType: "Manual Swing Door / Collapsible Gate / Automatic Telescopic",
      drive: "Direct Central Acting / Indirect Side Acting 2:1 / Direct Side Acting Hydraulic Ram",
      control: "Integrated Hydraulic Microprocessor Controller with Soft Start/Stop Valve",
      lighting: "Recessed energy-efficient LED downlights with automatic idle turn-off",
      rescueSystem: "Emergency manual lowering valve (gravity-driven descent during power outage)",
      monitoring: "Hydraulic Pressure & Thermal Telemetry Ready"
    },
    civilMatrix: [
      { persons: 3, capacity: 225, carW: 800, carD: 900, shaftW: 1200, shaftD: 1200, entrance: 700, doorType: "Manual / Auto", speed: "0.30 - 0.50", pit: 1500, overhead: 4000, machineRoom: "Remote Pump (0-10m)" },
      { persons: 4, capacity: 300, carW: 850, carD: 1050, shaftW: 1250, shaftD: 1350, entrance: 700, doorType: "Manual / Auto", speed: "0.30 - 0.50", pit: 1500, overhead: 4000, machineRoom: "Remote Pump (0-10m)" },
      { persons: 6, capacity: 450, carW: 1100, carD: 1150, shaftW: 1500, shaftD: 1500, entrance: 800, doorType: "Manual / Auto", speed: "0.30 - 0.50", pit: 1500, overhead: 4000, machineRoom: "Remote Pump (0-10m)" },
      { persons: 8, capacity: 600, carW: 1100, carD: 1400, shaftW: 1500, shaftD: 1700, entrance: 800, doorType: "Manual / Auto", speed: "0.30 - 0.50", pit: 1500, overhead: 4000, machineRoom: "Remote Pump (0-10m)" },
      { persons: 10, capacity: 750, carW: 1200, carD: 1550, shaftW: 1600, shaftD: 1850, entrance: 800, doorType: "Manual / Auto", speed: "0.30 - 0.50", pit: 1500, overhead: 4000, machineRoom: "Remote Pump (0-10m)" }
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

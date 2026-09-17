export const productsData = [
  {
    id: "passenger",
    name: "Passenger Elevator",
    category: "Commercial & Residential",
    tagline: "Form, Function & Architectural Flexibility",
    brochurePage: 2,
    image: "/assets/elevators/building.jpg",
    summary: "Design-rich elevators engineered for low, mid & high-rise residential buildings and low & mid-rise commercial buildings. Built to enhance modern spaces with unmatched ride comfort and aesthetic luxury.",
    description: "The KRUPA Passenger Elevator line unifies architectural flexibility with futuristic technology. Offering customizable car, door and shaft dimensions, it delivers smooth travel, reliable operation, and energy efficiency for residential apartments, duplexes, corporate offices, and retail towers.",
    keySpecs: {
      "Application": "Low, mid & high-rise residential; low & mid-rise commercial",
      "Capacity": "4 to 26 Persons (272 to 1768 Kgs)",
      "Rated Speed": "0.63 to 2.0 MPS",
      "Drive System": "V3F Drive with Gearless / Geared Traction",
      "Levelling Accuracy": "±3 mm (Closed-loop vector control)",
      "Energy Efficiency": "Up to 30% reduction via PMS technology"
    },
    features: [
      "Architectural flexibility adapting to varied car, door and shaft dimensions",
      "Silky-smooth ride comfort with minimal vibration and noise (<50 dB)",
      "Modern interior finish options across hairline SS, titanium gold, and glass",
      "Energy-saving PMS gearless motor and smart idle LED auto-off",
      "Full safety ecosystem including Emergency Rescue Device (ARD) and CDL"
    ],
    doorOptions: ["Automatic SS Center Opening", "Telescopic Sliding Doors", "Glass Big Vision", "Manual Swing & Collapsible"],
    idealFor: ["Luxury Apartments", "Residential High-Rises", "Corporate Offices", "Shopping Complexes"]
  },
  {
    id: "home-elevator",
    name: "Home Elevator (Private Villa)",
    category: "Luxury & Private Residence",
    tagline: "Change Your Lifestyle with the Best Home Lift",
    brochurePage: 8,
    image: "/assets/elevators/private-villa.jpg",
    supplementaryImage: "/assets/generated/home-elevator.jpg",
    summary: "Compact, ultra-modern private elevators tailored for multi-storey houses, penthouses, luxury bungalows, and villas.",
    description: "Reputed manufacturing and customization that compliments your home architecture. Operates seamlessly on standard single-phase household electricity with minimal pit depth (550 mm) and overhead clearance (3100 mm).",
    keySpecs: {
      "Available Rated Speed": "0.30 / 0.63 MPS",
      "Max Travel Height": "12 Meters",
      "Available Rated Capacity": "204 to 272 Kgs",
      "Passengers": "3 to 4 Passengers",
      "Power Supply": "Single Phase 220V Domestic Electricity",
      "Pit & Overhead": "Compact Pit (550mm) / Compact Overhead (3100mm)",
      "Energy Saving": "Up to 40% energy savings compared to hydraulic lifts"
    },
    features: [
      "Runs on standard domestic single-phase power supply",
      "High car ceiling (2100mm) with optional electric fan and LED down-light / rectangle cover light",
      "Touch Screen Landing Operating Panel with LCD surface mount, plexiglass panel, and zinc alloy frame",
      "Smooth, noiseless, and vibration-free ride for elderly and family members",
      "Customizable to client interior decor with glass walls, titanium gold, and marble flooring",
      "Mini gearless machine requiring zero machine room"
    ],
    doorOptions: [
      "Manual Swing Door with Smoked Glass Panels",
      "Automatic Telescopic Sliding Doors",
      "Full Glass Elegant Framed Doors"
    ],
    idealFor: ["Private Bungalows", "Duplex Villas", "Penthouses", "Multi-Storey Family Houses"]
  },
  {
    id: "capsule",
    name: "Capsule Elevator (Commercial)",
    category: "Architectural & Luxury",
    tagline: "Panoramic Elegance & Smooth Operation",
    brochurePage: 6,
    image: "/assets/elevators/commercial.jpg",
    supplementaryImage: "/assets/generated/capsule-hero.jpg",
    summary: "Breathtaking architectural glass elevators designed with smooth operation and comfortable travel, turning every ride into a visual attraction.",
    description: "KRUPA Capsule Elevators serve as dynamic architectural centerpieces for upscale commercial centers, luxury hotels, and multiplexes. Features curved laminated safety glass, concealed stainless steel satin-finish fixings, and custom exterior geometries.",
    keySpecs: {
      "Available Rated Speed": "1.0, 1.5, 2.0 MPS",
      "Max Travel Height": "66 Meters",
      "Available Rated Capacity": "408 to 1088 Kgs",
      "Max Passengers": "06 to 16 Passengers",
      "Glazing Material": "Laminated Safety Glass (High Impact)",
      "Cab Platform": "Aluminum bulb plate all-over with lacquered traction angles"
    },
    features: [
      "Variety of geometric cabin forms: Rear Side, Semi Circle, 3-Side Cutting Edge, 5-Side Cutting Edge",
      "Options: Full Glass Capsule, 3-Side Glass with MS Powder Coated Car, 3-Side Square Glass, Round Glass Cabin",
      "Concealed stainless steel satin-finish structural fixing",
      "Integrated mood lighting and panoramic external glass shafts",
      "Lacquered crossarms, traction angles, and door drive mechanisms"
    ],
    doorOptions: ["Glass Center Opening", "Frameless Panoramic Glass Doors", "Stainless Steel Telescopic"],
    idealFor: ["Luxury Hotels", "Shopping Atriums", "Corporate Headquarters", "Multiplexes & Entertainment Centers"]
  },
  {
    id: "hospital",
    name: "Hospital Elevator",
    category: "Healthcare & Specialized",
    tagline: "Secure, Gentle & Noise-Free Bed Transit",
    brochurePage: 6,
    image: "/assets/elevators/hospital.jpg",
    summary: "KRUPA Hospital Bed Elevators are designed to contribute to the secure, sterile, and reliable ambience that modern healthcare facilities require.",
    description: "Engineered specifically for medical stretchers, ICU beds, patient trolleys, and medical teams. Features micro-level jerk-free stops, electromagnetic compatibility to avoid medical equipment interference, and dedicated emergency landing rescue.",
    keySpecs: {
      "Available Rated Speed": "0.63 / 1.0 MPS (options from 0.35 to 1.5 MPS)",
      "Max Travel Height": "66 Meters",
      "Available Rated Capacity": "1020 to 1768 Kgs",
      "Max Passengers": "15 to 26 Passengers",
      "Shaft Depth (Automatic)": "3000 mm (Car Depth 2400 mm for stretcher clearance)",
      "Control System": "Intellectual Control with Noise Reduction"
    },
    features: [
      "Stretcher and hospital bed accommodation (2400mm deep cabin)",
      "Intellectual Control with ultra-low acoustic footprint",
      "Electromagnetic Compatibility (EMC) safe for sensitive diagnostic devices",
      "Emergency landing device with prioritized medical emergency call function",
      "Sterile finish options: Stainless Steel hairline cabin, antibacterial chequered/PVC flooring",
      "Extended door hold time and sensitive multi-beam safety curtain"
    ],
    doorOptions: [
      "Collapsible Doors (1600mm clear width)",
      "Automatic Center Opening (800 - 1000mm)",
      "Automatic Telescopic Doors (800 - 1000mm)"
    ],
    idealFor: ["Hospitals & Trauma Centers", "Nursing Homes", "Surgical Centers", "Diagnostic Labs"]
  },
  {
    id: "goods",
    name: "Goods Elevator (Industrial)",
    category: "Industrial & Heavy Duty",
    tagline: "Bear Any Heavy Load with Ease",
    brochurePage: 7,
    image: "/assets/elevators/industrial.jpg",
    summary: "Heavy-duty vertical transportation systems engineered for easy, robust transit of freight, pallets, and industrial cargo up to 4000 kg.",
    description: "Built with reinforced steel cabins, high-torque heavy-duty traction machines, and millimeter-accurate leveling to ensure forklifts, pallet trucks, and trolleys roll in and out smoothly without jolts or thresholds.",
    keySpecs: {
      "Available Rated Speed": "0.50 / 0.70 MPS (0.25 to 1.0 MPS range)",
      "Max Travel Height": "66 Meters",
      "Available Rated Capacity": "500 to 4000 Kgs",
      "Pit Depth": "1600 mm",
      "Overhead (L)": "5100 mm",
      "Cabin Finish": "Heavy Duty Powder Coated Structural Steel"
    },
    features: [
      "Heavy duty traction machine capable of sustained industrial duty cycles",
      "Accurate leveling for seamless forklift, hand-truck, and trolley rollover",
      "Robust cabin floor: Heavy checkered plate steel or reinforced aluminum",
      "Multiple door access configurations: Single-way door, Double-way door (thru-car opening)",
      "Heavy-duty landing door options: Center Opening Automatic, Vertical Bi-Parting, Collapsible"
    ],
    doorOptions: [
      "Center Opening Automatic Landing Door (2500x2200 mm)",
      "Vertical Opening Automatic Landing Door (2500x2200 mm)",
      "Heavy-duty Collapsible Landing Door (2500x2350 mm)",
      "Two Panel Sliding Panel"
    ],
    idealFor: ["Manufacturing Plants", "Industrial Warehouses", "Logistics Hubs", "Departmental Stores & Supermarkets"]
  },
  {
    id: "car-elevators",
    name: "Car Elevator & Parking Systems",
    category: "Automotive & Parking",
    tagline: "The Most Reliable Parking Assistants",
    brochurePage: 7,
    image: "/assets/elevators/car-park.jpg",
    summary: "Specialized vertical transit for automobiles and LMVs in car parks, luxury multi-level residences, and automotive service centers.",
    description: "Engineered to hoist vehicles securely with high load ratings, two-sided drive-through doors, and durable non-slip checkered flooring. Krupa also provides integrated mechanical parking solutions including Puzzle Parking, Scissor Lifts, and Stacker Parking.",
    keySpecs: {
      "Available Rated Speed": "0.30 / 0.50 MPS",
      "Max Travel Height": "30 to 100 Meters (solutions available for higher travel)",
      "Available Rated Capacity": "2500 to 4000 Kgs (solutions up to 5000 Kgs)",
      "Cabin Size": "Accommodates full-size SUVs, Sedans & Light Commercial Vehicles",
      "Group Configuration": "Simplex / Multi-car Dispatch",
      "Flooring": "S.S. Checkered Plate / Aluminum Checkered Plate"
    },
    features: [
      "Two-side opening option allowing drive-in / drive-out without reversing",
      "Automatic and manual door opening options including Vertical Bi-Parting doors",
      "Ultra-rugged heavy duty traction machine built for high impact vehicle axle loads",
      "Integrated automated parking options: Car Puzzle Parking, Car Scissor Lift, Car Stacker Parking",
      "Photoelectric positioning sensors to verify car alignment inside cabin"
    ],
    doorOptions: ["Vertical Bi-Parting Door", "Heavy-Duty Multi-Panel Center Opening", "Industrial Collapsible Gates"],
    idealFor: ["Automobile Showrooms", "Commercial Multi-level Parking", "Luxury Residential Basements", "Service Stations"]
  },
  {
    id: "mrl",
    name: "MRL Elevator (Machine Roomless)",
    category: "Green Tech & Compact",
    tagline: "Minimal Space. Maximum Value!",
    brochurePage: 8,
    image: "/assets/pages/page-8.webp",
    summary: "Advanced machine-roomless elevator using permanent magnet synchronous (PMS) gearless traction technology, freeing up valuable building rooftop space.",
    description: "Reflecting KRUPA's commitment to green environmental protection and architectural freedom. Eliminates the traditional penthouse machine room by mounting the compact PMS gearless machine directly within the elevator shaft.",
    keySpecs: {
      "Available Rated Speed": "1.00, 1.50, 2.0 MPS",
      "Max Travel Height": "66 Meters",
      "Available Rated Capacity": "408 to 884 Kgs (expanded up to 1768 Kgs)",
      "Max Passengers": "06 to 13 Persons (up to 26 Persons)",
      "Space Savings": "Saves 25% of total equipment area; reduces 40% space occupation",
      "Energy Efficiency": "Saves 40% energy compared to conventional systems"
    },
    features: [
      "Eliminates penthouse machine room on roof, enabling cleaner architectural rooflines",
      "New generation permanent magnet synchronous gearless traction motor",
      "Whisper-quiet operation with minimal structural vibration",
      "Cuts building construction cost and saves 10% construction area",
      "Eco-friendly operation with zero oil contamination and lower thermal dissipation"
    ],
    doorOptions: ["Center Opening Automatic", "Telescopic Automatic", "Designer Architectural Doors"],
    idealFor: ["Modern Towers with Roof Amenities", "Architectural Landmarks", "Green-certified Buildings", "Hotels"]
  },
  {
    id: "hydraulic",
    name: "Hydraulic Elevator",
    category: "Low Rise Solutions",
    tagline: "Green Solutions for a Better Tomorrow",
    brochurePage: 9,
    image: "/assets/pages/page-9.webp",
    summary: "Compact hydraulic elevators for low-rise applications offering low fault rate, high carrying capacity, and zero energy usage in down direction.",
    description: "Krupa Hydraulic Elevators offer high adaptability for low-rise buildings (up to 15 meters travel). With no overhead machine room needed and counterweight eliminated, hoistway utilization is maximized while lowering structural costs.",
    keySpecs: {
      "Available Rated Speed": "0.30 MPS (up to 0.5 MPS)",
      "Max Travel Height": "15 Meters (4 to 5 stops)",
      "Available Rated Capacity": "225 to 1800 Kgs",
      "Passengers": "03 to 24 Passengers",
      "Shaft Depth": "1500 mm constructionally",
      "Last Floor Height": "3100 mm constructionally"
    },
    features: [
      "Machine room can be flexibly positioned up to 0.5–10m away from shaft (top machine room not required)",
      "Zero electric power required during downward travel — gravity assisted descent",
      "No counterweight required, maximizing hoistway internal cabin volume",
      "Wide loading range with maximum carrying capacity reaching up to 3 tons",
      "Suspension styles: Direct Central Acting, Indirect Side Acting 2:1, Direct Side Acting",
      "Low maintenance, highly durable piston and cylinder hydraulic drive"
    ],
    doorOptions: ["Manual Collapsible / Swing", "Automatic Center Opening", "Telescopic Doors"],
    idealFor: ["Low-Rise Residences", "Car Dealerships", "Industrial Ramps", "Historical Renovations"]
  },
  {
    id: "manual-doors",
    name: "Manual Doors Elevator",
    category: "Economic Solutions",
    tagline: "Cost-Effective, Robust & Reliable",
    brochurePage: 5,
    image: "/assets/pages/page-5.webp",
    summary: "Manual passenger elevators suited to all types of residential and commercial buildings depending upon shaft size, required speed, and client amenities.",
    description: "Engineered for maximum cost-effectiveness and durable mechanical performance. KRUPA Manual Door Elevators provide dependable vertical transit where shaft space or budget prioritizes manual operation without compromising on safety or ride smoothness.",
    keySpecs: {
      "Application": "Apartments, Industrial Buildings, Commercial Offices",
      "Rated Capacity": "340 to 884 Kgs (5 to 13 Persons)",
      "Rated Speed": "Up to 0.68 MPS",
      "Pit Depth": "1600 mm",
      "Overhead (K)": "4900 mm",
      "Door Construction": "Heavy gauge MS / SS with robust interlocking"
    },
    features: [
      "Multiple manual door styles: Collapsible, Imperforated, Manual Telescopic, Full Glass Swing",
      "High mechanical resilience with low ongoing maintenance overhead",
      "Flexible shaft dimensions fitting older or custom architectural layouts",
      "Electromechanical door interlocks preventing car movement unless firmly latched"
    ],
    doorOptions: [
      "Manual Collapsible Door",
      "Imperforated Door",
      "Manual Telescopic Door",
      "M.S. Powder Coated Frame Full Glass Swing Door",
      "Manual Swing Door"
    ],
    idealFor: ["Standard Apartment Buildings", "Industrial Warehouses", "Budget Commercial Centers", "Factory Offices"]
  },
  {
    id: "automatic-doors",
    name: "Automatic Doors Elevator",
    category: "Commercial & Residential",
    tagline: "Safety, Reliability & Rapid Cycling",
    brochurePage: 5,
    image: "/assets/pages/page-5.webp",
    summary: "High-speed, smooth-operating automatic door systems focused on the three core pillars: safety, reliability, and speed.",
    description: "KRUPA Automatic Door Elevators utilize advanced door operator headers (Center Opening Car & Landing Headers) with variable frequency speed control, ensuring whisper-quiet door operation, obstacle reopening, and high passenger throughput.",
    keySpecs: {
      "Application": "Modern Residential Towers, Hospitals, Corporate Malls",
      "Rated Capacity": "408 to 884 Kgs (6 to 13 Persons)",
      "Rated Speed": "Up to 1.5 MPS",
      "Pit Depth": "1600 mm",
      "Overhead (K)": "4900 mm",
      "Door Clearance (E)": "700 mm to 900 mm clear opening"
    },
    features: [
      "Center Opening and Telescopic 2-panel & 4-panel configurations",
      "Full-height infrared light curtain (curtain of light) ensuring passenger safety during entry",
      "Heavy-duty synchronous door operator mechanism for long service cycles",
      "Modern aesthetic finishes: Stainless Steel Hairline, Mirror, and Frameless Glass Vision"
    ],
    doorOptions: [
      "Glass Door (Big Vision)",
      "Small Vision Autodoor",
      "S.S. Center Opening Autodoor",
      "S.S. Telescopic Door",
      "Glass Door (Full Vision)",
      "Center Opening Autodoor (Four Panel)"
    ],
    idealFor: ["Busy Commercial Towers", "Premium Condominiums", "Shopping Malls", "Hotels"]
  }
];

// The 6 Elevator Applications requested by the user
export const elevatorApplications = [
  {
    id: "building",
    title: "Building (Residential & Commercial)",
    subtitle: "Apartment Towers & High-Rise Living",
    image: "/assets/elevators/building.jpg",
    capacity: "4 to 26 Persons (272 to 1768 Kgs)",
    speed: "0.63 - 2.0 MPS",
    description: "Engineered to enhance high-density residential and commercial towers with smooth rides, energy savings, and customizable hairline stainless steel and titanium finishes.",
    suitableFor: "Apartments, Condominiums, Corporate Offices, Mixed-Use Towers",
    highlights: ["PMS Traction Motor (30% Energy Savings)", "Full Height Light Curtain Safety", "Automatic ARD Emergency Rescue", "Closed-Loop Leveling (±3mm)"],
    doorTypes: ["Automatic S.S. Center Opening", "Telescopic Sliding Doors", "Glass Big Vision Doors"],
    productId: "passenger"
  },
  {
    id: "private-villa",
    title: "Private Villa (Luxury Home Lift)",
    subtitle: "Architectural Customization for Bungalows & Duplexes",
    image: "/assets/elevators/private-villa.jpg",
    capacity: "3 to 4 Persons (204 to 272 Kgs)",
    speed: "0.30 - 0.63 MPS",
    description: "Compact home lifts engineered with whisper-quiet gearless drive, running on single-phase 220V power with minimal 550mm pit and 3100mm overhead.",
    suitableFor: "Private Villas, Luxury Bungalows, Penthouse Duplexes, Multi-Storey Homes",
    highlights: ["Runs on Standard 220V Domestic Power", "Compact 550mm Pit & 3100mm Low Overhead", "LCD Touchscreen Surface LOP/COP", "Noiseless & Vibration-Free Operation"],
    doorTypes: ["Smoked Glass Swing Door", "Frameless Panoramic Glass Door", "Automatic Telescopic Door"],
    productId: "home-elevator"
  },
  {
    id: "commercial",
    title: "Commercial (Capsule Panoramic)",
    subtitle: "Iconic Architectural Glass Centers",
    image: "/assets/elevators/commercial.jpg",
    capacity: "6 to 16 Persons (408 to 1088 Kgs)",
    speed: "1.0 - 2.0 MPS",
    description: "Futuristic panoramic capsule lifts gliding along illuminated glass shafts, turning passenger transit into a luxury architectural centerpiece.",
    suitableFor: "Shopping Malls, Corporate Atriums, 5-Star Hotels, Multiplexes",
    highlights: ["Laminated High-Impact Curved Safety Glass", "Semi-Circle, 3-Side & 5-Side Cutting Edge Forms", "Integrated Ambient LED Illumination", "Concealed S.S. Satin Structural Fixings"],
    doorTypes: ["Full Vision Glass Center Opening", "Curved Glass Doors", "Stainless Steel Telescopic"],
    productId: "capsule"
  },
  {
    id: "hospital",
    title: "Hospital (Bed & Stretcher)",
    subtitle: "Healthcare, ICU & Clinical Mobility",
    image: "/assets/elevators/hospital.jpg",
    capacity: "15 to 26 Persons (1020 to 1768 Kgs)",
    speed: "0.63 - 1.0 MPS",
    description: "Designed specifically for hospital beds, stretchers, and emergency medical personnel. Features extra-deep 2400mm cabin clearance and jerk-free travel.",
    suitableFor: "Multi-Speciality Hospitals, Trauma Centers, Surgical Clinics, Diagnostic Hubs",
    highlights: ["Extra-Deep 2400mm Cabin for ICU Beds", "Electromagnetic Compatibility (EMC Safe)", "Sterile Stainless Steel & Anti-Bacterial Floors", "Priority Emergency Medical Code Calling"],
    doorTypes: ["Wide Collapsible Gates (1600mm)", "Automatic Center Opening (800-1000mm)", "Automatic Telescopic"],
    productId: "hospital"
  },
  {
    id: "industrial",
    title: "Industrial (Heavy Duty Goods)",
    subtitle: "Warehouse, Factory & Cargo Freight",
    image: "/assets/elevators/industrial.jpg",
    capacity: "500 to 4000 Kgs (Pallets & Forklifts)",
    speed: "0.25 - 1.0 MPS",
    description: "Heavy-duty freight elevators built with reinforced steel cabins, high-torque traction machines, and flush floor leveling for forklifts and pallet trucks.",
    suitableFor: "Industrial Warehouses, Manufacturing Plants, Logistics Hubs, Distribution Centers",
    highlights: ["Heavy-Duty Steel Checker Plate Floor", "Thru-Car Double-Way Front & Rear Opening", "Heavy-Duty Bi-Parting Steel Landing Gates", "High-Impact Axle Load Resistance"],
    doorTypes: ["Vertical Bi-Parting Steel Doors", "Center Opening Automatic (2500x2200mm)", "Heavy Collapsible Landing Gates"],
    productId: "goods"
  },
  {
    id: "car-park",
    title: "Car Park (Automotive & Parking)",
    subtitle: "Vehicle Elevators & Smart Puzzle Parking",
    image: "/assets/elevators/car-park.jpg",
    capacity: "2500 to 4000 Kgs (SUVs & Light Commercial)",
    speed: "0.30 - 0.50 MPS",
    description: "Specialized vehicle lifts for multi-level parking garages, car dealerships, and basement parking, integrated with puzzle and scissor stacker parking systems.",
    suitableFor: "Automotive Showrooms, Multi-Tier Commercial Parking, Luxury Basements",
    highlights: ["Drive-Through Two-Side Opening (No Reversing)", "Non-Slip Checkered Stainless Steel Plate Floor", "Car Puzzle Parking & Scissor Lift Integration", "Vehicle Photoelectric Alignment Sensors"],
    doorTypes: ["Vertical Bi-Parting Gate", "Heavy-Duty 4-Panel Automatic", "Industrial Gates"],
    productId: "car-elevators"
  }
];

export const doorSystemsData = [
  {
    category: "Manual Door Systems",
    subtitle: "Economical, robust and dependable for custom shafts",
    items: [
      { name: "Manual Collapsible Door", desc: "Heavy-duty steel trellis gate providing maximum clear entrance in compact shaft widths." },
      { name: "Imperforated Door", desc: "Solid interlocking vertical steel slats offering enhanced passenger protection and acoustic damping." },
      { name: "Manual Telescopic Door", desc: "Multi-leaf manual sliding panel maximizing entrance clearance without swing arc." },
      { name: "M.S. Powder Coated Full Glass Swing Door", desc: "Architectural steel frame with tempered safety vision glass and hydraulic soft-closing hinge." },
      { name: "Manual Swing Door", desc: "Single-leaf flush architectural door with vision panel and heavy electromechanical interlock." }
    ]
  },
  {
    category: "Automatic Door Systems",
    subtitle: "Whisper-quiet VVVF operator headers focusing on safety, reliability and speed",
    items: [
      { name: "S.S. Center Opening Autodoor", desc: "Two synchronized panels parting from the center for rapid boarding and modern aesthetic." },
      { name: "S.S. Telescopic Door", desc: "Two or three panels sliding in one direction, ideal for narrower hoistways requiring wide openings." },
      { name: "Glass Door (Big Vision)", desc: "Framed laminated glass leaves providing panoramic views of the hoistway and landing hall." },
      { name: "Glass Door (Full Vision)", desc: "Frameless high-transparency tempered glass panels delivering maximum architectural elegance." },
      { name: "Center Opening Autodoor (Four Panel)", desc: "Four leaves opening simultaneously from center for wide commercial and hospital entrances." },
      { name: "Vertical Bi-Parting Doors", desc: "Heavy industrial counter-balanced doors opening vertically upward and downward for goods & car lifts." }
    ]
  }
];

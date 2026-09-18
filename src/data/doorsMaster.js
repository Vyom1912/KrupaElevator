import { assetUrl } from "../utils/assetPath";

export const manualDoors = [
  {
    id: "collapsible",
    name: "Manual Collapsible Door",
    category: "manual",
    brochurePage: 5,
    tagline: "Classic Economic Security",
    image: assetUrl("/assets/doors/auto-ss-door.jpg"),
    drawing: assetUrl("/assets/drawings/manual_door_opening_details.png"),
    summary: "Heavy-duty lattice steel collapsible gate engineered for space-constrained residential and industrial hoistways.",
    description: "The Manual Collapsible Door offers an economical and robust barrier solution suited for residential apartment buildings and factory cargo hoists. Manufactured with high-tensile steel vertical channels and interconnected lattice bars, it allows full visual transparency while requiring minimal shaft landing footprint.",
    specs: {
      standardOpening: "700 mm to 1200 mm Clear Width",
      standardHeight: "2000 mm Finished Entrance Height",
      material: "High-Tensile Cold Rolled Steel / Stainless Steel",
      finish: "Anti-corrosive primer, synthetic enamel, or powder-coated finish",
      operation: "Manual horizontal sliding lattice action with positive mechanical interlock",
      sill: "Recessed heavy-gauge bottom guide track"
    },
    applications: ["Residential Apartments", "Industrial Goods Lifts", "Low-Rise Commercial Buildings"],
    compatibleElevators: ["manual-doors", "goods", "home-elevator", "hydraulic"]
  },
  {
    id: "imperforated",
    name: "Manual Imperforated Door",
    category: "manual",
    brochurePage: 5,
    tagline: "Solid Steel Privacy & Safety",
    image: assetUrl("/assets/doors/auto-ss-door.jpg"),
    drawing: assetUrl("/assets/drawings/manual_door_drawing.png"),
    summary: "Solid interlocking steel sheet folding door providing complete visual containment and enhanced protection.",
    description: "Unlike collapsible lattice gates, the Imperforated Door features solid interlocking steel leaves that prevent hands or objects from passing through the landing opening during elevator movement. Ideal for buildings with children or dusty industrial facilities requiring dust barrier containment.",
    specs: {
      standardOpening: "700 mm to 1000 mm Clear Width",
      standardHeight: "2000 mm Finished Entrance Height",
      material: "Pressed Sheet Steel (1.6 mm thickness)",
      finish: "Industrial grade powder coating (custom RAL colors)",
      operation: "Multi-leaf folding sliding action with top roller suspension",
      visionPanel: "Optional wire-reinforced narrow vision strip"
    },
    applications: ["Factories & Warehouses", "Mid-Rise Residential", "Workshops & Commercial"],
    compatibleElevators: ["manual-doors", "goods", "hydraulic"]
  },
  {
    id: "telescopic-perforated",
    name: "Manual Telescopic Door (Perforated)",
    category: "manual",
    brochurePage: 5,
    tagline: "Two-Panel Sliding Ventilation",
    image: assetUrl("/assets/doors/auto-ss-door.jpg"),
    drawing: assetUrl("/assets/drawings/manual_door_plan.png"),
    summary: "Two-panel manual sliding telescopic door with micro-perforated ventilation matrix.",
    description: "Engineered for buildings requiring natural airflow and partial visibility through the shaft. The two panels slide telescopically into a compact recess pocket, maximizing clear door opening width in narrow shafts.",
    specs: {
      standardOpening: "700 mm to 900 mm Clear Width",
      standardHeight: "2000 mm Finished Entrance Height",
      material: "Heavy-Gauge Mild Steel with Perforated Mesh Inserts",
      finish: "Durable epoxy powder coated warm beige or ivory",
      operation: "Two-speed telescopic manual sliding on nylon ball-bearing rollers"
    },
    applications: ["Low-Rise Residential", "Offices", "Commercial Establishments"],
    compatibleElevators: ["manual-doors", "home-elevator"]
  },
  {
    id: "powder-coated-glass-swing",
    name: "M.S. Powder-Coated Frame Full Glass Swing Door",
    category: "manual",
    brochurePage: 5,
    tagline: "Contemporary Transparency",
    image: assetUrl("/assets/doors/panoramic-glass-door.jpg"),
    drawing: assetUrl("/assets/drawings/home_drawing.png"),
    summary: "Elegant swing door with slim powder-coated steel frame and expansive clear safety glass.",
    description: "Designed for premium private bungalows, villas, and boutique offices where owners prefer a residential entrance feel. Features hydraulic door closers for smooth, self-closing action without slamming.",
    specs: {
      standardOpening: "700 mm to 800 mm Clear Width",
      standardHeight: "2000 mm to 2100 mm Finished Entrance Height",
      material: "Precision MS Box Section Frame with Toughened Float Glass",
      finish: "Architectural satin powder coat (Grey, White, Champagne)",
      glass: "10 mm toughened clear or smoked safety glass",
      closure: "Heavy-duty overhead hydraulic concealed closer"
    },
    applications: ["Private Villas & Bungalows", "Executive Offices", "Boutique Showrooms"],
    compatibleElevators: ["home-elevator", "hydraulic", "manual-doors"]
  },
  {
    id: "telescopic-solid",
    name: "Manual Telescopic Door (Solid Two-Tone)",
    category: "manual",
    brochurePage: 5,
    tagline: "Clean Architectural Sliding",
    image: assetUrl("/assets/doors/auto-ss-door.jpg"),
    drawing: assetUrl("/assets/drawings/manual_door_elevation.png"),
    summary: "Two-panel solid sliding door featuring elegant contrast borders and concealed finger pulls.",
    description: "Offers a streamlined, modern aesthetic that mimics automatic doors while operating with low-maintenance manual reliability. Ideal for residential societies seeking upgraded aesthetics at economical costs.",
    specs: {
      standardOpening: "700 mm to 900 mm Clear Width",
      standardHeight: "2000 mm Finished Entrance Height",
      material: "1.6 mm sheet steel with internal stiffeners",
      finish: "Two-tone electrostatic powder coating with stainless steel pull handles",
      locking: "Electro-mechanical safety interlock with emergency release key"
    },
    applications: ["Residential Complexes", "Commercial Offices", "Hospitals"],
    compatibleElevators: ["manual-doors", "passenger"]
  },
  {
    id: "manual-swing",
    name: "Manual Swing Door (Single Panel)",
    category: "manual",
    brochurePage: 5,
    tagline: "Robust Flush Construction",
    image: assetUrl("/assets/doors/auto-ss-door.jpg"),
    drawing: assetUrl("/assets/drawings/manual_door_drawing.png"),
    summary: "Heavy-duty flush steel swing door with rectangular vision panel and hydraulic speed check.",
    description: "Standard flush manual swing door built with double steel skins and mineral wool sound insulation. Features a certified fire-rated rectangular vision glass insert and magnetic door hold-open options.",
    specs: {
      standardOpening: "700 mm to 900 mm Clear Width",
      standardHeight: "2000 mm Finished Entrance Height",
      material: "Double-skinned galvanized steel with honeycomb/rockwool infill",
      finish: "Oven-baked polyurethane finish in corporate grey or custom shade",
      visionPanel: "150 × 600 mm wired fire-resistant glass",
      hardware: "Stainless steel pull handle, push plate, and heavy-duty hinges"
    },
    applications: ["Apartments", "Commercial Buildings", "Hospitals"],
    compatibleElevators: ["manual-doors", "hospital", "goods"]
  }
];

export const automaticDoors = [
  {
    id: "glass-big-vision",
    name: "Glass Door (Big Vision)",
    category: "automatic",
    brochurePage: 5,
    tagline: "Expansive Architectural Visibility",
    image: assetUrl("/assets/doors/panoramic-glass-door.jpg"),
    drawing: assetUrl("/assets/drawings/capsule_technical_drawing.png"),
    summary: "Automatic center-opening doors with oversized tempered glass panels framed in hairline stainless steel.",
    description: "Creates an open, luminous entrance experience for modern commercial atriums, shopping malls, and premium residential towers. The big vision glass panels maximize natural light and allow clear line of sight into the hoistway.",
    specs: {
      standardOpening: "800 mm to 1100 mm Clear Width",
      standardHeight: "2000 mm to 2200 mm Finished Height",
      material: "Hairline SS 304 frame with 10 mm laminated safety glass",
      drive: "VVVF microprocessor frequency conversion operator",
      cycleSpeed: "0.3 to 0.6 m/s adjustable opening & closing speed",
      safety: "Full-height infrared multi-beam curtain sensor"
    },
    applications: ["Commercial Centers", "Capsule Elevators", "Corporate HQs", "Shopping Malls"],
    compatibleElevators: ["capsule", "passenger", "mrl"]
  },
  {
    id: "small-vision-autodoor",
    name: "Small Vision Autodoor",
    category: "automatic",
    brochurePage: 5,
    tagline: "Balanced Privacy & Visibility",
    image: assetUrl("/assets/doors/auto-ss-door.jpg"),
    drawing: assetUrl("/assets/drawings/auto_door_drawing.png"),
    summary: "Stainless steel automatic doors featuring integrated vertical vision slits with beveled glass.",
    description: "Perfect for corporate offices, medical centers, and residential towers where passenger privacy is desired while allowing exterior waiting passengers to see cabin occupancy and interior illumination.",
    specs: {
      standardOpening: "700 mm to 1000 mm Clear Width",
      standardHeight: "2000 mm Finished Entrance Height",
      material: "1.5 mm Stainless Steel 304 Hairline / Etched",
      visionPanels: "Dual 100 × 400 mm safety glass observation ports",
      drive: "Permanent magnet synchronous synchronous belt drive operator",
      noise: "Ultra-quiet operation below 48 dB"
    },
    applications: ["Hospitals", "Office Buildings", "Residential Apartments"],
    compatibleElevators: ["passenger", "hospital", "mrl"]
  },
  {
    id: "ss-center-opening",
    name: "S.S. Center-Opening Autodoor (2-Panel)",
    category: "automatic",
    brochurePage: 5,
    tagline: "High-Traffic Commercial Benchmark",
    image: assetUrl("/assets/doors/auto-ss-door.jpg"),
    drawing: assetUrl("/assets/drawings/auto_door_plan.png"),
    summary: "The global benchmark for passenger elevators: two panels parting symmetrically from the center.",
    description: "Provides the fastest passenger boarding and alighting cycling times. As both panels open simultaneously in opposite directions, entrance transit time is cut by 40% compared to side-slide doors.",
    specs: {
      standardOpening: "700, 800, 900, 1000, 1100 mm Clear Width",
      standardHeight: "2000 mm or 2100 mm Finished Height",
      material: "Stainless Steel AISI 304 Hairline or Mirror Finish",
      doorOperator: "VVVF closed-loop vector controlled direct drive",
      fireRating: "Compliant with IS 14665 & BS 476 part 22 fire resistance"
    },
    applications: ["Residential Towers", "Commercial Offices", "Hotels", "IT Parks"],
    compatibleElevators: ["passenger", "mrl", "hospital", "car-elevators"]
  },
  {
    id: "ss-telescopic",
    name: "S.S. Telescopic Door (Side Opening)",
    category: "automatic",
    brochurePage: 5,
    tagline: "Narrow Hoistway Optimizer",
    image: assetUrl("/assets/doors/auto-ss-door.jpg"),
    drawing: assetUrl("/assets/drawings/auto_door_elevation.png"),
    summary: "Two-panel side-opening telescopic doors engineered to achieve maximum entrance width in narrow shafts.",
    description: "When shaft width is limited, center-opening doors cannot fully open. The two-panel telescopic design slides both panels to one side at proportional speeds, enabling wide stretcher and wheelchair clearances.",
    specs: {
      standardOpening: "700 mm to 1000 mm Clear Width",
      standardHeight: "2000 mm Finished Entrance Height",
      material: "Stainless Steel 304 / M.S. Powder Coated",
      mechanism: "2:1 differential cable / belt speed synchronization",
      sill: "Heavy extruded aluminum or bronze alloy guide sill"
    },
    applications: ["Retrofit Buildings", "Narrow Shaft Apartments", "Medical Clinics"],
    compatibleElevators: ["passenger", "hospital", "home-elevator", "mrl"]
  },
  {
    id: "glass-full-vision",
    name: "Glass Door (Full Vision)",
    category: "automatic",
    brochurePage: 5,
    tagline: "Frameless Minimalist Luxury",
    image: assetUrl("/assets/doors/panoramic-glass-door.jpg"),
    drawing: assetUrl("/assets/drawings/capsule_drawings.png"),
    summary: "Frameless panoramic glass doors with frosted aesthetic patterns and concealed clamp hardware.",
    description: "Engineered specifically for capsule elevators and luxury atrium installations. The clear glass leaves feature decorative laser etching or ceramic frit patterns with concealed overhead track mounting.",
    specs: {
      standardOpening: "800 mm to 1200 mm Clear Width",
      standardHeight: "2100 mm to 2400 mm Architectural Height",
      material: "12 mm Toughened Laminated Clear Glass",
      hardware: "Precision CNC milled stainless steel point fixings & clamp shoes",
      safety: "3D Light curtain + ultrasonic obstacle detection"
    },
    applications: ["Luxury Shopping Malls", "Hotel Atriums", "Penthouse Elevators"],
    compatibleElevators: ["capsule", "passenger", "mrl"]
  },
  {
    id: "center-opening-4panel",
    name: "Center-Opening Autodoor (Four Panel)",
    category: "automatic",
    brochurePage: 5,
    tagline: "Extra-Wide Industrial & Vehicle Access",
    image: assetUrl("/assets/doors/auto-ss-door.jpg"),
    drawing: assetUrl("/assets/drawings/car_elevator_drawing.png"),
    summary: "Four-panel center-opening doors for wide freight, hospital trauma, and automotive elevator hoistways.",
    description: "Two pairs of telescopic panels part from the center to provide ultra-wide entrances (up to 2500 mm). Enables effortless loading of hospital stretchers, industrial forklifts, and passenger automobiles.",
    specs: {
      standardOpening: "1200 mm to 2500 mm Clear Width",
      standardHeight: "2000 mm to 2400 mm Finished Height",
      material: "Reinforced 1.6 mm Cold Rolled Steel or SS 304",
      drive: "Heavy-duty dual-belt VVVF industrial door operator",
      sillReinforcement: "Reinforced structural steel sill rated for forklift crossing"
    },
    applications: ["Hospital Bed Transit", "Car Elevators", "Industrial Freight Hoists"],
    compatibleElevators: ["hospital", "goods", "car-elevators"]
  },
  {
    id: "door-operator-headers",
    name: "Door Operator System (Headers & Landing Tracks)",
    category: "automatic",
    brochurePage: 5,
    tagline: "Precision Synchronous Driving Engine",
    image: assetUrl("/assets/doors/auto-ss-door.jpg"),
    drawing: assetUrl("/assets/drawings/auto_door_drawing.png"),
    summary: "Car Door Header & Landing Door Header assembly with permanent magnet brushless motor.",
    description: "The mechanical heart of Krupa's automatic door systems. The car door header drives the landing door clutches synchronously via closed-loop encoder feedback, adjusting speed curves automatically based on door weight and wind resistance.",
    specs: {
      headerTypes: "Center Opening 2 Panel Car Header & Landing Header",
      motor: "Permanent Magnet Brushless Synchronous Direct Drive",
      transmission: "High-strength polyurethane synchronous timing belt",
      control: "Integrated microprocessor driver with self-learning door travel stroke",
      endurance: "Rated for 3,000,000 continuous door cycles"
    },
    applications: ["Universal fit for all Krupa Automatic Door installations"],
    compatibleElevators: ["passenger", "capsule", "hospital", "mrl", "car-elevators"]
  },
  {
    id: "vertical-bi-parting",
    name: "Vertical Bi-Parting Door (Goods & Car Lifts)",
    category: "automatic",
    brochurePage: 7,
    tagline: "Heavy Industrial Counterbalanced Action",
    image: assetUrl("/assets/doors/auto-ss-door.jpg"),
    drawing: assetUrl("/assets/drawings/goods_doors_drawing.png"),
    summary: "Vertical counterbalanced bi-parting steel doors that open upward and downward within the shaft.",
    description: "Designed for freight and car elevators where horizontal door sliding is constrained by wall width. The top leaf rises while the bottom leaf descends to flush with the sill, creating a rugged drive-over threshold for trucks and cars.",
    specs: {
      standardOpening: "1800 mm to 3000 mm Clear Width",
      standardHeight: "2000 mm to 3000 mm Clear Height",
      material: "Reinforced structural steel channel frame with 2.0 mm steel plate",
      operation: "Electric motor driven or manual counterbalanced with safety interlocks",
      sillCapacity: "Rated up to 5,000 kg wheel loads"
    },
    applications: ["Industrial Warehouses", "Car Parking Elevators", "Logistics Hubs"],
    compatibleElevators: ["goods", "car-elevators"]
  }
];

export const allDoors = [...manualDoors, ...automaticDoors];

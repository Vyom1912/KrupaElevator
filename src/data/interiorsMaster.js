import { assetUrl } from "../utils/assetPath";

export const interiorCategories = [
  { id: "all", label: "All Cabin Collections" },
  { id: "basic", label: "Basic Series" },
  { id: "standard", label: "Standard Series" },
  { id: "semi", label: "Semi Series" },
  { id: "design", label: "Design Series" },
  { id: "premium", label: "Premium Series" },
];

export const rawInteriorSeries = [
  {
    id: "kec-01",
    model: "KEC-01",
    series: "Basic Series",
    categoryKey: "basic",
    brochurePage: 3,
    image: assetUrl("/assets/interiors/kec-01.jpg"),
    description: "Crisp, minimalist stainless steel cabin interior with full rear mirror, optimized for everyday residential elegance and durability.",
    specs: {
      ceiling: "S.S. Ceiling with Integrated LED Lighting",
      cop: "S.S. Wall Mounted Panel with Luminous Square Button & Digital Floor Positioning Indicator",
      carWall: "S.S. Hairline Finish with Back-Side Full Width Mirror",
      flooring: "Durable Industrial PVC Flooring",
      carDoor: "Stainless Steel Hairline Finish",
      handrail: "Stainless Steel Straight Cylindrical Grab Bar",
      ventilation: "Axial Low-Noise Fan Grill",
      illumination: "4x Square Warm LED Recessed Downlights (12W)",
      mirrorSpec: "5mm Distortion-Free Float Silver Mirror",
      materials: "Stainless Steel AISI 304 Hairline, Float Glass, PVC Sheet"
    },
    highlights: ["Sleek hairline stainless steel", "Full rear mirror amplifies space", "Luminous LED digital COP indicator"]
  },
  {
    id: "kec-02",
    model: "KEC-02",
    series: "Standard Series",
    categoryKey: "standard",
    brochurePage: 3,
    image: assetUrl("/assets/interiors/kec-02.jpg"),
    description: "Enhanced standard design featuring blower fan cooling and half rear mirror, ideal for mid-rise apartments and busy office environments.",
    specs: {
      ceiling: "S.S. Ceiling with LED Light & Built-in Blower Fan",
      cop: "S.S. Wall Mounted Panel with Luminous Button (Square) & Digital Positioning Indicator",
      carWall: "Stainless Steel Finish with Back-Side Half Mirror",
      flooring: "Heavy Duty PVC Flooring",
      carDoor: "Stainless Steel Finish",
      handrail: "Stainless Steel Ergonomic Center Handrail",
      ventilation: "Centrifugal High-Flow Blower Fan (250 m³/h)",
      illumination: "Circular Recessed LED Downlights (3000K Warm White)",
      mirrorSpec: "Half-Height Safety Backed Mirror with Handrail Clearance",
      materials: "S.S. Hairline Finish, Aluminum Fan Housing, PVC Compound"
    },
    highlights: ["High-flow built-in blower fan", "Ergonomic half mirror with handrail clearance", "Scratch-resistant SS finish"]
  },
  {
    id: "kec-03",
    model: "KEC-03",
    series: "Semi Series",
    categoryKey: "semi",
    brochurePage: 3,
    image: assetUrl("/assets/interiors/kec-03.jpg"),
    description: "Rich gold accents and titanium gold mirror finishes paired with marble-look flooring for luxury entrances.",
    specs: {
      ceiling: "Gold Finish Ceiling with Warm LED Illumination",
      cop: "S.S. Wall Mounted Panel with Luminous Square Buttons & Digital Indicator",
      carWall: "Titanium Gold Stainless Steel & Titanium Gold Mirror Stainless Steel",
      flooring: "PVC Marble Finish Flooring with Gold Veining",
      carDoor: "Stainless Steel Titanium Gold Finish",
      handrail: "Polished Titanium Gold Tubular Handrail",
      ventilation: "Concealed Perimeter Aerodynamic Vents",
      illumination: "Geometric Backlit Gold Ceiling Cove + LED Spotlights",
      mirrorSpec: "Titanium Gold PVD Coated Mirror Accent Insets",
      materials: "Titanium Gold PVD Coated Stainless Steel, Marble Composite PVC"
    },
    highlights: ["Titanium gold mirror stainless steel", "Warm ambient lighting", "Classic marble-effect flooring"]
  },
  {
    id: "kec-04",
    model: "KEC-04",
    series: "Semi Series",
    categoryKey: "semi",
    brochurePage: 4,
    image: assetUrl("/assets/interiors/kec-04.jpg"),
    description: "Exquisite rose gold hairline panels matched with mirror titanium SS and luminescent micalex ceiling lighting.",
    specs: {
      ceiling: "Mirror Stainless Steel, Luminescent Micalex LED System",
      cop: "S.S. Wall Mounted Panel with Luminous Button (Square) & Digital Indicator",
      carWall: "Rose Gold Hairline Stainless Steel & Titanium Mirror Stainless Steel",
      flooring: "Standard PVC (Optional Italian Marble Inlay)",
      carDoor: "Stainless Steel Hairline Finish",
      handrail: "Rose Gold Anodized Aluminum / SS Grab Handle",
      ventilation: "Ultra-Quiet Cross-Flow Blower Unit",
      illumination: "Luminescent Micalex Diffuser with Multi-Point Perimeter LEDs",
      mirrorSpec: "Rose Gold Titanium Polished Mirror with Laser Etched Borders",
      materials: "Rose Gold Titanium SS, Micalex Optical Diffuser, PVC / Marble"
    },
    highlights: ["Rose Gold hairline finish", "Luminescent micalex ceiling", "Artistic etching pattern options"]
  },
  {
    id: "kec-05",
    model: "KEC-05",
    series: "Semi Series",
    categoryKey: "semi",
    brochurePage: 4,
    image: assetUrl("/assets/interiors/kec-05.jpg"),
    description: "Warm imitation bronze stainless steel paired with a four-sided continuous perimeter LED lamp belt.",
    specs: {
      ceiling: "Four-Side Perimeter LED Light with Imitation Bronze SS Lamp Belt",
      cop: "S.S. Wall Mounted Panel with Luminous Button & Digital Indicator",
      carWall: "Imitation Bronze SS on Both Sides with Decorative Back Wall Art",
      flooring: "Standard PVC (Optional Natural Granite / Marble)",
      carDoor: "Stainless Steel Bronze Finish",
      handrail: "Antique Bronze Patina Finish Handrail",
      ventilation: "Low-Vibration Continuous Air Exchanger",
      illumination: "360-Degree Continuous Warm LED Perimeter Belt (2700K)",
      mirrorSpec: "Sculpted 3D Bronze Relief Rear Wall Inset",
      materials: "Imitation Bronze Chemically Colored SS, LED Diffusers"
    },
    highlights: ["Imitation Bronze warmth", "Perimeter LED lamp belt", "Bespoke rear wall decorative inserts"]
  },
  {
    id: "kec-06",
    model: "KEC-06",
    series: "Design Series",
    categoryKey: "design",
    brochurePage: 4,
    image: assetUrl("/assets/interiors/kec-06.jpg"),
    description: "Contemporary designer stainless steel with dual-side architectural strip lighting and full designer mirror wall.",
    specs: {
      ceiling: "Designer Stainless Steel Ceiling with Two-Side Linear LED Lighting",
      cop: "S.S. Wall Mounted Panel with Luminous Button & Digital Indicator",
      carWall: "Stainless Steel Designer Back Wall Mirror with Laser Cutouts",
      flooring: "Standard PVC (Optional Marble)",
      carDoor: "Stainless Steel Designer Pattern",
      handrail: "Dual-Tier Hairline Stainless Steel Railing",
      ventilation: "Direct Hoistway Filtered Air Intake",
      illumination: "Dual Continuous Architectural Linear Light Bars (4000K Neutral)",
      mirrorSpec: "Laser-Patterned Etched Mirror with Backlight Reflections",
      materials: "Precision Laser Cut Stainless Steel, Tempered Etched Mirror"
    },
    highlights: ["Two-side linear LED lighting", "Designer etched mirror wall", "Modern architectural aesthetic"]
  },
  {
    id: "kec-07",
    model: "KEC-07",
    series: "Design Series",
    categoryKey: "design",
    brochurePage: 4,
    image: assetUrl("/assets/interiors/kec-07.jpg"),
    description: "Clean, robust powder-coated mild steel cabin with round LED fixtures and full-width stainless steel handle.",
    specs: {
      ceiling: "M.S. Powder Coated with Recessed LED Lights",
      cop: "Integrated S.S. Panel with Digital Display",
      carWall: "M.S. Powder Coated in Custom Architectural Shades",
      handrail: "Stainless Steel Round Ergonomic Handle",
      carDoor: "M.S. Powder Coated Finish",
      ventilation: "High Efficiency Quiet Flow Fan",
      illumination: "6x Recessed Energy-Saving LED Downlights",
      mirrorSpec: "Anti-Glare Tempered Glass Accents",
      materials: "Heavy-Gauge Powder-Coated Mild Steel, SS 304 Hardware"
    },
    highlights: ["Custom powder coated palette", "Durable impact resistance", "Clean minimalist lighting"]
  },
  {
    id: "kec-08",
    model: "KEC-08",
    series: "Design Series",
    categoryKey: "design",
    brochurePage: 4,
    image: assetUrl("/assets/interiors/kec-08.jpg"),
    description: "Stainless steel designer ceiling with four-side round LED downlights and vertical strip styling with rear mirror.",
    specs: {
      ceiling: "Stainless Steel Designer with Four Side Round LED Lights",
      cop: "S.S. Wall Mounted Panel with Luminous Button (Square) & Digital Indicator",
      carWall: "Stainless Steel Strip Designer Panels with Back Side Mirror",
      flooring: "Standard PVC (Optional Natural Marble)",
      carDoor: "Stainless Steel Designer Pattern",
      handrail: "Stainless Steel Curved Contour Railing",
      ventilation: "Integrated Ceiling Air Induction Vent",
      illumination: "Four-Side Round LED Perimeter Array (16 Light Points)",
      mirrorSpec: "Center Column Mirror with Frosted Laser Etch Motifs",
      materials: "Mirror & Hairline Stainless Steel, LED Optical Lenses"
    },
    highlights: ["Four-side round LED ceiling array", "Strip designer panels", "Multiple etching motifs available"]
  },
  {
    id: "kec-09",
    model: "KEC-09",
    series: "Premium Series",
    categoryKey: "premium",
    brochurePage: 4,
    image: assetUrl("/assets/interiors/kec-09.jpg"),
    description: "Opulent gold decorated stainless steel with six-side multi-angle LED ceiling illumination for premier developments.",
    specs: {
      ceiling: "Gold Decoration Stainless Steel with Six-Side LED Lighting",
      cop: "S.S. Wall Mounted Panel with Luminous Button & Digital Indicator",
      carWall: "Gold Decoration Stainless Steel Panels",
      flooring: "Standard PVC (Optional Italian Marble)",
      carDoor: "Gold Decoration Stainless Steel",
      handrail: "Solid Brass & Gold Mirror Composite Handrail",
      ventilation: "Acoustically Insulated Forced Air Ventilation",
      illumination: "Six-Point Hexagonal Faceted LED Chandelier Array",
      mirrorSpec: "Gold Mirror PVD Coated Back Wall with Filigree Detailing",
      materials: "Gold PVD Coated 304 Stainless Steel, Crystal Clear Optics"
    },
    highlights: ["Six-side multi-angle LED lighting", "Polished gold decorative surfaces", "Ultra-luxurious hospitality appeal"]
  },
  {
    id: "kec-10",
    model: "KEC-10",
    series: "Premium Series",
    categoryKey: "premium",
    brochurePage: 4,
    image: assetUrl("/assets/interiors/kec-10.jpg"),
    description: "Flagship luxury featuring titanium gold mirror designer panels with acoustic acrylic LED ceiling and ornate marble floors.",
    specs: {
      ceiling: "Titanium Gold Mirror Designer S.S. & Translucent Acrylic LED Light",
      cop: "S.S. Wall Mounted Panel with Luminous Button & Digital Indicator",
      carWall: "Titanium Gold Mirror Designer Stainless Steel with Back Wall Mirror",
      flooring: "Standard PVC (Optional Polished Geometric Marble)",
      carDoor: "Titanium Gold Designer",
      handrail: "Heavy-Gauge Ergonomic Gold Oval Profile Handrail",
      ventilation: "Concealed Dual-Speed Blower",
      illumination: "Full Acrylic Backlit Sky Panel with Titanium Gold Lattice",
      mirrorSpec: "Full-Height Titanium Gold Mirror with Hand-Polished Beveled Edge",
      materials: "Titanium Gold Mirror Sheet, Optical Grade Acrylic, Marble"
    },
    highlights: ["Translucent acrylic light diffusion", "Titanium gold mirror finish", "Signature penthouse centerpiece"]
  },
  {
    id: "kec-11",
    model: "KEC-11",
    series: "Premium Series",
    categoryKey: "premium",
    brochurePage: 4,
    image: assetUrl("/assets/interiors/kec-11.jpg"),
    description: "Hybrid craftsmanship combining powder-coated mild steel, acrylic top diffuser, hairline SS, and half mirror glass.",
    specs: {
      ceiling: "M.S. Powder Coated, Acrylic on Top with LED Light",
      cop: "Integrated S.S. Control Panel",
      carWall: "M.S. Powder Coated, S.S. Hairline Insets, Half Mirror Glass",
      handrail: "S.S. Ergonomic Grab Handle",
      carDoor: "M.S. Powder Coated with S.S. Insets",
      ventilation: "Whisper-Quiet Blower Assembly",
      illumination: "Frosted Acrylic Top Canopy with Diffused Warm LED Output",
      mirrorSpec: "Half-Height Safety Mirror with Stainless Steel Boundary",
      materials: "Dual-Tone MS Powder Coat, SS 304 Accents, Acrylic Diffuser"
    },
    highlights: ["Dual-tone material synergy", "Acrylic top ambient ceiling", "Half-mirror glass with SS grab bar"]
  }
];

export const interiorSeries = rawInteriorSeries;

export const etchingPatterns = [
  { code: "AG 129", name: "Geometric Arabesque", finish: "Titanium Gold Etched" },
  { code: "AG 179", name: "Floral Damask", finish: "Rose Gold Mirror Etched" },
  { code: "AG 155", name: "Modern Chevron Grid", finish: "Gold Mirror Etched" },
  { code: "AG 117", name: "Linear Wave Deco", finish: "Stainless Steel Frosted" },
  { code: "AG 102", name: "Organic Mandala", finish: "Titanium Black Etched" },
  { code: "AG 112", name: "Diamond Tessellation", finish: "Mirror Stainless Steel" },
  { code: "AG 108", name: "Concentric Circles", finish: "Hairline Multi-Tone" }
];

export const operatingPanels = [
  {
    code: "KE-COP-LOP: 001",
    type: "Cabin & Landing Operating Panel",
    display: "Dot Matrix LED & Luminous Push Button",
    finish: "Hairline Stainless Steel with Black Glass Accent",
    features: "Braille numbering, fire recall key, overload buzzer, fan/light controls"
  },
  {
    code: "KE-COP-LOP: 002",
    type: "Cabin & Landing Operating Panel",
    display: "Segmented Red Digital Indicator & Micro-Motion Button",
    finish: "Mirror Stainless Steel with Anti-Fingerprint Coating",
    features: "Ultra-slim surface mount, emergency alarm, intercom talk button"
  },
  {
    code: "KE-COP-LOP: 003",
    type: "Cabin & Landing Operating Panel",
    display: "Amber High-Contrast LED Display with Tactile Square Buttons",
    finish: "Titanium Gold PVD Finish with Polished Chamfered Edges",
    features: "Designed for premium residential villas and executive suites"
  },
  {
    code: "KE-COP-LOP: 004",
    type: "Full Height Column COP",
    display: "Full Color TFT Multimedia Screen with Live Floor & Video Feed",
    finish: "Black Tempered Glass Panel with Capacitive Touch Sensors",
    features: "Touchless wave-to-call, voice announcement, advertising display"
  },
  {
    code: "KE-COP-LOP: 005",
    type: "Minimalist Slimline Panel",
    display: "Vertical Scroll Cyan LED Floor Indicator",
    finish: "Brushed Aluminum Alloy with Soft-Glow Blue Backlight",
    features: "Compact footprint for narrow door frames and private home lifts"
  },
  {
    code: "KE-COP-LOP: 006",
    type: "Heavy-Duty Industrial Panel",
    display: "Extra-Large Jumbo Digital Display with Vandal-Resistant Buttons",
    finish: "Heavy 2.5 mm Stainless Steel Plate with Tamper-Proof Fasteners",
    features: "Waterproof IP54 rated for freight and hospital stretcher transit"
  }
];

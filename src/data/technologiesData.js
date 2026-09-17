export const technologiesData = {
  tractionMachines: {
    title: "Energy Efficient PMS Traction Machine",
    brochurePage: 3,
    claim: "Consumes up to 30% less energy than conventional geared machines",
    summary: "Our green, environment-friendly Permanent Magnet Synchronous (PMS) traction machine is a compact, reliable, gearless machine delivering superior energy efficiency, near-silent operation, and minimal thermal dissipation.",
    comparison: [
      {
        feature: "Energy Consumption",
        gearless: "Up to 30% Lower (High-Efficiency Permanent Magnets)",
        geared: "Higher Baseline (Mechanical transmission loss)"
      },
      {
        feature: "Machine Room Need",
        gearless: "Optional / Machine-Roomless (MRL compatible)",
        geared: "Requires Dedicated Penthouse Machine Room"
      },
      {
        feature: "Lubrication & Oil",
        gearless: "100% Gear Oil Free (Zero leakage risk, eco-clean)",
        geared: "Requires Periodic Gearbox Oil Changes"
      },
      {
        feature: "Acoustic Noise",
        gearless: "Whisper-quiet (<50 dB inside shaft)",
        geared: "Audible mechanical gear meshing noise"
      },
      {
        feature: "Maintenance Life",
        gearless: "Extended life cycle, low friction wear",
        geared: "Worm gear wear requires routine backlash checks"
      }
    ],
    models: [
      { name: "M67 Geared Machine", type: "Geared", desc: "Heavy-duty helical/worm gearing for standard installations." },
      { name: "M76 Geared Machine", type: "Geared", desc: "High-torque geared machine for robust commercial capacities." },
      { name: "I-127 Gearless Machine", type: "Gearless PMS", desc: "Compact permanent magnet synchronous machine for high speed and MRL." }
    ]
  },
  inverter: {
    title: "Energy Efficient Inverter (V3F Drive)",
    subtitle: "Specially Engineered with German Know-How",
    brochurePage: 3,
    summary: "The high-performance Variable Voltage Variable Frequency (V3F) inverter increases energy efficiency and makes KRUPA elevators truly eco-friendly. Built with precision German engineering to deliver ultra-smooth acceleration and millimeter-level floor stopping accuracy.",
    benefits: [
      "Smooth S-curve acceleration and deceleration profiles eliminate jerks",
      "Power factor correction lowering electrical peak demand spikes",
      "Dynamic regenerative braking support feeding energy back to grid",
      "Integrated motor thermal protection and overload safety algorithms"
    ]
  },
  lighting: {
    title: "Long-Lasting Eco LED Lighting",
    brochurePage: 3,
    claim: "LED lights consume up to 50% less energy compared to fluorescent tubes",
    summary: "KRUPA cabin ceilings incorporate solid-state LED illumination offering 6x longer operational life than traditional fluorescent lighting. An automated intelligent sleep mode detects passenger absence and switches off cabin lights and fans automatically, saving valuable power.",
    highlights: [
      "50% less energy usage than fluorescent lighting fixtures",
      "6x longer lifespan, reducing maintenance bulb replacements",
      "Smart automatic shut-off when elevator is idle between calls",
      "Multiple color temperatures: 3000K warm luxury to 6000K crisp daylight"
    ]
  },
  safetySystems: [
    {
      id: "cdl",
      title: "Inbuilt CDL (Car Door Lock)",
      icon: "ShieldAlert",
      desc: "Automatically locks the car doors when the elevator is stuck between floors, preventing hazardous manual door forcing from passengers inside."
    },
    {
      id: "curtain",
      title: "Full Height Door Sensors",
      icon: "Maximize2",
      desc: "An infrared curtain of light spanning the entire door height protects passengers, pets, and children from door impact during boarding and exit."
    },
    {
      id: "erd",
      title: "Emergency Rescue Device (ARD/ERD)",
      icon: "BatteryCharging",
      desc: "Optional automatic rescue device powered by battery packs. During power grid failures, it automatically drives the cabin to the nearest floor and opens the doors safely."
    },
    {
      id: "interfaces",
      title: "Smart User Interfaces",
      icon: "Accessibility",
      desc: "Touchless call buttons for germ-free operation, voice synthesizers, high-contrast displays, and Braille indicators for visually challenged passengers."
    },
    {
      id: "brake",
      title: "Automatic Brake Inspection",
      icon: "CheckCircle2",
      desc: "Automated daily brake test routine checks brake holding torque and air gap clearance every day to guarantee smooth, fail-safe deceleration."
    },
    {
      id: "hoisting",
      title: "Reliable & Safe Hoisting System",
      icon: "Anchor",
      desc: "Proven high-tensile steel wire ropes and robust sheaves engineered for maximum safety factor, simplified inspection, and vibration damping."
    },
    {
      id: "leveling",
      title: "Accurate Levelling System",
      icon: "SlidersHorizontal",
      desc: "Closed-loop vector drive continuously calculates cabin inertia, guaranteeing flush ±3mm floor leveling that eliminates tripping risks."
    }
  ],
  controllers: [
    {
      name: "Microprocessor Integrated Controller",
      desc: "Consolidates logic control and frequency drive into a single smart motherboard, dramatically reducing wiring complexity and potential fault points.",
      features: ["32-bit CPU processing", "CAN-bus serial communication", "Real-time fault diagnostic logging"]
    },
    {
      name: "Automatic Rescue Device (ARD Cabinet)",
      desc: "Autonomous battery-backed inverter cabinet that detects utility blackouts instantly, guiding the lift smoothly to the closest landing.",
      features: ["Maintenance-free sealed batteries", "Automatic smart trickle charging", "Overcharge protection"]
    },
    {
      name: "MRL Gearless Integrated Controller",
      desc: "Ultra-slim cabinet designed for wall mounting in the hoistway or door frame, completely eliminating the need for a control room.",
      features: ["Space-saving slim enclosure", "Emergency handbrake release lever", "Diagnostic LCD handheld portal"]
    }
  ],
  copLop: {
    title: "COP & LOP Operating Panels",
    brochurePage: 9,
    summary: "KRUPA ELEVATORS features a wide variety of car operating panels (COP) and landing operating panels (LOP) engineered with great flexibility for specialized architectural construction.",
    models: [
      { id: "KE-COP-LOP:001", type: "Full Height Column", finish: "Hairline SS", display: "Dot Matrix LED Indicator", buttons: "Micro-stroke Round Illuminated" },
      { id: "KE-COP-LOP:002", type: "Slim Wall Mounted", finish: "Mirror Stainless Steel", display: "High-Contrast Red Segment", buttons: "Square Touchless Luminous" },
      { id: "KE-COP-LOP:003", type: "Luxury Column", finish: "Titanium Black Finish", display: "Color TFT Multimedia Display", buttons: "Vandal-Resistant SS Button" },
      { id: "KE-COP-LOP:004", type: "Multi-Floor Commercial", finish: "Brushed Satin SS", display: "Vertical LCD Display Effect", buttons: "Dual Dual-Illuminated Array" },
      { id: "KE-COP-LOP:005", type: "Modern Cylindrical Profile", finish: "Titanium Gold", display: "Horizontal LCD Display Effect", buttons: "Capacitive Touch Glass" },
      { id: "KE-COP-LOP:006", type: "Compact Residential", finish: "Stainless Steel Hairline", display: "BVT 605 Calling Box Indicator", buttons: "Braille Luminous Tactile" }
    ],
    displayTypes: [
      { name: "Horizontal Display Effect", desc: "Wide angle LCD showing floor, direction, time, weather and building notices." },
      { name: "Vertical Display Effect", desc: "Tall dynamic LCD with live floor progress animation and emergency instructions." },
      { name: "BVT 605 Calling Box", desc: "High-visibility surface or flush-mounted landing indicator with illuminated direction arrows." },
      { name: "Display of Calling Box", desc: "Architectural wall fixture with integrated arrival gong and position readout." }
    ]
  }
};

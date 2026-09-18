/**
 * elevatorSingleTables.js
 * 
 * Provides EXACTLY ONE comprehensive engineering table for each elevator model,
 * strictly matching Krupa Elevators brochure pages 18-22 (IS 14665 standards).
 * Contains ALL rows and configurations in a single unified table without filters,
 * tabs, or toggles.
 */

export function getElevatorSingleTable(elevatorId) {
  switch (elevatorId) {
    case "passenger":
      return {
        title: "Passenger Elevator — Full Hoistway Dimensions & Specifications",
        subtitle: "Complete matrix covering both Automatic Center-Opening and Manual Door Passenger Elevator installations.",
        legend: {
          A: "Platform Edge – width (car platform)",
          B: "Platform Edge – depth (car platform)",
          C: "Lift-Well In-Side Finished – width",
          D: "Lift-Well In-Side Finished – depth",
          E: "Entrance Width",
          K: "Machine Room – width",
          L: "Machine Room – length",
        },
        notes: [
          "All Dimensions are in mm.",
          "All hoist way walls should be minimum 230 mm brick or 150 mm R.C.C.",
          "Standard engineering specifications per IS 14665. Custom dimensions available upon technical consultation."
        ],
        columns: [
          { key: "doorSystem", label: "Door System" },
          { key: "persons", label: "Persons" },
          { key: "loadKg", label: "Load (Kg)" },
          { key: "carSize", label: "Car Platform A × B (mm)" },
          { key: "shaftSize", label: "Lift-Well C × D (mm)" },
          { key: "entrance", label: "Entrance E (mm)" },
          { key: "doorType", label: "Door Type" },
          { key: "machineRoom", label: "Machine Room K × L (mm)" },
          { key: "speed", label: "Speed (mps)" },
          { key: "pit", label: "Pit (mm)" },
          { key: "overhead", label: "Overhead (mm)" },
        ],
        rows: [
          // Automatic Door installations (Brochure Page 19)
          { doorSystem: "Automatic Door", persons: 6, loadKg: 408, carSize: "1200 × 1300", shaftSize: "1700 × 1800", entrance: 700, doorType: "Auto Center Opening", machineRoom: "300+C+300 × 600+D+1500", speed: "Up to 1.5", pit: 1600, overhead: 4900 },
          { doorSystem: "Automatic Door", persons: 8, loadKg: 544, carSize: "1500 × 1330", shaftSize: "2000 × 1800", entrance: 800, doorType: "Auto Center Opening", machineRoom: "300+C+300 × 600+D+1500", speed: "Up to 1.5", pit: 1600, overhead: 4900 },
          { doorSystem: "Automatic Door", persons: 10, loadKg: 680, carSize: "1650 × 1450", shaftSize: "2150 × 2000", entrance: 800, doorType: "Auto Center Opening", machineRoom: "600+C+600 × 600+D+1500", speed: "Up to 1.5", pit: 1600, overhead: 4900 },
          { doorSystem: "Automatic Door", persons: 13, loadKg: 884, carSize: "1900 × 1500", shaftSize: "2400 × 2000", entrance: 800, doorType: "Auto Center Opening", machineRoom: "600+C+600 × 600+D+1500", speed: "Up to 1.5", pit: 1600, overhead: 4900 },
          { doorSystem: "Automatic Door", persons: 16, loadKg: 1088, carSize: "1900 × 1800", shaftSize: "2400 × 2300", entrance: 1000, doorType: "Auto Center Opening", machineRoom: "600+C+600 × 600+D+1500", speed: "Up to 1.5", pit: 1600, overhead: 4900 },
          { doorSystem: "Automatic Door", persons: 20, loadKg: 1360, carSize: "1900 × 2250", shaftSize: "2400 × 2750", entrance: 1000, doorType: "Auto Center Opening", machineRoom: "600+C+600 × 600+D+1500", speed: "Up to 1.5", pit: 1600, overhead: 4900 },
          // Manual Door installations (Brochure Page 18)
          { doorSystem: "Manual Door", persons: 5, loadKg: 340, carSize: "950 × 1300", shaftSize: "1350 × 1650", entrance: 760, doorType: "Collapsible Gate", machineRoom: "300+C+300 × 600+D+1500", speed: "Up to 0.68", pit: 1600, overhead: 4900 },
          { doorSystem: "Manual Door", persons: 5, loadKg: 340, carSize: "1300 × 1000", shaftSize: "1700 × 1300", entrance: 760, doorType: "Swing Door", machineRoom: "300+C+300 × 600+D+1500", speed: "Up to 0.68", pit: 1600, overhead: 4900 },
          { doorSystem: "Manual Door", persons: 6, loadKg: 408, carSize: "1200 × 1000", shaftSize: "1600 × 1500", entrance: 800, doorType: "Imperforate Gate", machineRoom: "300+C+300 × 600+D+1500", speed: "Up to 0.68", pit: 1600, overhead: 4900 },
          { doorSystem: "Manual Door", persons: 8, loadKg: 544, carSize: "1500 × 1200", shaftSize: "1900 × 1500", entrance: 800, doorType: "Collapsible / Swing", machineRoom: "300+C+300 × 600+D+1500", speed: "Up to 0.68", pit: 1600, overhead: 4900 },
          { doorSystem: "Manual Door", persons: 13, loadKg: 884, carSize: "1900 × 1500", shaftSize: "2400 × 1850", entrance: 900, doorType: "Collapsible / Swing", machineRoom: "600+C+600 × 300+D+1500", speed: "Up to 0.68", pit: 1600, overhead: 4900 },
          { doorSystem: "Manual Door", persons: 16, loadKg: 1088, carSize: "1900 × 1800", shaftSize: "2400 × 2150", entrance: 1000, doorType: "Collapsible / Swing", machineRoom: "600+C+600 × 300+D+1500", speed: "Up to 0.68", pit: 1600, overhead: 4900 },
          { doorSystem: "Manual Door", persons: 20, loadKg: 1360, carSize: "1900 × 2250", shaftSize: "2400 × 2600", entrance: 1000, doorType: "Collapsible / Swing", machineRoom: "600+C+600 × 300+D+1500", speed: "Up to 0.68", pit: 1600, overhead: 4900 },
        ]
      };

    case "capsule":
      return {
        title: "Capsule Panoramic Elevator — Space Requirements (Option A & Option B)",
        subtitle: "Complete dimension matrix combining both Circular/Semi-Circular (Option A) and Polygon Cutting-Edge (Option B) architectural geometries.",
        legend: {
          A: "Car Inside – width (A)",
          B: "Car Inside – depth (B)",
          J: "Car Inside – arc curvature point (J)",
          G: "Car Inside – side chamfer offset (G)",
          C: "Left Well – hoistway width (C)",
          D: "Left Well – hoistway depth (D)",
          F: "Left Well – rear wall width (F)",
          H: "Left Well – front projection depth (H)",
          E: "Entrance clear width",
        },
        notes: [
          "All Dimensions are in mm.",
          "Option A: Curved Semi-Circle / Full Circular panoramic glass structure.",
          "Option B: Square / 3-Side & 5-Side Cutting Edge polygon glass structure.",
          "All hoist way walls should be minimum 230 mm brick or 150 mm R.C.C."
        ],
        columns: [
          { key: "option", label: "Geometry Option" },
          { key: "person", label: "Persons" },
          { key: "kgs", label: "Capacity (Kg)" },
          { key: "carA", label: "Car Inside A (mm)" },
          { key: "carB", label: "Car Inside B (mm)" },
          { key: "carJ", label: "Arc J (mm)" },
          { key: "carG", label: "Offset G (mm)" },
          { key: "wellC", label: "Left Well C (mm)" },
          { key: "wellD", label: "Left Well D (mm)" },
          { key: "wellF", label: "Rear Wall F (mm)" },
          { key: "wellH", label: "Front Bow H (mm)" },
          { key: "entrance", label: "Entrance E (mm)" },
        ],
        rows: [
          // Option A (Circular)
          { option: "Option A (Circular)", person: 10, kgs: 680, carA: 1100, carB: 1300, carJ: 1400, carG: 650, wellC: 2200, wellD: 1325, wellF: 1330, wellH: 800, entrance: 800 },
          { option: "Option A (Circular)", person: 13, kgs: 884, carA: 1200, carB: 1400, carJ: 1550, carG: 700, wellC: 2400, wellD: 1425, wellF: 1430, wellH: 900, entrance: 900 },
          { option: "Option A (Circular)", person: 16, kgs: 1088, carA: 1300, carB: 1500, carJ: 1700, carG: 750, wellC: 2800, wellD: 1530, wellF: 1530, wellH: 1000, entrance: 1000 },
          // Option B (Polygon)
          { option: "Option B (Polygon)", person: 10, kgs: 680, carA: 1250, carB: 1300, carJ: "—", carG: 250, wellC: 2200, wellD: 1450, wellF: 1480, wellH: 580, entrance: 800 },
          { option: "Option B (Polygon)", person: 13, kgs: 884, carA: 1400, carB: 1400, carJ: "—", carG: 300, wellC: 2400, wellD: 1550, wellF: 1630, wellH: 650, entrance: 900 },
          { option: "Option B (Polygon)", person: 16, kgs: 1088, carA: 1550, carB: 1500, carJ: "—", carG: 350, wellC: 2800, wellD: 1780, wellF: 1650, wellH: 790, entrance: 1000 },
        ]
      };

    case "hospital":
      return {
        title: "Hospital Bed & Stretcher Elevator — Space Requirements",
        subtitle: "Unified dimensions for Manual Stretcher, Automatic Centre Opening, and Automatic Telescopic entrances.",
        legend: {
          A: "Shaft / Lift-Well Width",
          B: "Shaft / Lift-Well Depth",
          C: "Car / Cabin Interior Width",
          D: "Car / Cabin Interior Depth",
          E: "Entrance Clear Opening Width",
        },
        notes: [
          "All Dimensions are in mm.",
          "Bed & Stretcher Clearance: 2400 mm interior cabin depth allows unhindered hospital bed, stretcher & medical trolley transport.",
          "All hoist way walls should be minimum 230 mm brick or 150 mm R.C.C."
        ],
        columns: [
          { key: "config", label: "Door Operation & Type" },
          { key: "person", label: "Persons" },
          { key: "capacityKg", label: "Capacity (Kg)" },
          { key: "carSize", label: "Car Inside C × D (mm)" },
          { key: "shaftSize", label: "Shaft Inside A × B (mm)" },
          { key: "entrance", label: "Entrance E (mm)" },
          { key: "speed", label: "Speed (mps)" },
          { key: "pit", label: "Pit Depth (mm)" },
          { key: "overhead", label: "Overhead (mm)" },
        ],
        rows: [
          { config: "Manual Stretcher (Collapsible)", person: "8 To 16", capacityKg: "544 To 1088", carSize: "1200 × 2300", shaftSize: "1900 × 2400", entrance: "1600 (Collapsible)", speed: "0.3 To 0.5", pit: 1600, overhead: 5100 },
          { config: "Auto Centre Opening Door", person: 15, capacityKg: 1020, carSize: "1000 × 1700", shaftSize: "1900 × 2300", entrance: 800, speed: "0.63 / 1.0", pit: 1600, overhead: 5100 },
          { config: "Auto Centre Opening Door", person: 20, capacityKg: 1360, carSize: "1300 × 2000", shaftSize: "2300 × 3000", entrance: 900, speed: "0.63 / 1.0", pit: 1600, overhead: 5100 },
          { config: "Auto Centre Opening Door", person: 26, capacityKg: 1768, carSize: "1600 × 2400", shaftSize: "2600 × 3000", entrance: 1000, speed: "0.63 / 1.0", pit: 1600, overhead: 5100 },
          { config: "Auto Telescopic Door", person: 15, capacityKg: 1020, carSize: "1000 × 2400", shaftSize: "1700 × 3000", entrance: 800, speed: "0.63 / 1.0", pit: 1600, overhead: 5100 },
          { config: "Auto Telescopic Door", person: 20, capacityKg: 1360, carSize: "1300 × 2400", shaftSize: "1950 × 3000", entrance: 900, speed: "0.63 / 1.0", pit: 1600, overhead: 5100 },
          { config: "Auto Telescopic Door", person: 26, capacityKg: 1768, carSize: "1600 × 2400", shaftSize: "2100 × 3000", entrance: 1000, speed: "0.63 / 1.0", pit: 1600, overhead: 5100 },
        ]
      };

    case "goods":
      return {
        title: "Goods Freight Elevator — Space Requirements",
        subtitle: "Heavy-duty industrial cargo elevator dimensions for warehouse and factory material handling.",
        legend: {
          A: "Car-Inside Width (A)",
          B: "Car-Inside Depth (B)",
          C: "Lift-Well Width (C)",
          D: "Lift-Well Depth (D)",
          K: "Machine Room Width (K)",
          L: "Machine Room Length (L)",
        },
        notes: [
          "All Dimensions are in mm.",
          "Heavy-duty industrial construction engineered for pallet trucks and forklift loading.",
          "Available rated speed: 0.25 To 1.0 mps. Max travel height: 66 meters.",
          "All hoist way walls should be minimum 230 mm brick or 150 mm R.C.C."
        ],
        columns: [
          { key: "loadKg", label: "Rated Load (Kg)" },
          { key: "carSize", label: "Car Inside A × B (mm)" },
          { key: "shaftSize", label: "Lift-Well C × D (mm)" },
          { key: "entrance", label: "Entrance Width (mm)" },
          { key: "machineRoom", label: "Machine Room K × L (mm)" },
          { key: "speed", label: "Speed (mps)" },
          { key: "pit", label: "Pit Depth (mm)" },
          { key: "overhead", label: "Overhead (mm)" }
        ],
        rows: [
          { loadKg: 500, carSize: "1500 × 1200", shaftSize: "1900 × 1600", entrance: 2100, machineRoom: "2600 × 1600", speed: "0.25 To 1.0", pit: 1600, overhead: 5100 },
          { loadKg: 1000, carSize: "1500 × 1800", shaftSize: "2000 × 1800", entrance: 2100, machineRoom: "2600 × 1600", speed: "0.25 To 1.0", pit: 1600, overhead: 5100 },
          { loadKg: 1500, carSize: "1700 × 2000", shaftSize: "2600 × 2300", entrance: 2100, machineRoom: "2600 × 1600", speed: "0.25 To 1.0", pit: 1600, overhead: 5100 },
          { loadKg: 2000, carSize: "1700 × 2500", shaftSize: "2600 × 2300", entrance: 2100, machineRoom: "2600 × 1600", speed: "0.25 To 1.0", pit: 1600, overhead: 5100 },
          { loadKg: 2500, carSize: "2000 × 2500", shaftSize: "2900 × 2700", entrance: 2100, machineRoom: "2600 × 1600", speed: "0.25 To 1.0", pit: 1600, overhead: 5400 },
          { loadKg: 3000, carSize: "2000 × 3000", shaftSize: "2900 × 3400", entrance: 2700, machineRoom: "2900 × 1600", speed: "0.25 To 1.0", pit: 1600, overhead: 5400 },
        ]
      };

    case "car":
      return {
        title: "Car Elevator & Multi-Level Automotive Parking Systems",
        subtitle: "Structural engineering parameters for automobile lifts, parking stackers, and heavy vehicle platforms.",
        legend: {
          A: "Finish Hoist Way Width",
          B: "Finish Hoist Way Depth",
          C: "Car Inside Width",
          D: "Car Inside Depth",
          E: "Landing Entrance Width & Height"
        },
        notes: [
          "All Dimensions are in mm.",
          "3 Nos - Load Hook (3 Ton Capacity) Client Scope Refer Details in Inspection Window at Terrace Level.",
          "Holding Beam Capacity: 3500 Kg."
        ],
        columns: [
          { key: "parameter", label: "Engineering Parameter" },
          { key: "value", label: "Specification / Dimension" },
          { key: "notes", label: "Technical Notes" },
        ],
        rows: [
          { parameter: "Finish Hoist Way (A × B)", value: "4000 mm × 6000 mm", notes: "Full structural shaft clear dimensions for passenger cars and SUVs" },
          { parameter: "Car Inside Platform (C × D)", value: "2500 mm × 5190 mm", notes: "Generous car interior between bumper rub rails" },
          { parameter: "Landing Entrance (E)", value: "2500 mm (W) × 2200 mm (H)", notes: "Two-side drive-thru front/rear door opening" },
          { parameter: "Rated Capacity / Load", value: "2500 to 5000 Kg", notes: "Custom solutions available for heavier commercial fleets" },
          { parameter: "Rated Speed", value: "0.30 to 0.50 mps", notes: "Smooth V3F drive vector acceleration" },
          { parameter: "Max. Travel Height", value: "Up to 100 Meters", notes: "Multi-level puzzle parking & commercial parking towers" },
          { parameter: "Hoisting Beam Capacity", value: "3500 Kg", notes: "Mounted in overhead machine room" },
          { parameter: "Safety Equipment", value: "Bi-directional Safety Gear", notes: "Heavy-duty buffer springs with oil dampening" },
        ]
      };

    case "mrl":
      return {
        title: "MRL (Machine Room-Less) Elevator — Space Requirements",
        subtitle: "Full engineering dimensions for gearless permanent magnet traction MRL elevators without penthouse overhead room.",
        legend: {
          A: "Car Inside – width (A)",
          B: "Car Inside – depth (B)",
          C: "Hoistway Inside Finished – width (C)",
          D: "Hoistway Inside Finished – depth (D)",
          E: "Entrance clear width (E)",
        },
        notes: [
          "All Dimensions are in mm.",
          "Gearless Permanent Magnet Synchronous Motor (PMSM) mounted directly on shaft guide rails.",
          "Saves architectural rooftop penthouse overhead machine room construction costs.",
          "All hoist way walls should be minimum 230 mm brick or 150 mm R.C.C."
        ],
        columns: [
          { key: "persons", label: "Persons" },
          { key: "loadKg", label: "Load (Kg)" },
          { key: "carSize", label: "Car Platform A × B (mm)" },
          { key: "shaftSize", label: "Hoistway C × D (mm)" },
          { key: "entrance", label: "Entrance E (mm)" },
          { key: "speed", label: "Speed (mps)" },
          { key: "pit", label: "Pit Depth (mm)" },
          { key: "overhead", label: "Overhead (mm)" }
        ],
        rows: [
          { persons: 6, loadKg: 408, carSize: "1100 × 1000", shaftSize: "1600 × 1600", entrance: 700, speed: "1.0 to 1.5", pit: 1600, overhead: 4600 },
          { persons: 8, loadKg: 544, carSize: "1300 × 1100", shaftSize: "1800 × 1700", entrance: 800, speed: "1.0 to 1.5", pit: 1600, overhead: 4600 },
          { persons: 10, loadKg: 680, carSize: "1350 × 1300", shaftSize: "1900 × 1900", entrance: 800, speed: "1.0 to 1.5", pit: 1600, overhead: 4600 },
          { persons: 13, loadKg: 884, carSize: "1500 × 1400", shaftSize: "2100 × 2000", entrance: 900, speed: "1.0 to 1.5", pit: 1600, overhead: 4800 },
          { persons: 16, loadKg: 1088, carSize: "1600 × 1500", shaftSize: "2200 × 2100", entrance: 1000, speed: "1.0 to 1.5", pit: 1600, overhead: 4800 },
        ]
      };

    case "home":
      return {
        title: "Home / Residential Villa Elevator — Space Requirements",
        subtitle: "Complete dimension matrix combining both Manual Swing Door and Automatic Sliding Door villa configurations.",
        legend: {
          A: "Car Inside – width (A)",
          B: "Car Inside – depth (B)",
          C: "Lift-Well Inside Finished – width (C)",
          D: "Lift-Well Inside Finished – depth (D)",
          E: "Entrance clear opening width (E)",
        },
        notes: [
          "All Dimensions are in mm.",
          "Single-Phase 230V domestic power or 3-Phase 415V power compatible.",
          "Ultra-low pit depth (200 mm to 450 mm) or ramp entrance available.",
          "Operates in RCC shaft, brick shaft, or freestanding glass-steel structure."
        ],
        columns: [
          { key: "doorConfig", label: "Door Operation" },
          { key: "person", label: "Persons" },
          { key: "capacityKg", label: "Capacity (Kg)" },
          { key: "carSize", label: "Car Inside A × B (mm)" },
          { key: "shaftSize", label: "Lift-Well C × D (mm)" },
          { key: "entrance", label: "Entrance E (mm)" },
          { key: "speed", label: "Speed (mps)" },
          { key: "pit", label: "Pit Depth (mm)" },
          { key: "overhead", label: "Overhead (mm)" }
        ],
        rows: [
          // Manual Door configurations
          { doorConfig: "Manual Swing Door", person: "2 to 3", capacityKg: "200 to 250", carSize: "800 × 850", shaftSize: "1150 × 1100", entrance: 700, speed: "0.2 to 0.4", pit: "200 to 400", overhead: 2800 },
          { doorConfig: "Manual Swing Door", person: 4, capacityKg: 300, carSize: "900 × 1000", shaftSize: "1250 × 1250", entrance: 750, speed: "0.2 to 0.4", pit: "250 to 450", overhead: 2900 },
          { doorConfig: "Manual Swing Door", person: 6, capacityKg: 408, carSize: "1000 × 1200", shaftSize: "1350 × 1450", entrance: 800, speed: "0.2 to 0.4", pit: "300 to 450", overhead: 3000 },
          // Auto Door configurations
          { doorConfig: "Automatic Sliding Door", person: "2 to 3", capacityKg: "200 to 250", carSize: "850 × 900", shaftSize: "1300 × 1200", entrance: 700, speed: "0.25 to 0.5", pit: "350 to 500", overhead: 3100 },
          { doorConfig: "Automatic Sliding Door", person: 4, capacityKg: 300, carSize: "950 × 1100", shaftSize: "1400 × 1400", entrance: 750, speed: "0.25 to 0.5", pit: "350 to 500", overhead: 3100 },
          { doorConfig: "Automatic Sliding Door", person: 6, capacityKg: 408, carSize: "1100 × 1250", shaftSize: "1550 × 1550", entrance: 800, speed: "0.25 to 0.5", pit: "400 to 500", overhead: 3200 },
        ]
      };

    case "hydraulic":
      return {
        title: "Hydraulic Elevator — Space Requirements & Engineering Parameters",
        subtitle: "Full engineering dimensions covering both 1:1 / 1:2 Direct Suspension and Single-Side Direct Hydraulic configurations.",
        legend: {
          A: "Car Inside – width (A)",
          B: "Car Inside – depth (B)",
          C: "Lift-Well Inside Finished – width (C)",
          D: "Lift-Well Inside Finished – depth (D)",
          E: "Entrance clear width (E)",
        },
        notes: [
          "All Dimensions are in mm.",
          "No rooftop penthouse required; power unit and hydraulic pump can be placed at ground level or basement up to 10m away.",
          "Equipped with pipe rupture safety burst valves and emergency battery manual descent.",
          "All hoist way walls should be minimum 230 mm brick or 150 mm R.C.C."
        ],
        columns: [
          { key: "suspension", label: "Suspension Type" },
          { key: "persons", label: "Persons" },
          { key: "capacityKg", label: "Capacity (Kg)" },
          { key: "carSize", label: "Car Inside A × B (mm)" },
          { key: "shaftSize", label: "Lift-Well C × D (mm)" },
          { key: "entrance", label: "Entrance E (mm)" },
          { key: "speed", label: "Speed (mps)" },
          { key: "pit", label: "Pit Depth (mm)" },
          { key: "overhead", label: "Overhead (mm)" }
        ],
        rows: [
          { suspension: "Single-Side Direct (1:1)", persons: 4, capacityKg: 300, carSize: "900 × 1000", shaftSize: "1350 × 1250", entrance: 750, speed: "0.35 to 0.6", pit: 1200, overhead: 3400 },
          { suspension: "Single-Side Direct (1:1)", persons: 6, capacityKg: 408, carSize: "1100 × 1100", shaftSize: "1550 × 1350", entrance: 800, speed: "0.35 to 0.6", pit: 1200, overhead: 3400 },
          { suspension: "Indirect Roped (1:2)", persons: 8, capacityKg: 544, carSize: "1300 × 1200", shaftSize: "1750 × 1450", entrance: 800, speed: "0.35 to 0.6", pit: 1300, overhead: 3500 },
          { suspension: "Indirect Roped (1:2)", persons: 10, capacityKg: 680, carSize: "1400 × 1350", shaftSize: "1850 × 1600", entrance: 800, speed: "0.35 to 0.6", pit: 1300, overhead: 3500 },
          { suspension: "Heavy Cargo Hydraulic", persons: "Freight", capacityKg: 2000, carSize: "1800 × 2400", shaftSize: "2500 × 2700", entrance: 1800, speed: "0.25 to 0.4", pit: 1500, overhead: 3800 },
        ]
      };

    default:
      return null;
  }
}

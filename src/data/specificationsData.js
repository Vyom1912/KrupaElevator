export const specificationsData = {
  "manual-doors": {
    title: "Manual Door Passenger Elevator",
    brochurePage: 19,
    drawing: "/assets/drawings/manual_passenger_technical_drawing.png",
    planDrawing: "/assets/drawings/manual_door_plan.png",
    elevationDrawing: "/assets/drawings/manual_door_elevation.png",
    note: "All dimensions in mm. Hoistway walls should be minimum 230 mm brick or 150 mm R.C.C. Standard engineering specifications per IS 14665.",
    legend: [
      { key: "Platform A × B", desc: "Platform exterior width (A) × depth (B)" },
      { key: "Lift-Well C × D", desc: "Shaft inside finished width (C) × depth (D)" },
      { key: "Entrance E", desc: "Clear landing entrance width" },
      { key: "Machine Room K × L", desc: "Machine room depth formula (K) × width formula (L)" },
      { key: "Pit & Overhead", desc: "Pit Depth: 1600 mm | Overhead Clearance: 4900 mm | Machine Room Height: 2500 mm" }
    ],
    headers: ["Persons", "Capacity (KG)", "Platform A", "Platform B", "Lift-Well C", "Lift-Well D", "Entrance E", "Door Type", "Machine Room K", "Machine Room L", "Speed (MPS)", "Pit Depth", "Overhead"],
    rows: [
      ["5", "340", "950", "1300", "1350", "1650", "760", "Collapsible / Swing / Imperforate", "600+C+600", "300+D+1500", "Up to 0.68", "1600", "4900"],
      ["5", "340", "1300", "1000", "1700", "1300", "760", "Collapsible / Swing / Imperforate", "300+C+300", "600+D+1500", "Up to 0.68", "1600", "4900"],
      ["6", "408", "1200", "1200", "1600", "1500", "800", "Collapsible / Swing / Imperforate", "300+C+300", "600+D+1500", "Up to 0.68", "1600", "4900"],
      ["8", "544", "1500", "1200", "1900", "1500", "800", "Collapsible / Swing / Imperforate", "300+C+300", "600+D+1500", "Up to 0.68", "1600", "4900"],
      ["13", "884", "1900", "1500", "2400", "1850", "900", "Collapsible / Swing / Imperforate", "600+C+600", "300+D+1500", "Up to 0.68", "1600", "4900"],
      ["16", "1088", "1900", "1800", "2400", "2150", "1000", "Collapsible / Swing / Imperforate", "600+C+600", "300+D+1500", "Up to 0.68", "1600", "4900"],
      ["20", "1360", "1900", "2250", "2400", "2600", "1000", "Collapsible / Swing / Imperforate", "600+C+600", "300+D+1500", "Up to 0.68", "1600", "4900"]
    ]
  },
  "automatic-doors": {
    title: "Automatic Door Passenger Elevator",
    brochurePage: 19,
    drawing: "/assets/drawings/auto_passenger_technical_drawing.png",
    planDrawing: "/assets/drawings/auto_door_plan.png",
    elevationDrawing: "/assets/drawings/auto_door_elevation.png",
    note: "All dimensions in mm. Hoistway walls should be minimum 230 mm brick or 150 mm R.C.C. Standard engineering specifications per IS 14665.",
    legend: [
      { key: "Platform A × B", desc: "Car platform width (A) × depth (B)" },
      { key: "Lift-Well C × D", desc: "Shaft inside finished width (C) × depth (D)" },
      { key: "Entrance E", desc: "Automatic center opening clear door width" },
      { key: "Machine Room K × L", desc: "Machine room depth formula (K) × width formula (L)" },
      { key: "Pit & Overhead", desc: "Pit Depth: 1600 mm | Overhead Clearance: 4900 mm | Machine Room Height: 2500 mm" }
    ],
    headers: ["Persons", "Capacity (KG)", "Platform A", "Platform B", "Lift-Well C", "Lift-Well D", "Entrance E", "Door Opening", "Machine Room K", "Machine Room L", "Speed (MPS)", "Pit Depth", "Overhead"],
    rows: [
      ["6", "408", "1200", "1300", "1700", "1800", "700", "Auto Center Opening", "300+C+300", "600+D+1500", "Up to 1.5", "1600", "4900"],
      ["8", "544", "1500", "1330", "2000", "1800", "800", "Auto Center Opening", "300+C+300", "600+D+1500", "Up to 1.5", "1600", "4900"],
      ["10", "680", "1650", "1450", "2150", "2000", "800", "Auto Center Opening", "600+C+600", "600+D+1500", "Up to 1.5", "1600", "4900"],
      ["13", "884", "1900", "1500", "2400", "2000", "900", "Auto Center Opening", "600+C+600", "600+D+1500", "Up to 1.5", "1600", "4900"],
      ["16", "1088", "1900", "1800", "2400", "2300", "1000", "Auto Center Opening", "600+C+600", "600+D+1500", "Up to 1.5", "1600", "4900"],
      ["20", "1360", "1900", "2250", "2400", "2750", "1000", "Auto Center Opening", "600+C+600", "600+D+1500", "Up to 1.5", "1600", "4900"]
    ]
  },
  "capsule": {
    title: "Capsule Panoramic Elevator Dimensions",
    brochurePage: 19,
    drawing: "/assets/drawings/capsule_technical_drawing.png",
    note: "All dimensions in mm. Option-A (Semi-Circle / Circular) & Option-B (Square / Polygon Cutting Edge). Full architectural callouts A through H.",
    legend: [
      { key: "Car Inside (A × B)", desc: "A: Car Inside Width | B: Car Inside Depth" },
      { key: "Front Geometry (J / G)", desc: "J: Arc diameter (Option-A) | G: Side chamfer edge offset" },
      { key: "Lift-Well (C × D)", desc: "C: Hoistway Inside Width | D: Hoistway Main Depth" },
      { key: "Rear & Bow (F / H)", desc: "F: Rear Wall Width | H: Front Panoramic Projection Depth" },
      { key: "Entrance E", desc: "Clear landing door opening" }
    ],
    headers: ["Configuration", "Persons", "Capacity (KG)", "Car Inside A", "Car Inside B", "Arc J", "Offset G", "Lift-Well C", "Lift-Well D", "Rear Wall F", "Bow Depth H", "Entrance E"],
    rows: [
      ["Option-A (Circular)", "10", "680", "1100", "1300", "1400", "650", "2200", "1325", "1330", "1100", "800"],
      ["Option-A (Circular)", "13", "884", "1200", "1400", "1550", "700", "2400", "1425", "1430", "1100", "900"],
      ["Option-A (Circular)", "16", "1088", "1300", "1500", "1700", "750", "2800", "1530", "1530", "1200", "1000"],
      ["Option-B (Polygon)", "10", "680", "1250", "1300", "-", "250", "2200", "1450", "1480", "580", "800"],
      ["Option-B (Polygon)", "13", "884", "1400", "1400", "-", "300", "2400", "1550", "1630", "650", "900"],
      ["Option-B (Polygon)", "16", "1088", "1550", "1500", "-", "350", "2800", "1780", "1650", "790", "1000"]
    ]
  },
  "hospital": {
    title: "Hospital Bed & Stretcher Elevator",
    brochurePage: 20,
    drawing: "/assets/drawings/hospital_technical_drawing.png",
    note: "All dimensions in mm. Tailored specifically for standard hospital beds and stretchers with 2400 mm depth clearance. Hoistway walls min 230mm brick or 150mm R.C.C.",
    legend: [
      { key: "Stretcher Clearance", desc: "2400 mm interior cabin depth allows unhindered hospital bed & medical trolley transport" },
      { key: "Shaft Dimensions (A × B)", desc: "A: Hoistway Inside Finished Width | B: Hoistway Inside Finished Depth" },
      { key: "Car Dimensions (C × D)", desc: "C: Cabin Interior Width | D: Cabin Interior Depth" },
      { key: "Machine Room & Pit", desc: "Machine Room Height: 2500 mm | Pit Depth: 1600 mm | Overhead: 5100 mm" }
    ],
    headers: ["Door Operation", "Persons", "Capacity (KG)", "Shaft Width A", "Shaft Depth B", "Car Width C", "Car Depth D", "Entrance E", "Speed (MPS)", "Overhead / Pit"],
    rows: [
      ["Manual Stretcher", "8 to 16", "544 to 1088", "1900", "2400", "1200", "2300", "1600 (Collapsible)", "0.3 to 0.5", "5100 / 1600"],
      ["Auto Centre Opening", "15", "1020", "1900", "3000", "1000", "2400", "800", "0.63 / 1.0", "5100 / 1600"],
      ["Auto Telescopic", "15", "1020", "1700", "3000", "1000", "2400", "800", "0.63 / 1.0", "5100 / 1600"],
      ["Auto Centre Opening", "20", "1360", "2300", "3000", "1300", "2400", "900", "0.63 / 1.0", "5100 / 1600"],
      ["Auto Telescopic", "20", "1360", "1950", "3000", "1300", "2400", "900", "0.63 / 1.0", "5100 / 1600"],
      ["Auto Centre Opening", "26", "1768", "2600", "3000", "1600", "2400", "1000", "0.63 / 1.0", "5100 / 1600"],
      ["Auto Telescopic", "26", "1768", "2100", "3000", "1600", "2400", "1000", "0.63 / 1.0", "5100 / 1600"]
    ]
  },
  "goods": {
    title: "Goods Freight Elevator",
    brochurePage: 20,
    drawing: "/assets/drawings/goods_technical_drawing.png",
    doorsDrawing: "/assets/drawings/goods_doors_drawing.png",
    note: "All dimensions in mm. Heavy-duty industrial cargo elevator. Available rated speed: 0.50 / 0.70 MPS, max travel height: 66 M, rated capacity: 500 to 4000 Kgs.",
    legend: [
      { key: "Car Inside (A × B)", desc: "A: Freight Car Inside Width | B: Freight Car Inside Depth" },
      { key: "Lift-Well (C × D)", desc: "C: Hoistway Inside Width | D: Hoistway Inside Depth" },
      { key: "Entrance Width W", desc: "Wide entrance for pallet trucks, forklifts, and industrial goods" },
      { key: "Machine Room (K × L)", desc: "K: Machine Room Depth | L: Machine Room Width" },
      { key: "Door Options", desc: "Center Opening Auto (2500×2200mm), Vertical Bi-Parting (2500×2200mm), Collapsible (2500×2000/2350mm)" }
    ],
    headers: ["Load (KG)", "Car-Inside A", "Car-Inside B", "Lift-Well C", "Lift-Well D", "Entrance Width W", "Machine Room K", "Machine Room L", "Speed (MPS)", "Overhead / Pit"],
    rows: [
      ["500", "1500", "1200", "1900", "1600", "1500", "2500", "4100", "0.25 to 1.0", "5100 / 1600"],
      ["1000", "1500", "1800", "2300", "2000", "1800", "2500", "4700", "0.25 to 1.0", "5100 / 1600"],
      ["1500", "1700", "2000", "2600", "2300", "2100", "2600", "4900", "0.25 to 1.0", "5100 / 1600"],
      ["2000", "1700", "2500", "2600", "2900", "2400", "2600", "5400", "0.25 to 1.0", "5100 / 1600"],
      ["2500", "2000", "2500", "2900", "2900", "2700", "2900", "5400", "0.25 to 1.0", "5100 / 1600"],
      ["3000", "2000", "3000", "2900", "3400", "2700", "2900", "5900", "0.25 to 1.0", "5100 / 1600"]
    ]
  },
  "mrl": {
    title: "MRL Machine Roomless Elevator",
    brochurePage: 21,
    drawing: "/assets/drawings/mrl_technical_drawing.png",
    note: "All dimensions in mm. Machine roomless configuration saves 25% equipment area and 40% space occupation. Permanent magnet synchronous gearless traction machine.",
    legend: [
      { key: "Lift Well (A × B)", desc: "A: Shaft Inside Width | B: Shaft Inside Depth" },
      { key: "Cabin Inside (C × D)", desc: "C: Cabin Interior Width (*970* mm for 5 & 6 persons) | D: Cabin Interior Depth" },
      { key: "Entry E", desc: "Clear door opening width | Entrance height: 2000 mm" },
      { key: "Inspection Window", desc: "Inspection Window at terrace level (900 × 900 mm) with Load Hooks for cabin, counter & machine" },
      { key: "Civil Structure", desc: "3 Nos. Load Hook (3 Ton Capacity) Client Scope | Overhead: 5185 mm | Pit: 1600 mm" }
    ],
    headers: ["Persons", "Capacity (KG)", "Lift Well A", "Lift Well B", "Cabin Inside C", "Cabin Inside D", "Entry E", "Pit Depth", "Overhead"],
    rows: [
      ["5", "340", "1600", "1500", "970*", "1050", "700", "1600", "5185"],
      ["6", "408", "1650", "1600", "970*", "1130", "700", "1600", "5185"],
      ["8", "544", "1850", "1700", "1120", "1280", "800", "1600", "5185"],
      ["10", "680", "2000", "1850", "1270", "1380", "800", "1600", "5185"],
      ["13", "884", "2100", "2600", "1070", "2100", "800 / 900", "1600", "5185"],
      ["15", "1020", "2100", "3000", "1070", "2400", "800 / 900", "1600", "5185"],
      ["20", "1360", "2300", "3000", "1320", "2400", "900 / 1000", "1600", "5185"],
      ["26", "1768", "2450", "3000", "1620", "2400", "900 / 1000", "1600", "5185"]
    ]
  },
  "home": {
    title: "Home Elevator Dimensions",
    brochurePage: 22,
    drawing: "/assets/drawings/home_technical_drawing.png",
    note: "All dimensions in mm. Single-phase 220V power supply, ultra-compact pit (550 mm) and low overhead (3100 mm). High car ceiling height: 2100 mm, entrance height: 2000 mm. Saves up to 40% energy.",
    legend: [
      { key: "Car Inside (A × B)", desc: "A: Cabin Inside Width | B: Cabin Inside Depth" },
      { key: "Lift Well (C × D)", desc: "C: Hoistway Finished Width | D: Hoistway Finished Depth" },
      { key: "Entrance E", desc: "700 mm clear landing entrance width" },
      { key: "Compact Overhead & Pit", desc: "Overhead Clearance: 3100 mm | Pit Depth: 550 mm (No deep excavation needed)" },
      { key: "Door Options", desc: "Manual Door & Automatic Door variants available in 3-person and 4-person models" }
    ],
    headers: ["Door Operation", "Persons", "Capacity (KG)", "Car Inside A", "Car Inside B", "Lift Well C", "Lift Well D", "Entrance E", "Speed (MPS)", "Pit Depth", "Overhead"],
    rows: [
      ["Manual Door", "3", "204", "810", "700", "1100", "1200", "700", "0.3", "550", "3100"],
      ["Manual Door", "4", "272", "800", "1200", "1300", "1400", "700", "0.3", "550", "3100"],
      ["Auto Door", "3", "204", "810", "700", "1250", "1250", "700", "0.3", "550", "3100"],
      ["Auto Door", "4", "272", "850", "1150", "1300", "1600", "700", "0.3", "550", "3100"]
    ]
  },
  "hydraulic": {
    title: "Hydraulic Elevator Dimensions",
    brochurePage: 22,
    drawing: "/assets/drawings/hydraulic_technical_drawing.png",
    shaft3dDrawing: "/assets/drawings/hydraulic_3d_shafts.png",
    note: "All dimensions in mm. Center Bore Direct Type and Roping Type side suspension for low-rise installations. Machine room not required above hoistway.",
    legend: [
      { key: "Center Bore (Direct)", desc: "Direct suspension with simple or split piston under car. Pit: 1500 mm | Overhead: 4000 mm" },
      { key: "Roping Type (2:1)", desc: "Single side direct suspension with simple piston & 2:1 roping. Pit: 1200 mm | Overhead: 4000 mm" },
      { key: "Shaft Dimensions (A × B)", desc: "A: Shaft Width | B: Shaft Depth" },
      { key: "Car Dimensions (C × D)", desc: "C: Car Inside Width | D: Car Inside Depth" },
      { key: "Speed & Travel", desc: "Speed: 0.30 MPS (up to 0.50 MPS) | Travel: 12m to 15m (up to 4 stops)" }
    ],
    headers: ["Suspension Type", "Persons", "Capacity (KG)", "Shaft Width A", "Shaft Depth B", "Car Width C", "Car Depth D", "Pit Depth", "Overhead"],
    rows: [
      ["Center Bore (Direct)", "3", "225", "1200", "1200", "800", "900", "1500", "4000"],
      ["Center Bore (Direct)", "4", "300", "1250", "1350", "850", "1050", "1500", "4000"],
      ["Center Bore (Direct)", "5", "375", "1400", "1400", "1000", "1100", "1500", "4000"],
      ["Center Bore (Direct)", "6", "450", "1500", "1500", "1100", "1150", "1500", "4000"],
      ["Center Bore (Direct)", "8", "600", "1500", "1700", "1100", "1400", "1500", "4000"],
      ["Center Bore (Direct)", "10", "750", "1600", "1850", "1200", "1550", "1500", "4000"],
      ["Center Bore (Direct)", "12", "900", "1700", "1950", "1300", "1650", "1500", "4000"],
      ["Center Bore (Direct)", "15", "1125", "1700", "2300", "1300", "2000", "1500", "4000"],
      ["Center Bore (Direct)", "20", "1500", "1800", "2700", "1400", "2400", "1500", "4000"],
      ["Center Bore (Direct)", "24", "1800", "1900", "2800", "1500", "2500", "1500", "4000"],
      ["Roping Type (2:1)", "3", "225", "1500", "1500", "800", "900", "1200", "4000"],
      ["Roping Type (2:1)", "4", "300", "1550", "1550", "850", "1050", "1200", "4000"],
      ["Roping Type (2:1)", "5", "375", "1700", "1700", "1000", "1100", "1200", "4000"],
      ["Roping Type (2:1)", "6", "450", "1800", "1800", "1100", "1150", "1200", "4000"],
      ["Roping Type (2:1)", "8", "600", "1800", "1800", "1100", "1400", "1200", "4000"],
      ["Roping Type (2:1)", "10", "750", "1900", "1900", "1200", "1550", "1200", "4000"],
      ["Roping Type (2:1)", "12", "900", "2000", "2000", "1300", "1650", "1200", "4000"],
      ["Roping Type (2:1)", "15", "1125", "2000", "2000", "1300", "2000", "1200", "4000"],
      ["Roping Type (2:1)", "20", "1600", "2100", "2100", "1400", "2400", "1200", "4000"]
    ]
  },
  "car": {
    title: "Car Elevator & Automotive Parking Systems",
    brochurePage: 21,
    drawing: "/assets/drawings/car_elevator_technical_drawing.png",
    parkingSystemsDrawing: "/assets/drawings/car_parking_systems.png",
    note: "All dimensions in mm. Vertical transportation for passenger cars, SUVs, and LMVs. Features Landing Box on both sides for front/rear drive-thru operation.",
    legend: [
      { key: "Finish Hoist Way", desc: "4000 mm (Width) × 6000 mm (Depth) finished shaft clearance" },
      { key: "Car Inside", desc: "2500 mm (Width) × 5190 mm (Depth) spacious automobile cabin" },
      { key: "Landing Entrance", desc: "2500 mm (Width) × 2200 mm (Height) drive-in door opening" },
      { key: "Machine Room & Beam", desc: "Machine Room Height: 3000 mm | Hoisting Beam Capacity: 3500 Kg" },
      { key: "Car Segments", desc: "1315 mm + 3020 mm + 1315 mm three-bay reinforced floor construction" }
    ],
    headers: ["Engineering Parameter", "Dimension / Specification", "Technical & Civil Notes"],
    rows: [
      ["Finish Hoist Way Width", "4000 mm", "Shaft width for passenger car and SUV clearance"],
      ["Finish Hoist Way Depth", "6000 mm", "Full shaft structural clearance depth"],
      ["Car Inside Width", "2500 mm", "Spacious interior width between car rub rails"],
      ["Car Inside Depth", "5190 mm", "Clear car length accommodation for standard & luxury LMVs"],
      ["Landing Entrance Width", "2500 mm", "Two-side drive-thru option (front and rear doors)"],
      ["Landing Entrance Height", "2200 mm", "Vertical Bi-Parting or Auto Center Opening"],
      ["Hoisting Beam Capacity", "3500 Kg", "Structural steel hoisting beam in overhead machine room"],
      ["Machine Room Height", "3000 mm", "Overhead machine room vertical clearance"],
      ["Car Segment Distribution", "1315 mm + 3020 mm + 1315 mm", "Three-bay heavy load reinforcement design"],
      ["Rated Capacity / Load", "2500 to 4000 Kgs", "Custom solutions up to 5000 Kgs available"],
      ["Rated Speed", "0.30 to 0.50 MPS", "Solutions available for higher speeds upon request"],
      ["Max Travel Height", "30 to 100 Meters", "Supports low-rise to high-rise multi-level parking structures"],
      ["Door Configuration", "Vertical Bi-Parting / Auto Center", "Two-side drive-thru through-car capability"],
      ["Flooring Material", "S.S. / Aluminum Checkered Plate", "Anti-skid high wheel-load reinforced traction surface"],
      ["Associated Systems", "Puzzle Parking, Scissor Lift, Car Stacker", "Automated multi-level space-saving parking mechanisms"]
    ]
  }
};

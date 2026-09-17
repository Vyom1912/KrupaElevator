export const specificationsData = {
  "manual-doors": {
    title: "Manual Door Passenger Elevator",
    brochurePage: 10,
    note: "All dimensions in mm. Hoistway walls should be minimum 230 mm brick or 150 mm R.C.C.",
    headers: ["Persons", "Capacity (KG)", "Platform A", "Platform B", "Lift-Well C", "Lift-Well D", "Entrance E", "Door Type", "Machine Room K", "Machine Room L", "Speed (MPS)", "Pit Depth", "Overhead"],
    rows: [
      ["5", "340", "950", "1300", "1350", "1650", "760", "Collapsible / Swing / Imperforate", "600+C+600", "300+D+1500", "Up to 0.68", "1600", "4900"],
      ["5", "340", "1300", "1000", "1700", "1300", "760", "Collapsible / Swing / Imperforate", "300+C+300", "600+D+1500", "Up to 0.68", "1600", "4900"],
      ["6", "408", "1200", "1200", "1600", "1500", "800", "Collapsible / Swing / Imperforate", "300+C+300", "600+D+1500", "Up to 0.68", "1600", "4900"],
      ["8", "544", "1500", "1200", "1900", "1500", "800", "Collapsible / Swing / Imperforate", "300+C+300", "600+D+1500", "Up to 0.68", "1600", "4900"],
      ["13", "884", "1900", "1500", "2400", "1850", "900", "Collapsible / Swing / Imperforate", "600+C+600", "300+D+1500", "Up to 0.68", "1600", "4900"]
    ]
  },
  "automatic-doors": {
    title: "Automatic Door Passenger Elevator",
    brochurePage: 10,
    note: "All dimensions in mm. Hoistway walls should be minimum 230 mm brick or 150 mm R.C.C.",
    headers: ["Persons", "Capacity (KG)", "Platform A", "Platform B", "Lift-Well C", "Lift-Well D", "Entrance E", "Door Opening", "Machine Room K", "Machine Room L", "Speed (MPS)", "Pit Depth", "Overhead"],
    rows: [
      ["6", "408", "1200", "1300", "1700", "1800", "700", "Auto Center Opening", "300+C+300", "600+D+1500", "Up to 1.5", "1600", "4900"],
      ["8", "544", "1500", "1330", "2000", "1800", "800", "Auto Center Opening", "300+C+300", "600+D+1500", "Up to 1.5", "1600", "4900"],
      ["10", "680", "1650", "1450", "2150", "2000", "800", "Auto Center Opening", "600+C+600", "600+D+1500", "Up to 1.5", "1600", "4900"],
      ["13", "884", "1900", "1500", "2400", "2000", "900", "Auto Center Opening", "600+C+600", "600+D+1500", "Up to 1.5", "1600", "4900"]
    ]
  },
  "capsule": {
    title: "Capsule Elevator Dimensions",
    brochurePage: 10,
    note: "Option-A (Semi-Circle / Circular) & Option-B (Square / Polygon)",
    headers: ["Option", "Persons", "Capacity (KG)", "Car Inside A", "Car Inside B", "Left Well C", "Left Well D", "Entrance E"],
    rows: [
      ["Option-A", "10", "680", "1100", "1300", "2200", "1325", "800"],
      ["Option-A", "13", "884", "1200", "1400", "2400", "1425", "900"],
      ["Option-A", "16", "1088", "1300", "1500", "2800", "1530", "1000"],
      ["Option-B", "10", "680", "1250", "1300", "2200", "1450", "800"],
      ["Option-B", "13", "884", "1400", "1400", "2400", "1550", "900"],
      ["Option-B", "16", "1088", "1550", "1500", "2800", "1780", "1000"]
    ]
  },
  "hospital": {
    title: "Hospital Bed & Stretcher Elevator",
    brochurePage: 11,
    note: "Designed for standard hospital beds and stretchers with 2400mm depth clearance.",
    headers: ["Door Operation", "Persons", "Capacity (KG)", "Shaft Width", "Shaft Depth", "Car Width", "Car Depth", "Entrance Width", "Speed (MPS)", "Overhead / Pit"],
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
    brochurePage: 11,
    note: "All dimensions in mm. Machine room located directly overhead or side positioned.",
    headers: ["Load (KG)", "Car Inside A", "Car Inside B", "Lift-Well C", "Lift-Well D", "Entrance Width", "Machine Room K", "Machine Room L", "Speed (MPS)", "Overhead / Pit"],
    rows: [
      ["500", "1500", "1200", "1900", "1600", "1500", "2500", "4100", "0.25 - 1.0", "5100 / 1600"],
      ["1000", "1500", "1800", "2300", "2000", "1800", "2500", "4700", "0.25 - 1.0", "5100 / 1600"],
      ["1500", "1700", "2000", "2600", "2300", "2100", "2600", "4900", "0.25 - 1.0", "5100 / 1600"],
      ["2000", "1700", "2500", "2600", "2900", "2400", "2600", "5400", "0.25 - 1.0", "5100 / 1600"],
      ["2500", "2000", "2500", "2900", "2900", "2700", "2900", "5400", "0.25 - 1.0", "5100 / 1600"],
      ["3000", "2000", "3000", "2900", "3400", "2700", "2900", "5900", "0.25 - 1.0", "5100 / 1600"]
    ]
  },
  "mrl": {
    title: "MRL Machine Roomless Elevator",
    brochurePage: 11,
    note: "Machine roomless configuration saves 25% equipment area and 40% space occupation.",
    headers: ["Persons", "Capacity (KG)", "Lift Well A", "Lift Well B", "Cabin Inside C", "Cabin Inside D", "Entry E", "Pit", "Overhead"],
    rows: [
      ["5", "340", "1600", "1500", "920", "1050", "700", "1600", "5185"],
      ["6", "408", "1650", "1600", "970", "1130", "700", "1600", "5185"],
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
    brochurePage: 12,
    note: "Single-phase power supply, compact pit (550 mm) and low overhead (3100 mm).",
    headers: ["Door Operation", "Persons", "Capacity (KG)", "Car Inside A", "Car Inside B", "Lift Well C", "Lift Well D", "Entrance E", "Speed (MPS)", "Pit / Overhead"],
    rows: [
      ["Manual Door", "3", "204", "810", "700", "1100", "1200", "700", "0.3", "550 / 3100"],
      ["Manual Door", "4", "272", "800", "1200", "1300", "1400", "700", "0.3", "550 / 3100"],
      ["Auto Door", "3", "204", "810", "700", "1250", "1250", "700", "0.3", "550 / 3100"],
      ["Auto Door", "4", "272", "850", "1150", "1300", "1600", "700", "0.3", "550 / 3100"]
    ]
  },
  "hydraulic": {
    title: "Hydraulic Elevator Dimensions",
    brochurePage: 12,
    note: "Direct Center Bore Type and Roping Type side suspension for low-rise installations up to 15m.",
    headers: ["Type", "Persons", "Capacity (KG)", "Shaft Width A", "Shaft Depth B", "Car Width C", "Car Depth D", "Pit / Overhead"],
    rows: [
      ["Center Bore (Direct)", "3", "225", "1200", "1200", "800", "900", "1500 / 4000"],
      ["Center Bore (Direct)", "4", "300", "1250", "1350", "850", "1050", "1500 / 4000"],
      ["Center Bore (Direct)", "6", "450", "1500", "1500", "1100", "1150", "1500 / 4000"],
      ["Center Bore (Direct)", "8", "600", "1500", "1700", "1100", "1400", "1500 / 4000"],
      ["Center Bore (Direct)", "10", "750", "1600", "1850", "1200", "1550", "1500 / 4000"],
      ["Center Bore (Direct)", "15", "1125", "1700", "2300", "1300", "2000", "1500 / 4000"],
      ["Center Bore (Direct)", "20", "1500", "1800", "2700", "1400", "2400", "1500 / 4000"],
      ["Center Bore (Direct)", "24", "1800", "1900", "2800", "1500", "2500", "1500 / 4000"],
      ["Roping Type (2:1)", "3", "225", "1500", "1500", "800", "900", "1200 / 4000"],
      ["Roping Type (2:1)", "4", "300", "1550", "1550", "850", "1050", "1200 / 4000"],
      ["Roping Type (2:1)", "6", "450", "1800", "1800", "1100", "1150", "1200 / 4000"],
      ["Roping Type (2:1)", "8", "600", "1800", "1800", "1100", "1400", "1200 / 4000"],
      ["Roping Type (2:1)", "10", "750", "1900", "1900", "1200", "1550", "1200 / 4000"],
      ["Roping Type (2:1)", "15", "1125", "2000", "2000", "1300", "2000", "1200 / 4000"],
      ["Roping Type (2:1)", "20", "1600", "2100", "2100", "1400", "2400", "1200 / 4000"]
    ]
  },
  "car": {
    title: "Car Elevator & Automotive Specifications",
    brochurePage: 11,
    note: "Vertical transportation for passenger cars, SUVs and light commercial vehicles.",
    headers: ["Parameter", "Brochure Specification"],
    rows: [
      ["Segment / Application", "Industrial Applications & Car Parks"],
      ["Description", "Vertical Transportation for Cars / LMVs"],
      ["Max. Travel Height", "30 to 100 meters (solutions available for higher travel)"],
      ["Rated Capacity / Load", "2500 to 4000 Kgs (solutions up to 5000 Kgs)"],
      ["Rated Speed", "0.30 to 0.50 MPS (solutions available for higher speeds)"],
      ["Group Size", "Simplex / Multi-unit dispatch"],
      ["Door System", "Vertical Bi-Parting Door / Auto Center Opening (Two-side drive-thru option)"],
      ["Flooring Material", "S.S. Checkered Plate / Aluminum Checkered Plate"],
      ["Associated Systems", "Car Puzzle Parking, Car Scissor Lift, Car Stacker Parking"]
    ]
  }
};

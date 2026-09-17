# Krupa Elevators · Visual & Technical Overhaul Walkthrough

All requested features, photorealistic assets, animated components, mobile navigation behaviors, architectural technical drawings, and 100% exact dimensional matrices from `FINAL ALL PAGES_260616_114835.pdf` have been completed.

---

## 1. Official Brochure Data Audit & Exact Verification

Every single technical table and dimension on the website was audited directly against the source technical brochure PDF (`FINAL ALL PAGES_260616_114835.pdf`):

### Verbatim Dimensional Data Preserved Across All 9 Elevator Categories

| Elevator Category | Brochure Source | Hoistway & Pit Dimensions | Key Capacities & Ratings |
| :--- | :--- | :--- | :--- |
| **Manual Door Passenger** | Page 19 | Pit: 1600 mm \| Overhead: 4900 mm \| Machine Room: 2500 mm | 5 to 13 persons (340 to 884 kg), Speed up to 0.68 MPS, Entrance: 760–900 mm |
| **Automatic Door Passenger** | Page 19 | Pit: 1600 mm \| Overhead: 4900 mm \| Machine Room: 2500 mm | 6 to 13 persons (408 to 884 kg), Speed up to 1.5 MPS, Entrance: 700–900 mm |
| **Capsule Panoramic (Option-A)** | Page 19 | Option-A Circular Arc Geometry | 10 to 16 persons (680 to 1088 kg), Arc J: 1400–1700 mm, Entrance: 800–1000 mm |
| **Capsule Panoramic (Option-B)** | Page 19 | Option-B Polygon / Cutting-Edge Geometry | 10 to 16 persons (680 to 1088 kg), Chamfer G: 250–350 mm, Rear F: 1480–1650 mm |
| **Hospital Bed & Stretcher** | Page 20 | Pit: 1600 mm \| Overhead: 5100 mm \| 2400 mm Car Depth | Manual Stretcher (8–16 persons), Auto Center & Telescopic (15, 20, 26 persons) |
| **Goods Freight** | Page 20 | Pit: 1600 mm \| Overhead: 5100 mm \| Machine Room: 2500 mm | 500 to 3000 kg (solutions up to 4000 kg), Speed 0.25–1.0 MPS, Entrance W: 1500–2700 mm |
| **Car Elevator & Parking** | Page 21 | Shaft: 4000 × 6000 mm \| Car: 2500 × 5190 mm \| Door: 2500 × 2200 mm | 2500 to 4000 kg (up to 5000 kg), 3500 kg Hoisting Beam, Speed 0.30–0.50 MPS |
| **MRL (Machine Roomless)** | Page 21 | Pit: 1600 mm \| Overhead: 5185 mm \| Inspection Window: 900 × 900 mm | 5 to 26 persons (340 to 1768 kg), Cabin C: 970* mm for 5 & 6 persons, 3-Ton Hook |
| **Home Elevator** | Page 22 | Pit: 550 mm \| Overhead: 3100 mm \| Car Ceiling: 2100 mm | 3 & 4 persons (204 & 272 kg), Single Phase 220V, Manual & Auto doors, Speed 0.3 MPS |
| **Hydraulic (Center Bore Direct)** | Page 22 | Pit: 1500 mm \| Overhead: 4000 mm \| Central Ram | 3 to 24 persons (225 to 1800 kg), Speed 0.30 MPS, Travel up to 15 m |
| **Hydraulic (Roping Type 2:1)** | Page 22 | Pit: 1200 mm \| Overhead: 4000 mm \| Side 2:1 Piston | 3 to 20 persons (225 to 1600 kg), Speed 0.30 MPS, Travel up to 12 m |

---

## 2. Official Architectural GA Drawings & Technical Diagrams

Clean, high-resolution architectural hoistway plans and elevation drawings were extracted directly from the brochure and integrated into [specificationsData.js](file:///f:/KRUPA/krupa-elevators-react/src/data/specificationsData.js), [Specifications.jsx](file:///f:/KRUPA/krupa-elevators-react/src/pages/Specifications.jsx), and [ProductModal.jsx](file:///f:/KRUPA/krupa-elevators-react/src/components/ProductModal.jsx):

- **Manual Door Passenger Elevator**: [manual_passenger_technical_drawing.png](file:///f:/KRUPA/krupa-elevators-react/public/assets/drawings/manual_passenger_technical_drawing.png) (Hoistway Plan with Platform A×B, Shaft C×D, Entrance E + Hoistway Elevation with Overhead 4900, Pit 1600, Machine Room 2500)
- **Automatic Door Passenger Elevator**: [auto_passenger_technical_drawing.png](file:///f:/KRUPA/krupa-elevators-react/public/assets/drawings/auto_passenger_technical_drawing.png) (Plan & Elevation for Center Opening Auto Doors)
- **Capsule Elevator**: [capsule_technical_drawing.png](file:///f:/KRUPA/krupa-elevators-react/public/assets/drawings/capsule_technical_drawing.png) (Side-by-side Option-A Circular & Option-B Polygonal Hoistway Plans with dimensional callouts A, B, J, G, C, D, F, H, E)
- **Hospital Stretcher Elevator**: [hospital_technical_drawing.png](file:///f:/KRUPA/krupa-elevators-react/public/assets/drawings/hospital_technical_drawing.png) (Plan & Elevation with 2400 mm bed clearance, Overhead 5100, Pit 1600)
- **Goods Freight Elevator**: [goods_technical_drawing.png](file:///f:/KRUPA/krupa-elevators-react/public/assets/drawings/goods_technical_drawing.png) + Landing Door styles [goods_doors_drawing.png](file:///f:/KRUPA/krupa-elevators-react/public/assets/drawings/goods_doors_drawing.png) (Center Opening, Vertical Bi-Parting, Collapsible)
- **Car Elevator & Parking**: [car_elevator_technical_drawing.png](file:///f:/KRUPA/krupa-elevators-react/public/assets/drawings/car_elevator_technical_drawing.png) (Hoistway Plan 4000×6000 mm, Car Inside 2500×5190 mm, Entry 2500 mm + Elevation with 3500 kg Hoisting Beam) + Automated Parking Platforms [car_parking_systems.png](file:///f:/KRUPA/krupa-elevators-react/public/assets/drawings/car_parking_systems.png) (Puzzle Parking, Scissor Lift, Car Stacker)
- **MRL (Machine Roomless) Elevator**: [mrl_technical_drawing.png](file:///f:/KRUPA/krupa-elevators-react/public/assets/drawings/mrl_technical_drawing.png) (Terrace Inspection Window 900×900 mm Plan, Lift Well Plan, Section Elevation with Overhead 5185, Pit 1600, CWT Grill)
- **Home Villa Elevator**: [home_technical_drawing.png](file:///f:/KRUPA/krupa-elevators-react/public/assets/drawings/home_technical_drawing.png) (Compact Plan & Elevation with Overhead 3100, Pit 550, Single Phase 220V)
- **Hydraulic Elevator**: [hydraulic_technical_drawing.png](file:///f:/KRUPA/krupa-elevators-react/public/assets/drawings/hydraulic_technical_drawing.png) (Center Bore Direct & Roping Type Side Plans) + 3D Shaft Cutaways [hydraulic_3d_shafts.png](file:///f:/KRUPA/krupa-elevators-react/public/assets/drawings/hydraulic_3d_shafts.png)

---

## 3. Interactive UI & Lightbox Inspection

- **Interactive Zoom Lightbox**: In [Specifications.jsx](file:///f:/KRUPA/krupa-elevators-react/src/pages/Specifications.jsx), clicking any architectural drawing opens a high-resolution lightbox modal allowing engineers and architects to view drawing callouts in full detail.
- **Dimensional Legend Guide**: Every elevator type displays a tailored parameter key clarifying each symbol (A = Platform width, B = Platform depth, C = Shaft width, D = Shaft depth, E = Entrance width, K & L = Machine room formulas, etc.).
- **ProductModal Integration**: In [ProductModal.jsx](file:///f:/KRUPA/krupa-elevators-react/src/components/ProductModal.jsx), users can toggle between "Product Overview" and "Technical Drawing & Dimensions" to immediately view the official GA drawing and exact table without navigating away.

---

## 4. Verification & Build Status

- **Production Build**: Executed `npm run build` with zero errors. All 1,612 modules transformed and bundled into `dist/` in 4.11s.
- **Asset Resolution**: Verified with `assetUrl` helper that all drawings and images resolve with HTTP 200 on both `http://localhost:3000/KrupaElevator/` and GitHub Pages `https://vyom1912.github.io/KrupaElevator/`.
- **Zero Data Modification**: All figures match `FINAL ALL PAGES_260616_114835.pdf` verbatim.

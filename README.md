# KRUPA ELEVATORS · Reliable Riding Experience

> **Modern, High-Performance Elevators for Residential, Commercial, Healthcare, and Industrial Architecture.**

## 🌐 Live Website (Hosted on GitHub Pages)

🔗 **[https://vyom1912.github.io/KrupaElevator/](https://vyom1912.github.io/KrupaElevator/)**

You can easily share this live link with clients, consultants, architects, and partners!

Official web application and technical digital showroom for **KRUPA ELEVATORS**, engineered with React, Vite, and TailwindCSS. Features complete on-site dimensional matrices, interactive cabin configurator, full architectural animations, and responsive navigation.

---

## 🏢 About Krupa Elevators

**Krupa Elevators** provides end-to-end vertical transportation solutions: **Servicing, Installation, Upgrades, and Maintenance**. Headquartered in Ahmedabad, Gujarat, Krupa Elevators unifies architectural flexibility with futuristic German-engineered V3F drive control and energy-saving permanent magnet synchronous (PMS) gearless traction technology.

- **Head Office**: FF-6 Sagun Enclave, Beside Nikol Community Hall, Nr. Manohar Villa Char Rasta, Nikol, Ahmedabad - 382345
- **Manufacturing Plant**: 353, Gopal Charan Industrial Hub, Kujad-Bakrol Road, Bakrol, Ahmedabad - 382430
- **Direct Helpline**: +91 82008 59171
- **Email**: `sales@krupaelevators.com` / `info@krupaelevators.com`
- **Website**: [www.krupaelevators.com](https://www.krupaelevators.com)

---

## ✨ Key Features

### 1. Six Specialized Elevator Application Categories
- **Building (Residential & Commercial)**: High-density passenger elevators with silky-smooth ride comfort, PMS gearless motors, and closed-loop ±3mm leveling.
- **Private Villa (Luxury Home Lifts)**: Single-phase 220V domestic power operation, compact 550mm pit, and 3100mm overhead for duplexes and bungalows.
- **Commercial (Panoramic Capsule)**: Curved laminated safety glass, custom polygon geometries, and illuminated glass atriums for shopping malls and corporate towers.
- **Hospital (Bed & Stretcher)**: Extra-deep 2400mm cabin clearance for ICU beds, noise-reducing intellectual control, and EMC medical device safety.
- **Industrial (Heavy Duty Freight)**: Reinforced steel structural cabins, heavy-duty traction machines, bi-parting doors, and high-impact axle load resistance up to 4000kg.
- **Car Park (Automobile Elevators)**: Vertical transportation for passenger vehicles and SUVs, drive-through two-sided doors, and puzzle/stacker parking integration.

### 2. Eleven Bespoke Cabin Interior Designs (KEC Series)
- **Basic Series (`KEC-01`)**: Minimalist S.S. hairline finish, square recessed LED downlights, and full-width back mirror.
- **Standard Series (`KEC-02`)**: S.S. finish with built-in blower fan ceiling, half rear mirror, and durable PVC flooring.
- **Semi Designer Series (`KEC-03`)**: Titanium gold stainless steel walls, gold mirror panels, gold finish ceiling, and marble-look floor.
- **Premium Series (`KEC-04` to `KEC-11`)**:
  - `KEC-04`: Rose gold hairline panels with titanium mirror insets and luminescent micalex ceiling.
  - `KEC-05`: Imitation bronze stainless steel with 4-side perimeter LED belt and sculpted back wall.
  - `KEC-06`: Designer stainless steel with 2-side linear LED strip lights and etched geometric mirror wall.
  - `KEC-07`: Clean architectural powder-coated mild steel cabin with round recessed LED fixtures and S.S. handrails.
  - `KEC-08`: Stainless steel strip designer panels with four-side round LED ceiling array.
  - `KEC-09`: Opulent gold decorated stainless steel with 6-side multi-angle LED chandelier lighting.
  - `KEC-10`: Titanium gold mirror designer with acoustic acrylic LED ceiling and polished marble floors.
  - `KEC-11`: Hybrid powder-coated mild steel with hairline S.S. insets and half mirror glass.

### 3. Complete On-Site Technical Specifications & Civil Dimensions
- Hoistway width and depth ($A \times B$, $C \times D$)
- Pit depths and overhead clearances
- Door clear entrance widths ($E$)
- Machine room dimensions ($K \times L$) and MRL (Machine Roomless) specifications
- Passenger load capacities (340kg to 4000kg / 3 to 26 persons)

### 4. Interactive Tools & Configurator
- **Cabin Configurator**: Live interactive visualizer allowing clients to select wall finishes, ceilings, mirrors, and floorings.
- **Elevator Finder**: Interactive recommendation wizard matching building type, floor count, and project priorities.
- **Digital Shaft HUD**: Real-time animated elevator floor progress and status indicator.

### 5. Outside-Click Mobile Navigation
- Mobile menu automatically dismisses when tapping or clicking anywhere outside the navbar, tapping the backdrop overlay, selecting a link, or pressing the Escape key.

---

## 🛠️ Technology Stack

- **Frontend Core**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Styling**: [TailwindCSS v3](https://tailwindcss.com/) + Custom CSS Keyframe Animations
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: Vite Production Bundler

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/Vyom1912/KrupaElevator.git

# Navigate to the project directory
cd KrupaElevator

# Install dependencies
npm install

# Start the local development server
npm run dev
```

### Production Build
```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🚀 GitHub Pages Deployment

The repository is configured for automated deployment to GitHub Pages via **GitHub Actions**:

1. **One-Time GitHub Settings Setup**:
   - Go to your repository on GitHub: `https://github.com/Vyom1912/KrupaElevator`
   - Click **Settings** (tab at the top)
   - Click **Pages** (in the left sidebar under "Code and automation")
   - Under **Build and deployment > Source**, select:
     👉 **`GitHub Actions`**
2. **Automatic Deployment**:
   - Any commit pushed to the `main` branch automatically triggers `.github/workflows/deploy.yml`.
   - The workflow installs dependencies, builds the Vite project with base path `/KrupaElevator/`, and deploys it in ~60 seconds.
3. **Live URL**:
   - Your live site will be accessible at:
     **`https://vyom1912.github.io/KrupaElevator/`**
   - Share this link or specific sections like `https://vyom1912.github.io/KrupaElevator/#/products`, `https://vyom1912.github.io/KrupaElevator/#/interior`, etc.

---

## 📂 Project Structure

```
krupa-elevators/
├── public/
│   └── assets/
│       ├── doors/          # Landing & car door style assets
│       ├── drawings/       # Architectural GA hoistway plans & elevations
│       ├── elevators/      # Elevator application visuals
│       ├── hero/           # Hero visual backdrops
│       ├── interiors/      # KEC cabin finishes & COP/LOP panels
│       ├── pages/          # Reference high-resolution catalog spreads (page-[1-12].webp)
│       ├── technologies/   # Motor & drive photography
│       ├── krupa-brochure.pdf # Official complete catalog PDF
│       └── logo.jpg        # Krupa Elevators brand mark
├── src/
│   ├── components/
│   │   ├── common/         # Reusable CTA, PageHero, StickyNav, etc.
│   │   ├── BrochureModal.jsx
│   │   ├── CustomizationProcess.jsx
│   │   ├── ElevatorStructureViewer.jsx
│   │   ├── Footer.jsx
│   │   ├── MergedCivilTable.jsx
│   │   ├── MergedSpecTable.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollReveal.jsx
│   │   └── StandardSpecTable.jsx
│   ├── data/
│   │   ├── companyData.js
│   │   ├── doorSpecificationsTable.js
│   │   ├── doorsMaster.js
│   │   ├── elevatorApplicationDetails.js
│   │   ├── elevatorMaster.js
│   │   ├── elevatorSingleTables.js
│   │   ├── interiorsSeriesData.js
│   │   ├── krupaElevatorsData.js
│   │   ├── projectsData.js
│   │   ├── servicesMaster.js
│   │   └── technologiesMaster.js
│   ├── pages/
│   │   ├── Contact.jsx
│   │   ├── DoorSystems.jsx
│   │   ├── ElevatorDetail.jsx
│   │   ├── Home.jsx
│   │   ├── Interior.jsx
│   │   ├── Products.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Technologies.jsx
│   ├── utils/
│   │   └── assetPath.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 📜 License & Copyright

© 2026 **KRUPA ELEVATORS**. All Rights Reserved.  
Ahmedabad, Gujarat, India.

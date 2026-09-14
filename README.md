# Krupa Elevators — Website

Official website for **Krupa Elevators**, a manufacturer and installer of passenger, hospital, goods, capsule, car, home, MRL and hydraulic elevators across Gujarat, India.

Built with **React 19 + React Router 7 + Vite 8**. Plain CSS with design tokens — no Tailwind, no CSS Modules.

---

## Live Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/products` | Products — all 8 elevator types with specs & dimension tables |
| `/technology` | Technology — machines, drawings, doors, interiors, panels, energy |
| `/service` | Service & Maintenance |
| `/contact` | Contact / Quote form |

---

## Tech Stack

| Tool | Version |
|---|---|
| React | 19 |
| React Router DOM | 7 |
| Vite | 8 |
| TypeScript | 6 (type-checking only, JSX source) |

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher

### Install

```bash
npm install
```

### Dev server

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Production build

```bash
npm run build
```

Output goes to `dist/`. Preview the build locally:

```bash
npm run preview
```

---

## Project Structure

```
src/
├── App.jsx                     # Routes + Navbar/Footer wrapper
├── main.jsx                    # Entry point, imports global tokens.css
├── styles/
│   └── tokens.css              # Design tokens, reset, global utilities
├── components/                 # Reusable UI components (each in own folder)
│   ├── index.js                # Barrel export
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── PageHero/
│   │   ├── PageHero.jsx
│   │   └── PageHero.css
│   ├── SectionLabel/
│   │   ├── SectionLabel.jsx
│   │   └── SectionLabel.css
│   └── SpecTable/
│       ├── SpecTable.jsx
│       └── SpecTable.css
├── pages/                      # Route-level page components (each in own folder)
│   ├── index.js                # Barrel export
│   ├── HomePage/
│   ├── ProductsPage/
│   ├── TechnologyPage/
│   ├── ServicePage/
│   └── ContactPage/
├── data/                       # Static data — elevators, doors, interiors, etc.
│   ├── index.js
│   ├── elevatorData.js
│   ├── doorsData.js
│   ├── energyData.js
│   ├── interiorsData.js
│   ├── machinesData.js
│   └── panelsData.js
├── hooks/
│   ├── index.js
│   ├── useFloorCounter.js      # Animated floor counter for hero section
│   └── useScrollSpy.js         # Highlights active section in sidebar
public/
└── images/                     # All product and UI images (served as static assets)
```

---

## Design System

All colours, spacing, typography and transitions are defined as CSS custom properties in `src/styles/tokens.css`. No value is hardcoded in component CSS — always use `var(--token-name)`.

### Key tokens

| Token | Value |
|---|---|
| `--ink` | `#14181B` — primary dark |
| `--teal` | `#01969C` — brand accent |
| `--orange` | `#EB5A07` — CTA accent |
| `--steel` | `#4B565C` — body text |
| `--mist` | `#F1F3F3` — light background |
| `--nav-h` | `64px` — navbar height |
| `--maxw` | `1240px` — max content width |

---

## Images

All images live in `public/images/` and are referenced as `/images/filename.jpg` — they are **not** imported as modules. To add or replace images, drop files into that folder and update the relevant data file in `src/data/`.

---

## Contact

**Krupa Elevators**
FF-6 Sagun Enclave, Beside Nikol Community Hall,
Nr. Manohar Vill Char Rasta, Nikol,
Ahmedabad – 382430, Gujarat, India

📞 +91 82008 59171
✉️ info@krupaelevators.com
🌐 www.krupaelevators.com

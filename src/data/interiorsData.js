import {
  steelCabine,
  emptyCabine,
  kec4,
  kec5,
  kec6,
  kec8,
  kec9,
  kec10,
} from "../image";

export const INTERIOR_CARDS = [
  {
    code: "KEC-01 — Basic",
    tier: "basic",
    image: steelCabine,
    alt: "KEC-01 Basic",
    description:
      "Standard SS finish, tube lighting, basic handrail. Durable for high-use environments.",
  },
  {
    code: "KEC-02 — Standard",
    tier: "standard",
    image: emptyCabine,
    alt: "KEC-02 Standard",
    description: "Powder-coated panels, LED lighting, brushed-steel handrail.",
  },
  {
    code: "KEC-03 — Standard",
    tier: "standard",
    image: kec4,
    alt: "KEC-03 Standard",
    description:
      "Hairline SS wall panels, false ceiling with LED, oval SS handrail.",
  },
  {
    code: "KEC-04 — Semi Designer",
    tier: "semi",
    image: kec5,
    alt: "KEC-04 Semi",
    description: "Wood-effect panels, indirect LED ceiling, chrome handrail.",
  },
  {
    code: "KEC-05 — Semi Designer",
    tier: "semi",
    image: kec6,
    alt: "KEC-05 Semi",
    description:
      "Mirror SS panels, decorative false ceiling, round SS handrail.",
  },
  {
    code: "KEC-06 — Premium",
    tier: "premium",
    image: kec8,
    alt: "KEC-06 Premium",
    description:
      "Glass cabin, stone-look panels, gold fixtures, decorative LED ceiling.",
  },
  {
    code: "KEC-07 — Premium",
    tier: "premium",
    image: kec9,
    alt: "KEC-07 Premium",
    description: "Rose gold SS, glass ceiling with LED, oval gold handrail.",
  },
  {
    code: "KEC-08 to KEC-11 — Premium",
    tier: "premium",
    image: kec10,
    alt: "KEC-08-11 Premium",
    description:
      "Full designer interiors — custom veneer, stone, glass and gold accents.",
  },
];

export const TIER_TABS = [
  { label: "All Tiers", value: "all" },
  { label: "Basic", value: "basic" },
  { label: "Standard", value: "standard" },
  { label: "Semi Designer", value: "semi" },
  { label: "Premium", value: "premium" },
];

export const FINISH_OPTIONS = [
  {
    element: "Wall Panels",
    options:
      "Hairline SS · Mirror SS · Powder Coated · Laminate · Wooden / Veneer · Glass (Toughened) · Combination Panels",
  },
  {
    element: "Ceiling",
    options:
      "Hairline SS · Mirror SS · Painted MS · False Ceiling with LED · Acrylic Diffuser with LED · Glass Ceiling with LED",
  },
  {
    element: "Flooring",
    options:
      "SS Sheet · Marble · Granite · Anti-skid Chequered MS · Vinyl / PVC · Vitrified Tiles",
  },
  {
    element: "Handrails",
    options:
      "Round SS · Oval SS · Flat SS · Decorative · Wooden · Combination SS + Wood · Three-sides (Hospital)",
  },
];

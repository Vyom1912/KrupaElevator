import {
  autoDoorHero,
  doorCollapsible,
  doorImperforated,
  doorSsCenter,
  doorGlassBig,
  ManualElevator,
} from "../image";

export const DOOR_COLUMNS = [
  {
    type: "manual",
    heroImage: ManualElevator,
    heroAlt: "Manual door elevator",
    heading: "Manual Doors",
    intro:
      "Manually operated doors suited for goods, industrial, and budget passenger elevators.",
    thumbs: [
      { src: doorCollapsible, alt: "Collapsible gate" },
      { src: doorImperforated, alt: "Imperforated door" },
    ],
    items: [
      {
        badge: "manual",
        title: "Collapsible Gate",
        description:
          "MS / SS. Single or double leaf. Passenger, Goods, Car, Home.",
      },
      {
        badge: "manual",
        title: "Single Speed Telescopic",
        description: "MS or SS. 2-panel sliding. Passenger, Goods.",
      },
      {
        badge: "manual",
        title: "Double Speed Telescopic",
        description: "MS or SS. 3-panel sliding. Passenger, Goods.",
      },
      {
        badge: "manual",
        title: "Imperforated — Single Panel",
        description: "MS or SS solid panel. Passenger, Goods, Car.",
      },
      {
        badge: "manual",
        title: "Imperforated — Double Panel",
        description: "MS or SS double-panel. Goods, Car.",
      },
      {
        badge: "manual",
        title: "Swing Door",
        description: "Wood or SS. Manual hinged. Home elevator.",
      },
    ],
  },
  {
    type: "auto",
    heroImage: autoDoorHero,
    heroAlt: "Automatic door elevator",
    heading: "Automatic Doors",
    intro:
      "Motor-operated with door sensor for passenger, hospital, capsule, MRL and home elevators.",
    thumbs: [
      { src: doorSsCenter, alt: "SS centre opening auto door" },
      { src: doorGlassBig, alt: "Full vision glass door" },
    ],
    items: [
      {
        badge: "auto",
        title: "Single Sliding (Centre Opening)",
        description: "SS. Motor operated. Passenger, Home, MRL.",
      },
      {
        badge: "auto",
        title: "Double Sliding (Side Opening)",
        description: "SS. Motor operated. Passenger, MRL.",
      },
      {
        badge: "auto",
        title: "Double Panel Side Opening",
        description: "SS. Wide opening for stretchers. Hospital, Bed.",
      },
      {
        badge: "auto",
        title: "High Speed Auto Door",
        description: "SS. Fast-opening. High-traffic Passenger, MRL.",
      },
      {
        badge: "auto",
        title: "Full Vision Glass Door",
        description: "Toughened glass + SS frame. Capsule/Panoramic.",
      },
      {
        badge: "auto",
        title: "BVT-605 Touch Calling Box",
        description:
          "Touch-operated landing call device. All auto-door elevators.",
      },
    ],
  },
];

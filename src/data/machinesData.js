import {
  MPcontrol,
  rescueDevice,
  integratedDrive,
  mrlGearlessController,
  M67,
  M76,
  I127,
  StandardGearless,
  ManualElevator,
} from "../image";
export const MACHINES = [
  {
    heading: "Geared Traction Machine",
    description:
      "Worm gear type, single or double wrap, Electro-Magnetic Brake. Suited for low to medium speed. Used in TYPE-I and TYPE-II Passenger, Hospital, Goods and Bed elevators.",
    models: [
      {
        src: M67,
        alt: "M67 Geared Traction Machine",
        name: "M67 Geared Traction Machine",
        specs: [
          "Worm Gear, Single/Double Wrap",
          "3-Phase Induction Motor",
          "Electro-Magnetic Brake",
          "VVVF Compatible",
        ],
      },
      {
        src: M76,
        alt: "M76 Geared Traction Machine",
        name: "M76 Geared Traction Machine",
        specs: [
          "Worm Gear, Double Wrap",
          "3-Phase Induction Motor",
          "Heavy-duty EM Brake",
          "VVVF Compatible",
        ],
      },
    ],
  },
  {
    heading: "Gearless Traction Machine",
    description:
      "Permanent Magnet Synchronous Motor (PMSM) — German technology. Compact, silent, energy-efficient. Rotary encoder for precise position control. Used in TYPE-III, Capsule, MRL and Bed elevators.",
    models: [
      {
        src: I127,
        alt: "I-127 Gearless Machine",
        name: "I-127 Gearless Machine",
        specs: [
          "PMSM (German Technology)",
          "Rotary Encoder",
          "Electro-Magnetic Brake",
          "Compact in-hoistway design",
        ],
      },
      {
        src: StandardGearless,
        alt: "Gearless Machine (Standard)",
        name: "Gearless Machine (Standard)",
        specs: [
          "PMSM Motor",
          "Rotary Encoder",
          "EM Brake",
          "VDI 4707 Energy Class A+",
        ],
      },
    ],
  },
];

export const CONTROL_PANELS = [
  {
    icon: { src: integratedDrive, alt: "Elevator Management Board" },
    name: "Elevator Management Board",
    description:
      "Central microprocessor managing all elevator logic, floor calls, door operations and fault monitoring.",
  },
  {
    icon: { src: MPcontrol, alt: "Microprocessor with Integrated Controller" },
    name: "Microprocessor with Integrated Controller",
    description:
      "Integrated VVVF inverter drive controller for smooth speed regulation and energy management.",
  },
  {
    icon: { src: rescueDevice, alt: "Automatic Rescue Device (ARD)" },
    name: "Automatic Rescue Device (ARD)",
    description:
      "Battery-powered rescue unit — moves elevator to nearest floor and opens doors automatically on power failure.",
  },
  {
    icon: {
      src: mrlGearlessController,
      alt: "MRL Gearless Integrated Controller",
    },
    name: "MRL Gearless Integrated Controller",
    description:
      "Compact controller for MRL elevators, fitted inside the hoistway alongside the gearless machine.",
  },
];

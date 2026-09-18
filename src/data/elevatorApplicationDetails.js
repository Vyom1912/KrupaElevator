/**
 * elevatorApplicationDetails.js
 * 
 * Verbatim application-specific data extracted directly from Krupa Elevators brochure
 * via krupaElevatorsData.js (pages 2-4 and 10-17).
 * Each application contains ONLY its unique brochure content without generic repetition.
 */

import {
  trustedSolutionSection,
  energyEfficiencySection,
  elevatorTypes
} from "./krupaElevatorsData";

export const elevatorApplicationDetails = {
  passenger: {
    heading: "Passenger Elevator",
    category: "Residential & Commercial",
    tagline: trustedSolutionSection.heading, // "Trusted Elevator Solution"
    quote: trustedSolutionSection.quote,
    modernElevatorHeading: trustedSolutionSection.modernElevatorHeading,
    modernElevatorParagraphs: trustedSolutionSection.modernElevatorParagraphs,
    elevateYourExperience: trustedSolutionSection.elevateYourExperience,
    specs: {
      availableRatedSpeed: "Up to 1.5 MPS",
      maxTravelHeight: "66 M",
      availableRatedCapacity: "340 to 1360 Kgs",
      maxPassengers: "05 to 20 Passengers",
    },
    pmsMachine: energyEfficiencySection.pmsTractionMachine,
    inverter: energyEfficiencySection.energyEfficientInverter,
    ledLights: energyEfficiencySection.ledLights,
    safetyFeatures: energyEfficiencySection.featureStrip,
    standard: "BIS IS 14665 Standard"
  },

  capsule: {
    heading: elevatorTypes.capsuleElevator.heading,
    category: "Panoramic Observation",
    subheading: elevatorTypes.capsuleElevator.subheading,
    tagline: "Smooth operation comfortable travel",
    specs: elevatorTypes.capsuleElevator.specs,
    forms: elevatorTypes.capsuleElevator.forms, // ["Rear Side", "Semi Circle", "3 Side Cutting Edge", "5 Side Cutting Edge"]
    applications: elevatorTypes.capsuleElevator.applications, // ["Hotels", "Shopping Malls", "Offices", "Multiplexes"]
    cabTypes: elevatorTypes.capsuleElevator.cabTypes,
    cabExterior: elevatorTypes.capsuleElevator.cabExterior,
    standard: "BIS IS 14665 Standard"
  },

  hospital: {
    heading: elevatorTypes.hospitalElevator.heading,
    category: "Medical & Stretcher",
    description: elevatorTypes.hospitalElevator.description,
    tagline: "Smooth, Secure & Electromagnetic Compatible Transit",
    specs: elevatorTypes.hospitalElevator.specs,
    highlights: elevatorTypes.hospitalElevator.highlights,
    features: elevatorTypes.hospitalElevator.features,
    cabinNote: elevatorTypes.hospitalElevator.cabinNote,
    standard: "BIS IS 14665 Standard"
  },

  goods: {
    heading: elevatorTypes.goodsElevator.heading,
    category: "Industrial Freight",
    subheading: elevatorTypes.goodsElevator.subheading,
    tagline: "Bear any heavy load at ease. easy transport",
    specs: elevatorTypes.goodsElevator.specs,
    images: elevatorTypes.goodsElevator.images, // ["Heavy Duty Powder Coated Cabin", "Heavy Duty Traction Machine", "Accurate Leveling", ...]
    standard: "BIS IS 14665 Standard"
  },

  car: {
    heading: elevatorTypes.carElevator.heading,
    category: "Automotive & Parking",
    subheading: elevatorTypes.carElevator.subheading,
    tagline: "The Most Reliable Parking Assistants",
    specs: elevatorTypes.carElevator.specs,
    segment: elevatorTypes.carElevator.segment,
    features: elevatorTypes.carElevator.features,
    materials: elevatorTypes.carElevator.materials,
    doorType: elevatorTypes.carElevator.doorType,
    parkingSystems: elevatorTypes.parkingSystems || ["Car Puzzle Parking", "Car Scissor Lift", "Car Stacker Parking"],
    terraceScope: "3 Nos - Load Hook (3 Ton Capacity) Client Scope Refer Details in Inspection Window at Terrace Level. Holding Beam Capacity: 3500 Kg.",
    standard: "BIS IS 14665 Standard"
  },

  mrl: {
    heading: elevatorTypes.mrlElevator.heading,
    category: "Gearless Machine Roomless",
    subheading: elevatorTypes.mrlElevator.subheading,
    tagline: elevatorTypes.mrlElevator.tagline, // "Minimal space. maximum value !"
    specs: elevatorTypes.mrlElevator.specs,
    description: elevatorTypes.mrlElevator.description,
    benefits: elevatorTypes.mrlElevator.benefits,
    savings: elevatorTypes.mrlElevator.savings,
    standard: "BIS IS 14665 Standard"
  },

  home: {
    heading: elevatorTypes.homeElevator.heading,
    category: "Residential Villa & Bungalow",
    tagline: elevatorTypes.homeElevator.tagline, // "Change Your Lifestyle with Best Home Lift"
    specs: elevatorTypes.homeElevator.specs,
    description: elevatorTypes.homeElevator.description,
    dimensions: elevatorTypes.homeElevator.dimensions,
    landingOperatingPanel: elevatorTypes.homeElevator.landingOperatingPanel,
    energySaving: elevatorTypes.homeElevator.energySaving,
    mainFeaturesAndBenefits: elevatorTypes.homeElevator.mainFeaturesAndBenefits,
    standard: "BIS IS 14665 Standard"
  },

  hydraulic: {
    heading: elevatorTypes.hydraulicElevator.heading,
    category: "Direct & Indirect Piston",
    subheading: elevatorTypes.hydraulicElevator.subheading,
    tagline: elevatorTypes.hydraulicElevator.tagline, // "Green Solutions For Better Tomorrow"
    energySaving: elevatorTypes.hydraulicElevator.energySaving,
    specs: elevatorTypes.hydraulicElevator.specs,
    description: elevatorTypes.hydraulicElevator.description,
    description2: elevatorTypes.hydraulicElevator.description2,
    advantagesAndBenefits: elevatorTypes.hydraulicElevator.advantagesAndBenefits,
    actingTypes: elevatorTypes.hydraulicElevator.actingTypes,
    specificationsHydraulics: elevatorTypes.hydraulicElevator.specificationsHydraulics,
    standard: "BIS IS 14665 Standard"
  }
};

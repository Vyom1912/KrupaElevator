import {
  PageHero,
  Interiors,
  TechPanels,
  TechDoors,
  TechEnergy,
  TechDrawings,
  TechMachines,
} from "../../components/index";

import "./TechnologyPage.css";

export default function TechnologyPage() {
  return (
    <main>
      <PageHero
        label='Engineering'
        heading='Technology Inside Every Elevator'
        text='German PMSM motors, VDI 4707 Class A+ drives, regenerative energy recovery, and microprocessor control panels — built into every Krupa elevator.'
        chips={[
          "VVVF Drive",
          "PMSM Motor",
          "Regenerative",
          "LED Standby",
          "ARD",
          "VDI 4707 A+",
        ]}
        dataBg='TECHNOLOGY'
      />
      <TechMachines />
      <TechDrawings />
      <TechDoors />
      <Interiors />
      <TechPanels />
      <TechEnergy />
    </main>
  );
}

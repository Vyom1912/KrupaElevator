import React from "react";
import { SectionLabel, SpecTable } from "../../components/index";
import { ManualElevatorDesign, AutoElevatorDesign } from "../../image/index";

const M_COLS = [
  "Persons",
  "Kg",
  "Plat.A",
  "Plat.B",
  "Well C",
  "Well D",
  "Entrance E",
  "Door",
  "Machine K",
  "Machine L",
  "Speed m/s",
  "Pit",
  "O/H",
];
const M_ROWS = [
  [
    "5",
    "340",
    "950",
    "1300",
    "1350",
    "1650",
    "760",
    "Collapsible",
    "300+C+600",
    "300+D+1500",
    "≤0.68",
    "1600",
    "4900",
  ],
  [
    "5",
    "340",
    "1300",
    "1000",
    "1700",
    "1300",
    "760",
    "Swing",
    "600+C+300",
    "600+D+1500",
    "",
    "",
    "",
  ],
  [
    "6",
    "408",
    "1200",
    "1200",
    "1600",
    "1500",
    "800",
    "Imperforate",
    "300+C+300",
    "600+D+1500",
    "",
    "",
    "",
  ],
  [
    "8",
    "544",
    "1500",
    "1200",
    "1900",
    "1500",
    "800",
    "Imperforate",
    "600+C+300",
    "300+D+1500",
    "",
    "",
    "",
  ],
  [
    "13",
    "884",
    "1900",
    "1500",
    "2400",
    "1850",
    "900",
    "—",
    "600+C+600",
    "300+D+1500",
    "",
    "",
    "",
  ],
];
const A_COLS = [
  "Persons",
  "Kg",
  "Plat.A",
  "Plat.B",
  "Well C",
  "Well D",
  "Entrance E",
  "Door",
  "Machine K",
  "Machine L",
  "Speed m/s",
  "Pit",
  "O/H",
];
const A_ROWS = [
  [
    "6",
    "408",
    "1200",
    "1300",
    "1700",
    "1800",
    "700",
    "Auto",
    "300+C+300",
    "600+D+1500",
    "≤1.5",
    "1600",
    "4900",
  ],
  [
    "8",
    "544",
    "1500",
    "1330",
    "2000",
    "1800",
    "800",
    "Auto",
    "300+C+300",
    "600+D+1500",
    "",
    "",
    "",
  ],
  [
    "10",
    "680",
    "1650",
    "1450",
    "2150",
    "2000",
    "800",
    "Auto",
    "600+C+600",
    "600+D+1500",
    "",
    "",
    "",
  ],
  [
    "13",
    "884",
    "1900",
    "1500",
    "2400",
    "2000",
    "900",
    "Auto",
    "600+C+600",
    "600+D+1500",
    "",
    "",
    "",
  ],
];

function TechDrawings() {
  return (
    <section className='tech-section' id='drawings'>
      <div className='wrap'>
        <div className='section-head'>
          <SectionLabel>Technical Drawings</SectionLabel>
          <h2 className='section-heading'>Hoistway &amp; Shaft Dimensions</h2>
          <p className='section-subtext'>
            Standard dimension tables for manual and automatic door elevators.
            All dimensions in mm. Hoist way walls min. 230 mm brick or 150 mm
            R.C.C.
          </p>
        </div>

        <div className='drawing-block'>
          <h3 className='drawing-block-heading'>Manual Door Elevator</h3>
          <div className='drawing-layout'>
            <div className='drawing-svg-box'>
              <img src={ManualElevatorDesign} alt='Manual Elevator Design' />
            </div>
            <div>
              <SpecTable
                cols={M_COLS}
                rows={M_ROWS}
                note='All dimensions in mm. General data.'
                ariaLabel='Manual door dimensions'
              />
            </div>
          </div>
        </div>

        <div className='drawing-block'>
          <h3 className='drawing-block-heading'>Automatic Door Elevator</h3>
          <div className='drawing-layout'>
            <div className='drawing-svg-box'>
              <img src={AutoElevatorDesign} alt='Automatic Elevator Design' />
            </div>
            <div>
              <SpecTable
                cols={A_COLS}
                rows={A_ROWS}
                note='All dimensions in mm. General data.'
                ariaLabel='Auto door dimensions'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechDrawings;

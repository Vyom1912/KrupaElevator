import React from "react";

function HomeStrip() {
  const CHIPS = [
    "VVVF Drive",
    "PMSM Motor",
    "Regenerative",
    "VDI 4707 A+",
    "ARD",
    "Auto Leveling",
  ];
  return (
    <div className='strip'>
      <div className='wrap'>
        <div className='strip-inner'>
          <div className='strip-left'>
            <p className='strip-title'>
              Using high quality gear drive machines and V3F Drives, these lift
              performance is of the highest standard
            </p>
            <div className='strip-chips'>
              {CHIPS.map((c) => (
                <span key={c} className='strip-chip'>
                  {c}
                </span>
              ))}
            </div>
          </div>
          <p className='strip-quote'>
            "A flexible solution that unifies form and function. An all-round
            elevator applicable to multiple building types with outstanding
            architectural flexibility for car door and shaft dimensions. Precise
            assures smooth and safe user experience"
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeStrip;

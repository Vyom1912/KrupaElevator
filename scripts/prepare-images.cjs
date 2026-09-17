const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\69df208f-4d6e-4f74-ac74-8e689939e015';
const publicDir = path.join(__dirname, '..', 'public', 'assets');
const interiorsDir = path.join(publicDir, 'interiors');
const elevatorsDir = path.join(publicDir, 'elevators');

if (!fs.existsSync(interiorsDir)) fs.mkdirSync(interiorsDir, { recursive: true });
if (!fs.existsSync(elevatorsDir)) fs.mkdirSync(elevatorsDir, { recursive: true });

// Copy elevator application images
const elevatorCopies = [
  { src: 'elevator_building_1789564692908.jpg', dest: 'building.jpg' },
  { src: 'elevator_private_villa_1789564859543.jpg', dest: 'private-villa.jpg' },
  { src: 'elevator_commercial_1789564950735.jpg', dest: 'commercial.jpg' },
  { src: 'elevator_hospital_1789565036101.jpg', dest: 'hospital.jpg' },
  { src: 'elevator_industrial_1789565225277.jpg', dest: 'industrial.jpg' },
  { src: 'elevator_car_park_1789565361847.jpg', dest: 'car-park.jpg' }
];

elevatorCopies.forEach(({ src, dest }) => {
  const srcPath = path.join(brainDir, src);
  const destPath = path.join(elevatorsDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> elevators/${dest}`);
  } else {
    console.error(`Missing source: ${srcPath}`);
  }
});

// Copy generated interior models
const interiorCopies = [
  { src: 'kec_01_basic_1789565793070.jpg', dest: 'kec-01.jpg' },
  { src: 'kec_02_standard_1789565912199.jpg', dest: 'kec-02.jpg' },
  { src: 'kec_03_semi_designer_1789566082991.jpg', dest: 'kec-03.jpg' },
  { src: 'kec_04_rose_gold_1789566267828.jpg', dest: 'kec-04.jpg' },
  { src: 'kec_05_bronze_1789566323249.jpg', dest: 'kec-05.jpg' },
  { src: 'kec_06_designer_ss_1789566384017.jpg', dest: 'kec-06.jpg' },
  { src: 'kec_07_ms_powder_1789566922256.jpg', dest: 'kec-07.jpg' }
];

interiorCopies.forEach(({ src, dest }) => {
  const srcPath = path.join(brainDir, src);
  const destPath = path.join(interiorsDir, dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> interiors/${dest}`);
  } else {
    console.error(`Missing source: ${srcPath}`);
  }
});

// For KEC-08, 09, 10, 11: crop directly from high-res page-4.webp
async function cropPage4() {
  const page4Path = path.join(publicDir, 'pages', 'page-4.webp');
  if (!fs.existsSync(page4Path)) {
    console.error('page-4.webp not found');
    return;
  }

  // page 4 is 1972 x 1521
  // On the right page (x: ~986 to 1972):
  // KEC-08 cabin is top right: x ~ 1620, y ~ 230, w ~ 200, h ~ 300
  // KEC-09 cabin is mid right: x ~ 1080, y ~ 560, w ~ 210, h ~ 300
  // KEC-10 cabin is bottom right: x ~ 1630, y ~ 930, w ~ 210, h ~ 310
  // KEC-11 cabin is bottom center: x ~ 1080, y ~ 920, w ~ 190, h ~ 300
  
  // Let's crop them with generous margin and resize cleanly
  const crops = [
    { name: 'kec-08.jpg', left: 1610, top: 235, width: 220, height: 305 },
    { name: 'kec-09.jpg', left: 1080, top: 560, width: 220, height: 305 },
    { name: 'kec-10.jpg', left: 1620, top: 935, width: 220, height: 305 },
    { name: 'kec-11.jpg', left: 1080, top: 920, width: 200, height: 305 }
  ];

  for (const c of crops) {
    const dest = path.join(interiorsDir, c.name);
    await sharp(page4Path)
      .extract({ left: c.left, top: c.top, width: c.width, height: c.height })
      .resize(800, 1000, { fit: 'cover' })
      .jpeg({ quality: 95 })
      .toFile(dest);
    console.log(`Extracted & enhanced: ${c.name}`);
  }
}

cropPage4().then(() => console.log('All images ready!'));

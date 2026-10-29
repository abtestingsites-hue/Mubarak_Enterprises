import fs from 'fs';
import path from 'path';
import { CATEGORIES, PRODUCTS } from '../src/data/products';

const PUBLIC_DIR = path.resolve('public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');
const CAT_DIR = path.join(IMAGES_DIR, 'categories');
const PROD_DIR = path.join(IMAGES_DIR, 'products');

fs.mkdirSync(CAT_DIR, { recursive: true });
fs.mkdirSync(PROD_DIR, { recursive: true });

// Map product IDs to friendly filenames
const productFilenames: Record<string, string> = {
  'prod-pt-01': 'prod-pt-01-angle-grinder.jpg',
  'prod-pt-02': 'prod-pt-02-rotary-hammer-drill.jpg',
  'prod-pt-03': 'prod-pt-03-cordless-impact-wrench.jpg',
  'prod-pt-04': 'prod-pt-04-metal-chop-saw.jpg',
  'prod-ht-01': 'prod-ht-01-combination-spanners.jpg',
  'prod-ht-02': 'prod-ht-02-heavy-pipe-wrench.jpg',
  'prod-ht-03': 'prod-ht-03-torque-wrench.jpg',
  'prod-ht-04': 'prod-ht-04-mechanics-socket-set.jpg',
  'prod-we-01': 'prod-we-01-arc-inverter-welder.jpg',
  'prod-we-02': 'prod-we-02-mig-mag-welder.jpg',
  'prod-we-03': 'prod-we-03-welding-helmet.jpg',
  'prod-we-04': 'prod-we-04-gas-flow-regulator.jpg',
  'prod-ca-01': 'prod-ca-01-metal-cutting-wheels.jpg',
  'prod-ca-02': 'prod-ca-02-zirconia-flap-discs.jpg',
  'prod-ca-03': 'prod-ca-03-hss-cobalt-drill-bits.jpg',
  'prod-ca-04': 'prod-ca-04-carbide-rotary-burrs.jpg',
  'prod-se-01': 'prod-se-01-industrial-safety-helmet.jpg',
  'prod-se-02': 'prod-se-02-kevlar-welding-gloves.jpg',
  'prod-se-03': 'prod-se-03-steel-toe-safety-shoes.jpg',
  'prod-se-04': 'prod-se-04-safety-harness.jpg',
  'prod-weq-01': 'prod-weq-01-hydraulic-shop-press.jpg',
  'prod-weq-02': 'prod-weq-02-cast-steel-bench-vice.jpg',
  'prod-weq-03': 'prod-weq-03-industrial-air-compressor.jpg',
  'prod-weq-04': 'prod-weq-04-hydraulic-pallet-truck.jpg',
};

async function downloadFile(url: string, destPath: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to download ${url}: ${response.statusText}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(destPath, buffer);
}

async function main() {
  console.log('Downloading category images...');
  for (const cat of CATEGORIES) {
    const filename = `${cat.id}.jpg`;
    const dest = path.join(CAT_DIR, filename);
    console.log(`Downloading category ${cat.name} -> ${filename}`);
    await downloadFile(cat.imageUrl, dest);
  }

  console.log('\nDownloading product images...');
  for (const prod of PRODUCTS) {
    const filename = productFilenames[prod.id] || `${prod.id}.jpg`;
    const dest = path.join(PROD_DIR, filename);
    console.log(`Downloading product ${prod.name} -> ${filename}`);
    await downloadFile(prod.imageUrl, dest);
  }

  // Create instructions text file
  const instructions = `MUBARAK ENTERPRISES — PRODUCT & CATEGORY IMAGES
==============================================
You can change, replace, or add your own photos here anytime:

1. HOW TO REPLACE A PRODUCT PHOTO:
   Save your photo inside the 'products' folder with the matching filename:
   - prod-pt-01-angle-grinder.jpg
   - prod-pt-02-rotary-hammer-drill.jpg
   - prod-pt-03-cordless-impact-wrench.jpg
   - prod-pt-04-metal-chop-saw.jpg
   - prod-ht-01-combination-spanners.jpg
   - prod-ht-02-heavy-pipe-wrench.jpg
   - prod-ht-03-torque-wrench.jpg
   - prod-ht-04-mechanics-socket-set.jpg
   - prod-we-01-arc-inverter-welder.jpg
   - prod-we-02-mig-mag-welder.jpg
   - prod-we-03-welding-helmet.jpg
   - prod-we-04-gas-flow-regulator.jpg
   - prod-ca-01-metal-cutting-wheels.jpg
   - prod-ca-02-zirconia-flap-discs.jpg
   - prod-ca-03-hss-cobalt-drill-bits.jpg
   - prod-ca-04-carbide-rotary-burrs.jpg
   - prod-se-01-industrial-safety-helmet.jpg
   - prod-se-02-kevlar-welding-gloves.jpg
   - prod-se-03-steel-toe-safety-shoes.jpg
   - prod-se-04-safety-harness.jpg
   - prod-weq-01-hydraulic-shop-press.jpg
   - prod-weq-02-cast-steel-bench-vice.jpg
   - prod-weq-03-industrial-air-compressor.jpg
   - prod-weq-04-hydraulic-pallet-truck.jpg

2. HOW TO REPLACE A CATEGORY PHOTO:
   Save your photo inside the 'categories' folder with the matching filename:
   - power-tools.jpg
   - hand-tools.jpg
   - welding-equipment.jpg
   - cutting-abrasives.jpg
   - safety-equipment.jpg
   - workshop-equipment.jpg

3. RECOMMENDED SPECS:
   - Format: JPG, PNG, or WEBP
   - Image Ratio: 4:3 or 16:9 (approx 800x600px to 1200x800px)
   - Clean product on white or workshop background works best!
`;
  fs.writeFileSync(path.join(IMAGES_DIR, 'HOW-TO-CHANGE-IMAGES.txt'), instructions);
  console.log('\nAll images downloaded and instructions created successfully!');
}

main().catch(err => {
  console.error('Download error:', err);
  process.exit(1);
});


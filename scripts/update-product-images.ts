import fs from 'fs';
import path from 'path';

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

const categoryMap: Record<string, string> = {
  'power-tools': '/images/categories/power-tools.jpg',
  'hand-tools': '/images/categories/hand-tools.jpg',
  'welding-equipment': '/images/categories/welding-equipment.jpg',
  'cutting-abrasives': '/images/categories/cutting-abrasives.jpg',
  'safety-equipment': '/images/categories/safety-equipment.jpg',
  'workshop-equipment': '/images/categories/workshop-equipment.jpg',
};

const filePath = path.resolve('src/data/products.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace category image URLs
for (const [catId, localUrl] of Object.entries(categoryMap)) {
  const regex = new RegExp(`id:\\s*'${catId}',[\\s\\S]*?imageUrl:\\s*'https:[^']*'`, 'm');
  content = content.replace(regex, (match) => {
    return match.replace(/imageUrl:\s*'https:[^']*'/, `imageUrl: '${localUrl}'`);
  });
}

// Replace product image URLs
for (const [prodId, filename] of Object.entries(productFilenames)) {
  const localUrl = `/images/products/${filename}`;
  const regex = new RegExp(`id:\\s*'${prodId}',[\\s\\S]*?imageUrl:\\s*'https:[^']*'`, 'm');
  content = content.replace(regex, (match) => {
    return match.replace(/imageUrl:\s*'https:[^']*'/, `imageUrl: '${localUrl}'`);
  });
}

fs.writeFileSync(filePath, content);
console.log('Successfully updated src/data/products.ts with local image paths!');


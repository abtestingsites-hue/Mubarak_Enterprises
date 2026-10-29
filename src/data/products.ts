import { Category, Product } from '../types';

export const CATEGORIES: Category[] = [
  {
    id: 'power-tools',
    name: 'Power Tools',
    tagline: 'Heavy Duty Motors & Corded/Cordless Machinery',
    description: 'Industrial angle grinders, rotary hammer drills, cut-off chop saws, impact wrenches and demolition hammers for continuous workshop operation.',
    iconName: 'Zap',
    itemCount: 4,
    imageUrl: '/images/categories/power-tools.jpg'
  },
  {
    id: 'hand-tools',
    name: 'Hand Tools',
    tagline: 'Drop-Forged Chrome Vanadium Mechanics Tools',
    description: 'Master spanner sets, torque wrenches, heavy-duty pipe wrenches, socket assortments, and pliers engineered for high-torque mechanical applications.',
    iconName: 'Wrench',
    itemCount: 4,
    imageUrl: '/images/categories/hand-tools.jpg'
  },
  {
    id: 'welding-equipment',
    name: 'Welding Equipment',
    tagline: 'Inverter ARC, MIG/MAG & Fabrication Consumables',
    description: 'Single and three-phase IGBT inverter welding machines, auto-darkening digital helmets, gas flow regulators, and fabrication safety accessories.',
    iconName: 'Flame',
    itemCount: 4,
    imageUrl: '/images/categories/welding-equipment.jpg'
  },
  {
    id: 'cutting-abrasives',
    name: 'Cutting Tools & Abrasives',
    tagline: 'Grinding Wheels, Flap Discs & Carbide Tooling',
    description: 'Reinforced metal cut-off wheels, zirconia flap discs, HSS cobalt drill sets, and tungsten carbide burrs for high-speed metal removal and finishing.',
    iconName: 'Disc',
    itemCount: 4,
    imageUrl: '/images/categories/cutting-abrasives.jpg'
  },
  {
    id: 'safety-equipment',
    name: 'Safety Equipment (PPE)',
    tagline: 'Certified Personal Protective Equipment for Plants',
    description: 'ISI and CE certified industrial safety helmets, heat-resistant Kevlar welding gloves, steel-toe boots, and fall-arrest safety harnesses.',
    iconName: 'ShieldCheck',
    itemCount: 4,
    imageUrl: '/images/categories/safety-equipment.jpg'
  },
  {
    id: 'workshop-equipment',
    name: 'Workshop Equipment',
    tagline: 'Shop Machinery, Vices & Material Handling',
    description: 'Hydraulic shop presses, heavy cast-steel bench vices, industrial two-stage air compressors, and 2.5-ton hydraulic hand pallet trucks.',
    iconName: 'Settings',
    itemCount: 4,
    imageUrl: '/images/categories/workshop-equipment.jpg'
  }
];

export const BRANDS: string[] = [
  'Bosch Industrial',
  'Makita Heavy Duty',
  'DeWalt',
  'ESAB Welding',
  'Norton Saint-Gobain',
  'Taparia Tools',
  'Karam Safety',
  'Mubarak Industrial Standard'
];

export const PRODUCTS: Product[] = [
  // POWER TOOLS
  {
    id: 'prod-pt-01',
    name: 'Heavy Duty Industrial Angle Grinder 180mm',
    category: 'power-tools',
    categoryName: 'Power Tools',
    model: 'GWS 2200-180',
    brand: 'Bosch Industrial',
    shortDescription: '2200W robust motor with restart protection and armored coils for metal fabrication and masonry cutting.',
    description: 'Engineered for continuous heavy duty grinding, weld smoothing, and metal cut-off applications in industrial fabrication units. Features restart protection, vibration control auxiliary handle, and anti-rotation protective guard.',
    specifications: [
      { label: 'Rated Power Input', value: '2,200 W' },
      { label: 'Disc Diameter', value: '180 mm (7 Inch)' },
      { label: 'No-load Speed', value: '8,500 RPM' },
      { label: 'Spindle Thread', value: 'M14' },
      { label: 'Operating Voltage', value: '220–240 V / 50 Hz' },
      { label: 'Weight', value: '5.2 kg' }
    ],
    imageUrl: '/images/products/prod-pt-01-angle-grinder.jpg',
    badge: 'Heavy Duty',
    applications: ['Structural Steel Fabrication', 'Cast Iron Grinding', 'Masonry Cutting', 'Foundry Fettling'],
    featured: true,
    leadTime: 'Immediate dispatch / Ready stock inquiry',
    standardPackaging: 'Individual carton with guard, flange & pin spanner'
  },
  {
    id: 'prod-pt-02',
    name: 'Rotary Hammer Drill 26mm 3-Mode',
    category: 'power-tools',
    categoryName: 'Power Tools',
    model: 'HR2630 SDS-Plus',
    brand: 'Makita Heavy Duty',
    shortDescription: '800W rotary hammer with 3 operation modes (Drilling, Hammer Drilling, and Chipping) for masonry and concrete anchoring.',
    description: 'Compact yet powerful 26mm rotary hammer drill engineered for MEP contractors, plant maintenance teams, and civil anchoring works. Features torque limiter that stops rotation if bit jams, protecting both operator and machine.',
    specifications: [
      { label: 'Continuous Rating Input', value: '800 W' },
      { label: 'Capacity in Concrete', value: '26 mm' },
      { label: 'Impact Energy', value: '2.4 Joules' },
      { label: 'Impacts per Minute (IPM)', value: '0 – 4,600 IPM' },
      { label: 'Bit Shank Type', value: 'SDS-Plus' },
      { label: 'Net Weight', value: '2.8 kg' }
    ],
    imageUrl: '/images/products/prod-pt-02-rotary-hammer-drill.jpg',
    badge: 'Workshop Essential',
    applications: ['Anchor Hole Drilling', 'Electrical Conduit Chasing', 'Plant Machinery Installation'],
    featured: true,
    leadTime: 'Inquire for batch quantities',
    standardPackaging: 'Heavy duty carrying case with depth gauge'
  },
  {
    id: 'prod-pt-03',
    name: 'Brushless High Torque Cordless Impact Wrench 1/2"',
    category: 'power-tools',
    categoryName: 'Power Tools',
    model: 'DCF899 18V XR',
    brand: 'DeWalt',
    shortDescription: 'Delivers up to 950 Nm of fastening torque and 1625 Nm of breakaway torque for heavy plant machinery assembly.',
    description: 'Industrial brushless motor with 3-speed selector switch tailored for automotive garages, structural bolting, and machinery overhaul. Cold-forged hog ring anvil enables rapid socket changes.',
    specifications: [
      { label: 'Max Fastening Torque', value: '950 Nm' },
      { label: 'Max Breakaway Torque', value: '1,625 Nm' },
      { label: 'Drive Size', value: '1/2 Inch Hog Ring' },
      { label: 'Speed Settings', value: '3 Speeds (0-400 / 0-1200 / 0-1900 RPM)' },
      { label: 'Motor Type', value: 'Brushless Industrial' },
      { label: 'Battery Compatibility', value: '18V / 20V Max XR Li-Ion' }
    ],
    imageUrl: '/images/products/prod-pt-03-cordless-impact-wrench.jpg',
    badge: 'High Performance',
    applications: ['Automotive Assemblies', 'Heavy Equipment Maintenance', 'Steel Erection'],
    featured: false,
    leadTime: 'Ready for demonstration upon appointment',
    standardPackaging: 'Kit box with charger & twin Li-Ion packs'
  },
  {
    id: 'prod-pt-04',
    name: 'Industrial Metal Cut-Off Chop Saw 355mm',
    category: 'power-tools',
    categoryName: 'Power Tools',
    model: 'GCO 220 Professional',
    brand: 'Bosch Industrial',
    shortDescription: '2200W heavy-duty cut-off saw with robust steel base and quick-clamp vice for rebar, pipe, and angle iron cutting.',
    description: 'Designed for production cutting in fabrication shops, PEB contractors, and welding stations. Engineered cutting arm with high torsion spring allows smooth downward strokes with minimal fatigue.',
    specifications: [
      { label: 'Rated Input Power', value: '2,200 W' },
      { label: 'Cutting Disc Diameter', value: '355 mm (14 Inch)' },
      { label: 'Disc Bore Size', value: '25.4 mm (1 Inch)' },
      { label: 'No-load Speed', value: '3,800 RPM' },
      { label: 'Base Material', value: 'Reinforced Stamped Steel' },
      { label: 'Weight', value: '15.0 kg' }
    ],
    imageUrl: '/images/products/prod-pt-04-metal-chop-saw.jpg',
    badge: 'Industrial Grade',
    applications: ['Mild Steel Box Pipe Cutting', 'Angle Iron Sizing', 'Rebar Fabrication'],
    featured: true,
    leadTime: 'Stock on floor / Inquire for pallet orders',
    standardPackaging: 'Secure corrugated wooden crate packaging'
  },

  // HAND TOOLS
  {
    id: 'prod-ht-01',
    name: 'Combination Spanner Set 24-Piece (6mm to 32mm)',
    category: 'hand-tools',
    categoryName: 'Hand Tools',
    model: '1800-24 Chrome Vanadium',
    brand: 'Taparia Tools',
    shortDescription: 'Drop-forged Chrome Vanadium steel combination open-ended and ring spanners with satin anti-corrosive finish.',
    description: 'Essential tool kit for mechanical engineers, maintenance teams, and machine tool builders in Coimbatore. Ring end features 12-point MaxiDrive profile that grips fasteners along the flats to prevent rounding off bolt heads.',
    specifications: [
      { label: 'Pieces in Set', value: '24 Pcs' },
      { label: 'Size Range', value: '6 mm to 32 mm (Full range)' },
      { label: 'Material', value: 'Chrome Vanadium (Cr-V) Steel' },
      { label: 'Hardness', value: '42 to 48 HRC' },
      { label: 'Manufacturing Standard', value: 'Conforms to IS 6149-1984' },
      { label: 'Finish', value: 'Micro Satin Nickel Chrome Plated' }
    ],
    imageUrl: '/images/products/prod-ht-01-combination-spanners.jpg',
    badge: 'Workshop Essential',
    applications: ['Machine Tool Assembly', 'Foundry Machinery Maintenance', 'Pump Set Servicing'],
    featured: true,
    leadTime: 'Immediate availability for individual and bulk trade orders',
    standardPackaging: 'Heavy duty tetron roll-up tool pouch'
  },
  {
    id: 'prod-ht-02',
    name: 'Heavy Duty Drop-Forged Pipe Wrench 18"',
    category: 'hand-tools',
    categoryName: 'Hand Tools',
    model: 'PW-18 Industrial',
    brand: 'Taparia Tools',
    shortDescription: 'Ductile iron housing with precision-machined hook and heel jaws for high-torque pipe fitting and valve assembly.',
    description: 'Built for industrial pipefitters, boiler maintenance engineers, and textile process plant technicians. The floating hook jaw allows instantaneous grip and ratcheting release without slip.',
    specifications: [
      { label: 'Overall Length', value: '450 mm (18 Inch)' },
      { label: 'Jaw Capacity (OD Pipe)', value: 'Up to 60 mm (2.3 Inch)' },
      { label: 'Jaw Material', value: 'Hardened Alloy Tool Steel' },
      { label: 'Handle Construction', value: 'Heavy Duty I-Beam Profile' },
      { label: 'Testing Standard', value: 'IS 4003 Part 1' },
      { label: 'Weight', value: '2.4 kg' }
    ],
    imageUrl: '/images/products/prod-ht-02-heavy-pipe-wrench.jpg',
    badge: 'Heavy Duty',
    applications: ['Industrial Steam & Water Piping', 'Foundry Hydraulic Fitting', 'Chemical Line Overhaul'],
    featured: false,
    leadTime: 'Available in sizes 10", 12", 14", 18", 24", 36"',
    standardPackaging: 'Pack of 2 or carton of 10 for bulk trade'
  },
  {
    id: 'prod-ht-03',
    name: 'Adjustable Click-Type Torque Wrench 1/2" (40–210 Nm)',
    category: 'hand-tools',
    categoryName: 'Hand Tools',
    model: 'TW-210 Pro',
    brand: 'Mubarak Industrial Standard',
    shortDescription: 'Dual scale calibrated torque wrench with audible click indicator for precision cylinder head and bearing assembly.',
    description: 'Precision mechanical torque wrench for precision engineering, automotive engine overhaul, and pump shaft assembly where exact tightening torque is non-negotiable. Supplied with inspection calibration certificate.',
    specifications: [
      { label: 'Torque Range', value: '40 to 210 Nm (30 to 155 lbf.ft)' },
      { label: 'Drive Size', value: '1/2 Inch Square Drive' },
      { label: 'Accuracy', value: '± 4% of reading' },
      { label: 'Graduation', value: '1.0 Nm increments' },
      { label: 'Mechanism', value: 'Reversible 24-Tooth Ratchet Head' },
      { label: 'Overall Length', value: '470 mm' }
    ],
    imageUrl: '/images/products/prod-ht-03-torque-wrench.jpg',
    badge: 'Precision Tool',
    applications: ['Flange Bolting', 'Automotive Cylinder Heads', 'Electric Motor Casing Assembly'],
    featured: true,
    leadTime: 'Individual test certificate included',
    standardPackaging: 'Blow-mold protective plastic case'
  },
  {
    id: 'prod-ht-04',
    name: 'Master Mechanics 1/2" Drive Socket Set 24-Piece',
    category: 'hand-tools',
    categoryName: 'Hand Tools',
    model: 'SS-1224 Cr-V',
    brand: 'Taparia Tools',
    shortDescription: 'Full 1/2" drive socket set with reversible quick-release ratchet, extension bars, and universal joint.',
    description: 'Complete workshop mechanical socket set spanning 10mm to 32mm with accessories. Hardened and tempered Chrome Vanadium alloy provides maximum resistance against stripping under heavy torque.',
    specifications: [
      { label: 'Drive Size', value: '1/2 Inch' },
      { label: 'Sockets Included', value: '10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 30, 32 mm' },
      { label: 'Ratchet Handle', value: 'Quick release button, 72-teeth smooth action' },
      { label: 'Accessories', value: 'Extension Bars (125mm & 250mm), Sliding T-Bar, Universal Joint' },
      { label: 'Case Material', value: 'Heavy Duty Metal Powder-Coated Tool Box' }
    ],
    imageUrl: '/images/products/prod-ht-04-mechanics-socket-set.jpg',
    badge: 'Workshop Essential',
    applications: ['Assembly Lines', 'Agricultural Machinery Servicing', 'Maintenance Shops'],
    featured: false,
    leadTime: 'Standard shelf item',
    standardPackaging: 'Sturdy steel trunk box with molded tray'
  },

  // WELDING EQUIPMENT
  {
    id: 'prod-we-01',
    name: 'IGBT Inverter ARC / MMA Welder 200A',
    category: 'welding-equipment',
    categoryName: 'Welding Equipment',
    model: 'HandyArc 200i',
    brand: 'ESAB Welding',
    shortDescription: 'Portable 200A inverter welding machine capable of burning 2.5mm to 4.0mm electrodes continuously.',
    description: 'Robust single-phase IGBT welding inverter designed for fabrication shops, maintenance crews, and on-site construction works. Features hot start, anti-stick technology, and arc force auto-compensation for seamless arc striking.',
    specifications: [
      { label: 'Welding Output Current', value: '20 A to 200 A' },
      { label: 'Duty Cycle', value: '200A @ 60% / 155A @ 100%' },
      { label: 'Input Supply', value: '230 V ± 15% / 50-60 Hz Single Phase' },
      { label: 'Electrode Capacity', value: 'Supports up to 4.0 mm (7018, 6013)' },
      { label: 'Cooling Method', value: 'Forced Air Industrial Fan' },
      { label: 'Machine Weight', value: '4.8 kg' }
    ],
    imageUrl: '/images/products/prod-we-01-arc-inverter-welder.jpg',
    badge: 'Industrial Grade',
    applications: ['Structural Steel Fabrication', 'Gate & Grill Work', 'Farm Equipment Repairs'],
    featured: true,
    leadTime: 'Demo available / Prompt regional supply',
    standardPackaging: 'Includes electrode holder, ground clamp & welding cables'
  },
  {
    id: 'prod-we-02',
    name: 'Industrial MIG / MAG Semi-Automatic Welder 250A',
    category: 'welding-equipment',
    categoryName: 'Welding Equipment',
    model: 'Fabricator EM 251i',
    brand: 'ESAB Welding',
    shortDescription: 'Heavy-duty 250A MIG/MAG welding unit with integrated wire feeder for continuous mild steel and stainless steel fabrication.',
    description: 'High-efficiency industrial MIG welding system suited for Coimbatore automotive component manufacturers and pressure vessel fabrication units. Digital displays for voltage and wire feed speed provide precise puddle control.',
    specifications: [
      { label: 'Welding Process', value: 'MIG / MAG (Solid & Flux Cored Wire)' },
      { label: 'Rated Output Current', value: '250 A @ 60% Duty Cycle' },
      { label: 'Input Voltage', value: '415 V ± 10% Three Phase' },
      { label: 'Wire Spool Capacity', value: '15 kg Spools (0.8 mm / 1.0 mm / 1.2 mm)' },
      { label: 'Drive Mechanism', value: 'Heavy Duty 4-Roll Wire Drive' },
      { label: 'Enclosure Protection', value: 'IP23S Industrial Standard' }
    ],
    imageUrl: '/images/products/prod-we-02-mig-mag-welder.jpg',
    badge: 'Heavy Duty',
    applications: ['Automobile Body Building', 'Sheet Metal Enclosures', 'Heavy Machinery Frames'],
    featured: true,
    leadTime: 'Special order batch delivery / Enquire for lead time',
    standardPackaging: 'Welder on heavy castor wheels with MIG torch and regulator'
  },
  {
    id: 'prod-we-03',
    name: 'Auto-Darkening Digital Welding Helmet DIN 9-13',
    category: 'welding-equipment',
    categoryName: 'Welding Equipment',
    model: 'Sentinel A50 High Clarity',
    brand: 'ESAB Welding',
    shortDescription: 'High-definition true color optical class 1/1/1/2 welding filter with touch screen control and external grind button.',
    description: 'Protects the welder against UV and IR radiation with ultra-fast switching time. Broad viewing area allows panoramic visibility during SMAW, GMAW, GTAW, and plasma cutting operations.',
    specifications: [
      { label: 'Optical Class', value: '1/1/1/2 (True Color Technology)' },
      { label: 'Viewing Area', value: '100 x 60 mm' },
      { label: 'Shade Range', value: 'DIN 5-8 / 9-13 Variable' },
      { label: 'Light State Shade', value: 'DIN 3' },
      { label: 'Switching Speed', value: '0.00004 sec (1/25,000 s)' },
      { label: 'Power Source', value: 'Solar Cell + Replaceable CR2450 Battery' }
    ],
    imageUrl: '/images/products/prod-we-03-welding-helmet.jpg',
    badge: 'Precision Tool',
    applications: ['TIG Stainless Steel Welding', 'Pipe Fabrication', 'General Workshop Welding'],
    featured: false,
    leadTime: 'Available from stock',
    standardPackaging: 'Display retail box with spare clear front lenses'
  },
  {
    id: 'prod-we-04',
    name: 'Dual Gauge Industrial Gas Flow Regulator (CO2 / Argon)',
    category: 'welding-equipment',
    categoryName: 'Welding Equipment',
    model: 'G-250 High Purity',
    brand: 'ESAB Welding',
    shortDescription: 'Forged brass body regulator with dual pressure gauges for cylinder pressure and precise gas flow rate monitoring.',
    description: 'Engineered for shielding gas control in MIG and TIG welding processes. Sintered bronze inlet filter prevents cylinder contaminants from entering the regulator mechanism.',
    specifications: [
      { label: 'Applicable Gases', value: 'Argon, CO2, Mixed Gases (Ar/CO2)' },
      { label: 'Max Inlet Pressure', value: '250 bar (3,600 PSI)' },
      { label: 'Flow Rate Range', value: '0 to 35 Litres/min' },
      { label: 'Body Material', value: 'Forged Solid Brass' },
      { label: 'Connection Standard', value: '5/8" BSP RH Standard Gas Cylinder' },
      { label: 'Safety Feature', value: 'Integrated Over-pressure Relief Valve' }
    ],
    imageUrl: '/images/products/prod-we-04-gas-flow-regulator.jpg',
    badge: 'Workshop Essential',
    applications: ['Shielded Metal Arc Welding', 'Gas Purging Systems', 'TIG Fabrication Work'],
    featured: false,
    leadTime: 'Stock readily available in Coimbatore',
    standardPackaging: 'Individual boxed with hose barb connector'
  },

  // CUTTING TOOLS & ABRASIVES
  {
    id: 'prod-ca-01',
    name: 'Extra Thin Metal Cut-Off Wheels 105 x 1.0mm (Box of 50)',
    category: 'cutting-abrasives',
    categoryName: 'Cutting Tools & Abrasives',
    model: 'Vulcan Inox Ultra-Cut',
    brand: 'Norton Saint-Gobain',
    shortDescription: 'Free of iron, sulfur, and chlorine (< 0.1%) for clean, burr-free cutting of stainless steel (SS 304/316) and structural mild steel.',
    description: 'High-speed thin cutting wheels engineered for angle grinders. Minimizes material loss and heat generation, preventing blue thermal discoloration on stainless steel sheets and pipes.',
    specifications: [
      { label: 'Dimensions', value: '105 mm (4") x 1.0 mm x 16 mm Bore' },
      { label: 'Max Operating Speed', value: '15,300 RPM (80 m/s)' },
      { label: 'Abrasive Grain', value: 'Premium White Aluminum Oxide' },
      { label: 'Reinforcement', value: 'Double High Tensile Fiberglass Mesh' },
      { label: 'Certification', value: 'EN 12413 / oSa Certified Safety' },
      { label: 'Quantity per Pack', value: '50 Pieces per tin / box' }
    ],
    imageUrl: '/images/products/prod-ca-01-metal-cutting-wheels.jpg',
    badge: 'Heavy Duty',
    applications: ['Stainless Steel Fabrication', 'Sheet Metal Trimming', 'Rebar Cutting'],
    featured: true,
    leadTime: 'Available in bulk carton quantities (500 / 1000 pcs)',
    standardPackaging: 'Airtight metal container of 50 discs'
  },
  {
    id: 'prod-ca-02',
    name: 'Zirconia Alumina Flap Discs 100mm (Grit 60/80/120)',
    category: 'cutting-abrasives',
    categoryName: 'Cutting Tools & Abrasives',
    model: 'Quantum R828 Flap Disc',
    brand: 'Norton Saint-Gobain',
    shortDescription: 'Self-sharpening zirconia abrasive flaps bonded on fiberglass backing plate for rapid weld blending and edge deburring.',
    description: 'Outlasts standard aluminum oxide discs up to 3 times. Ideal for edge chamfering, weld seam leveling, and surface preparation prior to painting or powder coating.',
    specifications: [
      { label: 'Diameter', value: '100 mm (4 Inch)' },
      { label: 'Bore Size', value: '16 mm' },
      { label: 'Available Grits', value: 'Grit 40, 60, 80, 120' },
      { label: 'Abrasive Grain', value: 'Zirconia Alumina Self-Sharpening' },
      { label: 'Backing Plate', value: 'Conical Type 29 Fiberglass Backing' },
      { label: 'Max Speed', value: '13,300 RPM' }
    ],
    imageUrl: '/images/products/prod-ca-02-zirconia-flap-discs.jpg',
    badge: 'Workshop Essential',
    applications: ['Weld Grinding', 'Rust & Scale Removal', 'Beveling Welded Joints'],
    featured: false,
    leadTime: 'Bulk supply to industrial factories and workshops',
    standardPackaging: 'Shrink-wrapped pack of 10 discs'
  },
  {
    id: 'prod-ca-03',
    name: 'Industrial HSS-Co5 Cobalt Drill Bit Set (1–13mm, 25-Piece)',
    category: 'cutting-abrasives',
    categoryName: 'Cutting Tools & Abrasives',
    model: 'Co5 Pro Heavy Tensile',
    brand: 'Mubarak Industrial Standard',
    shortDescription: '5% Cobalt high-speed steel jobber drill bits for drilling high-tensile stainless steel, titanium, and cast iron.',
    description: '135-degree split point tip eliminates bit walking and center punching requirements. Heat resistant up to 600°C for demanding drilling in CNC machine shops and foundry casting inspection.',
    specifications: [
      { label: 'Piece Count', value: '25 Pieces (1.0 mm to 13.0 mm in 0.5 mm steps)' },
      { label: 'Material Composition', value: 'M35 High Speed Steel with 5% Cobalt' },
      { label: 'Point Angle', value: '135° Split Point DIN 1412 C' },
      { label: 'Flute Design', value: 'Fully Ground Parabolic Flutes' },
      { label: 'Hardness', value: '65–67 HRC' },
      { label: 'Standard', value: 'DIN 338 RN' }
    ],
    imageUrl: '/images/products/prod-ca-03-hss-cobalt-drill-bits.jpg',
    badge: 'Precision Tool',
    applications: ['Stainless Steel Plate Drilling', 'Automotive Castings', 'Hardened Alloy Steel'],
    featured: true,
    leadTime: 'Standard stock in Coimbatore warehouse',
    standardPackaging: 'Indexed red industrial metal indexed cassette'
  },
  {
    id: 'prod-ca-04',
    name: 'Tungsten Carbide Rotary Burr Set 1/4" Shank (5-Piece)',
    category: 'cutting-abrasives',
    categoryName: 'Cutting Tools & Abrasives',
    model: 'CB-5 Double Cut',
    brand: 'Mubarak Industrial Standard',
    shortDescription: 'Solid micrograin tungsten carbide rotary burrs with double cut teeth for pneumatic die grinders and deburring tools.',
    description: 'Set includes Cylinder, Ball Nosed Cylinder, Tree Pointed, Ball, and Flame shapes. Double cut flute geometry provides fast chip evacuation and smooth surface finish on steel, bronze, and aluminum.',
    specifications: [
      { label: 'Shank Diameter', value: '6 mm (1/4 Inch)' },
      { label: 'Head Diameter', value: '10 mm & 12 mm Assorted' },
      { label: 'Cut Type', value: 'Double Cut / Diamond Pattern' },
      { label: 'Material', value: 'Virgin Tungsten Carbide (YG8 / K30)' },
      { label: 'Max Recommended RPM', value: '25,000 RPM' },
      { label: 'Head Shapes Included', value: 'Type A, Type C, Type D, Type F, Type G' }
    ],
    imageUrl: '/images/products/prod-ca-04-carbide-rotary-burrs.jpg',
    badge: 'Precision Tool',
    applications: ['Casting Porting & Deburring', 'Die & Mold Finishing', 'Weld Cleaning'],
    featured: false,
    leadTime: 'Supplied directly for die-makers and foundries',
    standardPackaging: 'Compact aluminum storage case'
  },

  // SAFETY EQUIPMENT
  {
    id: 'prod-se-01',
    name: 'Industrial Safety Helmet with Ratchet Suspension',
    category: 'safety-equipment',
    categoryName: 'Safety Equipment',
    model: 'Shelmet PN521',
    brand: 'Karam Safety',
    shortDescription: 'High-density polymer safety helmet with 6-point textile cradle, chin strap, and wheel ratchet adjustment.',
    description: 'Conforms to IS 2925 and EN 397 standards. Designed with rain gutter profile and lateral deformation resistance for factory workers, civil construction sites, and foundry personnel.',
    specifications: [
      { label: 'Shell Material', value: 'High Density Polyethylene (HDPE)' },
      { label: 'Suspension System', value: '6-Point Textile Cradle with Ratchet Adjuster' },
      { label: 'Certification', value: 'ISI Marked to IS:2925:1984 / CE EN 397' },
      { label: 'Head Size Range', value: '52 cm to 64 cm' },
      { label: 'Accessories Slot', value: 'Universal 30mm slot for ear muffs and visors' },
      { label: 'Color Options', value: 'White, Yellow, Blue, Red, Green' }
    ],
    imageUrl: '/images/products/prod-se-01-industrial-safety-helmet.jpg',
    badge: 'Industrial Grade',
    applications: ['Foundry & Casting Units', 'Construction Sites', 'Plant Maintenance'],
    featured: true,
    leadTime: 'Bulk corporate orders delivered across Tamil Nadu',
    standardPackaging: 'Carton of 25 helmets with sweatbands'
  },
  {
    id: 'prod-se-02',
    name: 'Heavy Duty Cow Split Leather Welding Gloves 14"',
    category: 'safety-equipment',
    categoryName: 'Safety Equipment',
    model: 'WL-140 Kevlar Stitched',
    brand: 'Karam Safety',
    shortDescription: '14-inch heavy-duty split cowhide welding gloves with full cotton fleece lining and Kevlar heat-resistant stitching.',
    description: 'Provides superior protection against radiant heat, molten metal spatter, and abrasions during high-amperage ARC and MIG welding. Reinforced thumb crotch provides longevity under repetitive clamping.',
    specifications: [
      { label: 'Length', value: '350 mm (14 Inch Gauntlet Cuff)' },
      { label: 'Leather Grade', value: 'A-Grade Cow Split Leather (1.2–1.4 mm thickness)' },
      { label: 'Stitching Thread', value: 'Dupont Kevlar Flame Resistant Thread' },
      { label: 'Internal Lining', value: 'Soft Cotton Fleece Inner Lining' },
      { label: 'Standards', value: 'EN 388 (4244) & EN 407 (413X4X)' },
      { label: 'Heat Resistance', value: 'Up to 250°C Contact Heat' }
    ],
    imageUrl: '/images/products/prod-se-02-kevlar-welding-gloves.jpg',
    badge: 'Workshop Essential',
    applications: ['Manual Metal Arc Welding', 'Gas Cutting & Torch Work', 'Foundry Pouring'],
    featured: false,
    leadTime: 'Available in pairs or wholesale sacks (120 pairs)',
    standardPackaging: 'Pack of 12 pairs'
  },
  {
    id: 'prod-se-03',
    name: 'Steel Toe Industrial Safety Shoes (ISI / EN ISO 20345)',
    category: 'safety-equipment',
    categoryName: 'Safety Equipment',
    model: 'FS01 Steel Toe Work Boot',
    brand: 'Karam Safety',
    shortDescription: 'Genuine grain leather safety footwear featuring 200 Joules impact steel toe cap and dual density PU oil-resistant sole.',
    description: 'Engineered for shop-floor personnel, CNC operators, and warehouse workers. Sole provides high slip resistance on oily surfaces, antistatic properties, and energy absorption in the heel.',
    specifications: [
      { label: 'Upper Material', value: 'Buff Barton Genuine Leather (1.8–2.0 mm)' },
      { label: 'Toe Cap', value: 'Rust-resistant Carbon Steel (200J Impact Protection)' },
      { label: 'Outsole', value: 'Direct Injected Dual Density Polyurethane (PU)' },
      { label: 'Sole Features', value: 'Oil Resistant, Acid Resistant, Anti-Slip (SRC)' },
      { label: 'Standards', value: 'IS 15298 (Part 2) / EN ISO 20345:2011 S1' },
      { label: 'Available Sizes', value: 'UK / India Sizes 5 through 12' }
    ],
    imageUrl: '/images/products/prod-se-03-steel-toe-safety-shoes.jpg',
    badge: 'Industrial Grade',
    applications: ['CNC Machine Shops', 'Heavy Engineering Plants', 'Warehouse Operations'],
    featured: true,
    leadTime: 'Batch supply for company staff uniforms upon requirement',
    standardPackaging: 'Individual pair box with moisture desiccants'
  },
  {
    id: 'prod-se-04',
    name: 'Full Body Fall Arrest Safety Harness with Twin Lanyard',
    category: 'safety-equipment',
    categoryName: 'Safety Equipment',
    model: 'Magna PN 56',
    brand: 'Karam Safety',
    shortDescription: 'Full body harness with dorsal D-ring, adjustable chest and thigh straps, and energy absorbing twin rope lanyard with scaffold hooks.',
    description: 'Mandatory PPE for high-elevation maintenance, crane gantry inspection, roofing, and PEB steel erection works. High tensile polyester webbing with dual color coding ensures rapid donning.',
    specifications: [
      { label: 'Webbing Material', value: 'High Tenacity 44mm Polyester Webbing' },
      { label: 'Breaking Strength', value: 'Minimum 23 kN (2,300 kgf)' },
      { label: 'Attachment Points', value: '1 Dorsal D-Ring for Fall Arrest' },
      { label: 'Lanyard Type', value: 'Twin 1.8m Energy Absorber with 55mm Scaffold Hooks' },
      { label: 'Standards', value: 'IS 3521:1999 / EN 361:2002' },
      { label: 'Buckles', value: 'Stamped Steel with Corrosion Resistant Zinc Plating' }
    ],
    imageUrl: '/images/products/prod-se-04-safety-harness.jpg',
    badge: 'Industrial Grade',
    applications: ['Roof Sheeting & PEB Erection', 'Overhead Crane Servicing', 'Scaffolding Work'],
    featured: false,
    leadTime: 'Immediate regional supply',
    standardPackaging: 'Waterproof protective storage bag with user manual'
  },

  // WORKSHOP EQUIPMENT
  {
    id: 'prod-weq-01',
    name: 'Hydraulic Shop Press 20-Ton Heavy Duty Frame',
    category: 'workshop-equipment',
    categoryName: 'Workshop Equipment',
    model: 'HSP-20 Dual Pump',
    brand: 'Mubarak Industrial Standard',
    shortDescription: 'Heavy H-frame steel hydraulic press with multi-position bed and glycerin-filled pressure gauge for bearing and bush pressing.',
    description: 'A cornerstone for mechanical repair workshops, motor rewinding centers, and automobile overhaul facilities. Dual-speed hydraulic hand pump allows rapid ram approach and high-pressure controlled pressing.',
    specifications: [
      { label: 'Capacity', value: '20 Metric Tons' },
      { label: 'Ram Stroke', value: '160 mm' },
      { label: 'Working Range (Bed Height)', value: '0 mm to 950 mm adjustable' },
      { label: 'Pump System', value: 'Manual Dual-Speed Hand Pump with Return Spring' },
      { label: 'Pressure Gauge', value: 'Glycerin-damped Ton/PSI dual reading dial' },
      { label: 'Overall Dimensions', value: '700 mm (W) x 600 mm (D) x 1650 mm (H)' }
    ],
    imageUrl: '/images/products/prod-weq-01-hydraulic-shop-press.jpg',
    badge: 'Heavy Duty',
    applications: ['Bearing Removal & Insertion', 'Shaft Straightening', 'Bushing & Gear Pressing'],
    featured: true,
    leadTime: 'Enquire for dispatch schedule or workshop collection in Coimbatore',
    standardPackaging: 'Pre-assembled base on wooden transport pallet'
  },
  {
    id: 'prod-weq-02',
    name: 'Cast Steel Swivel Base Heavy Duty Bench Vice 8" (200mm)',
    category: 'workshop-equipment',
    categoryName: 'Workshop Equipment',
    model: 'BV-200S Cast Steel',
    brand: 'Mubarak Industrial Standard',
    shortDescription: 'High-tensile cast steel body bench vice with 360-degree locking swivel base and hardened serrated tool-steel jaws.',
    description: 'Engineered to withstand heavy hammering, filing, and pipe bending without cracking. Machined anvil surface provides a reliable striking plate for fabrication and forging adjustments.',
    specifications: [
      { label: 'Jaw Width', value: '200 mm (8 Inch)' },
      { label: 'Max Jaw Opening', value: '225 mm (8.8 Inch)' },
      { label: 'Throat Depth', value: '105 mm' },
      { label: 'Body Material', value: 'High Tensile Ductile Cast Steel' },
      { label: 'Base Mechanism', value: '360° Swivel with dual locking handles' },
      { label: 'Total Weight', value: '29.5 kg' }
    ],
    imageUrl: '/images/products/prod-weq-02-cast-steel-bench-vice.jpg',
    badge: 'Workshop Essential',
    applications: ['Tool & Die Making', 'Fabrication Clamping', 'Heavy Mechanical Repairs'],
    featured: true,
    leadTime: 'Inquire for sizes 4", 6", 8", 10"',
    standardPackaging: 'Reinforced carton with protective anti-rust wax wrap'
  },
  {
    id: 'prod-weq-03',
    name: 'Industrial Two-Stage Reciprocating Air Compressor 5 HP',
    category: 'workshop-equipment',
    categoryName: 'Workshop Equipment',
    model: 'AC-500/250 Two-Stage',
    brand: 'Mubarak Industrial Standard',
    shortDescription: '5 HP continuous duty cast-iron compressor pump mounted on a 250-liter tested air receiver tank for pneumatic tools.',
    description: 'Built for industrial manufacturing units, spray painting booths, pneumatic assembly stations, and tyre retreading plants. Features cast-iron cylinders with deep cooling fins and automated pressure switch.',
    specifications: [
      { label: 'Motor Power', value: '5.0 HP (3.7 kW) 3-Phase Induction Motor' },
      { label: 'Working Pressure', value: '12 bar (175 PSI)' },
      { label: 'Piston Displacement', value: '18 CFM (510 Litres/min)' },
      { label: 'Air Tank Capacity', value: '250 Litres Hydraulic Tested Vessel' },
      { label: 'Drive Type', value: 'V-Belt Driven with Wire Mesh Safety Guard' },
      { label: 'Lubrication', value: 'Splash Lubrication with Oil Level Sight Glass' }
    ],
    imageUrl: '/images/products/prod-weq-03-industrial-air-compressor.jpg',
    badge: 'Industrial Grade',
    applications: ['Pneumatic Impact Wrenches', 'Sandblasting Cabinets', 'CNC Air Purging'],
    featured: false,
    leadTime: 'Manufactured and assembled to order / Enquire for lead time',
    standardPackaging: 'Skid mounted with protective wrapping'
  },
  {
    id: 'prod-weq-04',
    name: 'Hydraulic Hand Pallet Truck 2,500 kg (2.5 Ton)',
    category: 'workshop-equipment',
    categoryName: 'Workshop Equipment',
    model: 'PT-2500 Heavy Lift',
    brand: 'Mubarak Industrial Standard',
    shortDescription: '2.5-ton capacity hand pallet truck with leak-proof hydraulic pump, tandem nylon rollers, and ergonomic 3-position lever.',
    description: 'Indispensable for shop floor material handling, transport dispatch bays, and raw material warehouses. Heavy gauge reinforced steel forks handle standard industrial Euro and wooden pallets with ease.',
    specifications: [
      { label: 'Rated Capacity', value: '2,500 kg (2.5 Tons)' },
      { label: 'Fork Dimensions', value: '1150 mm (L) x 550 mm (Overall Width)' },
      { label: 'Lift Height', value: 'Min 85 mm to Max 200 mm' },
      { label: 'Hydraulic Pump', value: 'One-piece cast leak-proof cylinder with overload bypass' },
      { label: 'Wheel Material', value: 'Tandem Heavy Duty Nylon / Polyurethane' },
      { label: 'Steering Arc', value: '210° Turning Radius for tight aisles' }
    ],
    imageUrl: '/images/products/prod-weq-04-hydraulic-pallet-truck.jpg',
    badge: 'Heavy Duty',
    applications: ['Factory Internal Logistics', 'Warehouse Pallet Moving', 'Loading Dock Transit'],
    featured: true,
    leadTime: 'Stock available for quick dispatch across Coimbatore industrial areas',
    standardPackaging: 'Factory packed with handle detached for transit'
  }
];

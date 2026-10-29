import { PRODUCTS, CATEGORIES } from '../src/data/products';
import { buildWhatsAppMessage, generateWhatsAppUrl, sanitizeWhatsAppNumber } from '../src/utils/whatsapp';
import { BUSINESS_CONFIG } from '../src/config/business';
import { FAQS } from '../src/data/faqs';
import { CUSTOMER_REVIEWS } from '../src/data/reviews';

console.log('=== RUNNING MUBARAK ENTERPRISES VERIFICATION SUITE ===\n');

let passCount = 0;
let failCount = 0;

function assert(condition: unknown, message: string) {
  if (Boolean(condition)) {
    console.log(`[PASS] ${message}`);
    passCount++;
  } else {
    console.error(`[FAIL] ${message}`);
    failCount++;
  }
}

// TEST 1: Categories
console.log('\n--- 1. CATEGORIES CHECK ---');
assert(CATEGORIES.length === 6, `Total categories should be 6, found: ${CATEGORIES.length}`);
const expectedCatIds = [
  'power-tools',
  'hand-tools',
  'welding-equipment',
  'cutting-abrasives',
  'safety-equipment',
  'workshop-equipment'
];
expectedCatIds.forEach(id => {
  const found = CATEGORIES.some(c => c.id === id);
  assert(found, `Category '${id}' is defined in CATEGORIES`);
});

// TEST 2: Products
console.log('\n--- 2. PRODUCTS CHECK ---');
assert(PRODUCTS.length >= 18, `Expected at least 18 products, found: ${PRODUCTS.length}`);

PRODUCTS.forEach((prod, i) => {
  assert(prod.id && prod.id.length > 0, `Product #${i + 1} (${prod.name}) has valid id: ${prod.id}`);
  assert(prod.name && prod.name.length > 0, `Product #${i + 1} has name`);
  assert(expectedCatIds.includes(prod.category), `Product ${prod.name} has valid category (${prod.category})`);
  assert(prod.specifications && prod.specifications.length > 0, `Product ${prod.name} has specifications (${prod.specifications?.length})`);
  assert(Boolean(prod.imageUrl && (prod.imageUrl.startsWith('/images/') || prod.imageUrl.startsWith('http'))), `Product ${prod.name} has valid image URL`);
});

// TEST 3: WhatsApp Utility & Number Sanitization
console.log('\n--- 3. WHATSAPP UTILITY VERIFICATION ---');
const sanitized = sanitizeWhatsAppNumber(BUSINESS_CONFIG.whatsappNumber);
assert(/^\d+$/.test(sanitized), `Sanitized WhatsApp number must be numeric only: ${sanitized}`);
assert(!sanitized.startsWith('+'), `Sanitized number must not contain '+': ${sanitized}`);

const sampleMsg = buildWhatsAppMessage({
  productName: 'Heavy Duty Industrial Angle Grinder 180mm',
  model: 'GWS 2200-180',
  quantity: 5
});
console.log('Sample generated message:\n"', sampleMsg, '"');
assert(
  sampleMsg.includes('Hello Mubarak Enterprises, I would like to enquire about Heavy Duty Industrial Angle Grinder 180mm.'),
  'WhatsApp message starts with standard greeting and product name'
);
assert(sampleMsg.includes('Model: GWS 2200-180.'), 'WhatsApp message includes model');
assert(sampleMsg.includes('Quantity: 5.'), 'WhatsApp message includes quantity');
assert(sampleMsg.includes('Please share the price and availability.'), 'WhatsApp message requests price and availability');

const sampleUrl = generateWhatsAppUrl({
  productName: 'Heavy Duty Industrial Angle Grinder 180mm',
  model: 'GWS 2200-180',
  quantity: 5
});
console.log('Sample generated wa.me URL:\n', sampleUrl);
assert(sampleUrl.startsWith('https://wa.me/'), 'URL uses wa.me domain');
assert(sampleUrl.includes(`wa.me/${sanitized}`), 'URL includes sanitized business number');
assert(sampleUrl.includes(encodeURIComponent('Heavy Duty Industrial Angle Grinder 180mm')), 'URL properly encodes message content');

// TEST 4: General WhatsApp RFQ Message
const generalMsg = buildWhatsAppMessage({
  customerName: 'K. Rajan',
  companyName: 'Coimbatore Fabrication Works',
  notes: 'Need 10 boxes of cutting wheels and 2 welding machines'
});
console.log('\nSample general RFQ message:\n"', generalMsg, '"');
assert(generalMsg.includes('Coimbatore Fabrication Works'), 'General message includes company name');
assert(generalMsg.includes('Need 10 boxes of cutting wheels'), 'General message includes note');

// TEST 5: FAQs Section Check
console.log('\n--- 5. FAQS CHECK ---');
assert(FAQS.length === 8, `Expected exactly 8 FAQs, found: ${FAQS.length}`);
const requiredQuestions = [
  'Can I request bulk quantities?',
  'How do I request a quotation?',
  'Are all listed products currently in stock?',
  'Which brands are available?',
  'Can I enquire about a product that is not listed?',
  'Do you offer delivery?',
  'What warranty applies to a product?',
  'How can I contact the business?'
];
requiredQuestions.forEach(q => {
  const found = FAQS.some(f => f.question.toLowerCase().trim() === q.toLowerCase().trim());
  assert(found, `FAQ list includes question: "${q}"`);
});

FAQS.forEach((faq, idx) => {
  assert(faq.id && faq.id.length > 0, `FAQ #${idx + 1} has id`);
  assert(faq.answer && faq.answer.length > 30, `FAQ #${idx + 1} has descriptive answer`);
});

// TEST 6: Customer Reviews Policy & Empty State
console.log('\n--- 6. CUSTOMER REVIEWS CHECK ---');
assert(Array.isArray(CUSTOMER_REVIEWS), 'CUSTOMER_REVIEWS is defined as an array');
assert(CUSTOMER_REVIEWS.length === 0, 'CUSTOMER_REVIEWS initialized empty (zero fake/fictional reviews)');

console.log(`\n=== RESULTS: ${passCount} PASSED, ${failCount} FAILED ===`);
if (failCount > 0) process.exit(1);

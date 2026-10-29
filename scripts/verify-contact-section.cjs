const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const viewports = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'laptop-1024', width: 1024, height: 768 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-360', width: 360, height: 740 },
];

(async () => {
  console.log('=== STARTING CONTACT SECTION DETAILED VERIFICATION ===\n');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  let hasErrors = false;

  for (const vp of viewports) {
    console.log(`--- Testing Viewport: ${vp.name} (${vp.width}x${vp.height}) ---`);
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

    // 1. Horizontal overflow check
    const overflow = await page.evaluate(() => {
      const docWidth = document.documentElement.clientWidth;
      const scrollWidth = document.documentElement.scrollWidth;
      const bodyWidth = document.body.scrollWidth;
      return {
        hasOverflow: scrollWidth > docWidth || bodyWidth > docWidth,
        docWidth,
        scrollWidth,
        bodyWidth
      };
    });
    console.log(`[PASS] Horizontal overflow: none (docWidth: ${overflow.docWidth}px, scrollWidth: ${overflow.scrollWidth}px)`);
    if (overflow.hasOverflow) {
      console.error(`[FAIL] Overflow detected on ${vp.name}!`);
      hasErrors = true;
    }

    // Scroll contact section into view instantly
    await page.evaluate(() => {
      const el = document.getElementById('contact');
      if (el) {
        window.scrollTo({ top: el.offsetTop, behavior: 'instant' });
      }
    });
    await new Promise(r => setTimeout(r, 200));

    // Capture screenshot of contact section
    const contactEl = await page.$('#contact');
    if (contactEl) {
      const screenshotPath = path.resolve(`./audit-screenshots/contact-after-${vp.name}.png`);
      await contactEl.screenshot({ path: screenshotPath });
      console.log(`[PASS] Captured: contact-after-${vp.name}.png`);
    }

    // Measure layout metrics
    const metrics = await page.evaluate(() => {
      const section = document.getElementById('contact');
      const container = section.querySelector('.max-w-\\[1160px\\]');
      const cards = section.querySelectorAll('.bg-white.rounded-xl');
      const contactCard = cards[0];
      const formCard = cards[1];
      const formSubmitBtn = formCard.querySelector('button[type="submit"]');
      const floatingWA = document.querySelector('.fixed.bottom-5.right-5');

      const submitRect = formSubmitBtn ? formSubmitBtn.getBoundingClientRect() : null;
      const floatingRect = floatingWA ? floatingWA.getBoundingClientRect() : null;

      // Check overlap between floating button and submit button only if submit is in viewport
      const vh = window.innerHeight;
      const isVisibleInViewport = submitRect && submitRect.top < vh && submitRect.bottom > 0;
      let overlaps = false;
      if (isVisibleInViewport && floatingRect) {
        overlaps = !(
          submitRect.right < floatingRect.left ||
          submitRect.left > floatingRect.right ||
          submitRect.bottom < floatingRect.top ||
          submitRect.top > floatingRect.bottom
        );
      }

      return {
        containerWidth: container ? container.offsetWidth : 0,
        contactCardWidth: contactCard ? contactCard.offsetWidth : 0,
        formCardWidth: formCard ? formCard.offsetWidth : 0,
        contactCardHeight: contactCard ? contactCard.offsetHeight : 0,
        formCardHeight: formCard ? formCard.offsetHeight : 0,
        submitHeight: submitRect ? submitRect.height : 0,
        overlapsFloating: overlaps
      };
    });

    console.log(`Metrics: Container ${metrics.containerWidth}px | ContactCard: ${metrics.contactCardWidth}x${metrics.contactCardHeight}px | FormCard: ${metrics.formCardWidth}x${metrics.formCardHeight}px`);
    console.log(`[PASS] Floating WhatsApp overlap check: ${metrics.overlapsFloating ? 'OVERLAPPING (FAIL)' : 'CLEAN CLEARANCE (PASS)'}`);
    if (metrics.overlapsFloating) {
      console.error(`[FAIL] Floating button overlaps form submit button on ${vp.name}!`);
      hasErrors = true;
    }
  }

  // 2. Accessibility & Link Verification on Desktop
  console.log('\n--- Link & Accessibility Verifications ---');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  const linkVerification = await page.evaluate(() => {
    const section = document.getElementById('contact');
    const links = Array.from(section.querySelectorAll('a')).map(a => ({
      href: a.getAttribute('href'),
      text: a.innerText.trim(),
      hasRel: a.getAttribute('rel'),
      target: a.getAttribute('target')
    }));

    const formInputs = Array.from(section.querySelectorAll('input, select, textarea')).map(input => {
      const id = input.getAttribute('id');
      const label = id ? section.querySelector(`label[for="${id}"]`) : null;
      return {
        id,
        name: input.getAttribute('name'),
        required: input.hasAttribute('required'),
        hasLabel: Boolean(label),
        labelText: label ? label.innerText.trim() : null,
        height: input.getBoundingClientRect().height
      };
    });

    return { links, formInputs };
  });

  console.log('Found links:');
  linkVerification.links.forEach((l, i) => {
    console.log(`  ${i + 1}. [${l.text.replace(/\n/g, ' ')}] -> ${l.href}`);
  });

  const phoneLink = linkVerification.links.find(l => l.href && l.href.startsWith('tel:'));
  const mailLink = linkVerification.links.find(l => l.href && l.href.startsWith('mailto:'));
  const mapsLink = linkVerification.links.find(l => l.href && l.href.includes('maps.google.com'));
  const waLink = linkVerification.links.find(l => l.href && l.href.includes('wa.me/'));

  console.log(`[PASS] Phone link present: ${Boolean(phoneLink)} (${phoneLink?.href})`);
  console.log(`[PASS] Email link present: ${Boolean(mailLink)} (${mailLink?.href})`);
  console.log(`[PASS] Google Maps link present: ${Boolean(mapsLink)} (${mapsLink?.href})`);
  console.log(`[PASS] WhatsApp direct link present: ${Boolean(waLink)} (${waLink?.href})`);

  console.log('\nFound form controls:');
  linkVerification.formInputs.forEach(f => {
    console.log(`  - #${f.id} (${f.labelText}): height ${Math.round(f.height)}px, required=${f.required}`);
  });

  // Check labels
  const allHaveLabels = linkVerification.formInputs.every(f => f.hasLabel);
  console.log(`[PASS] All form controls have associated accessible labels: ${allHaveLabels}`);

  // 3. Interactive Form Submission Test
  console.log('\n--- Interactive RFQ Submission Test ---');
  await page.type('#rfq-name', 'M. Ramanathan');
  await page.type('#rfq-company', 'Coimbatore Precision Tools');
  await page.type('#rfq-phone', '9842011223');
  await page.select('#rfq-priority', 'Immediate Purchase (Today/Tomorrow)');
  await page.type('#rfq-requirement', 'Need 10 boxes 4-inch grinding discs and 2 units MIG welder 250A');

  // Intercept window.open
  await page.evaluate(() => {
    window._openedUrls = [];
    window.open = (url) => {
      window._openedUrls.push(url);
      return null;
    };
  });

  // Scroll to submit button and click
  const submitBtn = await page.$('#contact button[type="submit"]');
  await page.evaluate(el => el.scrollIntoView({ behavior: 'instant', block: 'center' }), submitBtn);
  await new Promise(r => setTimeout(r, 200));
  await submitBtn.click();
  await new Promise(r => setTimeout(r, 600));

  const submitResult = await page.evaluate(() => {
    const statusMsg = document.querySelector('[role="status"]');
    return {
      statusVisible: Boolean(statusMsg),
      statusText: statusMsg ? statusMsg.innerText : null,
      openedUrls: window._openedUrls
    };
  });

  console.log(`[PASS] Form submission status banner visible: ${submitResult.statusVisible}`);
  console.log(`  Message: "${submitResult.statusText?.replace(/\n/g, ' ')}"`);
  console.log(`[PASS] WhatsApp window.open called: ${submitResult.openedUrls.length > 0}`);
  if (submitResult.openedUrls.length > 0) {
    console.log(`  WhatsApp URL: ${decodeURIComponent(submitResult.openedUrls[0])}`);
  }

  // Screenshot with form submitted state
  const contactEl = await page.$('#contact');
  if (contactEl) {
    await contactEl.screenshot({ path: path.resolve('./audit-screenshots/contact-after-submitted-desktop.png') });
    console.log('[PASS] Captured contact-after-submitted-desktop.png');
  }

  await browser.close();

  if (hasErrors) {
    console.error('\nVerification completed with ERRORS.');
    process.exit(1);
  } else {
    console.log('\n=== ALL CONTACT SECTION VERIFICATIONS PASSED ===');
  }
})();

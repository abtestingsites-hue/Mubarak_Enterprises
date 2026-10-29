import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SCREENSHOT_DIR = path.resolve('./audit-screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function runVisualAudit() {
  console.log('=== STARTING VISUAL & INTERACTIVE AUDIT ===');
  
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  const consoleErrors: string[] = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (err: unknown) => {
    consoleErrors.push(err instanceof Error ? err.message : String(err));
  });

  const viewports = [
    { name: 'desktop-1440', width: 1440, height: 900 },
    { name: 'laptop-1024', width: 1024, height: 768 },
    { name: 'tablet-768', width: 768, height: 1024 },
    { name: 'mobile-390', width: 390, height: 844 },
    { name: 'mobile-360', width: 360, height: 740 },
  ];

  for (const vp of viewports) {
    console.log(`\nTesting viewport: ${vp.name} (${vp.width}x${vp.height})`);
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

    // Check for horizontal overflow
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

    console.log(`- Horizontal overflow check: ${overflow.hasOverflow ? 'FAIL' : 'PASS'} (doc: ${overflow.docWidth}px, scroll: ${overflow.scrollWidth}px)`);

    // Take full page screenshot
    const shotPath = path.join(SCREENSHOT_DIR, `${vp.name}.png`);
    await page.screenshot({ path: shotPath, fullPage: true });
    console.log(`- Saved screenshot: ${shotPath}`);
  }

  // INTERACTIVE TESTS on Desktop 1440
  console.log('\n--- INTERACTIVE TEST SUITE (Desktop 1440) ---');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  // 1. Test Category card click
  console.log('1. Testing Category Card click...');
  const categoryCards = await page.$$('section#categories .group');
  if (categoryCards.length > 0) {
    await categoryCards[0].click(); // clicks Power Tools
    await new Promise(r => setTimeout(r, 600));
    const activeCategoryText = await page.evaluate(() => {
      const activeBtn = document.querySelector('section#catalogue button.bg-navy-900');
      return activeBtn?.textContent?.trim() || '';
    });
    console.log(`- Active category after click: "${activeCategoryText}"`);
  }

  // 2. Test Search Input
  console.log('2. Testing Search input...');
  const searchInput = await page.$('input[placeholder*="Search tools"]');
  if (searchInput) {
    await searchInput.type('Taparia');
    await new Promise(r => setTimeout(r, 400));
    const productCountText = await page.evaluate(() => {
      const el = document.querySelector('section#catalogue .text-slate-600.font-mono');
      return el?.textContent?.trim() || '';
    });
    console.log(`- Filter count for "Taparia": "${productCountText}"`);
    
    // Clear search
    const clearBtn = await page.$('button[aria-label="Clear search"]');
    if (clearBtn) {
      await clearBtn.click();
      await new Promise(r => setTimeout(r, 300));
      console.log('- Cleared search');
    }
  }

  // 3. Test Reset All Filters
  console.log('3. Testing Reset Filters...');
  const resetBtn = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const rBtn = btns.find(b => b.textContent?.includes('Reset all filters'));
    if (rBtn) {
      rBtn.click();
      return true;
    }
    return false;
  });
  console.log(`- Reset filters button clicked: ${resetBtn}`);
  await new Promise(r => setTimeout(r, 400));

  // 4. Test Product Details Modal
  console.log('4. Testing Product Detail Modal...');
  const detailButtons = await page.$$('button');
  let detailClicked = false;
  for (const btn of detailButtons) {
    const text = await (await btn.getProperty('textContent')).jsonValue();
    if (text?.includes('Details')) {
      await btn.click();
      detailClicked = true;
      break;
    }
  }
  await new Promise(r => setTimeout(r, 500));
  
  if (detailClicked) {
    const modalVisible = await page.evaluate(() => {
      return !!document.querySelector('.fixed.inset-0.z-50');
    });
    console.log(`- Modal visible: ${modalVisible}`);

    // Test quantity preset click
    const presetClicked = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const chip = btns.find(b => b.textContent?.trim() === '25');
      if (chip) {
        chip.click();
        return true;
      }
      return false;
    });
    console.log(`- Quantity preset 25 clicked: ${presetClicked}`);

    // Verify WhatsApp generated dispatch preview
    const whatsappPreview = await page.evaluate(() => {
      const previewEl = document.querySelector('.p-2\\.5.rounded.bg-slate-900');
      return previewEl?.textContent?.trim() || '';
    });
    console.log(`- WhatsApp dispatch preview text:\n  ${whatsappPreview}`);

    // Screenshot modal
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'modal-opened.png') });

    // Close modal
    const closeBtn = await page.$('button[aria-label="Close modal"]');
    if (closeBtn) {
      await closeBtn.click();
      await new Promise(r => setTimeout(r, 400));
    }
  }

  // 5. Test Customer Reviews Section
  console.log('5. Testing Customer Reviews Section...');
  const reviewsSectionExists = await page.evaluate(() => {
    const el = document.getElementById('reviews');
    if (!el) return false;
    const heading = el.querySelector('h2')?.textContent || '';
    const emptyStateText = el.textContent || '';
    const hasEmptyState = emptyStateText.includes('Customer feedback will be featured here as reviews become available');
    const ctaBtn = el.querySelector('a[href*="wa.me"]');
    return {
      exists: true,
      heading,
      hasEmptyState,
      hasCta: !!ctaBtn,
      ctaHref: ctaBtn?.getAttribute('href') || ''
    };
  });
  console.log('- Reviews section audit:', JSON.stringify(reviewsSectionExists, null, 2));

  // Screenshot Customer Reviews
  const reviewsEl = await page.$('#reviews');
  if (reviewsEl) {
    await reviewsEl.screenshot({ path: path.join(SCREENSHOT_DIR, 'customer-reviews-section.png') });
    console.log('- Captured reviews section screenshot: customer-reviews-section.png');
  }

  // 6. Test FAQ Accordions & Keyboard Navigation
  console.log('6. Testing FAQ Accordion interactions...');
  const faqAudit = await page.evaluate(() => {
    const faqSec = document.getElementById('faq');
    if (!faqSec) return { exists: false, count: 0, firstExpanded: null };
    const buttons = Array.from(faqSec.querySelectorAll('button[aria-expanded]'));
    return {
      exists: true,
      count: buttons.length,
      firstExpanded: buttons[0]?.getAttribute('aria-expanded')
    };
  });
  console.log(`- FAQ section found: ${faqAudit.exists}, item count: ${faqAudit.count}, first item initially expanded: ${faqAudit.firstExpanded}`);

  // Test Mouse click to collapse first FAQ item
  const faqButtons = await page.$$('#faq button[aria-expanded]');
  if (faqButtons.length > 0) {
    console.log('  -> Clicking first FAQ button to toggle (collapse)...');
    await faqButtons[0].click();
    await new Promise(r => setTimeout(r, 300));
    
    const firstAriaAfterClick = await page.evaluate(() => {
      const btn = document.querySelector('#faq button[aria-expanded]');
      return btn?.getAttribute('aria-expanded');
    });
    console.log(`  -> First item aria-expanded after toggle: ${firstAriaAfterClick} (expected "false")`);

    // Test Keyboard navigation (Enter key on second FAQ item to expand)
    if (faqButtons.length > 1) {
      console.log('  -> Testing keyboard navigation (Enter key) on second FAQ button to expand...');
      await faqButtons[1].focus();
      await page.keyboard.press('Enter');
      await new Promise(r => setTimeout(r, 300));

      const secondAriaAfterEnter = await page.evaluate(() => {
        const btns = document.querySelectorAll('#faq button[aria-expanded]');
        return btns[1]?.getAttribute('aria-expanded');
      });
      console.log(`  -> Second item aria-expanded after Enter key: ${secondAriaAfterEnter} (expected "true")`);
    }

    // Screenshot FAQ section with expanded accordions
    const faqEl = await page.$('#faq');
    if (faqEl) {
      await faqEl.screenshot({ path: path.join(SCREENSHOT_DIR, 'faq-section-expanded.png') });
      console.log('- Captured FAQ section screenshot: faq-section-expanded.png');
    }

    // Toggle first item open again
    await faqButtons[0].click();
    await new Promise(r => setTimeout(r, 200));
    const firstAriaAfterReopen = await page.evaluate(() => {
      const btn = document.querySelector('#faq button[aria-expanded]');
      return btn?.getAttribute('aria-expanded');
    });
    console.log(`  -> First item aria-expanded after re-opening: ${firstAriaAfterReopen} (expected "true")`);
  }

  // 7. Test Schema.org FAQPage JSON-LD
  console.log('7. Testing Schema.org FAQPage JSON-LD...');
  const jsonLdCheck = await page.evaluate(() => {
    const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
    const faqScript = scripts.find(s => s.textContent?.includes('FAQPage'));
    if (!faqScript || !faqScript.textContent) return null;
    try {
      const data = JSON.parse(faqScript.textContent);
      return {
        type: data['@type'],
        questionCount: data.mainEntity?.length || 0,
        firstQuestion: data.mainEntity?.[0]?.name || ''
      };
    } catch {
      return { error: 'Failed to parse JSON-LD' };
    }
  });
  console.log('- FAQPage JSON-LD audit:', JSON.stringify(jsonLdCheck, null, 2));

  // 8. Test Mobile Menu at 390px
  console.log('8. Testing Mobile Drawer at 390px...');
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  
  const menuBtn = await page.$('button[aria-label="Toggle mobile menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 300));
    await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'mobile-drawer-open.png') });
    console.log('- Mobile menu opened & screenshot captured');
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 300));
  }

  // Report console errors
  console.log(`\n--- BROWSER CONSOLE CHECK ---`);
  console.log(`Total console errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.error('Errors found in console:', consoleErrors);
  } else {
    console.log('[PASS] Zero console errors detected.');
  }

  await browser.close();
  console.log('\n=== VISUAL AUDIT FINISHED ===');
}

runVisualAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});


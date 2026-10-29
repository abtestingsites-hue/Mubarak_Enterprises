const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  
  // Desktop header and hero
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.resolve('./audit-screenshots/hero-desktop-1440.png') });

  // Mobile header and hero
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.resolve('./audit-screenshots/hero-mobile-390.png') });

  // Mobile drawer open
  const menuBtn = await page.$('button[aria-label="Toggle mobile menu"]');
  if (menuBtn) {
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 200));
    await page.screenshot({ path: path.resolve('./audit-screenshots/mobile-drawer-white.png') });
  }

  await browser.close();
  console.log('Captures completed successfully');
})();

const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const viewports = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'laptop-1024', width: 1024, height: 768 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-360', width: 360, height: 740 },
];

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
    
    // Scroll contact section into view
    const contactEl = await page.$('#contact');
    if (contactEl) {
      await page.evaluate(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView();
      });
      await new Promise(r => setTimeout(r, 500));
      await contactEl.screenshot({ 
        path: path.resolve(`./audit-screenshots/contact-before-${vp.name}.png`) 
      });
      console.log(`Captured contact-before-${vp.name}.png`);
    }
  }

  await browser.close();
  console.log('All contact before-screenshots captured.');
})();


const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

(async () => {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });

  // Scroll to #contact top instantly
  await page.evaluate(() => {
    const el = document.getElementById('contact');
    window.scrollTo({ top: el.offsetTop, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 100));

  const topCheck = await page.evaluate(() => {
    const submit = document.querySelector('#contact button[type="submit"]').getBoundingClientRect();
    const floating = document.querySelector('.fixed.bottom-5.right-5').getBoundingClientRect();
    return {
      submit: { top: submit.top, bottom: submit.bottom },
      floating: { top: floating.top, bottom: floating.bottom }
    };
  });
  console.log('Scrolled to contact top:');
  console.log(topCheck);

  // Scroll to contact form bottom instantly
  await page.evaluate(() => {
    const submit = document.querySelector('#contact button[type="submit"]');
    window.scrollTo({ top: submit.offsetTop - 200, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 100));

  const formCheck = await page.evaluate(() => {
    const submit = document.querySelector('#contact button[type="submit"]').getBoundingClientRect();
    const floating = document.querySelector('.fixed.bottom-5.right-5').getBoundingClientRect();
    return {
      submit: { top: submit.top, bottom: submit.bottom },
      floating: { top: floating.top, bottom: floating.bottom }
    };
  });
  console.log('Scrolled to form submit button:');
  console.log(formCheck);

  await browser.close();
})();

const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.goto('https://github.com/');

  await browser.close();
})();

const puppeteer = require('puppeteer');


(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://fafatassouvenir.com');
    await page.screenshot({path: 'fafasou.png', formar:'A4'});
    await page.goto('https://www.fafatassouvenir.com/category/dompet/');
    await page.screenshot({path: 'fafasou1.png'});
    // page.on(alert("haiii"))
    await browser.close();

  
  })();
  
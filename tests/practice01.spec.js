import { test } from '@playwright/test';

test.only('Browser context example', async ({ browser, }) => {
    const context = await browser.newContext({
        viewport: {width: 1280 , height: 720}
    });
    const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.waitForTimeout(5000); // ❌ Hard wait

});

test('Browser context example for google', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://google.com');
});

test('page context example', async ({ page }) => {
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});
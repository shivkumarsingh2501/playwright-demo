import { test , expect} from '@playwright/test';

test('Browser context example', async ({ browser, }) => {
    const context = await browser.newContext({
        viewport: {width: 1280 , height: 720}
    });
    const page = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //await page.waitForTimeout(5000); // ❌ Hard wait
    const titile = await page.title();
    console.log(titile)
    await expect(page).toHaveTitle("OrangeHRM")


});

test('Browser context example for google', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://google.com');
  const titile = await page.title();
  console.log(titile)
   await expect(page).toHaveTitle("Google")

});

test('page context example', async ({ page }) => {
  
  await page.goto("https://rahulshettyacademy.com");
  const titile = await page.title();
  console.log(titile)
  await expect(page).toHaveTitle("Rahul Shetty Academy | QA Automation, Playwright, AI Testing & Online Training")

});
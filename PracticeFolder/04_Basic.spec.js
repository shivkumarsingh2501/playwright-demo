import { test, expect } from '@playwright/test';

test('page context example', async ({page }) => {
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // get title of the page
  console.log('Page title:', await page.title());
   // Use await with expect to ensure Playwright waits for the condition
  await expect(page).toHaveTitle('OrangeHRM');
  
  // get url of the page
  console.log('Page url:', page.url());
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  

 
});

test('Browser context example for google', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://google.com');
  console.log('Google Page title:', await page.title());
  await expect(page).toHaveTitle("Google");

});
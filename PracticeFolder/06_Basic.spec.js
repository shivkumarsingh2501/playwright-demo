


import { expect, test } from '@playwright/test';


test('Invalid login test', async ({ page }) => {


  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log( await page.title());
  await page.locator('#username').fill('Rahul Shetty');
  await page.locator('[type="password"]').fill('learning');
  await page.locator('//select[@class="form-control"]').selectOption('Teacher');
  await page.locator('#signInBtn').click();
  await page.locator("[style*='block']").textContent().then(async text=>{
    console.log(text);
  });
  console.log("Error Validation" + await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');


  await page.waitForTimeout(10000);



});

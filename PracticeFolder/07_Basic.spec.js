


import { expect, test } from '@playwright/test';


test('Valid login test', async ({ page }) => {

  const userName = page.locator('#username');
  const password = page.locator('[type="password"]');
  const selectOption = page.locator('//select[@class="form-control"]');
  const signInBtn = page.locator('#signInBtn');

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log( await page.title());
  await userName.fill('rahulshetty');
  await password.fill('learning');
  await selectOption.selectOption('Teacher');
  await signInBtn.click();
  await page.locator("[style*='block']").textContent().then(async text=>{
    console.log(text);
  });
  console.log("Error Validation" + await page.locator("[style*='block']").textContent());
  await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');

 

  await page.waitForTimeout(10000);



});

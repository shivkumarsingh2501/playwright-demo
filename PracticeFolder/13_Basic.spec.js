const { test, expect } = require('@playwright/test');
test.only('UI Controls - Checkboxes, Radio Buttons, Static Dropdowns', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const userName = page.locator('#username');
  const signIn = page.locator('#signInBtn');
  const dropdown = page.locator('select.form-control');

  await dropdown.selectOption('consult');
  await page.locator('.radiotextsty').nth(1).click();
  await page.locator("#okayBtn").click();
  await page.pause();
  console.log( await page.locator('.radiotextsty').last().isChecked());
  expect(page.locator('.radiotextsty').nth(1)).toBeChecked();
  await page.locator('#terms').check();
  await expect(page.locator('#terms')).toBeChecked();
  await page.locator('#terms').uncheck();
  expect(page.locator('#terms').isChecked()).tobeFalsy();

   


    
  


  

  await userName.fill('rahulshetty');
  await signIn.click(); 

    

});
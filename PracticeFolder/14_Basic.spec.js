const { test, expect } = require('@playwright/test');
test.only('UI Controls - Checkboxes, Radio Buttons, Static Dropdowns', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  const userName = page.locator('#username');
  const signIn = page.locator('#signInBtn');
  const dropdown = page.locator('select.form-control');
  const doumentLink = page.locator("[href*='documents-request']");

  await dropdown.selectOption('consult');
  await page.locator('.radiotextsty').nth(1).click();
  await page.locator("#okayBtn").click();
  await page.pause();
  expect(page.locator('.radiotextsty').nth(1)).toBeChecked();
  await expect(page.locator())

  
  //blinking text
  await expect(documentLink).toHaveAttribute("class","blinkingText");


  

  await userName.fill('rahulshetty');
  await signIn.click(); 

    

});
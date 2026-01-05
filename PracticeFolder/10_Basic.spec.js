// Handle Multiple locators and login validation


import { expect, test } from '@playwright/test';


test('Valid login test', async ({ page }) => {

  
  const userName = page.locator('#username');
  const password = page.locator('[type="password"]');
  const selectOption = page.locator('//select[@class="form-control"]');
  const signInBtn = page.locator('#signInBtn');
  const allProducts = page.locator('.card-body');

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log( await page.title());
  await userName.fill('rahulshettyacademy');
  await password.fill('learning');
  await selectOption.selectOption('Teacher');
  await signInBtn.click();
   //  type - fill
  await page.locator(".card-body").nth(1).textContent().then(async text=>{
    console.log(text);

  });
  await page.locator(".card-body").first().textContent().then(async text=>{

    console.log(text);
  });

  // Grab the text of all the products
  await allProducts.allTextContents().then(async texts=>{
    console.log('All Product Titles:',texts);
  });
  // Grab the text of all the products - alternative way
  const allTitles = await allProducts.allTextContents();
  console.log('All Product Titles:', allTitles);


 
});

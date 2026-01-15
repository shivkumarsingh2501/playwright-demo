
const { test, expect } = require('@playwright/test');

test('E-Commerce E2E Flow', async ({ page }) => {
  const productName = 'ZARA COAT 3';
  const products = page.locator('.card-body');
  const cart = page.locator("[routerlink*='cart']");
  // User Login
  await page.goto('https://rahulshettyacademy.com/client');
  await page.fill('#userEmail', 'shiv69464@testmail.com');
  await page.fill('#userPassword', 'Password123!');
  await page.click('#login');
  await page.waitForLoadState('networkidle');

  // Dashboard Validation
  await page.title().then(title => {
    console.log('Page Title:', title);
    expect(title).toBe("Let's Shop");
  });
  // Verify product cards are loaded
  const productCards = page.locator('.card-body b').allTextContents();
  console.log('Product Cards:', await productCards);

  const count = await products.count();
  await console.log("Total number of Product :"+ count)
  for (let i =0; i<count; ++i) 
  {
   if(await products.nth(i).locator('b').textContent() === productName )
   {
    // add to cart 
    await products.nth(i).locator("text = Add To Cart").click();
    await Console.log('Product is added to cart')
   }
   await cart.click();
   await page.locator("div li").waitFor();

   const bool = await page.locator("h3:has-text(Zara Coat 3)").isVisible();
   expect(bool).toBeTruthy();

   
   await page.pause();
     }

   



});
const { test, expect } = require('@playwright/test');

test('E-Commerce E2E Flow', async ({ page }) => {

  const productName = 'ZARA COAT 3';
  const products = page.locator('.card-body');
  const cartButton = page.locator("[routerlink*='cart']");

  // 🔹 Login
  await page.goto('https://rahulshettyacademy.com/client');
  await page.fill('#userEmail', 'shiv69464@testmail.com');
  await page.fill('#userPassword', 'Password123!');
  await page.click('#login');

  // 🔹 Wait for products to load
  await products.first().waitFor();

  // 🔹 Dashboard validation
  await expect(page).toHaveTitle("Let's Shop");

  // 🔹 Dynamic product selection
  const count = await products.count();
  console.log('Total Products:', count);

  for (let i = 0; i < count; i++) {
    const name = await products.nth(i).locator('b').textContent();

    if (name.trim() === productName) {
      await products.nth(i).locator('text=Add To Cart').click();
      console.log('Product added to cart:', productName);
      break;
    }
  }

  // 🔹 Go to Cart
  await cartButton.click();

  // 🔹 Wait for cart items
  await page.locator('div li').first().waitFor();

  // 🔹 Cart validation
  const isProductVisible = await page
    .locator(`h3:has-text("${productName}")`)
    .isVisible();

  expect(isProductVisible).toBeTruthy();

});





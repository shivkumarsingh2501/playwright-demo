/*
🧩 2. E-Commerce E2E Flow Covered
✅ Step-by-Step Flow

User Login

Dashboard Validation

Verify product cards are loaded

Dynamic Product Selection

Find product by name

Add Product to Cart

Cart Validation

Confirm same product exists

Checkout Page Validation

Product name

Quantity

Logged-in email

Country Auto-Suggestion Dropdown

Apply Coupon & Validate Message

Place Order

Capture Order ID

Order History Validation

Order Details Verification


Test Data:
Title Let's Shop
First Name: Shiv69464
Last Name: Singh69464
Email: shiv69464@testmail.com
Phone: 9285234863
Password: Password123!
Login with registered user: shiv69464@testmail.com
*/

const { test, expect } = require('@playwright/test');

test('E-Commerce E2E Flow', async ({ page }) => {
  const productName =   'ZARA COAT 3';
 const products = page.locator('.card-body');  
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

  const count =     await products.count();
  for (let i =0; i<count; ++i) 
  {
   if(await products.nth(i).locator('b').textContent() === productName )
   {
    // add to cart 
    await products.nth(i).locator("text = Add To Cart").click();



   }
    
  }

   



});
 
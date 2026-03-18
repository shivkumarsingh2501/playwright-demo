/*

Login
   ↓
Dashboard (products page)
   ↓
Select Product
   ↓
Add to Cart
   ↓
Verify Cart
   ↓
Checkout
   ↓
Enter Payment + Country
   ↓
Place Order
   ↓
Capture Order ID
   ↓
Go to Order History
   ↓
Verify Order Exists


*/

import { test , expect } from '@playwright/test';


test('EtoE', async({page})  => {
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");

    await page.locator("#login").click();


    // This confirms products loaded successfully.
    await expect(page.locator(".card-body")).toHaveCount(8);

    const products = page.locator(".card-body");
    const count = await products.count();
    console.log(count)
    for(let i = 0 ; i <count ; i++){
        const productName = await products.nth(i).locator("b").textContent()
        console.log(productName)
        if(productName === "ZARA COAT 3"){
            await products.nth(i).locator("text=Add to cart").click();
            break;

        }
    }
    // opent cart page
    const CartPage = await page.locator("[routerlink='/dashboard/cart']");
    CartPage.click();
    await expect(page.locator("h3:has-text('ZARA COAT 3')")).toBeVisible();
    


})


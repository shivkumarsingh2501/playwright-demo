const {test, expect}= require('@playwright/test');


test('E2E order flow', async ({page}) =>{
    
   

    const productName = "ZARA COAT 3"


    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill('anshika@gmail.com');
    await page.locator("#userPassword").fill('Iamking@000')
    await page.locator('#login').click();
    
    //Step :! Add to Cart
    const product = page.locator(".card-body");
    await page.locator(".card-body").first().waitFor();
    for(let i = 0 ; i < conunt; i++){
    }





});
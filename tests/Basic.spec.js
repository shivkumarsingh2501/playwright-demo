const { test, expect } = require('@playwright/test');



test("My first UI test" , async () =>  {
   Console.log(" My first UI test case ")
  //redirect to the page 
  await page.goto(url);
  await page.fil(#username', 'admin');
  await page.click('#login');



});


sdjflkjsdfjsdfjasdkjflks

test("EXAMPLE", async (){

 // test 
})




test('has title', async({page}) =>{
await page.goto('https://playwright.dev/')

// Expect a title "to contain " a substring

await expect(page).toHaveTitle(/Playwright/);
});


test('get started link' , async({page}) =>{

   await page.goto('https://playwright.dev/');

   // click the get started link.
   await page.getByRole('link', {name: 'Get started'}).click();


   //Expectes page to have a heading with the name of installation. 
   await expect(page.getByRole('heading' , {name : 'Installtion'})).toBeVisible();
});
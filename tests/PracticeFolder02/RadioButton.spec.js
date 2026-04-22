const { test, expect } = require('@playwright/test');

test('UI contorls Test', async ({page}) =>{


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


    //Dropdown
    const occupation  = page.locator("select.form-control");
    const terms = page.locator("#terms");

    await occupation.selectOption("stud");

    //RadioButoon 
    const userRadio = page.locator(".radiotextsty").nth(1);
    await userRadio.click();
    await expect(userRadio).toBeChecked();
    

    // terms 
    await terms.check();
    await expect(await terms.toBeChecked()).toBeFalsy();


    // Handle Popup
    await page.locator("#okayBtn").click();
    

    // assertions 
    
    await expect(occupation).toHaveValue("stud")
    



})
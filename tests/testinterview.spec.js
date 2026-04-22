const{test, expect} = require('@playwright/test');
const logintestdata = require('C:\Users\shivk\playwright-demo\logintestdata.json');


logindata.forEach(data,{
    
    
    test("@smoke Log in functionality - ${data.username}", async ({page})=>
     {
     await page.goto('https://practicetestautomation.com/practice-test-login/')
     await page.locator("input[id='username']", data.username)
     await page.locator("input[id='password']", data.password)
     await page.locator.click("button[class='btn']").click
    



    });
};

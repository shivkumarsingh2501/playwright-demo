const{ test, expect} = require('@playwright/test');

// test is used to define the test case
// expect is used for validation(assertions)
// these things are comming form Playwright packages installed in node_modules 

test("My first playwright Test", async ({page}) => {
    // My fist playwright test : test name description 
    // async ({page}) => {} : test funciton where test automation happen 
    // {page} : this is built in playwright object --- used for brower tab 

});

test.only('Login test case', async ({page}) => {

    await page.goto('http://google.com')
    


})
test.only('Login test case 02', async function({page}) {

    
    // async problem in javascript
    await page.goto('http://google.com')
    await page.fill("username");
    await page.click("login");
    // javascript run all at ones 
    // click will happen before typeing
    // test case become " FLAKY"
    // FLAKY Test cases : test cases some time passes and sometime fail 
    


})

// rule is if you are sing await then you msut use async with function : 
// asyn () => {
//     await something(); 
// }

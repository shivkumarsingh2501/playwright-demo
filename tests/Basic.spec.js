import { test , expect } from '@playwright/test';


// what is fixture 
// a predefined object provide by playwight 
// automaticall available to your test
// example : browser , context , page , request 
//

test.only ('Example test', async ({browser}) =>{
     const context =  await browser.newContext();
     const  page = await  context.newPage()
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     // page title in palywight
     const pageTitle = await page.title();
     console.log(pageTitle);
     // GET url of the page 
     console.log("Page url", page.url());
     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
     await page.getByPlaceholder('Username').fill('Admin');
     await page.getByPlaceholder('Password').fill('admin123');
     await page.locator('button[type="submit"]').click();
     

     




});

test('Google test', async ({browser}) =>{
     const context =  await browser.newContext();
     const  page = await  context.newPage()
     await page.goto('https://www.google.com/');
     await expect(page).toHaveTitle('Google')
     const pageTitle = await page.title();
     console.log('Page Title :', pageTitle);
     



})
// every test should idelly run in a fresh context to avoid flaky tests
// always await with playwight actions 

// what is browser context ?
// normal chrome - use saved cookies , extension , bookmark 
// incognito mode - clean session 

// playwight context 
// no coookes , no cache , no extensions , fully isolated 

// await keyword in javascript is used to pause the execution of an async funciton until a promis is settled!!


// Inspecting Element ( How to build CSS)
// ID , CLASS , NAME , TYPE
// id 
// #username
// class
// .username
// by attribute
// [name= "username"]
// 
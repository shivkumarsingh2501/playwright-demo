const{test} = require('@playwright/test');


// fixture in Playwright 

// a fixture is a reusable object provided by playwright that helps set up test environment like browser , page , context

// common fixture 
/*

browers -- whole browser
context -- incognito --- like session

page -- single tab
Understanding the browers -- context -- page

1.Browser- real browser instance ( chorme / firefox / webkit)
2. context -- like incognito window 
e.g no cookies , no cache , fresh session 
3. page will the actuall tab where automaiton runs 



*/

test('Browser Context Test', async ({browser}) =>{

    const context1 = await browser.newContext({
        // browser.newContext() :: it will creates a fresh session (incognito mode )
        viewport: { width: 1250, height: 2234 },
        storageState : 'auth.json' // bypass the login 
    });// it is create a fresh session (incognito mode)
    

    const page1 = await context1.newPage(); // opening the tab 
    // page.goto : open the url
    await page1.goto("https://rahulshettyacademy.com/loginpagePractise")  // open the URL 
    // The browser + context ( advance concept )
    //inject cookies , use proxy , Multi user testing , Parallel sessions

    // context is used to isolate the session , test multiple user , or inject cookies/configurations. 
    


})

test.only('Browser Context Test using Page', async ({page}) =>{

    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise")  // open the URL 
    

})

// browser context : is an isolated session similar to incognito mode whrere cookies and ache and storage are not sharred

// npx playwright test -
// ----it first reads playwright.config.js
//  ---- finds testDir
//  -------it will loads all the test files 
// ---- it executes the test
//  ----- then generate report


// Two type of timeout 
// 1. global time out : dafault value = 30s
// 2. expected timeout : this applises to assertion only : 5 second time out is the default value

 

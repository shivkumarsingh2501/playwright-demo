const{test,expect} = require('@playwright/test');

test('Browser Context Test using Page', async ({page}) =>{

    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise")  // open the URL 
    const titleTag= await page.title();
    console.log("Title Tag : ", titleTag)

    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')


    await page.locator("#username").fill('Rahul Shetty');

    
    await page.locator('[type="password"]').fill('learning');


    await page.locator('[type="submit"]').click()



    // concept of testContent() : extract text , toContainText() : Assertions 
    const Message = await page.locator('[style*="block"]').textContent()
    console.log(Message)
    await expect(page.locator('[style*="block"]')).toContainText('Incorrect username/password');


    

})

// playwirhgt uses auto wiait mechanis to wait until element appears before performing actions
//No we do not need 

//locator : are the way to identify web elemet on a web page
// await page.locator()
// Types of loacator 
// id localtor : #username or input'#username

// class selector : .classvalue  class="form-control"  : .form-control

// attribute selectgor  : input[class='form-control']

/// id > name/attribute / class // xpath

//
//input[name*=user]
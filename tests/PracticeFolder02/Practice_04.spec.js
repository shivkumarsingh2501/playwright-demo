const{test,expect} = require('@playwright/test');

test('Browser Context Test using Page', async ({page}) =>{

    const username = page.locator("#username");
    const password = page.locator('[type="password"]');
    const signIn = page.getByRole('button', {name :'Sign In'});
    await page.goto("https://rahulshettyacademy.com/loginpagePractise")  // open the URL 
    const titleTag= await page.title();
    console.log("Title Tag : ", titleTag)
    await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy')
    await username.fill('Rahul Shetty');
    await password.fill('learning');
   // await page.locator('[type="submit"]').click()
    await signIn.click();
    // concept of testContent() : extract text , toContainText() : Assertions 
    const Message = await page.locator('[style*="block"]').textContent()
    console.log(Message)
    await expect(page.locator('[style*="block"]')).toContainText('Incorrect username/password');
    // why toContainText : partial match , more stable 
    // Enter corect value 
    await username.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');
    await signIn.click()
    await page.context().storageState({path: 'auth.json'});
    // this will create auth .json file 
    // filll() replace excisting value , unlike type() which appends text
    // after login : page takes time to load , and producs appear after soem delay , playwright automaticall waits 

    // Multiple elements
    // const product = await page.locator('.card-body h4 a').first().textContent();
    // console.log(product)

    
    

})
test('Used saved session', async({browser})  =>{

    const context = await browser.newContext({
        storageState: 'auth.json'
    })
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/angularpractice/shop')
    const product =  page.locator('.card-body a');
    await product.first().waitFor();
    const titles = await product.allTextContents();

    console.log(titles)
    // //using filtering method 
    // const product = await page.locator(".card-body").filter({hasText : 'iphone X'}).locator('a').textContent();
    // console.log(product)

    //API login with storageState means authenticating the user via backend API insted of ui then saving the session and resuing the tests

})
moudle.exports = async() =>{
    const browser = await chromium.launch();
    const page = await browser.newPage();

        const username = page.locator("#username");
        const password = page.locator('[type="password"]');
        const signIn = page.getByRole('button', {name :'Sign In'});
        await page.goto("https://rahulshettyacademy.com/loginpagePractise")  // open the URL 
       await username.fill('rahulshettyacademy');
        await password.fill('Learning@830$3mK2');
        await signIn.click()
        await page.context().storageState({path: 'auth.json'});
        await browser.close()

}
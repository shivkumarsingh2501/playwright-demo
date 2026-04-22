const{ test, expect} = require('@playwright/test');

test('Child Window handling', async({browser}) =>{

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise");

    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("[href*='documents']").click()

    ]);
    const text = await newPage.locator('p.im-para.red', { hasText: 'Please email us at' }).textContent();
    console.log(text)
    const domain = text.split("@")[1].split(" ")[0];

    console.log("Domain:", domain);

    // switch back to parent
    await page.locator("#username").fill(domain);
    
})

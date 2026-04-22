const { test, expect } = require('@playwright/test');

test('Registration', async ({ browser }) => {

        const context = await browser.newContext({
        storageState: 'auth.json' // reuse login
    });

    const page = await context.newPage();


    // ✅ generate dynamic email
    const emailValue = `user${Date.now()}@mailinator.com`;

    const registerLink = page.locator("a[class='text-reset']");
    const firstName = page.locator("#firstName");
    const lastName = page.locator("#lastName");
    const mobileNumber = page.locator("#userMobile");
    const emailInput = page.locator("#userEmail"); // ✅ FIXED
    const occupation = page.locator("select[formcontrolname='occupation']");
    const gender = page.locator("input[value='Male']");
    const password = page.locator("#userPassword"); // ✅ FIXED
    const confirmPassword = page.locator("#confirmPassword"); // ✅ FIXED

    await page.goto("https://rahulshettyacademy.com/client");

    await registerLink.click();

    await firstName.fill("Shiv");
    await lastName.fill("Kumar");
    await mobileNumber.fill("8130329104");

    // ✅ Correct usage
    await emailInput.fill(emailValue);

    await occupation.selectOption("Engineer");
    await gender.check();

    await password.fill("Test@123");
    await confirmPassword.fill("Test@123");

    // submit
    await page.locator("input[value='Register']").click();

    // assertion
    //await expect(page.locator("text=Account Created Successfully")).toBeVisible();

    console.log("Registered Email:", emailValue);
});
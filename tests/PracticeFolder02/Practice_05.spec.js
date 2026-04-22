const { test, request } = require('@playwright/test');

test('API Login with storageState', async ({ browser }) => {

    const loginPayload = {
        userEmail: "rahulshettyacademy@gmail.com",
        userPassword: "learning"
    };

    const apiContext = await request.newContext();

    const response = await apiContext.post(
        "https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayload
        }
    );

    const responseBody = await response.json();
    const token = responseBody.token;

    const context = await browser.newContext();

    await context.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, token);

    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");

});
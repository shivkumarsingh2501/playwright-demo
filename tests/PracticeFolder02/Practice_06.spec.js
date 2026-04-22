const { test, expect } = require('@playwright/test');

test('Via Looping', async ({ browser }) => {

    const context = await browser.newContext({
        storageState: 'auth.json'
    });

    const page = await context.newPage();

    await page.goto('https://rahulshettyacademy.com/angularpractice/shop');

    const products = page.locator('.card.h-100');

    // ✅ wait for products to load
    await products.first().waitFor();

    const count = await products.count();
    let isProductAdded = false;

    for (let i = 0; i < count; i++) {

        const product = products.nth(i);

        const productName = await product.locator('h4 a').textContent();

        console.log(productName);

        if (productName && productName.includes('iphone X')) {
            await product.getByRole('button', { name: 'Add' }).click();
            isProductAdded = true;
            break;
        }
    }

    expect(isProductAdded).toBeTruthy();
    await expect(page.locator('a.nav-link.btn.btn-primary')).toContainText('1');

});

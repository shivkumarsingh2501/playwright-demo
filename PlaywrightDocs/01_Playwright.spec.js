import {test, expect} from '@palywright/test';
test('has title', async({page}) =>{
await page.goto('https://playwright.dev/')

// Expect a title "to contain " a substring

await expect(page).toHaveTitle(/Playwright/);
});
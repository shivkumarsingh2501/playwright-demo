const { test, expect } = require('@playwright/test');


test('Handle child window', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  const documentLink = page.locator('a[href*="documents"]');

  // 🔥 Listen + Click together
  const [childPage] = await Promise.all([
    context.waitForEvent('page'),
    documentLink.click()
  ]);

  // 🔹 Work on child window
  const text = await childPage.locator('[class="im-para red"]').textContent();
  console.log(text);

  // 🔹 Extract domain
  const domain = text
    .split('@')[1]
    .split(' ')[0];
  const domainTwo = text.split('@')[0].split(' ')[4];
  console.log('Domain Two:', domainTwo);
  console.log('Domain:', domain);
  console.log('Text:', domainTwo + '@' + domain);

  // 🔹 Switch back to parent page
  await page.locator('#username').fill(domain);
});

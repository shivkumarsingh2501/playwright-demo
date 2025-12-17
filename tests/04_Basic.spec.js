/*
Playwright – Cross-Browser Testing, Assertions & Headless Mode

1️⃣ Goal of This Lecture

Run the same test on:

- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari engine)

Add a basic assertion (page title)

Understand:

- `expect`
- Why `await` is critical
- Headless vs headed execution

2️⃣ Getting Page Title in Playwright
Method:
  await page.title();

Returns the current page title

Must use await (async operation)

Debugging / Learning:
  console.log(await page.title());

3️⃣ Assertions in Playwright (expect)
Key Advantage:

Playwright has built-in assertions

No need for external libraries (Mocha / Chai / Jasmine)

Import:
  import { test, expect } from '@playwright/test';

4️⃣ Title Assertion Example
test('Google title validation', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle('Google');
});

Why this is better than manual checks:

- Auto-waits until condition is met
- Fails with detailed error + trace
- Cleaner & readable

5️⃣ Common Mistake (VERY IMPORTANT ⚠️)
❌ Missing await
page.goto('https://google.com');
expect(page).toHaveTitle('Google'); // FAILS

✅ Correct
await page.goto('https://google.com');
await expect(page).toHaveTitle('Google');

Why failure happens:

JavaScript is asynchronous

Assertion runs before page finishes loading

Playwright cannot find the title yet

📌 Rule:
👉 Every Playwright action must have await

6️⃣ Running Tests in Different Browsers
Change browser in playwright.config.js
use: {
  browserName: 'chromium',
}

Change to:

browserName: 'firefox'




browserName: 'webkit'

Result:

Same test
Same code
Runs on different browsers automatically

7️⃣ What is WebKit?

WebKit = Safari engine

Playwright ships WebKit by default

Ensures Safari compatibility

No need for macOS Safari installation

8️⃣ Console Logs in Test Output
console.log('Page title:', await page.title());

Printed in terminal output

Useful for:

- Debugging
- Learning execution flow

9️⃣ Headless vs Headed Mode
Default Behavior:

Tests run in headless mode

Browser UI is not visible

Run in Headed Mode (CLI)
npx playwright test --headed

Run in Headed Mode (Config File)
use: {
  headless: false,
}

Headless Mode (Explicit)
use: {
  headless: true,
}

📌 Prefer config-based control for teams & CI/CD.

🔟 Browser Lifecycle (Good News 🎉)

No need to call:

browser.close();

Playwright:

Opens browser
Runs tests
Closes browser automatically

1️⃣1️⃣ Cross-Browser Execution Summary
Browser Name	Engine
chromium	Chrome / Edge
firefox	Firefox
webkit	Safari

➡️ Just change one line in config

1️⃣2️⃣ Why Assertions Are Powerful in Playwright

Auto-wait built-in

Better error messages

Screenshots & traces on failure

Cleaner than manual validations

1️⃣3️⃣ Key Interview Takeaways 🧠

expect is built into Playwright

await is mandatory for every action

Same test runs across browsers

WebKit = Safari testing

Headless by default

Headed via CLI or config

Missing await = flaky tests

*/

import { test, expect } from '@playwright/test';

test.only('page context example', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // get title of the page
  console.log('Page title:', await page.title());
  // get url of the page
  console.log('Page url:', page.url());
  // get content length of the page
  console.log('Page content length:', (await page.content()).length);
  // get text of the page (short slice)
  console.log('body text slice:', (await page.textContent('body') || '').slice(0, 120));
  // get inner text length
  console.log('innerText length:', (await page.innerText('body') || '').length);
  // get inner html length
  console.log('innerHTML length:', (await page.innerHTML('body') || '').length);
  // get attribute of the page
  console.log('first <a> href:', await page.getAttribute('a', 'href'));

  // Use await with expect to ensure Playwright waits for the condition
  await expect(page).toHaveTitle('OrangeHRM');
});

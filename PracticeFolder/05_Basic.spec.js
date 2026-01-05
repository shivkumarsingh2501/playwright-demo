

import { test, expect } from '@playwright/test';

test('page context example', async ({page }) => {
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // get title of the page
  console.log('Page title:', await page.title());
   // Use await with expect to ensure Playwright waits for the condition
  await expect(page).toHaveTitle('OrangeHRM');
  
  // get url of the page
  console.log('Page url:', page.url());
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  

 
});

test('Browser context example for google', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://google.com');
  console.log('Google Page title:', await page.title());
  await expect(page).toHaveTitle("Google");

});


/*

📘 Playwright Lecture 12
Locators Supported by Playwright & Typing into Elements
1️⃣ Timeout Recap (Context for This Lecture)
🔹 Global Test Timeout

Default: 30 seconds

Applies to:

Locators

Actions (click, fill, navigation)

If any step is stuck → test fails after 30s

🔹 Assertion (expect) Timeout

Default: 5 seconds

Applies only to assertions:

await expect(page).toHaveTitle('Google');


Assertion retries automatically until timeout

📌 Why important:

UI may load slowly

Assertions wait intelligently → fewer flaky tests

2️⃣ Why Locators Are Required

Playwright cannot automatically guess where elements are on a page.

➡️ You must tell Playwright:

Which element

How to find it

This is done using locators.

3️⃣ Locator Basics
Syntax
page.locator(selector)


locator() finds and tracks elements

Selector tells Playwright how to reach the element

📌 Locator does NOT perform action
📌 Action comes after locator

4️⃣ Supported Selectors in Playwright
Selector Type	Support	Recommendation
CSS	✅ Fully supported	⭐ Best
XPath	⚠️ Supported	❌ Not recommended

👉 Playwright is CSS-first

5️⃣ Inspecting Elements (Finding Attributes)

Steps:

Right-click element → Inspect

Look for attributes:

id

class

name

type

Use attributes to build CSS selector

6️⃣ CSS Selector Rules (Most Important Part)
🔹 1. ID Selector (Best Choice)
#username

await page.locator('#username').fill('Rahul Shetty');


✔ Fast
✔ Unique
✔ Reliable

🔹 2. Class Selector
.form-control

await page.locator('.form-control').fill('value');


⚠️ Use only if unique

🔹 3. Attribute Selector (Very Powerful)
[name="username"]
[type="password"]

await page.locator('[name="username"]').fill('Rahul');
await page.locator('[type="password"]').fill('learning');


✔ Works even without ID or class
✔ Very flexible

🔹 4. Tag Name (Optional)
input#username


📌 Tag name improves selector strength but is optional

7️⃣ Selector Validation Tools (Recommended)
Chrome Extensions:

SelectorsHub

ChroPath

Usage:

Paste selector

Confirm:

✅ 1 element matching

❌ Multiple matches → bad selector

📌 Use plugins to validate, not blindly copy

8️⃣ Typing into Input Fields (IMPORTANT UPDATE)
❌ Deprecated (Old)
type()

✅ Recommended (Current)
fill()

Why fill()?

Clears existing text

Types new value

Consistent behavior

Not deprecated

Example
await page.locator('#username').fill('Rahul Shetty');
await page.locator('[type="password"]').fill('learning');

9️⃣ Clicking Buttons
await page.locator('#signInBtn').click();

Pattern:
Locate → Perform Action

🔟 Complete Login Automation (Invalid Credentials)
test('Invalid login test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  await page.locator('#username').fill('Rahul Shetty');
  await page.locator('[type="password"]').fill('learning');
  await page.locator('#signInBtn').click();
});


➡️ This will trigger login error, which will be validated next.

1️⃣1️⃣ Key Playwright Patterns Learned

page.locator() → identify element

.fill() → enter text

.click() → perform click

await before every action

Prefer ID > attribute > class

CSS selectors > XPath

1️⃣2️⃣ Common Beginner Mistakes ⚠️

❌ Missing await
❌ Using deprecated type()
❌ Non-unique selectors
❌ Blindly copying plugin selectors

1️⃣3️⃣ Interview-Ready Summary 🧠

Locators are mandatory in Playwright

CSS selectors are preferred

fill() replaces type()

Assertions auto-wait

Timeouts are configurable

Each action must be awaited


*/
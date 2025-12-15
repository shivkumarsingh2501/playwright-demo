const {test} = require('@playwright/test');

test('example test', async ({ browser }) => {
  // browser is available here
});
 

/*
📘 Playwright JS – Browser, Context & Page (Beginner to Pro Notes)

1) Playwright fixtures – core concept

- What is a fixture?
  A fixture is a predefined object provided by Playwright and automatically
  available to your test when accepted as a parameter (e.g. `browser`, `page`).

- Examples: `browser`, `context`, `page`, `request`.

Note: Fixtures behave like global helpers but must be explicitly accepted
as parameters in your test function: `async ({ page }) => { ... }`.

2) `browser` fixture (global fixture)

test('example test', async ({ browser }) => {
  // browser is available here
});

Key points:
- `browser` is globally provided by Playwright — do not import it.
- Pass fixtures using curly braces: `async ({ browser }) => {}`.
- Wrong: `async (browser) => {}`

3) What is a browser context?

- Real-world analogy: normal Chrome = saved cookies/extensions, incognito = clean session.
- Playwright `context` is a fresh, isolated browser session (no cookies, cache, extensions).
  const context = await browser.newContext();

Every test should ideally run in a fresh context to avoid flaky tests.

4) Why context is important

- Configure browser before tests: inject cookies, set proxy, set permissions, emulate devices.
  const context = await browser.newContext({ storageState: 'login.json', proxy: { server: 'http://proxy.com' } });

Advanced use case: login once, save cookies, reuse session to skip login page.

5) Creating a page (browser tab)

- Browser alone is not enough — automation happens on a `page` (tab).
  const page = await context.newPage();

Flow: browser → context → page → automation

6) Mandatory use of `await`

- Wrong (will fail):
    const context = browser.newContext();
    const page = context.newPage();

- Correct:
    const context = await browser.newContext();
    const page = await context.newPage();

JavaScript is asynchronous: a page cannot be created before the context exists.

7) Navigating to a URL

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

Always use `await` with Playwright actions.

8) Full example – manual browser control

import { test } from '@playwright/test';

test('Browser context example', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
});

Use this approach when you need cookies, proxy, or custom browser behavior.

9) Shortcut way – `page` fixture (most common)

Playwright can create browser, context and page automatically for you:

test('Simple page test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
});

This is suitable for ~90% of UI tests.

10) Comparison – which should you use?

Scenario -> Use:
- Simple UI automation -> `page` fixture
- Cookie injection, proxy setup, login bypass -> `browser.newContext()`
- Fast test writing -> `page` fixture

11) Final summary (interview ready)

- `browser` → launches browser engine
- `context` → isolated session (like incognito)
- `page` → actual tab for automation
- Fixtures must be passed using `{ }` parameters
- `await` is mandatory for every Playwright action
- Use `page` fixture unless customization is needed

*/


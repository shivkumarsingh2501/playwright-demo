import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright Configuration — Beginner Notes
 *
 * 1) What is playwright.config.ts?
 *    - The heart of a Playwright project. Controls which tests run,
 *      browser selection, timeouts, reporters, headed/headless mode,
 *      and parallelism. Created automatically when initializing Playwright.
 *
 * 2) Why simplify the config initially?
 *    - The default config contains many options which can be confusing.
 *      Start minimal and add options as you learn.
 *
 * 3) Minimal starter config (below): keeps things simple for beginners.
 *
 * 4) `testDir` — Where tests are located
 *    - Playwright scans the `tests/` folder for `.spec.js` / `.spec.ts` files.
 *    - You run `npx playwright test` which reads this config and runs tests.
 *
 * 5) Timeouts
 *    - `timeout`: global test-step timeout (e.g. page actions, navigation).
 *      Example below sets `timeout: 40000` (40s) instead of the 30s default.
 *    - `expect.timeout`: timeout for assertions only.
 *
 * 6) Browser configuration (inside `use`)
 *    - Central place to select browser: `chromium`, `firefox`, `webkit`.
 *
 * 7) Headless vs headed
 *    - Playwright runs headless by default. Use the CLI to run headed:
 *      `npx playwright test --headed`
 *
 * 8) `defineConfig`
 *    - A thin wrapper around exporting a config object that Playwright reads.
 *
 * 9) Running tests
 *    - `npx playwright test` runs the suite based on this config.
 *    - To open the HTML report: `npx playwright show-report` (reporter: 'html').
 *
 * 10) Test execution order
 *    - Different files run in parallel; tests inside a file run sequentially.
 *
 * 11) Running a single test during development
 *    - Use `test.only(...)` to focus on a single test.
 *
 * Quick starter commands:
 *   npx playwright test
 *   npx playwright test --headed
 *   npx playwright show-report
 */

/**
 * Read environment variables from file (optional).
 * Uncomment and configure if you use a .env file.
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See: https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  // 4) Where your tests live
  testDir: './tests',

  // 5) Timeouts
  // Global timeout for each test
  timeout: 40000,
  // Assertion timeout
  expect: {
    timeout: 40000,
  },

  // 6) Shared settings for all tests
  use: {
    // Browser choice: 'chromium' | 'firefox' | 'webkit'
    browserName: 'chromium',
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',
  },

  // 12) Reporter configuration — simple HTML report for beginners
  reporter: 'html',

  /* Configure projects for major browsers (kept commented for simplicity)
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  */
});

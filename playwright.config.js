import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000,
  },
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot : "only-on-failure",
    video : "retain-on-failure"
  },
  reporter: 'html',
});

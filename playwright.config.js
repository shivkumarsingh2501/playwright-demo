import { defineConfig } from '@playwright/test';

//it is heart of our project 
// playwright.config.js
// playwright.config.js : is the central configuration file that controls how test are executed including browser , selection , test ,location , timeout and reporting
//it is the heart of the project
// why this file is improtant : which test to run , which browser to use , what timeout to apply 
export default defineConfig({
  testDir: './tests', // this will run all the test insied this folder // it scan the floder and finds all.spec.js file and runs all the tests inside
  timeout: 40 * 1000, // globlal time out : used for large table loading // slow api respone // maximum time out for each test is 40 second
  expect: {
    timeout: 10000,
  },
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot : "only-on-failure",
    video : "retain-on-failure"
  },
  reporter: 'html'
  // globalSetup: './global_setup.js',
  // use: {
  //   storageState: 'auth.json'
  // }
});

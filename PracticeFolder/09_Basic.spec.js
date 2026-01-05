import { expect, test } from '@playwright/test';

test('Valid login test with try-catch', async ({ page }) => {

  const userName = page.locator('#username');
  const password = page.locator('[type="password"]');
  const selectOption = page.locator('select.form-control');
  const signInBtn = page.locator('#signInBtn');
  const errorMsg = page.locator("[style*='block']");

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  console.log(await page.title());

  await userName.fill('rahulshettyacademy');
  await password.fill('learning');
  await selectOption.selectOption('Teacher');
  await signInBtn.click();

  try {
    // ⛔ TRY TO FIND ERROR MESSAGE (login failure case)
    await expect(errorMsg).toContainText('Incorrect username/password.', {
      timeout: 5000
    });

    console.log('❌ Login Failed:', await errorMsg.textContent());

  } catch (error) {
    // ✅ ERROR MESSAGE NOT FOUND → LOGIN SUCCESS
    console.log('✅ Login Successful');

    // Continue with dashboard logic
    const firstProduct = page.locator('.card-body a').first();
    console.log('First Product:', await firstProduct.textContent());

    await expect(firstProduct).toBeVisible();
  }
});

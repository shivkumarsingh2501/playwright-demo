import { expect, test } from '@playwright/test';
import { getRandomUser } from '../utils/testDataUtils';

test('Registration of User', async ({ page }) => {
  const clickRegister = page.locator('.text-reset');  
  const firstName = page.locator('[type="firstName"]');
  const lastName = page.locator('#lastName');
  const userEmail = page.locator('#userEmail');
  const phoneNumber = page.locator('#userMobile');
  const userPassword = page.locator('#userPassword');
  const confirmPassword = page.locator('#confirmPassword');
  const checkBoxMale = page.locator('input[value="Male"]');
  const checkBoxFemale = page.locator('input[value="Female"]');
  const registerBtn = page.locator('input[value="Register"]');
  const ageEigthteen = page.locator('input[type="checkbox"]');
  const Ocupation = page.locator('select[formcontrolname="occupation"]');
  const user = getRandomUser();
  const clickLLogin = page.locator('text=Login'); 
  const loginBtn = page.locator('button[class="btn btn-primary"]');

  // --------------------
  // REGISTER NEW USER FLOW
  // -------------------- 



  
  
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  console.log( 'Title',await page.title());
  await clickRegister.click();
  await page.waitForTimeout(5000);
  await expect(page).toHaveURL(/.*register/);
  await firstName.fill(user.firstName).then(async ()=>{
    console.log('First Name:', user.firstName);
  });   
  await lastName.fill(user.lastName).then(async ()=>{
    console.log('Last Name:', user.lastName);
  }); 
  await userEmail.fill(user.email).then(async ()=>{
    console.log('Email:', user.email);
  });
  await phoneNumber.fill(user.phone). then(async ()=>{
    console.log('Phone:', user.phone);
  });

  await userPassword.fill(user.password).then(async ()=>{
    console.log('Password:', user.password);
  });
  await Ocupation.selectOption('Engineer');

  await confirmPassword.fill(user.password);
  await checkBoxMale.click();
  await ageEigthteen.check();

  await registerBtn.click();
  
  
  // --------------------
  // CONFIRM NAVIGATION AFTER REGISTER
  // --------------------

   await expect(page).toHaveURL(/.*register/);
   await page.waitForTimeout(10000);
   await loginBtn.click();
   await page.waitForTimeout(10000);

  // --------------------
  // LOGIN WITH SAME CREDENTIALS
  // --------------------

  await userEmail.fill(user.email);
  await userPassword.fill(user.password);
  await clickLLogin.click().then(async ()=>{
    console.log('Login with registered user:', user.email);
  });

  // --------------------
  // CONFIRM LOGIN SUCCESS
  // --------------------
  await expect(page).toHaveURL('https://rahulshettyacademy.com/client/#/dashboard/dash');

  await page.waitForTimeout(30000);

});

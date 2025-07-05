import { test, expect } from './fixtures/fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.html');
});

test('registration', async ({ page, user, pageManager }) => {
  await page.getByRole('link', { name: 'Register' }).click();

  const registrationPage = pageManager.getRegistrationPage();
  await registrationPage.fillForm(user);
  await registrationPage.submitForm();

  await expect(page.locator('#rightPanel')).toContainText(
    'Your account was created successfully. You are now logged in.'
  );

  await page.getByRole('link', { name: 'Log Out' }).click();
});

test('login', async ({ page, user, pageManager }) => {
  await page.locator('input[name="username"]').fill(user.username);
  await page.locator('input[name="password"]').fill(user.password);
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.locator('#showOverview')).toContainText('Accounts Overview');
});
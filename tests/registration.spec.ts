import { test, expect } from './fixtures/fixtures';
import * as fs from 'fs';
import * as path from 'path';

test.beforeEach(async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank');
});

test('registration and login', async ({ page, user, pageManager }) => {
  await pageManager.getHomePage().registerLinkClick();

  const registrationPage = pageManager.getRegistrationPage();
  await registrationPage.fillForm(user);
  await registrationPage.submitForm();

  await expect(page.locator('#rightPanel')).toContainText(
    'Your account was created successfully. You are now logged in.'
  );

  await page.getByRole('link', { name: 'Log Out' }).click();

  await pageManager.getHomePage().userField.fill(user.username);
  await pageManager.getHomePage().passwordField.fill(user.password);
  console.log('User:', user.username, 'Password:', user.password);
  await pageManager.getHomePage().loginButtonClick();
  await expect(page.locator('#showOverview')).toContainText('Accounts Overview');
});
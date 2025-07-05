import { APIRequestContext } from '@playwright/test';
import { test, expect, request } from './fixtures/fixtures';
import * as fs from 'fs';
import * as path from 'path';

test.beforeEach(async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank');
});

test('registration', async ({ page, user, pageManager }) => {
  await pageManager.getHomePage().registerLinkClick();

  const registrationPage = pageManager.getRegistrationPage();
  await registrationPage.fillForm(user);
  await registrationPage.submitForm();

  await expect(page.locator('#rightPanel')).toContainText(
    'Your account was created successfully. You are now logged in.'
  );

  await page.getByRole('link', { name: 'Log Out' }).click();
});

test('login with existing user', async ({ page, pageManager }) => {
  const userRaw = fs.readFileSync(path.join(__dirname, './model/test-user.json'), 'utf-8');
  const user = JSON.parse(userRaw);
  await pageManager.getHomePage().userField.fill(user.username);
  await pageManager.getHomePage().passwordField.fill(user.password);
  console.log('User:', user.username, 'Password:', user.password);
  await pageManager.getHomePage().loginButtonClick();
  await expect(page.locator('#showOverview')).toContainText('Accounts Overview');
});

test('login with existing user API validation', async ({ page, pageManager, waitForAccountsApiSuccess }) => {
  const userRaw = fs.readFileSync(path.join(__dirname, './model/test-user.json'), 'utf-8');
  const user = JSON.parse(userRaw);
  
  await pageManager.getHomePage().userField.fill(user.username);
  await pageManager.getHomePage().passwordField.fill(user.password);
  await pageManager.getHomePage().loginButtonClick();

  const apiCheck = waitForAccountsApiSuccess(page);
  
  await apiCheck;
  console.log('API validation successful for user:', user.username);
});


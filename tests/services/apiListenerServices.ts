import { Page, expect } from '@playwright/test';

export async function waitForAccountsApiSuccess(page: Page): Promise<void> {
  let apiSuccess = false;

  // Start listening
  page.on('response', async (response) => {
    const url = response.url();
    if (
      url.includes('/services_proxy/bank/customers/') &&
      url.endsWith('/accounts') &&
      response.status() === 200
    ) {
      apiSuccess = true;
      console.log('✅ Account API call succeeded:', url);
    }
  });

  // Wait for response to happen after login
  await page.waitForTimeout(1000); // Or replace with waitForResponse if desired

  expect(apiSuccess).toBeTruthy();
}


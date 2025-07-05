import { request, expect, test as base, Page } from '@playwright/test';
import { PageManager } from '../pageobject/pageManager';
import { createUser, User } from '../model/user';
import { waitForAccountsApiSuccess } from '../services/apiListenerServices';

export type TestOptions = {
  pageManager: PageManager;
  user: User;
  createUser: () => User;
  waitForAccountsApiSuccess: (page: Page) => Promise<void>;
};

export const test = base.extend<TestOptions>({
  pageManager: async ({ page }, use) => {
    const pageManager = new PageManager(page);
    await use(pageManager);
  },

  user: async ({}, use) => {
    const user = createUser();
    await use(user);
  },

  createUser: async ({}, use) => {
    await use(createUser);
  },

  waitForAccountsApiSuccess: async ({}, use) => {
    await use(waitForAccountsApiSuccess);
  }
});

export { expect, request } from '@playwright/test';
export { PageManager } from '../pageobject/pageManager';
export { User, createUser } from '../model/user'; 
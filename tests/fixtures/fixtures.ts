import { expect, test as base } from '@playwright/test';
import { PageManager } from '../pageobject/pageManager';
import { createUser, User } from '../model/user';

export type TestOptions = {
  pageManager: PageManager;
  user: User;
  createUser: () => User;
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
  }
});

export { expect };
export { PageManager } from '../pageobject/pageManager';
export { User, createUser } from '../model/user'; 
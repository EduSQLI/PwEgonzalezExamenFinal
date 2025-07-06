import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  //workers: 1,
  reporter: [['html', { open: 'never' }]],

  use: {
    baseURL: 'https://parabank.parasoft.com/parabank',
    ...devices['Desktop Chrome'],
    headless: false,
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'web',
      use: {
        ...devices['Desktop Chrome'],
        isMobile: false,
      },
    },
  ],
});


import { test as base } from '@playwright/test';
import { expect } from '@playwright/test';
import { PageManager } from '../page-objects/page-manager';

export {expect}; 

// Declare the types of your fixtures.
export type MyFixtures = {
  pageManager: PageManager;
  openWebApp: string;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
  openWebApp:[ async ({ page }, use) => {
    // Set up the fixture.
    await page.goto('https://hiv-modeling-tool-dev.ecdc.azure/')
    // Use the fixture value in the test.
    await use('');

    // Clean up the fixture.
    //await page.close();
  },{auto: true}],

  pageManager: async ({ page }, use) => {
    const pm = new PageManager(page);
    await use(pm);
  },
});



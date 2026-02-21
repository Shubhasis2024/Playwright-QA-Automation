import { test, expect } from '@playwright/test';

test('TC-01-Verify the page title', async ({ page }) => {

  await page.goto('https://playwright.dev/docs/intro');

  let pagetitle = await page.title();
  console.log(pagetitle);

  await expect(page).toHaveTitle("Installation | Playwright");

});

test('TC-02-Verify the page Url', async ({ page }) => {

  await page.goto('https://playwright.dev/docs/intro');

  let pageurl = await page.url();
  console.log(pageurl);

  await expect(page).toHaveURL(/playwright/);

});

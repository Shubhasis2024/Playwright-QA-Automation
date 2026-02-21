import { test, expect } from '@playwright/test';

test('TC-01-Verify the page title', async ({ page }) => {

  await page.goto('https://makaut1.ucanapply.com/smartexam/public/student');

  let pagetitle = await page.title();
  console.log(pagetitle);

  await expect(page).toHaveTitle("Maulana Abul Kalam Azad University of Technology");

});
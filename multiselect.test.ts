import { test, expect, Locator } from "@playwright/test";

test('Verify the multi select dropdown ', async ({page}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.locator('#colors').selectOption(['Red','green','white'])//by text
      // await page.locator('#colors').selectOption(['blue','red']) //by value
     await page.locator('#colors').selectOption({label:"Red"})
});
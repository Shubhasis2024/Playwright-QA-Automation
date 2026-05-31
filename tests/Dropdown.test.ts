import { test, expect, Locator } from "@playwright/test";

test("Verify the country list dropdown functionality ", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  page.locator("#country").selectOption("India");
  page.locator("#country").selectOption({ value: "canada" });
  page.locator("#country").selectOption({ label: "brazil" });
  await expect(page.locator("#country")).toHaveValue("india");

  await page.waitForTimeout(4000);
});

test.only('Get all the country list values', async ({page}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const Countrydata:Locator=page.locator('#country>option');
  await expect(Countrydata).toHaveCount(10);
});

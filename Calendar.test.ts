import { test, expect, Locator } from "@playwright/test";

test("Verify system capture the pickup date  manually", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const pickdate: Locator = page.locator("input#datepicker"); //pickupdate
  await expect(pickdate).toBeVisible();
  await pickdate.click();
  //    await pickdate.fill('07/22/2026');
  //    await expect(pickdate).toHaveValue('07/22/2026');//This is manual input entry
  await page.getByRole("link", { name: "17" }).click(); // This is click by calender box entry
  await expect(pickdate).toHaveValue("07/17/2026");
});

import { test, Locator, expect } from "@playwright/test";

test('Verify the Private bus ', async ({page}) => {
    await page.goto("https://wbbus.in");
    const privatelink:Locator=page.locator("//a[normalize-space()='Private']");
    await privatelink.click();
    await expect((page.getByText('Select Dipo Name'))).toBeVisible();
});

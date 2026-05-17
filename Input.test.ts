import { test, expect, Locator } from "playwright/test";

// test("Verify the input box functionality of firstname", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");
//   const name: Locator = page.locator("#name");
//   await expect(name).toBeEnabled();
//   await expect(name).toBeVisible();

//   await name.fill("Admin user");
//   const entervalue: string = await name.inputValue();
//   console.log("I have entered for testing at name placeholder:", entervalue);

//   expect(entervalue).toBe("Admin user"); //Test cas pass today 17/05/2026
//   await page.waitForTimeout(4000);
// });


test('Serach all the country name',async  ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const country:Locator=page.locator('#country');
    await country.selectOption(['usa', 'india']);
    await expect(country).toHaveValues([/usa/,/india/]);
  
});

import { test, expect, Locator } from "@playwright/test";

// test("Verify the country list dropdown functionality ", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");
//   page.locator("#country").selectOption("India");
//   page.locator("#country").selectOption({ value: "canada" });
//   page.locator("#country").selectOption({ label: "brazil" });
//   await expect(page.locator("#country")).toHaveValue("india");

//   await page.waitForTimeout(4000);
// });

// test('Get all the country list values', async ({page}) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");
//   const Countrydata:Locator=page.locator('#country>option');
//   await expect(Countrydata).toHaveCount(10);
// });
//Script added on 04-06-2026
test('Verify the Country name avilability indropdown', async ({page}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const Countrydata:Locator=page.locator('#country>option');
  await expect(Countrydata).toHaveCount(10);

const Countryname:string[]= ( await Countrydata.allTextContents()).map(text=>text.trim());
  console.log(Countryname);

  expect(Countryname).toContain('India');//Check the Country name 
  

  for (let index = 0; index < Countryname.length; index++) {
    const element = Countryname[index];
    console.log(element);// This is print in text format
  }
});




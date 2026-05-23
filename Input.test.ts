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


// test('Serach all the country name',async  ({page}) => {
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     const country:Locator=page.locator('#country');
//     await country.selectOption( 'india');
//     await expect(country).toHaveValue('india');
  
// });


//Those code has been added today 23/05/26

// test('Verify to click on gennder dropdown ',async ({page}) => {
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     const gender:Locator=page.locator('#male');
//     await gender.click();
//      await expect(gender).toHaveValue('male');
//     const gender2:Locator=page.locator('#female');
//     await gender2.click();
//      await expect(gender2).toHaveValue('female');
//      await page.waitForTimeout(4000);
// });

test('Verify the Days secletion in page by user', async ({page}) => {
     await page.goto("https://testautomationpractice.blogspot.com/");
     const day1:Locator=page.locator('#sunday');
     await day1.click();
     await expect(day1).toHaveValue('sunday');
     const day2:Locator=page.locator('#monday');
     await day2.click();
    await expect(day2).toHaveValue('monday');
    await page.waitForTimeout(4000);
});

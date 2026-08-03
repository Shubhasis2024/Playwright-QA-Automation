import { test, expect, Locator } from "@playwright/test";

// test("Verify system capture the pickup date  manually", async ({ page }) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");
//   const pickdate: Locator = page.locator("input#datepicker"); //pickupdate
//   await expect(pickdate).toBeVisible();
//   await pickdate.click();
//   await pickdate.fill('08/22/2026');
//   //    await expect(pickdate).toHaveValue('07/22/2026');//This is manual input entry
//   // await page.getByRole("link", { name: "17" }).click(); // This is click by calender box entry
//   await expect(pickdate).toHaveValue("08/22/2026");
   
  
  
//   const pickdate2:Locator=page.locator('input#txtDate');
//    await pickdate2.click();
//   // Select year if the calendar provides a dropdown
// const monthYear = page.locator(".ui-datepicker-title");

// while ((await monthYear.textContent()) !== "August 2026") {
//     await page.locator(".ui-datepicker-next").click();
// }
// await page.getByRole("link", { name: "30", exact: true }).click();

//   await expect(pickdate2).toHaveValue('08/30/2026');
// });


test("Verify Date Picker 1 & 2", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Date Picker 1
    const pickdate = page.locator("#datepicker");

    await pickdate.fill("08/22/2026");

    await expect(pickdate).toHaveValue("08/22/2026");

    // Date Picker 2
    const pickdate2 = page.locator("#txtDate");

    await pickdate2.click();

    const monthYear = page.locator(".ui-datepicker-title");

    while (true) {
        const current = await monthYear.textContent();

        if (current?.trim() === "August 2026") {
            break;
        }

        await page.locator(".ui-datepicker-next").click();
    }

    await page.getByRole("link", { name: "30", exact: true }).click();

    await expect(pickdate2).toHaveValue("30/08/2026");
});
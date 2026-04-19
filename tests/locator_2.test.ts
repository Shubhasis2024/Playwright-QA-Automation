import {test,expect}from "@playwright/test";

test("Verify page text 01",async ({page})=>{

     await page.goto("https://seleniumbase.io/demo_page");

     const text = page.getByRole("heading", { name: "Demo Page" });
await expect(text).toBeVisible();

const headingval=page.getByRole("heading",{name:"SeleniumBase"});
await expect(headingval).toBeVisible();

    await page.getByRole("link",{name:"seleniumbase.com"}).click()

     

})
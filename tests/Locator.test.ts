import {test, expect } from "@playwright/test";

test("Verify page text 01",async ({page})=>{

     await page.goto("https://webdriveruniversity.com/index.html");

     const text=page.getByText('Master Generative AI for Software Testing')

    await  expect(text).toBeVisible()


     await page.getByRole("link",{name:"Playwright with TypeScript"}).click()

     

})
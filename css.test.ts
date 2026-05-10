import { test,expect,Locator } from "playwright/test";

// test('Verify CSS selection with id in page ', async({page}) => {

//     await page.goto('https://demo.nopcommerce.com/');
//     const searchbox:Locator=page.locator('#small-searchterms');
//    await  searchbox.fill("Myname:Shubhasis QA anaylist");
//    await expect(page.locator("#small-searchterms")).toHaveValue('Myname:Shubhasis QA anaylist');
  
// });

// test('Verify css selector using ID ', async({page}) => {
//     await page.goto("https://www.google.com/");
//     const searchbox:Locator=page.locator("#APjFqb");
//     await searchbox.fill("Automation Testing SDET");
//     await expect(page.locator("#APjFqb")).toHaveValue("Automation Testing SDET");
  
// });

test('Verify the CSS selector using Class',async ({page}) => {
   await page.goto("https://www.google.com/");
   const searchfield:Locator=page.locator('.gLFyf');
   await searchfield.fill("SDET jobs");
   await expect(page.locator(".gLFyf")).toHaveValue("SDET jobs");
})

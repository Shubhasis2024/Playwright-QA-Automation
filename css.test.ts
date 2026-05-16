import { test,expect,Locator } from "playwright/test";
//day1 work stareted

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

// test('Verify the CSS selector using Class',async ({page}) => {
//    await page.goto("https://www.google.com/");
//    const searchfield:Locator=page.locator('.gLFyf');
//    await searchfield.fill("SDET jobs");
//    await expect(page.locator(".gLFyf")).toHaveValue("SDET jobs");
// })
//day2 update from here 
// test('Verify class locator with attribute', async({page}) => {
//     await page.goto("https://demo.nopcommerce.com/");
//     const searchbar:Locator=page.locator('.search-box-text');
//    await searchbar.fill("Iphone");
//    await expect(page.locator('.search-box-text')).toHaveValue('Iphone');
  
// });
//when the clss name or id cannot findout the that time use Atag with arribute value

// test('Verify the Attritute locator with any value', async({page}) => {
//     await page.goto("https://demo.nopcommerce.com/");
//     const searchbar:Locator=page.locator('input[name=q]') //tag with attribute and value 
//     await searchbar.fill('Galaxy');
//     await expect(page.locator("input[name=q]")).toHaveValue('Galaxy');
// })

//using the tag.classnameand attribute as locator

// test('Verify the css locator with tagand class and value atrribute',async ({page}) => {
//     await page.goto("https://demo.nopcommerce.com/");
//     const searchlink:Locator=page.locator('input.search-box-text ui-autocomplete-input[name=q]');
//     await searchlink.fill('Samsung');
//     await expect(page.locator('input.search-box-text ui-autocomplete-input[name=q]')).toHaveValue('Samsung');
// });

test('Test the data from system data', async({page}) => {
    await page.goto('https://demo.nopcommerce.com/');
    const value:Locator=page.getByText('Computers');
    console.log(value);
  
})

import {test,expect} from '@playwright/test'

test("Verify the page text",async ({page})=>{

    // await page.goto("https://demo.nopcommerce.com/");
    await page.goto("https://www.nopcommerce.com/en/demo");
    await expect(page.getByText("nopCommerce Store Demo")).toHaveText("nopCommerce Store Demo")
});
import {test,Locator,expect }from "@playwright/test";

test('verify input field with Xpath', async ({page}) => {

    await page.goto("https://www.nopcommerce.com/en/request-quote");

  const Contactname:Locator= page.locator('//*[@id="ContactName"]');
  await Contactname.fill('Demo1');

 const companyname:Locator=page.locator('//*[@id="CompanyName"]')
  await companyname.fill('Demo company')
  
});

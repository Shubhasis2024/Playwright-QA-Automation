import { test, expect, Locator } from "playwright/test";
//#ctl00_ContentPlaceHolder1_DataGrid1 tr>
test('Get all the deatils of whisky', async({page}) => {

    await page.goto("https://excise.wb.gov.in/CommonUser/RegisterBrand_Liquor.aspx?type=28");
      await page.waitForTimeout(4000);
    const category = page.locator(
        "//select[@id='ctl00_ContentPlaceHolder1_lic_cat']"
    );
    await category.selectOption("02");

const liquorkind = page.locator(
        "//select[@id='ctl00_ContentPlaceHolder1_lic_kind']"
);

  await liquorkind.selectOption("01");
  
  const liquorType = page.locator(
        "//select[@id='ctl00_ContentPlaceHolder1_lic_type']"
);

 await liquorType.selectOption("14");

 const FY=page.locator(
        "//select[@id='ctl00_ContentPlaceHolder1_fin_yr']"
);
await FY.selectOption("2026-2027");

await page.waitForTimeout(5000);

const element:Locator=page.locator("#ctl00_ContentPlaceHolder1_DataGrid1 tbody tr td:nth-child(1)");
//const newelem:string[]=await element.allTextContents();

const count = await element.count();
console.log("Total brands:", count);
for (let i = 0; i < count; i++) {
    console.log(`${i + 1}. ${await element.nth(i).allInnerTexts()}`);
}


})

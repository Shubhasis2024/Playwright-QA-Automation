import { test, expect, Locator } from "playwright/test";

test("Read the all the data from dynamic tabel", async ({ page }) => {
  await page.goto("https://datatables.net/");

  let haspage = true;

  // let rows =await page.locator("#myTable tbody tr").all();
  // for(let row of rows){
  //    console.log( await row.innerText());
  // }

  while (haspage) {
    let rows = await page.locator("#myTable tbody tr").all();
    for (let row of rows) {
      console.log(await row.innerText());
    }
    await page.waitForTimeout(4000);
    const nextbtn: Locator = page.locator("button[aria-label='Next']");
    const isdisabaled = await nextbtn.getAttribute("Class");
    if (isdisabaled?.includes("disabled")) {
      haspage = false;
    } else {
      await nextbtn.click();
    }
  }
});

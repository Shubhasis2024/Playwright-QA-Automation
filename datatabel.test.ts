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

test.only('Search any data froom datatabel automatically', async({page}) => {
  await page.goto("https://datatables.net/");
 const search:Locator= page.locator("#dt-search-0");
 await search.fill("Singapore");
await page.waitForTimeout(4000)
  const rows =await page.locator("#myTable tbody tr").all()
   console.log("Values are:-",rows);
  if (rows.length>=1)
  {
    for(let row of rows)
    {
      const value= await row.innerText()
      if(value.includes("Singapore"))
      {
        console.log("Value Exist !")
       
        break;
      }
    }
  }
  else
  {
    console.log("No value exist here");
  }
})

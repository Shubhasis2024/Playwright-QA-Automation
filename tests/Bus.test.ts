import { test, Locator, expect } from "@playwright/test";

test("Verify the bus by route search ", async ({ page }) => {
  await page.goto("https://wbbus.in/");
  const searchroute: Locator = page.locator(
    "//div[@class='mb-3 mx-2']//select[@id='searchType']",
  );
  await searchroute.click();
  //    await expect(page).toHaveURL('https://wbbus.in/');

  const start: Locator = page.locator(
    "//div[@id='diporow']//input[@id='dipo']",
  );
  await start.fill("Ranaghat");
  const start2: Locator = page.locator(
    "//div[@id='destirow']//input[@id='desti']",
  );
  await start2.fill("Krishnanagar");
  const searchbtn: Locator = page.locator(
    "//button[normalize-space()='Submit']",
  );
  await searchbtn.click();
  await expect(page).toHaveURL(
    "https://wbbus.in/search/view?searchType=1&dipo=Ranaghat&desti=Krishnanagar",
  );
  const busSearchResult=page.getByText("Bus Search Result (10)")
  await expect (busSearchResult).toBeVisible();
 
});
test('Verify The search result ', async({page}) => {
  await page.goto('https://wbbus.in/search/view?searchType=1&dipo=Ranaghat&desti=Krishnanagar');
 const searchlist:Locator=page.locator('//*[@id="blur"]/div[3]');
  const totalcount: number = await searchlist.count();
  console.log('Total count found',totalcount);
});


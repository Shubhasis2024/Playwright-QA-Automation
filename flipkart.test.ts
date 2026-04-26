import {test,expect, Locator  } from "@playwright/test";

test('Verify the search is working by input ', async({page}) => {
    await page.goto('https://www.flipkart.com/');
    const searchbtn:Locator=page.locator("//input[@fdprocessedid='yobwsl']");
    await  searchbtn.fill('vivo V70');
    const item:Locator=page.locator('//*[@id="container"]/div/div[1]/div/ul/a[1]/li/div[2]/div/div[1] ');
    item.click();
    await expect(page.getByText('vivo V70 Elite (Passion Red, 256 GB)')).toBeVisible();
})

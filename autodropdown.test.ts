import { test, expect, Locator } from "playwright/test";

test("Autosearch test ", async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    await page
        .locator(
            '//*[@id="container"]/div/div[1]/div/div/div/div/div/div/div/div/div/div[1]/div/div/div[2]/div/div/div/div/div/header/div[1]/div[1]/form/div/div/input',
        )
        .fill("mobile");
    await page.waitForTimeout(5000);
    const options: Locator = page.locator("ul>li");
    const countofoptions = await options.count();
    console.log("Total count of search result is showing:-", countofoptions);
    await page.waitForTimeout(5000);

    for (let i = 1; i <= countofoptions; i++) {
        console.log(`The ${i} search result is :`,await options.nth(i).innerText(),
        );
       // console.log( `The ${i} search result is :`, await options.nth(i).textContent(),
        //);
    }
    //If we i want to see the match the search result comes or not with my keyword
 for (let i = 1; i <= countofoptions; i++) {
        const value= await options.nth(i).innerText();
        if(value==="mobile 5g samsung"){
            options.nth(i).click();
            break;
        }
 }

});

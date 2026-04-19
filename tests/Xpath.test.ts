import {test,Locator,expect }from "@playwright/test";

test("verify using xpath",async({page})=>{

    await page.goto("https://www.nopcommerce.com/en/demo")
//Absolute xpath
   const admin:Locator= page.locator("//html/body/div[7]/section/div/div/div/div/div/div[2]/div/div[1]/div[2]/div/div/a[1]")
   await expect(admin).toBeEnabled();
})

test('relative xpath test',async ({page}) => {
   await page.goto("https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F")
   const login:Locator=page.locator("//*[@id='main']/div/section/div/div[2]/div[1]/div/form/div[3]/button")
   await expect(login).toBeEnabled();
})

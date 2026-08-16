import { test, expect, Locator } from "playwright/test";

test('Verify the dynamic dropdown selection process', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //Login steps 
    await page.locator("input[name='username']").fill('Admin');
     await page.locator("input[name='password']").fill('admin123');
     await page.locator("button[type='submit']").click();
 //PIM module open step 
  await page.getByText('PIM').click();

//Capture the Elements from dropdown list

await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]/i').click();
await page.waitForTimeout(4000);
const joblist :Locator= page.locator("div[role='listbox'] span");
const count:number=await joblist.count();
console.log("Total list present are :-",count);//Count all elements
const list=await joblist.allTextContents();// get all elements to show i console
console.log(list);


});

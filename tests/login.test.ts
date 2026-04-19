import {test,expect} from '@playwright/test'

test("Verify the login page ", async ({page})=>{

    //login functionality check with given data 

     await page.goto("https://practicetestautomation.com/practice-test-login/");
    //opening the page by url 

    const title=page.getByRole("heading",{name:"Test login"})
    // locate the page text value 
    await expect(title).toBeVisible();
 
});

test("Verify login using credentials", async ({page})=>{
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  //enter the username 
   await  page.getByLabel("username").fill("student");
   //enter the passward 
   await  page.getByLabel("Password").fill("Password123");
    //after click on the submit button 
  await  page.getByRole('button',{name:"Submit"}).click();

  let pageurl= await page.url();
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

  await expect(page.locator('strong:has-text("Congratulations student. You successfully logged in!")')).toBeVisible();
let logutbtn=page.getByRole('link',{name:"Log out"});
 await expect(logutbtn).toBeVisible();
});



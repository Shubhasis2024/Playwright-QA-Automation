import { test,expect,Locator } from "@playwright/test";
test('Verify the capital function of this site', async({page}) => {
    await page.goto('https://hilarious-moonbeam-5957f8.netlify.app/');
    const placeholder:Locator=page.locator('//*[@id="Myboxarea"]');
    await placeholder.fill('This is the testing document');
    const upercase:Locator=page.locator("//button[normalize-space()='Click For Uppercase']");
    await upercase.click();
//     await expect(page.locator('p').filter({ hasText: 'THIS IS THE TESTING DOCUMENT' }))
//   .toBeVisible();
   
    let expectval="THIS IS THE TESTING DOCUMENT";
    let pageexpectval= await page.getByText('p').filter({ hasText: 'THIS IS THE TESTING DOCUMENT' });
    // if (expectval==pageexpectval){
    //     console.log("Test case pass");
        
    // }
    // else
    //     console.log("Test case fail");
  console.log
   (expectval);
    console.log(pageexpectval);
        
})

import { test, expect, Locator } from "@playwright/test";
//To rum        npx playwright test Demostack.test.ts 
test('Verify the URL ', async({page}) => {
  await page.goto('https://bstackdemo.com/')
  const dropdown:Locator=page.locator('select').first();
  
  await expect(dropdown).toBeVisible();
  await expect(dropdown).toBeEnabled();
await dropdown.selectOption('Lowest to highest');
 await expect(dropdown).toHaveValue('lowestprice');

    
});

test('Verify the Item list retrive from system ', async ({page}) => {
   await page.goto('https://bstackdemo.com/');
     const dropdown:Locator=page.locator('select').first();
     await dropdown.selectOption('Lowest to highest');

     
});

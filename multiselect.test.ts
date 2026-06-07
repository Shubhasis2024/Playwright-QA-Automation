import { test, expect, Locator } from "@playwright/test";
//To test paste in to the terminal :-npx playwright test multiselect.test.ts
 //npx playwright test multiselect.test.ts --headed
test('Verify the multi select dropdown ', async ({page}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

    // await page.locator('#colors').selectOption(['Red','green','white'])//by text
      // await page.locator('#colors').selectOption(['blue','red']) //by value
    //  await page.locator('#colors').selectOption({label:"Red"})
    //  await page.locator('#colors').selectOption([{index:0}])//using index 
     
    
    
    //To view how much data is present in the dropdown list 
  const Colors:Locator=page.locator('#colors>option');
    await expect(Colors).toHaveCount(7);



    //To See the al the contains of the Values 

    const Coloursname:string[]= ( await Colors.allTextContents()).map(text=>text.trim());
  console.log(Coloursname);

  expect(Coloursname).toContain('Red');//Check the colour name 


  for (let index = 0; index < Coloursname.length; index++) {
    const element = Coloursname[index];
    console.log(element);// This is print in text format
  }


});


import { test, expect, Locator } from "@playwright/test";
//To test paste in to the terminal :-npx playwright test Sorting.test.ts
 //npx playwright test Sorting.test.ts --headed

test('Verify the sorting list ', async ({page}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
     const animal:Locator= page.locator("#animals>option")

    // console.log(await animal.allTextContents());

     const Animalsname:string[]= ( await animal.allTextContents()).map(text=>text.trim());
//   console.log(Animalsname);

  const Ver1List:string[]=[...Animalsname];
  const Ver2List:string[]=[...Animalsname].sort();

  console.log('Before sorting:',Ver1List)
  console.log('After sorting',Ver2List);

 expect(Ver1List).toEqual(Ver2List);
});

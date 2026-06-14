import { test, expect, Locator } from "@playwright/test";
//To test paste in to the terminal :-npx playwright test Sorting.test.ts
 //npx playwright test Sorting.test.ts --headed

// test('Verify the sorting list ', async ({page}) => {
//   await page.goto("https://testautomationpractice.blogspot.com/");
//     //  const animal:Locator= page.locator("#animals>option")
//          const animal:Locator= page.locator("#colors>option")
//     // console.log(await animal.allTextContents());

//      const Animalsname:string[]= ( await animal.allTextContents()).map(text=>text.trim());
// //   console.log(Animalsname);

//   const Ver1List:string[]=[...Animalsname];
//   const Ver2List:string[]=[...Animalsname].sort();

//   console.log('Before sorting:',Ver1List)
//   console.log('After sorting',Ver2List);

// //  expect(Ver1List).not.toBe(Ver2List);
//  expect(Ver1List).toBe(Ver2List);
// });

//This Script has been added on the 14-06-2026
test('Verify the Duplicate Item in dropdown list',async ({page}) => {
 await page.goto("https://testautomationpractice.blogspot.com/");
    const Colors:Locator= page.locator("#colors>option")


  const colorvalue:string[]=(await Colors.allTextContents()).map(text=>text.trim());
  const setdata=new Set();
  const Duplicate:string[]=[];
  for(const val of colorvalue){

    if(setdata.has(val)){
        Duplicate.push(val);
    }
    else{
        setdata.add(val);
    }
  }


  console.log("The duplicate values are:",Duplicate);

  if(Duplicate.length>0)
  {
    console.log("The Duplicate found :",Duplicate);
  }
  else{
    console.log('NO Duplicate data found in list')
  }

 expect(Duplicate.length).toBe(2);
});

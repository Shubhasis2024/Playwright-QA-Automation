import { test, expect, Locator } from "@playwright/test";
//To rum        npx playwright test Demostack.test.ts
// test('Verify the URL ', async({page}) => {
//   await page.goto('https://bstackdemo.com/')
//   const dropdown:Locator=page.locator('select').first();

//   await expect(dropdown).toBeVisible();
//   await expect(dropdown).toBeEnabled();
// await dropdown.selectOption('Lowest to highest');
//  await expect(dropdown).toHaveValue('lowestprice');

// });

// test('Verify the Item list retrive from system ', async ({page}) => {
//    await page.goto('https://bstackdemo.com/');
//      const dropdown:Locator=page.locator('select').first();
//      await dropdown.selectOption('Lowest to highest');

// });
// test('Veify system showing all items correctly', async({page}) => {
//   await page.goto('https://bstackdemo.com/');
//      const dropdown:Locator=page.locator('select').first();
//      await dropdown.selectOption('Lowest to highest');
//     const products:Locator=page.locator('.shelf-item');
//     await expect(products).toHaveCount(25);

// });
// test('Verify the Product price and name is showing ', async({page}) => {
//    await page.goto('https://bstackdemo.com/');
//      const dropdown:Locator=page.locator('select').first();
//      await dropdown.selectOption('Lowest to highest');
//     const productsname:string[]= await page.locator('.shelf-item .shelf-item__title').allTextContents();
//     const Price:string[]= await page.locator('.shelf-item .val').allTextContents();

//     // for (let I = 0; I < productsname.length; I++) {
//     //   const productlist = productsname[I];
//     //   console.log(productlist);
//     //   }
//     //   for (const P of Price) {
//     //     console.log(P);
//     //   }

//       console.log(`products :${productsname} | Price ${Price}`);
// });

test("Verify the highest Price product  is showing", async ({ page }) => {
  await page.goto("https://bstackdemo.com/");
  const dropdown: Locator = page.locator("select").first();
  await dropdown.selectOption("Lowest to highest");
  const productsname = await page
    .locator(".shelf-item .shelf-item__title")
    .allTextContents();
  const Price = await page.locator(".val").allTextContents();
  const newprice: string[] = Price.sort();

let highest = Number(newprice[0].replace('$', ''));
let lowest = Number(newprice[0].replace('$', ''));

for (let index = 1; index < newprice.length; index++) {

    const element = Number(newprice[index].replace('$', ''));

    if (element > highest) {
        highest = element;
    }

    if (element < lowest) {
        lowest = element;
    }
}

console.log("The highest price from the list is :- $" + highest.toFixed(2));
console.log("The lowest price from the list is :- $" + lowest.toFixed(2));

});

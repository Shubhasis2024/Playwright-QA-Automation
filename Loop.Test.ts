import {test,Locator,expect }from "@playwright/test";


test('Verify all deatils count in page  ', async ({page}) => {
 await  page.goto("https://www.nopcommerce.com/en/showcase");
 const product:Locator=page.locator('//*[@id="showcase-page"]/body/div[7]/section/div/div/div/div/div/div[2]/div[3]/div[1]/div[1]')

 const Itemcount:Number=await product.count()
 console.log('The total item present in page is',Itemcount);

 let listval:string[]=await product.allTextContents();

 for ( let i of listval)
 {
    console.log(i);
 }
});

import { test, expect, Locator } from "playwright/test";

test('Text capture from image', async({page}) => {
  
    await page.goto('https://demowebshop.tricentis.com/');
    const products:Locator= page.locator(".product-title");
    const count= await products.count();
    // for(let i=0; i<=count;i++){
    // //console.log( await products.nth(i).innerText()); // text contains in proersize 
    // console.log( await products.nth(i).textContent()); //Text contains but have to do trim after 

    // }

    // see the all texts value 

    // const productlist:string[]=await products.allInnerTexts();
    // console.log(productlist);

    const productlist:string[]=await products.allTextContents();
    console.log(productlist);
    const newlist:string[]=productlist.map(text=>text.trim());
    console.log(newlist);
})

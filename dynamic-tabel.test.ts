import { test, expect, Locator } from "playwright/test";

test('Handel the values from dynamic tabel ', async({page}) => {
    await page.goto("https://practice.expandtesting.com/dynamic-table");

    //Get all the tabel collums and rows
   const tabel:Locator=page.locator("table.table tbody");
   await expect(tabel).toBeVisible();

   //get the all the rows and values

  const rows:Locator[] =await tabel.locator("tr").all();
  console.log(rows);
 expect(rows).toHaveLength(4);


 // get the chrome value and cpu value from tabel
let cpuload="";
 for(const row of rows){
    const processname:string = await row.locator("td").nth(0).innerText();
    if(processname==="Chrome"){
            const cpuload= await row.locator("td",{hasText:'%'}).innerText();
            console.log("The Cpu load is",cpuload);//6.6,8.5,
            break;

    }
 }
const yellowbox:string=await page.locator("#chrome-cpu").innerText();
console.log("The Yellow box showing :",yellowbox);
if(yellowbox.includes(cpuload)){
console.log('The cpuload and Yellowbox data is matched')
}
else{
    console.log("The cpuload and Yellowbox data is mismatch")
}
await expect(yellowbox).toContain(cpuload);



await page.waitForTimeout(5000);
  
});

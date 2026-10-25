
import { test, expect,Locator } from "@playwright/test";

test("Select the cheapest flight and proceed", async ({ page }) => {
  await page.goto("https://blazedemo.com");

  // Select departure and destination
  await page.locator('select[name="fromPort"]').selectOption("Paris");
  await page.locator('select[name="toPort"]').selectOption("Buenos Aires");
  await page.getByRole("button", { name: "Find Flights" }).click();
await page.waitForTimeout(5000)
  // Locate all flight rows
  const rows = page.locator("table.table tbody tr");
  const rowCount = await rows.count();

  // Store all flight prices in one variable
  const flightPrices: number[] = [];

  // Store price and corresponding row together
  const flights: { price: number; rowIndex: number }[] = [];

  for (let i = 0; i < rowCount; i++) {
    const row = rows.nth(i);

    // Price is in the last column
    const priceText = await row.locator("td").last().innerText();

    // Convert "$200.98" into 200.98
    const price = Number(priceText.replace(/[^0-9.]/g, ""));

    flightPrices.push(price);
    flights.push({ price, rowIndex: i });
  }

  console.log("All flight prices:", flightPrices);

  // Find the lowest price
  const lowestPrice = Math.min(...flightPrices);
  console.log("Lowest flight price:", lowestPrice);

  // Find the row corresponding to the lowest price
  const cheapestFlight = flights.find(
    (flight) => flight.price === lowestPrice
  );

  if (!cheapestFlight) {
    throw new Error("No flight price was found.");
  }

  // Click Choose This Flight in the cheapest flight's row
  await rows
    .nth(cheapestFlight.rowIndex)
    .locator('input[type="submit"]')
    .click();

  // The next page contains the flight booking form.

  await page.waitForTimeout(6000);
  
    const name:Locator= page.locator('#inputName');
    await name.fill('TEST USER');
    const address:Locator=page.locator("//input[@name='address']");
    await address.fill('ABC ROAD DELHI')
    const state:Locator=page.locator('#state');
    await state.fill('DELHI');
    await page.locator("//select[@id='cardType']").selectOption('American Express');
    const cardno:Locator=page.locator("//input[@id='creditCardNumber']");
    await cardno.fill('411111111111');
    await page.locator('#rememberMe').click();


  // On the standard BlazeDemo site, this button is named
  // "Purchase Flight", rather than "Proceed".
  await page.getByRole("button", { name: /Purchase Flight|Proceed/i }).click();
  const confrimtxt=  page.locator('.container.hero-unit h1');
  await expect(confrimtxt).toHaveText('Thank you for your purchase today!')
  await expect(page).toHaveURL('https://blazedemo.com/confirmation.php');
  console.log("Thank you for your purchase today!");
});

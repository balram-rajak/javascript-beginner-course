const { log } = require("console");
const puppeteer = require("puppeteer");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  // Navigate to a website
  await page.goto("https://prepaid.nsdlbank.co.in/master/fetchUserDetails.jsp");

  // Extract data or perform actions
  const pageTitle = await page.title();
  console.log(`Page Title: ${pageTitle}`);
  //   const element = await page.$("#cardNo");
  //   await element.type("4413610061961214")
  // Select the input and span elements by their CSS selectors.
  const cardNo = "#cardNo";
  const spanSelector = "#select";

  // Set a value in the input field.
  await page.type(cardNo, "4413610061961289");

  // Read the text content of the span element.
  const spanText = await page.$eval(spanSelector, (span) => span.textContent);
  // console.log(await page.$eval(cardNo, (span) => span.textContent));
  const month = await page.$("#select");
  await month.type("02");
  const year = await page.$("#select2");
  await year.type("2025");
  const cvv = await page.$("#txtSecureCode");
  await cvv.type("396");
  const imageHandle = await page.$(`#captchaimg`);
  await imageHandle.screenshot({ path: "capturedImage.png" });

  rl.question("Enter captcha: ", async (capVal) => {
    try {
      const captcha = await page.$(`#captchaKey`);
      await captcha.type(capVal);
      const buttonSelector = "#submitButton"; // Replace 'buttonId' with the actual id attribute value.
      await page.waitForSelector(buttonSelector);

      // Click the button by its id.
      await page.click(buttonSelector);
      //   await page.keyboard.press("Enter");
      await page.waitForTimeout(10000);
      const TOKEN = await page.$(`#TOKEN`);
      console.log(
        await TOKEN.evaluate((element) => {
          return element.value;
        })
      );

      const contentSelector = ".col-md-5"; // Replace 'newContentId' with the actual id attribute value.
      await page.waitForSelector(contentSelector);
      // Frame.waitForSelector(contentSelector);
      // Get the text content of the updated element.
      const updatedContent = await page.$eval(contentSelector, (element) => {
        return element.innerText;
      });
      console.log(updatedContent);
      const name = await page.$$(".col-md-5");
      console.log(name);
      for (const element of name) {
        // Example: Get the text content of each element
        const text = await element.evaluate((element) => {
          return element.innerText;
        });
        console.log("Element Text:", text);
      }
    } catch (err) {
      console.error(`Error navigating to URL: ${err}`);
    }
    rl.close();
    await browser.close();
  });
})();

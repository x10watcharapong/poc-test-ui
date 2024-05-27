const Login = require("../pageObjects/login.page");

describe("Proceed to login", () => {
  it("Perform login fail", async () => {
    await Login.clickLoginBtn();
    // await Login.clickMsEditText();
    await Login.fillEmailUser("61118@UATTMB.tmbbank.com");
    await Login.clickMsNextBtn();
    // await Login.clickWebkitPasswordText();
    await Login.fillPassword("Tmb@12345");
    await Login.clickWebkitSignInBtn();
    await expect(Login.unauthorizedTextPopUp).toBeDisplayed();
  });
});

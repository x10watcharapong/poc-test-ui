export class Login {
  get loginBtn() {
    return $('//android.widget.Button[@content-desc="เข้าสู่ระบบ"]');
  }

  get msEditText() {
    return $("//android.widget.EditText");
  }

  get msNextBtn() {
    return $('//android.widget.Button[@text="Next"]');
  }

  get webkitPasswordText() {
    return $(
      '//android.webkit.WebView[@text="Sign In"]/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText'
    );
  }

  get webkitSignInBtn() {
    return $('//android.widget.Button[@text="Sign in"]');
  }

  get unauthorizedTextPopUp() {
    return $(
      "ไม่สามารถดำเนินการได้ ทีทีบี ขออภัยในความไม่สะดวก โปรดลองใหม่อีกครั้งภายหลัง"
    );
  }

  async clickLoginBtn() {
    await this.loginBtn.click();
  }

  async fillEmailUser(emailUser) {
    await this.msEditText.click();
    await this.msEditText.setValue(emailUser);
  }

  async clickMsNextBtn() {
    await this.msNextBtn.click();
  }

  async clickWebkitPasswordText() {
    await this.webkitPasswordText.click();
  }

  async fillPassword(password) {
    await this.webkitPasswordText.setValue(password);
  }

  async clickWebkitSignInBtn() {
    await this.webkitSignInBtn.click();
  }
}

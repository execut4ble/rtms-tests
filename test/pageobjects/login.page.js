import common from "./common";
import Page from "./page";

class LoginPage extends Page {
  get inputUsername() {
    return $("#exampleEmailInput");
  }
  get inputPassword() {
    return $("#password");
  }
  get btnSubmit() {
    return $('input[type="submit"]');
  }

  async login(username, password) {
    await (await this.inputUsername).setValue(username);
    await (await this.inputPassword).setValue(password);
    await (await common.btnSubmit).click();
  }

  open() {
    return super.open();
  }
}

export default new LoginPage();

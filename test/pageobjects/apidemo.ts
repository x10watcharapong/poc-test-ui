import { $ } from "@wdio/globals";
export default class FastApiPage {
  static clickAccessAbility() {
    throw new Error("Method not implemented.");
  }
  // static clickAccessAbility() {
  //   throw new Error("Method not implemented.");
  // }
  get OKbtn() {
    return $(`//android.widget.TextView[@content-desc="OS"]`);
  }
  async clickAccessAbility() {
    await this.OKbtn.click();
  }
}

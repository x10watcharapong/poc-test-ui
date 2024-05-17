import { $ } from "@wdio/globals";
export default class FastApiPage {
  static clickAccessAbility() {
    throw new Error("Method not implemented.");
  }
  get animationButton() {
    return $('//android.widget.TextView[@content-desc="Animation"]');
  }
  async clickAccessAbility() {
    await this.animationButton.click();
  }
}

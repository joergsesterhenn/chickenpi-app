import { browser, element, by } from "protractor";

export class ChickenpiAppPage {
  navigateTo() {
    return browser.get("/");
  }

  getParagraphText() {
    return element(by.id("title")).getText();
  }
}

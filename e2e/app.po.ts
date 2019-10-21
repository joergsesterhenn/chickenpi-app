import { browser, element, by } from 'protractor';

export class ChickenpiAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    const foo = element(by.id('title'));
    return foo.getText();
  }
}

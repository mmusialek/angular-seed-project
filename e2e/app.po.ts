import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    const selectedElem = element(by.css('vth-root div div h1'));
    return selectedElem.getText();
  }
}

import { ChickenpiAppPage } from './app.po';

describe('chickenpi-app', () => {
  let page: ChickenpiAppPage;

  beforeEach(() => {
    page = new ChickenpiAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Chickenpi App'))
      .then(done, done.fail);
  });
});

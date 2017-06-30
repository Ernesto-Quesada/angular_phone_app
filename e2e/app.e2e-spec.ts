import { PhoneangularPage } from './app.po';

describe('phoneangular App', () => {
  let page: PhoneangularPage;

  beforeEach(() => {
    page = new PhoneangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

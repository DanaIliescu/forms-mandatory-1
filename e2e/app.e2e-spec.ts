import { FormsMandatoryPage } from './app.po';

describe('forms-mandatory App', () => {
  let page: FormsMandatoryPage;

  beforeEach(() => {
    page = new FormsMandatoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

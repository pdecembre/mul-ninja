import { MulNinjaPage } from './app.po';

describe('mul-ninja App', () => {
  let page: MulNinjaPage;

  beforeEach(() => {
    page = new MulNinjaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

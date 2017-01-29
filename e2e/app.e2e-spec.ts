import { TechPOCPage } from './app.po';

describe('tech-poc App', function() {
  let page: TechPOCPage;

  beforeEach(() => {
    page = new TechPOCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

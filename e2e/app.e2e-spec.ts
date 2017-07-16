import { HeroesPage } from './app.po';

describe('heroes App', () => {
  let page: HeroesPage;

  beforeEach(() => {
    page = new HeroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

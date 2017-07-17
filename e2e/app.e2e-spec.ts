import { PlayingCardAppPage } from './app.po';

describe('playing-card-app App', () => {
  let page: PlayingCardAppPage;

  beforeEach(() => {
    page = new PlayingCardAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

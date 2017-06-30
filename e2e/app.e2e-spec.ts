import { Ng2TweetboxPage } from './app.po';

describe('ng2-tweetbox App', () => {
  let page: Ng2TweetboxPage;

  beforeEach(() => {
    page = new Ng2TweetboxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

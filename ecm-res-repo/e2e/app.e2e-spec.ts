import { EcmResRepoPage } from './app.po';

describe('ecm-res-repo App', function() {
  let page: EcmResRepoPage;

  beforeEach(() => {
    page = new EcmResRepoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

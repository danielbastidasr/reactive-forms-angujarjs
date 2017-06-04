import { ReactiveFormsExamplePage } from './app.po';

describe('reactive-forms-example App', () => {
  let page: ReactiveFormsExamplePage;

  beforeEach(() => {
    page = new ReactiveFormsExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

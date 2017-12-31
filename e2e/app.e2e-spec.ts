import { Session17Assignment2Page } from './app.po';

describe('session17-assignment2 App', () => {
  let page: Session17Assignment2Page;

  beforeEach(() => {
    page = new Session17Assignment2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

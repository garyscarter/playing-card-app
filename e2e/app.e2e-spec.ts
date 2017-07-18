import { PlayingCardAppPage } from './app.po';

describe('playing-card-app', () => {
  let page: PlayingCardAppPage;

  beforeEach(() => {

    page = new PlayingCardAppPage();

  });

  /*
  * Onload tests
  */

  it('should display the card deck on load', () => {

    page.navigateTo();

    expect(page.getCardDeck().isPresent()).toBeTruthy();

  });

  it('should display 52 cards on load', () => {

    page.navigateTo();

    expect(page.countCardsInCardDeck()).toEqual(52);

  });

  it('should display the shuffle button on in the card deck on load', () => {

    page.navigateTo();

    expect(page.getCardDeckShuffleButton().isPresent()).toBeTruthy();

  });

  /*
  * Draw Tests
  */
  it('should display the drawn deck when cards are drawn', () => {

    page.navigateTo();

    page.drawCards(2);

    expect(page.getDrawnDeck().isPresent()).toBeTruthy();

  });

  it('should display the shuffle button on in the drawn deck when cards are drawn', () => {

    page.navigateTo();

    expect(page.getCardDeckShuffleButton().isPresent()).toBeTruthy();

  });

  it('should display the 5 cards in the drawn card deck when 5 are drawn', () => {

    page.navigateTo();

    page.drawCards(5);

    expect(page.countCardsInDrawnDeck()).toEqual(5);

  });

  it('should display the 47 cards in the card deck when 5 are drawn', () => {

    page.navigateTo();

    page.drawCards(5);

    expect(page.countCardsInCardDeck()).toEqual(47);

  });


  /*
  * Reset Tests
  */
  it('should display the 52 cards in the card deck when reset is clicked', () => {

    page.navigateTo();

    page.drawCards(5);

    page.resetCards();

    expect(page.countCardsInCardDeck()).toEqual(52);

  });

  it('should not display the drawn card deck when reset is clicked', () => {

    page.navigateTo();

    page.drawCards(5);

    page.resetCards();

    expect(page.getDrawnDeck().isPresent()).toBeFalsy();

  });

});

import { browser, by, element } from 'protractor';

export class PlayingCardAppPage {

  navigateTo() {

    return browser.get('/');

  }

  getCardDeck() {

    return element(by.id('card-deck'));

  }

  getCardDeckShuffleButton() {

    return element(by.css('#card-deck .shuffle-cards'));

  }

  getDrawnDeck() {

    return element(by.id('drawn-deck'));

  }

  getDrawnDeckShuffleButton() {

    return element(by.css('#drawn-deck .shuffle-cards'));

  }

  countCardsInCardDeck() {

    return element.all(by.css('#card-deck .card')).count();

  }

  countCardsInDrawnDeck() {

    return element.all(by.css('#drawn-deck .card')).count();

  }

  clickDrawButton() {

    element(by.id('draw-cards')).click();

  }

  drawCards(noCards: number) {

    const drawNumber = element(by.id('draw-cards-no'));

    drawNumber.clear();

    drawNumber.sendKeys(noCards);

    this.clickDrawButton();

  }

  resetCards() {

    element(by.id('reset-cards')).click();

  }

}

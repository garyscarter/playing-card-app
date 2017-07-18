import { Component } from '@angular/core';

import { ISuit } from '../interface/ISuit';
import { ICard } from '../interface/ICard';

import { Suit } from '../implementation/Suit';
import { Card } from '../implementation/Card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  /*
  * Card suits to use
  */
  suits: Array<ISuit> = [ new Suit('Clubs', 'i-clubs', 'black'),
                          new Suit('Spades', 'i-spades', 'black'),
                          new Suit('Hearts', 'i-hearts', 'red'),
                          new Suit('Diamonds', 'i-diamonds', 'red') ];

  /*
  * Number of cards per suit
  */
  cardsPerSuit = 13;

  /*
  * Generated deck of cards
  */
  cards: Array<ICard> = new Array<ICard>();

  /*
  * Cards drawn from the deck
  */
  drawnCards: Array<ICard> = new Array<ICard>();

  /*
  * Title displayed for the full deck
  */
  deckTitle = 'Card Deck';

  /*
  * Title displayed for the drawn deck
  */
  drawnDeckTitle = 'Drawn Cards';

  constructor() {

    this.generateCards();

  }

  /*
  * Generates a pack of cards using suits & cardsPerSuit
  */
  private generateCards(): void {

    for (const suit of this.suits) {

      for (let i = 2; i <= this.cardsPerSuit + 1; i += 1) {

        this.cards.push(new Card(suit, i));

      }

    }

  }

  /*
  * Draws a given number of cards randomly from the deck
  */
  drawCards(count: number): void {

    if (count <= this.cards.length) {

      for (let i = 0; i < count; i += 1) {

        const j = Math.floor(Math.random() * this.cards.length);

        this.drawnCards.push(this.cards.splice(j, 1)[0]);

      }

    }

  }

  /*
  * Reset the cards back to default
  */
  reset(): void {

    this.cards = new Array<ICard>();

    this.drawnCards = new Array<ICard>();

    this.generateCards();

  }
}

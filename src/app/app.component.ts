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
  suits: Array<ISuit> = [new Suit('Clubs'),
  new Suit('Spades'),
  new Suit('Hearts'),
  new Suit('Diamonds')];

  /*
  * Number of cards per suit
  */
  cardsPerSuit: number = 13;

  /*
  * Generated deck of cards
  */
  cards: Array<ICard> = new Array<ICard>();

  /*
  * Cards drawn from the deck
  */
  drawnCards: Array<ICard> = new Array<ICard>();

  constructor() {

    this.generateCards();

  }
  
  /*
  * Generates a pack of cards using suits & cardsPerSuit
  */
  private generateCards(): void {

    for (let suit of this.suits) {

      for (let i = 2; i <= this.cardsPerSuit + 1; i += 1) {

        this.cards.push(new Card(suit, i))

      }

    }

  }

  /*
  * Draws a given number of cards randomly from the deck
  */
  drawCards(count: number): void {

    if (count <= this.cards.length) {

      for (let i = 0; i < count; i += 1) {

        let j = Math.floor(Math.random() * this.cards.length);

        this.drawnCards.push(this.cards.splice(j, 1)[0]);

      }

    }

  }

}

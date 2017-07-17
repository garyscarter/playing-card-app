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
  suits: Array<ISuit> = [ new Suit('Clubs'),
                          new Suit('Spades'),
                          new Suit('Hearts'),
                          new Suit('Diamonds') ];

  /*
  * Number of cards per suit
  */
  cardsPerSuit: number = 13;

  /*
  * Generated deck of cards
  */
  cards: Array<ICard> = new Array<ICard>();

  
  constructor() {

    this.generateCards();

  }

  /*
  * Shuffles any given set of cards
  */
  shuffleCards(cards: Array<ICard>): void {

    this.shuffle(cards);

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
  * Shuffles any given array
  */
  private shuffle(arr: Array<any>): void {

    for (let i = arr.length; i > 0; i--) {

      let j = Math.floor(Math.random() * i);

      [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];

    }

  }

}

import { Component } from '@angular/core';

import { ISuit } from '../interface/ISuit';
import { ICard } from '../interface/ICard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent {

  suits: Array<ISuit> = new Array<ISuit>();

  cardsPerSuit: number = 13;

  cards: Array<ICard> = new Array<ICard>();

  shuffleCards(cards: Array<ICard>): void { }

}

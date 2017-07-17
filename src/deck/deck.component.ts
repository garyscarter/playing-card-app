import { Component, Input } from '@angular/core';

import { ICard } from '../interface/ICard';

@Component({
    selector: 'card-deck',
    templateUrl: './deck.component.html',
    styleUrls: ['./deck.component.less']
})

export class DeckComponent {

    /*
    * Title to display for the deck
    */
    @Input() title: string;

    /*
    * Cards to display in the deck
    */
    @Input() cards: Array<ICard>;

    /*
    * Shuffles any given array
    */
    private shuffle(arr: Array<any>): void {

        for (let i = arr.length; i > 0; i--) {

            let j = Math.floor(Math.random() * i);

            [arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];

        }

    }

    /*
    * Shuffles any given set of cards
    */
    shuffleCards(cards: Array<ICard>): void {

        this.shuffle(cards);

    }
}

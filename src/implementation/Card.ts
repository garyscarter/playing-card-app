import { ICard } from '../interface/ICard';

import { ISuit } from '../interface/ISuit';

export class Card implements ICard {

    private static specialCards: any = {
        11: 'J',
        12: 'K',
        13: 'Q',
        14: 'A'
    };

    constructor(suit: ISuit, number: number) {

        this.suit = suit;

        if (Card.specialCards.hasOwnProperty(number)) {

            this.number = Card.specialCards[number];

        } else {

            this.number = number.toString();

        }

    }

    suit: ISuit;

    number: string;

}
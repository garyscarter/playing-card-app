import { TestBed, async } from '@angular/core/testing';

import { DeckComponent } from './deck.component';

import { Card } from '../implementation/Card';
import { Suit } from '../implementation/Suit';

describe('DeckComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DeckComponent
      ],
    }).compileComponents();
  }));


  /* 
  *  Test Initialisation
  */

  it('should create the deck component', async(() => {

    const fixture = TestBed.createComponent(DeckComponent);

    const deck = fixture.debugElement.componentInstance;

    expect(deck).toBeTruthy();

  }));

  /* 
  * Test Shuffle 
  */

  function getTestCardInput(): Array<Card> {

    return [ new Card(new Suit('Test', 'i-clubs', 'red'), 2),
             new Card(new Suit('Test', 'i-spades', 'black'), 3),
             new Card(new Suit('Test1', 'i-hearts', 'red'), 2),
             new Card(new Suit('Test1', 'i-diamonds', 'black'), 4),
             new Card(new Suit('Test2', 'i-clubs', 'red'), 6),
             new Card(new Suit('Test2', 'i-hearts', 'black'), 7),
             new Card(new Suit('Test3', 'i-spades', 'red'), 9),
             new Card(new Suit('Test3', 'i-clubs', 'red'), 11) ]
  }

  function getTestNumberArrayInput(): Array<number> {

    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  }

  function getTestStringArrayInput(): Array<string> {

    return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  }

  it('should shuffle a given array of numbers', async(() => {

    const fixture = TestBed.createComponent(DeckComponent);

    const deck = fixture.debugElement.componentInstance;

    let array = getTestNumberArrayInput();

    let initialArray = getTestNumberArrayInput();

    deck.shuffle(array);

    expect(array).not.toEqual(initialArray);

  }));

  it('should shuffle a given array of strings', async(() => {

    const fixture = TestBed.createComponent(DeckComponent);

    const deck = fixture.debugElement.componentInstance;

    let array = getTestStringArrayInput();

    let initialArray = getTestStringArrayInput();

    deck.shuffle(array);

    expect(array).not.toEqual(initialArray);

  }));

  it('should shuffle a given set of cards differently once', async(() => {

    const fixture = TestBed.createComponent(DeckComponent);

    const deck = fixture.debugElement.componentInstance;

    let cards = getTestCardInput();

    let initialCards = getTestCardInput();

    deck.shuffleCards(cards);

    expect(cards).not.toEqual(initialCards);

  }));

  it('should shuffle a given set of cards differently three times', async(() => {

    const fixture = TestBed.createComponent(DeckComponent);

    const deck = fixture.debugElement.componentInstance;

    let cards = getTestCardInput();

    let cardsBeforeShuffle = cards.map(x => Object.assign({}, x));

    deck.shuffleCards(cards);

    let cardsAfterShuffleOne = cards.map(x => Object.assign({}, x));

    deck.shuffleCards(cards);

    let cardsAfterShuffleTwo = cards.map(x => Object.assign({}, x));

    deck.shuffleCards(cards);

    let cardsAfterShuffleThree = cards.map(x => Object.assign({}, x));

    expect(cardsBeforeShuffle).not.toEqual(cardsAfterShuffleOne);

    expect(cardsAfterShuffleOne).not.toEqual(cardsAfterShuffleTwo);

    expect(cardsAfterShuffleTwo).not.toEqual(cardsAfterShuffleThree);

  }));

});

import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { Card } from '../implementation/Card';
import { Suit } from '../implementation/Suit';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));


  /* 
  *  Test Initialisation
  */

  it('should create the app', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    expect(app).toBeTruthy();

  }));

  it('should initialise 52 playing cards', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    expect(app.cards.length).toEqual(52);

  }));


  it('should output suits in order: Clubs, Spades, Hearts, Diamonds', async(() => {

    let expectedSuits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    let generatedSuits = [];

    app.cards.forEach(x => {

      if (generatedSuits.indexOf(x.suit.name) === -1) {

        generatedSuits.push(x.suit.name);

      }

    });

    expect(expectedSuits).toEqual(generatedSuits);

  }));


  /* 
  * Test Shuffle 
  */

  function getTestCardInput(): Array<Card> {

    return [new Card(new Suit('Test'), 2),
    new Card(new Suit('Test'), 3),
    new Card(new Suit('Test1'), 2),
    new Card(new Suit('Test1'), 4),
    new Card(new Suit('Test2'), 6),
    new Card(new Suit('Test2'), 7),
    new Card(new Suit('Test3'), 9),
    new Card(new Suit('Test3'), 11)]
  }

  function getTestNumberArrayInput(): Array<number> {

    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  }

  function getTestStringArrayInput(): Array<string> {

    return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  }

  it('should shuffle a given array of numbers', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    let array = getTestNumberArrayInput();

    let initialArray = getTestNumberArrayInput();

    app.shuffle(array);

    expect(array).not.toEqual(initialArray);

  }));

  it('should shuffle a given array of strings', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    let array = getTestStringArrayInput();

    let initialArray = getTestStringArrayInput();

    app.shuffle(array);

    expect(array).not.toEqual(initialArray);

  }));

  it('should shuffle a given set of cards differently once', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    let cards = getTestCardInput();

    let initialCards = getTestCardInput();

    app.shuffleCards(cards);

    expect(cards).not.toEqual(initialCards);

  }));

  it('should shuffle a given set of cards differently three times', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    let cards = getTestCardInput();

    let cardsBeforeShuffle = cards.map(x => Object.assign({}, x));

    app.shuffleCards(cards);

    let cardsAfterShuffleOne = cards.map(x => Object.assign({}, x));

    app.shuffleCards(cards);

    let cardsAfterShuffleTwo = cards.map(x => Object.assign({}, x));

    app.shuffleCards(cards);

    let cardsAfterShuffleThree = cards.map(x => Object.assign({}, x));

    expect(cardsBeforeShuffle).not.toEqual(cardsAfterShuffleOne);

    expect(cardsAfterShuffleOne).not.toEqual(cardsAfterShuffleTwo);

    expect(cardsAfterShuffleTwo).not.toEqual(cardsAfterShuffleThree);

  }));

  /* 
  * Test Normal Draw Usage
  */

  it('should add 5 cards to the drawn cards when 5 cards are drawn', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    app.drawCards(5);

    expect(app.drawnCards.length).toEqual(5);

  }));

  it('should remove 5 cards from the deck when 5 cards are drawn', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    app.drawCards(5);

    expect(app.cards.length).toEqual(52 - 5);

  }));


  /*
  * Test Draw Limts
  */

  it('should add 0 cards to the drawn cards when 55 cards are drawn', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    app.drawCards(55);

    expect(app.drawnCards.length).toEqual(0);

  }));

  it('should remove 0 cards from the deck when 55 cards are drawn', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    app.drawCards(55);

    expect(app.drawnCards.length).toEqual(0);

  }));

  it('should add 0 cards to the drawn cards when -5 cards are drawn', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    app.drawCards(-5);

    expect(app.drawnCards.length).toEqual(0);

  }));

  it('should remove 0 cards from the deck when -5 cards are drawn', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    app.drawCards(-5);

    expect(app.drawnCards.length).toEqual(0);

  }));


  /*
  * Test Draw Boundries 
  */

  it('should add 0 cards to the drawn cards when 0 cards are drawn', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    app.drawCards(0);

    expect(app.drawnCards.length).toEqual(0);

  }));

  it('should remove 0 cards from the deck when 0 cards are drawn', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    app.drawCards(0);

    expect(app.drawnCards.length).toEqual(0);

  }));

  it('should add 52 cards to the drawn cards when 52 cards are drawn', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    app.drawCards(52);

    expect(app.drawnCards.length).toEqual(52);

  }));

  it('should remove 52 cards from the deck when 52 cards are drawn', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    app.drawCards(52);

    expect(app.drawnCards.length).toEqual(52);

  }));

});

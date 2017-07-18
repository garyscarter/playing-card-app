import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { DeckComponent } from '../deck/deck.component';

import { Card } from '../implementation/Card';
import { Suit } from '../implementation/Suit';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DeckComponent
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

  it('should initialise suits in order: Clubs, Spades, Hearts, Diamonds', async(() => {

    const expectedSuits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    const generatedSuits = [];

    app.cards.forEach(x => {

      if (generatedSuits.indexOf(x.suit.name) === -1) {

        generatedSuits.push(x.suit.name);

      }

    });

    expect(expectedSuits).toEqual(generatedSuits);

  }));

  it('should initialise cards in order: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A', async(() => {

    const expectedSuits = ['Clubs', 'Spades', 'Hearts', 'Diamonds'];

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    const expected = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const clubs = app.cards.filter(x => {

      return x.suit.name === 'Clubs';

    }).map(x => {

      return x.number;

    });

    expect(clubs).toEqual(expected);

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


  /*
  * Test Reset
  */
  it('should set the deck back to 52 cards when reset', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    app.reset();

    expect(app.cards.length).toEqual(52);

  }));

  it('should remove all cards from the drawn cards when reset', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    app.reset();

    expect(app.drawnCards.length).toEqual(0);

  }));

});

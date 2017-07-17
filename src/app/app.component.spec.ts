import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

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


  /* 
  * Test Shuffle 
  */
  it('should shuffle cards once', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    let cardsBeforeShuffle = app.cards.map(x => Object.assign({}, x));

    app.shuffleCards(app.cards);

    let cardsAfterShuffle = app.cards.map(x => Object.assign({}, x));

    expect(cardsBeforeShuffle).not.toEqual(cardsAfterShuffle);

  }));

  it('should shuffle cards differently three times', async(() => {

    const fixture = TestBed.createComponent(AppComponent);

    const app = fixture.debugElement.componentInstance;

    let cardsBeforeShuffle = app.cards.map(x => Object.assign({}, x));

    app.shuffleCards(app.cards);

    let cardsAfterShuffleOne = app.cards.map(x => Object.assign({}, x));

    app.shuffleCards(app.cards);

    let cardsAfterShuffleTwo = app.cards.map(x => Object.assign({}, x));

    app.shuffleCards(app.cards);

    let cardsAfterShuffleThree = app.cards.map(x => Object.assign({}, x));

    expect(cardsBeforeShuffle).not.toEqual(cardsAfterShuffleOne);

    expect(cardsAfterShuffleOne).not.toEqual(cardsAfterShuffleTwo);

    expect(cardsAfterShuffleTwo).not.toEqual(cardsAfterShuffleThree);

  }));

});

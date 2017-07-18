# Playing Card Application

## Running, Building & Testing

### Prerequisite

Node.js & npm are required to build & test this project, if you do not have them installed they can be downloaded [here](https://nodejs.org/en/).

Run `npm install` to install all project dependencies before running, buidling or testing. 

### Run Production Code
Run `npm run start-prod` for a server running a production build. This will open the application in your browser automatically.
 
### Run Development Code
Run `npm run start-dev` for a dev server. 
This will open the application in your browser automatically. 
Any changes made to code will be be automatically updated.
 
### Build
 
Run `npm run build` to build the project in production. 
This will build the project to the `dist/` directory. 
 
### Run Tests
 
Run `npm run unit-test` to execute the karma unit tests.
 
Run `npm run e2e-test` to execute the Protractor end-to-end tests.

### Run Lint Analysis
Run `npm run lint` to run lint analysis.

## Application User Guide

### Introduction

The application loads displaying a full deck of cards, sorted by suit: Clubs, Spades, Hearts, Diamonds; then by value: Ace is high. 

### Drawing Cards

Any number of cards can be randomly drawn from the deck by setting a number and clicking the **Draw Cards** button. The drawn cards will be displayed in a new deck below the button.

### Shuffling Cards

Either deck can be shuffled at any time by selecting the **Shuffle** button. This randomly suffles the selected deck.

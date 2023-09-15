const cardValues = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const cardSuits = ["Hearts", "Diamonds", "Clubs", "Spades"];

let cardDeck = [];

function createDeck() {
    for (const suit of cardSuits) {
        for (const value of cardValues) {
            cardDeck.push({ suit, value });
        }
    }
}

function shuffleDeck() {
  for (let i = cardDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardDeck[i], cardDeck[j]] = [cardDeck[j], cardDeck[i]];
  }
}
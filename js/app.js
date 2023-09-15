
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

createDeck();
shuffleDeck();

let player1Card = null;
let player2Card = null;

function drawCard() {
    if (cardDeck.length === 0) {
        alert("No more cards in the deck!");
        return;
    }

    player1Card = cardDeck.pop();
    player2Card = cardDeck.pop();

    document.getElementById('card1').textContent = `${player1Card.value} of ${player1Card.suit}`;
    document.getElementById('card2').textContent = `${player2Card.value} of ${player2Card.suit}`;

    determineWinner();
}

function determineWinner() {
    const resultElement = document.getElementById('result');
    if (player1Card.value > player2Card.value) {
        resultElement.textContent = 'Player 1 wins!';
    } else if (player2Card.value > player1Card.value) {
        resultElement.textContent = 'Player 2 wins!';
    } else {
        resultElement.textContent = 'It\'s a tie!';
    }
}

let player1Score = 0;
let player2Score = 0;

function updateScoreboard() {
    document.getElementById('player1Score').textContent = `Player 1: ${player1Score}`;
    document.getElementById('player2Score').textContent = `Player 2: ${player2Score}`;
}

function determineWinner() {
    const resultElement = document.getElementById('result');
    if (player1Card.value > player2Card.value) {
        resultElement.textContent = 'Player 1 wins this round!';
        player1Score++;
    } else if (player2Card.value > player1Card.value) {
        resultElement.textContent = 'Player 2 wins this round!';
        player2Score++;
    } else {
        resultElement.textContent = 'It\'s a tie for this round!';
    }


    updateScoreboard();

    if (player1Score + player2Score === 26) {
        if (player1Score > player2Score) {
            resultElement.textContent = 'Player 1 wins the game!';
        } else if (player2Score > player1Score) {
            resultElement.textContent = 'Player 2 wins the game!';
        } else {
            resultElement.textContent = 'It\'s a tie game!';
        }
    }
}

function newGame() {
  cardDeck = [];
  createDeck();
  shuffleDeck();
  player1Card = null;
  player2Card = null;

  player1Score = 0;
  player2Score = 0;

  document.getElementById('card1').textContent = '?';
  document.getElementById('card2').textContent = '?';

  document.getElementById('result').textContent = '';

  updateScoreboard();
}

var cards = ['queen', 'queen', 'king', 'king'];
//Array of cards - one string for each card.

var cardsInPlay = [];
//Will hold cards in play.

const cardOne = cards[0];
cardsInPlay.push('cardOne');

console.log('User flipped queen');
//Displays card that user flipped.

const cardTwo = cards[2];
cardsInPlay.push('cardTwo');
//Adds cardTwo to end of cards in play array.

console.log('User flipped king');
//Displays second card that user flipped.

if (cardsInPlay.length === 2 && cardsInPlay[0]===cardsInPlay[2]) {
	alert('You found a match!'); 
} else {
	alert('Sorry, try again.');
}
//Checks to see if the length of the cardsInPlay array is 2


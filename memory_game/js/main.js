
var cards = ['queen', 'queen', 'king', 'king'];
//Array of cards - one string for each card.

var cardsInPlay = [];
//Will hold cards in play.

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[2]) {
  	console.log("You found a match!");
} else {
  	console.log("Sorry, try again.");
}
};

function flipCard(cardId){
	console.log('User flipped ' + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
			checkForMatch();
	}
}

flipCard(0);
flipCard(2);

/*const cardOne = cards[0];
cardsInPlay.push('cardOne');

console.log('User flipped queen');
//Displays card that user flipped.

const cardTwo = cards[2];
cardsInPlay.push('cardTwo');
//Adds cardTwo to end of cards in play array.
console.log('User flipped king');
//Displays second card that user flipped.

checkForMatch deleted: 
	if (cardsInPlay.length === 2 && cardsInPlay[0]===cardsInPlay[2]) {
	alert('You found a match!'); 
} else {
	alert('Sorry, try again.');
}
*/
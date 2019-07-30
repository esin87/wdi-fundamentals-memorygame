
var cards = [
{
	rank: 'queen',
	suite: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suite: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king', 
	suite: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king', 
	suite: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];
//Create four objects, one for each card

var cardsInPlay = [];
//Will hold cards in play.

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[2]) {
  	alert('You found a match!');
} else {
  	alert('Sorry, try again.');
}
};

function flipCard(cardId){
	console.log('User flipped ' + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suite);
	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2) {
			checkForMatch();
	};
}

flipCard(0);
flipCard(2);


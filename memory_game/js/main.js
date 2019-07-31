console.log("Up and running!");

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


function flipCard(){
	var cardId = this.getAttribute('data-id');
	console.log('User flipped ' + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
			checkForMatch();
	};
};

console.log(cardsInPlay);

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  	alert('You found a match!');
} else {
  	alert('Sorry, try again.');
}
};

//not sure if the below code is correct. Directions: "For each card, use createElement to create an img element and store it in a variable cardElement"
function createBoard() {
		const cardTable = document.getElementById('game-board');
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		cardTable.appendChild(cardElement);
	}
};



createBoard();


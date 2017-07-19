var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var flipCard = function (cardId) {
    cardsInPlay.push(cards[cardId]);
    console.log("User flipped " + cards[cardId]);

    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You found a match!");
        } else {
            console.log("Sorry, try again.");
        }
    }
};

flipCard(0);
flipCard(2);


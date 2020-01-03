class Player {
  constructor() {
    this.hand = [];
  }

  deal(deck, numCards) {
    for (let i = 0; i < numCards; i++) {
      this.hand.push(deck.deal());
    }
  }

  display() {
    //Show the players cards in the DOM
    let imgSource = "./img/cards/";
    let domCards = document.getElementsByClassName("imgCard");
    for (let i = 0; i < this.hand.length; i++) {
      domCards[i].src = imgSource + this.hand[i].myImage;
    }
  }
}

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
    let domCards = document.getElementsByClassName("imgCard");
    for (let i = 0; i < this.hand.length; i++) {
      let v = this.hand[i].value;
      let s = this.hand[i].suit[0];
      domCards[i].src = "./img/cards/" + v + s + ".png";
    }
  }
}

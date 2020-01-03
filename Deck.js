class Deck {
  constructor() {
    this.cards = [];
  }

  create() {
    // var cards = [];
    var valueLookup = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "T",
      "J",
      "Q",
      "K"
    ];
    var suitLookup = ["C", "S", "H", "D"];
    //create a deck of 52 Cards from lookups

    for (let i = 0; i < valueLookup.length; i++) {
      for (let j = 0; j < suitLookup.length; j++) {
        this.cards.push(new Card(valueLookup[i], suitLookup[j]));
      }
    }
  }

  print() {
    for (let i = 0; i < this.cards.length; i++) {
      console.log(
        "Card " + (i + 1) + ": " + this.cards[i].value + this.cards[i].suit
      );
    }
  }

  shuffle() {
    let card1;
    let card2;
    let numShuffles = 3;
    for (let i = 0; i < numShuffles; i++) {
      for (let i = 0; i < this.cards.length; i++) {
        card1 = Math.floor(Math.random() * this.cards.length);
        card2 = Math.floor(Math.random() * this.cards.length);

        let temp = this.cards[card1];
        this.cards[card1] = this.cards[card2];
        this.cards[card2] = temp;
      }
    }
  }

  deal() {
    return this.cards.shift();
  }
}

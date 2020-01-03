class Card {
  constructor(value, suit, fullValue, fullSuit) {
    //Create a card that has a value and a suit
    this.value = value;
    this.suit = suit;
    this.fullValue = fullValue;
    this.fullSuit = fullSuit;
    this.myImage = value + suit + ".png";
  }

  printFull(v, s) {
    console.log(this.fullValue + " of " + this.fullSuit);
  }
}

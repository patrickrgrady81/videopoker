class Card {
  constructor(value, suit, fullValue, fullSuit, intValue, intSuit, val) {
    //Create a card that has a value and a suit
    // CALL THIS SOMETHING ELSE!  value = all cards added together.. ***NEED TO ADD A VALUE TO EACH CARD***!
    this.value = value;
    this.intValue = intValue;
    this.suit = suit;
    this.intSuit = null;
    this.fullValue = fullValue;
    this.fullSuit = fullSuit;
    this.myImage = value + suit + ".png";
  }

  printFull(v, s) {
    return this.fullValue + " of " + this.fullSuit
    //console.log();
  }
}

class Evaluate {
  //
  //
  // Odds:
  // https://en.wikipedia.org/wiki/Poker_probability
  // https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering
  // (which 5 cards will make the best hand.. use the lexicographic order)
  //

  constructor(hand) {
    this.hand = hand;
    this.possibleLookup = [
      "Nothing",
      "OnePair",
      "TwoPair",
      "ThreeKind",
      "Straight",
      "Flush",
      "FullHouse",
      "FourKind",
      "Royal"
    ];
    this.handValue = ["total", "kicker"];
    this.straight = false;
    this.flush = false;
  }

  run() {
    //  sort the cards by value

    //  we have to find a possible outcome from possibleLookup = total
    //  get the sum of all the suits ie clubsSum, diamondsSum, etc..
    //  possible flush
    //
    //  check royal here..
    //  if this.straight and this.flush and  SOMETHING, sorted maybe [0]="ACE"?
    //
    //
    //  Four of a kind?
    //  ------------------
    //  if first 4 cards are the same?
    //  total = card * 4 and the kicker is last (shouldn't be needed but hey why not)
    //
    //  ALSO if last 4 cards are the same?
    //  total = card * 4 and the kicker is the first card. (kicker still not needed)
    //  (kicker is for later use when we do Holdem!)
    //  (This way if 2 people have 4 of a kind, we know the higher)
    //
    //  Full House?
    //  --------------
    //  First 2 cards are the same AND the last 3 cards are the same OR
    //  First 3 cards are the same AND the last 2 cards are the same
    //  value = all cards added together.. ***NEED TO ADD A VALUE TO EACH CARD***!
    //
    //
    //
    //
    //
    //

    // and the handValue uses that to get the complete value of the hand using handValue

    console.log(this.hand);
    // BECAUSE I DON'T KNOW WHAT TO DO YET SO..
    return "I have no idea about this.. sorry you should program more!";
  }
}

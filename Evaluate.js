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
    //  sort the cards by value lowest to highest

    //  we have to find a possible outcome from possibleLookup = total
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
    //  Flush?
    //  ---------
    //  all suits are the same.
    //  get the sum of all the suits ie clubsSum, diamondsSum, etc..
    //  if all = 5 then this.flush = true
    //  total = ?
    //  highest card = [0]?
    //
    //
    //  Straight?
    //  -----------
    //  5 consecutive values
    //  How do we do this with an ace, how does an ace have 2 values?
    //  total = highest card
    //
    // 3 of a kind
    // -------------
    //  if 1,2,3 are same or
    //  2,3,4
    //  3,4,5
    //  3rd card will always be there
    //  which side does the three of a kind come from right, middle or left?
    //  (111,2,3)
    //  (1,222,3)
    //  (3,2,111)
    //  next is the high card (how do we do that?)
    //  This may or may not be right
    //  I am super Drunk trying to do this
    //  #Can't stop.. gonna keep going.. lol
    //
    //
    //  if the 3kind is [0] high card 4
    //  if 3 kind is [1] high card 4
    // if 3 kind is [2] high card 1

    //  need hand value
    //  need High card value
    //
    //  2pairs
    //  ------------------
    //  1,2 and 3,4
    //  1,2 and 4,5
    //  2,3 amd 4,5
    //  so 2 card will always be there
    //  and 4 card will always be there
    //  2 is one pair, 4 is the other
    //  High Card = the last one not in those 4
    //
    //  1pair
    //  ---------
    //
    //  if 1,2
    //  or 2,3
    //  or 3,4
    //  or 4,5
    //
    //
    //  High Card
    //
    //  If nothing else is there
    //  or what is high card?
    //  Lets' go bottome up please..
    //  High card then find others..
    // when we find them we can move on to the next.

    //  ok?
    //
    //

    console.log(this.hand);
    // BECAUSE I DON'T KNOW WHAT TO DO YET SO..
    // I LOVE YOU MAX
    // I LOVE YOU CONNER
    // other than that!! HAVE FUN

    return "I have no idea about this.. sorry you should program more!";
  }
}

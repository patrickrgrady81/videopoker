class Game {
  constructor(game, deck, player) {
    this.game = game;
    this.deck = deck;
    this.player = player;
    this.play();
  }

  play() {
    switch (this.game) {
      case "JB":
        break;
      default:
        this.playDefault();
    }
  }

  playDefault() {
    // create a deck and shuffle it
    this.deck.create();
    this.deck.shuffle();
    // deal 5 cards to the player
    this.player.deal(deck, 5);
    // show the player's hand
    this.player.display();
    // evaluate the players hand .. ie What does the player have, High Card, Full House, etc
    let evaluate = new Evaluate(this.player.hand);
    console.log(evaluate.run());
  }
}

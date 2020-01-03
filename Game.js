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
    this.deck.create();
    this.deck.shuffle();
    this.player.deal(deck, 5);
    this.player.display();
    let evaluate = new Evaluate(this.player.hand);
  }
}

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
    deck.create();
    deck.shuffle();
    player.deal(deck, 5);
    player.display();
  }
}

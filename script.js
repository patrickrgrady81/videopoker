deck = new Deck();
player = new Player();
deck.create();
deck.shuffle();
player.deal(deck, 5);
player.display();

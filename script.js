deck = new Deck();
player = new Player();
deck.create();
deck.shuffle();
//deck.print();
player.deal(deck, 5);
player.display();

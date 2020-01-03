//  We need a deck so create it
deck = new Deck();
//  We also need a player, so we create it here
player = new Player();

//  Everything else will go to the game
//  We pass in the deck and player we juast created
game = new Game("?", deck, player);

var wordBank = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", 
"caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", 
"raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran", "nidorina", 
"nidoqueen", "nidoran", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", 
"zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", 
"meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", 
"poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", 
"tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", 
"magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", 
"haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", 
"cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", 
"tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr.mime", "scyther", "jynx", 
"electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", 
"flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", 
"dratini", "dragonair", "dragonite", "mewtwo", "mew"]; // an array of suite pokemon

window.onload = function() {
	startButton = document.getElementById("startButton"); // startButton
	guesses = document.getElementById("guesses"); // element containing what displays the number of guesses
	gameWord = document.getElementById("gameWord"); // element containing the game render
	guessedLetters = document.getElementById("letters"); // element containing the users guessed letters
	screenMessage = document.getElementById("screenMessage"); // element containing the winning or losing message
	startButton.addEventListener("click", startGame); // click event listener on startButton to start the game
	document.body.addEventListener("keypress", guessLetter);
};

function startGame() { // function that is executed by clicking the start button
	game.startGame(wordBank); // calls startGame on the game object passing in the array of words
	updateUi(); // calls updateUi
	screenMessage.style.display = "none"; // hide the winning message
};

function updateUi() { // function that updates the dom with the current status of the game
	guesses.innerHTML = game.getGuesses(); // set the element to show the ammount of guesses remaining
	gameWord.innerHTML = game.render(); // set the element to show the current rendering of the game
	guessedLetters.innerHTML = game.getGuessedLetters(); // set the element to show which letters have been guessed
};

function guessLetter(event) { 
	if(!game.isOver()) {
		// game.guess(String.fromCharCode(event.charCode));  lines 41-43 can all be done in this one line
		var charCode = event.charCode; // gets the character code of the key that was pressed
		var charString = String.fromCharCode(charCode); // convert the character code into a letter string
		game.guess(charString); // use the letter string to guess a letter in the game
		updateUi(); // calls updateUi to update the ui after you made the guess
		checkForWin();
	}
};

function checkForWin() {
	if(game.isOver()) { // check to see if guess are 0 or if the word is found
		screenMessage.innerHTML = game.overMessage(); // set the message depending on win or lose
		screenMessage.style.display = "inline"; // display the winning message
	}
};





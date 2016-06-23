console.log("loaded bro");

var game = {
	guesses: null,
	guessedLetters: [],
	words: [],
	currentWord: new Word(),
	startGame: function (wordsArray) {
		this.guesses = 10;
		this.guessedLetters = [];
		for( var i = 0; i < wordsArray.length; i++ ) {
			this.words.push(wordsArray[i]);
		};
		var randomWord = this.words[Math.floor(Math.random() * this.words.length)];
		this.currentWord.getLetters(randomWord);
	},
	guess: function (letter) {
		if ( this.guessedLetters.indexOf(letter) === -1 ) {
			var found = this.currentWord.try(letter);
			if (!found) {
				this.guesses--;
			}
			this.guessedLetters.push(letter);
		}
	},
	isOver: function () {
		return (this.guesses === 0) || (this.currentWord.isFound());
	},
	overMessage: function () {
		if ( this.guesses === 0 ) {
			return "You Lose"
		}
		else if ( this.currentWord.isFound() ) {
			return "You Win"
		}
		return undefined;
	},
	render: function () {
		return [
    	this.currentWord.render(),
   	    "Guesses: " + this.guesses,
    	this.overMessage()
  		].join("\n");
	}
};
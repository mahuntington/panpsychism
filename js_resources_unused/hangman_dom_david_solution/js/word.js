var Word = function() {
	
	this.letters = [];
	
	this.getLetters = function(word) {
		for(var i = 0; i < word.length; i++) {
			this.letters.push(new Letter(word[i]));
		}
	};
	
	this.isFound = function() {
		return this.letters.every(function(currentLetter) {
			return !currentLetter.hidden;
		});
	};

	this.try = function(letter) {
		var found = false;
		for(var i = 0; i < this.letters.length; i++) {
			if(this.letters[i].value === letter) {
				this.letters[i].show();
				found = true;
			}
		}
		return found;
	};

	this.render = function() {
		return this.letters.map(function(letter) {
			return letter.render();
		}).join("");
	};
}
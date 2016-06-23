console.log("loaded bro");

var Word = function () {
		this.letters = [];
		this.getLetters = function (newWord) {
			var chars = newWord.split('');
			for( var i = 0; i < chars.length; i++ ){
				this.letters.push(new Letter(chars[i]));
			}
		};
		this.isFound = function () {
			return this.letters.every(function(currentLetter) {
				return !currentLetter.hidden;
			});
		};
		this.try = function (letter) {
			for ( var i = 0; i < this.letters.length; i++ ) {
				if ( this.letters[i].value === letter ) {
					this.letters[i].show();
				}
			};
		};
		this.render = function () {
			return this.letters.map( function(letter) {
				return letter.render();
			}).join('');
		}
};

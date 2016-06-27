// FINDS FREQUENCIES OF WORDS IN A SENTENCE
wordFreq = function(string) {

	// split the sentence into individual words
	var wordArray = string.split(' ');

	// set up default values for each unique word in an object
	var words = {}
	for (var i=0; i < wordArray.length; i++) {		
		wordArray[i] = wordArray[i].toLowerCase();
		words[wordArray[i]] = 0; 
	}

	// console.log(words);

	// increment values for each word by frequency
	for (var j=0; j < wordArray.length; j++) {
		words[wordArray[j]] += 1;
	}

	return bigFreq(words);
}

// RETURNS HIGHEST VALUE KEY-VALUE PAIR
bigFreq = function(obj) {
	var value = -Infinity;
	var word = null;

	for (var key in obj) {
		if (obj[key] > value) {
			value = obj[key]
			word = key;
		}
	}

	return { [word] : value } 
}


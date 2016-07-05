# CAESAR CIPHER

### Angular js basics


## APP

Make a Caesar Cipher page that takes an input and encodes it with a Caesar Cipher and and displays the encoded input while the user is typing. (no submit button).

Also make it so the user can decode an encoded message.


![page](cipherpage.png)


### ANGULAR DIRECTIVES

- `ng-keyup`
- `ng-model`


### CAESAR CIPHER

https://en.wikipedia.org/wiki/Caesar_cipher

You can put this Caesar Cipher code in a separate js file (before your main `app.js`), and then reference the `caesarShift` function in your angular controller.

In the example in the above image, the `amount` is set to `12` for encoding, and `-12` for decoding.

```
var caesarShift = function(str, amount) {

	// Wrap the amount
	if (amount < 0)
		return caesarShift(str, amount + 26);

	// Make an output variable
	var output = '';

	// Go through each character
	for (var i = 0; i < str.length; i ++) {

		// Get the character we'll be appending
		var c = str[i];

		// If it's a letter...
		if (c.match(/[a-z]/i)) {

			// Get its code
			var code = str.charCodeAt(i);

			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

		}

		// Append
		output += c;

	}

	// All done!
	return output;

};
```
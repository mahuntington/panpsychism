var bubbleSort = function(input) {

	var swap = true;

	while (swap) {
		swap = false;

		for (var i=0; i < input.length; i++) {

			if (input[i] > input[i + 1]) {
				var other = input[i];
				input[i] = input[i + 1];
				input[i + 1] = other;
				swap = true;
				
			}
		} // end for
	} // end while

	return input;
}
window.onload = function() {
	console.log('app.js');

	var squares = document.getElementsByClassName('square');
	for (var i=0; i < squares.length; i++) {
		squares[i].addEventListener('click', play);
	}
}

var turn = true;

var Xpositions = [],
    Opositions = [];

var windex = [
              [0, 1, 2], [3, 4, 5], [6, 7, 8],
              [0, 3, 6], [1, 4, 7], [2, 5, 8],
              [0, 4, 8], [2, 4, 6]
             ];

var play = function() {
	if (!this.className.includes("x") && !this.className.includes("o")) {			
		if (turn) {
			this.innerHTML = '<img src="images/x.png"/>';
			this.className += ' x';
			Xpositions.push(this.id);
		} else {
			this.innerHTML = '<img src="images/o.png"/>';
			this.className += ' o';
			Opositions.push(this.id);
		}
		turn = !turn;
		checkWin();
	}
}

var checkWin = function() {
	var squares = document.getElementsByClassName('square');
	if (checkPositions(Xpositions)) {
		for (var i=0; i < squares.length; i++) {
			squares[i].innerHTML = '<img src="images/egg.png"/>'			
		}
	} else if (checkPositions(Opositions)) {
		for (var j=0; j < squares.length; j++) {
			squares[j].innerHTML = '<img src="images/depression.png"/>'				
		}
	}	
}

var checkPositions = function(playerPositions) {
	for (var i=0; i < windex.length; i++) {
		var hits = 0;
		for (var j=0; j < windex[i].length; j++) {				
			for (var k=0; k < playerPositions.length; k++) {
				if (windex[i][j] == playerPositions[k]) {
					hits++;
				}
			}				
		}
		if (hits == 3) { return true };
	}
	return false
}
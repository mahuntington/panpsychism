window.onload = function() {
	console.log('app.js');

	// the game will start when a size is selected
	// will also reset the game when clicked
	var sizeButtons = document.getElementsByClassName('size');
	for (var i=0; i < sizeButtons.length; i++) {
		sizeButtons[i].addEventListener('click', setValues);
	}

}

// global variables to be populated by setValues function
var turn, size, Xpositions, Opositions, windex;

// setValues sets the variables for the game and invokes the makeBoard function
var setValues = function() {
	turn = true;
	size = this.innerText;
	Xpositions = [];
	Opositions = [];

	windex = [];

	// generates winning combinations for rows and columns according to the number of squares
	for (var i=0; i < Math.sqrt(size); i++) {
		var row = [];
		for (var j=(i * Math.sqrt(size)); j < (Math.sqrt(size) + (i * Math.sqrt(size))); j++) {
			row.push(j);
		}
		var col = [];
		for (var j = i; j < (i + parseInt(size)); j += Math.sqrt(size)) {
			col.push(j);
		}
		windex.push(row, col);
	}

	// generates winning combinations for diagonals (top left to bottom right)
	var diag1 = [];
	for (var j=0; j < parseInt(size); j += (Math.sqrt(size) + 1)) {
		diag1.push(j);
	}

	// generates winning combinations for diagonals (top right to bottom left)
	var diag2 = [];
	for (var k=(Math.sqrt(size) - 1); k <= (size - Math.sqrt(size)); k += (Math.sqrt(size) - 1)) {
		diag2.push(k);
	}
	windex.push(diag1, diag2);
	
	// makes the board according to the number of squares
    makeBoard();
}

// generates the board according to the size variable, and
// adds an eventListener for each square (play function)
var makeBoard = function() {
	var board = document.getElementById('board');
	board.innerHTML = "";
	for (var i=0; i < size; i++) {
		var square = document.createElement('square');
		square.id = i;
		square.className = "square";
		square.style.margin = "2px";
		square.style.width = (100 / Math.sqrt(size)) - 1 + "%";
		square.style.height = (100 / Math.sqrt(size)) - 1 + "%";
		var board = document.getElementById('board');
		board.appendChild(square);
		square.addEventListener('click', play);
	}
}

var play = function() {
	if (!this.className.includes("clicked") {			
		if (turn) {
			this.innerHTML = '<img src="images/x.png"/>';
			Xpositions.push(this.id);
		} else {
			this.innerHTML = '<img src="images/o.png"/>';
			Opositions.push(this.id);
		}
		turn = !turn;
		this.className += " clicked";
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
		if (hits == Math.sqrt(size)) { return true };
	}
	return false
}

// EOF


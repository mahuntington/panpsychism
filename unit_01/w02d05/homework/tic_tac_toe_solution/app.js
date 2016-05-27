window.onload = function() {

	console.log('app.js');

	var turn = true;

	var Xpositions = [];
	var Opositions = [];

	var windex = [
	              [0, 1, 2], [3, 4, 5], [6, 7, 8],
	              [0, 3, 6], [1, 4, 7], [2, 5, 8],
	              [0, 4, 8], [2, 4, 6]
	             ];

	var squares = document.getElementsByClassName('square');

	var play = function() {

		if (!this.className.includes("x") && !this.className.includes("o")) {
			
			if (turn) {
				this.innerHTML = '<img src="x.png"/>';
				this.className += ' x';
				Xpositions.push(this.id);
			} else {
				this.innerHTML = '<img src="o.png"/>';
				this.className += ' o';
				Opositions.push(this.id);
			}
			turn = !turn;
			checkWin();

		}
	}

	for (var i=0; i < squares.length; i++) {
		squares[i].addEventListener('click', play);
	}



	var checkWin = function() {
		var squares = document.getElementsByClassName('square');
		if (checkX()) {
			console.log('X WON!!!!!');
			for (var i=0; i < squares.length; i++) {
				squares[i].innerHTML = '<img src="egg.png"/>'
			}
		} else if (checkO()) {
			console.log('O WON!!!!!');
			for (var j=0; j < squares.length; j++) {
				squares[j].innerHTML = '<img src="depression.png"/>'
			}
		}
	}

	var checkX = function() {
		for (var i=0; i < windex.length; i++) {
			var hits = 0;
			for (var j=0; j < windex[i].length; j++) {				
				for (var k=0; k < Xpositions.length; k++) {
					if (windex[i][j] == Xpositions[k]) {
						hits++;
					}
				}				
			}
			if (hits == 3) { return true };
		}
		return false
	}

	var checkO = function() {
		for (var i=0; i < windex.length; i++) {
			var hits = 0;
			for (var j=0; j < windex[i].length; j++) {				
				for (var k=0; k < Opositions.length; k++) {
					if (windex[i][j] == Opositions[k]) {
						hits++;
					}
				}				
			}
			if (hits == 3) { return true };
		}
		return false
	}	

}
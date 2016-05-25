window.onload = function() {
	console.log('loaded');	

	// Invoke your chain of functions and listeners within window.onload
	
	var startButton = document.querySelector('button');
	startButton.onclick = function() {
		start();
	}
}

var tiles = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];

// USE THIS TO SHUFFLE YOUR ARRAYS
//o = array
function shuffle(o) {
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
};

function start(){
	shuffle(tiles);
	makeAndDisplayTiles();
}

function makeAndDisplayTiles(){
	document.getElementById('game').innerHTML = "";
	document.getElementById('info').innerHTML = "";
	for(var i = 0; i < tiles.length; i++){
		var tile = document.createElement('div');
		tile.className = "column";
		tile.setAttribute('data-value', tiles[i]);
		document.getElementById('game').appendChild(tile);
		tile.onclick = function(){
 			makePlay(this);
		};
	}
}

function makePlay(tile){
	tile.innerHTML = tile.dataset.value;
	tile.className += " clicked";

	var selected = document.getElementsByClassName('clicked');

	if (selected.length === 2) {
		checkForMatch();
	}	
}

function checkForMatch() {
	setTimeout(function() {
		var selected = document.getElementsByClassName('clicked');		
		if (selected[0].innerText === selected[1].innerText) {
			console.log('match');
			selected[0].className = "column found";
			selected[0].className = "column found";
		} else {
			console.log('no match');
			selected[0].innerText = "";
			selected[1].innerText = "";
			selected[0].className = "column";
			selected[0].className = "column";
		}
		checkForWin();
	}, 1500);
}

function checkForWin() {
	var foundItems = document.getElementsByClassName('found');

	if (foundItems.length === 10) {
		for (var i=0; i < foundItems.length; i++) {
			foundItems[i].className = "column won";
		}
	}
}


// don't need data value
// 'found' is only added after a match
// checkForMatch goes inside a setTimeout
// start should begin with a listener

// remove a class name by using 'className' and writing the names
// of the classes you want to keep, and adding classes if you want
// EXAMPLE: If an element with the class of 'column' also has a class of 
// 'clicked' and you want to remove 'clicked',
// 

// do not need to turn off the event listener
// apply 'won' class







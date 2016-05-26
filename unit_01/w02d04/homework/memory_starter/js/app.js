window.onload = function() {
	console.log('loaded');	

	// When the start button is clicked, the start() function is invoked
	var startButton = document.querySelector('button');
	startButton.onclick = function() {
		start();
	}
}

// Make your array of letters for your tiles


// Use this function later to shuffle your array of tiles
//o = array
function shuffle(o) {
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
};

function start(){
	console.log('start button clicked!');
	// shuffle your tiles

	// invoke the makeAndDisplayTiles function
}

function makeAndDisplayTiles(){
	// this function should clear the game (when the player presses the 'start' button,
	// this function is invoked, clearing the game board)

	// write a loop that iterates over the tiles array and creates each tile (a div)
	// -each tile should have a class of 'column'
	// -each tile should have a 'data-value' corresponding to its letter
	// -append each tile to the game
	// -give each tile an event listener that invokes the makePlay(tile) function when
	//  the tile is clicked
}

function makePlay(tile){
	// display the letter inside the tile
	// give the tile a class of 'clicked'

	// if there are two tiles with the class 'clicked', run the checkForMatch function
}

function checkForMatch() {

	// write all your code for this function inside setTimeout below:

	setTimeout(function() {

		// write your code here

		// if two tiles match: 
		// -add a class of 'found' to each
		// -remove the class of 'clicked' from each
		// -remember, if you remove the 'column' class, the tile will disappear
		// (and you don't want that)
		// -run the checkForWin function

		// if your two tiles DON'T match
		// - remove the innerText so the letter goes away
		// - remove the class of 'clicked' (but keep the class of 'column')

		// HINTS
		// Remove a class by using 'className' and writing the names
		// of the classes you want to keep. EXAMPLE: If an element with the class of 
		// 'column' also has a class of 'clicked' and you want to remove 'clicked', 
		// just say className = "column", and 'clicked' will be removed. You can also
		// add classes in the same way, while omitting others.

		// Note that if you change a class, the list of elements with that className
		// will change in real time (the nodeList updates). You'll have to figure out a 
		// way around this to avoid getting errors


	}, 1500);
}

function checkForWin() {

	// if all tiles have a class of 'found', the player has won
	// in which case, add a class of 'won' to each tile

}


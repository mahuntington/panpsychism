window.onload = function() {
	console.log('loaded');	

	// Invoke your chain of functions and listeners within window.onload
	// var button = document.getElementsByTagName('button');
	// button.onclick(function(){
	// 	start();
	// })
start();
}


// USE THIS TO SHUFFLE YOUR ARRAYS
//o=array
var tiles = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E'];
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
	for(var i = 0; i<tiles.length;i++){
		var tile = document.createElement('div');
		tile.setAttribute('class', 'column');
		tile.setAttribute('data-value',tiles[i]);
		document.getElementById('game').appendChild(tile);
		tile.onclick = function(){
 			makePlay(this);
		};
	}
	// addEventsToTiles();
}

// function addEventsToTiles(){
// 	var tile = document.getElementsByClassName('column');
// 	tile.onclick = makePlay(this);
// }

function makePlay(tile){
	tile.innerHTML = tile.dataset.value;
	tile.className += " found";
}



function processData(n) {
	var result="";
	for(var i = 1; i<=n; i++){
		var spaces = i;
		while(spaces <= n-1){
			result+=" ";
			spaces++;
		}
		var stairs = i;
		while(stairs > 0){
			result+='#';
			stairs--;
		}
        result+='\n'
	}
	console.log(result);
} 
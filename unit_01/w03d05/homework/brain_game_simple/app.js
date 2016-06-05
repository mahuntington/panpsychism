// This is the simple version of brain game. It shuffles only once,
// and does so by setting a class on an element to shift it.
// In this version, there are no ids, and a elements will only
// receive a single class (so there are some workarounds with these restrictions).

$(function() {

	console.log('app.js jquery');

	var $board = $('#board');
	var $startShuffle = $('#start-shuffle');
	var $message = $('#message');

	// variables declared globally for use in all functions
	var randomBrain; 
	var state;

	// resets the board, the start button, and the message prompt
	var reset = function() {
		state = "start";
		$startShuffle.text("START");
		$startShuffle.css('background-color', 'cadetblue');
		$startShuffle.css('color', 'white');
		$message.text('Click Start to give a brain an idea');
		$board.html("");
		for (var i=0; i < 3; i ++) {
			var $brain = $('<div>');
			$brain.addClass('position' + i);
			$brain.html('<img src="brain.png"/>');
			$board.append($brain);
		}
	}

	// run the reset function on window onload
	reset();

	// click handler for the start button, 
	// changes which function is invoked depending on the stage of the game
	$startShuffle.click(function() {
		if (state === "start") {
			giveIdea();
		} else if (state === "shuffle") {			
			shuffleBrains();
		} else if (state === "reset") {
			reset();
		}
	});

	// selects a random brain, sets the randomBrain variable, shows the light, and sets the
	// state variable for the start button
	var giveIdea = function() {
		randomBrain = Math.floor(Math.random() * 3);
		$('.position' + randomBrain).html('<img src="brainlight.png"/>');
		$startShuffle.text('SHUFFLE');
		$startShuffle.css('background-color', 'coral');
		$message.text("Press SHUFFLE to shuffle the brains");
		state = "shuffle";
	}
	
	// shuffles the brains on the page
	var shuffleBrains = function() {
		$('.position' + randomBrain).html('<img src="brain.png"/>');
        var positions =[0, 1, 2];
        var assigned = false;
 
 		// loops over all the brains (the children on the board)
 		// and gives them a new random position class.
 		// also sets click events for each.      
        $board.children().each(function() {
        	var newPosition = positions.splice(Math.floor(Math.random() * positions.length), 1);
	        if (!assigned) {	
	        	if ($(this).hasClass('position' + randomBrain)) {
	        		randomBrain = newPosition[0];
	        		assigned = true;
	        	}
	        }
        	$(this).attr('class', 'position' + newPosition[0]);
        	$(this).click(checkBrain);
        });		
	}

	// checks if the selected brain is the correct one
	var checkBrain = function() {
		if ($(this).hasClass('position' + randomBrain)) {
			$('#message').text("THIS IS THE BRAIN!!!");
			$(this).html('<img src="brainlight.png"/>');
		} else {
			$('#message').text('Not the brain . . . ');
		}
		state = "reset";
		$startShuffle.text('RESET');
		$startShuffle.css('background-color', 'black');
		$startShuffle.css('color', 'white');
	}

}); // end window.onload

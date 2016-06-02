$(function() {

	console.log('app.js jquery');

	var $board = $('#board');
	var $startShuffle = $('#start-shuffle');
	var $message = $('#message');

	var brainNum = 5;
	var gamesPlayed = 0;
	var wins = 0;

	var randomBrain;
	var state;

	var reset = function() {
		state = "start";
		$startShuffle.text("START");
		$startShuffle.css('background-color', 'cadetblue');
		$startShuffle.css('color', 'white');
		$message.text('Click Start to give a brain an idea');
		$board.html("");

		for (var i=0; i < brainNum; i ++) {
			var $brain = $('<div>').attr('id', i);
			$brain.addClass('brain');
			$brain.html('<img src="brain.png"/>');
			$board.append($brain);
		}
	}

	// run the reset function on window onload
	reset();

	$startShuffle.click(function() {
		console.log('start clicked');
		randomBrain = Math.floor(Math.random() * brainNum);
		if (state === "start") {
			giveIdea();
		} else if (state === "shuffle") {
			$('#' + randomBrain).html('<img src="brain.png"/>');
			shuffleBrains();
		} else if (state === "reset") {
			reset();
		}
	});

	var giveIdea = function() {
		console.log('give idea function');
		$('#' + randomBrain).html('<img src="brainlight.png"/>');
		$startShuffle.text('SHUFFLE');
		$startShuffle.css('background-color', 'coral');
		$message.text("Press SHUFFLE to shuffle the brains");
		state = "shuffle";
	}
	
	// run recursively according to the counter
	var counter = 0;
	var shuffleBrains = function() {
		console.log('shuffle brains function running recursively');

		var positions = [];
		for (var i=0; i < brainNum; i++) {
			positions.push(i);
		}

        var horizontals = [0, 205, 410, 615, 820, 1025, 1230, 1435];
		
		var $allBrains = $('.brain');

		$allBrains.each(function(index, value) {
			var newIndex = positions.splice(Math.floor(Math.random() * positions.length), 1);
			$('#' + index).css({transform: 'translate(' + ((newIndex * 205) - horizontals[index]) + 'px)'});
			$('#' + index).css({transition: 'all 0.4s ease-in'});
			$('#' + index + ' img').css({ animationName: 'brainsize' });
		});

		var brainLoop = setTimeout(shuffleBrains, 501);

		counter++;
		if (counter == 10) {
			clearTimeout(brainLoop);
			counter = 0;
			$message.text('Click on the brain you think is right!');
			$startShuffle.html('<img src="braincon.png"/>');
			$startShuffle.css('background-color', 'ivory');

			$('.brain').click(checkBrain);				
		}			
	}

	var checkBrain = function() {
		if ($(this).is('#' + randomBrain)) {
			$('#message').text("THIS IS THE BRAIN!!!");
			$('#' + randomBrain).html('<img src="brainlight.png"/>');
			wins++;
		} else {
			$('#message').text('Not the brain . . . ');
		}
		state = "reset";
		$startShuffle.css('display', 'inline-block');
		$startShuffle.text('RESET');
		$startShuffle.css('background-color', 'black');
		$startShuffle.css('color', 'white');
		gamesPlayed++
		$('#wins').text('WINS: ' + wins + ' out of ' + gamesPlayed);
	}

}); // end window.onload
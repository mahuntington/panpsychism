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
		randomBrain = Math.floor(Math.random() * brainNum);
	}

	// run the reset function on window onload
	reset();

	$startShuffle.click(function() {
		console.log('start clicked');
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





		// shuffle($allBrains);

		// 		
		
		// 	var idx0 = $allBrains.index($('#0'));
		// 	$('#0').css({transform: 'translate(' + (idx0 * 205) + 'px)'});
		// 	$('#0').css({transition: 'all 0.4s ease-in'});
		// 	$('#0 img').css({ animationName: 'brainsize' });

		// 	var idx1 = $allBrains.index($('#1'));
		// 	$('#1').css({transform: 'translate(' + ((idx1 * 205) - 205) + 'px)'});
		// 	$('#1').css({transition: 'all 0.4s ease-in'});
		// 	$('#1 img').css({ animationName: 'brainsize' });


		// 	var idx2 = $allBrains.index($('#2'));
		// 	$('#2').css({transform: 'translate(' + ((idx2 * 205) - 410) + 'px)'});
		// 	$('#2').css({transition: 'all 0.4s ease-in'});
		// 	$('#2 img').css({ animationName: 'brainsize' });


		// 	var idx3 = $allBrains.index($('#3'));
		// 	$('#3').css({transform: 'translate(' + ((idx3 * 205) - 615) + 'px)'});
		// 	$('#3').css({transition: 'all 0.4s ease-in'});
		// 	$('#3 img').css({ animationName: 'brainsize' });

		// 	var idx4 = $allBrains.index($('#4'));
		// 	$('#4').css({transform: 'translate(' + ((idx4 * 205) - 820) + 'px)'});
		// 	$('#4').css({transition: 'all 0.4s ease-in'});
		// 	$('#4 img').css({ animationName: 'brainsize' });




	// shuffle borrowed from Stack Overflow
	// var shuffle = function(array) {
	//     var counter = array.length;
	//     // While there are elements in the array
	//     while (counter > 0) {
	//         // Pick a random index
	//         var index = Math.floor(Math.random() * counter);
	//         // Decrease counter by 1
	//         counter--;
	//         // And swap the last element with it
	//         var temp = array[counter];
	//         array[counter] = array[index];
	//         array[index] = temp;
	//     }

	//     return array;
	// }
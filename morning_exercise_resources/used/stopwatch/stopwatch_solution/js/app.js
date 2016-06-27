window.onload = function() {
	document.getElementById("start").addEventListener("click", startTimer);
	document.getElementById("stop").addEventListener("click", stopTimer);	
	document.getElementById("reset").addEventListener("click", resetTimer);
	document.getElementById("countdown").addEventListener("click", countdownTimer);
};

var startTimer = function() {
	var time = parseInt(document.getElementById("stopwatch").textContent); //move variable declarations outside the window.onload so that each function can have acess to the variables. 
	stopWatchHandle = setInterval(function() {
			time += 1;
			var timer = document.getElementById("stopwatch");
			timer.textContent = time;
	}, 1000);
};

var resetTimer = function() {
	clearInterval(stopWatchHandle);
	var timer = document.getElementById("stopwatch");
	timer.textContent = "0";
};

var countdownTimer = function () {
	clearInterval(stopWatchHandle);
	var time = parseInt(document.getElementById("stopwatch").textContent);
	stopWatchHandle = setInterval(function() {
		time -= 1;
		var timer = document.getElementById("stopwatch");
		timer.textContent = time;
	}, 1000);
};

var stopTimer = function() {
	clearInterval(stopWatchHandle);
};
	
var Letter = function(letter) {
	
	this.value = letter;
	
	this.hidden = true;
	
	this.hide = function() {
		this.hidden = true;
	};
	
	this.show = function() {
		this.hidden = false;
	};
	
	this.render = function() {
		return this.hidden ? " _ " : this.value;
	};
};
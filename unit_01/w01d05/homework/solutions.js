// ARRAYS AND OBJECTS

// =====================================================

// Find the median number in the following nums array, then console.log that number.
var nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

nums.sort();
var half = Math.floor(nums.length / 2);
console.log(nums[half]);
// => 15

// =====================================================

// Given the following object:
var obj = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

// What would you write to access the name and console.log it?
console.log(obj.name);
// OR
console.log(obj['name']);

// What would you write to change the type to 'creature'
obj.type = "creature";

// What would you write to add a key to the object called age, and set the age to 6?
obj.age = 6;

console.log(obj);


// LOOPS
// =====================================================

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

var i = 1;
var sum = 0;

while (i < 1000) {
	if (i % 3 === 0 || i % 5 === 0) {
		sum += i;
	}
	i++;
}

console.log(sum);

// =====================================================


// Write a *for* loop that can iterate over the Wilkersons array below, starting from the middle of the array.
// 'Malcom' is in the middle of the array. In the loop, 
// console.log 'Malcolm' and everything after 'Malcolm' in the array.

var Wilkersons = ["Lois", "Dewie", "Francis", "Malcolm", "Reese", "Hal"];

for (var i = Wilkersons.length / 2; i < Wilkersons.length; i++ ) {
	console.log(Wilkersons[i]);
}


// Write a *for* loop for the following `plusJamie` array. Note that this array has an _odd_ number of elements 
// 'Malcom' is still in the middle. Within the loop, console.log everything from the middle (Malcolm), and onwards:
var plusJamie = ["Lois", "Dewie", "Francis", "Malcolm", "Reese", "Hal", "Jamie"];

var half = Math.floor(plusJamie.length / 2);

for (var i = half; i < plusJamie.length; i++) {
	console.log(plusJamie[i]);
}


// FUNCTIONS
// =======================================

// Write a function 'palindrome' that accepts a single argument, a string. The function 
// should return true if the string is a palindrome, false if it is not. Make sure your 
// function will give the correct answer for words with capital letters.

var palindrome = function(input) {
	var comparison = input.toLowerCase().split('').reverse().join('');

	if (comparison === input.toLowerCase()) {
		return true;
	}
	return false;
}

console.log(palindrome("Radar"));
// => True

console.log(palindrome("Borscht"));
// => False

// =======================================

// Define a function maxOfThree that takes three numbers as arguments and returns 
// the largest of them.

var maxOfThree = function(num1, num2, num3) {
	return [num1, num2, num3].sort().pop();
}
console.log(maxOfThree(6, 9, 1));
// => 9


// OR


var maxOfThree2 = function(num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		return num1;
	} else if (num2 > num3) {
		return num2;
	}
	return num3;
}

console.log(maxOfThree2(6, 9, 1));
// => 9


// =======================================
//Write a function pythagoras that that takes two arguments: sideA and sideB, 
//and returns the solution for sideC using the Pythagorean theorem.

var pythagoras = function(sideA, sideB) {
	var sideCsquared = (sideA * sideA) + (sideB * sideB);
	return Math.sqrt(sideCsquared);
}

console.log(pythagoras(8, 6));



// =======================================

// Write a function called `calc` ...

var calc = function(num1, num2, operation) {
	if (operation === "sum") {
		return num1 + num2
	} else if (operation === "sub") {
		return num1 - num2;
	} else if (operation === "mult") {
		return num1 * num2;
	} else if (operation === "div") {
		return num1 / num2;		
	} else if (operation === "exp") {
		return Math.pow(num1, num2);
	} else {
		return "error"
	}
}

console.log(calc(4, 3, "exp"));

// =======================================

// Write a function `isAVowel` that takes a character (i.e. a string of length 1) 
// and returns true if it is a vowel, false otherwise.

var isAVowel = function(char) {
	return /[aeiou]/.test(char.toLowerCase());
}

console.log(isAVowel("a"));
// => true


// OR

var isAVowel2 = function(char) {
	var vowels = ["a", "e", "i", "o", "u"];
	for (var i=0; i < vowels.length; i++) {
		if (vowels[i] === char.toLowerCase()) {
			return true
		}
	}
	return false
}

console.log(isAVowel2("a"));
// => true


// =======================================
// Write a function `sumArray` that sums the numbers in an array of numbers. 

var sumArray = function(arr) {
	var sum = 0;
	for (var i=0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

console.log(sumArray([1, 2, 3, 4]));


// =======================================

// Write a function that returns the number of arguments passed to the function when called. 
// You will need to research how to solve this.

var args = function() {
	return arguments.length;
}

console.log(args(1, 2, 3, 4));
// => 4

console.log(args([], {}, true));
// => 3



// SCOPE
// =======================================

// 1. showColor does not require a parameter because hexColor is in global scope,
//    which means hexColor is available in any scope. Therefore showColor can 'borrow' hexColor from the global scope.

// 2. The output will be the argument that was passed into the showColor function,
//    because it takes precedence over the global scope.

// 3. theOther cannot access the value of num because the value is not in its scope.

// 4. scopeExample will not log the number 8, because num was redefined to the number



// NESTED DATA
// =======================================

var solarSystem = [
    { name: "Mercury", ringSystem: false, moons: [] },
    { name: "Venus", ringSystem: false, moons: [] },
    { name: "Earth", ringSystem: false, moons: ["The Moon"] },
    { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
    { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
    { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
    { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
    { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

// Print the array of Jupiter's moons to the console.
console.log(solarSystem[4].moons);

// Print the name of Neptune's moon "Nereid" to the console.
console.log(solarSystem[7].moons[1]);

// Add a new moon called "Endor" to Venus' moons array.
solarSystem[1].moons.push("Endor");

// Add a Pluto object to the solarSystem array using .push. 
// The object should contain Pluto's name, ringSystem boolean, and moons array 
// (which includes "Charon").
solarSystem.push({ name: "Pluto", ringSystem: false, moons: ["Charon"]});

// Add a new key value pair to the the Earth object: the key should be 'diameter', 
// and the value should be Earth's diameter in miles.
solarSystem[2].diameter = "7,915";

// Change Mercury's ringSystem boolean to true.
solarSystem[0].ringSystem = true;

// Change Uranus' moon "Umbriel" to "Oberon"
solarSystem[6].moons[3] = "Oberon";

// Iterate through the solarSystem array and print only the objects that 
// have a ringSystem (where ringSystem: true)
for (var i=0; i < solarSystem.length; i++) {
	if (solarSystem[i].ringSystem) {
		console.log(solarSystem[i]);
	}
}


// BONDFILMS
// =======================================

bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

// Determine the total cumulative gross of the Bond franchise.
var sum = 0;
for (var i=0; i < bondFilms.length; i++) {
	var value = parseInt(bondFilms[i].gross.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''));
	sum += value;
}
console.log('Total gross: ' + sum);



// Create a new array with the names of the Bond films.
var bondTitles = [];
for (var i=0; i < bondFilms.length; i++) {
	bondTitles.push(bondFilms[i].title);
}
console.log(bondTitles);


// Create a new array `oddBonds`, of only the Bond films released on odd-numbered years.
var oddBonds = [];
for (var i=0; i < bondFilms.length; i++) {
	if (bondFilms[i].year % 2 !== 0) {
		oddBonds.push(bondFilms[i]);
	}
}
console.log(oddBonds);



// HUMDINGER








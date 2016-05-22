// ==============================
//       Dramatis Personae
// ==============================

var hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

var buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

var baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

var lands = [
  "The Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

var makeMiddleEarth = function() {
  console.log("Trying to make middle earth.");
  // create a section tag with an id of middle-earth
  // add each land to the section as article tags-- try using a loop
  // assign the id of the corresponding article tag as the name of the land 
  // inside each article tag include an h1 with the name of the land
  // append the section to the body of the DOM with: document.body.appendChild( // variable name )
};

// COMMIT YOUR WORK
// The commit message should read: "The 1st set of homework answers is complete".

var makeHobbits = function() {
  console.log('Make hobbits');
  // display an unordered list of hobbits in the shire
  // give each hobbit a class of "hobbit"
};

// COMMIT YOUR WORK
// The commit message should read: "The 2nd set of homework answers is complete".

var keepItSecretKeepItSafe = function() {
  // create an empty div with an id of 'the-ring'
  // add the ring as a child of Frodo
};

// COMMIT YOUR WORK
// The commit message should read: "The 3rd set of homework answers is complete".

var makeBaddies = function() {
  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"
};

// COMMIT YOUR WORK
// The commit message should read: "The 4th set of homework answers is complete".

var makeBuddies = function() {
  // create an aside tag and append it below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"
};

// COMMIT YOUR WORK
// The commit message should read: "The 5th set of homework answers is complete".

var leaveTheShire = function() {
  // grab the hobbits and move them to Rivendell
};

// COMMIT YOUR WORK
// The commit message should read: "The 6th set of homework answers is complete".

var beautifulStranger = function() {
  // change the buddy 'Strider' textnode to "Aragorn"
};

// COMMIT YOUR WORK
// The commit message should read: "The 7th set of homework answers is complete".

var forgeTheFellowShip = function() {
  // move the hobbits and the buddies to Rivendell
  // create a new div called 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
};

// COMMIT YOUR WORK
// The commit message should read: "The 8th set of homework answers is complete".

var theBalrog = function() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // add a class "the-white" to this element
  // in the style.css, add a css rule to make elements of the class "the-white"
  // have a white background and a grey border
};

// COMMIT YOUR WORK
// The commit message should read: "The 9th set of homework answers is complete".

var hornOfGondor = function() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove the Uruk-Hai from the Baddies on the page
};

// COMMIT YOUR WORK
// The commit message should read: "The 10th set of homework answers is complete".

var itsDangerousToGoAlone = function(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
};

// COMMIT YOUR WORK
// The commit message should read: "The 11th set of homework answers is complete".

var weWantsIt = function() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
};

// COMMIT YOUR WORK
// The commit message should read: "The 12th set of homework answers is complete".

var thereAndBackAgain = function() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
};

// COMMIT YOUR WORK
// The commit message should read: "The 13th set of homework answers is complete".


// =====================================
// Don't change anything below this line
// =====================================

window.onload = function() {

  document.getElementById('1').addEventListener('click', makeMiddleEarth);
  document.getElementById('2').addEventListener('click', makeHobbits);
  document.getElementById('3').addEventListener('click', keepItSecretKeepItSafe);
  document.getElementById('4').addEventListener('click', makeBaddies);
  document.getElementById('5').addEventListener('click', makeBuddies);
  document.getElementById('6').addEventListener('click', leaveTheShire);
  document.getElementById('7').addEventListener('click', beautifulStranger);
  document.getElementById('8').addEventListener('click', forgeTheFellowShip);
  document.getElementById('9').addEventListener('click', theBalrog);
  document.getElementById('10').addEventListener('click', hornOfGondor);
  document.getElementById('11').addEventListener('click', itsDangerousToGoAlone);
  document.getElementById('12').addEventListener('click', weWantsIt);
  document.getElementById('13').addEventListener('click', thereAndBackAgain);

};

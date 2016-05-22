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
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

var makeMiddleEarth = function() {
  console.log("Trying to make middle earth.");
  // create a section tag with an id of middle-earth

  var section = document.createElement('section');
  section.setAttribute('id', 'middle-earth');

  // append the section to the body of the DOM with: document.body.appendChild( // variable name )
  document.body.appendChild(section);

  // use a for loop to iterate over the lands array that does the following:
  //   1. creates an article tag (there should be one for each land when the loop is done)
  //   2. gives each land article an `id` tag of the corresponding land name
  //   3. includes an h1 with the name of the land inside each land article
  //   4. appends each land to the middle-earth section
  for (var i=0; i < lands.length; i++) {
    var article = document.createElement('article');
    article.setAttribute('id', lands[i]);
    article.innerHTML = '<h1>' + lands[i] + '</h1>';
    section.appendChild(article);
  }

};

// COMMIT YOUR WORK
// The commit message should read: "The 1st set of homework answers is complete".

var makeHobbits = function() {
  console.log('Make hobbits');
  // display an unordered list of the hobbits in the shire.
  // give each hobbit a class of "hobbit"
  // hint: create a 'ul' outside the loop upon which to append the 'li's
  // hint: get 'The-Shire' by using its id

  var hobbitList = document.createElement('ul');
  for (var i=0; i < hobbits.length; i++) {
    var hobbit = document.createElement('li');
    hobbit.innerText = hobbits[i]
    hobbit.className += "hobbit";
    hobbitList.appendChild(hobbit);
  }
  var shire = document.getElementById('The-Shire');
  shire.appendChild(hobbitList);

};

// COMMIT YOUR WORK
// The commit message should read: "The 2nd set of homework answers is complete".

var keepItSecretKeepItSafe = function() {

  // create an empty div with an id of 'the-ring'
  // add the ring as a child of Frodo
  // hint: Frodo does not have an id, but there is a command to retrieve all elements 
  // with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

  var ring = document.createElement('div');
  ring.setAttribute('id', 'the-ring');
  var frodo = document.getElementsByClassName('hobbit')[0];
  frodo.appendChild(ring);

};

// COMMIT YOUR WORK
// The commit message should read: "The 3rd set of homework answers is complete".

var makeBaddies = function() {
  // display an unordered list of baddies in Mordor
  // give each of the baddies a class of "baddy"

  var baddiesList = document.createElement('ul');
  for (var i=0; i < baddies.length; i++) {
    var baddy = document.createElement('li');
    baddy.innerText = baddies[i];
    baddy.className = "baddy";
    baddiesList.appendChild(baddy);
  }

  var mordor = document.getElementById('Mordor');
  mordor.appendChild(baddiesList);

};

// COMMIT YOUR WORK
// The commit message should read: "The 4th set of homework answers is complete".

var makeBuddies = function() {
  // create an aside tag and append it to middle-earth below mordor
  // display an unordered list of buddies in the aside
  // give each of the buddies a class of "buddy"

  var aside = document.createElement('aside');

  var buddiesList = document.createElement('ul');
  for (var i=0; i < buddies.length; i++) {
    var buddy = document.createElement('li');
    buddy.innerText = buddies[i];
    buddy.className = "buddy";
    buddiesList.appendChild(buddy);
  }

  aside.appendChild(buddiesList);
  var middleEarth = document.getElementById('middle-earth');
  middleEarth.appendChild(aside);

};

// COMMIT YOUR WORK
// The commit message should read: "The 5th set of homework answers is complete".

var leaveTheShire = function() {
  // grab the hobbits (the ul in which they reside) and move them to Rivendell
  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list
  // of childNodes
  var hobbits = document.getElementById("The-Shire").childNodes[1];
  var rivendell = document.getElementById('Rivendell');
  rivendell.appendChild(hobbits);

};

// COMMIT YOUR WORK
// The commit message should read: "The 6th set of homework answers is complete".

var beautifulStranger = function() {
  // change the buddy 'Strider' textnode to "Aragorn"
  // hint: You can get a list of elements by tag name, such as 'aside'
  var aside = document.getElementsByTagName('aside')[0];
  var strider = aside.firstChild.childNodes[3];
  strider.innerText = "Aragorn";
};

// COMMIT YOUR WORK
// The commit message should read: "The 7th set of homework answers is complete".

var forgeTheFellowShip = function() {
  // create a new div with an id 'the-fellowship'
  // add an h1 with the text 'The Fellowship' to this new div
  // append the fellowship to middle-earth
  // add the unordered lists of hobbits and buddies to 'the-fellowship'

  var fellowship = document.createElement('div');
  fellowship.setAttribute('id', 'the-fellowship');
  fellowship.innerHTML = "<h1>The Fellowship</h1>";
  var middleEarth = document.getElementById('middle-earth');
  middleEarth.appendChild(fellowship);

  var hobbitList = document.getElementById('Rivendell').childNodes[1];
  var buddiesList = document.getElementsByTagName('aside')[0].firstChild;

  fellowship.appendChild(hobbitList);
  fellowship.appendChild(buddiesList);

};

// COMMIT YOUR WORK
// The commit message should read: "The 8th set of homework answers is complete".

var theBalrog = function() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // add a class "the-white" to this element
  // in the style.css, add a css rule to make elements of the class "the-white"
  // have a white background and a grey border

  var gandalf = document.getElementById('the-fellowship').childNodes[2].firstChild;
  gandalf.innerText = "Gandalf the White";
  gandalf.className += ' the-white';

};

// COMMIT YOUR WORK
// The commit message should read: "The 9th set of homework answers is complete".

var hornOfGondor = function() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  // Tricky: Remove the Uruk-Hai from the Baddies on the page

  alert('The Horn of Gondor has been blown!');
  var boromir = document.getElementsByClassName('buddy')[4];
  boromir.style = "text-decoration: line-through";
  var uruk = document.getElementsByClassName('baddy')[2];
  uruk.parentNode.removeChild(uruk);

};

// COMMIT YOUR WORK
// The commit message should read: "The 10th set of homework answers is complete".

var itsDangerousToGoAlone = function(){
  var frodo = document.getElementsByClassName('hobbit')[0];
  var sam = document.getElementsByClassName('hobbit')[1];
  var mordor = document.getElementById('Mordor');

  mordor.appendChild(frodo);
  mordor.appendChild(sam);

  var doom = document.createElement('div');
  doom.id = "mount-doom";
  mordor.appendChild(doom);

  // take Frodo and Sam out of the fellowship and move them to Mordor (they don't
  // need to be inside a ul in Mordor)
  // add a div with an id of 'mount-doom' to Mordor
};

// COMMIT YOUR WORK
// The commit message should read: "The 11th set of homework answers is complete".

var weWantsIt = function() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Move the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom

  var gollum = document.createElement('div');
  gollum.id = "gollum";
  var mordor = document.getElementById('Mordor');
  mordor.appendChild(gollum);

  var ring = document.getElementById('the-ring');
  gollum.appendChild(ring);

  var doom = document.getElementById('mount-doom');
  doom.appendChild(gollum);


};

// COMMIT YOUR WORK
// The commit message should read: "The 12th set of homework answers is complete".

var thereAndBackAgain = function() {
  // remove Gollum and the Ring from the document

  var doom = document.getElementById('mount-doom');
  var gollum = document.getElementById('gollum');
  doom.removeChild(gollum);

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

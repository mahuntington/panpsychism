// =================================
// THOM'S
// =================================

// make an array of goblins
var goblins = [];
for (var i=0; i < 100; i++) {
	goblins.push(false);
}

// do stuff
for (var i=0; i < goblins.length; i++) {
	for (var j=i; j < goblins.length; j += (i + 1)) {
		goblins[j] = !goblins[j];
	}
}

// change the result to numbers
var result = [];
for (var i=0; i < goblins.length; i++) {
	if (goblins[i]) {
		result.push(i + 1);
	}
}

console.log(result);


//====================================
// JESSE'S
//====================================

var goblins = [];
for (var i = 0; i < 100; i++) {
  goblins.push(false);
};

var cureAllGoblins = function(goblins, callback) {
  // Set all the goblins to true
  for (var i = 0; i < goblins.length; i++) {
    goblins[i] = true;
  }

  // Set the starting position for the goblins and the rate
  // So in this case, num = starting with the 2nd goblin and rate is
  // curing every two goblins
  var num = 1;
  var rate = 2;

  // Use the callback passing in those starter values
  return callback(num, rate)
}

var fakeCureGoblins = function(num, rate) {
  // After 100 loops
  if (num >= 100) {
    var array = [];
    for (var i = 0; i < goblins.length; i++) {
      // If it's true, push the index to the array
      if (goblins[i]) {
        // Shift index by 1
        array.push(i+1);
      };
    };
    // And return it
    return array;
  };

  // Loop over the goblins based off the num / rate passed in
  for (var i = num; i < goblins.length; i+=rate) {
    goblins[i] = !goblins[i];
  }

  // Increment the starting position for 1 goes to 2 to start at the 3rd goblin
  // and rate goes from 2 to 3 to go every third goblin
  num++;
  rate++;

  return fakeCureGoblins(num, rate);
};

console.log(cureAllGoblins(goblins, fakeCureGoblins));


//====================================
// AMBER'S
//====================================

// first set up array of all goblins
// set up object with all values false iterating through array
goblinObject = {};

for (i = 1; i < 101; i++) {
    goblinObject[i] = false;
}

console.log('initial setup: ', goblinObject);

// loop
for (i = 1; i < 101; i++) {
    // now need another loop inside to iterate through the i's
    for (j = i; j < 101; j = j + i) {
        // now, need to run through and change all trues to falses and vice versa
        if (goblinObject[j] ==  false) {
        goblinObject[j] = true;
        }
        else if (goblinObject[j] == true) {
            goblinObject[j] = false;
        }
    }
}

console.log(goblinObject);


// delete objects from array
for (i = 1; i < 101; i++) {
    if (goblinObject[i] == false) {
        delete goblinObject[i];
    }
}

// console.log(goblinObject);

// make an array of true values only
var goblinArray = [];

for (var key in goblinObject) {
    goblinArray.push(key);
}

console.log(goblinArray);


//====================================
// DEREK'S
//====================================

var goblins = [];

// pushing goblin objects into array
for (var i=1; i < 101; i++) {
    var goblin = { 
        id: i,
        cured: false,
     };
     goblins.push(goblin);
};

// counter to increase nested loop properly
var count = 1;

for (var i=0; i < goblins.length; i++) {
    for (var j=i; j < goblins.length; j = j+count) {
        if (goblins[j].cured == true) {
            goblins[j].cured = false;
        } else if (goblins[j].cured == false) {
            goblins[j].cured = true;
        }
    }
    count += 1;
};

var finalArray = [];

for (var i=0; i < goblins.length; i++) {
    if (goblins[i].cured == true) {
        finalArray.push(goblins[i].id);
    }
};

console.log(finalArray);


//====================================
// JOHN'S
//====================================

goblinArray = [];

for (var i = 1; i < 101; i++) {
    goblinArray.push({
        number : i,
        cured : false
    })
};

var count = 0;

var cureAll = function () {
    for (var i = 0; i < goblinArray.length; i++) {
    goblinArray[i].cured = true;
}
    count += 1;
};

cureAll();

var reviseCure = function () {
    for (var i = count; i < goblinArray.length; i += (count+1)) {
        if (goblinArray[i].cured === false) {
            goblinArray[i].cured = true;
        } else if (goblinArray[i].cured === true) {
            goblinArray[i].cured = false;
        }
    }
    count += 1;
    // console.log(count);
}

while (count < 100) {
    reviseCure();
}

var curedArray = [];

for (var i = 0; i < goblinArray.length; i++ ) {
    if (goblinArray[i].cured === true) {
        curedArray.push(goblinArray[i].number);
    }
}

console.log("Here are the cured goblin numbers " + curedArray);


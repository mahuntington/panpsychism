// THOM'S

var pandigital = function(num) {
	var len = num.toString().length;
	var digits = num.toString().split('');

	for (var i=0; i < len; i++) {
		if (digits[i] == 0) {
			return "Zero detected: cannot have number of length 0";
		} else if (digits[i] > len) {
			return "Not pandigital because number(s) are greater than length: " + len;
		} else {		
			for (var j=i + 1; j < len; j++) {
				if (digits[j] == digits[i]) {
					return "Not pandigital because numbers are not unique";
				}
			}
		}
	}

	return "Pandigital number found!";
}


// JOHN'S

var checkNumber = function(num) {
//sets a counter, to be used in while loop
var count = 0;
//turns the num parameter into an array of strings
var numSplit = (''+num).split('');
 //sorts the array of strings
var sort = numSplit.sort(function(a, b){return a-b});
//joins the sorted array into a number
var sortJoin = sort.join('');
//sets an empty array for numbers that equal to i to be pushed into
var pan = [];    
//var i, used to compare with numbers in the num array
var i = 1; 
//loops through the for loop for however many digits are in the number, each time it goes through count goes up by one
while ( count < numSplit.length) {
    //iterates through the num arrray, compares each sorted index position to i (from 1 to the array length)
        for (var j = 0; j < numSplit.length; j ++) {
            if ( i == sort[j] && sort[j] != pan[j]) {
                pan.push(sort[j]); //will push the index position number to pan array if it equals to i & it's not already in pan
                i += 1; //adds one to i each loop through
            } else {
                i += 1; //same

            }
        }
        i = 1; //resets i after the for loop has gone through 
        count += 1;
    }
    //joins the numbers in the pan array 
    var pandigital = pan.join('');
    //compares the joined pan number and the sorted input num
    if (pandigital == sortJoin) {
        console.log(num + " is a pandigital number"); //if equal
    } else {
        console.log(num + " is not a pandigital number"); //if not
    }
};


// ANDY'S

var panCheck = function(num){
    
    // num becomes a string and then the individual digits are pushed to an array
    array = [];
    sNumber = num.toString();
    console.log(sNumber)
    for (var i = 0; i < sNumber.length; i ++) {
        array.push(+sNumber.charAt(i));
    }
    console.log(array)
            // this thing checks for duplicates
            var noDupes = true
            array.sort();
            console.log(array)
            for ( var i = 1; i < array.length; i++ ){
                if(array[i-1] == array[i])
                    noDupes = false;
                 }
            
    if (noDupes === false){console.log("not pandigital because a digit occurs more than once"); return}
    
    var bingo = 0
    // bingos are the number of matches between j
    // and items in the array
    // an array of length 9 must find a matching '9' somewhere
    // and then a matching '8' when j--, etc

        for (var j = array.length; j >= 0; j--){
            console.log('i am checking if ' + j)
            for(var k = 0; k< array.length; k++){
                console.log('is equal to array position ' + k + " which is " + array[k])
                //eliminate previously used
                
            if (array[k] == j){
                // if there is a match, bingo +=1
                bingo += 1
                console.log("***Bingo*** The number of bingos is " + bingo +".");
                // if the number of bingos = length of the array
                if (bingo == array.length && noDupes === true){                    
                    console.log(num + ' is pandigital');
                    return true
                }
            }
        }
    }
    console.log(num + " is not pandigital")
    return false
}
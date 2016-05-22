// THOM'S

var validCard = function(num) {

	var reversedArr = num.toString().split('').reverse();

	for (var i=1; i < reversedArr.length; i+=2) {
		reversedArr[i] = reversedArr[i] * 2;
	}

	reversedArr = reversedArr.join('').split('');

	var summed = reversedArr
		  .map(function(n) { return n = parseInt(n); })
		  .reduce(function (sum, m) { return sum + m; });

	return summed % 10 == 0;
}


// DEREK'S

var validCard = function(n){
  var string = n.toString();
  var num = string.split('').map(function(data){
    return parseInt(data, 10);
  });
  for (var i=num.length - 2; i >= 0; i = i-2) {
    num[i] = num[i] * 2
  };
  var card = num.join('').split('').map(function(data){
    return parseInt(data, 10);
  });
  var newNum = card.reduce(function(a, b){
    return a + b
  });
  if (newNum % 10 == 0) { return true } else { return false };
};


// CHRISTINE'S

var validCard = function (num) {
    var creditNum = num.toString().split("");
    sum = 0;

    //for every other character, starting from the penultimate one
    // turn it back into number and take the sum
    for (var j = creditNum.length-2; j >= 0; j-=2) {
        var double = parseInt(creditNum[j]) * 2;

        var stringify = double.toString().split("");

        //sum up the double digit numbers
        for (var k = 0; k < stringify.length; k++){
            sum += parseInt(stringify[k]);
        }
    }//ends forloop

    //add the rest of the 2n numbers
    for (var m = creditNum.length-1; m >= 0; m-=2){
        sum += parseInt(creditNum[m]);
    }

    //if divisible by 10, it is valid
    return (sum % 10 === 0)
};


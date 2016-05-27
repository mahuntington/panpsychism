// least efficient - WHY? Could you see a situation where this could be inefficient?
// in this one, you're creating two loops. The first loop holds on to one index number (position 0) and the second loop compares it to every other number in the loop (index 0, 1, 2, etc.)
var difference = function(arr){
  var biggest = 0
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if ( biggest < (arr[i] - arr[j])){
        biggest = arr[i] - arr[j];
      }
    };
  };
  return biggest
}

console.log(difference([1, 4, 6, 2, 9]))


// more efficient
var diff = function(arr){
  arr.sort(function(a, b){
    return a - b
  })
  return arr[arr.length - 1] - arr[0];
}
console.log(diff([9,8,1,2,3,4,5]));


// most efficient
var diff = function(arr){
  var small = arr[0];
  var big = arr[0];
  for (var i = 0, len = arr.length, j = 0; i < len; i++) {
    if(arr[i] > big ){
      big = arr[i];
    } else if (arr[i] < small){
      small = arr[i];
    }
  };
  return big - small;
}

console.log(diff([9,8,1,2,3,4,5]));

// least efficient
var diff = function(arr){
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

console.log(diff([1,4, 6, 2, 9]))


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

var fac = function(num, prod) {

	if (num === 0) { return prod }

	prod *= num;
	
	return fac(num - 1, prod);

}



// Sharon's solution
var fac = function(num) {

    if (num === 1) {
      return 1;
    }
    
    return num * fac(num-1);

}; // end of function
var fac = function(num, prod) {
	if (num === 0) { return prod }
	prod *= num;	
	return fac(num - 1, prod);
}



// Sharon's solution
var fac1 = function(num) {

    if (num === 1) {
      return 1;
    }
    
    return num * fac1(num-1);

}; // end of function
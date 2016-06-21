# RECURSION

## What's recursion?

- A function that calls **itself** is a recursive function. It will keep calling itself in a loop.

- A recursive function needs a **condition** by which it will
**exit**. Otherwise it will run indefinitely and destroy your computer from the inside out, forever.

- A recursive function needs to pass its parameters to the next invocation without those parameters being reset, unless you want them to be. 

### NOTES
Here's an example of a recursive function that prints numbers from an arbitrary input down to 1:

``` 
var countdown = function(num) {
	
	// 1. exit condition
	if (num === 1) { return }

	// 2. some kinda process
	console.log(num);
	num -= 1;

	// 3. call the function from within itself
	return countdown(num);
		
}; // end of function
```

In the above example, the operation on `num` could also be passed in the call argument:

```

var countdown = function(num) {
	
	// 1. exit condition
	if (num === 1) { return }

	// 2. some kinda process
	console.log(num);
	
	// 3. call the function from within itself
	return countdown(num - 1);
		
}; // end of function
```
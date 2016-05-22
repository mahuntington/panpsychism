# RECURSION with factorials

## What's a factorial?

```
In mathematics, the factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
```

The factorial of 5 is 120:

5 x 4 x 3 x 2 x 1 = **120**


The factorial of 4 is 24:

4 x 3 x 2 x 1 = **24**

- You are going to write a recusive function that returns the factorial of a given number.

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

## DIRECTIONS

1. Copy, paste, and run the `countdown` function. 

2. Using `countdown` as a template, write a **recursive function** `fac` that **returns** the factorial of a given number. Refrain from using **for loops** for this exercise.

### Note:
In the `fac` function, you will want the product to be increased each time the function runs, not reset. So, you might not want to define `product = 1` within your function. You might want to set the product as an initial condition for when you call the function:

```
var fac = function(num, product) {
	
	// 1. exit condition
	
	// 2. stuff
	
	// 3. call fac

}
```

Finding the factorial of 5, invoking the function with an initial product of 1:
`fac(5, 1);`  


















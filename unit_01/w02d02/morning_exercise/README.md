# W02D02 Morning Warmup

![Cat Programmer](http://s2.quickmeme.com/img/99/9903c7c14add3fd0758b7b5b80c24d48101f296f13ce34736799a82c71f61bc2.jpg)



# JAVASCRIPT ITERATORS

#####`.forEach`, `.map`, and `.reduce`

Javascript iterators are like loops. They step (or iterate) over each item in an array. Iterators perform operations according to conditions specified in a callback.

# .forEach

`.forEach` is the basic iterator, all it does is step through each item in an array.

#### EXAMPLE:

```
arr = [8, 8, 8, 8, 8, 8, 8, 8];

arr.forEach(function(n) {
	console.log(n + 1);
});

=> Prints a bunch of 9s to the console

```


##### EXERCISE:
- Log each word in `words` in upper case using `.forEach.`

```
words = ["Ho", "Chi", "Minh", "City", "was", "once", "known", "as", "Prey", "Nokor"];
```




# .map

`.map` is like `.forEach` but it returns a new array with the selections and / or transformations applied in the iterator. `.map` saves to a new array and does not alter the original array.


EXAMPLE:

```
var new_arr = arr.map(function(n) {
	return n += n / 2
});

=> [12, 12, 12, 12, 12, 12, 12, 12]
```

####EXERCISE:

```
more_words = ["Joe", "Overreats", "Eggs"];
```

- Map to a new array that stores only the first letter from each word in `more_words`.

Expected result:

```
["J", "O", "E"]
```

...

# .reduce

`.reduce` iterates over the elements in an array and smooshes them together into a single variable according to the instructions in the iterator. Like `.map`, it returns a new value and does not alter the original array.

#### EXAMPLE: 

Add together all numbers in an array:

```
new_value = arr.reduce(function(sum, n){
	return sum += n
});

=> 64
```


#### EXERCISE: 
```
arr = [8, 8, 8, 8, 8, 8, 8, 8];
```

- Return the product of the numbers in `arr`.



...

#### EXERCISE:

Using both `.map` and `.reduce`, find the total sheepCount of sheep shorn by sheep shearers at the 1623 Sheep Shearing Feast:

```
var sheepShearers = [
    {
        name: "Tim",
        age: 20,
        sheepCount: 18
    },
    {
        name: "C3PO",
        age: 200,
        sheepCount: 320
    },
    {
        name: "Cousin It",
        age: Infinity,
        sheepCount: 2900
    }
];
```

```
=> 3238
```





#### EXTRA TIME: Find a value in a given array
 - Write a function `searchArray` that takes an array and value as parameters and searches the array for the given value. If the value is in the array, return `true`, otherwise return '-1'.
```javascript
var nums = [1,2,3,4,5]
searchArray(nums, 3) => true
searchArray(nums, 6) => -1
```
Here is some starter code:
```javascript
var searchArray = function(array,value) {

};
```

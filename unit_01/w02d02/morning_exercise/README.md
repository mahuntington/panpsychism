# W02D02 Morning Warmup
![Cat Programmer](http://s2.quickmeme.com/img/99/9903c7c14add3fd0758b7b5b80c24d48101f296f13ce34736799a82c71f61bc2.jpg)

####Exercises 1: Find a value in a given array
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


#### Exercises 2: [Permutation](https://en.wikipedia.org/wiki/Permutation)

- Given two strings, write a method to decide if one is a permutation of the other

Note: If you were given this problem in an inteview, important things to ask your interviewer would be:
- Is this case sensitive (ex: is `God` different from `dog`)?
- Is whitespace significant? (for this question, the white space is not important)

```javascript
isPermutation(`cat top`, `tap pat`) => false
isPermutation(`cat top`, `tot cap`) => true
```
Here is some starter code:
```javascript
var isPermutation = function(str1, str2) {

};
```

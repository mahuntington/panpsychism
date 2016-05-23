# W02D02 Morning Warmup
![Cat Programmer](https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwi5oKTs7fDMAhXHHT4KHVFEBlEQjRwIBw&url=http%3A%2F%2Fwww.troll.me%2Fmeme%2Fcomputer-expert-cat&bvm=bv.122676328,d.cWw&psig=AFQjCNFOpkl1dcFGsTlMbhFN7bRnfaZdcQ&ust=1464115591294236)

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
Is this case sensitive (ex: is `God` different from `dog`)?
Is whitespace significant? (for this question, the white space is not important)

```javascript
- isPermutation('cat top', 'tap pat`) => false
- isPermutation('cat top', `tot cap`) => true
```
Here is some starter code:
```javascript
var isPermutation = function(str1, str2) {

};
```

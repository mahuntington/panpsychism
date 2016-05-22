## SELECTED RUBY METHODS

Here are some exercises to become more acquainted with the following Ruby methods:

1. `.each`
2. `.class`
3. `.select`
4. `.reject`
5. `.flatten`
6. `.permutation.to_a` 
7. `.first`
8. `.last`
9. `.count`
10. `.reduce`
11. `.uniq`
12. `.shuffle`
13. `.each_slice`
14. `.sample`
15. `.each_cons`


### 1
Given the following array

```
arr = [["Live", "Laugh", "Love"], {hello: 'hi back'}, false, 333.333, nil, nil, ["Joy", "Joke", "Jerk"]]
```

1. Use `.each` and `.class` to print the class of each array element to the console

2. Use `.select` and `.class` to return an array of only those elements whose class is Array. http://ruby-doc.org/core-2.3.0/Enumerable.html#method-i-select

3. Use `.reject` and `.class` to return an array of only those elements whose class is not Hash. http://ruby-doc.org/core-2.3.0/Enumerable.html#method-i-reject

4. Use `.flatten` on the result of your previous `.select` operation to flatten out the array

5. Use `.permutation.to_a` on the flattened result to return all possible permutations of all the items within the inner arrays.

6. Use `.count` to get the number of those permutations.

### 2

Given the following array

```
numbers = [4, 7, 8, 7, 9, 0, 4]
```

1. Use `.permutation.to_a` and `.count` to return a count of all permutations 

2. `.select` only those permutations where the `.first` number is 7 and the `.last` number is also 7, and return a `.count` of those permutations.

3. Use `.reduce` to get the sum of the array.

4. Use `.reduce` to get the product of the array.



### 3

Given the following array

```
strings = ["Paloma", "Grits", "Ziti", "Carbohydrates", "Grits", "Corn", "Wizard_robe", "Ziti", "Corn", "Corn", "Maize"]
```

and the empty hash

```
hash = {}
```

1. Using `.each` and `.uniq`, populate the hash using the elements in the array as keys. Remember that keys must be unique, so don't include any double-ups. Set the values of those keys to "Fun" except for Maize, which is "Not Fun".


### 4

```
students =  [
							"Amber",
							"Nicole",
							"Christine",
							"Dan",
							"Ashleigh",
							"Jordan",
							"Alex",
							"Emily",
							"John",
							"Sharon",
							"Levi",
							"Pauline",
							"Masha",
							"Matt",
							"Andy",
							"Sammy",
							"Dominic",
							"Vincent",
							"Jesse",
							"Juan",
							"Josh",
							"Derek"
						];
```

1. Pretend that group projects are coming up again, and you have to split the class up into random groups of three. Use `.shuffle` and `.each_slice` to generate groups of three (there will be one remainder). http://ruby-doc.org/core-2.3.0/Enumerable.html#method-i-each_slice.

2. Use `.sample` to return a single random student to be taken to jail. http://ruby-doc.org/core-2.1.4/Array.html#method-i-sample


### 5. Make your own problem

Look into the Ruby method `.each_cons`, http://ruby-doc.org/core-2.3.0/Enumerable.html#method-i-each_cons

Make your own problem where the answer should use `.each_cons`.



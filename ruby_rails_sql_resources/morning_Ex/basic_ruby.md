# BASIC RUBY REFRESHER

## Strings

Perform the following tasks using string methods:

1. Reverse the string, `"sarcophagus"`.
2. Return the substring, `"undulating"`, from the string, `"Are these artichokes undulating?"`.
3. Convert the string, `"90210"`, to an integer.
4. Capitalize the letter `"m"` in the string `"meeseeks"`.
5. Capitalize all of the letters in the string `"Capitalize all of the letters in the string"`.
  

## Arrays and Loops

##### NOTES

`.each` and `.map`

You can use `.each` as a basic loop for pushing values into arrays or sending out transforms without altering the original array. For example, given the following dataset:

```
arr1 = ["moops", "cherish the cabin"]
arr2 = []
```

`.each` for *pushing* into another array.  
Note: `<<` is the same as `.push()`
  
```
arr1.each { |item| arr2 << item.upcase }
p arr2

=> ["MOOPS", "CHERISH THE CABIN"]
```

This is the expanded version using `do` and `end` instead of curlies:  

```
arr1.each do |item|
	arr2 << item.upcase
end

=> ["MOOPS", "CHERISH THE CABIN"]
```

`.map`, by contrast, returns a transform of the dataset:

```
new_set = arr1.map { |item| item.upcase }
p new_set

=> ["MOOPS, CHERISH THE CABIN"]
```

`.each` will not do a transform:


```
new_set = arr1.each { |item| item.upcase }
p new_set
  
=> ["moops", "cherish the cabin"]
```

##### EXERCISE

Perform the following tasks using array methods (note: you might also need to use some string methods): Switch it up between `.map` and `.each` and any others you might find in the docs.

1. Given the array `numbers = [1, 3, 5, 7]`, use `map` to create a new array with each element of `numbers` multiplied by three. Do it once with `do .. end` and once with curlies.

2. Save a shuffled version of this array to a variable just to see how easy it is to do so.

3. Give the array `names = ["Joe, Matt, Thom"]` use `each` to iterate over each word and print it to the console with " is my friend and contemporary." appended. Do it once with `do .. end` and again with curlies.

4. Given the following array (of arrays):
```
sandwiches_with_costs = [["blt", 5], ["grilled cheese", 7], ["turkey_club_with_pesto", 9], ["ramenburger", 6], ["portobello and garlic aioli", 10]]
```
Create an empty hash (call it whatever you want) and then iterate over sandwiches_with_costs and add sandwich names as keys and cost amounts as values to the hash.


## Hashes

Perform the following tasks using hash methods (note: you might also need to use some string and array methods).

Given the hash:

```
breakfast_prefs = {
  juice: "orange",
  syrup: "maple",
  potatoes: "mashed with molasses",
  lettuce: "iceberg",
  protein: "GNC Pro Performance AMP Amplified Wheybolic Extreme 60™ Original",
  cups_of_coffee: 3,
  pink_slime: false
}
```

1. Return an array containing only the keys of `breakfast_prefs`.
2. Return an array containing only the values of `breakfast_prefs`.
3. Change the value of `:syrup` to `"boysenberry"`.
4. Return a hash with the key-value pairs whose value is of type string.




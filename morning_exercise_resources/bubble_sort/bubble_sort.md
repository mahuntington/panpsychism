![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: Bubble Sort <br>
Type: Exercise <br>
Creator:
    Thom Page <br>
    Course: WDIr-Panthalassa<br>
Competencies: While loops, for loops, conditionals, functions, nested loops<br>

---


# BUBBLE SORT
#### .. and nested loops


#### SORTING ALGORITHMS


A sorting algorithm is an algorithm that puts elements of a list in order. If you give the algorithm an unsorted array that looks like this:

```
[4, 3, 6, 77, 0];
```

The expected output of the sorting algorithm would return all the numbers in order:

```
[0, 3, 4, 6, 77];
```

Some commonly used sorting algorithms are `Quicksort`, `Merge Sort`, and `Bubble Sort`. 

Bubble Sort is rather inefficient and is used mostly to demonstrate the inner workings of a sorting algorithm.


#### How it works:

Bubble sort repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order. The algorithm passes through the list repeatedly until there are no more swaps occuring.

Given an unsorted input:

```
[4, 3, 6, 77, 0]
```

The algorithm will first check `4` and `3`, and if they are in the wrong order, it will swap them, giving the result:

```
[3, 4, 6, 77, 0]
```

(3 and 4 are now in order)

The algorithm will then check `4` and `6`, and if they are in the wrong order, it will swap them. Since `4` and `6` are in the correct order, they will not be swapped.

Traversing the array and doing the correct swaps is just a single pass: the entire array will likely not be sorted after a single pass. The algorithm has to do the process again and again until there are no more swaps. 

#### Directions

Write a function that will sort an array according to the rules of Bubble Sort.

**You will need a loop within a loop to solve it.**

```
var bubbleSort = function(input) {
	// sort the input
	// return the sorted result
}
```








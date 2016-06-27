![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: Prime numbers
Type: Morning Exercise<br>
Creator:
    Thom Page <br>
    Course: WDIr-Panthalassa<br>
Competencies: Functions, Loops, Conditionals

---

## PRIME NUMBERS

A Prime number is a number that is not evenly divisible by another number except 1 and itself.

To test whether a number is Prime, you only need to test as far as the **square root** of that number. This
is advisable for optimization and testing large numbers.

### STEP ONE
1. Write a function called `isPrime` that will test whether a number is Prime. The function will return true if Prime, false if not.

### STEP TWO
2. Write another function called `primes` that will print an array of Primes up to an arbitrary limit. For example, if you invoke your function with `primes(100)`, it will print all the Prime numbers up to and including 100. 

This function can call on the previous `isPrime` function.

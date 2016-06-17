![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: 100 Goblins <br>
Type: Extended Morning Exercise <br>
Creator: Microsoft <br>
Adapted by: Thom Page <br>
Course: WDIr-Panthalassa<br>
Competencies: Nested loops

---


# 100 GOBLINS

There are 100 Goblins suffering from acid reflux, and you are a sadistic Goblin doctor with the cure. You want to torture the Goblins with a little game.  

You line up all the Goblins and give each of them the cure in turn, all 100 Goblins.  

But then you start from the beginning of the line and go over them a second time, removing the cure for every second Goblin, starting with the second Goblin.  
 
Then you do it a third time for every third Goblin, starting at the third Goblin: if the Goblin you now administer was previously cured, they are now uncured, and if the Goblin was uncured, they are now cured. You do it a fourth time, and go to every fourth Goblin starting with the fourth. The fifth time, you go to every fifth Goblin starting with the fifth ....  

After you have gone down the line of Goblins 100 times, which Goblins are cured at the end?

Hint: set up an array of goblins first using a datatype good for setting either *true* or *false* 
values. It's certainly *false* that all the all goblins are cured at the beginning . . . .

### REQUIREMENTS:
1. Use for loops for this exercise! You will eventually need a loop within a loop.

2. Once you have your goblins array populated with the final *true* and *false* values after having gone through the entire process of curing and uncuring, translate your final array to another array of numerical values of the **cured Goblins only**. If the first Goblin is cured, the first number in the array will be 1 (not zero). If the 100th Goblin is cured, the last number in the array will be 100. The expected output (solution) will be a list of all the perfect squares up to and including 100.

```
=> [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```
![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: Shell game<br>
Type: Homework<br>
Duration: Weekend <br>
Creator: Kristyn Bryan <br>
Adapted by: Thom Page
Course: WDIr-Panthalassa<br>
Competencies: jQuery, JS game logic, CSS transitions<br>

---



# Let's Create a Shell Game!

![Shell game and cat](https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2L-3nfFsTsQtoeeN4XGFheORdbLpmAH6eU3lbpeYSK9AR1EGn)

## How to play the game
In the shell game, three or more identical containers (which may be cups, shells, coconut shells, etc.) are placed face-down on a surface. 
A small ball or coin is placed beneath one of these containers so that it cannot be seen, and they are then shuffled by the operator in plain view. 
One or more players are invited to bet on which container holds the ball . 
Where the game is played honestly, the operator can win if he shuffles the containers in a way which the player cannot follow.
See this website for an example: http://mistupid.com/games/shellgame.htm



* Generate your shells with jQuery. Make them inside a loop.
* Put a start button the page. When the button is pressed
	* a random shell will get the ball and display it.
	* The start button will now display 'shuffle'. Functionally, it will now be a shuffle button.
* When the shuffle button is pressed
	* Without yet using any animations, the positions of the shells on the page should randomize. Display the shells in their new order.
	* The ball will not be displayed.
* when the user clicks on the correct shell
	* The ball will reappear
	* The shuffle button will change to a 'reset' button that will set the game back to its original state when clicked


	
	
## Remove cheating
Make it so the user cannot check in the 'Elements' tab to see which shell has the ball after they have been shuffled.


## Hints, Tips and Tricks

Here are some hints, tips and tricks that may or may not be applicable to you or the way you design your game, but they might help:

* Remember this crucial difference:
	* `$('div')` will _select_ all `div`s on the page
	* `$('<div>')` will _create_ a new `div`  
<br>
* To stop an element from shifting down when text is added, try
setting `overflow: hidden` to the css of that element.

* To stop inline-block elements from shifting due to the browser window size, try setting a `min-width` on the parent

* You can change the css of an element with jQuery `.css()`
http://www.w3schools.com/jquery/jquery_css.asp

* To check if an element has a particular `id`, look into jQuery `.is()`

* If you want a variable to be globally available to changes within your functions, define it first outside of your functions (it doesn't need to have a value)

```
var someNumber;

var giveValue = function() {
	someNumber = 1;	
}
```

* You can use variables to get an element with jQuery.

```
var someNumber = 1;

$('#' + someNumber)

// gets the element with an id of 1
```

* If you need a function that will shuffle an array, it's fine to borrow one from StackOverflow. Alternatively, you could look into including the `underscore` library and using its shuffle method in your program

* To make your cursor a pointer when you hover over an element, set its css to `cursor: pointer`.

* You can find the index of jQuery list items with `.index()`






## User Stories

1. The user should be able to see where the 'ball' is originally.
2. The user should be able to start the shuffling sequence and follow (even if it's difficult) the card/coconut/cup. The shuffling should be random.
3. The user should be able to then click a card, and the game should tell them whether or not they picked the correct one.
4. the user should be able to reset game and do it all over again. 

## How do we get the 'shuffle' animation?

One of the simpler animation effects is the fade. If you fade out two cards and then fade them back in, you can create a way to visualize two cards switching. 

A harder method (and easier on the eyes) is using transitions. Think about the location you want for each card and how to 'swap' these locations. 

## Bonuses and Extras

- The user should be able to see how many times s/he has won.
- The amount of times the cards swap on a shuffle is randomized.
- The more times the user completes the game, the harder it gets (the faster the shuffle).

## Before you start writing code...

1. Write out the objects you think you'll need.
2. For each object, list its responsiblities.  What data will it need to store?  What methods will it need?
3. List all possible object-to-object interactions.
4. Draw a 'paper prototype' of the DOM model for your game.  You'll use this to build it.
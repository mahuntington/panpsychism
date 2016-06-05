![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: Shell game with jQuery and CSS transforms<br>
Type: Homework<br>
Duration: Weekend <br>
Adapted by: Thom Page<br>
Course: WDIr-Panthalassa<br>
Competencies: jQuery, JS game logic, CSS transitions<br>

---



# Shell Game with jQuery and CSS Transforms

![Shell game and cat](http://mousebreath.com/wp-content/uploads/2011/07/shell-game-cat.jpg)

## How to play the game
In the shell game, three or more identical containers (which may be cups, shells, coconut shells, etc.) are placed face-down on a surface. 
A small ball or coin is placed beneath one of these containers so that it cannot be seen, and they are then shuffled by the operator in plain view. 
One or more players are invited to bet on which container holds the ball. 
Where the game is played honestly, the operator can win if he shuffles the containers in a way which the player cannot follow.

Here is a short video using _brains_ instead of shells: https://www.youtube.com/watch?v=N6UNLHZgwfs

Here is a video of a much simpler version of the _brain_ game: https://www.youtube.com/watch?v=8uoDRHByKM4

Your game should at least be as functional as the simpler version of the _brain_ game. 

Here is a playable shell game with betting: http://mistupid.com/games/shellgame.htm


## User Stories

1. The user should be able to see where the 'ball' is originally.
2. The user should be able to start the shuffling sequence and follow (even if it's difficult) the card/coconut/cup/brain. The shuffling should be random.
3. The user should be able to then click the element, and the game should tell them whether or not they picked the correct one.
4. the user should be able to reset game and do it all over again. 


## STEPS AND COMMITS
There is no starter code for this homework, you are required to make the shell game from scratch.


* Set up your files and generate your elements: shells, coconuts, cups, or brains, etc. with jQuery. Make them inside a loop.
<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 1: generated elements".
<hr>

* Put a start button the page. When the button is pressed
	* a random element will get the item (ball, coin, idea, etc.) and display it.
	* The start button will now display 'shuffle'.
	
<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 2: on start button click, a random element displays the item".
<hr>
		
* When the shuffle button is pressed
	* The positions of the elements on the page should change places in random order. Display the elements in their new order.
	* The item will not be displayed.
<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 3: on shuffle button click, elements will shuffle".
<hr>	

* when the user clicks on the correct element
	* The item will reappear
	* The shuffle button will now display 'reset'

<hr>	
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 4: correct element click works".
<hr>

* When the reset button is clicked
	* The game will return to its original state, and the shuffle button will now display 'start'
	
<hr>	
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 5: reset button works".
<hr>

* Make it so the shuffle happens multiple times, and not just once, when the `shuffle` button is clicked

<hr>	
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 6: shuffles more than once".
<hr>	


## Bonuses and Extras
- Make it so the user cannot check in the 'Elements' tab to see which element has the item after they have been shuffled.
<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 7: user cannot cheat".
<hr>
- The user should be able to see how many times s/he has won.
<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 8: user can see number of wins".
<hr>

- When the user has made an attempt at selecting the right element, turn off the click handler for the elements so the user can cannot keep trying to guess correctly.
<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 9: click handler for elements turned off".
<hr>

- The amount of times the elements swap on a shuffle is randomized.
<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 10: shuffles a random number of times".
<hr>
- The more times the user wins the game, the harder it gets (the faster the shuffle).
<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 11: shuffle gets faster when the user wins".
<hr>
	

## Animations

There are many ways to go about animating your shells/cups/brains in your game. 

#### Fade
One of the simpler animation effects is the fade. If you fade out two elements and then fade them back in, you can create a way to visualize two elements switching. 

#### Transforms
A harder method is using transforms. Think about the location you want for each element and how to 'swap' these locations. There are many ways to go about this, and it's up to you to problem-solve and explore.

Make sure you define the `transition` parameters or you won't see the `transform` transitioning.

* You could shuffle an element by setting a class on that element that has a transform property.

**ADVANCED**<br>
You could move things around by setting css transform values using `jQuery.css()`
More on this in **Hints, Tips and Tricks** below.


## Hints, Tips and Tricks

Here are some hints, tips and tricks that may or may not be applicable to you or the way you design your game, but they might help. Do not look at these if you haven't planned your game--they apply to many different ways of achieving the goal, and you might suffer from information overload. Scan through them to see if there anything helpful to your particular case.

* Remember this crucial difference:
	* `$('div')` will _select_ all `div`s on the page
	* `$('<div>')` will _create_ a new `div`  
<br>
* To stop an element from shifting down when text is added, try setting `overflow: hidden` to the css of that element.

* To stop inline-block elements from shifting due to the browser window size, try setting a `min-width` on the parent

* To make your cursor a pointer when you hover over an element, set its css to `cursor: pointer`.

* You can change the css of an element with jQuery `.css()`
http://www.w3schools.com/jquery/jquery_css.asp

* If you decide to shuffle elements by assigning classes that have transforms, you might run into problems when the user clicks to check for the correct element **if those elements also have an id**. In this case, think about how to design your game without ids. If you do decide to shuffle elements by assigning classes that have transforms, you shouldn't need to do any additional changing on the transforms using `jQuery.css()`

* To check if an element has a particular `id`, look into jQuery `.is()`

* You can use variables to get an element with jQuery.

```
var someNumber = 1;

$('#' + someNumber)

// gets the element with an id of 1
```


* If you want a variable to be globally available to changes within your functions, define it first outside of your functions (it doesn't need to have a value)

```
var someNumber;

var giveValue = function() {
	someNumber = 1;	
}
```

* You can set up transforms using jQuery.css()

```
$(element).css({transform: 'translate(' + value + 'px)'});
```

* You can also use jQuery.css() to trigger css keyframes by giving the element the applicable `animation-name`

```
$(element).css({ animationName: 'name_of_animation' });
```

* You can set multiple types of transforms to happen at the same time on an element. But, you cannot pile on or add more transforms to happen at the same time in different places in your code. If you want to add multiple transforms from different sources (say for example you want a regular transform to happen, AND you want a keyframe transform at the same time on the same element), you could set one of the transforms to happen on a **child** of the element instead.

* If you need a function that will shuffle an array (not recommended), it's fine to borrow one from StackOverflow. Alternatively, you could look into including the `underscore` library and using its shuffle method in your program. 

* Remember, you can also select a random array index with `array[Math.floor(Math.random() * array.length)]`, and you can remove array elements with `.splice()`

* You can find the index of jQuery list items with `.index()`

#### Looping animations

If using keyframes, look into the `animation-iteration-count` property. You might be able to use this depending on how you intend to move your elements.

If you are using `jQuery.css` to add transforms and you try to repeat transforms in a regular **for loop**, it might not work so well. The reason is that the loop is so quick that it will end before even the first transform has finished.

Again, there are many ways to accomplish looping transforms.

* Your best bet using Google. 

* There is an eventListener that will wait for an animation to finish (and you could then repeat the animation)

* Or try using a setTimeout to repeat the transforms, with the second parameter slightly longer than the duration of the transform:

```
var transformLoop = setTimeout(someFunction, 501);
```

Then you can stop the setTimeout using clearTimeout:

```
clearTimeout(transformLoop);
```

* Look into `jQuery.delay()`
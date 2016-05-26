# Memory!

Tonight you are going to build the game called: [Memory](https://en.wikipedia.org/wiki/Concentration_(game)). We have provided you with a few starter files. You will load the `index.html` in your browser, and write the code in your `app.js` file to make your cards and get your game to work.

Take it one step at a time. Follow these instructions to help get you going.


### Starter code

We have provided some functions and prompts for you in the `app.js`. Note that we have set up the start button with a click event: when the start button is pressed, the `start()` function is invoked, setting off the chain events for the rest of the game. Test that the click event works by pressing the start button and confirming the console.log in your Chrome console.

We have also provided a `shuffle()` function. You do not need to change the shuffle function, you can simply use it later to shuffle your tiles array.


### For the game, you will need

#### Data

- an array of ten tiles
	- your ten 'tiles' will represent the letter values that will be displayed on each DOM tile. eg. ['A', 'A', 'B', 'B', etc.]

**Commit 1** <br>
<hr>
The commit message should read: <br>
"Commit 1: Created an array to hold my ten game tiles"
<hr>

#### Functions

- `start()`
	- shuffle the tiles array
	- then call `makeAndDisplayTiles` to build and display the gameboard

**Commit 2** <br>
<hr>
The commit message should read: <br>
"Commit 2: Created start() function"
<hr>

- `makeAndDisplayTiles()`
	- it should clear whatever text was in the `info` div from the last game that was played
	- this function should empty the container that will hold the gameboard tiles (clearing it from the previous game that was played)
	- it should create 10 new game tiles (you will want to use a loop to create these tiles)
		- give them the class 'column'
		- give them a 'data-value' attribute from each element of your tiles array. Ex: The output for an 'A' tile will look like ` <div class="column" data-value="A"></div> `
		- add the game tiles to the board
		- it should add click events to each of the gameboard tiles
			- Each click event should call the makePlay function passing it the tile that was clicked. Strong hint: the tile that was clicked is `this` tile . . . Can you pass `this` as a parameter to the makePlay function? Test it out.


**Commit 3** <br>
<hr>
The commit message should read: <br>
"Commit 3: Created makeAndDisplayTiles() function"
<hr>

- `makePlay(tile)`
	- this function should set the text of the current clicked tile to the value stored in the data attribute
	- it should add a class of 'clicked' to the tile (we will use this to check the number of clicked tiles later)
	- if the number of clicked tiles is 2, then it should check for a match (hint: You might want to make an array to hold your clicked tiles. Check the length of the array of clicked items... if it's 2, you're good to go!).

**Commit 4** <br>
<hr>
The commit message should read: <br>
"Commit 4: Created makePlay(tile)"
<hr>

- `checkForMatch()`
	- write the code for this function _inside_ the `setTimeout`! The setTimeout is there to delay the disappearance of the cards.
	- this should retrieve the data-value of the two clicked tiles
	- if they are a match
		- the 'clicked' class should be removed from the tiles
		- the 'found' class should be added to the tiles
		- should check for a win
	- if no match is found
		- the text of the clicked cards should be set back to empty
		- the clicked class should be removed


**Commit 5** <br>
<hr>
The commit message should read: <br>
"Commit 5: Created checkForMatch() function"
<hr>

*After you have the preceding functions working:*

- `checkForWin()`
	- if the number of found tiles is 10
		- add a winning message to the info div
		- remove the found class
		- add a won class

**Commit 6** <br>
<hr>
The commit message should read: <br>
"Commit 6: Created checkForWin() function"
<hr>


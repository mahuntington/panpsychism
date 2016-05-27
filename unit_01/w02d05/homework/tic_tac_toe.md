![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: Tic Tac Toe<br>
Type: Homework<br>
Duration: Weekend <br>
Creator:
    J. Nappy<br>
Adapted by: 
    Thom Page <br>
    Course: WDIr-Panthalassa<br>
Competencies: JS DOM manipulation, loops, conditionals, functions, game logic<br>

---

# Tic Tac Toe

## Introduction

So far, we have been writing functions, working with
loops, and writing conditionals, and we also learned about how HTML elements are styled and behave in the DOM, including how to make elements responsive.

For your weekend homework, you'll be building a tic tac toe game in HTML, CSS, and writing the logic for the game in JavaScript.

It is up to you to figure out how each piece should work. Pseudo-code the problems, talk it out with a rubber duck, research the problems, and above all ... talk to your classmates! 

Think about your program design, when and if you should use functions, loops, conditionals, etc. Your code should be modular and extensible.

And remember, at the end of this process your code should be your own.

## Requirements

- The gameboard should be responsive, both horizontally and vertically
- A user should be able to click on different squares to make a move
- Each click will alternate between marking an `X` and `O` in turn
- A cell should not be able to be replayed once marked
- Add a reset button that will clear the contents of the board

---

## Directions

 - Construct an `index.html` to be your starting point on this
 project. Add your necessary HTML tags, including `script` and
 `link` tags to link to your JavaScript and CSS, respectively.

 - Before you even start working with JavaScript, construct the
 gameboard. The gameboard page should include the 3x3 grid. Using `id` and `class` on clickable
 elements will help you wire this up in JavaScript afterwards.
 
 - Using what you know about responsive design, make sure the gameboard will resize with the browser window. The board can skew if you like.
 
 - Make your board look nice! Try to use at least one of the advanced CSS pseudo selectors. But be careful! Don't get sucked in to tinkering with the look of your board for too long . . . 
 
<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 1. Constructed responsive gameboard".
<hr>

 - JavaScript portion will be next:

   * Locate the element or elements first to use within your app. Think about using `document.getElementById`, `document.getElementsByClassName` or something similar to locate your target elements. Try this in your console to make sure your selection works.

   * After finding the elements, start writing logic to listen for `click` events on those elements.

   * You will also need a variable to keep track of moves - this will be used to indicate whether or not to draw an `X` or an `O`.
      
   * Display an X or an O inside the clicked element, depending on whose move it is. Note: to make the X or O responsive to the size of the board, look into using images or icon fonts instead of text.


<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 2. Board is clickable and tracks moves".
<hr>


- Make it so that nothing happens if an already-clicked square is clicked
- Hint: check if the className _includes_ what you are looking for

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 3. Clicked squares do not respond to additional clicks".
<hr>


- This is the tricky part: Determine a set of winning combinations. Check those combinations on the board contents after every move.

- There are many ways to do this, and figuring out how to do it is challenging. The important part is that you try to work your way through the problem, even if it doesn't work in your game. Give it your best shot, and have fun.

 

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 4. Established a set of winning conditions".
<hr>

- After the necessary moves have been played, stop the game and display the winner if one player ends up winning with three in a row


<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 5. Game is winnable by X or O and indicates whether X or O won".
<hr>

- When the user clicks a 'reset' button, they can play a fresh game

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 6. Player can reset the game".
<hr>


  
** BONUS **
- Write an AI that will play against you

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 7000. Game is playable against AI".
<hr>



#### Deliverable

Here are some screenshots to give you a rough guide of what you'll be creating.  Feel free to get creative with how you style your interface.

![Screen-shot](https://i.imgur.com/kz2L9f9.png)
![Screen-shot](https://i.imgur.com/d8lFshD.png)



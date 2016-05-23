![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: Tic Tac Toe<br>
Type: Homework<br>
Duration: Weekend <br>
Creator:
    Thom Page <br>
    Course: WDIr-Panthalassa<br>
Competencies: JS DOM manipulation, loops, conditionals, functions<br>

---

# Tic Tac Toe

## Introduction

So far, we have been writing functions, working with
loops, and writing conditionals. We also learned about how HTML elements are styled and behave in the DOM, including how to make elements responsive.

For your weekdend homework, you'll be building a tic tac toe game in HTML, CSS, and writing the logic for the game in JavaScript.

## Exercise

#### Requirements

- The gameboard should be responsive, both horizontally and vertically
- A user should be able to click on different squares to make a move
- Each click will alternate between marking an `X` and `O` in turn
- Upon marking of an individual cell, use JavaScript to add a class to each cell to display separate colors
- A cell should not be able to be replayed once marked
- Add a reset button that will clear the contents of the board

---

 - Construct an `index.html` to be your starting point on this
 project. Add your necessary HTML tags, including `script` and
 `link` tags to link to your JavaScript and CSS, respectively.

 - Before you even start working with JavaScript, construct the
 gameboard. The gameboard page should include the 3x3 grid and at minimum, a reset button. Using `id` and `class` on clickable
 elements will help you wire this up in JavaScript afterwards.
 
<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 1. Constructed gameboard".
<hr>

 - JavaScript portion will be next:

   * Locate the element first to use it within your app. Think about
      using `document.getElementById`, `document.getElementsByClassName` or something similar to locate your target elements. Try this in your console to make sure your selection works.

   * After finding the elements, start writing logic to listen for
      `click` events on those elements.

   * You will also need a variable to keep track of moves - this
      will be used to indicate whether or not to draw an `X` or an `O`.


- Display a message to indicate which turn is about to be played


<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 2. Board is clickable and tracks moves".
<hr>

- Determine a set of winning combinations. Check those
  combinations on the board contents after every move.
  
    <hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 3. Winning conditions established".
<hr>


- After the necessary moves have been played, stop the game and display the
  winner if one player ends up winning with three in a row
- When the user clicks the 'reset' button, they can play a fresh game

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 4. Game is complete".
<hr>

  
** BONUS **
- Write an AI that will play against you and make random moves.

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 5. Game is playable against AI".
<hr>



#### Deliverable

Here are some screenshots to give you a rough guide of what you'll be creating.  Feel free to get creative with how you style your interface.

![Screen-shot](https://i.imgur.com/kz2L9f9.png)
![Screen-shot](https://i.imgur.com/d8lFshD.png)



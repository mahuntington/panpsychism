# WHAT TO DO ?

![cat to do list](http://www.funcatpictures.com/wp-content/uploads/2014/08/funny-cat-pictrues-to-do-list.jpg)


## To-Do List
Build a To-Do list app with two columns: one for things to do, and another for things that have been done. Use jQuery to give your app functionality.

### Starter code
You have the choice to use this started code OR to start from scratch. The starter code that we've provided is just some CSS and HTML so that you can see some elements on the page. The .js file is empty. If you want to focus straight on jQuery practice portion, feel free to use the starter code. If you don't want to use the starter code and want to practice making an application from scratch, that's okay too, but it will take more time. Budget accordingly!

### User Stories

#####In the starter code (if you start from scratch, you'll need to write this on your own):
1. the user should see two columns and an input field.
2. the user should be able to type a to-do item into an input box.
3. the user should be able to click an `add` button next to this input. 

##### Stuff for you to do:
1. When the user clicks the `add` button, the input box value should be added to his/her to-do list (hint: we did something similar with adding items to differnt lists in LOTR).
3. The user should be able to see all of the todos that they have created.
5. The user should be able to click 'done' on a todo and have it move to the completed column.
4. The user should be able to delete a to-do item from the completed list.

### Add the jQuery Library

First, add the jQuery library to your project. Go to https://code.jquery.com/ and copy the url of a minified jQuery. Use this url in a script tag in your .html file. Alternatively, go to https://cdnjs.com/ and search for jQuery.

**Commit 1** <br>
<hr>
The commit message should read: <br>
"To Do - Commit 1: Added the jQuery library to my .html"
<hr>

### Input Boxes

Input boxes are usually submitted through forms. However, as you learned in class, the default behavior of the form can be prevented. You will need to prevent the default behavior in order to do this. jQuery has a very useful function that gets whatever the user typed into the input box calls '.val()'. This will be needed to get the text that the user submits when the button (or the enter button) is pressed. 

For this to-do list, you can avoid using an entire form and just have one simple text input.  You will need to do one of two things:
- Create a button and listen for clicks on the the button to add to the todo list.
- Set a [`keydown` event](https://api.jquery.com/keydown/) on the `input`, and if keycode equals `13` (enter key), then add it to the to-do list.

**Commit 2** <br>
<hr>
The commit message should read: <br>
"To Do - Commit 2: Created input for user to submit their to-do"
<hr>

### Window Onload

Think about what the user will be doing when they are interacting with your to-do list. The user makes an action (adds text, presses delete, etc.), you run some code in order to process this action, the results of the action are rendered to the page, and then you wait until another action takes place.

Include any code that affects the DOM inside a window onload. jQuery has a shorthand for window onload:

```
$(function() {
	
	// DOM stuff

})
```

Try it out.


**Commit 3** <br>
<hr>
The commit message should read: <br>
"To Do - Commit 3: Added jQuery's version of window onload function to my code."
<hr>

### Make it function
Add the functionality that you will need to get your to-do list functioning in the way that you need to meet the needs in the user stories above.

**Commit 4** <br>
<hr>
The commit message should read: <br>
"To Do - Commit 4: Added the functions to meet the needs in the user stories"
<hr>

### Make it look pretty
Use the CSS knowledge that you've gained over the past few weeks. Feel free to use a CSS framework. In addition, think about icons or elements that you can use.

**Commit 5** <br>
<hr>
The commit message should read: <br>
"To Do - Commit 5: Added CSS to the To-Do list"
<hr>

### Stretch Goal
The browser has something called [local storage](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage). This allows us to cache data in the browser. Using local storage, make this application remember the to-dos that have already been entered in, even if the page is closed.

**Commit 6** <br>
<hr>
The commit message should read: <br>
"To Do - Commit 6: Added local storage"
<hr>

### jQuery cheat sheet examples

- this: `$(this)`

- create element: `$('<div>')`, `$('<p>')`, etc.

- select all elements of type: `$('div')`, `$('p')`, etc.

- ^^ The two commands above are very similar but they do completely different things! 

- you can get the body of the document with: `$('body')`

- get element by id: `$('#idName')`

- get elements by class: `$('.className')`

- set id on element: `jQueryElement.attr('id', 'idName')`

- set class on element `jQueryElement.addClass('className')`

- click listener: `jQueryElement.click( function )`

- get value from input box after click: `$('#idName').val()`

- append elements: `jQueryElement.append( //stuff )`

- prepend elements: `jQueryElement.prepend( // stuff )`

- remove elements: `jQueryElement.remove()`

- set text inside element: `jQueryElement.text("some text")`

- set html inside element: `jQueryElement.html("<some html>")`

- check if element has a class: `jQueryElement.hassClass('.someClass')`

- set a css property on an element: `jQueryElement.css('property', 'value')`

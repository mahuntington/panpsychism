# WHAT TO DO ?

![cat to do list](http://www.funcatpictures.com/wp-content/uploads/2014/08/funny-cat-pictrues-to-do-list.jpg)


## To-Do List
Build a To-Do list app with two columns: one for things to do, and another for things that have been done. Use jQuery to give your app functionality.

### Starter code
To get straight to the jQuery portion of the homework, feel free to use the starter code and fill in the javascript. You can make the page look nice afterwards. If you don't want to use the starter code and want to practise page layout, or just layout your own to do app from scratch, that's cool too, but it will take more time. Budget accordingly!

### User Stories

#####In the starter code:
1. the user should see two columns and an input field.
2. the user should be able to type a to-do item into an input box.
3. the user should be able to click an `add` button next to this input. 

##### Stuff for you to do:
1. When the user clicks the `add` button, the input box value should be added to his/her to-do list.
3. The user should be able to see all of the todos that they have created.
5. The user should be able to click 'done' on a todo and have it move to the completed column.
4. The user should be able to delete a to-do item from the completed list.

Hint: jQuery has a useful function that gets whatever the user typed into the input box called `.val()`. 


### General Flow

First, add the jQuery library to your project. Go to https://code.jquery.com/ and copy the url of a minified jQuery. Use this url in a script tag. Alternatively, go to https://cdnjs.com/ and search for jQuery.

Include any code that affects the DOM inside a window onload. jQuery has a shorthand for window onload:

```
$(function() {
	
	// DOM stuff

})
```

Try it out.

Remember the general flow of what is happening. The user makes an action, you run some code in order to process this action, the results of the action are rendered to the page, and then you wait until another action takes place.

### Make it look pretty
Use the CSS knowledge that you've gained over the past few weeks. In addition, think about icons or elements that you can use.


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





### Super Super Bonus
The browser has something called [local storage](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage). This allows us to cache data in the browser. Using local storage, make this application remember the to-dos that have already been entered in, even if the page is closed.

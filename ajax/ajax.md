## AJAX

### After this you will be able to:
  - use jquery ajax to make a get request

## Intro / Framing
  - **Intro**:
    today we'l learn a new way to make http requests. We've already seen: browser and curl requests.
    today we'll be seeing a different kind of browser request, one that isn't tied to the request response re-render cycle we're used to in the browser
    we **can** make requests from the browser, using javascript, without refreshing the page or having it rerender
  - **Context**:
    we are adding another layer of complexity, in that we are now going to make requests more and more from javascript
    what does this allwo us to do?

    - write a complex application that deals with it's data from the server transparent to the user
    - use your server less and the user's computer more
    - separation of concerns - back and front end
    - faster response times with smaller data

    - what are we losing?

      - The back and refresh button are rendered useless: You don't get some default browser behavior.

      - Javascript can be disabled: You can't know for sure what your users are up to.

      - You have to consider the UX even more: You can't rely on the default browser behavior


  - **Specific**:
    AJAX is current standard (besides websockets) for communicating directly with a front-end application written in javascript that runs in the browser.
    If we want to learn about applications in the browser, we have to know about AJAX.
  - **How**:
    We'll look at some examples of how to use the JQuery ajax functionality and what it is doing under the hood. Then you will write some JQuery ajax code.


## Setup

While we're still learning the ins-and-outs of building APIs, lets use an already-made API for today. We'll use on that works a lot like Mongo and Express and comes with RESTful resources out of the box.

That handy thing lives at https://api.doughnuts.ga/doughnuts – it's a simple dummy data service that'll let us do GETs & POSTs quickly. You can quickly check out https://www.doughnuts.ga/ to see what it's about.

__Make a simple html and js file__
```html
<html>
  <head>
  </head>
  <body>
    <script src="foo.js"/>
  </body>
</html>
```
```javascript
console.log("works");
```

## GET Requests

####Vanilla JavaScript

Open up your browser and the console and follow along.   We're gonna start with old-school JavaScript, so you can see how it works without any libraries.

```js
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.doughnuts.ga/doughnuts', true);

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      var resp = request.responseText;
      console.log(resp);
    } else {
      // We reached our target server, but it returned an error
      console.log('Uh oh, an error on the server side');
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.log('Something went wrong with the client side.');
  };

  request.send();
```

Let's walk through this for a second.

According to the documentation, `request.open` takes 3 arguments - `method`,`url`, and `async`.

Method matches our HTTP verb, URL is obvious, and async is just asking if it should perform the function asynchronously - by now, you should have a good idea about what the means.

Then, of course, we've got a function that runs if the requests works, and another if it doesn't. Simple `console.log` for now.

Finally, we send our request and see what happens. In this instance, we get back an array of doughnuts.

#### Exercise: vanilla javascript ajax

#### Demo: HTTP requests: envelopes and applications: Sending Cats
![cats](cats.jpg)

##### A get request
- One table is the client computer
- One table is the server computer
- A request is made. The browser addresses an envelope
- It is handed to a netowrk program. 
- It leaves the table and is passed to the server
- The network program at the server recieves it
- The network program hands the envelope to the program running on the addressed port
- The server looks at the outside of the envelope
- If it is a post, the server opens the envelope
- The server processes the request and addresses a new envelope
- The server puts something in the envelope
- THe server hands the envelope to the network program
- The envelope goes back to the client computer
- The network program hands the envelope to the browser

##### A get request that details DNS
- before the envelope travels to the server, the browser sends a postcard to the DNS server, asking to resolve the domain name to an IP address

##### A get request that details TCP
- before the network program sends the envelope the envelope is numbered and torn into little pieces

##### A post request
- the browser puts something in the envelope before it is handed to the browser

##### A browser recieves a response and interprets it
- some html text gets interpreted, including `<img>` and `<link>` and `<script>` tags

#### jQuery GET Requests

While it's good to have seen the straight old-school Vanilla JS way of doing it, we've got a lot of libraries these days that are designed to get you there faster - jQuery is one of those libraries.

Since we've already included jQuery in our HTML's head, let's try doing the same AJAX GET request with jQuery, together.


```js
  $.get('https://api.doughnuts.ga/doughnuts', function( data, textStatus, jqXHR ){
    console.log( "yay" );
  });
```

### Or a little more programmatically now

```js
$.get( "https://api.doughnuts.ga/doughnuts")
  .done(function( data, textStatus, jqXHR ){
    console.log( "yay" );
  })
  .fail(function(jqXHR, textStatus, errorThrown) {
    console.log("boo",a,b);
  });
```

### Exercise: 30 minutes
__ajax practice:__
- create a new html and js file, link them together using a `<script>` tag
- make an ajax query to the ga donuts API: `https://api.doughnuts.ga/doughnuts`
- take that data returned `data` param passed into the callback function, and output that data to the DOM
- BONUS: Use DOM manipulation to output the result of your query ( `data` ) to the DOM in a formatted matter- use a `<ul>` with `<li>` elements for each donut
- BONUS BONUS: Style your list, add any more div tags or what not you need to get it to look good. 


#### Asynchronous:
Given:
```javascript
$('#foo').click(function(event){
  console.log('clicked');
});
```
How is that similar to this:
```javascript
$.get("https://api.doughnuts.ga/doughnuts", function(data, textStatus, jqXHR){
  console.log(data);
});
```
And how is that similar to this:
```javascript
app.get('/', function(req, res) {
  console.log("recieved request");
});
```
#### Back to express:

##### How to serve static files in express:
```
app.use(express.static('public'));
```
- express will serve any files that are in a directory called `public`
- we can use this to serve our static files

### Exercise 2 AJAX + express.js: 30 minutes
__ajax practice:__
- create an express app:
  - use `app.use(express.static('public'));` and make sure that you can make a get request and that your app will serve an html file 
  - create a `users` route that will respond with a (fake) JSON object

- create an html file and javascript file: (both of these files go in the public directory)
  - that html file has a `<script>` tag- it will look like this: `<script src="app.js">` ( create a file called `app.js` in your public directory ) 
  - make a `<button>` in your html file
  - set a click event on this button
  - when this button is clicked, do an ajax call
  - this ajax call will make a request to your own express app- 
  - the url of your ajax request can be 'relative': (you don't need `localhost`)
  
Run your app:
- Request the html file in the public directory through your express server: `http://localhost:3000/index.html`
- Your HTML / JS file will make an AJAX request to your route (when you click the button)


```
$.get("/users", function(data, textStatus, jqXHR){
  console.log(data);
});
```

```
app.get('/users', function( req, res ){
  // make a fake users object
  var users = ............. //<== javascript goes here

  res.send(  users );
});
```
-BONUS: create a series of routes:
  - `fruits/:name` (for example: `http://localhost/fruits/apple`) will send back a JSON object with a random price that looks like this: `{ apple: '$300' }`
  - create routes for `liquor` and `socks`
  
### Conclusion:
- we are now only using GET requests, (no POST or PUT or DELETE yet) but we are making these requests without refreshing the page, and now we can use javascript to program the behavior of our app after we get back the info from the server. 
- we've established this pattern that we request some data that lives on the server and we use javascript to decide what to show to the user. We can build a greater level of interactivity with JS then we can with just HTML / HTTP request/response.
- this is the pattern we'll be using for the rest of the course, with a growing level of complexity, until we get back to a level of complexity greater that what we were deaing with in rails. 

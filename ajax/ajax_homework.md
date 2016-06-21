# AJAX and JSON

![ajax](https://i.ytimg.com/vi/Ga_vm0t4a9s/hqdefault.jpg)


AJAX is a way to use Javacript to make a request to a server. So far you have seen GET requests made from the browser (url bar) and from cURL, but we can make any kind of request in our Javascript by using AJAX. 

AJAX is an acronym for Asynchronous JSON and XML. 

We will be using AJAX to get JSON data either from a remote server route that serves JSON and/or from our own routes that server JSON. With AJAX we can grab that JSON, then, you can do whatever you like with that data, including rendering it on a page.


## 1. AJAX REQUESTS

####1. Go to NYC Open Data

Go to NYC Open Data and query the server for all the subway stations in the network (remember I showed this on Tuesday). 

From here: (https://data.cityofnewyork.us/Transportation/Subway-Stations/arq3-7z49) , click on Export and ask for JSON. Copy the url from the url bar but remove the `?accessType=DOWNLOAD` query from your url copy.

Your url should look like this:
`https://data.cityofnewyork.us/api/views/kk4q-3rt2/rows.json`

Set up your basic javascript environment-- *not in Node* -- just a basic **index** and **app.js**

In your app.js, make an ajax request to your NYC Open Data url and just console.log the data you get back.

Look at Akira's lesson for the complete version of an ajax request. You will need jQuery to make the request from your app.js. The simplest version of a request will look like this:

```
$.ajax({ 
	url: 'some_url' 
}). done(function (result) {
	// do something with result
})
       
```

You can iterate through that data (result) and just take the pieces you want.

####2. Iterate through the data and console.log just the name of each station and the trains that serve it.

...

####3. Make a webpage with a button. When you click that button, your program will make an ajax request and then show you a random subway station on the page(the name of station and the trains that serve it).


...


## 2. SERVING JSON FROM EXPRESS


#### 1. Initialize a new Express app 

We will require express in our `server.js` slightly differently this time:

```
var express = require('express'),
	app = express();
```

Here we use the varible `express` to grab the express module, and we declare `app` to grab an executed version of the express module. 

Remember to add a listener.


#### 2. Define some JSON data.

In your `server.js`, you can define some JSON data of your own. You don't need to put it inside a route-- it's just javascript.

Make some json data of your favorite films. You will want an array of objects for your films. Your data structure should look something like this, with a title, director, and year for your films:

```
data = {
	films: [
		{
			title: "Eraserhead",
			director: "David Lynch",
			year: 1977
		},
		{
			title: "La Notte",
			director: "Michelangelo Antonioni",
			year: 1961
		},
		{
			title: "Sanma no Aji",
			director: "Ozu Yasujiro",
			year: 1962
		}
	]
}
```

#### 3. Make a GET route for `'/api/films'`

Put your data outside of your route. Make a GET route for `'/api/films'`. Within your `'/api/films'` route, you can send all of your JSON data to the page with `res.send(data)`, or if you're feeling fancy, you can use `res.json(data)`. (It's worth looking at the docs to see what the difference is between `res.send` and `res.json`).

Start your server and go to the `localhhost:3000/api/films` route and make sure that your server is putting all your JSON to the page. 

Congratulations, you have made your first API.

In **RESTful** terms, this is your **index** route that serves all films. Now, we will make a **show** route.

#### 4. Make a GET route for `'api/films/:id'`

This route will display only a single film from your data JSON object. You will need to access `req.params.id` and match that to the index + 1 of the array of films, and `res.send` just that single object from the array.

Go to the route in the browser and make sure it displays only the object for that particular film.


## 3. ACCESSING YOUR OWN API

Before, when you accessed the NYC Open Data API, you were just using **static** files (index.html, app.js, etc), and not **server** files to do so. Now, we will make a section of our server that handles only **static** files. These are separate from **server** files. With our **static** files we can make a webpage that can pull from our own API.

#### 1. Setting up static files

Make a folder in the root of your project called 'public'. This is where all your static files will live. This is similar to the assets folder in Rails.

You don't need an npm package to serve static files, you can just include the snippet in your server.js:

```
app.use(express.static('public'));
```

This tell Express that there is a folder called 'public' where all your static files are stored. In the public folder, make an: `index.html`, `app.js` and link them together with a `script` tag. You can also put a `style.css` in here. You don't need anything in them just now. First, we want to tell express which route to go to send us the static assets. 

When you now go to your **root** route in the browser, Express will serve index.html. It just knows to look in the public folder for your static assets and make them available to the root.

##### NOTE:

**If** your app cannot GET from the root in your browser (if your html file is not called 'index.html' it might not like it), make a GET root route and res.send your html file. Example:

```
app.get('/', function(req, res) {
	res.send('somefile.html')
})
```

#### 2. Make a webpage that accesses your own API

Now you can access your own API through a static webpage. In fact, if your server were connected to the internet, anyone could access your API and build their own webpage with your JSON data, just like you made your own webpage using the data from Open Data NYC. This is a little different because you are doing it with your own data. But ... interesting note: This is the premise behind front-end frameworks like Angular, Backbone, etc. They are just static assets that request data from a server. Here, we are not using Angular or Backbone, we are making AJAX requests to our server with jQuery.

Using jQuery in your static javascript file in your public folder (app.js), write an ajax request that grabs your own data from `'/api/films'` and console.log that data for testing purposes.

Write in javascript code in `app.js` that will display the title, director, and year of each film on your webpage: this will not be JSON, you were taking the JSON and turning it into a nicely presented webpage.

Make it so that this film info is displayed only when you press a button.

Next, make it so that if you press another button, you will get back only a single film from `'/api/films/:id'`, depending on which id you send. For example, you could make an ajax request:

```
$.ajax({ 
	url: '/api/films/3' 
}). done(function(result) {
	// do stuff with result	
});
```
And get back only film 3 after you have pressed a button.


...
















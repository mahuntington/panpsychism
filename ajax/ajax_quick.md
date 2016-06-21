![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA


---
Title: AJAX in 25 mins <br>
Type: Afternoon Exercise<br>
Duration: 25 mins <br>
Creator: Thom Page <br>
Course: WDIr-Panthalassa<br>

---

## AJAX in 20 mins

AJAX is a way to use Javacript to make a request to a server. So far you have seen GET requests made from the browser (url bar) and from cURL, but we can make requests using Javascript with AJAX. 

AJAX is an acronym for Asynchronous JSON and XML. 

#### Syntax

```
$.ajax( 'url' ).done(function(data) {
	
	console.log(data);

});
```

#### Exercises

* Set up `index.html` and `app.js`
* Get jQuery in there

<hr>
* Perform an ajax request to omdbapi:

`http://www.omdbapi.com/?t=Eraserhead&y=1977&plot=short&r=json`

* Console.log the data

<hr>

* Perform an ajax request to nyc open data subways:

`https://data.cityofnewyork.us/api/views/kk4q-3rt2/rows.json`

* Console.log the data

<hr>

* Open up the ajax_example app
* Run `npm install`
* Look in `server.js` and `app.js` to see how the server interacts with the static file to load JSON into the static file.
* Make your own json route in `server.js` (remember, in a full app, your JSON can come straight from your (Mongo) database), and send some json data, it can be anything.
* In `app.js`, write an AJAX command that will grab the data from the route you made.
#SONG LYRICS SHUFFLER

### INTRO TO ANGULARJS BASICS

#### App

You will make a static page that displays songs with the song title, author, year, and lyrics. For no really good reason other than to practise `ng-click` and execute controller functions, you will be able to shuffle the order of the lyrics by clicking a shuffle button, as well as hide/show the song by clicking on the title.

Ultimately, you can add new songs to the page.

Sample screenshot:

![](screenshot.png)
#### The app should:
- Display song titles, authors, years, and lyrics line by line
- Hide / show the song by clicking on the title (the title does not get hidden 'cos you still have to click on it to show the song again)
- Shuffle the lyrics by pressing a shuffle button
- Add a new song
	- When entering lyrics, the user should separate the lines of lyrics with a comma. **HINT FOR LATER** when the form is submitted, the app could `split` the lines by comma for use in an array  

#### Set up - you will need:
- `index.html`
- `app.js`
- `style.css` if you want to add some style

Server and database will be introduced tomorrow


#### Angular stuff you will probably want:

#####Display songs
- A link to Angular 1.5 from https://angularjs.org/
- module / `ng-app`
- controller / `ng-controller`
- `ng-repeat` ( you might want to include a `track by $index` in the directive params, but if you don't need to, then don't)
- `ng-click` (hint: you can pass in $index as a param)
- `ng-if` or alternatively, `ng-hide` and/or `ng-show`
- curlies `{{ }}`

#####Add a song
- a form with an `ng-submit`
- inputs that rout to `ng-model`s which could be inside a formdata object in the controller maybe.


Overall, you will need data and functions in your controller.

#####Sample data

```
this.songs = [ 
  {
	author: "De La Soul",
    title: "Ring Ring Ring",
	lyrics: [
		      "Hey how ya doin'",
	          "Sorry ya can't get through",
			  "Why don't you leave your name",
			  "And your number",
			  "And I'll get back to you"
			],
	year: 1991,
	hidden: false
  }, {
	author: "Ini Kamoze",
	title: "Here Comes the Hotstepper",
	lyrics: [
			  "Here comes the hot stepper",
			  "I'm the lyrical gangster",
			  "Pick up the crew in-a de area",
			  "Still love you like that"
	        ],
	year: 1995,
	hidden: false
   }, {
		author: "Snow",
		title: "Informer",
		lyrics: [
				  "Informer",
				  "You no say daddy me Snow me-a gon' blame",
				  "I lick he boom boom down",
				  "'tective man they say, say daddy me Snow me stab someone down the lane",
			      "I lick he boom boom down."
			    ],
				  year: 1993,
				  hidden: false
   }
];
```

#####Shuffle function
Pass in an array and the shuffle function will randomize the order of the elements

```
	  function shuffle(a) {
	    var j, x, i;
	    for (i = a.length; i; i -= 1) {
	        j = Math.floor(Math.random() * i);
	        x = a[i - 1];
	        a[i - 1] = a[j];
	        a[j] = x;
	    }
    	return a;
	  }
```





	


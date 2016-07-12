![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---

Title: Dating App <br>
Type: Homework<br>
Duration: Weekend <br>
Creator: Thom Page <br>
Course: WDIr-Panthalassa<br>
Competencies: Express, Mongo / Mongoose, Basic Angular, Angular Router, CSS3 animations <br>

---
# DATING APP

![landing](http://i.imgur.com/a0luMDh.png)

![match](http://i.imgur.com/KkKfBuU.png)

# PART ONE

## INVESTIGATION

Read about how Angular data-binding works:
http://angular-tips.com/blog/2013/08/watch-how-the-apply-runs-a-digest/

Read up to the first Try It! section, then read the conclusion.

* Make a text file and write a brief paragraph that describes the Angular digest loop and why it's useful.

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 1: described the digest loop".
<hr>


#### Starter Code - Dating App

You will receive an Express API that serves JSON, and an Angular front-end that consumes the JSON. In this exercise, you will be adding functionality to both the Angular front-end and the Express back-end.

##### SET UP

* Npm install
* Run mongod
* Go to localhost:3000 (no users yet)
* Go to /users/seed (users will populate)

##### GET FAMILIAR WITH THE APP

* Mouse over on one side: user appears in the Match Box
* Mouse over the other side: user appears in the Match Box, and now that there are two users in the Match Box, the Match button appears.
* Click the match button: all it does so far is reset the Match Box
* Click the header to re-populate the users and get a different batch

Let's change a couple of things in the app to get more familiar with the code.

##### Disintegration / Reintegration:

* Find a 150x150 image on the web of someone or something that wants to date. Enter the someone or something into the 'Add a Dater' form and add them to the list. If they don't show up on the sidebars, keep clicking the header.

* Look through the code, and break the submit process for the 'Add A Dater' form: after the form has submitted, make it so the inputted form information stays in place instead of clearing. 

* Return the form submit to its former glory (the data clears).

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 2: Added a user and messed with the form data".
<hr>

##### Disintegration / Reintegration:

At the moment, there are 3 users displayed on each side of the Match Box. If you look in the `index.html`, you will find a filter that limits them to 3.  

* Change the Angular so that 8 users will be displayed on each side instead. 

* After you have changed it to 8, change it back to 3 per side.

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 3: Messed with the limit filter".
<hr>


# PART TWO

## ANGULAR ROUTER

We are going to integrate Angular Router into the dating app, and use it to make a more advanced UI for us to add full CRUD functionality to the app.

We will use Angular router to change the view inside the Match Box depending on what we have clicked on. 

The view inside the Match Box will be either:

	- the original Match view with user pics and match button
	
	- a form for editing a selected user if you click on a user in the sidebar
	
You can see a demonstration here: https://youtu.be/jLCder5O6Ls

Set up Angular router.

* Include the router library 

* Set the base reference 

* Give your angular module `ngRoute`

* Make an `app.config` and pass it `$routeProvider` and `$locationProvider`

* With `$locationProvider`, tell it to enable html5Mode
* With `$routeProvider`, you will want to create one route to begin with: you will want to make sure your root route will still work after you have refactored your code. 

	* Make a `partials` folder where you will place your templates for the Match view and the Edit view.

	* Remove the contents of the Match div and put them into a template in the partials folder.
	
	* Within the Match div, put an `ng-view` div in there to replace the code you removed. 

	* Using `$routeProvider`, make a route that loads the Match template when you are on the root route. (You are just trying to get the app to look the way it already did before you messed with it, just with refactored code). Don't give it a controller.

```
	$routeProvider.when('/', {
		templateUrl: '/partials/match.html'
	});
```
	
Make sure the Match view loads. Your app should now work the same as before, just with Angular Router. 

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 4: Successfully configured Router".
<hr>

#### ADD AN EDIT VIEW

* When you click on a user's sidebar image the route chould change, the url should update, and the view should update to the edit view. You want the url to reflect the id of the clicked user. 

* Make an Edit template in the partials folder and just give it a test message (no need to make a form yet).

* Make a `$routeProvider` inside your `app.config` that will load the template when the url is `/edit/:id`

You cannot just type `/edit/328432843829` into the url bar to see the template render, because this will query the server, not the browser's push state. To use the browser's push state, you should use an anchor tag inside the `index.html`.

* in `index.html`, wrap the div with class 'left-pic' in anchor tags. Provide the anchor with an `ng-href` that will go to a url with the id of the user.

```
<a ng-href="/edit/{{ user._id }}">
```

Instead of the Match Box contents within the pink square, you should see a test message within the pink square. Do the same for the images on the right.

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 5: Successfully loaded a second view with id".
<hr>

* Put a link into the edit view to return to the Match Box, which updates the view and returns the url back to default.

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 6: Link returns to root view".
<hr>

You might have noticed in your testing that if you reload your server and the url is sitting on `/edit/42483274832` or some other id, the server 'cannot /GET', and you have to remove it each time to get your page to load. You can fix this for your own convenience.

* Make Express redirect to route '/' if the url does not reference a route in the server. Hint you can use a wildcard in Express routes: `*`

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 7: Express redirects to root for unassigned urls".
<hr>

#### ADD A FORM AND CONTROLLER TO THE EDIT VIEW

Instead of the test message, the Edit view route should show a form populated with the clicked user's information.

Take a minute to think how you would go about getting that particular user's information into the template.

* Give the Edit view its own controller from within the $routeProvider

```
	$routeProvider.when('/edit/:id', {
		templateUrl: 'partials/edit.html',
		controller: 'EditController',
		controllerAs: 'ctrl'
	});
```

* Make the EditController. Inside the EditController you will want to make an ajax request to a Show route to get that particular user's information. 
	* To do this, you will need to make the Express route in the usersController. The route should serve up a users information according to that user's id.
	* In the EditController, use $http to make an ajax request to that route. But hang on, you will need the user's id. To get the user's id int the EditController, you can use $routeParams to get the id from the url.  <br><br>
	
	Your EditController will look something like this:
	
	```
	app.controller('EditController', ['$http', '$routeParams', function($http, $routeParams) {

		// some kinda $http request to a route using $routeParams.id 

	}]);
	```
	
* Make the edit form in your Edit template and populate the fields with the user's data.

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 8: Edit view has populated form".
<hr>

#### SEND DATA TO THE DATABASE

* Make it so that you can submit a user's edits to the database. You will need to set up a PUT route and use $routeParams as before.

* Make it so you can delete the user, too, from the edit panel. You will need to set up a DELETE route and using $routeParams as before.

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 9: Full CRUD with Angular".
<hr>


# PART THREE
## NG-CLASS AND CSS3 ANIMATIONS

Using `ng-class`, make it so that when the 'Click to Match' button is pressed:

* The two central images translate into each other during a 3 second interval and overlay, and the opacity of each will halve. 
	* Remember to set the CSS transition properties on the elements.
	* Use ng-class to give the images a class that will animate them, only if a variable bound the controller is true. If the variable is false, the images will not have that class.
* The click to match button disappears. Hint: use `ng-if` (you can take limage and rimage out of the match function).
* A delayed message will appear saying whether or not the match is successful (the relative success can be random). Hint: Use animation keyframes and the css `visible` property to delay the display of the message for 3 seconds.

Here is the full demonstration: https://youtu.be/jLCder5O6Ls

---

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 10: Click to Match button sets off animation".
<hr>



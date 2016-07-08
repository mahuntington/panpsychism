![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---

Title: Dating App <br>
Type: Homework<br>
Duration: Weekend <br>
Creator: Thom Page <br>
Course: WDIr-Panthalassa<br>
Competencies: Express, Mongo / Mongoose, Basic Angular, Angular Router <br>

---

## PART ONE

### INVESTIGATION

Read about how Angular works

Npm install
Run mongod
Go to localhost:3000 (no users yet)
Go to /users/seed (users will populate)

Mouse over on one side: user appears in the Match Box
Mouse over the other side: user appears in the Match Box, and now that there are two users in the Match Box, the Match button appears.

Click the match button: all it does so far is reset the Match Box

Click the header to re-populate the users and get a different batch

----

Disintegration / Reintegration:

Find a 150x150 image of someone or something that wants to date. Enter the someone or something into the form and add them to the list.

Make it so that the form info stays in place after submit. Make the form clear again after submit.

---

Disintegration / Reintegration:

Change the Angular so that 8 users will be displayed on each side of the Match Box. If you look in the `index.html`, you will find a filter that limits them to 3. After you have changed it to 8, change it back to 3 per side.




## PART TWO


### ANGULAR ROUTER
<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"The 1st set of homework answers are complete".
<hr>





---

What you want to achieve:

Use Angular router to change the view inside the Match Box.

The views inside the Match Box will be either:
	- the original Match view with user pics and match button
	- a form for editing a selected user

Set up Angular router.

When you click on a user's sidebar image, the route chould change, url will update, and the view should update: instead of the Match Box contents within the pink square, you should see a test message within the pink square. (the match box should not be given its own controller in the router)

There is a link to return to the Match Box, which updates the view and returns the url back to default.

Give Express a default route '/' if the updated url does not go anywhere.

Instead of the test message, the route should show an Edit Panel. The url updates in the url bar with user's id. (this edit panel will require its own controller)

You can submit a user's changes to the database. (requires setting up a PUT route and using $routeParams)

You can delete the user, too, from the edit panel. (requires setting up a DELETE route and using $routeParams)

Now you have full CRUD with Angular.

---


## PART THREE
### NG-CLASS AND CSS3 ANIMATIONS

Using ng-class, make it so that when the 'Click to Match'
button is pressed, the two central images translate into each other and overlay (also halve the opacity). Make the click to match button disappear. (take limage and rimage out of the match function)

A delayed message will appear saying whether or not the match is successful. Use keyframes and visible for the delay display.

---











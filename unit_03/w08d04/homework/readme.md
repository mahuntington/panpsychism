![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: Angular Techniques I <br>
Type: Homework<br>
Duration: One day <br>
Creator: Thom Page <br>
Course: WDIr-Panthalassa<br>
Prerequisites: Basic Angular, $http service<br>
Competencies: Events, Include, Custom Directives<br>

---

# ANGULAR TECHNIQUES I

### Exercises on various Angular techniques 
- `$http`
- Events: `$scope.$broadcast`
- Events: `$scope.$emit`
- Events: `$scope.$on`
- `ng-include` (templating)
- Custom Directives (templating)


### Starter Code
You will receive a simple backend and an incomplete Angular front-end. You will need to complete the Angular front-end. The back-end comes with an `index` route that serves JSON data from a `users` model. This data is just some made up stuff about Ryan Gosling and Hypatia of Alexandria. 

**Seed** your database by going to `/users/seed`, and verifying the JSON in the index route, `/users`. Go back to the root page.

Your incomplete Angular front-end should look like this on the landing page:

![landing](http://i.imgur.com/EwAjrTh.png)




###1. $scope.$broadcast, $scope.$on

You have two controllers separate from each other, `RyanController` and `HypatiaController`. They are marked as such in the html and the javascript files. In the html, each of these contains the same child, `InfoController`.

The format looks like this:

```
* Ryan
*	-child
*		-display data
*	-end child
* end Ryan


* Hypatia
*	-child
*		- display data
*	-end child
* end Hypatia
```

Make it so that when you click the 'Get Ryan' button, Ryan's data is retrieved from the database.

- use the `$http` service for ajax requests
	
Show the data on the page within the child controller, infoController: `$broadcast` the data to the child from the parent, and `$on` receipt the child should display that data. 

- use `$scope` for broadcasting and receiving scoped data.

**NOTE:** In the ajax results, Ryan should be `results.data[0]` and Hypatia should be `results.data[1]`, but double check.

When you are done the page should look like this after you click the 'Get Ryan' button:

![justry](http://i.imgur.com/wy0g03D.png)

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 1: Got Ryan".
<hr>

Next, do the same for Hypatia. The result should look like this:

![bothryandhyp](http://i.imgur.com/Ye6huUY.png)

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 2: Got Hypatia".
<hr>


###2. $scope.$emit, $scope.$on

We have sent information from the parent to the child, now we will send information from the child to the parent.

Put a button with the text 'Send Message' inside Ryan's 'Info Controller' div. The button will send a message from the Info Controller back up to the Ryan Controller parent controller. It will run a function in the Info Controller (the child) that will `$emit` a message, any message, back up to the parent (Ryan), and `$on` receipt will display inside the parent.

Do the same with Hypatia.

**ng-if** : use `ng-if` to hide the button until the child has information from the `Get Ryan` and `Get Hypatia` buttons.

Result when both 'Get Ryan' and 'Get Hypatia' are pressed (they each have a 'Send Message' button):

![sendmessage](http://i.imgur.com/kZPuhls.png)


Result when both of the 'Send Message' buttons are pressed (each parent receives the same message because they share a child controller):

![messagesent](http://i.imgur.com/AzkvuPc.png)


Make it so that both Ryan and Hypatia get the message.

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 3: Ryan and Hypatia get the message".
<hr>



###3. ng-include

In our `index.html`, we have two sets of references to infoControllers that contain the same information. Let's re-arrange our code to make it DRYer. Let's make the Info Controller divs into a single template and put it in an `info_controller.html` file, and use ng-include to load the template in our `index.html`. Our template will work perfectly well with directives, references to controllers, etc.

- Make a `partials` folder within the `public` folder 
- Make an `info_controller.html	` file inside `partials`
- Put an entire InfoController div and everything in it into `info_controller.html`
- Use ng-include in the `index.html` to load the template into both the Ryan and Hypatia divs, replacing the old info controller divs.

The page should look and behave the same as before, the difference is that our code has been refactored.


<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 4: Used ng-include to load templates".
<hr>



###4. Custom Directives

We are going to make a simple directive that displays a form. This is not a fancy directive, it is just an example of a custom directive to get you used to the syntax. After this, there is a much more abstract and interesting use of custom directives.

The form will display inside each of the divs that reference the InfoController (the children of Ryan and Hypatia).

- In your `info_controller.html` template (or just in your InfoController html if you did not do ng-include), put a custom tag called `formsender` at the bottom and inside of the info controller div.

```
	<formsender></formsender>
```
This tag is where your custom directive will be invoked.

- In `app.js` make an `app.directive` named `formsender`. Your directive should return an object with the properties: 
  - `restrict`, just set it to `E`
  - `templateUrl`, path to a form template that you should put in the partials folder
  - `controller`, set this to a separate formController that you will make soon
  - `controllerAs`, an alias for your formController (you could use the word 'form')


<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 5: Added app.directive".
<hr>


The form should allow you to `edit` the information from the `InfoController`. The form should be pre-populated with Ryan's or Hypatia's name, gender, etc, from the `InfoController`. 

- In `app.js` make a separate controller called `formController` and give it `$scope` and `$http`. You will want to be able to access the data from the parent: the data for Ryan and/or Hypatia resides inside the InfoController where the $http request took place. For this, you can use `$scope.$parent.controllerAsName.property`, where controllerAs is the alias of the controller you are referencing. You can set a variable like so: `var formdata = $scope.$parent.info.information`.

- Make the form template and get it so that it shows the pre-populated data. You can use `ng-model` to show the data, and this same data can be passed to the backend upon `ng-submit`.

It should look like this:

![forms](http://i.imgur.com/nOplcrV.png)

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 6: Custom directive will display with populated data".
<hr>

- Upon submit, the form should send a `PUT` request to the server. The route already exists in the server, in `usersController`, you just have to get data to it (and sent back for verification). To get the id for the route, you can take it from the formdata.

You should be able to change Ryan and Hypatia to whatever you like:

![muttleyslimer](http://i.imgur.com/e8nBDTe.png)



<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 7: Custom directive can update data".
<hr>


#### NOTES ON CUSTOM DIRECTIVE SYNTAX

You don't have to put the controller constructor inside the directive like this:

```
app.directive('myDirective', function() {
	controller: the entire controller written
	              out here inside the directive
	              lots of code
	              doing things
	            end of controller constructor
});
```

You can decouple the directive and its controller like this:

```
app.controller('formController', [function() {
	the controller written
	here like we do with other controllers
	doing things
]);

app.directive('myDirective', function() {
	controller: 'formController'
});
```

## BONUS
###4. Advanced Custom Directives

Separately from this, go through the following tutorial for creating draggable DOM elements with Angular custom directives: https://blog.parkji.co.uk/2013/08/11/native-drag-and-drop-in-angularjs.html

<hr>
** Commit your work.** <br>
The commit message should read: <br> 
"Commit 8: Completed draggable tutorial".
<hr>

</br>

More information on custom directives: http://weblogs.asp.net/dwahlin/creating-custom-angularjs-directives-part-i-the-fundamentals





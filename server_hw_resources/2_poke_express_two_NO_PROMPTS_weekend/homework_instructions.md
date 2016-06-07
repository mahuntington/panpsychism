# POKE EXPRESS TWO -- **NO PROMPTS!!!**

![eh](http://orig10.deviantart.net/54d7/f/2013/265/a/b/w_by_professorlayton22-d6nd2yl.jpg)

This weekend you will be making a Pokemon app that displays data inside server-side rendered views.

The app will adhere to MVC structure with **Models**, **Views**, and **Controllers**

For now, a **Model** is the raw data that you use-- this data can eventually be populated on to your pages.

A **Controller** handles requests from the client and does all the routing. The **Controller** tells which **Views** to use which data from the **Models**.

A **View** renders the data by instruction from the **Controller**.

## App

- When a user goes to the '/pokemon' route they will see an `index` of pokemon: an image of each pokemon rendered to the page.
- When a user clicks on a pokemon image, they will be taken to that pokemon's `show` page, and will see the individual pokemon's name, image, types, and stats (hp, attack, and defense only).


### Requirements

You will need a `models` folder, a `controllers` folder, and a `views folder`.

Your routes should be within a `pokemon.js` file within controllers. You should use `express.Router()`.


### Structure

Your folders for the views, and controllers have been **deleted**. All you get is a models folder. Within `models` is a `pokemon.js` file with the the raw data.


### Project Directions

You don't get any directions. This is what you have chosen.
  

### Controller
  
- You've got to have a controller that handles the logic for the '/pokemon' routes. The controller should have two routes, one for displaying an index of all the pokemon, and one for showing a single pokemon according to the user's input. **further directions redacted**


### Views

- You'll need two views: 
  - `index.ejs`
  - `show.ejs`

**show.ejs**

This view will show the data of a single pokemon. Using ejs, this view should display:
	- The pokemon's name
	- The image of the pokemon
	- An unordered list of the Pokemon's types (eg. water, poison, etc). ejs can render an array, however, to get a decent layout for each item in the types array you'll need to use a loop.
	- The pokemon's stats for HP, ATTACK, and DEFENSE.

**index.ejs**

This view will show **only the images** of each pokemon. All 151 images. (You'll need to use a loop in the ejs).

When the user clicks on a pokemon's image, they will be taken to that pokemon's show page. **further directions redacted** 


## BONUS

Add extra style and functionality to your page with css and javascript using a `public` folder to store your static assets.
 
    
  




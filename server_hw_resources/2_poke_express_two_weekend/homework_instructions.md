# POKE EXPRESS TWO

![eh](http://orig10.deviantart.net/54d7/f/2013/265/a/b/w_by_professorlayton22-d6nd2yl.jpg)

This weekend you will be making a Pokemon app that displays data inside server-side rendered views.

The app will adhere to MVC structure with **Models**, **Views**, and **Controllers**

For now, a **Model** is the raw data that you use-- this data can eventually be populated on to your pages.

A **Controller** handles requests from the client and does all the routing. The **Controller** tells which **Views** to use which data from the **Models**.

A **View** renders the data by instruction from the **Controller**.

## App

- When a user goes to the '/pokemon' route they will see an `index` of pokemon: an image of each pokemon rendered to the page.
- When a user clicks on a pokemon image, they will be taken to that pokemon's `show` page, and will see the pokemon's name, image, types, and stats (hp, attack, and defense only).

### Structure

Your folders for the models, views, and controllers have already been made. The raw data is in the `pokemon.js` file in the models folder. The controllers folder has a `pokemonController.js` file with prompts. The views folder is empty, and it's up to you to make the appropriate folders and files within it.


### Directions

- In the root of the project, `npm init`. This will give you a `package.json`
- `npm install --save express`
- in `server.js` set up your server according to the prompts
  - refer to Friday's class notes for syntax
  - `npm install --save ejs`
  
- in the `pokemonController.js` file, set up your controller. The controller will have two routes, one for displaying an index of all the pokemon, and one for showing a single pokemon according to the user's input. Fill out `pokemonController.js` according to the prompts.
  - refer to Friday's class notes for syntax
- Make the views. Make sure you installed ejs.

### Views

In your views folder, make another folder called `pokemon` for all your pokemon views.

First, make your `show.ejs` view.

This view will show the data of a single pokemon. Using ejs, this view should display:
	- The pokemon's name
	- The image of the pokemon
	- An unordered list of the Pokemon's types (eg. water, poison, etc). ejs can render an array, however, to get a decent layout for each item in the types array you'll need to use a loop.
	- The pokemon's stats for HP, ATTACK, and DEFENSE.


Next, make your `index.ejs` view.

This view will show only the images of each pokemon. All 151 images. (You'll need to use a loop in the ejs).

When the user clicks on a pokemon's image, they will be taken to that pokemon's show page. You can use an `<a href="">` tag to accomplish this. 


## BONUS

Add extra style and functionality to your page with css and javascript using a `public` folder to store your static assets.

```
app.use(express.static('public'));
```
 
    
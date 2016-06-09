# POKE EXPRESS TWO

![eh](http://orig10.deviantart.net/54d7/f/2013/265/a/b/w_by_professorlayton22-d6nd2yl.jpg)

Make a Pokemon app that displays data inside server-side rendered views.

## App

- When a user goes to the '/pokemon' route they will see an `index` of pokemon: an image of each pokemon rendered to the page.
- When a user clicks on a pokemon image, they will be taken to that pokemon's `show` page, and will see the pokemon's name, image, types, and stats (hp, attack, and defense only).

### Structure

The views folder is empty, and it's up to you to make the appropriate folders and files within it.


### Directions

- In the root of the project, `npm init`. This will give you a `package.json`
- `npm install --save express`
- in `server.js` set up your server according to the prompts
  - `npm install --save ejs`
  
Your `server.js` will have two routes, one for displaying an index of all the pokemon, and one for showing a single pokemon according to the user's input.

- Make the views. Make sure you installed ejs.

### Views

In your views folder, first, make a `show.ejs` view. The purpose of this view to show a single pokemon. The pokemon that is showed depends on the user's input in the url bar.

Example, if the user writes `pokemon/0` in the url bar, they will go to the page that displays the pokemon at index 0 in the `pokemon` array.

This view will show the data of a single pokemon. Using ejs, this view should display:
	- The pokemon's name
	- The image of the pokemon


Next, make your `index.ejs` view.

This view will show only the names of each pokemon. All 151 images. (You'll need to use a loop in the ejs).


## BONUS
When the user clicks on a pokemon's name, they will be taken to that pokemon's show page. You can use an `<a href="">` tag to accomplish this.
 
    
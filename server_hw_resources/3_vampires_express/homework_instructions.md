# CRAMPIRES

### Create and Read some Vampires

![](http://newscenter.sdsu.edu/sdsu_newscenter/images/stories/Bela_Lugosi.jpg)
![](http://newscenter.sdsu.edu/sdsu_newscenter/images/stories/Bela_Lugosi.jpg)
![](http://newscenter.sdsu.edu/sdsu_newscenter/images/stories/Bela_Lugosi.jpg)

### The CR in CRUD

CRUD stands for Create, Read, Update, and Destroy-- these are the fundamental actions we perform on data. 

Tonight's homework is to make an app that will both **Read** and **Create** data for a single model (Vampires). **Update** and **Destroy** will come later.

### RESTFUL routing

There are seven RESTFUL routes, but tonight we are only using four.

**VIEW** routes (GET):

 - `index` displays an index of all resources. 
 - `show` displays just one resource. 
 - `new` provides a form for adding a new resources. 
 - `edit` provides a filled-out form for an existing resource.

 The routes that have views are sent from a GET request.


 **REDIRECT** routes (POST, PUT, DELETE):

 - `create` takes the data from the `new` form. 
 - `update` takes the data from the `edit` form. 
 - `destroy` removes data. 

 The routes that have redirects are sent from POST, PUT, and DELETE requests.

```
 In an app with full RESTFUL routes, you will have **four** views and **three** redirects.

 Later on, you could of course combine views to reduce navigation, but for now, there are four.

 Tonight's homework will use three of these views, `index`, `show`, and `new`, and just one redirect, `create`.
```

### APP
The app will show a list of vampire names. You click on 'em, they go to a show page.

The app will also be able to store new vampires. You click on a 'new vampire' link, a new vampire gets made and will appear on the index.

### DIRECTIONS

- Make a new Express app called `crampires`.

- Set up your MVC architecture.

- Run `npm install` to install all the dependencies that are already in `package.json`.

### Controllers
- *REPS*: Make your `index` and `show` routes for the vampires in the vampires model.

  - URI convention for index: GET `/vampires`
  - URI convention for show: GET `/vampires/:id`


- Make a `new` route. All this should do is render the `new` view, you don't need to pass it data.
  - URI convention for new: GET `/vampires/new`
  - Place your `new` route above your `show route`, or the user will never get to it (they will always go to the `show` route instead). Can you explain why this might be?
  
  ##### CREATE and req.body
  
- Make a `create` route. 
  - URI convention for create: POST `/vampires`  
  ...
- This will add the data from `new` into the Vampires array, and `redirect` to the `index`. The data will come from the request object-- inside an object called `req.body`. Does `req.body` exist without `body-parser`? Well no. `body-parser` adds in an empty body object to the request object that can later be populated with data. You can test the existence of req.body by console.logging req with and without `body-parser`.  
	- You will need to set up `body-parser` in your `server.js`.

	- Once you have required body-parser, this is the code to get it to work:

	```
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	```
	
	Note that you can find this code in the body-parser docs on the `npmjs` site.
	
#### Testing POST requests
1. ##### Network Tab
You can see the POST request go through in the Network tab in the Chrome console. Open up the console, hit the submit button for the request, and you will see the requests load. Click on the POST request, select the Headers, and scroll down to the bottom where you will see the form data.

This is good way to see if the form data has even been passed through the browser.

2. ##### Postman / cURL
You can use Postman or cURL to send data to a server. Send data with Postman or cURL to your POST route, and set up the route simply to console.log req.body to see if the data has reached the server.
	



### Views

- `index.ejs` should just be an unordered list of the Vampire's names. Each name should link to the `show` page for that Vamp. There should be a link to `add a new Vampire`. 
- `show.ejs` should display the Vampire's name, location, gender, and number of victims. There should be a link to return to the Vampires index.
- `new.ejs` should render a form where the user can enter a new Vampire's name, location, gender, and number of victims. The form will submit to the `create` route.


### BONUS

- Make the app look nicer than just a plain html list. Use express.static('public') and integrate your css skills. 

- Use jQuery on the frontend.


# ADVENTURE TIME!

![](http://g3ar.co.za/wp-content/uploads/2014/05/Adventure-Time-The-Secret-of-the-Nameless-Kingdom-announced.png)


## App: Full CRUD and REST

Your mission is to make an Adventure Time character manager. Use the starter code provided. The app will:
 
  - display a bunch of Adventure Time character images on the index
  - have separate show pages for each character
  - have the ability to add a new character
  - have the ability to edit existing characters
  - have the ability to delete characters

RESTful ROUTING:

- Index
  - GET `/characters`
- Show
  - GET `/characters/:id`
- New
  - GET `/characters/new`
- Edit
  - GET `/characters/:id/edit` 
- Create
  - POST `/characters`
- Update
  - PUT `/characters/:id`
- Destroy
  - DELETE `/characters/:id`
  
### Referencing by ID (not index)

Our Characters will be referenced by the id value within the characters' object. We will not
be referencing by index value any more because the index is outside the object, not within it.

```
Real databases reference by intrinsic ids, and we will be mimicking this in our app. We will be using a loop to retrieve the array element with the relevant id.
```

Each time you want to reference a specific Character object, you will need to loop over the Characters array. You will retrieve the record that matches the id from `req.params.id`.

When you create a new Character, it will be given a new **unique** id. Ids should be unique and persistent. If you delete the Character with id: 1, that id can never be used again. This ensures permanent identity within our individial Character objects.

The `create` route has a built in generator for assigning a new unique id.

### Method Override

The snippet for the method override middleware is already in the app. Method override is for submitting `PUT` and `DELETE` requests from the client. (Note: the purpose of method-override is to override the client's restriction of GET and POST requests only).

The tricky part is remembering all the stuff you need to put in your forms. Your `PUT` and `DELETE` forms will have an action of 'POST', but will have hidden inputs to hack the server to accept PUT or DELETE verbs.

```
<input type="hidden" name="_method" value="PUT">
```

### Notes on testing

Sometimes you don't want to have to build out a view or a form in order to test if a POST, PUT, or DELETE route is working. Use Postman or cURL on these routes and console.log a message and/or req.body to see if the route is working, and worry about the view later.

### Images

The Adventure Time character images are 300x300px. You can find 300x300px images on Google Images -> Search Tools -> Size -> Exactly . . .

### BONUS

Make it look and act nicely with static assets.

Try using jQuery to do stuff.






   
 
  
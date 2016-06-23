![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: Sessions & Authentication w06d04 <br>
Type: Homework<br>
Duration: "3:00"<br>
Creator:<br>
    Original creators: WDI-Archer & WDI-Bowie<br>
    Adapted by: Kristyn Bryan<br>
    Course: WDIr Panthalassa<br>
Competencies: Javascript <br>
Prerequisites: Javascript<br>

---
# Homework

## Handling Sessions in Node

You're going to create a two-page app. Create a new express server and npm install and require everything you need (install express, express-sessions, body-parser, ejs, and mongoose, etc.). Also remember to touch a .gitignore file and ignore node_modules. Do the following with this server:

**Commit 1** <br>
<hr>
"Commit 1: Created a new app and included the npm packages that I need."
<hr>

Create 2 pages: a welcome page and a form page. 

The form should ask the user for a name. When the user submits the form, save it in sessions and make the welcome page display: "Welcome, name". Refresh the welcome page, does the name persist?

**Commit 2** <br>
<hr>
"Commit 2: Created a form page and a welcome page."
<hr>

Lets now use a database with stored information to populate our session.

Connect to mongo using mongoose.

**Commit 3** <br>
<hr>
"Commit 3: Connected mongo using mongoose."
<hr>

Create a mongoose schema for a user. Be sure to register it into a model. The schema should have a name (string) and color (also string).

**Commit 4** <br>
<hr>
"Commit 4: Created a schema and model for user."
<hr>

Change the form route for setting the user's name. Instead of setting it in sessions, create a new user in your user collection. Add an input for the person's favorite color and store that along with the user's name.

**Commit 5** <br>
<hr>
"Commit 5: New form element for color and saving that information with the user."
<hr>

Create a new page for a login form. This form should take only a user's name. 
When a user submits the form, find their document in the database and set, in sessions, their name and color.

**Commit 6** <br>
<hr>
"Commit 6: Created a new page for login. Create a session and display their information."
<hr>

When a user goes to the welcome page, if they do not have a name set in sessions, redirect them to the login. If they have a name, render the welcome page with the normal welcome message and change the background to their color.

**Commit 7** <br>
<hr>
"Commit 7: The user has a custom page or is redirected to the login if their name isn't set to the session. "
<hr>

FROM MATT"S LESSON
Install and reqire `bcrypt`

Create a route for username and password
Encrypt the password using bcrypt.
Reminder on how to has a password string using bcrypt:
`req.session.password = bcrypt.hashSync(req.params.password, bcrypt.genSaltSync(10));`

Write the login function that will take the username and password and confirm that the password matches. 
////////////////////////////////////////////




<hr>

## # Authentication with Express & Bcrypt & PG

## Authentication & Authorization

1. *Middleware:* Install and require `bcrypt`: for handling incoming form data

## Challenges: Part 1
4. Update the users schema so that it has an email and a password_digest (both strings)
6. Add a home route to `server.js` which renders `home.html.ejs` which has an anchor tag, signup that links to `/users/new` with text of `Signup`.

7. in the routes directory with a file users.js

  Add the corresponding code in your server.js


  - define a route in this file. A get route `/users/new`

  ```
  users.get('/new', (req,res) => {
    res.render('users/new.html.ejs')
  })
  ```
  - the new route will render a file from `views/users` called `new.html.ejs` which will have a form with two input fields

  The form will make a post request to `/users`


## Challenges: Part 2

So we now have the beginning of our signup flow but nothing his happening yet. Remember when we installed bcrypt earlier? We're going to now use that to save our users data to the db and "sign them up" for our application.

**Goal:** Set up bcrypt to hash our password and save that hashed password to the db


  What is salting?

1. Create a function called createUser that takes req, res, and next as arguments. Inside of that function create a function saveUser that takes two arguments, email and hash. Build the saveUser function as a standard pg function, It will insert an email and a password_digest into users.

```
function createUser(req, res, next) {
  createSecure(req.body.email, req.body.password, saveUser);

  function saveUser(email, hash) {
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, function(err, client, done) {
      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({ success: false, data: err});
      }

      var query = client.query("INSERT INTO users (email, password_digest) VALUES ($1, $2);",
        [email, hash], function(err, result) {
          done()
          if(err) {
            return console.error('error, running query', err);
          }
          next()
      });
    });
  }
}
```

2. TOGETHER: build the createSecure function, explain how we call it as a callback.

  - add this line to the top

  ```
  var salt = bcrypt.genSaltSync(10);
  ```

  ```
  function createSecure(email, password, callback) {
    // hash password user enters at sign up
    bcrypt.genSalt(function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        // this callback saves the user to our database with the hashed password
        callback(email, hash)
      });
    });
  };
  ```
  now call that function in the first line of create user, pass in the body, and a reference to saveUser as the callback

3. so let's go line by line and see what happens. We can now save users to our database and the password that is saved is encrypted.

4. make the corresponding post route in users.js that calls createUser and authenticates them it should redirect to the home page.

```
users.route('/')
  .post(db.createUser, (req, res) => {
    res.redirect('/');
  })
  ```

## Challenges: Part 3 Log in

1. Create a log in anchor tag on our home page that links to `users/login` it should render `users/login.html.ejs` which has a form that makes a post request with email and password.

```
users.get('/login', (req,res) => {
  res.render('users/login.html.ejs')
})
```

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <form action="/users/login" method="post">
    <label for="email">email</label>
    <input type="text" name="email">
    <label for="password">password</label>
    <input type="text" name="password">

    <input type="submit" value="Submit">
  </form>
</body>
</html>
```

2. Cool so this post request goes no where let's build this part out together.

### What are sessions?

npm install express-session --save
npm install connect-pg-simple --save

psql sessions_test < node_modules/connect-pg-simple/table.sql

add the following to server.js

```
var session = require('express-session');
var pgSession = require('connect-pg-simple')(session);

app.use(session({
  store: new pgSession({
    pg : pg,
    conString : connectionString,
    tableName : 'session'
  }),
  secret: 'sooosecrett', // something we maybe want to save with dotenv *hint hint*
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}))
```

Add to pg.js
```



## Challenges: Part 4 logout

**Goal:** Add a route to log a user out

1. Add a delete route / logout to users.js
2. Install `method-override`
3. Add a form/button on the home page that links to that `delete` route




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

You're going to create a small application to continue using the new knowledge that you just obtained today. 
- Create a new express server and npm install and require everything you need (install express, express-sessions, body-parser, ejs, and mongoose,etc.). 

- Also remember to touch a [.gitignore](https://git-scm.com/docs/gitignore) file and ignore `node_modules`. 

**Commit 1** <br>
<hr>
"Commit 1: Created a new app and included the npm packages that I need."
<hr>


Do the following with this server:

- Create 2 pages: a welcome page and a form page. 

- The form should ask the user for a name. When the user submits the form, save it in sessions and make the welcome page display: "Welcome, name". Refresh the welcome page, does the name persist?

**Commit 2** <br>
<hr>
"Commit 2: Created a form page and a welcome page."
<hr>

- Lets now use a database with stored information to populate our session.

- Connect to mongo using mongoose.

**Commit 3** <br>
<hr>
"Commit 3: Connected mongo using mongoose."
<hr>

- Create a mongoose schema for a user. Be sure to register it into a model. The schema should have a name (string) and color (also string).

**Commit 4** <br>
<hr>
"Commit 4: Created a schema and model for user."
<hr>

- Change the form route for setting the user's name. Instead of setting it in sessions, create a new user in your user collection. Add an input for the person's favorite color and store that along with the user's name.

**Commit 5** <br>
<hr>
"Commit 5: New form element for color and saving that information with the user."
<hr>

- Create a new page for a login form. This form should take only a user's name. 
When a user submits the form, find their document in the database and set, in sessions, their name and color.

**Commit 6** <br>
<hr>
"Commit 6: Created a new page for login. Create a session and display their information."
<hr>

- When a user goes to the welcome page, if they do not have a name set in sessions, redirect them to the login. If they have a name, render the welcome page with the normal welcome message and change the background to their color.

**Commit 7** <br>
<hr>
"Commit 7: The user has a custom page or is redirected to the login if their name isn't set to the session. "
<hr>

- Install and reqire `bcrypt`
- Update your login page to accept both a username and password.
- Encrypt the password using bcrypt.
- Reminder on how to hash a password string using bcrypt:
`req.session.password = bcrypt.hashSync(req.params.password, bcrypt.genSaltSync(10));`

**Commit 8** <br>
<hr>
"Commit 8: Added a request for a password and hashed the password using bcrypt. "
<hr>

- Write the login function that will take the username and password and confirm that the password matches. 

**Commit 9** <br>
<hr>
"Commit 9: Wrote code to identify matching passwords. "
<hr>

Write the code necessary so that the flow of your app is as followed: 
- When a user goes to: '/', they are provided with TWO things:
1) A form to login (if they are an existing user in your database). 
2) You can either provide them with a form on `/` for them to sign up as a new user, or a link <a> tag, that takes them to '/new' that displays a form to sign up as a new user.
- If they sign in successfully, take them to the welcome page that displays their personal information (`/welcome/:username`).
- If they are a new user, after they successfully sign up, take them to the welcome page with their personal information(`/welcome/:username`).
- If they don't sign in successfully, redirect them to the sign in page.

**Commit 10** <br>
<hr>
"Commit 10: Created the routes appropriate for logged in users. Redirected accordingly. "
<hr>


Bonus: Make sure that a user can't access another user's page.

**Commit 11** <br>
<hr>
"Commit 11: Only the user can access their personal page."
<hr>

Bonus:  Add a route to log a user out

1. Add a delete route / logout.
2. Install `method-override`
3. Add a form/button on the home page that links to that `delete` route

**Commit 12** <br>
<hr>
"Commit 12: The user can log out of their session."
<hr>

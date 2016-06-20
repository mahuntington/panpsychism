#Homework

## Handling Sessions in Node

The video associated with this gist is located [here](https://www.youtube.com/watch?v=C_Cb8-lsrn8).

## Concept Questions
1. What are cookies (not the food kind)? Where can you find them in the browser?
2. What is a 'session'?
3. What kind of options can we set on the express-sessions pacakge when we .use it? what is required? What does the secret do?
4. How do we access the session storage in node?
5. What kind of things can be stored in a sessions?
6. What kind of things do you think sessions will eventually allow us to implement?

## Exercises

Create a new express server and npm install and require everything you need (or use the one you made while following along the video if you had done so). Be sure to install express-sessions, body-parser, ejs, and mongoose. Also remember to touch a .gitignore file and ignore node_modules. Do the following with this server:

1. Create 2 pages: a welcome page and a form page. The form should ask the user for a name. When the user submits the form, save it in sessions and make the welcome page display: "Welcome, name". Refresh the welcome page, does the name persist?
2. Lets now use a database with stored information to populate our session.
  - Connect to mongo using mongoose
  - Create a mongoose schema for a user. Be sure to register it into a model. The schema should have a name (string) and color (also string)
  - Change the form route for setting the user's name. Instead of setting it in sessions, Create a new user in your user collection. Add an input for the person's favorite color and store that along with the user's name.
  - Create a new page for a login form. This form should take only a user's name. When a user submits, find there document in the database and set, in sessions, their name and color.
  - When a user goes to the welcome page, if they do not have a name set in sessions, redirect them to the login. If they have a name, render the welcome page with the normal welcome message and change the background to their color.

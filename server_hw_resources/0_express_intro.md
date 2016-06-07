## EXPRESS CALCULATOR

Tonight you'll make a calculator using node and express. It's not very fancy looking. But it will serve as a proof-of-concept for using express and accessing the `req.params` object.


1. make a directory called `calc`

2. **go into the directory**

3. touch `server.js`

4. `npm init`

5. `npm install --save express`

6. require and set up express at the top of `server.js`
  - refer to class notes for syntax

7. add a listener for port 3000

8. Make a GET route for `multiply` that has two variable destinations corresponding to two numbers that will be multiplied. The syntax for the route will look like this:

```
app.get('/multiply/:num1/:num2', function(req, res) {
	

	res.send( // something );
});
```

Write the code that will multiply the numbers that the user sends through in the url, and respond with the answer.

You will need to access `req.params.num1` and `req.params.num2` to get it to work.

1. Make another route for add.

2. Make another route for subtract.

3. Make another route for divide.

### Running the server

In the directory, run `nodemon` to run your server.

See the response of your server in your browser at `localhost:3000`.




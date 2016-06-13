![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: Homework w05d02 <br>
Type: Homework<br>
Duration: "4:00"<br>
Creator:<br>
    Original creators: WDI-Skywalker<br>
    Adapted by: Thom Page & Kristyn Bryan<br>
    Course: WDIr Panthalassa<br>
Competencies: Javascript, Express, Routes, Views, Node<br>
Prerequisites: Javascript <br>

---

#EXPRESS YOURSELF!!


## Learning Objectives
* Practice setting up express applications. 
* Practice creating custom routes.
* Practice using parameters from a request.

<hr>
Tonight you will be using your new found skills to create three separate Express apps.

<br>
#Greetings APP
- Create an express application (see the bottom of this homework for a reminder).
- Your app should have a route of `'/greeting'` and it should expect *1 param* which takes in a person's name.
- When hitting the route, the page should display a message such as "Hello, <name>", or "What's up, <name>, or "<name>! It's so great to see you!" (ex. hitting `'/greeting/Jimmy-boy'` should display `Wow! Hello there, Jimmy-boy` on the page).

**Commit 1** <br>
<hr>
"Commit 1: Greeting express application created."
<hr>


<br>
#Tip Calculator APP
- Create an express application (see the bottom of this homework for a reminder).
- Your app should have a route of `'/tip'` and it should expect *2 params*. One should be `total` and one should be `tipPercentage`.
- When hitting the route, the page should *display how much your tip will be* based on the total ammount of the bill and the tip percentage. (ex. hitting `'/tip/100/20'` should display `20` on the page).

**Commit 2** <br>
<hr>
"Commit 2: Tip Calculator express application created."
<hr>

<br>
#Magic 8 Ball APP
- Create an express application.
- Create a route of `'/magic'` that should expect a phrase in the URL that ask the Magic 8 ball a question.
- So if the user hits that route and asks a question of "Will I be a Millionaire" (ex. `'/magic/Will%20I%20Be%20A%20Millionaire'`) he should have return to him his question AND a random Magic 8 ball response (see the array below) on the  screen.
- Remember that we can't use spaces in the url, so we use `%20` to express a space in the url.
- So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random Magic 8 ball quote on the  screen.
- Use this array of Magic 8 ball responses..... 

```
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
```

**Commit 3** <br>
<hr>
"Commit 3: Magic 8 Ball express application created."
<hr>

# Reminder on how to set up an express application
- Create a Javascript file (`.js`) for each express application (ex: `tip_calculator.js`).
- Inside your homework folder, install express `npm install --save express`
- Check your files. Hint: `ls`. If you have a `node_modules` folder with `express` somewhere inside, then you've successfully added express to your folder.
- Inside your Javascript file, require `express` (look back to the markdown from today if you need more help on how to do this)
- Install express on our server.
- Tell the server where to listen for requests (the port).

As a reminder, to get and send information, refer to this example:
```
app.get('/greeting/:name', function(req, res) {
  res.send({params: req.params, queries: req.query})
});
```

<hr>
## Views
Index
Show
Module.export



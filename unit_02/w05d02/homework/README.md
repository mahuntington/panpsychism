Skywalker
Thom Page & Kristyn Bryan

#EXPRESS YOURSELF!!


## Learning Objectives
* Practice setting up express applications. 
* Practice creating custom routes.
* Practice using parameters from a request.



####Tonight you will be using your new found skills to create three separate Express apps.
__________________________________________________________
__________________________________________________________

<br>
#Tip Calculator APP
- Create an express application.
- Your app should have a route of `'/tip'` and it should expect 2 params. One of which should be `total` and one should be `tipPercentage`.
- When hitting the route the page should display how much you tip will be based on the total ammount of the bill and the tip percentage. (ex. hitting `'/tip/100/20'` should display `20` on the page).


<br>
#Magic 8 Ball APP
- Create an express application.
- Create a route of `'/magic'` that should expect one parameter which is a question to ask the 8ball.
- The params of the route should be a question. (ex. `'/magic/Will%20I%20Be%20A%20Millionaire'`)
- Remember that we can't use spaces in the url, so we use `%20` to express a space in the url.
- So if the user hits that route and asks a question of "Will I be a Millionaire" he should get his question asked and a random 8ball quote on the  screen.
- Use this array of 8ball quotes..... 

```
["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

<hr>
## Views


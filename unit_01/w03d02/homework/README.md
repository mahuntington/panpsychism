

# Lets build a browser calculator!
![loop](http://www.mememaker.net/static/images/memes/3861758.jpg)

Today, we will be building a simple interactive website: a Calculator!

## User Stories

User stories are a great way to break down what the different features of the website are, and how to structure it. They are generally written out in this form:

1. A user should be able to select numbers so that they can do things with them.
2. A user should be able to add numbers together.
3. A user should be able to subtract numbers.
4. A user should be able to divide numbers.
5. A user should be able to multiply numbers together.

Bonus:

6. A user should be able to clear all operations and start from 0. 

## First step: creating the file structure

1. Touch 3 files into your folder; a javascript file, a css file, and a html file. 
2. In your html file, write the base html needed. 
3. Using a link tag, link the CSS file to the html file.
4. Using a script tag, link the JS file to your html file (where does this script tag go?).

## Second Step: Design and write the html needed for the calculator.

1. My suggestion: Draw out how you want your calculator to look and start thinking about how to structure your html.
2. Think about where the input and output needs to be. 
3. Think about what is going to need to be clicked and how your going to do this later.
4. Think about different positioning techniques youll need to make it look the way you want it to.

## Third Step: Write CSS to make a rough copy of what you want it to look like. 

1. For now, don't spend too much time on this. Get everything positioned roughly where you want. 
2. Make sure all of the interactive parts of the website are able to be seen and clicked upon when you start testing your javascript.
3. Make sure wherever your going to show the output is able to be seen. A good way to do this is to actually hardcode something in so that you know you can see it.

## Fourth Step: And so JS begins.

Now lets start writing out javascript. 

User stories are a great way to break down exactly what needs to be done.
1. Start by figuring out what informtion you need to store. You can always revise this later as you realize you need more. 
2. Next, start determinig how you will handle user input. Start actually writing the event handlers. What needs to change when a user clicks a button?
3. Next, decide what functions need to be defined. When the user clicked a button, what needed to be done?
4. Use the functions previously defined to preform operations on our data. Start using the functions defined above in the event handlers. What functions need to be called when they click a button? when they click an operation?
5. Test, fix, retest, fix, retest,... 
6. Look back on code written and think about better ways to implement it. Maybe somethings not working at all, how can we restructure the code we have so that it does?

### Things to think about when thinking of the solution

1. In this problem, state is very important. Try to think about how your going to store the state of the calculator. What kind of information do you need to track?
2. When the user clicks a button, how are you going to get which number or operation they clicked? When they click a certain button, what code are you going to have to run?
3. Think about the various operations that your going to need to perform. What kind of functions are you going to need? If you followed these steps, you should have a good idea of what you need here when you thought about what needs to happen when a user clicks a button. 


## Fifth Step: clean up and add to it

Once you have the basics of the calculator working and looking decent, start to refactor your code to take out uneeded parts or to implement something in a better way. 

What other operations can you add to the calculator? How woud you implement them? Is your code friendly to adding in new operations?

Does your calculator look a bit dull or ugly? Maybe some cooler CSS would spice it up a bit!

![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: Homework w03d02 <br>
Type: Homework<br>
Duration: "4:00"<br>
Creator:<br>
    Original creators: WDI-Archer, WDI-Funke<br>
    Adapted by: Kristyn Bryan<br>
    Course: WDIr Panthalassa<br>
Competencies: Javascript, CSS, HTML<br>
Prerequisites: Javascript, CSS, HTML <br>

---

# Homework

# Lets build a browser calculator!
![loop](http://www.mememaker.net/static/images/memes/3861758.jpg)

Over the next two nights, you will be building a simple interactive website: a Calculator!

## User Stories

Hey! It's a new vocabulary word!

User stories are a great way to break down what the different features of the website are, and how to structure it. They are generally written out in this form "A user should be able to...". Here are the user stories for our homework:

1. A user should be able to select numbers so that they can do things with them.
2. A user should be able to add numbers together.
3. A user should be able to subtract numbers.
4. A user should be able to divide numbers.
5. A user should be able to multiply numbers together.
6. A user should be able to change the color of the background of their page.
7. A user should be able to select the font for their page.
8. A user should be able to clear all operations and start from 0. 

## First step: creating the file structure

1. Create (touch) 3 files into your homework folder; a javascript file, a css file, and an html file. 
2. In your html file, write the base html needed. 
3. Using a link tag, link your CSS file to the html file.
4. Using a script tag, link the JS file to your html file (where does this script tag go? If you don't know, do some Googling). NOTE: You should add the following line to your .js file `console.log("My .js file is attached to my .html file")`. Open your .html file in your browser. Use your Chrome Dev Tools and look at the console. Do you see "My .js file is attached to my .html file"? If you do, success! You're linked. If you don't see it, then something is amiss. 

**Commit 1** <br>
<hr>
The commit message should read: <br>
"Commit 1: Created .html file, .css file, .js file AND successfully linked them"
<hr>

## Second Step: Design your calculator.

1. Don't code just yet! Draw out how you want your calculator to look and start thinking about how to structure your html. This is your chance to create a [wireframe](http://www.creativebloq.com/web-design/jargon-wireframes-mockups-prototypes-51514898)!
2. Think about where the input and output needs to be. 
3. Think about what is going to need to be clicked and how your going to do this later.
4. Think about where you'll place the area for a user to make custom changes.
5. Think about different positioning techniques you'll need to make it look the way you want it to.
6. Take a picture of the wireframe that you've drawn. Save it to your homework folder. If you've gotten fancy and used an online tool, save it and upload that. 

**Commit 2** <br>
<hr>
The commit message should read: <br>
"Commit 2: Created wireframe for my calculator"
<hr>

## Third Step: Write the html needed for the calculator. 
1. Now that you have your wireframe drawn, use it to write the html elements needed for your calculator.
2. Make a dropdown form that will include the names of two different fonts.
3. Make a radio button form that will allow the users to choose from different background colors (at least two options).

**Commit 3** <br>
<hr>
The commit message should read: <br>
"Commit 3: Initial HTML elements are created for the calculator"
<hr>

## Fourth Step: Write your initial CSS to make a rough copy of what you want your calculator page to look like. 

1. For now, don't spend too much time on your CSS this. You will come back to it, but just get everything positioned roughly where you want (ex: make the elements that will be your buttons on the calculator large enough so that you can see a number displayed). 
2. Make sure all of the interactive parts of the website are visible. This way, as you're building out the functions in your javascript file, you'll be able to test your code. 
3. Make sure that, wherever you are going to show the output, (the screen) is large enough to display the numbers that will be your output. A good way to do this is to actually hardcode something into your html file (like the numbers "123456" inside the element) so that you know you can see it.

**Commit 4** <br>
<hr>
The commit message should read: <br>
"Commit 4: Initial CSS has been created for the calculator"
<hr>

## Fifth Step: And so JS begins.

Now lets start writing out javascript. 

User stories are a great way to break down exactly what needs to be done.
1. Start by figuring out what informtion you need to store. You can always revise this later as you realize you need more. 
2. Next, start determinig how you will handle user input. Start actually writing the event handlers. What needs to change when a user clicks a button?
3. Next, decide what functions need to be defined (hint: `add`, `subtract`, `multiply` are a few). When the user clicks a button, what needs to be done?
4. Use the functions previously defined to preform operations on our data. Start using the functions defined above in the event handlers. What functions need to be called when they click a button? when they click an operation?
5. Test, fix, retest, fix, retest,... 
6. Look back on code written and think about better ways to implement it. Maybe somethings not working at all, how can we restructure the code we have so that it does?

### Things to think about.

1. In this problem, state is very important. Try to think about how your going to store the state of the calculator. What kind of information do you need to track?
2. When the user clicks a button, how are you going to get which number or operation they clicked? When they click a certain button, what code are you going to have to run?

**Commit 5** <br>
<hr>
The commit message should read: <br>
"Commit 5: Javascript for the calculator has been created"
<hr>

## Sixth Step: Improve your CSS and add user customization.

1. Import at least one font from Google fonts.
2. Connect the dropdown form elements in your html and css so that a user can change the font for their page.
3. Connect the radio button form elements in your html with your css so that users can change the color of the background of their page.
4. Use at least one icon or sprite on your page (example: something from [font awesome](http://fontawesome.io/icons/)

**Commit 6** <br>
<hr>
The commit message should read: <br>
"Commit 6: User customization is added and the css has been improved on the calculator"
<hr>

## Seventh Step: clean up and enhance to it

1. Once you have the basics of the calculator working, look back at your code. You want to make it [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).  Start to refactor (another vocabulary word) your code to take out uneeded parts or implement something in a better way. 
2. What other operations can you add to the calculator? If you have time, implement them. If you don't have time, but have some ideas, add comments to your code about what you'd like to add. How might you implement them? Is your code friendly to adding in new operations if another developer came in to add something to your code?
4. Can you think of anything else that might improve a user's experience with your calculator? Can you add any additional customization to your page?
3.Does your calculator look a bit dull? Use some CSS to spice it up a bit!

**Commit 7** <br>
<hr>
The commit message should read: <br>
"Commit 7: Calculator code was cleaned up and I added an enhancement"
<hr>

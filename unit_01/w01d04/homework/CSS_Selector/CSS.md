![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: CSS Selector Homework for w01d04 <br>
Type: Homework<br>
Duration: "2:00"<br>
Creator:<br>
    Original creators: WDI-Archer<br>
    Adapted by: Kristyn Bryan<br>
    Course: WDIr Panthalassa<br>
Competencies: CSS Selectors<br>
Prerequisites: CSS basics, CSS selectors<br>

---
# Homework - CSS Selector Practice

### Before you begin the assignment
Go to the following websites to:   
  
1. Read about [CSS Layout](http://learnlayout.com/)  
2. Practice [CSS selections](http://flukeout.github.io/)   

Next, use the index.html and style.css in this folder to complete the assigment.

### Navigation
1. Inside the nav element, delete the heading and replace it with 3 **li** tags in an unordered list. 
- Within each list element, place an **a** and make the text inside of each **a** "Portfolio", "Bio", and "Contact", respectively. Set the **href** property on the **a** tag equal to "#". This will simply direct the link back to the same page.   
- In your css file, underneath where you see the style for the **nav** (you want to keep all of your navigation styles in the same place), select only the **ul** tag that is inside of the **nav** and give it the following styles...

    ```css
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    ```
- Select all **li** elements inside the **ul**, inside of the `nav` and make them float left. 
- Select all of the a tags inside those **li** elements (so much nesting!) and give them the following styles

    ```css
    display: block;
    width: 120px;
    height: 50px;
    font-weight: bold;
    color: #000;
    background-color: transparent;
    border: 2px solid grey;
    margin: 25px 10px;
    text-align: center;
    padding: 10% 0;
    text-decoration: none;
    text-transform: uppercase;
    ```
**Commit 1** <br>
<hr>
Write an appropriate commit message to reflect what's you've done to your files.
<hr>

### Aligning Left and Right
1. Try floating all of your **nav li** elements to the right, then move them back to the left.
- Try giving only one of you **nav li** elements an ID of 'right' and then float just that one right. Remove the ID if you hate how this looks.
- Give your **nav** element a left margin so that it lines up with the blue boxes on the page, then set it back to 0.
- Find the aside in the CSS, erase its 'right' property and set its 'left' property to 0.
- How should you change the style on the large section so that it is flush with the right side?

**Commit 2** <br>
<hr>
Write an appropriate commit message to reflect what's you've done to your files.
<hr>

### Layout 
1. Locate the **p** tags in each of the small boxed and briefly write your answers to the following five questions in each, respectively
- What is the default display style of a **div** tag?
- What is the best way to horizontally center an element?
- What is the difference between padding and margin?
- What is the difference between fixed and absolute positioning?
- What is a 'clearfix'?
- Give all of your **p** tags a margin of 0px and give your boxes a top/bottom padding of 10px and a right/left padding of 5px, using CSS shorthand

**Commit 3** <br>
<hr>
Write an appropriate commit message to reflect what's you've done to your files.
<hr>

### Change the Colors
Without adding any new IDs or classes, give each of your **p** tags a different font color from this [page](http://www.crockford.com/wrrrld/color.html). You will need to look up what first-child, last-child, and nth-child pseudo-classes are.
Set your header, aside, and footer position to 'fixed', add a margin-top of 150px to your aside and set your body height to 2000px. Scroll down and see what happens.

**Commit 4** <br>
<hr>
Write an appropriate commit message to reflect what's you've done to your files.
<hr>

###Experiment! 
Go to [http://www.cssdesk.com/](http://www.cssdesk.com/), copy and paste your CSS and HTML into the appropriate areas and try adding different colors, display properties, position properties, borders, etc to your elements. Try to make the layout completely unrecognizable.

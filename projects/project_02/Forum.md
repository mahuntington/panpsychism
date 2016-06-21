# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: Building Your First Full-stack Application

## Overview of `Forum.app`

Jake loves discussion amongst his friends, but he wants a way to keep it organized. He wants his own forum.

## Project Details

### Necessary features

A basic implementation of this project must include:

1. Jake wants his friends to be able to discuss things by topics. Users should be able to create topics, and other users should be able to comment on those topics.
2. Jake isn't concerned about sub-comments, for now.
3. Jake also wants to be able to see what topics have the most comments.
4. Jake thinks it would be cool if users could vote on topics, and have the topics displayed based on popularity.
5. Jake wants users to be able to set their username only once, and to have the posts and comments show which user made them.
6. Jake really wants the application to look good.

###  Advanced features

Going above and beyond the basic implementation is desirable, should you have the time.  Feel free to enhance your project with any of the following features:

1. Jake wants users to sign up with a username and password, and to login to the application before being able to use it. (session controllers + user models)
2. Jake would really like the passwords to be secure. (node package: bcrypt)
3. Jake would like the application to look good both on a computer, and on a phone. (CSS: media queries)
4. Jake would like people to comment on comments.  Perhaps this means top-level + one-level deep, or nesting more like reddit?
5. Jake would like the application to automatically tag posts with the location from which they are written. (html5: geolocation + google map api)
6. Jake is a nerd, and is a fan of proper formatting. He wants everyone to write their discussion posts in markdown format. (node package: marked)

## Implementation

### Technologies

You will be expected to use the following technologies to implement this project:

- **HTML**  
  Your HTML should be semantic.

- **CSS**  
  Your app should be stylish.

- **JavaScript & jQuery**  
  Your app should be responsive.

- **node.js & express**  
  Your app will need to have its own server.

- **mongoose**  
  Your app will need to persist data.


### Timeframe

Project kickoff is Friday, June 24th, and last day for development is Monday, June 27th.  We will be demoing our deployed applications on Tuesday, June 28th.

## Expectations

### You

As a student you should be doing the following things:

- **Wireframes**
  Create wireframes in advance for your application to prevent surprises as you develop it.

- **Version Control**  
  Use **git** and **github** for version control, and make frequent incremental commits to prevent large scale implosions.

- **Hosting**  
  Host your application on **Heroku**, and use the **mongolab** plugin to have a cloud-based mongodb.

- **Handling Problem During Coding**
Please remember to try the following things when you encounter a problem:
​
1. If the problem involves a JavaScript error, please try to google the error message.
2. Ask someone on Slack if they've encountered a similar problem.
3. Ask Derek
4. BONUS: Write up your question on stackoverflow and try to elicit community support
5. Finally, create an issue (see what is needed in Project 2 README.md)
	
### Us

Since your instructors will be assessing your work, they will look for the following things:

- **Project Workflow**  
Did you complete the user stories and wireframes, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

- **Technical Requirements**  
Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

- **Creativity**  
Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?

- **Code Quality**  
Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

- **Problem Solving**  
Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations? 

## Deliverables

By the time the project is over, we will expect the following from you:

* A **working app, built by you**, hosted somewhere on the internet
* A **link to your hosted working app** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted project,  and frequent commits dating back to the very beginning of the project
* **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
* **Wireframes of your app** (at least one)
* A link in your ``readme.md`` to the **user stories you created**

Most importantly a **technical demonstration** of your app which:

* Is 5 minutes in length
* Shows off all features of the app
* Explains the technical details
* Explains the technical challenges
* Explains which improvements you might make

![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: Github Collaboration & Branching <br>
Type: Morning Exercise <br>
Duration: "0:45"<br>
Creator:<br>
    Original creator: Kristyn Bryan<br>
    Course: WDIr Panthalassa<br>
Competencies: Github<br>
Prerequisites: none <br>

---

# Morning Exercise

## Github Collaboration

Let's randomly assign the team member letter. The person who has the smaller number in their street address will be Team Member A (Ex: I live at 123 Maple Dr., and my partner lives at 5 Blueberry Ln. -- so my partner is Team Member A).

#### Team Member A
- You will be the Github master for this task.
- Share your screen with your partner
- Create a Github repo called `team-github-practice`
- Add team member B as a "Contributor".
    - `Settings` tab
    - `Collaborators` on the left
    - Confirm your password
    - Add your team mate's Github username
- Check the box for "Initialize this repository with a README"
- Click "Create Repository"

#### Team Member B
- Watch (and help guide if necessary) as your team mate creates the Github repo
- Give your team member your Github username so that they can make you a Contributor

#### Both Team Members
- Go to this new repository on your Github account.
- Click "Clone or Download" and copy the link in the "Clone with HTTPS".
- On your local drive, go to your Desktop or Documents or wherever you keep your development files (outside of any other repos) and, in your terminal, clone the repo `git clone` paste the https link from Github.
- Note, if you type `git remote`, you will see that only `origin` is created as a remote. You will be pushing to and pulling from origin (and the branch name).

## Github Branches

#### Team Member A
- From the master branch, create a branch called `main-page`
- From the branch `main-page`, create an index.html page. 
- In this file, create a page that will display a welcome message when you open in.
- Add, commit, and push your work **to your branch**

#### Team Member B
- From the master branch, create a branch called `main-page-styling`
- From the branch `main-page-styling`, create a style.css file. 
- In this file, add some general styling on the background, `<h1>` tags, and the font.
- Add, commit, and push your work **to your branch**

#### Both Team Members
- Create a pull request by going to into your Github account.
- Click on "Compare & pull request"
- Your `base` branch should be `master` and your `compare` branch should be the branch that you created.
- Write a comment. 
- On the right side, click on "Assignee" and tag your partner. 
- Click "Create pull request".
- DO NOT click "merge".

#### Team Member A
- Look at your team member's pull request. If it looks okay, click "merge".

#### Team Member B
- Look at your team member's pull request. If it looks okay, click "merge".

#### You have now merged your files into master!

#### Both Team Members
- In your terminal, checkout your `master` branch.
- Pull down the most current data by doing `git pull origin master`
- Take a look at your files. Everything should be there.

#### Communicate
- You need to link up that style sheet that you created to the index.html file. How will you do it? Discuss and decide who will do it, which branch you will be on, etc. 
- Go through the pull request process. 
- After the merge, pull the master data to your local file. 
- Open the `index.html` to make sure that everyting is connected properly.

![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: Homework w08d02 <br>
Type: Morning Exercise<br>
Duration: "0:45"<br>
Creator:<br>
    Original creators: Joe Jung for WDI-Meeseeks<br>
    Adapted by: Kristyn Bryan<br>
    Course: WDIr Panthalassa<br>
Competencies: Github Branches<br>
Prerequisites: Github <br>

---

# GIT BRANCHES AND MERGING

### Learning Objectives
- create a branch
- switch branch
- merge a branch
- resolve a merge conflict
- describe a process flow for integrating group work via git and github

##### Why this is important
Up to now, we've used git and github more so to help partition and track our projects and assignments. We've never really utilized nor dealt with the necessity of version control in collaborative development, which is a requirement for your next project!

##### How we will learn this
- We'll be running commands locally on our git.
- Diagram processes on git and github
- Mimic merge conflicts!

### Branches
The concept of branching is that you are creating a replica of your codebase, where you can diverge from the main line of development, to continue to fearlessly work without breaking the main line.
​
- Every repo has a branch, you are always on a branch. From day 1, we've been using the Master branch which is the default branch created for every repository.

- Branches exist locally on our git, as well as remotely on GITHUB! This is a HUGE concept to remember!

- Creating a new branch *replicates the branch you are currently on*.


###### Commands
- `git branch` will return a list of branches for that repo along with an asterisk next to the current branch
​
- `git checkout -b branchname`: this will make an identical copy of the branch you are on, with the name you enter for branchname, and change you to the new branch
​
- `git checkout branchname`: this is how you switch branches
​

## Exercise
- In your terminal, go inside your `unit_03/section/w08d02/morning_exercise` folder.
- Create a directory called `branch_test`
- CD into it
- touch file1.md
- git init
- make your init commit
- create and checkout into test-branch1
- touch file2.md
- commit
- check back into master branch
- is file2.md there? Why or why not?

- ALWAYS FROM MASTER, create and checkout test-branch2
- touch file3.md
- touch file4.md
- commit
- Look at your files. Which ones are there?

- checkout back to master
- Which files are there?

#### Branch Conventions
- Branches should typically be named after features you are working on.
	- Process flow depends from place to place but ultimately, the idea of creating a new branch emphasizes my favorite thing ever....Separation of concerns.
		- If you're are building a nav bar: create a branch for just that feature.
		- If you're working on user auth: create a branch for only working on user auth.
		- If you're working on debugging an error: create a branch for only debugging that error.
	- DO NOT WORK ON MULTIPLE FEATURES UNDER 1 BRANCH. This makes merging, QA, and ultimately version control extremely difficult and is counterintuitive to collaborative development.
		- Imagine 15 different branches, each branch specifically tracking work for 1 piece of functionality. Even if one branch causes a break, you can still integrate the remaining 14 features as they are each separate branch. Compare this to if someone wrote all 15 functionalities on 1 branch...if one broke, the entire branch is in essence is corrupted, and every single piece of QA every line by line change must be done before it could be merged.

### Remote Branching
So far we've just played with local git branches. But once we sync a github remote repo to our local repo, we realize that the remote github repo can have branches too.
​
The most important tip in understanding a groups process flow is remembering all the moving parts.
​
Each teammember can have their local git with various branches, and their remote github with various branches.
​
How these all play out is completely dependent upon the release management plan which can vary tremendously.
​
We'll run through a good scenario in a bit.

### Merging
Merging is when you integrate the work from various branches. Git does a pretty good job integrating changes as seamlessly as possible. Merge conflicts naturally occur during the course of group work, it's not always an indicator of bad code or someone doing something wrong.

##### Local Merging
We strongly advise local merging. By that we mean, regardless of who did what on where (github, local machines), you should have an up-to-date master branch on your local machine and up-to-date branches.
​
`git merge branchname`
​
- This will merge branchname into the branch I am currently on
- Once again, it's always important to remember what branch you are on.
- Merging will incorporate the latest state of a branches commit to another.
- Always keep up to date with commits.

## EXERCISE
- Make master branch have all the files by doing the following:
- git checkout test-branch1
- verify the files and commit
- check back into master
- git merge test-branch1
- check your file - did it merge?
- repeat the process of checking into branches and verifying the files and commits for the rest of your branches, then check into master and merge them.
- Note: when you are doing this in a development environment, your code would only be merged onto the master after your branch passed inspection by another developer and they merged your code (or if you approved the code from another developer and merged their code).
- You can also handle merges from the github remote account using pull requests. We will do this in the next exercise.


### Merge Conflicts
Merge conflicts don't occur as frequently when using git on your own as opposed to when multiple branches exist with various time streams of commits.
​
- insde your `branch_test` file, mkdir and cd into `conflicts`
- touch `scripts.js`
- Add the following code:
```
console.log(1);
console.log(2);
console.log(3);
```
- git add, commit
- git checkout -b adding-numbers
- add console.log(4) and console.log(5) to your `scripts.js` file
- git add, commit
- git checkout master
- git checkout -b adding-names 
```
console.log(1);
console.log(2);
console.log(3);
console.log('a');
console.log('b');
console.log('c');
```
- git add, commit
- git checkout master
- git merge adding-numbers
- git merge adding-letters
​
- MERGE CONFLICT
	- Resolving them in sublime, open the entire repo in sublime
	- `Command` + `Shift` + `f`, do a search for `<<<`
	- This will open up all the results in the codebade that have a HEAD error message
​
	Observe...
	```
	console.log(1);
	console.log(2);
	console.log(3);
	<<<<<<< HEAD
	console.log(4);
	console.log(5);
	=======
	console.log('a');
	console.log('b');
	console.log('c');
​
	>>>>>>> add-letters
​
	```
	- Here you now need to resolve the merge accordingly to the context of what you want your codebase to be. The make a new commit!
	```
	console.log(1);
	console.log(2);
	console.log(3);
	console.log(4);
	console.log(5);
​
	console.log('a');
	console.log('b');
	console.log('c');
	```
	- git add -A, commit -m "merge resolved"

### SUGGESTED TEAM WORKFLOW
​
- Appoint a git master/leader/overlord/mastermind/tactician/or other cool title
- THE TEAM is responsible for version control; it's not fair or right to dump git issues on the overlord and walk away.
- The overlord is the point of contact to handle the team's various accounts.
- The overlord should make the remote repo on their github
	- Add their teammates as collaborators on that github remote repo
​
OVERVIEW
- All team members will work on new branches off local
- All team members will push their new branches to new branches on the remote repo
- All team members will constantly pull master whenever they start a new feature branch, go eat a meal, start a day, end of day, etc. The more frequent they pull from master, the easier merging will be.
​

### Final thoughts
- ALWAYS KNOW WHAT BRANCH YOU ARE ON
- NEVER CREATE A NEW BRANCH OFF A FEATURE BRANCH. ONLY CREATE A NEW BRANCH OFF MASTER
- Pull from origin master frequently. Doing this often alleviates technical debt.
- Every team member should know how the git process works to avoid headaches and confusion.
- It might behoove teams to set up merge points during each day.
- Divying up workload into specialized areas when possible also alleviates merge conflicts
- Pair programming: multiple devs working off 1 computer also minimized merge conflicts
- DON'T DELETE BRANCHES. Better having redundant branches than losing work.
- DON'T TIME TRAVEL. Each team member has a local git and a remote github. Each has multiple branches, both remote and local. Each branch has different commit time streams. When reverting time you are messing with the HEAD.


### LAB
Partner up.
​
Partner A. Create a directory, git init. Create an index.html file that has an `<h1>` that welcomes you to the page. Git add and commit.
​
Create a remote repo on github. Sync that remote to your local. Push and update the remote.
​
Add your partner as a collaborator on github.
​
Partner B, clone the repo from the github remote so you also have it on your local.
​
Partner A
	- Check you are on master branch
	- Create a new branch called style-main-page.
	- in that branch, create a .css style sheet.
	- add styling that changes the background color of the .html page. Link the pages.;
	- make a commit
	- git push origin style-main-page.
​
Partner B
	- Check you are on master branch
	- Create a new branch called footer-main-page
	- in that branch, open up your index.html
	- Add `<footer>` tags to the bottom of your page and add the names of two footer links.
	- Make a commit
	- git push origin footer-main-page
​
Check github. You should see 3 branches on the remote, master, footer-main-page, and style-main-page.
​
Partner A
- Make sure you are on your local master `git checkout master`
- Make sure your local master is up to date with remote master `git pull origin master`

Github:
- Go to your Github repo
- Click "New Pull Request"
- "base" should be `master` and "compare" should be the branch that you want to merge (the one that you worked on).
- Add a comment. Click "Comment". 
- Partner A should take a look at Partner B's pull request, merge if okay, or comment back if it's not okay.
- Partner B should take a look at Partner A's pull request, merge if okay, or comment back if it's not okay.
 
OR

Local: 
- Replicate the missing branch(es) that are done and on the remote that you do not have on your local.
- git checkout -b footer-main-page
	- You are now in a new local branch with the same name, but it is a carbon copy of master
	- git pull origin footer-main-page
		- Now you are updating your local footer-main-page with the one from remote.
- git checkout master. Make sure you go back to master.
- from master, merge footer-main-page `git merge footer-main-page`

- repeat the process for style-main-page (keep in mind your local get- routes branch will be identical to the remote one so there's no real surprise);
- resolve the conflict as you see fit as relevant.

# GIT BRANCHES AND MERGING
​
===== LAPTOPS CLOSED =====
​
### Learning Objectives
- create a branch
- switch branch
- merge a branch
- resolve a merge conflict
- describe a process flow for integrating group work via git and github
​
​
##### Why this is important
Up to now, we've used git and github more so to help partition and track our projects and assignments. We've never really utilized nor dealt with the necessity of version control in collaborative development, which is a requirement for your next project!
​
​
##### How we will learn this
- We'll be running commands locally on our git.
- Diagram processes on git and github
- Mimic merge conflicts!
​
​
### Branches
The concept of branching is that you are creating a replica of your codebase, where you can diverge from the main line of development, to continue to fearlessly work without breaking the main line.
​
- Every repo has a branch, you are always on a branch. From day 1, we've been using the Master branch which is the default branch created for every repository.
​
- Branches exist locally on our git, as well as remotely on GITHUB! This is a HUGE concept to remember!
​
- Creating a new branch replicates the branch you are currently on.
​
- Changes branches literally changes the OS file structure for that repo.
​
​
###### Commands
- `git branch` will return a list of branches for that repo along with an asterisk next to the current branch
​
- `git checkout -b branchname`: this will make an identical copy of the branch you are on, with the name you enter for branchname, and change you to the new branch
​
- `git checkout branchname`: this is how you switch branches
​
===== LAPTOPS OPEN ======
• Exercise
- Create a directory
- CD into it
- touch file1.txt
- git init
- make your init commit
- create and checkout into test-branch1
- touch file2.txt
- commit
- check back into master branch
- create and checkout test-branch2
- touch file3.txt
- touch file4.txt
- commit
- check back to master
​
​
Branch Conventions
- Branches should typically be named after features you are working on.
	- Process flow depends from place to place but ultimately, the idea of creating a new branch emphasizes my favorite thing ever....Separation of concerns.
		- If you're are building a nav bar: create a branch for just that feature.
		- If you're working on user auth: create a branch for only working on user auth.
		- If you're working on debugging an error: create a branch for only debugging that error.
	- DO NOT WORK ON MULTIPLE FEATURES UNDER 1 BRANCH. This makes merging, QA, and ultimately version control extremely difficult and is counterintuitive to collaborative development.
		- Imagine 15 different branches, each branch specifically tracking work for 1 piece of functionality. Even if one branch causes a break, you can still integrate the remaining 14 features as they are each separate branch. Compare this to if someone wrote all 15 functionalities on 1 branch...if one broke, the entire branch is in essence is corrupted, and every single piece of QA every line by line change must be done before it could be merged.
​
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
​
​
### Merging
Merging is when you integrate the work from various branches. Git does a pretty good job integrating changes as seamlessly as possible. Merge conflicts naturally occur during the course of group work, it's not always an indicator of bad code or someone doing something wrong.
​
##### Local Merging
I strongly advise local merging. By that I mean, regardless of who did what on where, I like having branches on my local laptop, and merging them through my terminal.
​
`git merge branchname`
​
- This will merge branchname into the branch I am currently on
- Once again, it's always important to remember what branch you are on.
- Merging will incorporate the latest state of a branches commit to another.
- Always keep up to date with commits.
​
EXERCISE
- Make master branch have all the files
- git checkout test-branch1
- verify the files and commit
- check back into master
- git merge test-branch1
- repeat the process of checking into branches and verifying the files and commits, then check into master and merge them.
​
​
You can also handle merges from the github remote account using pull requests but I dislike that process for various reasons...
​
1. Local merging allows you to merge using sublime instead of the github website, in other words it's my own comfort level with subl linter, and various search commands that let me run throughout a codebase structure much faster `command` + `shift` + `f` in particular.
​
2. Local merging involves me directly running other branches on MY local environment allowing me to QA work directly. Code that is tested across other people's environments is definitely considered better code. Do not assume it worked on mine, it must be fine. Finding bugs early means less future branch merges will be corrupted.
​
### Merge Conflicts
Merge conflicts don't occur as frequently when using git individually as opposed to when multiple branches exist with various time streams of commits.
​
- mkdir and cd into `conflicts`
- touch scripts.js
```
console.log(1);
console.log(2);
console.log(3);
```
- git add, commit
- git checkout -b add-moar-numbers
- add console.log(4) abnd console.log(5)
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
	- Before proceeding, let's diagram where we are at.
​
​
- git merge add-numbers
- git merge add-letters
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
​
-----
​
### SUGGESTED TEAM WORKFLOW
​
- Appoint a git overlord/mastermind/tactician/ninja/or other badass title
- THE TEAM is responsible for VCS, it's not fair or right to dump git issues on the overlord and walk away.
- The overlord is the point of contact to handle the team's various accounts.
- The overlord should make the original repo on local
- The overlord should make the remote repo on their github
	- Add their teammates as collaborators on that github remote repo
​
OVERVIEW
- All team members will work on new branches off local
- All team members will push their new branches to new branches on the remote repo
- The overlord will begin a merge process where he/she recreates all the new branches on the remote onto their local
	- Overlord merges all the new local branches into master branch one by one off their local
	- Overlord push the new master branch to remote
- All team members will constantly pull master whenever they start a new feature branch, go eat a meal, start a day, end of day, etc. The more frequent they pull from master, the easier merging will be.
​
DIAGRAM DIAGRAM DIAGRAM
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
- Don't avoid VCS, tackle it head on. Be sure to rep the process with everyone before starting! If a team member can't explain it or whiteboard it, don't assume it will work itself out. Submit a git issue or ask an instructor for help getting the process down.
​
​
### LAB
Partner up.
​
Partner A. Create a directory, git init. npm init an express app that just runs app.listen and console logs the port. Git add and commit.
​
Create a remote repo on github. Sync that remote to your local. Push and update the remote.
​
Add your partner as a collaborator on github.
​
Partner B, clone the repo from the github remote so you also have it on your local.
​
Partner A
	- Check you are on master branch
	- Create a new branch called get-routes-branch
	- in that branch, npm install express.
	- Add a get request to '/' that res.send('root');
	- make a commit
	- add another get request to '/joe' that res.sends('Joe');
	- make a commit
	- git push origin get-routes-branch
​
Partner B
	- Check you are on master branch
	- Create a new branch called big-nasty-thom
	- in that branch, npm install express
	- Add a get request to '/thom' that res.send('Thom');
	- Make a commit
	- Add a get request to '/matt' that res.send('Matt');
	- ADD A COMMENT UNDER EACH REQUEST THAT INCLUDES YOUR FAVORITE FOOD
	- Make a commit
	- git push origin big-nasty-thom
​
Check github. You should see 3 branches on the remote, master, big-nasty-thom, and get-routes-branch.
​
Partner A
- Make sure you are on your local master `git checkout master`
- Make sure your local master is up to date with remote master `git pull origin master`
- Replicate the missing branch(es) that are on done and on the remote that you do not have on your local.
- git checkout -b big-nasty-thom
	- You are now in a new local branch with the same name, but it is a carbon copy of master
	- git pull origin big-nasty-thom
		- Now you are updating your local big-nasty-thom with the one from remote.
- git checkout master. Make sure you go back to master.
- from master, merge big-nasty-thom `git merge big-nasty-thom`
- repeat the process for get-routes-branch (keep in mind your local get- routes branch will be identical to the remote one so there's no real surprise);
- resolve the conflict as you see fit as relevant.
- Both partners diagram each process off whiteboard or table!

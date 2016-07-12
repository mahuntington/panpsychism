# SQL Practice - JOINS II

We will be using the users and regions database, `meetup_app`, to make a many-to-many association.


##Many to Many
We want our users to be able to add favorite hobbies. Each user may have many hobbies and each hobby belongs to many users. We will need to set up a table for each of our hobbies and then create a second 'linking table' (also called a 'join table' or 'junction table') where we associate user IDs with hobby IDs.

  - Make a table for `hobbies`. Each hobby should have
    - Unique ID
    - Name
  - Create a table called `user_hobbies`. This will be our linking table
    - Each entry in this table should have a `user_id` and a `hobby_id` to connect each user with each of their hobbies
  - Create at least 5 hobbies and associate them with your users
  - Practice making queries
  	- Display all the users and all the hobbies
    - Find all users with a given hobby
    - Order your hobbies by the number of users who have them
    - Order your users by who has the most hobbies


##**BONUS** - Self Joins
We want our users to be able to 'like' each other. We need to keep track of who has liked who and when.

  - Create a `likes` table. Each 'like' should have
    - A unique ID
    - An `admirer_id` (the id of the user who did the liking)
    - A `recipient_id` (the id of the user who was liked)
  - Practice making queries
    - Find all likes
    - Find the user with the most admirers
    - Find the user who admires the most people
    - Find all users who like only 1 person
    - Find all users who like at least 2 people

##**SUPER BONUS!!!**
Try these super hard 'like' queries! Only for the brave!

    - Find all users who mutually admire each other
    - Find all users who admire someone but no one admires them :(
    - Find all users who are admired but don't admire anyone yet
    - Find users who admire less than 3 people and are admired by at least 1 person  
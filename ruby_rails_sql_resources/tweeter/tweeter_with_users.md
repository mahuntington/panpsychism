# TWEET_R AGAIN

![](http://40.media.tumblr.com/849d9cbb8f130e43a3d1405e2992aca5/tumblr_inline_nx1g3ppzBs1rxiizg_400.jpg)

## Oh goody.
</br>

We are going to build on the Tweet_r app that you started in the weekend, but this time we will have users. Users will be related to tweets via a **one-to-many association**. The Users model and authentication will be handled with the Devise gem. For this project, you can either:

- Make the Tweet_r app again with users in mind. (Tweets will not need an index page this time). Recommended.
- Adjust the Tweet_r app you previously made. In this case you will need to run a migration that adds references to your Tweet model.


### APP - USER STORIES

- Your app should have signup, login, logout functionality.
- There should be an index of users, visible to anyone. You should be able to click on a user and go to the show page.
- If you look at a user's show page, you should see the user's tweets.
- If you click on a user's tweet, you should go to the tweet's show page.
- If a user logs in / signs up, that user should be able to post tweets to his or her own page.


### MODELS
You will need:

- **User**. Set up your app to use Devise, and make your User with Devise. See the class notes.
- **Tweet**. Remember that the Tweet migration will need a foreign key to reference User. Your Tweet migration file could look exactly like this:

```
class CreateTweets < ActiveRecord::Migration
  def change
    create_table :tweets do |t|
    	t.string :title
    	t.text :content
    	t.references :user
    end
  end
end
```

After you run the migration, check out `schema.rb` and see that the migration made a `user_id` column with type `integer`. 


```
RELATIONSHIP:

There is a one-to-many relationship between User and Tweet.

- A User `has_many :tweets`

- A Tweet `belongs_to :user`

```


### ROUTES

The Devise gem requires that you specify a root, so lets set `root to: 'users#index'` 

```
QUESTION
Considering that you made the User with Devise, do you need to set resources to get RESTful routes for your User? Have a think about it, or better yet, experiment in order answer the question.
```

The answer is: Yes, you will want to set `resources :users` so that we can access a users index route, show route, etc. By the same token we will also want to make our own Users controller . . . continued below.

There is no real need to use nested resources in this app, but it would be good practise for a bonus.



### CONTROLLERS
Don't worry about full CRUD. Just get it so that you can see the Tweets associated with particular Users.

```
QUESTION
Considering that you made the User with Devise, should you even create a Users controller? How can we get our actions for our RESTful routes? Have a think, or better yet experiment to answer the question.
```

The answer is: Devise doesn't give us our restful routes. We can go ahead and make our own Users controller to do this, and it's safe to do so. Make an index and a show to begin with.

Later, there will need to be a way to make new Users and new Tweets associated with a User, and a way to see individual Tweets.


### SEEDING AND VIEWS

You don't have to seed Users thanks to Devise, but seed a Tweet or two using `seeds.rb`. Use a user's id as the `user_id`.

### Good luck!

</br>


# SUGGESTED SEQUENCE OF EVENTS:

1. Set up a User with Devise, add resources to routes, and index/show actions to a Users controller
2. Show all users on the users index page
3. Click on a user and go to the users show page
4. Create a migration for Tweet including a reference to User
5. Seed a couple'a tweets, using a user id as the user_id
6. Display the tweets on the user's show page
7. Make it so that when you click on a Tweet, you go to its show page
8. Make it so a user can make a new Tweet


### BONUS

Use nested resources to display your users' tweets

Add a third model, `Comment`. A User should be able to make a comment on a tweet. (More complicated than it sounds).














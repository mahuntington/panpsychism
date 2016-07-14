![ga](http://mobbook.generalassemb.ly/ga_cog.png)

# WDI-PANTHALASSA

---
Title: Ruby classes I <br>
Type: Homework<br>
Duration: One evening<br>
Creator: Thom Page <br>
Course: WDIr-Panthalassa<br>
Competencies: Ruby classes, instance methods, inheritance<br>

---

## RUBY CLASSES

#1. Classes
Watch the short video [here](https://www.youtube.com/watch?v=r6wVziWXYWI). 6 mins 23 seconds.


##Exercises:
1. Create a Muppet class that takes in a `name` and puts `"This muppet is called #{name}!"` on  `initialize`.   
  - Assign the muppet a random color on initialize.  
2. Create a Bird class that takes in an `adjective` and a `name` and  puts `"#{name} is a(n) #{adjective} bird!"` on  `initialize`.   
  - Assign the bird a species at random on initialize.  

#2. Instance Methods
Watch the short video here [here](https://www.youtube.com/watch?v=c2a2bZf3LH4). 8 mins 22 seconds.


##Exercises:
* Add instance methods to your Muppet
  - Add a `honk` instance method to your muppet that puts `"#{name} is making a honking sound!"`. Test that it works.
  - Add a `flail` instance mthods that puts `"#{name} is flailing its arms!"`. Test that it works.
* Add instance methods to your Bird
  - Add a `hungry` method that puts `"#{name} wants some regurgitated worms!"`. Test that it works.
  - Add a `fly` method that puts `"Flap! #{name} is taking flight!"`. Test that it works.
4. Make your bird's `adjective` and `name` accessible. Test that this works.
 

#3. Inheritance 
Watch the short video [here](https://www.youtube.com/watch?v=BJWcH8Pnafw). 6 mins 56 seconds.


##Exercises:
1. Create a class called `Dessert` that has instance variables of `@name` and `@sugar_content`
2. Give it an instance method of `eat` that puts `"Yum! This #{name} is sooooo delicious!"`
3. Make two new classes called `Pie` and `DeepFriedDessert` that inherit from `Dessert`
4. Give the `DeepFriedDessert` its own `eat` method that instead puts `"Yum! This #{name} is sooo...ack! ugh! *heart-attack*"`
5. Make a new class `IceCream` that inherits from `Dessert` use `super` to get the instance variables of `@name` and `@sugar-content`. Also give `IceCream` its own unique instance variable of `@toppings`



#5. Reps with Classes

### The Universe

What's in a Class? Make a class called `Universe` that:

1. Takes three parameters. These are the three things within the universe. Save these things to instance variables using an `initialize` method.

2. Has an instance variable `@expanding = true`

3. Has an instance variable `@conservation = true`

4. Has a method that will print out all the things in this universe.

5. Has a method called `create` that takes a parameter and will add a new thing to the universe (taken from the parameter). If `conservation = true` then one of the three things in the universe is *replaced* by the new thing. If not, then a new thing is added to the others.

6. Has a method that changes `expanding` to `false` if there are more than ten things in the universe, which means the universe is now contracting . . .  (there's no stable universe in this scenario).

7. Has a method called `whim` that changes `conservation` from `true` to `false`

8. Has a method called `crunch` wherein, if `expanding` equals `false`, removes each item from the universe (sets it to null) and prints a string saying the name of the
item and that it has been crunched due to gravity. When the final item remains, remove that item and print "The Universe has ended."

Test out your Universe by instantiating a `new` Universe with its parameters and running your commands. 



#3. Class Methods and 'Self'
Watch the short video [here](https://www.youtube.com/watch?v=0r93ZhzpeqI). 8 mins 28 seconds.

##Exercises:
* Experiment with `self`
  - Add a class method `self.what_is_self` to your Bird class and have it put `self`.    
  - Add an instance method `what_is_self` to your Bird class and have it put `self`.    
  - Try calling both of these methods in Pry and see what they return.  
2. Add a class method to make puppies!
  - add an instance variable that adds a characteristic like 'playful', 'brave', 'loyal'
  - add a class method of `make_puppy` to your dog class that takes in two dogs and returns a new dog.  
  - the new dog should have fur color of the first dog and the quality of the second dog.  
  - make puppies! 
-----------

#X. Ruby problems

100 goblins
caesar cipher






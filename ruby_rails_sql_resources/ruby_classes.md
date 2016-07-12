## RUBY CLASSES

#1. Classes
Watch the short video [here](https://www.youtube.com/watch?v=r6wVziWXYWI). 6 mins 23 seconds.


##Exercises:
1. Create a Dog class that takes in a name and puts `"Meet #{name}, your new dog!"` on  `initialize`.   
  - Assign the dog a random fur color on initialize  
2. Create a Bird class that takes in an adjective and a name and  puts `"#{name} is a(n) #{adjective} bird!"` on  `initialize`.   
  - Assign the bird a species at random on initialize  

#2. Instance Methods
Watch the short video here [here](https://www.youtube.com/watch?v=c2a2bZf3LH4). 8 mins 22 seconds.


##Exercises:
1. Add instance methods to your dog
  - Add a `bark` instance method to your dog that puts `"#{name} is barking!"`
  - Add a `growl` instance mthods that puts "Grrrrrrr..."
3. Add instance methods to your bird
  - Add a `hungry` method that puts `"#{name} wants a cracker!"`
  - Add a `fly` methods that puts `"Flap! #{name} is taking flight!"`
4. Make your bird's ajective and name accessible

#3. Class Methods and 'Self'
Watch the short video [here](https://www.youtube.com/watch?v=0r93ZhzpeqI). 8 mins 28 seconds.

##Exercises:
1. Experiment with `self`
  - Add a class method `self.what_is_self` to your Bird class and have it put `self`.    
  - Add an instance method `what_is_self` to your Bird class and have it put `self`.    
  - Try calling both of these methods in Pry and see what they return.  
2. Add a class method to make puppies!
  - add an instance variable of quality to your dog (here we will put a characteristic like 'playful', 'brave', 'loyal')
  - add a class method of `make_puppy` to your dog class that takes in two dogs and returns a new dog.  
  - the new dog should have fur color of the first dog and the quality of the second dog.  
  - make puppies!  

#4. Inheritance 
Watch the short video [here](https://www.youtube.com/watch?v=BJWcH8Pnafw). 6 mins 56 seconds.


##Exercises:
1. Create a class called `Dessert` that has instance variables of `@name` and `@sugar_content`
2. Give it an instance method of `eat` that puts `"Yum! This #{name} is sooooo delicious!"`
3. Make two new classes called `Pie` and `DeepFriedDessert` that inherit from `Dessert`
4. Give the `DeepFriedDessert` its own `eat` method that instead puts `"Yum! This #{name} is sooo...ack! ugh! *heart-attack*"`
5. Make a new class `IceCream` that inherits from `Dessert` use `super` to get the instance variables of `@name` and `@sugar-content`. Also give `IceCream` its own unique instance variable of `@toppings`




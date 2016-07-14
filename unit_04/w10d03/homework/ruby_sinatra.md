   

# RUBY AND SINATRA PRACTISE

![rs](https://thejewelerblog.files.wordpress.com/2014/07/guysanddolls1.jpg)


Make a homework.rb file in your repo for tonight and put the answers
to Part One in there.
  
## PART ONE: METHODS AND CLASSES

### 1. Palindrome

Make a ruby method that returns true if a string is a palindrome, false if not. Make sure it returns the correct result for words with capital letters.


### 2. The Caesar Cipher

From Wikipedia:

> In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. The method is named after Julius Caesar, who used it in his private correspondence.

We're going to implement a simple Caesar Cipher called ROT13 ("rotate by 13 places"). The transformation can be represented by aligning two alphabets, like so:

```
Plain:    abcdefghijklmnopqrstuvwxyz
Cipher:   nopqrstuvwxyzabcdefghijklm
```

ROT13 is its own inverse; that is, to undo ROT13, the same algorithm is applied, so the same action can be used for encoding and decoding. The algorithm provides virtually no cryptographic security, and is often cited as a canonical example of weak encryption. ROT13 is used in online forums as a means of hiding spoilers, punchlines, and puzzle solutions from the casual glance.

**Directions:**
Read up on the difference between **class methods** and **instance methods** here: (http://www.railstips.org/blog/archives/2009/05/11/class-and-instance-methods-in-ruby/). Just read through the first two examples, no need to dwell.

Make a class called `Cipher`, and implement a **class method** `encode` that takes a word as an argument and returns its ciphertext using ROT13.

You can then call the class and its method and get a result as follows:

```
Cipher.encode("hello")
=> "uryyb"

Cipher.encode("peter")
=> "crgre"
```
  
  
### 3. The Universe

Make a class called `Universe` that:

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


-----------


## PART TWO: SINATRA

### Sinatra Grocery Store II

Build a Grocery Store App with Sinatra. Using parameters, the app should simply return the cost of the grocery in question. Remember to quit and reload your app when you make changes! Remember that ctrl + C quits out of your server! Remember to load your server at localhost:4567 in your browser to see the result! 


Examples:

|  Sample Path        | Info On Page         |
| -----------         | ------------         |
| /store/lettuce      | Lettuce costs: $7    |
| /store/gruyere      | Gruyere costs: $110  |
| /store/mussels      | Mussels costs: $41   |
| /store/plantains    | Plantains costs: $5  |
| /store/cashews      | Cashews costs: $20   |
| /store/icecream     | Icecream costs: $9   |
| /store/knish        | Knish costs: $3      |
| /store/baklava      | Baklava costs: $2.5  |


### Setup

Make a `store.rb` file. Remember to `require sinatra` at the top of your `store.rb` file.


### Part 1:

Start by preparing `store.rb` and getting the eight routes to work with the correct message as in the table above.


### Part 2:

Using this as a clue:

```
get '/hello/:name/' do
	"Why, hello #{params[:name]}"
end
```

Make it so you can choose what the price of your groceries will be by entering it into the URL bar.
For example `store/lettuce/7` will show: `Lettuce costs: $7`



### Part 3:
Using this as a clue:

```
get '/:name/:city' do
	"Why, hello #{params[:name]} from #{params[:city]}"
end
```

Make it so you can enter any grocery that could possibly exist, and any price, and get the result as above.


### Part 4:

1. Make a route that redirects `'/'` to `'/store'`.

2. Make a 'not found' message that appears if the route is not found (404).
  


#### End





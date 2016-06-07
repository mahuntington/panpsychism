# Vampires!

![Interview with the Vampire](https://mischiefmanagedsite.files.wordpress.com/2014/05/3.gif)

### Setup

1. Start `mongod`

2. Open your mongo console with `mongo`. Note: This homework is done in the terminal, there is no Express.

3. Connect to a new database called `monsters` with `use monsters`

4. Using the js objects of vampires in `populateVampires.js`, add the vampires to a `vampires` collection. Hint: you can use the **Adding Losts of New Documents** syntax from the example at the bottom of this document.


### Resources

#### Utilize the following resources to research the commands you will need
[https://docs.mongodb.org/manual/reference/operator/query/#query-selectors]

[http://mongoosejs.com/]

## MONGO SELECTION COMMANDS


***For the following parts, write mongo queries in your CLI, and when you figure out the right answer, copy the correct mongo queries into a `selectVampires.md` file.***


### Part 1
#### Select by comparison

Select all the vampires that:

  - have greater than 500 victims
  - have fewer than or equal to 150 victims
  - have a victim count is not equal to 210234
  - have greater than 150 AND fewer than 500 victims

### Part 2
#### Select by exists or does not exist
Select all the vampires that:

  - have a title property
  - do not have a victims property
  - have a title AND no victims
  - have victims AND the victims they have are greater than 1000

### Part 3
#### Select objects that match one of several values
Select all the vampires that:

  - love either `frilly shirtsleeves` or `frilly collars`
  - love `brooding`
  - love at least one of the following: `appearing innocent`, `trickery`, `lurking in rotting mansions`, `R&B music`
  - love `fancy cloaks` but not if they also love either `top hats` or `virgin blood`
    \* *Hint-You will also have to use $nin* \*
    
    ### Part 4
#### Select objects that match one of several values
Select all the vampires that:

  - love either `frilly shirtsleeves` or `frilly collars`
  - love `brooding`
  - love at least one of the following: `appearing innocent`, `trickery`, `lurking in rotting mansions`, `R&B music`
  - love `fancy cloaks` but not if they also love either `top hats` or `virgin blood`
    \* *Hint-You will also have to use $nin* \*

### Part 5
#### Select with OR
Select all the vampires that: 
 
  - are from `New York, New York, US` or `New Orleans, Louisiana, US`  
  - love `brooding` or `being tragic`  
  - have more than 1000 victims or love `marshmallows`  
  - have red hair or green eyes  

### Part 6
#### Negative Selection
Select all vampires that:  

  - love `ribbons` but do not have blonde hair  
  - are not from Rome  
  - do not love any of the following:
  [`fancy cloaks`, `frilly shirtsleeves`, `appearing innocent`, `being tragic`, `brooding`]  
  - have not killed more than 200 people  

### Part 7
#### Replacing a record
Replace the following:  

  - replace the vampire called 'Claudia' with a vampire called 'Eve'. 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'  
  - replace the first male vampire with another whose name is 'Guy Man', and who has a key 'is_actually' with the value 'were-lizard'
  
### Part 8
#### Update single values
Update the following:

  - Update 'Guy Man' to have a gender of 'm'  
  - Update 'Eve' to have a gender of 'f'  
  - Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'  
  - Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'
  - Rename 'Eve's' name field to 'moniker'
  
### Part 9
#### Remove documents
https://docs.mongodb.org/manual/tutorial/remove-documents/

  - Remove a single document wherein the hair_color is 'brown'
  - Remove all documents wheren the eye-color is 'green'


### Bonus

Make an express app and include Mongoose. Make a Mongoose schema for Items, populate the database with two items, then make an index route that will res.send the json for those items.

Extra bonus: Make a show route.
	
  
#### Adding Lots of New Documents in plain Mongo

Pretend we have a collection called `people` and want to add lots of documents, we can simply provide this __array__ to the _insert_ method and it will create a document for each object in the array.

```
[
  {
    "name": "Emma",
    "age": 20
  },
  {
    "name": "Ray",
    "age": 45
  },
  {
    "name": "Celeste",
    "age": 33
  },
  {
    "name": "Stacy",
    "age": 53
  },
  {
    "name": "Katie",
    "age": 12
  },
  {
    "name": "Adrian",
    "age": 47
  }
]
```

> Note: Be sure to type the closing parenthesis of the _insert_ method!

`db.people.insert([array])`






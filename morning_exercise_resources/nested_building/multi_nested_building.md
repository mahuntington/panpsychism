# THE BUILDING

![building](http://s3.amazonaws.com/downtownbrooklyn/data/Downtown_Brooklyn/releases/20130227172638/public/ckeditor_assets/pictures/103/content_header-81-willoughby.jpg)

## Nested for loops
## Iterating over multi-dimensional arrays


```
var building = [
     			["Aaron", "Agamemnon"],
                ["Bob", "Blob"],
                ["Catherine", "Carrot", "Chris"],
                ["Dustin", "Drapes"],
                ["Ekaterina", "Elbow-Bone"],
                ["Francesca", "Flan", "Flipper", "Fozzy"],
                ["Gustina"],
                ["Harriet", "Harmony", "Ham"]
               ];
```


The building array is a multi-dimensional array representing an eight-storie building. Each of the inner arrays contains the occupants of a particular floor of the building. 


### Directions


Susan, the building manager, wants a couple of things from you. 

- Provide her with a list of everyone in the building-- an array of strings called `roster`. Using a for loop, iterate over the buildings array in order to access each floor. To access each occupant of each floor, you will need to use another loop inside this one. Iterate over the elements of each floor, and push each name into the new `roster` array.

```
Expected result:
=> ["Aaron", "Agamemnon", "Bob", "Blob", "Catherine", etc ... ]
```


- Susan is neurotic and wants a list only of the occupants in the buildings array who live on an even-numbered index. She wants the names to be reversed. She also wants the names cased and capitalized properly as if they were not reversed. Example: "Aaron" would become "Noraa". Iterate over the buildings array and put the valid entries into a new array called `neurosis`. 

```
Expected result:

=> ["Noraa", "Nonmemaga", "Enirehtac", "Torrac", "Sirhc", "Aniretake", "Enob-woble", "Anitsug"]

```

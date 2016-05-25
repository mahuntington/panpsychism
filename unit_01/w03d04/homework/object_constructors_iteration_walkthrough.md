### Object Constructors and Iteration, Walkthrough


1. Make an array called `fearNames` and put in five strings of technical fear names, eg. "Deipnophobia".

2. Make an array called 'fearDescriptions' and put in five descriptions that match the fears in `fearNames`. If "Deipnophobia" comes first in `fearNames`, the description for it: "An abnormal fear of dining and dinner conversation." comes first in `fearDescriptions`.

3. Make an object constructor function called `Fear`. A Fear will take two parameters, `name` and `description`. The properties of a Fear will use the `this` keyword.

4. Make an empty array called `fearObjects`.

5. Using a for loop, iterate over the `fearNames` array. Use the keyword `new` to make a new Fear object and push that newly constructed Fear into `fearObjects`. A new Fear should have both a name and a description from the `fearNames` and `fearDescriptions` arrays. (You do not need a nested loop).

6. console.log the `fearObjects` array. You should see five Fear objects each with the applicable name and description.

7. That's it. You did it. That's ... yeah it's over. You generated many objects using an object constructor function by means of iteration.
// Set up your express dependency here:
// >>



// Require the poke_array.js file here.
// Save it to a variable called data
// >>



// Add a listener for port 3000:
// >>



// ROUTES:
app.get('/', function(req, res) {

	res.send('Go to /pokemon to see how many pokemons there are');

});


// Make a GET route '/pokemon' that will res.send a message:
// The message should tell the user the length of the pokemon array.
// >> 





// Make a GET route '/pokemon/index/:index' that will res.send a specific 
// pokemon's data. Use the value in req.params.index to use as the index of the 
// element of the array to display.
//
// Example: a user goes to '/pokemon/index/0' in the browser and all the JSON data 
// for Bulbasaur (the pokemon at index 0) will be displayed.
// >>





// Make a GET route '/pokemon/name/:name' that will res.send a specific 
// pokemon's data according to the pokemon's name. You will need to loop through the 
// array and send the element whose name value is equivalent to the 
// name sent through in req.params.name.
//
// Example: a user goes to '/pokemon/name/Charizard' in the browser and all the 
// JSON data for Charizard will be displayed.
// >>





// Make a GET route '/pokemon/stats' that will res.send an array of objects 
// of all of the stats for all of the pokemon.
//
// Example: a user goes to '/pokemon/stats' in the browser and they will see an
// array, and the array will contain all the stats for
// the first pokemon in an object, and under that, the stats for the 
// second pokemon in an object, etc.
//
// Hint: You won't have to make any empty objects but you might want to
// make an empty array for to push objects in.
// 
// Bearing in mind, the client can only accept one res.send.
// >>







// BONUS

// In your '/pokemon/name/:name' route, add an *else* statement that will display
// a different message if the name does not match any names in the array.
// If you don't get the results you anticipated, figure out why not.





// SET UP EXPRESS


// dummy data:
var pokemon = [
			   {name: "Bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"},
			   {name: "Ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.jpg"},
    		   {name: "Venusaur", img: "http://img.pokemondb.net/artwork/venusaur.jpg"},
    	       {name: "Charmander", img: "http://img.pokemondb.net/artwork/charmander.jpg"},
    		   {name: "Charizard", img: "http://img.pokemondb.net/artwork/charizard.jpg"},
    		   {name: "Squirtle", img: "http://img.pokemondb.net/artwork/squirtle.jpg"},
    		   {name: "Wartortle", img: "http://img.pokemondb.net/artwork/wartortle.jpg"}
			  ];

// app.listen on port 3000


// app.get '/', and send all the data to the 'index.ejs' view
// >> the index.ejs view will display all the names.


// app.get '/:id', and send the specific pokemon's data to be rendered 
// on the 'show.ejs' view. In this case, the :id will be used to refer to 
// the index of the pokemon in the pokemon.js array. Remember req.params.
// >> the show.ejs view will show both the pokemon's name and its image.



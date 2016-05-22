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


var neurosis = [];

for (var i=0; i < building.length; i++) {

	if (i % 2 === 0) {

		for (var j=0; j < building[i].length; j++) {

			var reversed = building[i][j].split('').reverse().join('');
			var lowerCased = reversed.toLowerCase();
			var result = lowerCased[0].toUpperCase() + lowerCased.slice(1);

			neurosis.push(result);

		}

	}

}

console.log(neurosis);




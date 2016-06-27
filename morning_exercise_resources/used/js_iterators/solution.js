console.log('w');


var sheepShearers = [
    {
        name: "Tim",
        age: 20,
        sheepCount: 18
    },
    {
        name: "C3PO",
        age: 200,
        sheepCount: 320
    },
    {
        name: "Cousin It",
        age: Infinity,
        sheepCount: 2900
    }
];


var total = sheepShearers
            .map(function(item) {
            	return item.sheepCount;
            })
            .reduce(function(sum, num) {
            	return sum += num;
            });

console.log(total);
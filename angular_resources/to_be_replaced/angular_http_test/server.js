var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    fs = require('fs');


app.listen(3000);

var data = require('./world_bank_2.js');

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.sendfile('/');
});

app.get('/json', function(req, res) {
	
	// var countries = {}

	// for (var i=0; i < data.length; i++) {
	// 	countries[data[i].countryname] = 0
	// }

	// for (var i=0; i < data.length; i++) {
	// 	countries[data[i].countryname]++
	// }

	// console.log({ length: Object.keys(countries).length, data: countries });

	
	res.send(data);
});

app.get('/json/:index', function(req, res) {
	res.send(data[req.params.index]);
});


var writeFile = function() {
	console.log(data.length);
	var count = 0;
	var stream = fs.createWriteStream("world_bank_2.js");
	stream.once('open', function(fd) { 
		for (var i=0; i < data.length; i++) {
			if (("countryname" in data[i]) && ("project_abstract" in data[i]) && ("cdata" in data[i].project_abstract) && ("project_name" in data[i]) && ("url" in data[i]) && ("totalcommamt" in data[i])) {				
				stream.write('{ countryname: "' + data[i].countryname + '", project_abstract: "' + data[i].project_abstract.cdata + '", project_name: "' + data[i].project_name + '", url: "' + data[i].url + '", totalcommamt: "' + data[i].totalcommamt + '"},\n');
				console.log(i);
				count++
			}
		}
		stream.end();
	});
	console.log('NUM: ', count);
}






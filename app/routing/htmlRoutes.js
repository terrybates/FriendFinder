	//This is the path dependency.	
var path = require('path');

module.exports = function(app){
	// Basic route that sends the user first to the Home Page
	app.get('/', function(req, res){
  		res.sendFile(path.join(__dirname, '/../public/home.html'));
	})

	// This take you to the survey.
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// If no matching route is found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

};








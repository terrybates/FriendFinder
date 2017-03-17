


// Dependencies
//-----------------------------
var friendsData = require('../data/friends.js');

var path = require('path');

// ============================
// ROUTING
// ============================

module.exports = function(app){

  app.get('/api/friends', function(req, res){
    res.json(friendsData);
  });


  app.post('/api/friends', function(req, res){
  
//Setting variables
    var bestMatch = {name:"",
  					photo:"",
  					scores:[]
  					};
    var bestDiff = 1000; 

//Loop through friends array
    for (var i = friendsData.length - 1; i >= 0; i--) {

      console.log("comparing with " + friendsData[i].name);

      var totalDifference = 0;

// Loop through scores and compare
      for (var k = 0; k < 10; k++ ){
        
        console.log("someone did " + friendsData[i].scores[k]);
        console.log("you entered " +  req.body.scores[k]);
        console.log("you differed by " + Math.abs(friendsData[i].scores[k] - req.body.scores[k]) );

        totalDifference = totalDifference + Math.abs(friendsData[i].scores[k] - req.body.scores[k]);

      }
      //This determine the best match 
      if (totalDifference < bestDiff){
        bestDiff = totalDifference;
        bestMatch = i;
      }

      console.log("total difference for " + friendsData[i].name + " is " + totalDifference);

    }
    //best match
    console.log("=============================");
    console.log("best person is " + friendsData[bestMatch].name + " and best score is " + bestDiff);
    console.log("=============================");

    // push in the user input into the friends Array
    friendsData.push(req.body);

    // respond back with the best match
    res.json({name: friendsData[bestMatch].name, photo: friendsData[bestMatch].photo}); 
    
  });

}
var express = require("express");
var path = require("path")
var app = express();

//app.get api/new route
app.post("/api/new", function(req, res) {
  var newUser = req.body;
  newUser= newUser.name.replace(/\s+/g, "").toLowerCase();
  user.push(newUser);
  res.json(newUser);
});

app.post("/api/new", newUser)
.done(function() {
  // console.log(data);
  // create a conditional statement
  var totalScore;
  for (var i=0; i < totalScore.length; i++)
  totalScore++;
  if( 5 < totalScore < 8 ){
  //alert player if new user scores is between 5 and
  alert("we agree on so many things")
  // to be invited into the friends' list.
  //e.g alert(name + "scores within totalScroe of ur result. Would you like to be friends?");
  } else {
  alert("You shouldn't be friends with " + name + " they are weird")
 }
   });


//app.get api/score route
 app.post("/api/friends", function(req, res) {
  //display chosen friends after an alert
});

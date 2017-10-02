var express = require("express");
var path = require("path");
var app = express();
//home route
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/home.html"));
});

//all route
app.get("/all", function(req, res) {
  res.json(user);
});

//survey route
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/survey.html"));
});

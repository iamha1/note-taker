const express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require("./db/db/json");

app.get("/", function(req, res){
   
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  //install npm i

  app.get("/notes", function(req,res) {

  });
  // add res.params.id after the app.delete
  //use splice to remove
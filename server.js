const express = require("express");
const fs
var path = require("path");
//const {uuid} = require("uuidv4")
const app = express();
var PORT = process.env.PORT || 3000;

const db = require("./db/db.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


  
  // app.get("/add", function(req, res) {
  //   res.sendFile(path.join(__dirname, "public/notes.html"));
  // });
//get the database:

  app.get("/notes", function(req, res) {
    var notes = req.params.db;
    console.log(db);
  })

  //get New note:
  let newNote = req.body;

  // save new note: 

  //delete new note:


  
  app.post("/api/db", function(req, res) {
    var newdb = req.body;
    console.log(db);
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });




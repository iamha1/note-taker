const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

const path = require("path");

//const {uuid} = require("uuidv4")

let db = require("./db/db.json");
//console.log(db);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Make local host look in the public folder on client route

app.use(express.static("public"));

//API route
app.get("/api/notes", function (req, res) {
  res.json(db);
});

//HTML route

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

//get the database:

// app.get("/notes", function(req, res) {
//   var notes = req.params.db;
//   console.log(db);
// })

//get New note:
//let newNote = req.body;

// save new note: 


app.post("/api/notes", function (req, res) {
  var newdb = req.body;
  //console.log(db);
  db.push(newdb);
  req.body.id = db.length;
  let storeDb = JSON.stringify(db);
  fs.writeFile(("./db/db.json"), storeDb, function (err, data) {
    if (err) throw err;
  })
});

//delete new note:

app.delete("/api/notes/:id", function (req, res) {
  var chosen = parseInt(req.params.id);
  //console.log(chosen);
  for (var i = 0; i < db.length; i++) {
    if (chosen === db[i].id) {
      db.splice(i, 1);
    }
    for (let i = 0; i < db.length; i++) {
      db[i].id = 1 + i;

    }
  }

  // fs.writeFile(".db/db.json", JSON.stringify(db), "utf8", function (err) {
    fs.writeFile((".db/db.json"), JSON.stringify(db), function (err) {
      if (err) {
        throw err;
      }
    })
    return res.json(false);

  });


  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });

  app.post('api/notes', function (req, res) {
    var newNote = req.body;
    res.json(newNote);
  });

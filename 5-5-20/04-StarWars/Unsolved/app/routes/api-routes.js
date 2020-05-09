// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Sequelize = require("../model/character.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function(req, res) {

    Sequelize.findALL({}).then(function(results){
      res.json(results);
  });
});

// If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {
    
    console.log("Character Data:")
    console.log(req.body)

  

    // Take the request...
    var character = req.body;
    Character.create({
      routeName: character.routeName,
      name: character.name,
      role: character.role,
      age: character.age,
      forcePoints: character.forcePoints
    }).then(function(results){
      res.end();
    });
  });
};

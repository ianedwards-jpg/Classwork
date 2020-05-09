// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
var Sequelize = require("sequelize");

// Setting up our connection information
var sequelize = new Sequelize("starwars", "root", "L0u81W@72ibQ", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
  }
});

module.exports = sequelize;

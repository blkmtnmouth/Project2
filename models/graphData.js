// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");


// create model to match up with database


// Syncs with DB
Graph.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Graph;

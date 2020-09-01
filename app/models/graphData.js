// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
const sequelize = require("../config/connection.js");


// create model to match up with database
const Graph = sequelize.define("graph", {
  //routeName saved as a string
  routeName: Sequelize.STRING,
  //Data Set Label saved as String
  dataSet: Sequelize.STRING,
  //X-axis points are technically labels, so string
  xAxis: Sequelize.STRING,
  //Y-axis values are numbers (not necessarily whole)
  yAxis: Sequelize.INTEGER,

  tableName: Sequelize.STRING
})

// Syncs with DB
Graph.sync();

// Makes the Chart Model available for other files (will also create a table)
module.exports = Graph;

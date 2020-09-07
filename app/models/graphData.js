
// Makes the Chart Model available for other files (will also create a table)
module.exports = function(sequelize, DataTypes) {
  const Graph = sequelize.define("Graph", {
    xVal: DataTypes.STRING,

    yVal: DataTypes.STRING,

    name: DataTypes.STRING
  });
  return Graph;
};


// Makes the Chart Model available for other files (will also create a table)
module.exports = function(sequelize, DataTypes) {
  const Graph = sequelize.define("Graph", {
    xVal: DataTypes.STRING,

    yVal: {
      type: DataTypes.STRING,
      defaultValue: 0
    },

    name: DataTypes.STRING
  });
  return Graph;
};

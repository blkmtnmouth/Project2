//Dependency
const Graph = require("../models/graphData.js");

//Routes
//Get request
module.exports = function(app) {
  app.get("/api/graph"), function(req, res) {
    Graph.findAll({})
      .then(function(res) {
        res.json(res);
      })  
    };
//Post request
  app.post("api/graph", function(req, res) {
      let graph = req.body;
      let routeName = graph.name.replace(/\s+/g, "").toLowerCase();

      Graph.create({
          routename: routeName,
          dataSet: graph.dataSet,
          xAxis: graph.xAxis,
          yAxis: graph.yAxis
      });
      res.status(204).end();
  })
  //Delete all request
  app.delete("/api/:graph", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Graph.destroy({
      truncate: true
    }).then(function(dbGraph) {
      res.json(dbGraph);
    });

  });  
}

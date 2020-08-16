//Dependency
const Graph = require("../models/graphData.js");

//Routes
//Get request
module.exports = function(app) {
  app.get("/api/:graph?"), function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      })  
    }
//Post request
  app.post("api/new", function(req, res) {
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
}
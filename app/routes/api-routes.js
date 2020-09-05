//Dependency
const db = require("../models");
const router = require('express').Router();

// Get request to send all data from database
router.get("/api/graph", (req, res) => {
  db.Graph.findAll({})
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/graph/:name", (req, res) => {
  db.Graph.findAll({
    where: {
      name: req.params.name
    }
  })
  .then(data => {
    console.log(data);
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

// Post request
router.post("/api/graph/", ({ body }, res) => {
  let bulkData = [];
  for (i = 0; i < body.xVal.length; i++) {
    bulkData.push({
      name: body.name,
      xVal: body.xVal[i],
      yVal: body.yVal[i]
    });
  };

  db.Graph.bulkCreate(bulkData)
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router

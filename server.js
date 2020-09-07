const express = require("express");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./app/models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));
app.use(require("./app/routes/api-routes.js"));
// Starts the server to begin listening
// =============================================================
//db.sequelize.sync({force: true});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
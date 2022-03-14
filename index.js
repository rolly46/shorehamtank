// const port = process.env.PORT || 5000

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
const dbb = require('./db');

require('dotenv').config()


var app = express();
app.use(express.static(__dirname + "/src"));
app.use(bodyParser.json());





async function start() {

  dbb.connect(() => {
    // Initialize the app.
    var server = app.listen(process.env.PORT || 5000, function () {
      var port = server.address().port;
      console.log("App now running on port", port);
    });


    //  connect to db (maybe get inital data)
  });





  // ENDPOINTS

  app.get("/tanklatest", function (req, res) {
    res.send('ok')
  });

  app.get("/tankday", function (req, res) {
  });

  app.get("/tankweek", function (req, res) {
  });

  app.get("/tankmonth", function (req, res) {
  });

  app.get("/tankyear", function (req, res) {
  });

  app.post("/uploadtankmeasurement", function (req, res) {

    const dbinstance = dbb.get()
    const database = dbinstance.db("ShorehamDB");
    const collection = database.collection('shedTankLevel');
    collection.insertOne({ timestamp: new Date(), currentlevel: 4 }, ((err, result) => {
      res.send('ok');
    }));

  });

}

start().catch(console.error);
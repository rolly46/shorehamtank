// const port = process.env.PORT || 5000

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()



var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(express.static(__dirname + "/src"));
app.use(bodyParser.json());


async function main(){

  // get initial data
  const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  client.connect(err => {
    // const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });

  // Initialize the app.
  var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

}

main().catch(console.error);


// ENDPOINTS

app.get("/tanklatest", function(req, res) {
});

app.get("/tankday", function(req, res) {
});

app.get("/tankweek", function(req, res) {
});

app.get("/tankmonth", function(req, res) {
});

app.get("/tankyear", function(req, res) {
});

app.post("/uploadtankmeasurement", function(req, res) {
});


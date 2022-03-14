// https://mrvautin.com/re-use-mongodb-database-connection-in-routes/

const mongoClient = require('mongodb').MongoClient;
require('dotenv').config()
let mongodb;

function connect(callback){
    mongoClient.connect(process.env.MONGODB_URI, (err, dbret) => {
        mongodb = dbret;
        callback();
        console.log(err)
    });
}
function get(){
    return mongodb;
}

function close(){
    mongodb.close();
}

module.exports = {
    connect,
    get,
    close
};
require("dotenv").config();
const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;

let dbConnection;
const connectToDb = (cb) => {
  MongoClient.connect(uri)
    .then((client) => {
      dbConnection = client.db();
      return cb();
    })
    .catch((err) => {
      console.log(err);
      return cb(err);
    });
};

const getDb = () => dbConnection;

// connect to db and start server

module.exports = { getDb, connectToDb };

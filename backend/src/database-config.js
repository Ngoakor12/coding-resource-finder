require("dotenv").config();
const { MongoClient } = require("mongodb");

// for local development
const localUri =
  "mongodb+srv://local:local@cluster0.7khoml9.mongodb.net/coding-resource-finder?retryWrites=true&w=majority";

const uri = localUri || process.env.MONGO_URI;

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

module.exports = { getDb, connectToDb };

require("dotenv").config();
const { MongoClient } = require("mongodb");

// for local development
const localUri =
  "mongodb+srv://local:local@cluster0.7khoml9.mongodb.net/coding-resource-finder?retryWrites=true&w=majority";

const uri = process.env.MONGO_URI || localUri;

let dbConnection;

const connectToDb = async () => {
  console.log("---In connectToDb---");
  try {
    const client = await MongoClient.connect(uri);
    return client; // Return the MongoDB client object.
  } catch (err) {
    console.error("Error connecting to the database:", err);
    throw err; // Rethrow the error to handle it in the caller.
  }
};
const closeDb = (client) => {
  console.log("---In closeDb---");
  if (client) {
    client.close();
    console.log("Database connection closed.");
  }
};

const getDb = () => dbConnection;

module.exports = { getDb, connectToDb, closeDb };

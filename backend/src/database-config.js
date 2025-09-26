require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

// for local development
const localUri =
  "mongodb+srv://local:local@cluster0.7khoml9.mongodb.net/coding-resource-finder?retryWrites=true&w=majority";

const uri = process.env.MONGO_URI || localUri;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const connectToDb = async () => {
  console.log("---In connectToDb---");
  try {
    const database = client.db();
    return database;
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

module.exports = { connectToDb, closeDb };

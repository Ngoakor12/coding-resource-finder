require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");

// for local development
const localUri =
  "mongodb+srv://ngoakor12:ngoakor12@cluster0.tmzvtgn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const uri = process.env.MONGO_URI || localUri;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let dbConnection;

const connectToDb = async () => {
  console.log("---In connectToDb---");
  try {
    const database = client.db("coding-resource-finder");
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

const getDb = () => dbConnection;

// connectToDb();

module.exports = { getDb, connectToDb, closeDb };

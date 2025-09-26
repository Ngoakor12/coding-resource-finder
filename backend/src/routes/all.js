const allRouter = require("express").Router();
const { getPageData } = require("../format-resources");
const { getResourcesFromDB } = require("../get-resources-from-database");
const { connectToDb, closeDb } = require("../database-config");

let dbClient; // Global variable to store the MongoDB client.

// Connect to the database when application/router starts.
(async () => {
  try {
    dbClient = await connectToDb();
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
})();

// Middleware to ensure the database client is available in route handlers.
const withDb = (req, res, next) => {
  req.dbClient = dbClient;
  next();
};

allRouter.get("/", withDb, async (req, res) => {
  try {
    const db = req.dbClient;
    const resources = await getResourcesFromDB(db);
    res.status(200).json(resources);
  } catch (error) {
    res.json(error);
  }
});

allRouter.get("/:page", withDb, async (req, res) => {
  try {
    const db = req.dbClient;
    const resources = await getResourcesFromDB(db);
    const data = getPageData(resources.data, req.params.page);
    res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
});

// Close the database connection when application exits.
process.on("exit", () => {
  if (dbClient) {
    closeDb(dbClient);
  }
});

module.exports = allRouter;

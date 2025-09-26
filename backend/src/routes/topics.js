const topicsRouter = require("express").Router();
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

topicsRouter.get("/", withDb, async (req, res) => {
  try {
    const db = req.dbClient;
    const resources = await getResourcesFromDB(db);
    const topics = resources.data.filter(
      (resource) => resource.type === "topic"
    );
    const topicsData = { num_of_topics: topics.length, data: topics };
    res.status(200).json(topicsData);
  } catch (error) {
    res.json(error);
  }
});

topicsRouter.get("/:page", withDb, async (req, res) => {
  try {
    const db = req.dbClient;
    const resources = await getResourcesFromDB(db);
    const topics = resources.data.filter(
      (resource) => resource.type === "topic"
    );
    const topicsData = { num_of_topics: topics.length, data: topics };
    const data = getPageData(topicsData.data, req.params.page);
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

module.exports = topicsRouter;

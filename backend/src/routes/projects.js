const projectsRouter = require("express").Router();
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

projectsRouter.get("/", withDb, async (req, res) => {
  try {
    const db = req.dbClient;
    const resources = await getResourcesFromDB(db);
    const projects = resources.data.filter(
      (resource) => resource.type === "project"
    );
    const projectsData = { num_of_projects: projects.length, data: projects };
    res.status(200).json(projectsData);
  } catch (error) {
    res.json(error);
  }
});

projectsRouter.get("/:page", withDb, async (req, res) => {
  try {
    const db = req.dbClient;
    const resources = await getResourcesFromDB(db);
    const projects = resources.data.filter(
      (resource) => resource.type === "project"
    );
    const projectsData = { num_of_projects: projects.length, data: projects };
    const data = getPageData(projectsData.data, req.params.page);
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

module.exports = projectsRouter;

const projectsRouter = require("express").Router();

const { getPageData } = require("../format-resources");
const { getResourcesFromDB } = require("../get-resources-from-database");
const { connectToDb, getDb } = require("../database-config");

let db;
connectToDb((err) => {
  if (!err) {
    db = getDb();
  }
});

// get all available projects
projectsRouter.get("/", async (_, res) => {
  try {
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

// get specific project pages
projectsRouter.get("/:page", async ({ params: { page } }, res) => {
  try {
    const resources = await getResourcesFromDB(db);
    const projects = resources.data.filter(
      (resource) => resource.type === "project"
    );
    const projectsData = { num_of_projects: projects.length, data: projects };
    const data = getPageData(projectsData.data, page);
    res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = projectsRouter;

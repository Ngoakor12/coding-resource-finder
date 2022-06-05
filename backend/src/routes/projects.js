const express = require("express");
const projectsRouter = express.Router();
const { getPageData } = require("../format-resources");
const { getResourcesFromDB } = require("../get-resources-from-database");

const customError = {
  message: "Error: Please double check that the URL is correct.",
};

// get all available projects
projectsRouter.get("/", async (req, res) => {
  try {
    const resources = await getResourcesFromDB();
    const projects = resources.data.filter(
      (resource) => resource.type === "project"
    );
    const projectsData = { num_of_projects: projects.length, data: projects };
    res.json(projectsData || customError);
  } catch (error) {
    throw error;
  }
});

// get specific project pages
projectsRouter.get("/:page", async (req, res) => {
  const page = req.params.page;
  try {
    const resources = await getResourcesFromDB();
    const projects = resources.data.filter(
      (resource) => resource.type === "project"
    );
    const projectsData = { num_of_projects: projects.length, data: projects };
    const data = await getPageData(projectsData.data, page);
    res.json(data || customError);
  } catch (error) {
    throw error;
  }
});

module.exports = projectsRouter;

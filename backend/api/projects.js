const projectsRouter = require("express").Router();

const { getPageData } = require("../../format-resources");
const { getResourcesFromDB } = require("../../get-resources-from-database");
const { isPageNumber } = require("../../utils");

// get all available projects
projectsRouter.get("/api/projects", async (_, res) => {
  try {
    const resources = await getResourcesFromDB();
    const projects = resources.data.filter(
      (resource) => resource.type === "project"
    );
    const projectsData = { num_of_projects: projects.length, data: projects };
    res.status(200).json(projectsData);
  } catch (error) {
    throw error;
  }
});

// get specific project pages
projectsRouter.get("/api/projects:page", async ({ params: { page } }, res) => {
  if (!isPageNumber(page))
    return res
      .status(400)
      .json({ message: `parameter ${page} should be a valid number` });

  try {
    const resources = await getResourcesFromDB();
    const projects = resources.data.filter(
      (resource) => resource.type === "project"
    );
    const projectsData = { num_of_projects: projects.length, data: projects };
    const data = await getPageData(projectsData.data, page);
    res.status(200).json(data);
  } catch (error) {
    throw error;
  }
});

module.exports = projectsRouter;

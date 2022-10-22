const allRouter = require("express").Router();

const { getPageData } = require("../format-resources");
const { getResourcesFromDB } = require("../get-resources-from-database");

// get all topics and projects
allRouter.get("/", async (_, res) => {
  try {
    const resources = await getResourcesFromDB();
    res.status(200).json(resources);
  } catch (error) {
    res.json(error);
  }
});

// get specific resource
allRouter.get("/:page", async ({ params: { page } }, res) => {
  try {
    const resources = await getResourcesFromDB();
    const data = getPageData(resources.data, page);
    res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = allRouter;

const allRouter = require("express").Router();

const { getPageData } = require("./format-resources");
const { getResourcesFromDB } = require("./get-resources-from-database");
const { isPageNumber } = require("./utils");

// get all topics and projects
allRouter.get("/api/all", async (_, res) => {
  try {
    const resources = await getResourcesFromDB();
    res.status(200).json(resources);
  } catch (error) {
    throw error;
  }
});

// get specific resource
allRouter.get("/api/all/:page", async ({ params: { page } }, res) => {
  if (!isPageNumber(page))
    return res
      .status(400)
      .json({ message: `parameter ${page} should be a valid number` });

  try {
    const resources = await getResourcesFromDB();
    const data = await getPageData(resources.data, page);
    res.status(200).json(data);
  } catch (error) {
    throw error;
  }
});

module.exports = allRouter;

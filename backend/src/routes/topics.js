const topicsRouter = require("express").Router();

const { getPageData } = require("../format-resources");
const { getResourcesFromDB } = require("../get-resources-from-database");
const { isPageNumber } = require("../utils");

// get all available topics
topicsRouter.get("/", async (_, res) => {
  try {
    const resources = await getResourcesFromDB();
    const topics = resources.data.filter(
      (resource) => resource.type === "topic"
    );
    const topicsData = { num_of_topics: topics.length, data: topics };
    res.status(200).json(topicsData);
  } catch (error) {
    res.json(error);
  }
});

// get specific topic pages
topicsRouter.get("/:page", async ({ params: { page } }, res) => {
  if (!isPageNumber(page))
    return res
      .status(400)
      .json({ message: `parameter ${page} should be a valid number` });

  try {
    const resources = await getResourcesFromDB();
    const topics = resources.data.filter(
      (resource) => resource.type === "topic"
    );
    const topicsData = { num_of_topics: topics.length, data: topics };
    const data = await getPageData(topicsData.data, page);
    res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = topicsRouter;

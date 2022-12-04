const topicsRouter = require("express").Router();

const { getPageData } = require("../format-resources");
const { getResourcesFromDB } = require("../get-resources-from-database");
const { connectToDb, getDb } = require("../database-config");

let db;
connectToDb((err) => {
  if (!err) {
    db = getDb();
  }
});

// get all available topics
topicsRouter.get("/", async (_, res) => {
  try {
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

// get specific topic pages
topicsRouter.get("/:page", async ({ params: { page } }, res) => {
  try {
    const resources = await getResourcesFromDB(db);
    const topics = resources.data.filter(
      (resource) => resource.type === "topic"
    );
    const topicsData = { num_of_topics: topics.length, data: topics };
    const data = getPageData(topicsData.data, page);
    res.status(200).json(data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = topicsRouter;

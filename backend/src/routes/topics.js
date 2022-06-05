const express = require("express");
const topicsRouter = express.Router();
const { getPageData } = require("../format-resources");
const { getResourcesFromDB } = require("../get-resources-from-database");

const customError = {
  message: "Error: Please double check that the URL is correct.",
};

// get all available topics
topicsRouter.get("/", async (req, res) => {
  try {
    const resources = await getResourcesFromDB();
    const topics = resources.data.filter(
      (resource) => resource.type === "topic"
    );
    const topicsData = { num_of_topics: topics.length, data: topics };
    res.json(topicsData || customError);
  } catch (error) {
    throw error;
  }
});

// get specific topic pages
topicsRouter.get("/:page", async (req, res) => {
  const page = req.params.page;
  try {
    const resources = await getResourcesFromDB();
    const topics = resources.data.filter(
      (resource) => resource.type === "topic"
    );
    const topicsData = { num_of_topics: topics.length, data: topics };
    const data = await getPageData(topicsData.data, page);
    res.json(data || customError);
  } catch (error) {
    throw error;
  }
});

module.exports = topicsRouter;

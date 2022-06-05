const express = require("express");
const allRouter = express.Router();
const { getPageData } = require("../format-resources");
const { getResourcesFromDB } = require("../get-resources-from-database");

const customError = {
  message: "Error: Please double check that the URL is correct.",
};

// get all topics and projects
allRouter.get("/", async (req, res) => {
  try {
    const resources = await getResourcesFromDB();
    res.json(resources || customError);
  } catch (error) {
    throw error;
  }
});

// get specific resource
allRouter.get("/:page", async (req, res) => {
  const page = req.params.page;
  try {
    const resources = await getResourcesFromDB();
    const data = await getPageData(resources.data, page);
    res.json(data || customError);
  } catch (error) {
    throw error;
  }
});

module.exports = allRouter;

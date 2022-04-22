const express = require("express");
const cors = require("cors");
const app = express();
const { getPageData } = require("./format-resources");
const { getResourcesFromDB } = require("./get-resources-from-database");
app.use(cors());

const PORT = 2856;
const LOCAL_URL = `http://localhost:${PORT}/`;
const PROD_URL = `https://coding-resource-finder-api.herokuapp.com/`;
const BASE_URL = PROD_URL;

const customError = {
  message: "Error: Please double check that the URL is correct.",
};

app.get("/", (req, res) => {
  res.json({
    resources: `${BASE_URL}all`,
    topics: `${BASE_URL}all/topics`,
    projects: `${BASE_URL}all/projects`,
    resources_page: `${BASE_URL}all/{page}`,
    topics_page: `${BASE_URL}all/topics/{page}`,
    projects_page: `${BASE_URL}all/projects/{page}`,
  });
});

// get all topics and projects
app.get("/all", async (req, res) => {
  try {
    const resources = await getResourcesFromDB();
    res.json(resources || customError);
  } catch (error) {
    throw error;
  }
});

// get all available topics
app.get("/all/topics", async (req, res) => {
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

// get all available projects
app.get("/all/projects", async (req, res) => {
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

// get specific resource
app.get("/all/:page", async (req, res) => {
  const page = req.params.page;
  try {
    const resources = await getResourcesFromDB();
    const data = await getPageData(resources.data, page);
    res.json(data || customError);
  } catch (error) {
    throw error;
  }
});

// get specific topic pages
app.get("/all/topics/:page", async (req, res) => {
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

// get specific project pages
app.get("/all/projects/:page", async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});

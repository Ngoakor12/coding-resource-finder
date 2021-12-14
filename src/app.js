const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 2856;
const {
  getResources,
  getTopics,
  getProjects,
  getPageData,
} = require("./resources");

app.use(cors());

const customError = {
  message: "Error: Please double check that the URL is correct.",
};

app.get("/", (req, res) => {
  res.json({
    all_resources: "https://acn-resource-finder-api.herokuapp.com/all",
    all_topics: "https://acn-resource-finder-api.herokuapp.com/topics",
    all_projects: "https://acn-resource-finder-api.herokuapp.com/projects",
    specific_page_from_all_resources:
      "https://acn-resource-finder-api.herokuapp.com/all/{page}",
    specific_page_from_all_topics:
      "https://acn-resource-finder-api.herokuapp.com/all/topics/{page}",
    specific_page_from_all_projects:
      "https://acn-resource-finder-api.herokuapp.com/all/projects/{page}",
  });
});

// get all topics and projects
app.get("/all", async (req, res) => {
  try {
    const resources = await getResources();
    res.json({ number_of_resources: resources.length, data: resources });
  } catch (error) {
    throw error;
  }
});

// get all available topics
app.get("/all/topics", async (req, res) => {
  try {
    const topics = await getTopics();
    res.json({ num_of_topics: topics.length, data: topics });
  } catch (error) {
    throw error;
  }
});

// get all available projects
app.get("/all/projects", async (req, res) => {
  try {
    const projects = await getProjects();
    res.json({ num_of_projects: projects.length, data: projects });
  } catch (error) {
    throw error;
  }
});

// get specific resource
app.get("/all/:page", async (req, res) => {
  const page = req.params.page;
  try {
    const data = await getPageData(getResources, page);
    res.json(data ? { current_page: Number(page), data: data } : customError);
  } catch (error) {
    throw error;
  }
});

// get specific topic pages
app.get("/all/topics/:page", async (req, res) => {
  const page = req.params.page;
  try {
    const data = await getPageData(getTopics, page);
    res.json(data ? { current_page: Number(page), data: data } : customError);
  } catch (error) {
    throw error;
  }
});

// get specific project pages
app.get("/all/projects/:page", async (req, res) => {
  const page = req.params.page;
  try {
    const data = await getPageData(getProjects, page);
    res.json(data ? { current_page: Number(page), data: data } : customError);
  } catch (error) {
    throw error;
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

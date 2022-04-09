// const express = require("express");
// const cors = require("cors");
// const app = express();
// const port = process.env.PORT || 2856;
// const {
//   getAllResources,
//   getTopicsFromACN,
//   getProjectsFromACN,
//   getPageData,
// } = require("./resources");

// app.use(cors());

// const customError = {
//   message: "Error: Please double check that the URL is correct.",
// };

// app.get("/", (req, res) => {
//   res.json({
//     all_resources: "https://coding-resource-finder-api.herokuapp.com/all",
//     all_topics: "https://coding-resource-finder-api.herokuapp.com/all/topics",
//     all_projects:
//       "https://coding-resource-finder-api.herokuapp.com/all/projects",
//     all_resources_page:
//       "https://coding-resource-finder-api.herokuapp.com/all/{page}",
//     all_topics_page:
//       "https://coding-resource-finder-api.herokuapp.com/all/topics/{page}",
//     all_projects_page:
//       "https://coding-resource-finder-api.herokuapp.com/all/projects/{page}",
//   });
// });

// // get all topics and projects
// app.get("/all", async (req, res) => {
//   try {
//     const resources = await getAllResources();
//     res.json(resources || customError);
//   } catch (error) {
//     throw error;
//   }
// });

// // get all available topics
// app.get("/all/topics", async (req, res) => {
//   try {
//     const topics = await getTopicsFromACN();
//     res.json(topics || customError);
//   } catch (error) {
//     throw error;
//   }
// });

// // get all available projects
// app.get("/all/projects", async (req, res) => {
//   try {
//     const projects = await getProjectsFromACN();
//     res.json(projects || customError);
//   } catch (error) {
//     throw error;
//   }
// });

// // get specific resource
// app.get("/all/:page", async (req, res) => {
//   const page = req.params.page;
//   try {
//     const data = await getPageData(getAllResources, page);
//     res.json(data || customError);
//   } catch (error) {
//     throw error;
//   }
// });

// // get specific topic pages
// app.get("/all/topics/:page", async (req, res) => {
//   const page = req.params.page;
//   try {
//     const data = await getPageData(getTopicsFromACN, page);
//     res.json(data || customError);
//   } catch (error) {
//     throw error;
//   }
// });

// // get specific project pages
// app.get("/all/projects/:page", async (req, res) => {
//   const page = req.params.page;
//   try {
//     const data = await getPageData(getProjectsFromACN, page);
//     res.json(data || customError);
//   } catch (error) {
//     throw error;
//   }
// });

// app.listen(port, () => {
//   console.log(`App running at http://localhost:${port}`);
// });

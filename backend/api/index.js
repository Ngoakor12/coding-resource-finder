const app = require("express")();
const cors = require("cors");

// const { getPageData } = require("../format-resources");
// const { getResourcesFromDB } = require("../get-resources-from-database");
// const { isPageNumber } = require("./utils");
const { API_BASE_URL, PORT } = require("./constants");
// const allRoutes = require("./routes/all");
// const topicsRoutes = require("./routes/topics");
// const projectsRoutes = require("./routes/projects");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (_, res) => {
  res.status(200).json({
    resources: `${API_BASE_URL}/all`,
    topics: `${API_BASE_URL}/topics`,
    projects: `${API_BASE_URL}/projects`,
    resources_page: `${API_BASE_URL}/all/{page}`,
    topics_page: `${API_BASE_URL}/topics/{page}`,
    projects_page: `${API_BASE_URL}/projects/{page}`,
  });
});

app.get("/api", (_, res) => {
  res.status(200).json({
    resources: `${API_BASE_URL}/all`,
    topics: `${API_BASE_URL}/topics`,
    projects: `${API_BASE_URL}/projects`,
    resources_page: `${API_BASE_URL}/all/{page}`,
    topics_page: `${API_BASE_URL}/topics/{page}`,
    projects_page: `${API_BASE_URL}/projects/{page}`,
  });
});

// // get all topics and projects
// app.get("/api/all", async (_, res) => {
//   try {
//     const resources = await getResourcesFromDB();
//     res.status(200).json(resources);
//   } catch (error) {
//     throw error;
//   }
// });

// // get specific resource
// app.get("/api/all/:page", async ({ params: { page } }, res) => {
//   if (!isPageNumber(page))
//     return res
//       .status(400)
//       .json({ message: `parameter ${page} should be a valid number` });

//   try {
//     const resources = await getResourcesFromDB();
//     const data = await getPageData(resources.data, page);
//     res.status(200).json(data);
//   } catch (error) {
//     throw error;
//   }
// });

// // get all available topics
// app.get("/api/topics", async (_, res) => {
//   try {
//     const resources = await getResourcesFromDB();
//     const topics = resources.data.filter(
//       (resource) => resource.type === "topic"
//     );
//     const topicsData = { num_of_topics: topics.length, data: topics };
//     res.status(200).json(topicsData);
//   } catch (error) {
//     throw error;
//   }
// });

// // get specific topic pages
// app.get("/api/topics/:page", async ({ params: { page } }, res) => {
//   if (!isPageNumber(page))
//     return res
//       .status(400)
//       .json({ message: `parameter ${page} should be a valid number` });

//   try {
//     const resources = await getResourcesFromDB();
//     const topics = resources.data.filter(
//       (resource) => resource.type === "topic"
//     );
//     const topicsData = { num_of_topics: topics.length, data: topics };
//     const data = await getPageData(topicsData.data, page);
//     res.status(200).json(data);
//   } catch (error) {
//     throw error;
//   }
// });

// // get all available projects
// app.get("/api/projects", async (_, res) => {
//   try {
//     const resources = await getResourcesFromDB();
//     const projects = resources.data.filter(
//       (resource) => resource.type === "project"
//     );
//     const projectsData = { num_of_projects: projects.length, data: projects };
//     res.status(200).json(projectsData);
//   } catch (error) {
//     throw error;
//   }
// });

// // get specific project pages
// app.get("/api/projects/:page", async ({ params: { page } }, res) => {
//   if (!isPageNumber(page))
//     return res
//       .status(400)
//       .json({ message: `parameter ${page} should be a valid number` });

//   try {
//     const resources = await getResourcesFromDB();
//     const projects = resources.data.filter(
//       (resource) => resource.type === "project"
//     );
//     const projectsData = { num_of_projects: projects.length, data: projects };
//     const data = await getPageData(projectsData.data, page);
//     res.status(200).json(data);
//   } catch (error) {
//     throw error;
//   }
// });

// app.use("/api/topics", topicsRoutes);
// app.use("/api/projects", projectsRoutes);
// app.use("/api/all", allRoutes);

// swagger
const swaggerUi = require("swagger-ui-express");
const docs = require("../docs");
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(docs));

app.listen(process.env.PORT || PORT, () => {
  console.log(`App running at ${API_BASE_URL}`);
});

module.exports = app;
